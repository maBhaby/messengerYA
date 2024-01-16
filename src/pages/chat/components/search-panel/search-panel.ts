import Block from "@/services/Block";
import { arrowWithoutLineIcon } from "@static/images";

interface IProps {
  imageLink: string
}

export class SearchPanel extends Block<IProps> {
  constructor() {
    super({
      imageLink: arrowWithoutLineIcon
    })
  }

  protected render() {
    const { imageLink } = this.props
    return (`
      <div class="search-panel">
        <div class="search-panel__top">
          {{{ Link 
            page="profile" 
            color="gray" 
            className="search-panel__link" 
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
    `)
  }
}
