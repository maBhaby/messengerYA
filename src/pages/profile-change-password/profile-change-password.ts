import { UserValueRow } from '@/components';
import Block, { RefType } from '@/services/Block';

interface IProps {
  text: string;
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
      text: 'test',
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
    });
  }

  protected render() {
    return `
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
      {{/ProfileLayout }}
    `;
  }
}
