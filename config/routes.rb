Ubertimer::Application.routes.draw do
  get "site/index"

  get "site/start"

 
  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
   root :to => "site#index"
   #root :to => "start#index
   match "start" => "site#start"
   

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
