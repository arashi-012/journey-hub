import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { LoginContextProvider } from './contexts/login/LoginContextProvider'

function App() {

  return (
    <>
      <LoginContextProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </LoginContextProvider>

    </>
  )
}

export default App
