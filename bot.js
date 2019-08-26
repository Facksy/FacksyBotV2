const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'pac is') {
    	message.channel.send("the gayest camel on earth")
  	}
});

BOT_TOKEN = NjE1NTQyMDYwNTEwMDg1MTM0.XWPtxQ.ULuc0Qt-IWe1g219q_E9Zo1Jr9E

client.login(process.env.BOT_TOKEN);
