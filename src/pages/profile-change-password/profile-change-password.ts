import { UserValueRow } from "@/components";
import Block, { RefType } from "@/services/Block";
import { privateRoute } from "@/utils/privateRoute";
import { arrowIcon } from "@static/images";

interface IProps {
  text: string;
  arrow: string;
  onSubmit: (e: Event) => void;
}

interface IRefs extends RefType {
  oldPassword: UserValueRow;
  newPassword: UserValueRow;
  repeatNewPassword: UserValueRow;
}

export class ProfileChangePassword extends Block<IProps, IRefs> {
  constructor() {
    super({
      text: "test",
      arrow: arrowIcon,
      onSubmit: (e: Event) => {
        e.preventDefault();
        const allValue = Object.values(this.refs).map((el) => {
          if (el instanceof UserValueRow) {
            return el.getValue();
          }
          return null;
        });
        if (!allValue.includes(null)) {
          console.log(...allValue);
        }
      }
    });
    privateRoute()
  }

  protected render() {
    return `
      <div>
        <main class="layout-profile">
          <aside class="layout-profile__back">
            {{{ Link 
              page="chat" 
              color="gray" 
              className="layout-profile__back_link"
              text='
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Artboard-35</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" style="fill:#fff"/></g></svg>
              '
            }}}
          </aside>
          <section class="layout-profile__content">
            {{{ Title tag="h1" className="visually-hidden" text="Сменить пароль" }}}
            <div class="profile-password">
              <div class="profile-password__header">
                {{{ ChangeAvatar}}}
              </div>
              <ul class="profile-password__list">
                {{#each (passwordValue)}}
                <li class="profile-password__list_item">
                  {{{ UserValueRow 
                    value=this.value 
                    disabled=this.disabled 
                    type=this.type 
                    name=this.name
                    label=this.label
                    ref=this.ref
                    validate=this.validate
                  }}}
                </li>
                {{/each}}
              </ul>
              {{{ Button 
                size="full" 
                colorTheme="blue" 
                className="profile-edit-page__save" 
                text="Сохранить"
                onClick=onSubmit 
              }}}
            </div>
          </section>
        </main>
      </div>
    `;
  }
}
