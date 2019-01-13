Rails.application.routes.draw do
  resources :areas do
      resources :stores do
        resources :models
      end
    end

    resources :stores
    resources :models

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
