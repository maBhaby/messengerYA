import Block from '@/services/Block';
import { arrowIcon } from '@static/images';

interface IProps {
  userName: string;
  arrow: string;
}

export class ProfilePage extends Block<IProps> {
  constructor() {
    super({
      userName: 'asd',
      arrow: arrowIcon,
    });
  }

  protected render() {
    const { userName, arrow } = this.props;
    return `
      <main class="layout-profile">
        <aside class="layout-profile__back">
          {{{ Link 
            page="chat" 
            color="gray" 
            className="layout-profile__back_link"
            text='
              <img src="${arrow}" alt="arrow" width="30" height="20" />
            '
          }}}
        </aside>
        <section class="layout-profile__content">
          {{{ Title tag="h1" className="visually-hidden" text="Профиль"}}}
          <div class="profile-page">
            <div class="profile-page__header">
              {{{ ChangeAvatar }}}
              <span>
                ${userName}
              </span>
            </div>
            <ul class="profile-page__list">
              {{#each (profileValue)}}
              <li class="profile-page__list_item">
                {{{ UserValueRow 
                  value=this.value 
                  disabled=true
                  type=this.type 
                  name=this.name
                  label=this.label
                }}}
              </li>
              {{/each}}
            </ul>
            <ul class="profile-page__list">
              <li class="profile-page__list_item profile-page__list_item--links">
                {{{ Link page="profile-edit" color="blue" text="Изменить данные" }}}
              </li>
              <li class="profile-page__list_item profile-page__list_item--links">
                {{{ Link page="change-password" color="blue" text="Изменить пароль" }}}
              </li>
              <li class="profile-page__list_item profile-page__list_item--links">
                {{{ Link page="login" color="red" text="Выйти" }}}
              </li>
            </ul>
          </div>
        </section>
      </main>
    `;
  }
}
