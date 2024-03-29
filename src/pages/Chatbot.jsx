import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {

	const steps = [
		{
			id: '0',
			message: 'Hello!',
			trigger: '1',
		}, 
		{
			id: '1',
			message: 'Nice to meet you!',
			trigger: '2'
		}, {
			id: '2',
			message: "What is your name?",
			trigger: '3',
		},
		 {
			id: '3',
			user: true,
			trigger: 4
		}, {
			id: '4',
			message: "{previousValue},What can I help for you?",
			trigger: 5
		},
		{
			id: '5',
			message: "This chatbot is only for contacting the owner of this site.",
			trigger: 6
		},
		{
			id: '6',
			message: "Would you like a phone number or email from the owner of this site?",
			trigger: 7
		},
		{
			id: '7',
			options: [
			  { value: 1, label: 'Phone Number', trigger: '8' },
			  { value: 2, label: 'Email', trigger: '9' },
			],
		  },
		  {
			id: '8',
			message: "+959941365598",
			trigger: 7
		},
		{
			id: '9',
			message: "hlayaminnphyu@gmail.com",
			trigger: 7,
			end : true
		},
	];
	 
	const theme = {
		background: '#344c368c',
		headerBgColor: '#386641',
		headerFontSize: '20px',
		botBubbleColor: '#344c36',
		headerFontColor: 'white',
		botFontColor: 'white',
		userBubbleColor: '#faad1b',
		userFontColor: 'white',
	
	};
	 
	// Set some properties of the bot
	const config = {
		botAvatar: "https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white-thumbnail.png",
		floating: true,
		
	};
  return (
	<div>
		<ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="CHAT.BOT"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
		
	</div>
  )
}

export default Chatbot