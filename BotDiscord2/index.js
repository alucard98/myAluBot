const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;


function Dist(dato) {
    var info = dato.trim();
    var separador1 = ",", arregloDeSubCadenas = info.split(separador1);
    var info2 = arregloDeSubCadenas[1].toString().trim();
    var separador2 = " ", arregloDeSubCadenas2 = info2.split(separador2);
    var aDatos = new Array();
    for (var i = 0, j = arregloDeSubCadenas2.length; i < j; i++) {
        if (arregloDeSubCadenas2[ i ]) {
            aDatos.push(arregloDeSubCadenas2[ i ]);
        }
    }
    var lat1 = arregloDeSubCadenas[0],
            lon1 = aDatos[0],
            lat2 = aDatos[1],
            lon2 = arregloDeSubCadenas[2];
    /*lat1 = dato1.substr(0, dato1.indexOf(",", 0));
     lon1 = dato1.substr(dato1.indexOf(",", 0) + 1);
     lat2 = dato2.substr(0, dato2.indexOf(",", 0));
     lon2 = dato2.substr(dato2.indexOf(",", 0) + 1);*/
    rad = function (x) {
        return x * Math.PI / 180;
    }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var km = d.toFixed(2);
    var res = '';
    var time = '';
    /* TABLA DE COOLDOWN
     1km <1min        220km 40mins
     2km 1min        250km 45mins
     3km <2mins        350km 51mins
     5km 2mins        375km 54mins
     7km 5mins        460km 62mins
     9km <7mins        500km 65mins
     10km 7mins        565km 69mins
     12km 8mins        700km 78mins
     18km 10mins        800km 84mins
     26km 15mins        900km 92mins
     42km 19mins      1000km 99mins
     65km 22mins      1100km 107mins
     76km <25mins     1200km 114mins
     81km 25mins      1300km 117mins
     100km 35mins    +1350km 2h&5mins
     */
    if (d < 1) {
        time = '1 minuto';
    } else if (d >= 1 & d <= 2) {
        time = '1 minuto';
    } else if (d > 2 & d <= 5) {
        time = '2 minutos';
    } else if (d > 5 & d <= 7) {
        time = '5 minutos';
    } else if (d > 7 & d <= 10) {
        time = '7 minutos';
    } else if (d > 10 & d <= 12) {
        time = '8 minutos';
    } else if (d > 12 & d <= 18) {
        time = '10 minutos';
    } else if (d > 18 & d <= 26) {
        time = '15 minutos';
    } else if (d > 26 & d <= 42) {
        time = '19 minutos';
    } else if (d > 42 & d <= 65) {
        time = '22 minutos';
    } else if (d > 65 & d <= 81) {
        time = '25 minutos';
    } else if (d > 81 & d <= 100) {
        time = '35 minutos';
    } else if (d > 100 & d <= 220) {
        time = '40 minutos';
    } else if (d > 220 & d <= 250) {
        time = '45 minutos';
    } else if (d > 250 & d <= 350) {
        time = '51 minutos';
    } else if (d > 350 & d <= 375) {
        time = '54 minutos';
    } else if (d > 375 & d <= 460) {
        time = '62 minutos (1 Hora y 2 minutos)';
    } else if (d > 460 & d <= 500) {
        time = '65 minutos (1 Hora y 5 minutos)';
    } else if (d > 500 & d <= 565) {
        time = '69 minutos (1 Hora y 9 minutos)';
    } else if (d > 565 & d <= 700) {
        time = '78 minutos (1 Hora y 18 minutos)';
    } else if (d > 700 & d <= 800) {
        time = '84 minutos (1 Hora y 24 minutos)';
    } else if (d > 800 & d <= 900) {
        time = '92 minutos (1 Hora y 32 minutos)';
    } else if (d > 900 & d <= 1000) {
        time = '99 minutos (1 Hora y 39 minutos)';
    } else if (d > 1000 & d <= 1100) {
        time = '107 minutos (1 Hora y 47 minutos)';
    } else if (d > 1100 & d <= 1200) {
        time = '114 minutos (1 Hora y 54 minutos)';
    } else if (d > 1200 & d <= 1300) {
        time = '117 minutos (1 Hora y 57 minutos)';
    } else {
        time = '125 minutos (2 Horas y 5 minutos)';
    }


    if (d > 1) {
        res = km + ' kilometros';
    } else {
        var metro = d * 1000;
        var metro2 = metro.toFixed(2);
        res = metro2 + ' metros';
    }
    return {0: res, 1: time, 2: lat1 + ',' + lon1, 3: lat2 + ',' + lon2};
    //return {0: res, 1: time, 2: lat1 + ',' + lon1, 3: lat2 + ',' + lon2};
}

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
            //message.channel.send('Pong!');
            let ping = Math.floor(message.client.ping);
            message.channel.send(":ping_pong: Pong!, " + ping + "ms desde Heroku");
            break;
        case "hola":
            message.channel.send('Hola k hace :P programa? o k hace');
            break;
        case "dist":
            /*let coord_ini = args[0];
             let coord_fin = args[1];
             let info = Dist(coord_ini, coord_fin);*/
            let texto = args.join(" ");
            let user = message.author.username;
            let discriminator = message.author.discriminator;
            let info = Dist(texto);
            var valor = parseInt(info[0]);
            if (isNaN(valor)) {
                message.channel.send(`Parametro Inválido.`);
            } else {
                message.channel.send(`La distancia entre ${info[2]} y ${info[3]} es ${info[0]}. El tiempo de espera sugerido es ${info[1]} , @${user}#${discriminator} `);
            }
            break;
    }

});

client.login(process.env.TOKEN);     