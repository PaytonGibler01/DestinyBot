import axios from "axios";
//Token: OTcxNjU5NzkyMTczMTI5NzQ4.YnNusw.CY7r3LTVpPzLpido-aQ9-cTBtrA
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


bot.login("OTcxNjU5NzkyMTczMTI5NzQ4.YnNusw.CY7r3LTVpPzLpido-aQ9-cTBtrA")
bot.on('ready',()=> {
    console.log('Bot Online')
})
//create off log
bot.on('messageCreate', (message)=>{
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
        message.channel.send(`trigger:${trigger} command :${cmd}, arg: ${args} `);
    }
})

async function getLightPerks(gun){
    try {
        const { data } = await axios.get(`https://light.gg/db/${gun}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (error) {
        throw error;
    }
}

