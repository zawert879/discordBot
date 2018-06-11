const Discord = require('discord.js');
const client = new Discord.Client();

let bans = [];
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'update') {
		msg.reply('Добавлена команда who pubg,Рандомит две точки для поиска места высадки ', { tts: true });
	}
});

client.on('message', msg => {
	if (msg.content === 'слава аниме') {
		msg.channel.send('аниме слава!',{tts:true});
	}
});
const sanay = ["са саня!","диплом не дам","ну и что, что у них хуи?"];
client.on('message', msg => {
	if (msg.content === 'саня') {
		let rand = Math.floor(Math.random() * (sanay.length - 0)) + 0;
		msg.channel.send(sanay[rand], { tts: true });
	}
});
client.on('message', msg => {
	if (msg.content === 'бот говно') {
		msg.channel.send('сам ты говно!', { tts: true });
	}
});

client.on('message', msg => {
	if (msg.content.substring(0,9)=='anime who') {
		// console.log(JSON.stringify(bans));
		msg.channel.send(bans[msg.content.substring(10)]);
	}
});
client.on('message', msg => {
	if (msg.content.substring(0,9)=='who pubg') {

		msg.channel.send('x=' +Math.floor(Math.random() * (8 - 1) + 1)+'y='+ Math.floor(Math.random() * (8 - 1) + 1));
	}
});
client.on('message', msg => {
	if (msg.content.substring(0, 9) == 'anime ban') {
		data =msg.content.substring(10).split(';');
		nick = data[0].replace(/\s/g, '');
		client.channels.get('262298597423448064').members.forEach(element => {
			if (element.nickname == nick) {
				msg.channel.send(data[1]);
				bans[nick] = Date.now() + data[1].replace(/\s/g, '');;
			}
		});
	}
});

client.on('message', msg => {
	try {
		
		msg.member.roles.forEach(role => {
			if (role.name == "петух") {
				msg.member.send("коко ко ко коко ко ко ко ко кококо", { tts: true });
			}
		});
	} catch (error) {	
	}
});

client.login('NDQ3NTIzNDczNzg3NDUzNDYw.DeI0jA.prPNFTt2CwOu3DUfASe2qwxW2FE');

console.log(bans);
setInterval(function () {
	bans.forEach(element => {
		// if (element.value) {
			console.log(element.value);
		// }
	});
	
	// console.log(Date.now());
	// console.log(bans.get(Date.now));
}, 1000);
// let member = discord.channels.get('262298597423448064').members


