const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Listo!');

});

client.on('message', message => {
    /*if (message.content.startsWith(prefix + "ping")) {
        let ping = Math.floor(message.client.ping);
        message.channel.send(':ping_pong: `' + ping + ' ms.` desde heroku.');
    }*/
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command) {
        case "ping":
            message.channel.send('Pong!');
            let ping = Math.floor(message.client.ping);
            message.channel.send(":ping_pong: Pong!, " + ping + "ms desde Heroku");
            break;
        case "hola":
            message.channel.send('Hola como estas?');
            break;
        case "dist":
            /*let coord_ini = args[0];
             let coord_fin = args[1];
             let info = Dist(coord_ini, coord_fin);*/
            let texto = args.join(" ");
            let user = message.author.username;
            let discriminator = message.author.discriminator;
            /*let info = Dist(texto);
            var valor = parseInt(info[0]);
            if (isNaN(valor)) {
                message.channel.send(`Parametro Inválido.`);
            } else {
                message.channel.send(`La distancia entre ${info[2]} y ${info[3]} es ${info[0]}. El tiempo de espera sugerido es ${info[1]} , @${user}#${discriminator} `);
            }
            break;*/
    }

});

client.login(process.env.TOKEN);     