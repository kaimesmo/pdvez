import * as S from "./style";

const Header = ({ title }: { title: string }) => {
  return (
    // provavelmente vai ter o menu aqui tambem
    <S.Heading>
      {title}
    </S.Heading>
  );
}

export default Header;