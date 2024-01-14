import Block from '@/services/Block';

import { clsx } from '@/utils/clsx';

interface IProps {
  size: 'xs' | 'md' | 'full'
  colorTheme: 'blue' | 'transparent'
  page: string
  className: string
  onClick: () => void
  text: string
  type?: 'submit' | 'button'
}

export class Button extends Block<IProps> {
  constructor(props: IProps) {
    super({...props});
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { size, colorTheme, className, page, text, type='button' } = this.props;
    return (`
      <button 
        ${
          page ? 'page="{{page}}" ' : ''
        }
        class="
        ${
          clsx('button', {
            [`button__size-${size}`]: Boolean(size),
            [`button__color-${colorTheme}`]: Boolean(colorTheme),
            [`${className}`]: Boolean(className)
          })
        }"
        type="${type}"
      >
        ${text}
      </button>
    `);
  }
}
