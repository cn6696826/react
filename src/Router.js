import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Buttons from "./pages/ui/Button/index";
import Modals from "./pages/ui/modals/index";
import Loading from "./pages/ui/loadings/index";
import Login from "./pages/form/login/index";
import Register from "./pages/form/register/index";
import Tables from "./pages/tables/index";
import Citys from "./pages/citys/index";
import Order from "./pages/order/index";
import OrderDetail from "./pages/order/detail";
import Bars from "./pages/echarts/bar/index";
import Nomatch from "./pages/nomatch/index";
import Common from "./common";
import Permissor from "./pages/permissor/index";
export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loadings" component={Loading} />
                <Route path="/admin/form/login" component={Login} />
                <Route path="/admin/form/register" component={Register} />
                <Route path="/admin/table/basic" component={Tables} />
                <Route path="/admin/city" component={Citys} />
                <Route path="/admin/charts/bar" component={Bars} />
                <Route path="/admin/permission" component={Permissor} />
                <Route component={Nomatch} />
              </Admin>
            )}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/common"
            render={() => {
              return (
                <Common>
                  <Route
                    path="/common/order/detail/:orderId"
                    component={OrderDetail}
                  />
                </Common>
              );
            }}
          />
        </App>
      </Router>
    );
  }
}
