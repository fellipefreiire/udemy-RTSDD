import { createContext, useState, useContext, useEffect } from 'react'

interface IAuthContext {
  logged: boolean
  signIn(email: string, password: string): void
  signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false)

  useEffect(() => {
    const isLogged = localStorage.getItem('@minha-carteira:logged')

    isLogged ? setLogged(JSON.parse(isLogged)) : setLogged(false)
  }, [])

  if (!logged) return null

  const signIn = (email: string, password: string) => {
    if (email === 'minha@carteira.com' && password === '123') {
      localStorage.setItem('@minha-carteira:logged', 'true')
      setLogged(true)
    } else {
      alert('Senha ou usuário inválidos')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@minha-carteira:logged')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): IAuthContext => useContext(AuthContext)

export { AuthProvider, useAuth }
