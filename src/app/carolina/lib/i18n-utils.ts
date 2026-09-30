type Messages = Record<string, unknown>;

function resolvePath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

/** Resolvedor de cadenas para Server Components (sin hooks). */
export function getMsg(messages: Messages, path: string): string {
  const value = resolvePath(messages, path);
  return typeof value === "string" ? value : path;
}
