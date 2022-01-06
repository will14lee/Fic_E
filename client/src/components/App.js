// client/src/components/App.js
import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from './LoginForm'
import SignUpForm from "./SignupForm";
import StoryForm from "../pages/MyUser/Stories/StoryForm";
import StoryDetails from "../pages/MyUser/Stories/StoryDetails";
import EditStory from "../pages/MyUser/Stories/EditStory";
import ChaptersIndex from "../pages/MyUser/Chapters/ChaptersIndex";
import ChapterForm from "../pages/MyUser/Chapters/ChapterForm";
import ChapterDetails from "../pages/MyUser/Chapters/ChapterDetails";
import EditChapter from "../pages/MyUser/Chapters/EditChapter";
import PagesIndex from "../pages/MyUser/Pages/PagesIndex";
import PageForm from "../pages/MyUser/Pages/PageForm";
import PageDetails from "../pages/MyUser/Pages/PageDetails";
import EditPage from "../pages/MyUser/Pages/EditPage";
import OtherStories from "../pages/Users/OtherStories";
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
    <BrowserRouter>
      <div className="App">
        <h1>Fic. E!</h1>
        <Switch>
          <Route path="/login">  <LoginForm/>  </Route>
          <Route path= "/signup">  <SignUpForm/>  </Route>
          <Route path="/new"> <StoryForm/> </Route>  
          <Route path= "/details"> <StoryDetails/> </Route>
          <Route path= "/edit"> <EditStory/> </Route>
          <Route path= "/:id/chapters"> <ChaptersIndex/> </Route>
          <Route path= "/:id/chapters/new"> <ChapterForm/> </Route>
          <Route path= "/:story_id/chapters/:id/details"> <ChapterDetails/> </Route>
          <Route path= "/:story_id/chapters/:id/edit"> <EditChapter/> </Route>
          <Route path= "/:story_id/chapters/:id/pages"> <PagesIndex/> </Route>
          <Route path= "/:story_id/chapters/:id/pages/new"> <PageForm/> </Route>
          <Route path= "/:story_id/chapters/:chapter_id/pages/:id">  <PageDetails/> </Route>
          <Route path= "/:story_id/chapters/:chapter_id/pages/:id/edit"> <EditPage/> </Route>
          <Route path= "/stories"> <OtherStories/> </Route>
          <Route path= "/stories/:id/chapters"> <OtherChapters/> </Route>
          <Route path= "/stories/:story_id/chapters/:id"> <OtherPages/> </Route>
          <Route path= "/stories/:story_id/chapters/:chapter_id/pages/:id"> <OtherPageDetails/> </Route>
          <Route path= "original_chapter/new"> <OriginalChapterForm/> </Route>
          <Route path= "/original_chapter/:id/details"> <OriginalChapterDetails/> </Route>
          <Route path= "original_chapter/:id/edit"> <EditOriginalChapter/> </Route>
          <Route path= "/original_chapter/:chapter_id/pages/new"> <OriginalPageForm/> </Route>
          <Route path= "/original_chapter/:chapter_id/pages/details"> <OriginalPageDetails/> </Route>
          <Route path= "/original_chapter/:chapter_id/pages/edit"> <EditOriginalPage/> </Route>
          <Route path="/">  <Home/>  </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;