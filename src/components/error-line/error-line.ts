import Block from "@/services/Block";

interface IProps {
  errorText?: string;
}

export class ErrorLine extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected render(): string {
    return `
      <span class="input__error-text">{{ errorText }}</span>
    `;
  }
}
