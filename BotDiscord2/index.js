const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Listo!');

});

client.on('message', message => {
    if (message.content.startsWith(prefix + "ping")) {
        let ping = Math.floor(message.client.ping);
        message.channel.send(':ping_pong: `' + ping + ' ms.` desde heroku.');

    }

});

client.login(process.env.TOKEN);     