const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
    }
    if (message.content === 'how to embed') {
        const embed = new RichEmbed()
          .setTitle('A slick little embed')
          .setColor(0xFF0000)
          .setDescription('Hello, this is a slick embed!');
        message.channel.send(embed);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
