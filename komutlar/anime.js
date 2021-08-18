const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const axios = require("axios");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
  if(args[0] == 'ayarla'){
    if(!message.guild.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu Komutu kullanmaya yetkiniz yok.')
    let channel = message.mentions.channels.first();
    if(!channel) return message.reply('Lütfen Bir Kanal Belirtiniz.')
  }
  
  const { data } = await axios.get("https://gif-api.vercel.app/api/gif/anime");
  return message.channel.send(data);
  
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'anime'
  }
 