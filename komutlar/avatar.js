const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
 if(args[0] == 'pp'){
   
 }
  
  const embed = new Discord.MessageEmbed()
  .setImage()
  .setFooter(message.author.tag + 'Tarafı')
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'avatar'
  }
