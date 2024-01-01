import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/henriquencorrea.png" alt="Imagem do usuario"/>

        <div>
          <span>Bem Vindo</span>
          <strong>Henrique Corrêa</strong>
        </div>
      </Profile>

        <Logout>
          <RiShutDownLine />
        </Logout>

    </Container>
  );
}