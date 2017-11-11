Rails.application.routes.draw do
  namespace :api do
    resources :investors do
      resources :portfolios do
        resources :stocks
      end
    end
  end
end