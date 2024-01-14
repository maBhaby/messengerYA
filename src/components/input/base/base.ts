import Block from '@/services/Block';

import { clsx } from '@/utils/clsx';

interface IProps {
  className?: string
  name: string
  label: string
  value?: string | number
  errorText?: string
  type?: 'text' | 'password'
}

export class BaseInput extends Block<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  protected render() {
    const {
      name, 
      label, 
      value = '', 
      className = '',
      errorText= '',
      type = 'text'
    } = this.props
    return (`
      <div class="input ${ className }">
        <label for="${ name }" class="input__wrap">
          <span class="input__label">${ label }</span>
          <input
            id="${ name }"
            value="${ value }"
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
        </label>
        ${
          errorText ? `
          <span class="input__error-text">{{ errorText }}</span>
          ` : ''
        }
      </div>
    `)
  }
}
