const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const db = require("quick.db");
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
  client.user.setActivity(`RabeL`, { type: "PLAYING" });
  client.user.setStatus("online");
  console.log("Aktif!")
})

const twitchs = {};

client.on("ready", async () => {
  
  setInterval(async () => {
   client.guilds.cache.forEach(async guild => {
     if(twitchs[guild.id]) return;
     
     let data = await db.get(`twitch.${guild.id}`) || { channel: null, name: null };
     if(!data.channel) return;
     if(!data.name) return;
    
     fetch(`https://api.twitch.tv/helix/streams?user_login=${data.name}`, { 
     method: "GET",
     headers: { "client-id": ayarlar.twitch_client_id, "Authorization": `Bearer ${ayarlar.twitch_token}` }
     }).then(response => response.json().then(res => {
     if(!res.data.length) return;
       
     const channel = guild.channels.cache.get(data.channel);

     if(!channel) return;
       
      const username = res.data[0].user_name;
      const userlogin = res.data[0].user_login;
      const game = res.data[0].game_name;
      const title = res.data[0].title;
      const viewer_count = res.data[0].viewer_count;
      const thumbnail = res.data[0].thumbnail_url.replace("{width}", 500).replace("{height}", 250); 
      
       const embed = new Discord.MessageEmbed()
       .setAuthor(username)
       .setImage(thumbnail)
       .setTitle(title)
       .addField(`Game`, game, true)
       .addField(`Viewers`, viewer_count, true)
       .setColor("PURPLE")
       .setURL("https://twitch.tv/"+userlogin);
       
      twitchs[guild.id] = true;
       
       return channel.send(embed);
     }))
     })
  }, 5000);
})

