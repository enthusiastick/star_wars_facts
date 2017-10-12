Rails.application.routes.draw do
  root "media#index"

  namespace :api do
    namespace :v1 do
      resources :media, only: [:index]
    end
  end
end
