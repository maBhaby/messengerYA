import Block from "@/services/Block";

export class ProfileEditPage extends Block<any> {

  protected render() {
    return (`
      {{#> ProfileLayout }}
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
        </form>
      {{/ProfileLayout }}
    `)
  }
}
