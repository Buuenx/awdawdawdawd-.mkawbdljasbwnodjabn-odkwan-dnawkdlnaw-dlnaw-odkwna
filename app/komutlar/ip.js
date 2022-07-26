const Discord = require('discord.js')

exports.run = async(client, message, args) => {

    const ip = new Discord.MessageEmbed()
    .setDescription(' 📌Sunucu IP Adresi :45.146.252.9:30406📌 \n 🎙️Sunucu TS3 IP : 58248.zap-ts3.com🎙️')
    .setImage(``)
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(ip).then(x => x.delete({timeout: 5000}));

}

exports.conf = {enabled: true, guildOnly: true, aliases: ["ip","ıp"]};
exports.help = {name: 'ip'};