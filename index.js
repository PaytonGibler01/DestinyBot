const axios = require("axios");
//Token: 
const apiKey = "50b52c2b09d84f60974576c8f9c2b914"
const Discord= require('discord.js');
const bot = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,
    },
        intents: [
            "GUILDS", 
            "GUILD_MESSAGES", 
            "DIRECT_MESSAGES",
            ],
});


bot.login("")
bot.on('ready',()=> {
    console.log('Bot Online')
})
//create off log
bot.on('messageCreate', async (message)=>{
    let trigger = '$'
    if(message.author.bot) 
        return;
    // if(message.channel.type !== 'text')       BREAKS THE CODE FOR SOME FUCKING REASOn
    //      return;
    let messageContent = message.content
    let splitMessage = messageContent.split(' ')
    console.log(splitMessage,"splitMessage")
    let cmd = splitMessage[0].slice(trigger.length)
    console.log(cmd,"cmd")
    let args = splitMessage.slice(1)
    console.log(args,"args")


    if(!message.content.startsWith(trigger))
        return;
    if(message.content.startsWith(trigger)){
        gunData = await getLightPerks()
        message.channel.send(`SearchStart: Website:${cmd}, Weapon: ${args}: ${gunData} `);
        console.log(gunData)
    }})

 async function getLightPerks(){
     try {
         const  data  = await axios.get(
             `https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/`, {
            headers: {
                "X-API-Key" : "50b52c2b09d84f60974576c8f9c2b914",
                "Content-Type": "application/json",
            },
        });
        //console.log(data,"destinyOBJ")
        return data.data.Response.data.inventoryItem.itemTypeName;
    } catch (error) {
        throw error;
    }
}

