const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const axios = require("axios");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
   if(args[0] == 'pp'){
    const { data } = await axios.get("https://gif-api.vercel.app/api/pp/woman");
     
  const embed = new Discord.MessageEmbed()
  .setImage(data)
  .setFooter(message.author.tag + ' Tarafından istendi', message.author.avatarURL())
  
  return message.channel.send(embed);
  }
 
  const { data } = await axios.get("https://gif-api.vercel.app/api/gif/woman");
  
  const embed = new Discord.MessageEmbed()
  .setImage(data)
  .setFooter(message.author.tag + ' Tarafından istendi', message.author.avatarURL())
  
  return message.channel.send(embed);
  
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'woman'
  }
