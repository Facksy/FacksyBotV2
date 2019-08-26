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

// BOT_TOKEN = NjAxNjgxNTY4NjcwNDE2OTI3.XTF2FA.3cq_zRSNMc1cr4uMSsuNMTewzYA

client.login(process.env.BOT_TOKEN);
