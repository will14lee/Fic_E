class PagesController < ApplicationController

    def index
        # pages= users_pages.all
        # render json: pages
    end
        
    def show
        page=Page.find_by(id: params[:id])
        render json: page
        # page= this_page
        # render json: page
    end
        
    def update
        page=Page.find_by(id: params[:id])
        Page.update(page_params)
        render json: page
        # page= this_page
        # Page.update(page_params)
        # render json: page
    end
        
    def create
        page= Page.create(page_params)
        render json: page
        # page= users_pages.create(page_params)
        # render json: page, status: :created
    end
        
    def destroy
        page=Page.find_by(id: params[:id])
        # page= this_page
        Page.destroy
        head :no_content
    end
        
    private
    def authorize
        render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
    
    # def users_pages
    #     user= User.find_by(id: session[:user_id])
    #     user.pages
    # end
        
    # def this_page
    #     users_pages.find_by(id: params[:id])
    # end
    def page_params
        params.permit(:text, :notes)
    end
    
end
