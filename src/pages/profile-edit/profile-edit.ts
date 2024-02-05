import { UserValueRow } from "@/components/userValueRow/userValueRow";
import Block, { RefType } from "@/services/Block";
import { handleRedirectToChat } from "@/utils/redirects";
import { arrowIcon } from "@static/images";

interface IProps {
  onSubmit: (e: Event) => void;
  arrow: string;
  handleRedirectToChat: typeof handleRedirectToChat;
}

interface IRef extends RefType {
  login: UserValueRow;
  first_name: UserValueRow;
  second_name: UserValueRow;
  display_name: UserValueRow;
  phone: UserValueRow;
}

export class ProfileEditPage extends Block<IProps, IRef> {
  constructor() {
    super({
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
      },
      arrow: arrowIcon,
      handleRedirectToChat: (e) => {
        this._hideAfterRedirect(e, handleRedirectToChat);
      },
    });
  }

  private _hideAfterRedirect = (event: Event, fn: (e: Event) => void) => {
    fn(event);
    this.hide();
  };

  protected render() {
    return `
      <main class="layout-profile">
        <aside class="layout-profile__back">
          {{{ Link 
            page="chat" 
            color="gray" 
            onClick=handleRedirectToChat
            className="layout-profile__back_link"
            text='
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Artboard-35</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" style="fill:#fff"/></g></svg>
            '
          }}}
        </aside>
        <section class="layout-profile__content">
        {{{ Title tag="h1" className="visually-hidden" text="Редактирование профиля"}}}
        <form class="profile-edit-page">
          <div class="profile-edit-page__header">
            {{{ ChangeAvatar }}}
          </div>
          <ul class="profile-edit-page__list">
            {{#each (profileValue)}}
            <li class="profile-edit-page__list_item">
              {{{ UserValueRow 
                value=this.value 
                disabled=this.disabled 
                type=this.type 
                name=this.name
                label=this.label
                validate=this.validate
                ref=this.ref
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
        </form>
      </section >
      </main>
    `;
  }
}
