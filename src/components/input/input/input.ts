import Block from "@/services/Block";

import { clsx } from '@/utils/clsx';

interface IProps {
  name: string
  valueInput?: string | number
  errorText?: string
  type?: 'text' | 'password'
  onBlur: (e:Event) => void
  classNameFirst?: string
  placeholder?: string
}

export class Input extends Block<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  protected init(): void {
    this.props.events = {
      blur: this.props.onBlur
    }
  }

  protected render() {
    const {
      name, 
      type = 'text',
      errorText= '',
      classNameFirst = 'input__field',
      placeholder
    } = this.props
    // debugger
    return (`
      <input
        id="${ name }"
        class="
        ${
          clsx(classNameFirst, {
            [`input__field--error`]: Boolean(errorText)
          })
        }
        "
        ${
          placeholder && `placeholder='${placeholder}'`
        }
        name="${ name }"
        type="${ type }"
      />
    `)
  }
}
