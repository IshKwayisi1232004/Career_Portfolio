import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { Home } from "./components/Home";
import { About } from "./components/AboutPage";
import { Contact } from "./components/ContactPage";
import { Skills } from "./components/SkillsPage";
import { Experience } from "./components/ExperiencePage";
import { Projects } from "./components/ProjectsPage";
import { ProjectDetails } from "./components/ProjectDetails";

import { PageTransition } from "./components/PageTransition";

import 'bootstrap/dist/css/bootstrap.min.css';


// ------------------------------------------------------------
// Route order
// ------------------------------------------------------------
// This determines which direction the page turns.
//
// Home
//   ↓
// About
//   ↓
// Projects
//   ↓
// Project Details
//   ↓
// Skills
//   ↓
// Experience
//   ↓
// Contact
// ------------------------------------------------------------

const getRouteIndex = (pathname) => {
  if (pathname === "/") return 0;
  if (pathname === "/about") return 1;
  if (pathname === "/projects") return 2;

  // Any individual project
  if (pathname.startsWith("/projects/")) return 3;

  if (pathname === "/skills") return 4;
  if (pathname === "/experience") return 5;
  if (pathname === "/contact") return 6;

  return 0;
};


// ------------------------------------------------------------
// Scroll to top when changing pages
// ------------------------------------------------------------

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};


// ------------------------------------------------------------
// Animated Routes
// ------------------------------------------------------------

const AnimatedRoutes = () => {
  const location = useLocation();

  // Remember the previous route
  const previousPath = useRef(location.pathname);

  const currentIndex = getRouteIndex(location.pathname);
  const previousIndex = getRouteIndex(previousPath.current);

  // Forward = 1
  // Backward = -1
  const direction = currentIndex >= previousIndex ? 1 : -1;

  useEffect(() => {
    previousPath.current = location.pathname;
  }, [location.pathname]);


  return (
    <>
      <ScrollToTop />

      <div className="route-stage">
        <AnimatePresence
          mode="wait"
          custom={direction}
        >
          <Routes
            location={location}
            key={location.pathname}
          >

            {/* HOME */}
            <Route
              path="/"
              element={
                <PageTransition direction={direction}>
                  <Home />
                </PageTransition>
              }
            />


            {/* ABOUT */}
            <Route
              path="/about"
              element={
                <PageTransition direction={direction}>
                  <About />
                </PageTransition>
              }
            />


            {/* PROJECTS */}
            <Route
              path="/projects"
              element={
                <PageTransition direction={direction}>
                  <Projects />
                </PageTransition>
              }
            />


            {/* INDIVIDUAL PROJECT */}
            <Route
              path="/projects/:projectId"
              element={
                <PageTransition direction={direction}>
                  <ProjectDetails />
                </PageTransition>
              }
            />


            {/* SKILLS */}
            <Route
              path="/skills"
              element={
                <PageTransition direction={direction}>
                  <Skills />
                </PageTransition>
              }
            />


            {/* EXPERIENCE */}
            <Route
              path="/experience"
              element={
                <PageTransition direction={direction}>
                  <Experience />
                </PageTransition>
              }
            />


            {/* CONTACT */}
            <Route
              path="/contact"
              element={
                <PageTransition direction={direction}>
                  <Contact />
                </PageTransition>
              }
            />

          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};


// ------------------------------------------------------------
// App
// ------------------------------------------------------------

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;