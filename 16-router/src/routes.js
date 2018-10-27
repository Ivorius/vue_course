import Home from './components/Home';
import Header from './components/Header';

// import User from './components/user/User';
// import UserStart from './components/user/UserStart';
// import UserDetail from './components/user/UserDetail';
// import UserEdit from './components/user/UserEdit';

//WEBPACK to rozdělí do balíčků aby šetřil místo a načte jen když bude třeba/ Lazy loading

//nově webpack https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/questions/5274296
//const User = () => import('./components/user/User.vue');
//const UserStart = () => import(webpackChunkName: 'user-group', './components/user/UserStart');
const User = () => System.import('./components/user/User.vue');


//webpack postaru podle videa
// const User = resolve => {
//   require.ensure(['./components/user/User'], () => {
//     resolve(require('./components/user/User'));
//   }, 'user');
// };

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart'], () => {
    resolve(require('./components/user/UserStart'));
  }, 'user');
};

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail'], () => {
    resolve(require('./components/user/UserDetail'));
  }, 'user');
};

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit'], () => {
    resolve(require('./components/user/UserEdit'));
  }, 'user');
};

export const routes = [
  // {path: '/user/:id', component: User, props: true }, //použití props
  {path: '/', name: 'home', components: {
      default: Home,  //na co se odkazuji
      'header-top': Header //tady nastavuji jaka komponenta se ma nacist v router-view name=header-top kdyz jsem na dane komonente
    } },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      { path: '', component: UserStart}, //defaultně načte protože path je stejná jako vyšší routa
      { path: ':id', component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside route: beforeEnter()');
          next();
        }},
      { path: ':id/edit', component: UserEdit, name: 'userEdit'},
    ] },
  { path: '/redirect-me', redirect: {name: 'userDetail'} },
  { path: '*', redirect: {name: 'home'} } //zachytí všechny ostatní cesty a přesměruje na home
];
