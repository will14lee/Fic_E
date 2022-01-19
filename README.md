## Fic E Application
    Hello, welcome to Fic E. the story reading and writing application! Here's how to get started

Ruby Version "2.7.4"

* To Run the application:
    Start by cloning the application into your desired repository and removing the remote: 
        $git clone git@github.com:will14lee/Fic_E.git
        $cd Fic_E
        $git remote rm origin
    After this connect the remote to your local repository and push the code 
        $ git remote add origin git@github.com:your-username/your-project-name.git
        $ git push -u origin main
    When you are ready to begin manipulating the project install the dependencies with:
        $bundle install 
        $npm install --prefix client
    To create the database:
        $rails db:create
    To run the front-end at http://localhost:3000 :
        $npm start --prefix client 
    To run the back-end at http://localhost:4000 :
        $rails s 
    Perform a migration with:
        $rails db:migrate

* Services
    In the following application you can navigate between 22 different pages. 
    
    ##Login
        Upon running the application you will automatically be redirected to the Login page, from here navigate to the Sign-Up page. 
    ##Sign-Up
        Here you will be prompted to fill out the user info: username, password, password confirmation, image_url, and bio.
    ##Home
        Once the following is filled out click submit, and if the username isn't already registered then congratulations, you will automatically be logged into the application and directed to the Home page.
        The home page will have an about which will give the user information about the application, it's uses and links to get to navigate to other pages.
        Also in the home there will be two lists: the User's Reading list, and the User's Stories.
    ##Other Stories
        If you wish to populate your reading list first, all you have to do is click on one of the two links on the Home page where you'll be directed to a Stories List. Here you may view the stories written by other users, you will be able to see each stories: title, author, page length, a shortened premise(which can be expanded), genre, and status. 
        There is also a search tool for both the author and title of a story which will allow you to swiftly find a story. 
        Once you found a story that fits your interests simply click on the add to reading list button, and Voila! you will be directed to the Home page where you'll see the story you just added.
    ##User's Stories
        Here you will be able to create stories, filling in a title, a premise, and genre. Once created other users will be allowed to view your stories, that you have created.
    ##Chapters and Pages
        Once the stories are created you will be able to do all of the CRUD (Create, Read, Update, and Delete) operations to them. Stories also has_many chapters which have a title, summary, author, and characters. And stories also has_many pages through chapters and the pages have text, and notes. The chapters and pages also have all the CRUD operations to them as well.
    ##Original Chapters and Pages
        A unique thing about this application is that once you have a reading list compiled you are able to go to other User's stories and create original chapters and original pages which will give credit to you as a unique author. 
        For the original chapters and pages, all CRUD operations are also available.
        



