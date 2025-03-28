import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Provadores = () => {
  const [store, setStore] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const navigate = useNavigate();

  const onChangeStore = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStore(event.target.value);
    console.log('store', store)
  }

  const onChangeBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
    console.log('brand', store)
  }

  const goBack = () => {
    navigate('/');
  }

  return (
    <S.Container>
      <Header 
        title="novo pedido de provadores"
      />
      <form>
        <Input 
          label="loja"
          value=""
          onChange={onChangeStore}
        />
        <Input 
          label="marca"
          value=""
          onChange={onChangeBrand}
        />
        <S.WrapperButtons>
          <Button 
            label="voltar"
            onClick={goBack}
            variant="secondary"
            icon="back"
          />
          <Button
            label="buscar"
            onClick={() => {}}
            variant="primary"
            icon="search"
          />
        </S.WrapperButtons>
      </form>
    </S.Container>
  );

}

export default Provadores;