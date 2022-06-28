import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const totalNewsPerPage = 9;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} key='general' totalNewsPerPage={totalNewsPerPage} country='in' category='general' />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} key='business' totalNewsPerPage={totalNewsPerPage} country='in' category='business' />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} key='entertainment' totalNewsPerPage={totalNewsPerPage} country='in' category='entertainment' />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} key='health' totalNewsPerPage={totalNewsPerPage} country='in' category='health' />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} key='science' totalNewsPerPage={totalNewsPerPage} country='in' category='science' />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} key='sports' totalNewsPerPage={totalNewsPerPage} country='in' category='sports' />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} key='technology' totalNewsPerPage={totalNewsPerPage} country='in' category='technology' />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App


