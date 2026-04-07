import type { Service } from '../data/siteContent';

export function ServiceCard({ title, description, points }: Service) {
  return (
    <article className="card service-card">
      <div className="service-card__topline" />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
