import { useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

import { motion } from 'framer-motion'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Form>
          <h1>RocketNotes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis</p>

          <h2>Faça seu Login</h2>

          <Input
            placeholder="Email"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Entrar" onClick={handleSignIn} />

          <Link to="/register">Criar conta</Link>
        </Form>
        <Background />
      </Container>

    </motion.div>
  );
}
