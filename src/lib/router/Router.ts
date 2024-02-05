import { BlockClass } from "../../services/Block";
import { Route } from "./Route";

class Router<Paths extends string = string> {
  private routes: Route[];

  private history: History;

  private _currentRoute: Route | null;

  private _rootQuery: string;

  constructor(rootQuery: string) {
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
  }

  use(pathname: Paths, block: BlockClass<object>) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      const currentTarget = event.currentTarget as Window;
      this._onRoute(currentTarget.location.pathname as Paths);
    };

    this._onRoute(window.location.pathname as Paths);
  }

  _onRoute(pathname: Paths) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    if (route !== undefined) {
      this._currentRoute = route;
      route.render();
    }
  }

  go(pathname: Paths) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  getRoute(pathname: Paths) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default Router;
