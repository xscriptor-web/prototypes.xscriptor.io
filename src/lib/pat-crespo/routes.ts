export const PAT_CRESPO_BASE = "/portfolios/pat-crespo"

export function patCrespo(path: string = ""): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "")
  return clean ? `${PAT_CRESPO_BASE}/${clean}` : PAT_CRESPO_BASE
}

function normalize(path: string): string {
  return path.replace(/\/+$/, "") || "/"
}

export function isActivePath(pathname: string, target: string): boolean {
  const current = normalize(pathname)
  const base = normalize(target)
  return current === base || current.startsWith(`${base}/`)
}
