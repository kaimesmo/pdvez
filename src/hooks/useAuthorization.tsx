import { useCallback, useState } from 'react';
import { postToken, TokenInput } from '../services/token';
import { postAuthorization } from '../services/authentication';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const useAuthorizeLogin = () => {
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | undefined>(undefined);

  const navigation = useNavigate();
  const onValidateLogin  = useCallback(
    async (data: TokenInput) => {
      try {
        setLoading(true);
        setFeedbackMessage("");

        const tokenResponse = await postToken(data);

        if (tokenResponse.error || !tokenResponse.token) {
          setFeedbackMessage(tokenResponse.message || "Usuário ou senha inválidos");
          return;
        }

          const authResponse = await postAuthorization({
            user: data.user,
            password: data.password,
            token: tokenResponse.token
          });

          if (!authResponse.error) {
            navigation("/pedido-de-provadores");
          } else {
            setFeedbackMessage(authResponse.message);
          }
      } catch (error) {
        const response = error as AxiosError;
        console.log(response)
        setFeedbackMessage('Ocorreu um erro')
        throw new Error(response);
      } finally {
        setLoading(false);
      }
    },
    [navigation]
  );

  return {
    feedbackMessage,
    loading,
    onValidateLogin 
  };
};

export default useAuthorizeLogin;
