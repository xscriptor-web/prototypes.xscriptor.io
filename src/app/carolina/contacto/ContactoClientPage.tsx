"use client";

import { useT } from "@/app/carolina/i18n-provider";
import styles from "@/app/carolina/contacto/ContactPage.module.css";

interface Channel {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function ContactoClientPage() {
  const t = useT("ContactPage");
  const channels = t.raw<Channel[]>("channels");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.kicker}>Correspondencia</span>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </header>

      <div className={styles.channels}>
        {channels.map((channel) => (
          <div key={channel.label} className={styles.channel}>
            <span className={styles.channelLabel}>{channel.label}</span>
            <a
              href={channel.href}
              className={styles.channelValue}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {channel.value}
            </a>
          </div>
        ))}
      </div>

      <p className={styles.note}>{t("note")}</p>
    </div>
  );
}
