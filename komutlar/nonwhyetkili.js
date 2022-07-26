let db = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Buuenx.jpg#1401 bakım modu aktiftir buuenxe yazabilirsiniz```')

}

  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `Rol etiketle`
    );

  db.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `Başarılı`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["txrleplay"],
  perm: 0
};
exports.help = {
  name: "txyetkili"
};

exports.play = {
  kullanım: "el!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};
