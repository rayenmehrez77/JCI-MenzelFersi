import { Route, Switch } from "react-router";
import { Navbar } from "./components";
import { HomePage, BlogPage } from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
    </>
  );
}

export default App;
