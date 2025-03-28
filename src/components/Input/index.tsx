import { useState } from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 


interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  feedbackText?: string;
  type?: string;
}

const Input = ({
  label, 
  placeholder,
  value,
  onChange,
  minLength,
  feedbackText,
  type = 'text'
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input 
          type={isPasswordVisible ? 'text' : type} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange} 
          minLength={minLength}
        />
        {type === 'password' && (
          <S.Icon onClick={togglePasswordVisibility}>
            {isPasswordVisible ? 
              <FontAwesomeIcon icon={faEye} /> 
              : <FontAwesomeIcon icon={faEyeSlash} />
            }
          </S.Icon>
        )}
      </S.InputWrapper>
      <span>{feedbackText}</span>
    </>
  )
}

export default Input;
