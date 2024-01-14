import Block from "@/services/Block";

interface IProps {
  errorCode: number
  errorMessage: string
}

export class ErrorPageContent extends Block<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  protected render() {
    const { errorCode, errorMessage } = this.props
    return (`
      <main>
        <section class="center-layout">
          <div class="error-page">
            {{{ Title tag="h1" className="visually-hidden" text="Страница ошибки"}}}
            {{{ Title 
              tag="h2" 
              size="40" 
              weight="500" 
              className="error-page__title" 
              text="${ errorCode }"
            }}}
            <p class="error-page__desc">
              ${ errorMessage }
            </p>
            {{{ Button page="chat" colorTheme="transparent" size="xs" text="Назад к чатам"}}}
          </div>
        </section>
      </main>
    `)
  }
}
