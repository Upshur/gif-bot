const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");

module.exports = async client => {

    client.user.setActivity(`RabeL`, { type: "PLAYING" });
  client.user.setStatus("online");
  console.log("Aktif!")
console.log(`${client.user.username} ismiyle bağlandım.`);
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 