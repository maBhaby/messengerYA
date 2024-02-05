import Block from '@/services/Block';

import { PageTypes } from '@/interfaces/common';

import { clsx } from '@/utils/clsx';
import { router } from '@/lib/router';

interface IProps {
  size: 'xs' | 'md' | 'full';
  colorTheme: 'blue' | 'transparent';
  page?: PageTypes;
  className: string;
  onClick?: (arg: unknown) => void;
  text: string;
  type?: 'submit' | 'button';
}

export class Button extends Block<IProps> {
  constructor(props: IProps) {
    super({ ...props });
  }

  protected init(): void {
    this.props.events = {
      click: (e: Event) => {
        if (this.props.page) {
          router.go(`/${this.props.page}`)
        }
        this.props.onClick?.(e)
      },
    };
  }

  protected render(): string {
    const { size, colorTheme, className, page, text, type = 'button' } = this.props;
    return `
      <button 
        ${page ? 'page="{{page}}" ' : ''}
        class="
        ${clsx('button', {
          [`button__size-${size}`]: Boolean(size),
          [`button__color-${colorTheme}`]: Boolean(colorTheme),
          [`${className}`]: Boolean(className),
        })}"
        type="${type}"
      >
        ${text}
      </button>
    `;
  }
}
