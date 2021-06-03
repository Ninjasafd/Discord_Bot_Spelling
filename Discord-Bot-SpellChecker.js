const Discord = require('discord.js');
const client = new Discord.Client();
const { Webhook, MessageBuilder } = require('discord-webhook-node');
//Necessary Stuff
client.once('ready', () => {
    console.log('Ready!');
});
//Just to put in console that the program is ready


const hook = new Webhook("https://discordapp.com/api/webhooks/800227223624876062/q9P1Fm4yZAiweBGUelYpaNbVXpr6Ci64Q2DUVIY66R0vP3nXSZxc4SDHP6qKO_QQtTdS");
//Creates a new webhook to the link provided to me. Hope it works lol 

//Below is the embed with all the information as shown by the functions - name, color, description, fieldlines, picture, time.
const embed = new MessageBuilder()
    .setColor('#0099ff')
    .setTitle('Jeffrey Pan')
    .setDescription('This took way too much time to figure out lol')
    .addField('The Level 1 Stuff', '396')
    .addField('The Level 2 Stuff', 'Corrine Graham, 13')
    .addField('Fun Fact?', "I like playing tennis. I'm also a huge Esports fan")
    .setThumbnail('https://www.pixelstalk.net/wp-content/uploads/2016/04/Best-space-wallpapers-for-desktop-picture-images.jpg')
    .setTimestamp();


//Sends the embed out
hook.send(embed);



const config = require('./config.json');
client.login(config.token)