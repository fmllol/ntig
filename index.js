const Discord = require('discord.js');
const client = new Discord.Client();
const request = require("request");
let number = 0;
let prev = 0;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  function s(l) {

  	const channel = Array.from(client.guilds.get("613655479956275210").channels).find(v => {
  		if (v[1] !== undefined) {
  			console.log()
  			return v[1].name.includes("nicolai-msg-count");
  		}
  		return false;
  	})[1];
  	if (l)
  		number = parseInt(channel.name.replace("nicolai-msg-count:", ""))
  	
  	channel.delete();


  	client.guilds.get("613655479956275210").createChannel("nicolai-msg-count:" + (number), "voice");



  }
  s(true);


  setInterval(() => {
  	if (prev !== number);
  		s(false);
  }, 60000);

});

client.on('message',async msg => {
  if (msg.author.id === '256878617760366592') {
    client.guilds.get("613655479956275210").channels.get("634313753500057611").send({
    		embed: {
    			description: msg.content
    		}
    	});
  }


  if (msg.author.id === '256878617760366592') {
  	const user = msg.author;
  	const channel = Array.from(client.guilds.get("613655479956275210").channels).find(v => {
  		if (v[1] !== undefined) {
  			console.log()
  			return v[1].name.includes("nicolai-msg-count");
  		}
  		return false;
  	})[1];
  	prev = number;
  	number += 1;
  	

  		
  }



});
console.log(process.env.TOKEN);


client.login(process.env.TOKEN);