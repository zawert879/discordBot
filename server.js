const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'слава аниме') {
		msg.reply('аниме слава!',{tts:true});
	}
});
client.on('message', msg => {
	if (msg.content === 'саня') {
		msg.channel.send('са саня!', { tts: true });
	}
});
client.on('message', msg => {
	if (msg.content === 'bot govno') {
		msg.channel.send('сам ты говно!', { tts: true });
	}
});
client.on('message', msg => {
	try {
		msg.member.roles.forEach(role => {
			if (role.name == "петух") {
				msg.channel.send("коко ко ко коко ко ко ко ко кококо", { tts: true });
			}
		});
	} catch (error) {
		
	}

});

client.login('NDQ3NTIzNDczNzg3NDUzNDYw.DeI0jA.prPNFTt2CwOu3DUfASe2qwxW2FE');
