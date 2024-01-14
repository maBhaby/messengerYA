import './styles/index.scss';

import { registerComponent } from './services/registerComponent';
import { ButtonClass } from './components/button';
import { BaseInputClass } from './components/input/base';
import { CenterLayoutClass } from './layouts/center';
import { TitleClass } from './components/title';
import { ErrorPageContent, UserValueRowClass, ChangeAvatarClass } from './components';

import { navigate } from './services/navigate';



document.addEventListener('DOMContentLoaded', () => {
  navigate('profile');
});

registerComponent('Button', ButtonClass)
registerComponent('Title', TitleClass)
registerComponent('CenterLayout', CenterLayoutClass)
registerComponent('BaseInput', BaseInputClass)
registerComponent('ErrorPageContent', ErrorPageContent)
registerComponent('UserValueRow', UserValueRowClass)
registerComponent('ChangeAvatar', ChangeAvatarClass)
