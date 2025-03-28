import axios from "axios";

export interface TokenInput {
  password: string;
  user: string;
}

interface TokenOutput {
  error?: boolean;
  message?: string;
  token?: string;
  date?: string;
}

export const postToken =  async (data: TokenInput): Promise<TokenOutput> => {
  const { user, password } = data;
  const urlHML = "https://pdveztestes.ddns.net/token"
  // const urlPROD = 'https://pdvez.com.br/token'

  const payload = {
    user,
    password
  };
  const response = await axios.post<TokenOutput>(urlHML, payload, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data; 
};
