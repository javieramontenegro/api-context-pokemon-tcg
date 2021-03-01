import React from "react";
import CardsContextProvider from "./context/CardsContext";
import TypesContextProvider from "./context/TypeContext";
import CardsList from "./components/Cards/index";
import TypesList from "./components/Types/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <CardsContextProvider>
            <CardsList />
          </CardsContextProvider>
        </Route>
        <Route exact path="/types">
          <TypesContextProvider>
            <TypesList />
          </TypesContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
