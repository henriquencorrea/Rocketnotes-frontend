import { Container, Links, Content } from './styles.js';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function  Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir Nota"/>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore vitae dicta dolor magnam rerum aperiam doloribus, officia nemo. Illo quasi magni harum minus perferendis iste deserunt, id adipisci ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit, cupiditate eum, voluptates molestias aperiam suscipit modi unde ipsum eveniet asperiores. Aperiam, cum necessitatibus dicta omnis odit excepturi enim laboriosam.
          </p>

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

        </Content>
      </main>

      
    </Container>
  );
}