import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  text?: string;
  icon?: string;
  color?: string;
  iconPosition?: 'left' | 'right';
  styleType?: 'primary' | 'secondary' | 'icon';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, iconPosition = 'left', styleType = 'primary', onClick, color = ""}) => {
  return (
    <button className={`${styles.button} ${styles[styleType]} ${styles[color]}`} onClick={onClick}>
      {icon && iconPosition === 'left' && <i className={icon} />}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <i className={icon} />}
    </button>
  );
};

export default Button;