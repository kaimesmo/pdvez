import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import * as S from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigate();

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleOnClick = () => {
    navigation("/pedido-de-provadores");
  }

  // TODO: validação de erro 

  return (
    <S.Container>
      <S.Wrapper>
        <img src={Logo} alt="Logo da pdvez" />
        <S.InputsWrapper>
          <Input 
            placeholder="usuário"
            value={username}
            onChange={onChangeUsername}
          />
          <Input 
            type="password"
            placeholder="senha"
            value={password}
            onChange={onChangePassword}
          />
        </S.InputsWrapper>
        <Button 
          label="entrar"
          onClick={handleOnClick}
          variant="primary"
          fullWidth={true}
        />
      </S.Wrapper>
    </S.Container>
  )    
}

export default Login;