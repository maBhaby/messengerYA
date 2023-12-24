import Handlebars from 'handlebars'

export { default as ProfilePage } from './profile.hbs?raw'

import { USER_VALUE } from './consts'

Handlebars.registerHelper('profileValue', (ctx, options) => {
  console.log('ctx', ctx);
  console.log('options', options, this);
  
  
  return USER_VALUE
})

