// THIS FILE WILL BE HANDLED WITH WEBPACK VIA SPAWN PROCESS

import m from 'mithril';


m.mount(document.querySelector('#some-node'), {
  view: () => m('h1', 'Hello World!')
})