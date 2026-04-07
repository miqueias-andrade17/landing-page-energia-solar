import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  name: 'bolt' | 'shield' | 'chart' | 'check' | 'sun' | 'phone' | 'arrow';
};

const paths = {
  bolt: (
    <path
      d="M13 2 5 14h6l-1 8 9-13h-6l1-7Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  ),
  shield: (
    <path
      d="M12 3c3 2 6 2.5 8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6c2-.5 5-1 8-3Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  ),
  chart: (
    <path
      d="M4 19h16M7 15v-4m5 4V7m5 8v-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  ),
  check: (
    <path
      d="m5 12 4 4 10-10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </>
  ),
  phone: (
    <path
      d="M7.5 4h2.7c.4 0 .8.3.9.7l.8 3.2c.1.4 0 .8-.3 1.1l-1.3 1.3a15.6 15.6 0 0 0 3.4 3.4l1.3-1.3c.3-.3.7-.4 1.1-.3l3.2.8c.4.1.7.5.7.9v2.7c0 .6-.4 1.1-1 1.2-1 .1-2.1.1-3.2-.1A16.8 16.8 0 0 1 4.2 8.2 15 15 0 0 1 4 5c.1-.6.6-1 1.2-1Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  ),
  arrow: (
    <path
      d="M5 12h14m-5-5 5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
