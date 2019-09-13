import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Tab } from "semantic-ui-react";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" render={props => <CharacterList {...props} />} />
    </main>
  );
}
