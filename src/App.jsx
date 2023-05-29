import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import AppLayout from "./AppLayout";
import Loader from "./utils/Loader";
import NotFound from "./utils/404";

const Home = lazy(() => import("./components/Home/Home"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));

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
