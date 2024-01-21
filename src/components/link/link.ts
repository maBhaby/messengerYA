import Block from '@/services/Block';
import { PageTypes } from '@/interfaces/common';

import { clsx } from '@/utils/clsx';

interface IProps {
  className?: string;
  color?: 'blue' | 'red' | 'gray';
  size?: 'default';
  text: string;
  page?: PageTypes;
}

export class Link extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected render() {
    const { className, color, size, text, page } = this.props;
    return `
      <a
        ${page !== undefined ? 'page="{{ page }}"' : ''} 
        class="${clsx('link', {
          [`link__color-${color}`]: Boolean(color),
          [`link__size-${size}`]: Boolean(size),
          [`${className}`]: Boolean(className),
        })}
        "
      >
        ${text}
      </a>
    `;
  }
}
