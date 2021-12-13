import { Route, Switch } from "react-router";
import { Navbar, NavbarReveal } from "./components";
import { HomePage, EventsPage } from "./Pages";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
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
    <div className="relative font-domine">
      <div className="gradient top-line"></div>
      {showNav ? <NavbarReveal /> : <Navbar />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
      </Switch>
      <MessengerCustomerChat
        pageId="100183858854793"
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
