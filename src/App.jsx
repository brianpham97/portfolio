import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import AppLayout from "./AppLayout";
import ElementLoader from "./utils/ElementLoader";
import Loader from "./utils/Loader";
import NotFound from "./utils/404";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const Home = lazy(() =>
  wait(3500).then(() => import("./components/Home/Home"))
);

const Projects = lazy(() =>
  wait(1000).then(() => import("./components/Projects/Projects"))
);
const About = lazy(() =>
  wait(1000).then(() => import("./components/About/About"))
);

const App = () => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const loadElements = setTimeout(() => {
      setFirstRender(false);
    }, 4000);

    return () => clearTimeout(loadElements);
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={firstRender ? <ElementLoader /> : <Loader />}>
        <Routes>
          <Route
            path="/portfolio/*"
            element={
              <AppLayout>
                <ErrorBoundary>
                  <Routes>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="*" element={<NotFound />} />
                    <Route index element={<Home />}></Route>
                  </Routes>
                </ErrorBoundary>
              </AppLayout>
            }
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
