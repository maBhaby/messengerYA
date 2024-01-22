import Block from '@/services/Block';

interface IProps {
  userName: string
}

export class ProfilePage extends Block<IProps> {
  constructor() {
    super({
      userName: 'asd',
    });
  }

  protected render() {
    const { userName } = this.props;
    return `
      {{#> ProfileLayout }}
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
      {{/ProfileLayout}}
    `;
  }
}
