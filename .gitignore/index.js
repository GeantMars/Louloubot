const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "L!"
 
client.login("NjYwMjA5MDM4ODQ3NjM5NTgz.XnkYDA.97d1rh92_hmQhiOyrUUzlSiXpNM")
 
client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("L!help")
});


client.on('message', async message => {
 
    if(message.content === "Bonjour"){
        message.reply("Salut")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("Voici mes commandes !")
        .setDescription("ceci sont mes commandes D:")
        .setThumbnail(message.author.avatarURL)
        .addField("Bonjour", "Le bot vous dit salut")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
if(message.content === prefix + "invite"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#CC0000")
    .setTitle("invitation sur ton serveur")
    .setDescription("invite moi sur ton serveur")
    .setTimestamp()
    message.channel.send(help_embed);
    };
});
