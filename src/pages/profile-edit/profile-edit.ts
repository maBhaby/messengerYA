import { UserValueRow } from '@/components/userValueRow/userValueRow';
import Block, { RefType } from '@/services/Block';
import { handleRedirectToChat } from '@/utils/redirects';
import { arrowIcon } from '@static/images';

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
            onClick=handleRedirectToChat
            className="layout-profile__back_link"
            text='
              <img src="${arrow}" alt="arrow" width="30" height="20" />
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
