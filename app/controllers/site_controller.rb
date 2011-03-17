class SiteController < ApplicationController
  def index
    
  end

  def start
    @time = params[:time]
    @project = params[:project]
  end

end
