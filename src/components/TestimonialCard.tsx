import type { Testimonial } from '../data/siteContent';

export function TestimonialCard({ name, role, text }: Testimonial) {
  return (
    <article className="card testimonial-card">
      <div className="testimonial-card__stars">★★★★★</div>
      <p className="testimonial-card__text">“{text}”</p>
      <div>
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </article>
  );
}
