import Handlebars from 'handlebars';

import './styles/index.scss';

import { registerComponent } from './services/registerComponent';
import { ButtonClass } from './components/button';
import { BaseInputClass } from './components/input/base';
import { CenterLayoutClass } from './layouts/center';
import * as Layouts from './layouts';
import { TitleClass } from './components/title';
import { 
  ErrorPageContent, 
  UserValueRowClass, 
  ChangeAvatarClass, 
  MessageInputClass, 
  SearchInputClass ,
  MessageClass,
  Input,
  ErrorLine
} from './components';

import {
  ChatItemClass,
  ChatListClass,
  SearchPanelClass,
  CurrentChatClass,
  ChatHeaderClass,
  ChatNewMessagePanelClass,
  ChatMessagesClass,
} from './pages/chat/components'

import { navigate } from './services/navigate';
import { LinkClass } from './components/link';



document.addEventListener('DOMContentLoaded', () => {
  navigate("chat");
});

Object.entries(Layouts).forEach(([keys, comp]) => {
  Handlebars.registerPartial(keys, comp)
})


registerComponent('ErrorLine', ErrorLine)
registerComponent('Button', ButtonClass)
registerComponent('Title', TitleClass)
registerComponent('CenterLayout', CenterLayoutClass)
registerComponent('BaseInput', BaseInputClass)
registerComponent('ErrorPageContent', ErrorPageContent)
registerComponent('UserValueRow', UserValueRowClass)
registerComponent('ChangeAvatar', ChangeAvatarClass)
registerComponent('Link', LinkClass)
registerComponent('MessageInput', MessageInputClass)
registerComponent('SearchInput', SearchInputClass)
registerComponent('Message', MessageClass)
registerComponent('Input', Input)

registerComponent('ChatItem', ChatItemClass)
registerComponent('ChatList', ChatListClass)
registerComponent('SearchPanel', SearchPanelClass)
registerComponent('CurrentChat', CurrentChatClass)
registerComponent('ChatHeader', ChatHeaderClass)
registerComponent('ChatNewMessagePanel', ChatNewMessagePanelClass)
registerComponent('ChatMessages', ChatMessagesClass)
