import Block, { RefType } from "@/services/Block"

export const privateRoute = <P extends object, R extends RefType>
  (Component: typeof Block<P, R>) =>
  class extends Component {
    constructor() {
      super()
      // debugger
      // this.getEventBus()
      super.getEventBus().on(Block.EVENTS.INIT, this.checkAuthUser.bind(this))
    }

    private checkAuthUser(): void {
      console.log('with Private');
    }

}
