import { BaseInput } from '@/components/input/base/base';
import Block, { RefType } from '@/services/Block';
import { navigate } from '@/services/navigate';
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone,
} from '@/utils/validations/login';

type TValFunc = (val: string) => void;

interface IProps {
  validate: {
    login: TValFunc;
    email: TValFunc;
    password: TValFunc;
    phone: TValFunc;
    repeat_password: TValFunc;
    name: TValFunc;
  };
  onSubmit: (e: Event) => void;
  handleRedirectToLogin: () => void;
}

interface IRefs extends RefType {
  email: BaseInput;
  login: BaseInput;
  first_name: BaseInput;
  second_name: BaseInput;
  phone: BaseInput;
  password: BaseInput;
  repeat_password: BaseInput;
}

export class RegistrationPage extends Block<IProps, IRefs> {
  constructor() {
    super({
      validate: {
        login: validateLogin,
        email: validateEmail,
        password: validatePassword,
        phone: validatePhone,
        repeat_password: validatePassword,
        name: validateName,
      },
      onSubmit: (event) => {
        event.preventDefault();
        const allValue = Object.values(this.refs).map((el) => {
          if (el instanceof BaseInput) {
            return el.getValue();
          }
          return null;
        });
        if (!allValue.includes(null)) {
          console.log(...allValue);
        }
      },
      handleRedirectToLogin: () => {
        navigate('login');
        this.hide();
      },
    });
  }

  render() {
    return `
      <main>
        <section class="center-layout">
          <div class="reg-page__wrapper">
            <form class="reg-page__form">
              {{{ Title tag="h1" size="20" weight="500" className="reg-page__title" text="Регистрация"}}}
              {{{ BaseInput 
                value="test@ya.ru" 
                name="email" 
                type="email" 
                label="Почта" 
                className="reg-page__input"
                validate=validate.email
                ref="email"
              }}}
              {{{ BaseInput 
                value="ivanivanov" 
                name="login" 
                type="text" 
                label="Логин" 
                className="reg-page__input"
                validate=validate.login
                ref="login" 
              }}}
              {{{ BaseInput 
                value="Иван" 
                name="first_name" 
                type="text" 
                label="Логин" 
                className="reg-page__input"
                ref="first_name"
                validate=validate.name
              }}}
              {{{ BaseInput 
                value="Иванов" 
                name="second_name" 
                type="text" 
                label="Фамилия" 
                className="reg-page__input"
                ref="second_name"
                validate=validate.name
              }}}
              {{{ BaseInput 
                value="+7 (909) 967 30 30" 
                name="phone" 
                type="text" 
                label="Телефон" 
                className="reg-page__input"
                ref="phone"
                validate=validate.phone
              }}}
              {{{ BaseInput 
                value="12345" 
                name="password" 
                type="password" 
                label="Пароль" 
                className="reg-page__input"
                ref="password"
                validate=validate.password
              }}}
              {{{ BaseInput 
                value="12345" 
                name="repeat_password" 
                type="password" 
                label="Пароль (ещё раз)" 
                className="reg-page__input"
                ref="repeat_password"
                validate=validate.password
              }}}
              <div class="reg-page__footer">
                {{{ Button 
                  page="chat" 
                  size="full" 
                  colorTheme="blue" 
                  text="Зарегистрироваться" 
                  onClick=onSubmit
                }}}
                {{{ Button 
                  page="login" 
                  colorTheme="transparent" 
                  size="xs" 
                  text="Войти"
                  onClick=handleRedirectToLogin
                }}}                
              </div>
            </form>
          </div>
        </section class="center-layout">
      <main>
    `;
  }
}
