const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content == 'ping') {
    	message.reply('pong');
  	}
    if (message.content == 'pac is') {
    	message.channel.send("the gayest camel on earth")
  	}
    if (message.content == 'Non') {
    	message.channel.send("tg")
  	}
});

client.login(process.env.BOT_TOKEN);
