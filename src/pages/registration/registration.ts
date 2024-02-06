import Block, { RefType } from "@/services/Block";
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone,
} from "@/utils/validations/login";
import { UserCreateModel } from "@/interfaces/registration";
import { validateAllRefs } from "@/utils/validations/allRefs";
import { WithBaseInput } from "@/interfaces/common";
import { registrationService } from "./registration.service";

type TValFunc = (val: string) => void;

interface IProps {
  validate: {
    login: TValFunc;
    email: TValFunc;
    password: TValFunc;
    phone: TValFunc;
    name: TValFunc;
  };
  onSubmit: (e: Event) => void;
}

type TInputRefs = WithBaseInput<UserCreateModel>;

type TBlockRefs = TInputRefs & RefType;

export class RegistrationPage extends Block<IProps, TBlockRefs> {
  constructor() {
    super({
      validate: {
        login: validateLogin,
        email: validateEmail,
        password: validatePassword,
        phone: validatePhone,
        name: validateName,
      },
      onSubmit: (event) => {
        event.preventDefault();

        validateAllRefs(this.refs as TInputRefs);

        const userValue: UserCreateModel = {
          first_name: this.refs.first_name.getValue() ?? "",
          second_name: this.refs.second_name.getValue() ?? "",
          phone: this.refs.phone.getValue() ?? "",
          password: this.refs.password.getValue() ?? "",
          email: this.refs.email.getValue() ?? "",
          login: this.refs.login.getValue() ?? "",
        };

        registrationService.create(userValue);
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
                value="Ivan" 
                name="first_name" 
                type="text" 
                label="Имя" 
                className="reg-page__input"
                ref="first_name"
                validate=validate.name
              }}}
              {{{ BaseInput 
                value="Ivanov" 
                name="second_name" 
                type="text" 
                label="Фамилия" 
                className="reg-page__input"
                ref="second_name"
                validate=validate.name
              }}}
              {{{ BaseInput 
                value="79099673030" 
                name="phone" 
                type="text" 
                label="Телефон" 
                className="reg-page__input"
                ref="phone"
                validate=validate.phone
              }}}
              {{{ BaseInput 
                value="qweQ1qweqwe" 
                name="password" 
                type="password" 
                label="Пароль" 
                className="reg-page__input"
                ref="password"
                validate=validate.password
              }}}
              <div class="reg-page__footer">
                {{{ Button 
                  size="full" 
                  colorTheme="blue" 
                  text="Зарегистрироваться" 
                  onClick=onSubmit
                  type="submit"
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
