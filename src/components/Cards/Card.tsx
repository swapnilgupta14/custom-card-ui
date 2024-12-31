import React, { FC, ReactNode } from 'react';
import './Card.css';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  shadow?: string;
  hoverShadow?: string;
  border?: string;
  transitionDuration?: string;
}

const Card: FC<Props> = ({
  children,
  className = '',
  style = {},
  backgroundColor,
  borderRadius,
  padding,
  shadow,
  hoverShadow,
  border,
  transitionDuration,
}) => {
  const customStyles = {
    '--card-bg-color': backgroundColor,
    '--card-border-radius': borderRadius,
    '--card-padding': padding,
    '--card-shadow': shadow,
    '--card-hover-shadow': hoverShadow,
    '--card-border': border,
    '--card-transition-duration': transitionDuration,
    ...style,
  } as React.CSSProperties;

  return (
    <div
      className={`custom-card ${className}`}
      style={customStyles}
    >
      {children}
    </div>
  );
};

export default Card;