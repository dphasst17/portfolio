import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index.jsx";
import { Fragment } from "react";
import DefaultLayout from "./components/layout/defaultLayout/index.jsx";
import { StateProvider } from "./context/stateContext.jsx";
const App = () => {
  return <StateProvider>
    <Router>
      <div className="App w-full h-auto">
        <Routes>
          {publicRoutes.map((route) => {
            const Pages = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Pages />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  </StateProvider>
}
export default App