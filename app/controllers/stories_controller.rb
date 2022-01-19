class StoriesController < ApplicationController
    before_action :authorize
    # , :this_story
    # before action :this_story
    # , only: [:show]
    # , :update, :destroy

    def stories_index
        stories= Story.all.order(:title)
        render json: stories
    end

    def index
        stories= user_stories
        render json: stories
    end
    
    def show
        this_story
        # story= user_stories.find_by(id: params[:id])
        render json: @story
    end
    
    def update
        story= user_stories.find_by(id: params[:id])
        story.update(story_params)
        render json: story
    end
    
    def create
        story= user_stories.create(story_params)
        render json: story, status: :created
    end
    
    def destroy
        story= user_stories.find_by(id: params[:id])
        story.destroy
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_stories
        user= User.find_by(id: session[:user_id])
        user.authored_stories
    end
    
    def this_story
        @story= user_stories.find_by(id: params[:id])
    end
    def story_params
        params.permit(:title, :premise, :genre, :status, :page_length)
    end
end
