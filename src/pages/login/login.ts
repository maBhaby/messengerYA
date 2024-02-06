import Block, { RefType } from "@/services/Block";
import { validateLogin } from "@/utils/validations/login";
import { LoginModel } from "@/interfaces/login";
import { privateRoute } from "@/utils/privateRoute";
import { validateAllRefs } from "@/utils/validations/allRefs";
import { authApi } from "@/api/auth-api";
import { WithBaseInput } from "@/interfaces/common";
import { loginService } from "./login.service";

type TInputRefs = WithBaseInput<LoginModel>;

type TBlockRefs = TInputRefs & RefType;

interface IProps {
  validate: {
    login: typeof validateLogin;
  };
  onLogin: (e: Event) => void;
}

class LoginPage extends Block<IProps, TBlockRefs> {
  constructor() {
    super({
      validate: {
        login: validateLogin,
      },
      onLogin: (event: Event) => {
        event.preventDefault();

        validateAllRefs(this.refs as TInputRefs);

        const userLoginValue: LoginModel = {
          login: this.refs.login.getValue() ?? "",
          password: this.refs.password.getValue() ?? "",
        };

        loginService.signIn(userLoginValue);
      },
    });
  }

  protected init(): void {
    authApi.logout();
    console.log("login init");
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

export default privateRoute(LoginPage);
