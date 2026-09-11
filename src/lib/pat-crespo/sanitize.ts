import sanitizeHtml from "sanitize-html"

export function sanitizePostBody(body: string): string {
  return sanitizeHtml(body, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "figure",
      "figcaption",
      "video",
      "source",
      "iframe",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height", "border", "class", "style"],
      a: ["href", "target", "rel", "class", "style", "imageanchor"],
      div: ["class", "style"],
      span: ["class", "style"],
      iframe: ["src", "width", "height", "frameborder", "allowfullscreen"],
      "*": ["style", "class"],
    },
    allowedSchemes: ["http", "https", "data"],
    transformTags: {
      img: (tagName: string, attribs: Record<string, string>) => {
        let src = attribs.src || ""
        if (src.startsWith("//")) {
          src = "https:" + src
        }
        return {
          tagName: "img",
          attribs: {
            ...attribs,
            src,
            loading: "lazy",
            class: "rounded-lg shadow-md my-8 mx-auto max-w-full h-auto block",
          },
        }
      },
      a: (tagName: string, attribs: Record<string, string>) => {
        const isExternal = attribs.href?.startsWith("http")
        return {
          tagName: "a",
          attribs: {
            ...attribs,
            target: isExternal ? "_blank" : attribs.target || "",
            rel: isExternal ? "noopener noreferrer" : attribs.rel || "",
          },
        }
      },
    },
    exclusiveFilter: (frame) => {
      return frame.tag === "br" && frame.text.trim() === ""
    },
  })
}

export function stripFeaturedImage(body: string, featuredImage: string | null): string {
  if (!featuredImage) return body
  const escapedUrl = featuredImage.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return body.replace(
    new RegExp(
      `<a[^>]*imageanchor[^>]*>\\s*<img[^>]*src=["']${escapedUrl}["'][^>]*>\\s*</a>\\s*`,
      "i"
    ),
    ""
  )
}
