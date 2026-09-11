interface TagBadgeProps {
  tag: string
}

export default function TagBadge({ tag }: TagBadgeProps) {
  return (
    <span className="block font-body text-sm text-text-muted italic leading-relaxed">
      {tag}
    </span>
  )
}
