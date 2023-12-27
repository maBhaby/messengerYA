import Handlebars from 'handlebars'
import { PASSWORD_FIELDS_VALUE } from './consts'

export { default as ProfileChangePassword } from './profile-change-password.hbs?raw'

Handlebars.registerHelper('passwordValue', () => {
  return PASSWORD_FIELDS_VALUE
})
