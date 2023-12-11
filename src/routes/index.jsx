import Home from "../pages/home";
import ProjectDetail from "../pages/project/detail";
//PublicRoutes
const publicRoutes = [
  {path:'/',component:Home},
  {path:'/project/:id/:name',component:ProjectDetail},
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };
