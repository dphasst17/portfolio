import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index.jsx";
import { Fragment } from "react";
import DefaultLayout from "./components/layout/defaultLayout/index.jsx";
import { StateProvider } from "./context/stateContext.jsx";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3brZ_2txg8oJhEiKCxuly0xmiCl29_ms",
  authDomain: "portfolio-e42aa.firebaseapp.com",
  projectId: "portfolio-e42aa",
  storageBucket: "portfolio-e42aa.appspot.com",
  messagingSenderId: "237490501820",
  appId: "1:237490501820:web:30128a657c1e1414f5b8b9",
  measurementId: "G-CNXFFR4QM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
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