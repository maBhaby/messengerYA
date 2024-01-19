import { ErrorLine, Input } from '@/components';
import Block, { RefType } from '@/services/Block';

interface IRefs extends RefType {
  errLine: ErrorLine
  inputVal: Input
}

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

export class BaseInput extends Block<IProps, IRefs> {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate()
    })
  }

  getValue() {
    if (!this.validate()) {
      return null
    }

    return this.refs.inputVal.value
  }

  private validate() {
    debugger
    const { value } = this;
    const error = this.props.validate?.(value);
    if (error) {
        this.refs.errLine.setProps({ errorText: error });
        return false;
    }
    this.refs.errLine.setProps({ errorText: undefined });
    return true;
  }

  protected render() {
    const {
      name, 
      label, 
      className = '',
      type
    } = this.props
    return (`
      <div class="input ${ className }">
        <label for="${ name }" class="input__wrap">
          <span class="input__label">${ label }</span>
          {{{Input 
            name="${name}" 
            type="${type}"
            onBlur=onBlur
            ref="inputVal"
          }}}
        </label>
        {{{ ErrorLine errorText=errorText ref="errLine" }}}
      </div>
    `)
  }
}
