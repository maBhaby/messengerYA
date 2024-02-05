import Block from "@/services/Block";

import { clsx } from "@/utils/clsx";

interface IProps {
  name: string;
  valueInput?: string | number;
  errorText?: string;
  type?: "text" | "password";
  onBlur: (e: Event) => void;
  classNameFirst?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

export class Input extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected init(): void {
    // debugger
    this.props.events = {
      blur: this.props.onBlur,
    };
  }

  protected render() {
    const {
      name,
      type = "text",
      errorText = "",
      classNameFirst = "input__field",
      placeholder,
      value,
      disabled,
    } = this.props;

    return `
      <input
        id="${name}"
        class="
        ${clsx(classNameFirst, {
          [`input__field--error`]: Boolean(errorText),
        })}
        "
        ${placeholder ? `placeholder='${placeholder}'` : ""}
        ${value !== undefined ? `value="${value}"` : ""}
        ${disabled ? `disabled="${disabled}"` : ""}
        name="${name}"
        type="${type}"
      />
    `;
  }
}
