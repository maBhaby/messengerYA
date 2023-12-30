import Handlebars from 'handlebars'

export { default as ProfilePage } from './profile.hbs?raw'

import { USER_VALUE } from './consts'
// TODO - вынести хелпер
Handlebars.registerHelper('profileValue', () => {
  return USER_VALUE
})
