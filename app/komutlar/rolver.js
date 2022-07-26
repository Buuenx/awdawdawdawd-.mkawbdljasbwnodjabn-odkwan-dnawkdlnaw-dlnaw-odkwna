exports.run = function(client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
    const kisi = message.mentions.members.first()
    if (!kisi) return message.channel.send("**Bir kişiyi etiketlemelisin**.")
    
    const rol = message.mentions.roles.first()
    if (!rol) return message.channel.send("**Bir rol etiketlemelisin**.")
    
    const kisiyibul = message.guild.members.cache.get(kisi.id)
    
    kisiyibul.roles.add(rol.id).then(a=> {
    message.channel.send("**Rolü başarıyla verdim.**")
    }).catch(err => message.channel.send("**Rolü veremedim.**"))
    
    
    };
    
    exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 1
    };
    
    exports.help = {
    name: 'rolver',
    description: 'Rol verir.',
    usage: 'rolver'
    };