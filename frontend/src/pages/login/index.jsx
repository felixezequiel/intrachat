import { Colors } from "../../colors"
import { Button } from "../../components/atoms/button"
import { InputCustom } from "../../components/atoms/input"
import { Icon } from "../../components/icon"
import { BodyLogin, ContainerLogin } from "../../styles/login"
import serialize from 'form-serialize'
import { SendLogin } from "../../api"


export const Login = () => {
  
  const handleSubmit = async event => {
    event.preventDefault()
    const data = serialize(event.target, { empty: false, hash: true })
    const response = await SendLogin('/login', data, 'post')
    console.log(response);
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