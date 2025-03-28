import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import wallpaper from "../../assets/wallpaper-home.jpg";
import * as S from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuthorizeLogin from "../../hooks/useAuthorization";
import useWindowSize from "../../hooks/useWindowsize";

const Login = () => {
  const [user, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { width } = useWindowSize();

  const { onValidateLogin, feedbackMessage } = useAuthorizeLogin();

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleOnClick = () => {
    onValidateLogin({ user, password });
  }

  // TODO: validação de erro 
  return (
    <S.Container>
      {width > 1025 ? (
          <S.WrapperWallpaper>
            <img src={wallpaper} />
          </S.WrapperWallpaper>
        ) : null
      }
      <S.Wrapper>
        <img src={Logo} alt="Logo da pdvez" />
        <S.InputsWrapper>
          <Input 
            placeholder="usuário"
            value={user}
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