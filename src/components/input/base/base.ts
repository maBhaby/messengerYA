import Block from '@/services/Block';



interface IProps {
  className?: string
  name: string
  label: string
  valueInput?: string | number
  errorText?: string
  type?: 'text' | 'password'
  validate: (el?: string) => string
  onBlur: (e: Event) => void
}

export class BaseInput extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate()
    })
  }

  private validate() {
    const { value } = this;
    const error = this.props.validate?.(value);
    if (error) {
        this.setProps({ errorText: error });
        return false;
    }
    this.setProps({ errorText: undefined });
    return true;
}

  protected render() {
    const {
      name, 
      label, 
      className = '',
      errorText= '',
      type
    } = this.props
    // debugger
    return (`
      <div class="input ${ className }">
        <label for="${ name }" class="input__wrap">
          <span class="input__label">${ label }</span>
          {{{Input 
            name="${name}" 
            errorText="${errorText}" 
            type="${type}"
            onBlur=onBlur
          }}}
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
