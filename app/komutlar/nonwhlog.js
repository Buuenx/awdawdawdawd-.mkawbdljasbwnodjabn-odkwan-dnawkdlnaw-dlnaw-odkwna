let db = require("quick.db")
let ayarlar = require("../ayarlar.json")

exports.run = async(client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Buuenx.jpg#1401 bakım modu aktiftir buuenxe yazabilirsiniz```')

}

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`Kanal etiketle`)
  
  
  db.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`Başarılı`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'nonwhlog'
}

exports.play = {
  kullanım: 'el!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}