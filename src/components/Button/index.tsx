import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

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

  const icons = {
    search: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    add: <FontAwesomeIcon icon={faPlus} />,
    back: <FontAwesomeIcon icon={faArrowLeft} />
  }
  
  return (
    <S.Button onClick={onClick} variant={variant} fullWidth={fullWidth}>
      { icon && icons[icon] }
      {label}
    </S.Button>
  )
}

export default Button;