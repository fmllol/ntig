const Discord = require('discord.js');
const client = new Discord.Client();
const request = require("request");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
  	const number = parseInt(channel.name.replace("nicolai-msg-count:", ""))
  	
  	channel.delete();
  	msg.guild.createChannel("nicolai-msg-count:" + (number+1), "voice");
  		
  }

});



client.login(process.env.TOKEN);