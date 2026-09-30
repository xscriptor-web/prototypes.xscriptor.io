"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

export type Locale = "es";

type Messages = Record<string, unknown>;

interface I18nContextValue {
  locale: Locale;
  messages: Messages;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "es",
  messages: {},
});

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ locale, messages }), [locale, messages]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLocale(): Locale {
  const { locale } = useContext(I18nContext);
  return locale || "es";
}

function resolvePath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

export function useT(namespace?: string) {
  const { messages } = useContext(I18nContext);

  const t = Object.assign(
    (key: string, params?: Record<string, string | number>) => {
      const fullPath = namespace ? `${namespace}.${key}` : key;
      const value = resolvePath(messages, fullPath);
      if (typeof value !== "string") return key;
      if (!params) return value;
      return Object.entries(params).reduce(
        (acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)),
        value
      );
    },
    {
      raw: <T,>(key: string): T => {
        const fullPath = namespace ? `${namespace}.${key}` : key;
        const value = resolvePath(messages, fullPath);
        return (value as T) ?? (key as unknown as T);
      },
    }
  );

  return t;
}
