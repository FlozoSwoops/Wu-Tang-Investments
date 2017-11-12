Rails.application.routes.draw do
  namespace :api do
    resources :investors do
    end
  end
end