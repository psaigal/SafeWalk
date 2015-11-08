 require 'rubygems' 
	require 'twilio-ruby' 

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
 

  

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
end
