import React from 'react'
import Home from './Components/Home'
import { Route, Switch } from "react-router-dom";
import AllEducation from './Components/Pages/AllEducation';
import AllProjects from './Components/Pages/AllProjects';
import AllContact from './Components/Pages/AllContact';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/projects" component={AllProjects}></Route>
      <Route path="/education" component={AllEducation}></Route>
      <Route path="/contact" component={AllContact}></Route>
    </Switch>
    </>
  )
}

export default App
