import Block from "@/services/Block";
import { PageTypes } from "@/interfaces/common";

import { clsx } from "@/utils/clsx";

interface IProps {
  className?: string;
  color?: "blue" | "red" | "gray";
  size?: "default";
  text: string;
  page?: PageTypes;
  onClick: (e: Event) => void;
}

export class Link extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render() {
    const { className, color, size, text, page } = this.props;
    return `
      <a
        ${page !== undefined ? 'page="{{ page }}"' : ""} 
        class="${clsx("link", {
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
