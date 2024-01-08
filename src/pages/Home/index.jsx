import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Note } from '../../components/Note';
import { Header} from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { ButtonText} from '../../components/ButtonText';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagsSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);
    
    if(alreadySelected) {
      const filteredTag = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTag);

    }else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }


  }

  useEffect(() => {
    async function fetchTags() {
      const response =  await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      
      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagsSelected("all")}
            isActive={tagsSelected.length === 0}

          />
        </li>

        {
          tags && tags.map(tag =>(
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}

              />
            </li>
          ))
        }
        
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} /> 
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
              title: 'React',
              tags:[
                {id: '1', name: 'React',},
                {id: '2', name: 'Nodejs',},
              ]
            }}
          />

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Notas
      </NewNote>
      
    </Container>
  );
}