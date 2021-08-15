const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  let prefix = ayarlar.prefix;
  const yardım = new Discord.MessageEmbed()
  .setAuthor('Gweep Creative Gif Bot', client.user.avatarURL())
  .setTitle('Yardım Menüsü')
  .setDescription(`Aşağıdaki komutları kullanarak giflere ulaşabilirsiniz \n
  \`${prefix}animal\` animal gif atar.
  \`${prefix}anime\` anime gif atar.
  \`${prefix}avatar\` sunucdaki üyelerin profil fotolarını atar.
  \`${prefix}banner\` sunucdaki üyelerin bannerlarını atar.
  \`${prefix}couple\` couple gif atar.
  \`${prefix}man\` man gif atar.
  \`${prefix}woman\` woman gif atar.
  \`${prefix}yardım\` yardım menüsünü açar.`)
  message.channel.send(yardım)
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y']
  }
  exports.help = {
    name: 'yardım'
  }
