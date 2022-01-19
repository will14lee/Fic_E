class PagesController < ApplicationController
    before_action :authorize
    
    def index
        pages= user_pages
        render json: pages
    end
    
    def show
        page= this_page
        render json: page
    end
    
    def update
        page= this_page
        page.update(page_params)
        render json: page
    end
    
    def create
        user= User.find_by(id: session[:user_id])
        story= user.authored_stories.find_by(id: params[:story_id])
        story.increment(:page_length).save
        page= Page.create(page_params)
        render json: page
    end
    
    def destroy
        user= User.find_by(id: session[:user_id])
        story= user.authored_stories.find_by(id: params[:story_id])
        story.decrement(:page_length).save
        page= this_page
        page.destroy
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def other_user_pages
        user= User.find_by(username: params[:username])
        story= user.authored_stories.find_by(id: params[:id])
        story.pages
    end

    def user_pages
        user= User.find_by(id: session[:user_id])
        story= user.authored_stories.find_by(id: params[:story_id])
        story.chapters.find_by(id: [params[:chapter_id]]).pages
    end
    
    def this_page
        user_pages.find_by(id: params[:id])
    end
    def page_params
        params.permit(:id, :text, :notes, :chapter_id)
    end
end