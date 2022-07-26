let Discord = require("discord.js");
let db = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Buuenx.jpg#1401 bakım modu aktiftir buuenxe yazabilirsiniz```')

}

  let aboneyetkilisi = await db.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await db.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await db.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `nonwh rolü ayarlanmamış`
    );
  if (!abonelog)
    return message.channel.send(
      `log kanalı ayarla`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `yetkili rolü ayarla`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`Bir Üye Etiketle!`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`✅ Abone Rolü Verildi!`)
    .addField(
      `Kayıt yapan yetkili:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `Kayıt yapılan:`,
      `${user}`,
      true
    )
   .addField(
     `Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
    .setColor(`RANDOM`)
    .setFooter(`${client.user.username} Buuenx`);
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt"],
  perm: 0
};
exports.help = {
  name: "nonwh"
};

exports.play = {
  kullanım: "el!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};

