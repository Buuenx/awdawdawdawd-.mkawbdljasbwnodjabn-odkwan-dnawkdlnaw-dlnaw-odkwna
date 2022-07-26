const Discord = require('discord.js');

var prefix = "."

exports.run = (client, message, args) => {
    message.delete();

    let question = args.join(' ');

    //let kod = message.author.discriminator
    let user = message.author.username

    if (!question) return message.channel.send(

        new Discord.MessageEmbed()

        .addField(`:x: | Yazı yazman gerek.`)).then(m => m.delete(5000));

    // console.log("Oylama Komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.")
    message.channel.send(

        new Discord.MessageEmbed()

        .setColor("RED")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter(user, message.author.avatarURL())
        .setImage("https://cdn.discordapp.com/attachments/910922612409004032/1001212622403817512/asdsdfs.png")	
        .addField(`**OYLAMA**`, `\n\n> **${question}**`)).then(function(message) {

        message.react('✅');

        message.react('❌');

    });
    message.channel.send("@everyone @here")
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oylama'],

    permLevel: 2
};

exports.help = {
    name: 'oylama',
    description: 'Oylama yapmanızı sağlar.',
    usage: 'oylama <oylamaismi>'
}