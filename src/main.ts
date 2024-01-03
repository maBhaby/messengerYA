import Handlebars from 'handlebars'

import * as Pages from './pages'
import * as Components from './components'
import * as Layouts from './layouts'

import * as ChatComponents from './pages/chat/components'
import {
  arrowIcon,
  arrowWithoutLineIcon,
  canonImage,
  pinIcon,
  userChangeImage,
} from './static/images'

import './styles/index.scss'

const AllAppElements = {
  ...Pages,
  ...Components,
  ...Layouts,
  ...ChatComponents,
}

const pages = {
  login: [Pages.LoginPage, { test: '123' }],
  registration: [Pages.RegistrationPage],
  page404: [
    Pages.ErrorPage,
    { errorCode: 404, errorMessage: 'Не туда попали' },
  ],
  page500: [
    Pages.ErrorPage,
    { errorCode: 500, errorMessage: 'Мы уже фиксим' },
  ],
  profile: [
    Pages.ProfilePage,
    {
      userName: 'Иван',
      images: {
        userChangeImage,
        arrowIcon,
      },
    },
  ],
  chat: [
    Pages.ChatPage,
    {
      images: {
        arrowIcon,
        arrowWithoutLineIcon,
        canonImage,
        pinIcon,
      },
    },
  ],
  'profile-edit': [
    Pages.ProfileEditPage,
    {
      images: {
        userChangeImage,
        arrowIcon,
      },
    },
  ],
  'change-password': [
    Pages.ProfileChangePassword,
    {
      images: {
        userChangeImage,
        arrowIcon,
      },
    },
  ],
}

Object.entries(AllAppElements).forEach(
  ([name, components]) => {
    Handlebars.registerPartial(name, components)
  }
)

function initContent(source: any, context: any) {
  const container = document.getElementById('app')!
  container.innerHTML = Handlebars.compile(source)(context)
}

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page]
  initContent(source, context)
}

document.addEventListener('DOMContentLoaded', () => {
  navigate('login')
})

document.addEventListener('click', (e) => {
  //@ts-ignore
  const page = e.target.getAttribute('page')
  if (page) {
    navigate(page)

    e.preventDefault()
  }
})
