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

BOT_TOKEN = NjE1NTQyMDYwNTEwMDg1MTM0.XWPlIw.AZz13o8hYi3dsZC-Jx2P2XRIEZs

client.login(process.env.BOT_TOKEN);
