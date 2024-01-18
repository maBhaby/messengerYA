import { BaseInput } from "@/components/input/base/base";
import Block, { RefType } from "@/services/Block";
import { navigate } from "@/services/navigate";

interface IProps {
  validate: {
    login: () => void
  },
  onLogin: (e: Event) => void
  handleOpenRegPage: () => void
}

interface IRefs extends RefType {
  login: BaseInput
  password: BaseInput
}

export class LoginPage extends Block<IProps, IRefs> {
  constructor () {
    super({
      validate: {
          login: () => {console.log('asdasd')}
      },
      onLogin: (event) => {
          event.preventDefault();
          const login =  this.refs.login.value;
          const password =  this.refs.password.value;

          if(!login) {
              return;
          }

          console.log({
              login,
              password
          })
          // navigate('list')
      },
      handleOpenRegPage: () => {
        navigate('registration')
      }
  })
  }

   render() {
    return (
      `
      <main>
        <section class="center-layout">
          <div class="auth-page__wrapper">
            <form  class="auth-page__form">
              {{{ Title tag="h1" size="20" weight="500" className="auth-page__title" text="Вход"}}}
              {{{ 
                  BaseInput 
                  ref="login" 
                  name="login" 
                  type="text" 
                  label="Логин" 
                  validate=validate.login 
                  className="auth-page__input"
              }}}
              {{{ BaseInput ref="password" name="password" type="password" label="Пароль" className="auth-page__input"}}}
              <div class="auth-page__footer">
                {{{ Button 
                  page="chat" 
                  size="full" 
                  colorTheme="blue" 
                  onClick=onLogin 
                  type="submit"
                  text="Авторизоваться" 
                }}}
                {{{ Button page="registration" colorTheme="transparent" size="xs" text="Нет аккаунта?" onClick=handleOpenRegPage }}}
              </div>
            </form>
          </div>
        </section class="center-layout">
      <main>
      `
    )
  }
  
}
