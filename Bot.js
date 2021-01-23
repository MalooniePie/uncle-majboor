const Discord = require('discord.js')
const client = new Discord.Client()

client.login('ODAxMzQ3NDI3MzAxODUxMTM2.YAfW8g.ZKqjULEMMHpw1NkjxRaZSIpEZDw')

client.on('ready', async () => {
    console.log('ready')
})

client.on('guildMemberAdd', async member => {
    let channel = member.guild.channels.cache.get('801037300234190850')
    channel.send(`${member.toString()}-san~!!! welcome-e-e~!!!`)
})