import React, {Component,Fragment} from 'react';
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'scss/style.scss';
import Product from '../product/Product';
import AddProduct from '../product/addProduct';
import store from 'helper/store';
import history from 'helper/history';
import Header from '../product/Header';

export class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
          <Router
            basename={'/'}>
            <ConnectedRouter
              store={store}
              history={history}>
              <form>
              <Fragment>
                <Header />
                <div
                  className={'container-fluid'}>
                  <div
                    className={'row'}>
                    <div
                      className={'col-md-8 offset-md-2 mt-3'}>
                      <Switch>
                        <Route
                          component={Product}
                          exact={true}
                          path={'/Book List'}
                        />
                        <Route
                          component={AddProduct}
                          exact={true}
                          path={'/Add'}
                        />
                       
                        <Route
                          component={Product}
                          exact={true}
                          path={'/'}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              
              </Fragment>
              </form>
            </ConnectedRouter>
          </Router>
        );
      }
    }

