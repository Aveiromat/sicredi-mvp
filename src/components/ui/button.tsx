import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
export function Button({
  children,
  href,
  secondary = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  secondary?: boolean;
  children: ReactNode;
}) {
  const className = `button ${secondary ? "secondary" : ""}`;
  return href ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
