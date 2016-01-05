Rails.application.routes.draw do
  get "/index" => "index#index"
  root "index#index"
end
