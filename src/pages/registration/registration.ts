import { BaseInput } from "@/components/input/base/base";
import Block, { RefType } from "@/services/Block";

interface IProps {
  validate: {
    login: () => void
  }
}

interface IRefs extends RefType {
  login: BaseInput
  password: BaseInput
}

export class RegistrationPage extends Block<IProps, IRefs> {
  constructor () {
    super({
      validate: {
          login: () => {}
      }
  })
  }

   render() {
    return (`
      <main>
        <section class="center-layout">
          <div class="reg-page__wrapper">
            <form class="reg-page__form">
              {{{ Title tag="h1" size="20" weight="500" className="reg-page__title" text="Регистрация"}}}
              {{{ BaseInput value="test@ya.ru" name="email" type="email" label="Почта" className="reg-page__input"}}}
              {{{ BaseInput value="ivanivanov" name="login" type="text" label="Логин" className="reg-page__input"}}}
              {{{ BaseInput value="Иван" name="first_name" type="text" label="Логин" className="reg-page__input"}}}
              {{{ BaseInput value="Иванов" name="second_name" type="text" label="Фамилия" className="reg-page__input"}}}
              {{{ BaseInput value="+7 (909) 967 30 30" name="phone" type="text" label="Телефон" className="reg-page__input"}}}
              {{{ BaseInput value="12345" name="password" type="password" label="Пароль" className="reg-page__input"}}}
              {{{ BaseInput value="12345" name="repeat_password" type="password" label="Пароль (ещё раз)" className="reg-page__input"}}}
              <div class="reg-page__footer">
                {{{ Button 
                  page="chat" 
                  size="full" 
                  colorTheme="blue" 
                  text="Зарегистрироваться" 
                }}}
                {{{ Button 
                  page="login" 
                  colorTheme="transparent" 
                  size="xs" 
                  text="Войти"
                }}}                
              </div>
            </form>
          </div>
        </section class="center-layout">
      <main>
    `)
  }
  
}
