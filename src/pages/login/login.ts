import Block, { RefType } from '@/services/Block';
import { BaseInput } from '@/components/input/base/base';
import { validateLogin } from '@/utils/validations/login';
import { LoginModel } from '@/interfaces/login';
import { privateRoute } from '@/utils/privateRoute';
import { validateAllRefs } from '@/utils/validations/allRefs';
import { loginService } from './login.service';

interface IProps {
  validate: {
    login: typeof validateLogin;
  };
  onLogin: (e: Event) => void;
}

interface IRefs extends RefType {
  login: BaseInput;
  password: BaseInput;
}

class LoginPage extends Block<IProps, IRefs> {
  constructor() {
    super({
      validate: {
        login: validateLogin,
      },
      onLogin: (event: Event) => {
        event.preventDefault();

        if (validateAllRefs(this.refs)) return 

        const userLoginValue: LoginModel = {
          login: this.refs.login.getValue() ?? '',
          password: this.refs.password.getValue() ?? ''
        }

        loginService.signIn(userLoginValue)
      }
    });
  }

  render() {
    return `
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
                  size="full" 
                  colorTheme="blue" 
                  onClick=onLogin 
                  type="submit"
                  text="Авторизоваться" 
                }}}
                {{{ Button page="registration" colorTheme="transparent" size="xs" text="Нет аккаунта?" }}}
              </div>
            </form>
          </div>
        </section class="center-layout">
      <main>
      `;
  }
}

export default privateRoute(LoginPage)
