const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  if(args[0] === "ayarla") {
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
    if(!channel) return message.channel.send("Twitch Bildirim kanalini belirtmelisin.");
    db.set(`twitch.${message.guild.id}.channel`, channel.id);
    message.channel.send(`Twitch Bildirim kanali başarıyla ayarlandı.`)
  } else if(args[0] === "kanal") {
   let arguman = args.slice(1).join(" ");
   if(!arguman) return message.channel.send("Twitch Kanalini belirtmelisin.");
db.set(`twitch.${message.guild.id}.name`, arguman);
message.channel.send(`Twitch Kanali başarıyla ayarlandı.`);
  } else if(args[0] === "sıfırla") {
    let data = await db.get(`twitch.${message.guild.id}`);
    if(!data) return message.channel.send("zaten ayarlı degil")
    if(!data.name) return message.channel.send("zaten ayarlı degil")
    if(!data.channel) return message.channel.send("zaten ayarlı degil")
    db.delete(`twitch.${message.guild.id}`);
    message.channel.send("Tüm Ayarlar Sıfırlandı!");
  } else {
    return message.channel.send("Bir arguman belirt `(kanal, ayarla, sıfırla)`");
}
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tw']
  }
  exports.help = {
    name: 'twitch'
  }

//bitti .d lfhgpglh