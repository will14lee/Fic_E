class ChaptersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:other_story_show]

    
    def other_chapters_index
        chapters= other_user_chapters
        render json: chapters
    end
    
    def index
        chapters= user_chapters
        render json: chapters
    end
    
    def show
        chapter= this_chapter
        render json: chapter
    end
    
    def update
        chapter= this_chapter
        chapter.update(chapter_params)
        render json: chapter
    end
    
    def create
        chapter= Chapter.create(chapter_params)
        render json: chapter
    end
    
    def destroy
        chapter= this_chapter
        chapter.destroy
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def other_user_chapters
        user= User.find_by(username: params[:username])
        story= user.authored_stories.find_by(id: params[:id])
        story.chapters
    end

    def user_chapters
        user= User.find_by(id: session[:user_id])
        story= user.authored_stories.find_by(id: params[:story_id])
        story.chapters
    end
    
    def this_chapter
        user_chapters.find_by(id: params[:id])
    end
    def chapter_params
        params.permit(:id, :title, :summary, :characters, :story_id)
    end
end
