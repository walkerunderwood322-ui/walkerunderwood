import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Life from "@/pages/Life";
import Gear from "@/pages/Gear";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/life" component={Life} />
        <Route path="/gear" component={Gear} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
