import Block from "@/services/Block";

import { clsx } from "@/utils/clsx";

interface IProps {
  image?: string
  message?: string
  time: string
  type: string
  className?: string
}

export class Message extends Block<IProps> {
  constructor (props: IProps) {
    super(props)
  }

  protected render() {
    const { image, className, time, message, type } = this.props
    return (`
      ${image ? `
        <div class='${clsx('message', {
          'message__type--image': true,
          [`${className}`]: Boolean(className)
        })}'>
          <img 
            src='${image}' 
            alt='фото сообщения'
            width='300' 
            height='' 
          />
          <div class='message__bottom message__bottom--image'>
            <div class='message__time'>
              ${time}
            </div>
          </div>
        </div>
      ` : `
        <div 
          class='${clsx('message', {
            [`message__type--${type}`]: Boolean(type),
            [`${className}`]: Boolean(className)
          })}'>
          <p>
            ${message}
          </p>
          <div class='message__bottom'>
            <div class='message__time'>
              ${time}
            </div>
          </div>
        </div>
      `}
    `)
  }
}
