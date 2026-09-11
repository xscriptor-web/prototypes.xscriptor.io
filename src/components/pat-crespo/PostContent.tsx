interface PostContentProps {
  body: string
}

export default function PostContent({ body }: PostContentProps) {
  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
