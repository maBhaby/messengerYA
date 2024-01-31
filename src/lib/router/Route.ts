import Block, { BlockClass } from "../../services/Block";

type PropsType = {
  rootQuery: string
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root === null) throw new Error('Could not find the application login')
  
  const content = block.getContent()
  if (content !== null) {
    root.appendChild(content);
  }
  
  return root;
}

export class Route {

  private _pathname: string

  private _blockClass: BlockClass<object>

  private _block: Block | null

  private _props: PropsType

  constructor(pathname: string, view: BlockClass<object>, props: PropsType) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
