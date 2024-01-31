import Handlebars from 'handlebars';

import * as Layouts from './layouts';
import * as MainComp from './components';
import * as ChatComp from './pages/chat/components';

import { registerComponent } from './services/registerComponent';

import Block from './services/Block';

import './styles/index.scss';
import { router } from './lib/router';
import { 
  LoginPageClass, 
  RegistrationPageClass, 
  ChatPageClass,
  // Page404,
  Page500,
  ProfilePageClass,
  ProfileChangePasswordClass,
  ProfileEditPageClass
} from './pages';

const bootstrap = () => {
  const initRoutes = () => {
    router
      .use('/login', LoginPageClass)
      .use('/registration', RegistrationPageClass)
      .use('/chat', ChatPageClass)
      .use('/page500', Page500)
      .use('/profile', ProfilePageClass)
      .use('/profile-edit', ProfileEditPageClass)
      .use('/change-password', ProfileChangePasswordClass)
      .start()
  }

  initRoutes()
}

Object.entries(Layouts).forEach(([keys, comp]) => {
  Handlebars.registerPartial(keys, comp);
});

Object.entries({ ...MainComp, ...ChatComp }).forEach(([name, comp]) => {
  registerComponent(name, comp as typeof Block);
});

document.addEventListener('DOMContentLoaded', () => {
  // navigate("login");
  bootstrap()
});


