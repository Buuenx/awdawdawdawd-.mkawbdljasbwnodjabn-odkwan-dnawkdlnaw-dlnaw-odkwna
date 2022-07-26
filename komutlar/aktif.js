const Discord = require('discord.js');

var prefix = "!"

exports.run = async(client, message, args) => {
 message.delete()
 const havliiembed = new Discord.MessageEmbed()
 .setColor('GREEN')
	.setTitle('Sunucuya Girmek İçin Tıklayabilirsiniz.')
	.setURL('https://cfx.re/join/vj4a75')
	.setAuthor('Aktif' , client.user.avatarURL())
	.addField("Sunucu aktif. Giriş sağlayabilirsiniz. İyi roller dileriz.","**F8 connect:`45.146.252.9:30406`** **|** **TS3: `58248.zap-ts3.com` **") 
   .setImage("https://cdn.discordapp.com/attachments/910922612409004032/1001228026190778419/standard_17.gif")	
message.channel.send("@everyone")
message.channel.send(havliiembed);



}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['aktif'],
	permLevel : 3
}
exports.help = {
	name : 'aktif',
	description : '31',
	usage : 'aktif'
}
