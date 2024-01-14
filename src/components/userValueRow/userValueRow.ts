import Block from '@/services/Block'

interface IProps {
  value?: string
  disabled?: boolean
  type?: 'text' | 'password'
  name: string
  label: string
}

export class UserValueRow extends Block<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  protected render() {
    const { value, disabled, type='text', name, label } = this.props
    return (`
      <div class="user-value-row">
        <span class="user-value-row__label">${label}</span>
        <input 
          class="user-value-row__input" 
          value="${value}" 
          ${
            disabled ? `disabled="${disabled}"` : ''
          }
          type="${type}" 
          name="${name}"
        >
      </div>
    `)
  }
}
