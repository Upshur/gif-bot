const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
 /*
 const kanal = message.mentions.channels.first()
 
 if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription('Lütfen Bir kanal Belirtiniz').setColor("RANDOM"));
 */
  
  db.set(`gif-pp`, true);
   message.channel.send(new Discord.MessageEmbed().setDescription(`Random Gif <#${ayarlar.randomkanal}> kanalında başlatıldı.`));
 
 
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'başlat'
  }
