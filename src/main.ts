import Handlebars from 'handlebars';

import * as Layouts from './layouts';
import * as MainComp from './components';
import * as ChatComp from './pages/chat/components';

import { registerComponent } from './services/registerComponent';
import { navigate } from './services/navigate';

import Block from './services/Block';

import './styles/index.scss';

Object.entries(Layouts).forEach(([keys, comp]) => {
  Handlebars.registerPartial(keys, comp);
});

Object.entries({ ...MainComp, ...ChatComp }).forEach(([name, comp]) => {
  registerComponent(name, comp as typeof Block);
});

document.addEventListener('DOMContentLoaded', () => {
  navigate('change-password');
});
