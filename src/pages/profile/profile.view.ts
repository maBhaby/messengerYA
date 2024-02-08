import Block from "@/services/Block";
import { privateRoute } from "@/utils/privateRoute";
import { connect } from "@/utils/connect";
import { arrowIcon } from "@static/images";

import type { ProfileService } from './profile.service'
import { profileService } from "./profile.service";

interface IProps {
  userName: string;
  arrow: string;
  handleUserLogout: ProfileService['handleUserLogout']
}

class ProfilePage extends Block<IProps> {
  constructor() {
    super({
      userName: "asd",
      arrow: arrowIcon,
      handleUserLogout: profileService.handleUserLogout
    });

    privateRoute()
  }

  protected render() {
    const { userName } = this.props;
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
                {{{ Link color="red" text="Выйти" onClick=handleUserLogout }}}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
    `;
  }
}

export default connect(({user}) => ({user}))(ProfilePage)
