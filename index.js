const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '!';

bot.on('message', message => {

    let msg = message.content.toLowerCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === prefix + 'korwa') {
        message.channel.send('<3 firisu desu');
        return;
        
    if (msg === prefix + 'korwa' + 'set roles') {
        message.channel.send('just go to the bot stuff channel \n type (.)iam "scrubs" \n list roles : \n MagnaRaid, 6manHL,UbahaHL');
        return;
}
    }

});

bot.on('ready', () => {
    console.log('YAAAY!');
    bot.user.setGame('with firis in the bed');
});


bot.login(process.env.BOT_TOKEN);
