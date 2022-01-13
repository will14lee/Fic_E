class StoriesController < ApplicationController
    before_action :authorize
  
    def index
        stories=Story.all
        render json: stories
        # stories= users_stories.all
        # render json: stories
    end
    
    def show
        story=Story.find_by(id: params[:id])
        render json: story
        # story= this_story
        # render json: story
    end
    
    def update
        story=Story.find_by(id: params[:id])
        story.update(story_params)
        render json: story
        # story= this_story
        # story.update(story_params)
        # render json: story
    end
    
    def create
        story= Story.create(story_params)
        render json: story
        # story= users_stories.create(story_params)
        # render json: story, status: :created
    end
    
    def destroy
        story=Story.find_by(id: params[:id])
        # story= this_story
        story.destroy
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    # def users_stories
    #     user= User.find_by(id: session[:user_id])
    #     user.stories
    # end
    
    # def this_story
    #     users_stories.find_by(id: params[:id])
    # end
    def story_params
        params.permit(:title, :premise, :genre, :status, :page_length)
    end
end
