Rails.application.routes.draw do
  resources :inboxes
  get '/search', to: 'inboxes#search'
  root "inboxes#index"
end
