import { AppState } from "@/interfaces/common";
import Block, { RefType } from "@/services/Block";
import { StoreEvents } from "@/services/Store";
import isEqual from "./isEqual";

export function connect(mapStateToProps: (state: AppState) => Partial<AppState>) {
  return function <P extends object, R extends RefType>(Component: typeof Block<P, R>) {
    return class extends Component {
      private onChangeStoreCallback: () => void;

      constructor(props: P) {
        const { store } = window;
        // сохраняем начальное состояние
        debugger
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
            // не забываем сохранить новое состояние
            state = newState;
          }
        };

        // подписываемся на событие
        store.on(StoreEvents.Updated, this.onChangeStoreCallback);
      }

      componentWillUnmount() {
        super.componentWillUnmount();
        window.store.off(StoreEvents.Updated, this.onChangeStoreCallback);
      }
    };
  };
}
