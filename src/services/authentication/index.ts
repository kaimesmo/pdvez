import axios from "axios";

interface AuthorizationInput {
  password: string;
  user: string;
  token: string;
}

interface AuthorizationOutput {
  error?: boolean;
  message?: string;
  date?: string;
  userName?: string;
  isSuper?: boolean;
  requireNewPassword?: boolean;
  userType?: number;
  promoterId?: number;
  userId?: number
}

export const postAuthorization =  async (data: AuthorizationInput): Promise<AuthorizationOutput> => {
  const { user, password, token } = data;
  const urlHML = "https://pdveztestes.ddns.net/auth/login"
  // const urlPRD = "https://pdvez.com.br/auth/login"

  const payload = {
    user,
    password
  };

  try {
    const response = await axios.post<AuthorizationOutput>(urlHML, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization-token': `${token}`
      },
      maxRedirects: 0
    });
    return response.data; 
  } catch (error) {
    console.error(error);
    return { 
        error: true,
        message: "Erro ao tentar se comunicar com o servidor" 
    };
  }
};
