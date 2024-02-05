import Block from "@/services/Block";
import { userChangeImage } from "@static/images";

interface IProps {
  image: string;
}

export class ChangeAvatar extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected render() {
    const { image = userChangeImage } = this.props;

    return `
    <button class='change-avatar'>
      <img 
        src="${image}"
        alt='change avatar' 
        height="40"
        width="40" 
      />
        <div class='change-avatar__wrap'>
          <p>
            поменять
            <br />
            аватар
          </p>
        </div>
      </button>
    `;
  }
}
