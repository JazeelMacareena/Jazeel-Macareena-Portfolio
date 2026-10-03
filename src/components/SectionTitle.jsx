// Reusable section heading component used throughout the portfolio pages.
// Displays the supporting description only when text is provided.
export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </div>
  );
}
