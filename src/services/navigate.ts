import {
  LoginPageClass,
  RegistrationPageClass,
  Page404,
  Page500,
  ProfilePageClass,
  ProfileChangePasswordClass,
  ProfileEditPageClass,
  ChatPageClass,
} from '@/pages';
import { PageTypes } from '@/interfaces/common';
import { BlockClass } from './Block';

const pages: Record<PageTypes, BlockClass<object>> = {
  login: LoginPageClass,
  registration: RegistrationPageClass,
  page404: Page404,
  page500: Page500,
  profile: ProfilePageClass,
  'change-password': ProfileChangePasswordClass,
  'profile-edit': ProfileEditPageClass,
  chat: ChatPageClass,
};

function initContent(rootNode: HTMLElement, page: PageTypes) {
  const Component = pages[page];
  const component = new Component();
  rootNode.append(component.getContent()!);
}

export const navigate = (page: PageTypes) => {
  const app = document.getElementById('app');

  if (app === null) {
    throw new Error('Error: не найдет элемент входа в приложение');
  }

  initContent(app, page);
};
