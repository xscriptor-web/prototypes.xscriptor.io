"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/hub.module.css";

const SPACING = 72;
const RADIUS = 190;
const STRENGTH = 26;
const SAMPLE = 16;
const MAX_HIGHLIGHT = 0.45;
const MIN_ENERGY = 0.004;

interface RGB {
  r: number;
  g: number;
  b: number;
}

function parseHex(value: string): RGB {
  const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim());
  if (!match) return { r: 226, g: 69, b: 31 };
  let hex = match[1];
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const el = canvas;
    const context = ctx;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let paper = "#f2eee6";
    let ink = "#17130e";
    let line = "rgba(23, 19, 14, 0.14)";
    let accent: RGB = { r: 226, g: 69, b: 31 };

    let targetX = 0;
    let targetY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let energy = 0;
    let targetEnergy = 0;
    let initialized = false;
    let raf = 0;
    let running = false;

    function readColors() {
      const computed = getComputedStyle(document.documentElement);
      paper = computed.getPropertyValue("--hub-paper").trim() || paper;
      ink = computed.getPropertyValue("--hub-ink").trim() || ink;
      line = computed.getPropertyValue("--hub-line").trim() || line;
      accent = parseHex(computed.getPropertyValue("--hub-accent"));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      el.width = Math.round(width * dpr);
      el.height = Math.round(height * dpr);
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
    }

    function influenceAt(position: number, cursor: number) {
      const distance = Math.abs(position - cursor);
      if (distance >= RADIUS) return 0;
      const t = 1 - distance / RADIUS;
      return t * t * (3 - 2 * t);
    }

    function distort(x: number, y: number): [number, number] {
      const dx = x - cursorX;
      const dy = y - cursorY;
      const distance = Math.hypot(dx, dy);
      if (distance >= RADIUS || distance === 0 || energy <= 0) return [x, y];
      const t = 1 - distance / RADIUS;
      const push = t * t * (3 - 2 * t) * STRENGTH * energy;
      return [x + (dx / distance) * push, y + (dy / distance) * push];
    }

    function trace(vertical: boolean, position: number, from: number, to: number) {
      context.moveTo(vertical ? position : from, vertical ? from : position);
      const center = vertical ? cursorY : cursorX;
      const sampleFrom = Math.max(from, center - RADIUS);
      const sampleTo = Math.min(to, center + RADIUS);
      if (sampleFrom < sampleTo) {
        for (let value = sampleFrom + SAMPLE; value < sampleTo; value += SAMPLE) {
          const [x, y] = vertical
            ? distort(position, value)
            : distort(value, position);
          context.lineTo(x, y);
        }
        const [ex, ey] = vertical
          ? distort(position, sampleTo)
          : distort(sampleTo, position);
        context.lineTo(ex, ey);
      }
      if (sampleTo < to) {
        context.lineTo(vertical ? position : to, vertical ? to : position);
      }
    }

    function drawGlow() {
      const cx = width * 0.12;
      const cy = -height * 0.1;
      const radius = Math.max(width, height) * 0.6;
      const gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(
        0,
        `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.09)`
      );
      gradient.addColorStop(
        1,
        `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0)`
      );
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    }

    function activeVerticalLines() {
      const lines: number[] = [];
      for (let x = 0.5; x < width; x += SPACING) {
        if (Math.abs(x - cursorX) < RADIUS) lines.push(x);
      }
      return lines;
    }

    function activeHorizontalLines() {
      const lines: number[] = [];
      for (let y = 0.5; y < height; y += SPACING) {
        if (Math.abs(y - cursorY) < RADIUS) lines.push(y);
      }
      return lines;
    }

    function drawBaseGrid(verticals: number[], horizontals: number[]) {
      context.globalAlpha = 1;
      context.strokeStyle = line;
      context.beginPath();
      for (let x = 0.5; x < width; x += SPACING) {
        if (energy > MIN_ENERGY && Math.abs(x - cursorX) < RADIUS) continue;
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }
      for (let y = 0.5; y < height; y += SPACING) {
        if (energy > MIN_ENERGY && Math.abs(y - cursorY) < RADIUS) continue;
        context.moveTo(0, y);
        context.lineTo(width, y);
      }
      context.stroke();

      if (energy <= MIN_ENERGY) return;

      for (const x of verticals) {
        context.beginPath();
        trace(true, x, 0, height);
        context.stroke();
      }
      for (const y of horizontals) {
        context.beginPath();
        trace(false, y, 0, width);
        context.stroke();
      }
    }

    function drawHighlight(verticals: number[], horizontals: number[]) {
      if (energy <= MIN_ENERGY) return;
      context.strokeStyle = ink;
      for (const x of verticals) {
        context.globalAlpha = influenceAt(x, cursorX) * MAX_HIGHLIGHT * energy;
        context.beginPath();
        trace(true, x, 0, height);
        context.stroke();
      }
      for (const y of horizontals) {
        context.globalAlpha = influenceAt(y, cursorY) * MAX_HIGHLIGHT * energy;
        context.beginPath();
        trace(false, y, 0, width);
        context.stroke();
      }
      context.globalAlpha = 1;
    }

    function draw() {
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      context.fillStyle = paper;
      context.fillRect(0, 0, width, height);
      drawGlow();

      const verticals = activeVerticalLines();
      const horizontals = activeHorizontalLines();
      drawBaseGrid(verticals, horizontals);
      drawHighlight(verticals, horizontals);
    }

    function frame() {
      cursorX += (targetX - cursorX) * 0.2;
      cursorY += (targetY - cursorY) * 0.2;
      energy += (targetEnergy - energy) * 0.1;

      const settled =
        Math.abs(targetX - cursorX) < 0.25 &&
        Math.abs(targetY - cursorY) < 0.25 &&
        Math.abs(targetEnergy - energy) < 0.005;

      if (settled) {
        cursorX = targetX;
        cursorY = targetY;
        energy = targetEnergy;
      }

      draw();

      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (reduced || running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }

    function onPointerMove(event: PointerEvent) {
      targetX = event.clientX;
      targetY = event.clientY;
      targetEnergy = 1;
      if (!initialized) {
        initialized = true;
        cursorX = targetX;
        cursorY = targetY;
      }
      start();
    }

    function onPointerLeave() {
      targetEnergy = 0;
      start();
    }

    function onResize() {
      resize();
      if (!running) draw();
    }

    const themeObserver = new MutationObserver(() => {
      readColors();
      if (!running) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    readColors();
    resize();
    draw();

    window.addEventListener("resize", onResize);
    if (!reduced) {
      window.addEventListener("pointermove", onPointerMove);
      document.addEventListener("mouseleave", onPointerLeave);
      window.addEventListener("blur", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.gridCanvas} aria-hidden="true" />;
}
