const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const db = require("quick.db");
const axios = require("axios");
const fetch = require("node-fetch");
const fs = require("fs");//gweep creative

//gweep creative
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//gweep creative

client.login(ayarlar.token);

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix = ayarlar.prefix;
  if (message.content.startsWith(prefix)) {
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) cmd.run(client, message, params);
  }
}) 

client.on("ready", async () => {
  client.user.setActivity(`!yardım`);
  client.user.setStatus("online");
  console.log("Aktif!")
  
  setInterval(() => {
  const data = db.get("gif-pp")
  if(data){
const array = ["man", "woman", "anime", "couple"]
const array2 = ["pp", "gif"]
const arrayrandom = array[Math.floor(Math.random() * array.length)];
const array2random = array2[Math.floor(Math.random() * array2.length)];
axios.get("https://gif-api.vercel.app/api/"+array2random+"/"+arrayrandom).then(a => client.channels.cache.get(ayarlar.randomkanal).send(a.data));
}
  }, 10000)
  
})


