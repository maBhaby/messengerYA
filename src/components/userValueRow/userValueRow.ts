import Block, { RefType } from "@/services/Block";
import { Input, ErrorLine } from "..";

interface IProps {
  value?: string;
  disabled?: boolean;
  type?: "text" | "password";
  name: string;
  label: string;
  errorText?: string;
  validate: (el?: string) => string;
  onBlur: (e: Event) => void;
}

interface IRef extends RefType {
  inputRef: Input;
  errLine: ErrorLine;
}

export class UserValueRow extends Block<IProps, IRef> {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  getValue() {
    if (!this.validate()) {
      return null;
    }
    return this.refs.inputRef.value;
  }

  private validate() {
    const { value } = this;
    const error = this.props.validate?.(value);
    if (error) {
      this.refs.errLine.setProps({ errorText: error });
      this.refs.inputRef.setProps({ errorText: error, value });

      return false;
    }
    this.refs.errLine.setProps({ errorText: undefined });
    this.refs.inputRef.setProps({ errorText: undefined, value });

    return true;
  }

  protected render() {
    const { value, type = "text", name, label } = this.props;
    return `
      <div>
        <div class="user-value-row">
          <span class="user-value-row__label">${label}</span>
          {{{Input
            classNameFirst="user-value-row__input" 
            name="${name}" 
            type="${type}"
            ref="inputRef"
            value="${value}"
            disabled=disabled
            onBlur=onBlur
          }}}
        </div>
        <div class="user-value-row__err-line">
          {{{ ErrorLine errorText=errorText ref="errLine" }}}
        <div>
      </div>
    `;
  }
}
