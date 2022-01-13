class ChaptersController < ApplicationController
    # before_action :authorize
  
    def index
        chapters=Chapter.all
        render json: chapters
        # chapters= users_chapters.all
        # render json: chapters
    end
    
    def show
        chapter=Chapter.find_by(id: params[:id])
        render json: chapter
        # chapter= this_chapter
        # render json: chapter
    end
    
    def update
        chapter=Chapter.find_by(id: params[:id])
        Chapter.update(chapter_params)
        render json: chapter
        # chapter= this_chapter
        # Chapter.update(chapter_params)
        # render json: chapter
    end
    
    def create
        chapter= Chapter.create(chapter_params)
        render json: chapter
        # chapter= users_chapters.create(chapter_params)
        # render json: chapter, status: :created
    end
    
    def destroy
        chapter=Chapter.find_by(id: params[:id])
        # chapter= this_chapter
        Chapter.destroy
        head :no_content
    end
    
    private
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    # def users_chapters
    #     user= User.find_by(id: session[:user_id])
    #     user.chapters
    # end
    
    # def this_chapter
    #     users_chapters.find_by(id: params[:id])
    # end
    def chapter_params
        params.permit(:id, :title, :summary, :characters, :story_id)
    end
end
