const Discord = require('discord.js');
let map = new Map();

const config = require('./config.json');
const client = new Discord.Client();
const { Webhook, MessageBuilder } = require('discord-webhook-node');
//Necessary Stuff
client.once('ready', () => {
    console.log('Ready!');
});
//Just to put in console that the program is ready


const hook = new Webhook("https://discordapp.com/api/webhooks/800227223624876062/q9P1Fm4yZAiweBGUelYpaNbVXpr6Ci64Q2DUVIY66R0vP3nXSZxc4SDHP6qKO_QQtTdS");
//Creates a new webhook to the link provided to me. Hope it works lol 

var fs = require("fs");


const TrieNode = function (key) {
    // the "key" value will be the character in sequence
    this.key = key;
    
    // we keep a reference to parent
    this.parent = null;
    
    // we have hash of children
    this.children = {};
    
    // check to see if the node is at the end
    this.end = false;
    
    this.getWord = function() {
      let output = [];
      let node = this;
  
      while (node !== null) {
        output.unshift(node.key);
        node = node.parent;
      }
  
      return output.join('');
    };
  }





const Trie = function() {
    this.root = new TrieNode(null);


    this.insert = function(word) {
        let node = this.root; 
    
    
        for(let i = 0; i < word.length; i++) {
          if (!node.children[word[i]]) {
            node.children[word[i]] = new TrieNode(word[i]);
    
            node.children[word[i]].parent = node;
          }
    
          // proceed to the next depth in the trie.
          node = node.children[word[i]];
    
          if (i == word.length-1) {
            node.end = true;
          }
        }
      };




      this.contains = function(word) {
        let node = this.root;
    
        // for every character in the word
        for(let i = 0; i < word.length; i++) {
          
          if (node.children[word[i]]) {
            // if it exists, proceed to the next depth of the trie.
            node = node.children[word[i]];
          } else {
            // doesn't exist, return false since it's not a valid word.
            return false;
          }
        }
    
        // we finished going through all the words, but is it a whole word?
        return node.end;
      };






      
}







fs.readFile('ospd1.txt', function (err, data) {

    if (err) {
        return console.error(err);
    }

    const trie = new Trie();
    var temp = "";
    arr = data.toString().split("\r\n");      
    arr.pop();
    for (var x = 0; x<arr.length; x++){
        temp = arr[x];
        trie.insert(temp);
    }

    

    client.on('message', message11 => {
        if (message11.content == "/honkcounter"){
            message11.channel.send("<@" + message11.author + "> has spelled " + map.get(message11.author) + " words wrong.");
         }
         else if (!(trie.contains(message11.content)) && message11.author != client.user) {
            message11.channel.send("Honk! " + message11.content + "!");
            if (map.has(message11.author)){
                map.set(message11.author, map.get(message11.author) + 1);
            }
            else {
                map.set(message11.author, 1);
            }
         }
        
    });
        

});










// //Below is the embed with all the information as shown by the functions - name, color, description, fieldlines, picture, time.
// const embed = new MessageBuilder()
//     .setColor('#0099ff')
//     .setTitle('Jeffrey Pan')
//     .setDescription('This took way too much time to figure out lol')
//     .addField('The Level 1 Stuff', '396')
//     .addField('The Level 2 Stuff', 'Corrine Graham, 13')
//     .addField('Fun Fact?', "I like playing tennis. I'm also a huge Esports fan")
//     .setThumbnail('https://www.pixelstalk.net/wp-content/uploads/2016/04/Best-space-wallpapers-for-desktop-picture-images.jpg')
//     .setTimestamp();


// //Sends the embed out
// hook.send(embed);





client.login(config.token)