import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import { Dropdown, Navbar, Spinner, ErrorBoundary } from "./components";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { MdKeyboardArrowUp } from "react-icons/md";

const HomePage = lazy(() => import("./Pages/HomePage"));
const EventsPage = lazy(() => import("./Pages/EventsPage"));

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [clicked, setClicked] = useState(false);

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
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={EventsPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <MessengerCustomerChat
        pageId="107210201631719"
        appId="947531829136147"
        className="fixed bottom-12 right-6"
      />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 gradient w-11 h-11 flex items-center justify-center shadow rounded cursor-pointer"
        >
          <MdKeyboardArrowUp className="w-8 h-6 text-white animate-bounce" />
        </button>
      )}
    </div>
  );
}

export default App;
