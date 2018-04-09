const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '!';

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === prefix + 'korwa') {
        message.channel.send('<3 firisu desu');
        return;
    }

});

bot.on('ready', () => {
    console.log('YAAAY!');
});

bot.login(process.env.BOT_TOKEN);
