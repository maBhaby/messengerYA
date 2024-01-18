import Block from "@/services/Block";

import { clsx } from '@/utils/clsx';

interface IProps {
  name: string
  valueInput?: string | number
  errorText?: string
  type?: 'text' | 'password'
  onBlur: (e:Event) => void
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
      valueInput, 
      type = 'text',
      errorText= '',
    } = this.props
    // debugger
    return (`
      <input
        id="${ name }"
        class="
        ${
          clsx('input__field', {
            [`input__field--error`]: Boolean(errorText)
          })
        }
        "
        name="${ name }"
        type="${ type }"
      />
    `)
  }
}
