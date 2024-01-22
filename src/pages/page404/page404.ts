import Block from '@/services/Block';

export class Page404 extends Block<object> {
  constructor() {
    super({})
  }
  
  protected render() {
    return `
      {{{ ErrorPageContent 
        errorCode="404" 
        errorMessage="Не туда попали" 
      }}}
    `;
  }
}
