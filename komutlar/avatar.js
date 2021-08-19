const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  
  const kişicikabi = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

  const embed = new Discord.MessageEmbed()
  .setAuthor(kişicikabi.tag ,kişicikabi.avatarURL())
  .setImage(kişicikabi.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))
  .setFooter(message.author.tag + 'Tarafından istendi', message.author.avatarURL())
  message.channel.send(embed)
 
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'avatar'
  }
