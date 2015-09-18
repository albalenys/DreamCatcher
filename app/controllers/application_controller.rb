class ApplicationController < ActionController::Base
  helper_method :current_dreamer
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  layout proc { false if request.xhr? }
  def authenticate_dreamer
    redirect_to root_path if !session[:dreamer_id]
  end

  def current_dreamer
    @current_dreamer ||= Dreamer.find_by(id: session[:dreamer_id])
  end
end
