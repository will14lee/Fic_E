class StoryListingsController < ApplicationController  
    before_action :authorize
    skip_before_action :authorize, only: [:other_story_show]
    
    # "/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id">
    def other_story_show
        story= this_story
        render json: story
    end

    def original_chapter_show
        original_story
        render json: @chapter
    end
    
    def original_chapter_update
        original_story
        updated_chapter= @chapter.update(:title, :summary, :characters)
        render json: updated_chapter
    end

    def original_chapter_destroy
        original_story
        @chapter.destroy
        head :no_content
    end

    def original_page_create
        original_story
        new_chapter=@chapter.pages.create(text: params[:text], notes: params[:notes])
        render json: new_chapter, status: :created
    end

    def original_pages_index
        original_story
        pages= @chapter.pages
        render json: pages
    end

    def original_page_show
        original_story
        page= @chapter.pages.find_by(id: params[:id])
        render json: page
    end

    def original_page_update
        original_story
        page= @chapter.pages.find_by(id: params[:id])
        updated_page= page.update(:text, :notes)
        render json: updated_page
    end

    def original_page_destroy
        original_story
        page= @chapter.pages.find_by(id: params[:id])
        page.destroy
        head :no_content
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

    def original_story
        story= User.find_by(id: params[:user_id]).authored_stories.find_by(id: params[:story_id])
        @chapter= story.chapters.find_by(id: params[:chapter_id])
    end

    def story_params
        params.permit(:listed_story_id, :story_list_id)
    end
end

