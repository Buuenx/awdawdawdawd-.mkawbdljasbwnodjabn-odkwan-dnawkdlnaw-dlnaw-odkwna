const Discord = require('discord.js');

var prefix = "."

exports.run = async(client, message, args) => {
 message.delete()
 const havliiembed = new Discord.MessageEmbed()
 .setColor('YELLOW')
	.setTitle('Sunucuya Restart Atılıyor Lütfen Bekleyin.')
	.setAuthor('Restart', client.user.avatarURL())
   	.setImage("https://cdn.discordapp.com/attachments/910922612409004032/1001228026190778419/standard_17.gif")	
message.channel.send("@everyone")
message.channel.send(havliiembed);

}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['restart'],
	permLevel : 3

}
exports.help = {
	name : 'restart',
	description : '31',
	usage : 'restart'
}
