// client/src/components/App.js
import '../App.css';
import Navbar from './Navbar'
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
import OtherChapterDetails from '../pages/Users/OtherChapterDetails';
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
        <h1>Fic. E</h1>
        <Switch>
          <Route exact path="/login">  <LoginForm/>  </Route>
          <Route exact path= "/signup">  <SignUpForm/>  </Route>

          <Route exact path= "/stories/new"> <StoryForm/> </Route>  
          <Route exact path= "/stories/:story_id"> <StoryDetails/> </Route>
          <Route exact path= "/stories/:story_id/edit"> <EditStory/> </Route>

          <Route exact path= "/stories/:story_id/chapters/new"> <ChapterForm/> </Route>
          <Route exact path= "/stories/:story_id/chapters/:id"> <ChapterDetails/> </Route>
          <Route exact path= "/stories/:story_id/chapters/:id/edit"> <EditChapter/> </Route>

          <Route exact path= "/stories/:story_id/chapters/:id/pages/new"> <PageForm/> </Route>
          <Route exact path= "/stories/:story_id/chapters/:chapter_id/pages/:id">  <PageDetails/> </Route>
          <Route exact path= "/stories/:story_id/chapters/:chapter_id/pages/:id/edit"> <EditPage/> </Route>

          <Route exact path= "/other_stories"> <OtherStories/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id"> <OtherStoryDetails/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id/chapters/:chapter_id"> <OtherChapterDetails/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id/chapters/:chapter_id/pages/:id"> <OtherPageDetails/> </Route>

          <Route exact path= "/other_stories/:story_id/users/:user_id/original_chapters/new"> <OriginalChapterForm/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id"> <OriginalChapterDetails/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/edit"> <EditOriginalChapter/> </Route>

          <Route exact path= "/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages/new"> <OriginalPageForm/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages/:id"> <OriginalPageDetails/> </Route>
          <Route exact path= "/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages/:id/edit"> <EditOriginalPage/> </Route>
          <Route exact path="/">  <Home/>  </Route>
        </Switch>
        <Navbar/>
    </BrowserRouter>
      </div>
  );
}

export default App;