import { Container, Links } from './styles.js';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function  Details() {

  return (
    <Container>
      <Header />

      <ButtonText title="Excluir Nota"/>

      <Section title="Links úteis">
        <Links>
          <li> <a href='#'>https://rocketseat.com</a></li>
          <li> <a href='#'>https://rocketseat.com</a></li>
        </Links>

      </Section>

      <Section title="Marcadores"> 
        <Tag title="React"/>
        <Tag title="Javascript"/>
      
      </Section>

      <Button  title="Voltar" />
      
    </Container>
  );
}