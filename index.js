const { Discord, MessageEmbed ,Client } = require('discord.js');
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');
const cfg = require('./ayarlar.json');

client.on('ready', async => {
  client.user.setPresence({ activity: { name: "Ravex ❤️ Ravex :c" }, status: "idle" });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  let BotSesKanalı = client.channels.cache.get(cfg.bot.botSesKanal);
  if (BotSesKanalı) BotSesKanalı.join().catch(err => console.error("Bot Ses Kanalına Bağlanamadı!"));
})

client.on("message", (message) => {

// İhtimaller



client.login(process.env.token);