require('dotenv').config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const { Client, IntentsBitField } = require('discord.js');
const { messageLink } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.GuildMembers,
    ]});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', (msg) => {
    if (message.author.bot) return;
    console.log('Bot has received a message!');
    console.log(msg);
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(DISCORD_TOKEN);