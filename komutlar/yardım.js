const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
  const yardım = new Discord.MessageEmbed()
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y']
  }
  exports.help = {
    name: 'yardım'
  }
