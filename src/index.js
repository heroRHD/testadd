import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router , Switch ,Redirect , Route} from "react-router-dom";
import store from './redux/sotre'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { mainroutes } from './router'
import './index.less'
const history = require("history").createHashHistory;

ReactDOM.render(
  <ConfigProvider locale={zhCN} >
    <Provider store={store}>
      <Router history={history}>
        <Switch>
         <Route path='/index' component={App} />
        {/* 展开路由 */}
        {
          mainroutes.map(route => {
            return <Route
            key={route.pathname} 
            path={route.pathname} 
            component={route.component} 
            exact
            />
          })
        }
        <Redirect to='/login' from='/' exact />
        <Redirect to='/404' />

      </Switch>
      </Router>
    </Provider>
  </ConfigProvider>
  ,
  document.getElementById('root')
);

