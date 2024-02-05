import Block from "@/services/Block";

export class ChatMessages extends Block<object> {
  protected render() {
    return `
    <div class="chat-messages">
      {{#each (messagesList)}}
      <div class="chat-messages__story">
        <div class="chat-messages__story_time">
          {{ date }}
        </div>
        <ul class="chat-messages__list">
          {{#each this.messages}}
            <li 
              class="chat-messages__type 
              chat-messages__type--{{ this.type }}"
            >
              {{{ Message 
                type=this.type
                time=this.time
                message=this.message
                image=this.image
              }}}
            </li>
          {{/each}}
        </ul>
      </div>
      {{/each}}
    </div>
    `;
  }
}
