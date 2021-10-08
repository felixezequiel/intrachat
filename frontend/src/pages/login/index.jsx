import { Colors } from "../../colors"
import { Button } from "../../components/atoms/button"
import { InputCustom } from "../../components/atoms/input"
import { Icon } from "../../components/icon"
import { BodyLogin, ContainerLogin } from "../../styles/login"
import serialize from 'form-serialize'
import { SendLogin } from "../../api"
import { msg } from "../../helpers"
import { useContext } from "react"
import { StateGlobal } from "../../provider/globalState"


export const Login = () => {
  const { state, setState } = useContext(StateGlobal)
  const handleSubmit = async event => {
    event.preventDefault()
    const data = serialize(event.target, { empty: false, hash: true })
  
    const response = await SendLogin('/users', data, 'get').catch(erro => ({ error: true, message: erro }))
    if (response.error || !response.data.length) return msg.invalidLogin()
    
  }

  return (
    <ContainerLogin>
      <BodyLogin
        onSubmit={ handleSubmit }
      >
        <Icon 
          height={ 100 }
        />
        <InputCustom 
          placeholder='Usuario...'
          name='user'
        />
        <InputCustom 
          type="password"
          placeholder='Senha...'
          name='password'
        />
        <Button 
          backgroundColor={ Colors.blue }
          color={ 'white' }
          text='Entrar'
        />
      </BodyLogin>
    </ContainerLogin>
  )
}