require 'rubygems' 
require 'twilio-ruby' 

account_sid = ENV['TWILIO_ACCOUNT_SID']
auth_token = ENV['TWILIO_AUTH_TOKEN']
from_number = ENV['TWILIO_FROM_NUMBER']
@client = Twilio::REST::Client.new account_sid, auth_token

module UsersHelper
	
	def send_initial_text
		@client.account.messages.create({
		  :from => '+14087403214', 
		  :to =>'+14085134453',
		  :body => 'is using SafeWalk and wants to notify you that they are on their way home.' 
		})
	end

	def send_destination_text
		 #js logic for reaching home
					@client.account.messages.create({
		  :from => from_number,
		  :to => contact_number,#needs to be defined from db
		  :body => ' has arrived home safely.' 
		})
		# end
	end

end

