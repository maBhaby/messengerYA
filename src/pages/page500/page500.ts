import Block from '@/services/Block';

export class Page500 extends Block<object> {
  constructor() {
    super({});
  }

  protected render() {
    return `
      {{{ ErrorPageContent 
        errorCode="500" 
        errorMessage="Мы уже фиксим" 
      }}}
    `;
  }
}
