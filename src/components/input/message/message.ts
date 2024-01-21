import { ErrorLine, Input } from '@/components';
import Block, { RefType } from '@/services/Block';

interface IRefs extends RefType {
  errLine: ErrorLine;
  inputVal: Input;
}

interface IProps {
  name: string;
  placeholder: string;
  errorText?: string;
  validate: (val?: string) => string;
  onBlur: (e: Event) => void;
  value?: string;
}

export class MessageInput extends Block<IProps, IRefs> {
  constructor(props: IProps) {
    // debugger
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  getValue() {
    if (!this.validate()) {
      return null;
    }

    return this.refs.inputVal.value;
  }

  private validate() {
    // debugger
    const { value } = this;
    const error = this.props.validate?.(value);
    if (error) {
      this.refs.errLine.setProps({ errorText: error });
      this.refs.inputVal.setProps({ value, errorText: error });
      return false;
    }
    this.refs.errLine.setProps({ errorText: undefined });
    this.refs.inputVal.setProps({ value, errorText: undefined });
    return true;
  }

  protected render() {
    const { name, placeholder } = this.props;
    return `
      <div class="input-message__wrap">
        {{{ 
          Input 
          classNameFirst="input-message" 
          name='${name}' 
          placeholder='${placeholder}'
          onBlur=onBlur
          value=value
          errorText=errorText
          ref="inputVal"
        }}}
        {{{ ErrorLine errorText=errorText ref="errLine" }}}
      <div>
    `;
  }
}
