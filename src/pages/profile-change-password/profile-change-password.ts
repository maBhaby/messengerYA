import Block from "@/services/Block";

interface IProps {
  text: string
}

export class ProfileChangePassword extends Block<IProps> {
  constructor() {
    super({
      text: 'test'
    })
  }

  protected render() {
    return (`
      {{#> ProfileLayout }}
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
              }}}
            </li>
            {{/each}}
          </ul>
          {{{ Button 
            size="full" 
            colorTheme="blue" 
            className="profile-edit-page__save" 
            text="Сохранить" 
          }}}
        </div>
      {{/ProfileLayout }}
    `)
  }
}
