# config/routes.rb
Rails.application.routes.draw do
  resources :story_listings
  resources :stories do
    resources :chapters do
      resources :pages
    end  
  end

get '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id', to: 'story_listings#original_chapter_show'
post '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id', to: 'story_listings#original_chapter_update'
delete '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id', to: 'story_listings#original_chapter_destroy'
get '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages', to: 'story_listings#original_pages_index'
get '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages/:id', to: 'story_listings#original_pages_show'
post '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages', to: 'story_listings#original_page_create'
patch '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages/:id', to: 'story_listings#original_pages_update'
delete '/other_stories/:story_id/users/:user_id/original_chapters/:chapter_id/my_users/:my_user_id/pages/:id', to: 'story_listings#original_pages_destroy'


get '/other_stories/:id', to: 'story_listings#other_story_show'
get '/other_stories/:story_id/users/:user_id/other_chapters/:chapter_id/pages', to: 'pages#other_pages_index'
get '/other_stories/:story_id/users/:user_id/other_chapters/:chapter_id/pages/:id', to: 'pages#other_pages_show'
get '/other_stories/:story_id/users/:user_id/other_chapters/:id', to: 'chapters#other_chapters_show'
get '/other_stories/:story_id/users/:user_id/other_chapters', to: 'chapters#other_chapters_index'
get '/all_stories', to: 'stories#stories_index'
get '/story_listings/:story_id/users/:user_id', to: 'story_listings#show'

  # get '/hello', to: 'application#hello_world'
post '/signup', to: 'users#create'
get '/me', to: 'users#show'
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end