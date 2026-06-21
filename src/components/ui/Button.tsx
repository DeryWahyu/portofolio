'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  disabled?: never;
  type?: never;
  download?: string | boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const tapAnimation = { scale: 0.97 };
const hoverAnimation = { scale: 1.02 };

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  href,
  ...rest
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sharedMotionProps: HTMLMotionProps<'button'> & HTMLMotionProps<'a'> = {
    className: classNames,
    whileTap: tapAnimation,
    whileHover: hoverAnimation,
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    const { download } = rest as ButtonAsLink;
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        {...sharedMotionProps}
      >
        {content}
      </motion.a>
    );
  }

  const { onClick, disabled, type = 'button' } = rest as ButtonAsButton;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...sharedMotionProps}
    >
      {content}
    </motion.button>
  );
}
