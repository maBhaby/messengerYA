import Block from "@/services/Block";

interface IProps {
  name: string
  placeholder: string
}

export class MessageInput extends Block<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  protected render() {
    const { name, placeholder } = this.props
    return (`
      <input 
        class='input-message' 
        type='text' 
        name='${name}' 
        placeholder='${placeholder}' 
      />
    `)
  }
}
