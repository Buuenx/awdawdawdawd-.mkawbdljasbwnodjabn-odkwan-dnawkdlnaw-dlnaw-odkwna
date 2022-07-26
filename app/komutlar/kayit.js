const Discord = require('discord.js');

var prefix = "!"

exports.run = async(client, message, args) => {
var gerekenkanal = "1001052074743705620" // kayıtsız sohbet oda id
const havliembed = new Discord.MessageEmbed()
.setColor('Random')
.setTitle('Kayıt Başvurunuz Gerekli Yetkililere İletilmiştir Lütfen Bir Yetkili Sizinle İlgilenene Kadar Bekleyin')
.setTimestamp()
.setFooter(`${message.member.user.tag} Tarafından Kullanıldı.`, client.user.avatarURL());

if(message.channel.id === gerekenkanal){
message.channel.send(havliembed);
message.channel.send("<@&996875445410746419><@&996856192250941543>");
}
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['kayıt',"kayit"],
	permLevel : 0
}
exports.help = {
	name : 'kayıt',
	description : '31',
	usage : 'kayıt'
}
