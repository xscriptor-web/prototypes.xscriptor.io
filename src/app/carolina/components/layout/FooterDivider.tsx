export default function FooterDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2.5rem 1rem 0.75rem",
      }}
    >
      <svg
        width="200"
        height="44"
        viewBox="0 0 200 44"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.55 }}
      >
        <path d="M4 38 C 30 14, 70 14, 100 30 C 130 14, 170 14, 196 38" />
        <circle cx="100" cy="17" r="2" fill="var(--accent)" stroke="none" />
      </svg>
    </div>
  );
}
