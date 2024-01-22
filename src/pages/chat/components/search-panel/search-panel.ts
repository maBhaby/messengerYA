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
    const { imageLink } = this.props;
    return `
      <div class="search-panel">
        <div class="search-panel__top">
          {{{ Link 
            page="profile" 
            color="gray" 
            className="search-panel__link" 
            onClick=handleOpenProfile
            text="
            Профиль
            <img 
              src='${imageLink}' 
              alt='arrow' 
              height='10' 
              width='10' 
            />
            "
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
