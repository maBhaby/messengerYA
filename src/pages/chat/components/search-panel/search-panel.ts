import Block from '@/services/Block';
import { navigate } from '@/services/navigate';
import { arrowWithoutLineIcon } from '@static/images';

interface IProps {
  imageLink: string;
  handleOpenProfile: (e: Event) => void;
}

export class SearchPanel extends Block<IProps> {
  constructor() {
    super({
      imageLink: arrowWithoutLineIcon,
      handleOpenProfile: (e: Event) => {
        e.preventDefault();
        navigate('profile');
      },
    });
  }

  protected render() {
    return `
      <div class="search-panel">
        <div class="search-panel__top">
          {{{ Link 
            page="profile" 
            color="gray" 
            className="search-panel__link" 
            onClick=handleOpenProfile
            text='
            Профиль
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              path id="Polygon 1" d="M1 9L5 5L1 1" stroke="#999999"/>
            </svg>
            '
          }}}
        </div>
        <search>
          <form>
            {{{ SearchInput name="search" }}}
          </form>
        </search>
      </div>
    `;
  }
}
