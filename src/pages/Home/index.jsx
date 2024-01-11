import { FiPlus, FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { motion } from 'framer-motion'

export function Home() {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagsSelected(tagName) {
    if (tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTag = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTag)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Brand>
          <h1>RocketNotes</h1>
        </Brand>

        <Header />

        <Menu>
          <li>
            <motion.div
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ButtonText
                title="Todos"
                onClick={() => handleTagsSelected('all')}
                isActive={tagsSelected.length === 0}
              />
            </motion.div>
          </li>

          {tags &&
            tags.map(tag => (
              <li key={String(tag.id)}>
                <motion.div
                  whileHover={{ scale: 1.02, originX: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ButtonText
                    title={tag.name}
                    onClick={() => handleTagsSelected(tag.name)}
                    isActive={tagsSelected.includes(tag.name)}
                  />
                </motion.div>
              </li>
            ))}
        </Menu>

        <Search>
          <Input
            placeholder="Pesquisar pelo título"
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
          />
        </Search>

        <Content>
          <Section title="Minhas Notas">
            <motion.div
              initial={{ y: '100px' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              {notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))}
            </motion.div>
          </Section>
        </Content>

        <NewNote to="/new">
          <FiPlus />
          Criar Notas
        </NewNote>
      </Container>
    </motion.div>
  )
}
