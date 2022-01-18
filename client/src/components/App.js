// client/src/components/App.js
import '../App.css';
import Navbar from './Navbar'
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from './LoginForm'
import SignUpForm from "./SignupForm";
import StoryForm from "../pages/MyUser/Stories/StoryForm";
import StoryDetails from "../pages/MyUser/Stories/StoryDetails";
import EditStory from "../pages/MyUser/Stories/EditStory";
import ChapterForm from "../pages/MyUser/Chapters/ChapterForm";
import ChapterDetails from "../pages/MyUser/Chapters/ChapterDetails";
import EditChapter from "../pages/MyUser/Chapters/EditChapter";
import PageForm from "../pages/MyUser/Pages/PageForm";
import PageDetails from "../pages/MyUser/Pages/PageDetails";
import EditPage from "../pages/MyUser/Pages/EditPage";
import OtherStories from "../pages/Users/OtherStories";
import OtherStoryDetails from "../pages/Users/OtherStoryDetails";
import OtherChapters from "../pages/Users/OtherChapters";
import OtherPages from "../pages/Users/OtherPages";
import OtherPageDetails from "../pages/Users/OtherPageDetails";
import OriginalChapterForm from "../pages/MyUser/OriginalChapters/OriginalChapterForm";
import OriginalChapterDetails from "../pages/MyUser/OriginalChapters/OriginalChapterDetails";
import EditOriginalChapter from "../pages/MyUser/OriginalChapters/EditOriginalChapter";
import OriginalPageForm from "../pages/MyUser/OriginalPages/OriginalPageForm";
import OriginalPageDetails from "../pages/MyUser/OriginalPages/OriginalPageDetail";
import EditOriginalPage from "../pages/MyUser/OriginalPages/EditOriginalPage";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <h1>Fic. E!</h1>
        <Navbar/>
        <Switch>
          <Route exact path="/login">  <LoginForm/>  </Route>
          <Route exact path= "/signup">  <SignUpForm/>  </Route>
          <Route exact path="/new"> <StoryForm/> </Route>  
          <Route exact path= "/:id/chapters/new"> <ChapterForm/> </Route>
          <Route exact path= "/:id/edit"> <EditStory/> </Route>
          <Route exact path= "/:story_id/chapters/:id/pages/new"> <PageForm/> </Route>
          <Route exact path= "/:story_id/chapters/:id/edit"> <EditChapter/> </Route>
          <Route exact path= "/:story_id/chapters/:id"> <ChapterDetails/> </Route>
          <Route exact path= "/:story_id/chapters/:chapter_id/pages/:id">  <PageDetails/> </Route>
          <Route exact path= "/:story_id/chapters/:chapter_id/pages/:id/edit"> <EditPage/> </Route>
          <Route exact path= "/stories/:username/:id"> <OtherStoryDetails/> </Route>
          <Route exact path= "/stories"> <OtherStories/> </Route>
          <Route exact path= "/stories/:id/chapters"> <OtherChapters/> </Route>
          <Route exact path= "/stories/:story_id/chapters/:id"> <OtherPages/> </Route>
          <Route exact path= "/stories/:story_id/chapters/:chapter_id/pages/:id"> <OtherPageDetails/> </Route>
          <Route exact path= "/stories/:username/:id/original_chapter/new"> <OriginalChapterForm/> </Route>
          <Route exact path= "/original_chapter/:id/details"> <OriginalChapterDetails/> </Route>
          <Route exact path= "original_chapter/:id/edit"> <EditOriginalChapter/> </Route>
          <Route exact path= "/original_chapter/:chapter_id/pages/new"> <OriginalPageForm/> </Route>
          <Route exact path= "/original_chapter/:chapter_id/pages/details"> <OriginalPageDetails/> </Route>
          <Route exact path= "/original_chapter/:chapter_id/pages/edit"> <EditOriginalPage/> </Route>
          <Route exact path= "/:id"> <StoryDetails/> </Route>
          <Route exact path="/">  <Home/>  </Route>
        </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;