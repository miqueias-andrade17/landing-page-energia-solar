import type { Benefit } from '../data/siteContent';
import { Icon } from './Icons';

type BenefitCardProps = {
  item: Benefit;
};

export function BenefitCard({ item }: BenefitCardProps) {
  return (
    <article className="card benefit-card">
      <div className="icon-badge">
        <Icon name={item.icon} className="icon" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
