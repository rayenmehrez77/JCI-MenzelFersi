import { Route, Switch } from "react-router";
import { Navbar } from "./components";
import { HomePage, BlogPage } from "./Pages";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="font-josefin">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
      <MessengerCustomerChat pageId="100183858854793" appId="947531829136147" />
    </div>
  );
}

export default App;
