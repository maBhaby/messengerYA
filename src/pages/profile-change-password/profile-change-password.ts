import { UserValueRow } from '@/components';
import Block, { RefType } from '@/services/Block';
import { handleRedirectToChat } from '@/utils/redirects';
import { arrowIcon } from '@static/images';

interface IProps {
  text: string;
  arrow: string;
  onSubmit: (e: Event) => void;
  handleRedirectToChat: typeof handleRedirectToChat;
}

interface IRefs extends RefType {
  oldPassword: UserValueRow;
  newPassword: UserValueRow;
  repeatNewPassword: UserValueRow;
}

export class ProfileChangePassword extends Block<IProps, IRefs> {
  constructor() {
    super({
      text: 'test',
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
      },
      handleRedirectToChat,
    });
  }

  protected render() {
    const { arrow } = this.props;

    return `
      <main class="layout-profile">
      <aside class="layout-profile__back">
        {{{ Link 
          page="chat" 
          color="gray" 
          className="layout-profile__back_link"
          onClick=handleRedirectToChat
          text='
            <img src="${arrow}" alt="arrow" width="30" height="20" />
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
    `;
  }
}
