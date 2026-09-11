"use client"

import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

const EXIT_MS = 300
const ENTER_MS = 400

type Phase = "idle" | "exiting" | "entering"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>("entering")
  const pendingPath = useRef<string | null>(null)
  const prevPath = useRef(pathname)

  const runExit = useCallback((href: string) => {
    if (pendingPath.current) return

    const currentPath = window.location.pathname.replace(/\/$/, "")
    const targetPath = href.split(/[?#]/)[0].replace(/\/$/, "")
    if (targetPath === currentPath) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    pendingPath.current = href
    setPhase("exiting")
  }, [])

  useEffect(() => {
    if (phase !== "exiting" || !pendingPath.current) return
    const timer = setTimeout(() => {
      router.push(pendingPath.current!)
    }, EXIT_MS)
    return () => clearTimeout(timer)
  }, [phase, router])

  useEffect(() => {
    if (prevPath.current === pathname) return

    prevPath.current = pathname
    pendingPath.current = null
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })

    setPhase("entering")
    const timer = setTimeout(() => setPhase("idle"), ENTER_MS)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    const timer = setTimeout(() => setPhase("idle"), ENTER_MS)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as HTMLElement).closest("a")
      if (!anchor) return
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("/") || href.startsWith("//")) return
      if (href.includes("#")) return
      if (anchor.origin && anchor.origin !== window.location.origin) return

      event.preventDefault()
      runExit(href)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [runExit])

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 pointer-events-none bg-background transition-opacity duration-300 ease-in-out ${
          phase === "idle" ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          phase === "entering" ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  )
}
