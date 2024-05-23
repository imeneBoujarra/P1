/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home  Page",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-istanbul",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Room Controle",
    rtlName: "الرموز",
    icon: "tim-icons icon-badge",
    component: <Icons />,
    layout: "/admin",
  },
  {
  path: "/map",
  name: "View Historical",
  rtlName: "خرائط",
  icon: "tim-icons icon-pin",
  component: <Map />,
  layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
];
export default routes;
