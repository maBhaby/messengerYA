import { 
  LoginPageClass, 
  RegistrationPageClass, 
  Page404, 
  Page500 ,
  ProfilePageClass
} from "@/pages";
import { PageTypes } from "@/interfaces/common";
import { BlockClass }  from "./Block";

const pages: Record<PageTypes, BlockClass> = {
  login: LoginPageClass,
  registration: RegistrationPageClass,
  page404: Page404,
  page500: Page500,
  profile: ProfilePageClass
}

function initContent(rootNode: HTMLElement, page: PageTypes) {
  const Component = pages[page]
  const component = new Component();
  rootNode.append(component.getContent()!);
}

export const navigate = (page: PageTypes) => {
  const app = document.getElementById('app');
  
  if (app === null) {
    throw new Error('Error: не найдет элемент входа в приложение')
  } 
  
  initContent(app, page);
}

// const pages = {
//   // login: [Pages.LoginPage, { test: '123' }],
//   registration: [Pages.RegistrationPage],
//   page404: [Pages.ErrorPage, { errorCode: 404, errorMessage: 'Не туда попали' }],
//   page500: [Pages.ErrorPage, { errorCode: 500, errorMessage: 'Мы уже фиксим' }],
//   profile: [
//     Pages.ProfilePage,
//     {
//       userName: 'Иван',
//       images: {
//         userChangeImage,
//         arrowIcon,
//       },
//     },
//   ],
//   chat: [
//     Pages.ChatPage,
//     {
//       images: {
//         arrowIcon,
//         arrowWithoutLineIcon,
//         canonImage,
//         pinIcon,
//       },
//     },
//   ],
//   'profile-edit': [
//     Pages.ProfileEditPage,
//     {
//       images: {
//         userChangeImage,
//         arrowIcon,
//       },
//     },
//   ],
//   'change-password': [
//     Pages.ProfileChangePassword,
//     {
//       images: {
//         userChangeImage,
//         arrowIcon,
//       },
//     },
//   ],
// };
