const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  /*
 const kanal = message.mentions.channels.first()
 
 if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription('Lütfen Bir kanal Belirtiniz').setColor("RANDOM"));
  */
  db.delete(`gif-pp`);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Random Gif Durduruldu.`));
 
 
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'durdur'
  }