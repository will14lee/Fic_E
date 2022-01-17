# config/routes.rb
Rails.application.routes.draw do
  resources :story_listings
  resources :stories do
    resources :chapters do
      resources :pages
    end  
  end

get '/:username/:id/other_chapters', to: 'chapters#other_chapters_index'
get '/other_story/:id', to: 'story_listings#other_story_show'
get '/all_stories', to: 'stories#stories_index'


  # get '/hello', to: 'application#hello_world'
post '/signup', to: 'users#create'
get '/me', to: 'users#show'
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end