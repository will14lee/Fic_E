class StoryListingsController < ApplicationController  
    before_action :authorize
    skip_before_action :authorize, only: [:other_story_show]
    
    def other_story_show
        story= Story.all.find_by(id: params[:id])
        render json: story
    end

    def index
        stories=listed_stories.map{|m| m.listed_story}
        render json: stories
    end
    
    def show
        story= this_story.listed_story
        render json: story
    end
    
    def update
    end
    
    def create
        user= User.find_by(id: session[:user_id])
        story= listed_stories.create(story_params)
        render json: story, status: :created
    end
    
    def destroy
        story= this_story
        story.delete
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def listed_stories
        stories= User.find_by(id: session[:user_id])
        stories.story_listings
    end
    
    def this_story
        listed_stories.find_by(listed_story_id: params[:id])
    end
    def story_params
        params.permit(:listed_story_id, :story_list_id)
    end
end
