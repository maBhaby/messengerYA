import { ErrorLine, Input } from "@/components";
import Block, { RefType } from "@/services/Block";

interface IRefs extends RefType {
  errLine: ErrorLine
  inputVal: Input
}

interface IProps {
  name: string
  placeholder: string
  errorText?: string
  validate: (val?: string) => string
  onBlur: (e:Event) => void
}

export class MessageInput extends Block<IProps, IRefs> {
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
    const { name, placeholder } = this.props
    return (`
      {{{ 
        Input 
        classNameFirst="input-message" 
        name='${name}' 
        placeholder='${placeholder}'
        onBlur=onBlur
      }}}
      {{{ ErrorLine errorText=errorText ref="errLine" }}}
    `)
  }
}
