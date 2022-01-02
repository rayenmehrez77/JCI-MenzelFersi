import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import MessengerCustomerChat from "react-messenger-customer-chat";
import { Dropdown, Navbar, Spinner, ErrorBoundary } from "./components";

const HomePage = lazy(() => import("./Pages/HomePage"));
const EventsPage = lazy(() => import("./Pages/EventsPage"));

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="font-signika h-screen bg-gray mt-20">
      <div className="gradient top-line absolute top-0 left-0 w-full"></div>
      <Navbar
        showNav={showNav}
        clicked={clicked}
        setClicked={setClicked}
        scrollToTop={scrollToTop}
      />
      {clicked ? (
        <Dropdown
          showNav={showNav}
          clicked={clicked}
          setClicked={setClicked}
          scrollToTop={scrollToTop}
        />
      ) : null}
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<h1></h1>}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={EventsPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <MessengerCustomerChat
        pageId={process.env.PAGE_ID}
        appId={process.env.APP_ID}
      />
    </div>
  );
}

export default App;
