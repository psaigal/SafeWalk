require 'rubygems'
require 'twilio-ruby'

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def authenticate
    redirect_to login_url, alert: 'Please log in first' if current_user.nil?
  end

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def send_initial_text
  	account_sid = ENV['TWILIO_ACCOUNT_SID']
		auth_token = ENV['TWILIO_AUTH_TOKEN']
		from_number = ENV['TWILIO_FROM_NUMBER']
		@client = Twilio::REST::Client.new account_sid, auth_token
		@client.account.messages.create({
		  :from => from_number,
		  :to =>'+14085134453',
		  :body => 'is using SafeWalk and wants to notify you that they are on their way home.'
		})
	end

	# need to update this with js confirmation of location being met
	# 	def send_destination_text
	# 	 #js logic for reaching home
	# 				@client.account.messages.create({
	# 	  :from => from_number,
	# 	  :to => contact_number,#needs to be defined from db
	# 	  :body => ' has arrived home safely.'
	# 	})
	# 	# end
	# end
end
