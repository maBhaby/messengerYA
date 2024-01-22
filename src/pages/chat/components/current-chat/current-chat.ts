import Block from '@/services/Block';

export class CurrentChat extends Block<object> {
  constructor() {
    super({});
  }

  protected render() {
    return `
      <section class="current_chat">
        {{{ ChatHeader }}}
        {{{ ChatMessages }}}
        {{{ ChatNewMessagePanel }}}
      </section>
    `;
  }
}
