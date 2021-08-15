const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  let prefix = ayarlar.prefix;
  const yardım = new Discord.MessageEmbed()
  .setAuthor('Gweep Creative Gif Bot', client.user.avatarURL())
  .setTitle('Yardım Menüsü')
  .setDescription(`Aşağıdaki komutları kullanarak giflere ulaşabilirsiniz.`)
  .addField('Gif Komutları',`
  \`${prefix}animal\` animal gif atar.
  \`${prefix}anime\` anime gif atar.
  \`${prefix}avatar\` üyelerin profil fotolarını atar.
  \`${prefix}banner\` üyelerin bannerlarını atar.
  \`${prefix}couple\` couple gif atar.
  \`${prefix}man\` man gif atar.
  \`${prefix}woman\` woman gif atar.`)
  .addField('Kanal Komutları',`
  \`${prefix}animal ayarla/sıfırla\` animal gif kanalını ayarlar/sıfırlar.
  \`${prefix}anime ayarla/sıfırla\` anime gif kanalını ayarlar/sıfırlar.
  \`${prefix}avatar ayarla/sıfırla\` üyelerin avatar kanalını ayarlar/sıfırlar.
  \`${prefix}banner ayarla/sıfırla\` üyelerin banner kanalını ayarlar/sıfırlar.
  \`${prefix}couple ayarla/sıfırla\` couple gif kanalını ayarlar/sıfırlar.
  \`${prefix}man ayarla/sıfırla\` man gif kanalını ayarlar/sıfırlar.
  \`${prefix}woman ayarla/sıfırla\` woman gif kanalını ayarlar/sıfırlar.`)
  .setThumbnail(client.user.avatarURL())
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
