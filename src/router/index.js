import Loading from '../views/Loading'
import Loadable from 'react-loadable'

const
  Home = Loadable({
    loader: () => import('../views/Home'),
    loading: Loading
  }),
  User = Loadable({
    loader: () => import('../views/User'),
    loading: Loading
  }),
  Result = Loadable({
    loader: () => import('../views/Result'),
    loading: Loading
  }),
  Login = Loadable({
    loader: () => import("../views/Login"),
    loading: Loading
  }),
  Regist = Loadable({
    loader: () => import('../views/Regist'),
    loading: Loading
  }),
  NotFound = Loadable({
    loader: () => import('../views/NotFound'),
    loading: Loading
  })

export const adminroutes = [
  {
    pathname: "/index",
    component: Home,
  },
  {
    pathname: "/index/user",
    component: User,
  },
  {
    pathname: "/index/result",
    component: Result,
  }
]

export const mainroutes = [
 
  {
    pathname: "/login",
    component: Login,
  }, {
    pathname: "/regist",
    component: Regist,
  }, {
    pathname: "/404",
    component: NotFound,
  }
]

