import Block, { RefType } from "@/services/Block"

export const privateRoute = <P extends object, R extends RefType>
  (Component: typeof Block<P, R>) =>
  class extends Component {

    protected init(): void {
      console.log('with Private');
      
    }
  }
