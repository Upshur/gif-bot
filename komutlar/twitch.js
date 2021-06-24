const db = require("quick.db");
const Discord = require('discord.js');
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
  } else {
    return message.channel.send("Bir arguman belirt `(kanal, ayarla)`");
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