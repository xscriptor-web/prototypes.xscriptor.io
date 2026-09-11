import sanitizeHtml from "sanitize-html"

interface PostContentProps {
  body: string
}

export default function PostContent({ body }: PostContentProps) {
  // Sanitize the HTML content
  const sanitized = sanitizeHtml(body, {
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
        // Fix protocol-relative URLs
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
      // Remove empty text nodes and separators with only &nbsp;
      return frame.tag === "br" && frame.text.trim() === ""
    },
  })

  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  )
}
