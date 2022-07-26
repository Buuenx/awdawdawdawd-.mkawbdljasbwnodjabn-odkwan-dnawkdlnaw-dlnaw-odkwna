const dc = require('discord.js');

exports.run = async (client, message, args) => {
                const ayarlar = require('../ayarlar.json')
                    let prefix = ayarlar.prefix

if(!message.member.roles.cache.has("1000300992132288542")) return;

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
if (!member) return message.channel.send('Lütfen bir kullanıcıyı etiketleyin.');
if (!role) return message.channel.send(' Rol bulunamadı.');
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`Verilecek rol sizin rolünüzün üstünde bu yüzden rolü **alamıyorum!**`);
  }

  try{
await (member.roles.remove(role.id))
 message.channel.send(new dc.MessageEmbed().setDescription(`${member} isimli üyeden \`${role.name}\` isimli rol başarıyla alındı!`)  .setFooter('Bu komutu kullanan yetkili ' + message.author.tag, message.author.avatarURL).setColor('RANDOM'));
    
  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 1
};

exports.help = {
  name: 'rol-al',
  description: 'Belirttiğiniz kullanıcıya belirttiğiniz rolü alır.',
  usage: 'rol-al'
};   