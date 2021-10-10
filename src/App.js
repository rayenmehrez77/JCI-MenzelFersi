import { Route, Switch } from "react-router";
import { Navbar } from "./components";
import { HomePage, BlogPage } from "./Pages";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
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
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <HomePage clicked={clicked} setClicked={setClicked} />
          )}
        />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
      <MessengerCustomerChat pageId="100183858854793" appId="947531829136147" />
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
