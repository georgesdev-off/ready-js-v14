const Discord = require("discord.js")
const bot = new Discord.Client({disableMentions: 'everyone'})
const config = require("./config.json")


bot.on('ready', async () => {
     console.log(`${bot.user.username} à été allumé avec succès.`)
     console.log(`${bot.guilds.cache.size} serveurs | ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} membres`)

     let statuses = [
         "VOTRE TEXTE",
         `${bot.guilds.cache.size} serveurs | ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} membres`,
         "VOTRE TEXTE",
     ]

     setInterval(() => {
         let status = statuses[Math.floor(Math.random() * statuses.length)];
         client.user.setActivity(status, {
             type: "STREAMING",
             url: "https://www.twitch.tv/discord"
         })
}, 20000)

});