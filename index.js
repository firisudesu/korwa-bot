const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('<3 firis');
	}
});

client.login('MjkwMzc1NjMxNDEyMzk2MDQ0.Daym1w.cxfST2cTLn-gOmiYC21D7cp4ZOQ');
