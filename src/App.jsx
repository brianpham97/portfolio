import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import AppLayout from "./AppLayout";
import Loader from "./utils/Loader";
import NotFound from "./utils/404";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const Home = lazy(() => wait(300).then(() => import("./components/Home/Home")));

const Projects = lazy(() =>
  wait(300).then(() => import("./components/Projects/Projects"))
);
const About = lazy(() =>
  wait(300).then(() => import("./components/About/About"))
);

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/portfolio/*"
            element={
              <AppLayout>
                <ErrorBoundary>
                  <Suspense fallback={<Loader />}>
                    <Routes>
                      <Route path="projects" element={<Projects />}></Route>
                      <Route path="about" element={<About />}></Route>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
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
