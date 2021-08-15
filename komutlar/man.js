const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
  if(args[0] == 'ayarla'){
    if(!message.guild.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu Komutu kullanmaya yetkiniz yok.')
    let channel = message.mentions.channels.first();
    if(!channel) return message.reply('Lütfen Bir Kanal Belirtiniz.')
    
  }
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'man'
  }
