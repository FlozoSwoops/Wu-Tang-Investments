Rails.application.routes.draw do
  namespace :api do
    resources :investors do
      resources :portfolios 
    end
  end
end