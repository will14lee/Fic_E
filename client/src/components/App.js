// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from './LoginForm'
import SignUpForm from "./SignupForm";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Fic. E!</h1>
        <Switch>
          <Route path="/login">  <LoginForm/>  </Route>

          <Route path= "/signup">  <SignUpForm/>  </Route>

          <Route path="/">  <Home/>  </Route>

          <Route path= "/new">  </Route>  
          
          <Route path= "/details">  </Route>

          <Route path= "/edit">  </Route>

          <Route path= "/:id/chapters">  </Route>

          <Route path= "/:id/chapters/new">  </Route>

          <Route path= "/:id/chapters/edit">  </Route>
          
          <Route path= "/:story_id/chapters/:id/pages">  </Route>

          <Route path= "/:story_id/chapters/:chapter_id/pages/:id">   </Route>

          <Route path= "/:story_id/chapters/:chapter_id/pages/:id/new">  </Route>

          <Route path= "/:story_id/chapters/:id/pages/new">  </Route>
          
          <Route path= "/:story_id/chapters/:id/pages/new">  </Route>

          <Route path= "/:story_id/chapters/:id/pages/edit">  </Route>

          <Route path= "/stories">  </Route>
          
          <Route path= "/stories/:username/chapters/details">  </Route>
          
          <Route path= "/stories/:username/chapters/:id/pages">  </Route>
          
          <Route path= "/stories/:username/chapters/:chapter_id/pages/:id">  </Route>

          <Route path= "/original_chapter/:id">  </Route>

          <Route path= "/original_chapter/:id/new">  </Route>

          <Route path= "/original_chapter/:id/pages/new">  </Route>

          <Route path= "/original_chapter/:chapter_id/pages/:id/edit">  </Route>

          <Route path= "/original_chapter/:chapter_id/pages/:id/edit">  </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;