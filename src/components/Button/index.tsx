import * as S from "./style";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
  icon?: 'search' | 'add' | 'back' 
  fullWidth?: boolean;
}

const Button = ({
  label, 
  onClick,
  variant,
  icon,
  fullWidth
}: ButtonProps) => {
  
  return (
    <S.Button onClick={onClick} variant={variant} fullWidth={fullWidth}>
      {icon && icon}
      {label}
    </S.Button>
  )
}

export default Button;