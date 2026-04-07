import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icons';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
};

export function Button({ children, variant = 'primary', icon = false, className = '', ...props }: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      {icon ? <Icon name="arrow" className="button__icon" /> : null}
    </a>
  );
}
