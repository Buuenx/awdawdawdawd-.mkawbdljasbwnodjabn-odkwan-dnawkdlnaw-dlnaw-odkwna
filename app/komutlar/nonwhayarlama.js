let db = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Buuenx.jpg#1401 bakım modu aktiftir buuenxe yazabilirsiniz```')

}

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`rol etiketle`)
  
  
  db.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`başarılı`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolayarla'],
  perm: 0
}
exports.help = {
  name: 'rolayarla'
}

exports.play = {
  kullanım: 'el!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}