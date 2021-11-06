Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    # AUTH ROUTES
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update]
    
    # RESOURCES
    resources :genres, only: [:index, :show]
    resources :documentaries, only: [:index, :show]
  end
end
