import Block from "@/services/Block";

interface IProps {
  children: string
}

export class CenterLayout extends Block<IProps> {
  constructor (props: IProps) {
    super(props)
  }

  protected render() {
    const {children} = this.props
    return (`
      <main>
        <section class="center-layout">
          ${children}
        </section>
      </main>`
    )
  }
}
