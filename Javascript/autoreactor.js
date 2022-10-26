const client = require("../index");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
console.log(cyan.bold(`[Event] Loaded Feedback autoreactor 2`));

client.on("messageCreate", async (message) => {
const channels = ""; //The channel for the auto reactor
 if (message.channel.id !== channel|| message.author.bot) return;
 SendInChannel();

 function SendInChannel() {
  const channel = client.channels.cache.get("channels");
  if (!channel) return;
  
  message.react("⭐")
  message.react("😎")
   }
})

