class StoriesController < ApplicationController
    before_action :authorize
  
    def stories_index
        stories= Story.all.order(:title)
        render json: stories
    end

    def index
        stories= users_stories
        render json: stories
    end
    
    def show
        story= this_story
        render json: story
    end
    
    def update
        story= this_story
        story.update(story_params)
        render json: story
    end
    
    def create
        story= users_stories.create(story_params)
        render json: story, status: :created
    end
    
    def destroy
        story= this_story
        story.destroy
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def users_stories
        user= User.find_by(id: session[:user_id])
        user.authored_stories
    end
    
    def this_story
        users_stories.find_by(id: params[:id])
    end
    def story_params
        params.permit(:title, :premise, :genre, :status, :page_length)
    end
end
