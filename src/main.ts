import Handlebars from 'handlebars'

import * as Pages from './pages'
import * as Components from './components'
import * as Layouts from './layouts'

import './styles/index.scss'

const pages = {
  'login': [ Pages.LoginPage, {test: '123'} ]
};

Object.entries(Components).forEach(([ name, components ]) => {
  Handlebars.registerPartial(name, components)
})

Object.entries(Layouts).forEach(([ name, components ]) => {
  Handlebars.registerPartial(name, components)
})

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});