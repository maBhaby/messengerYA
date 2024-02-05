import Block from "@/services/Block";
import { clsx } from "@/utils/clsx";

interface IProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5";
  size?: "20" | "40";
  weight?: "400" | "500";
  className?: string;
  text: string;
}

export class Title extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected render() {
    const { tag = "h3", size = "20", weight = "400", className = "", text } = this.props;
    return `
      <${tag} 
        class='
        ${clsx("title", {
          [`title__size-${size}`]: Boolean(size),
          [`title__weight-${weight}`]: Boolean(weight),
          [className]: Boolean(className),
        })}
      '>
        ${text}
      </${tag}>`;
  }
}
