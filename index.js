const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = 'votre_token_bot';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === 'kick') {
    const member = options.getMember('utilisateur');
    if (!member) {
      return interaction.reply('Veuillez mentionner un utilisateur à expulser.');
    }
    if (!member.kickable) {
      return interaction.reply('Je ne peux pas expulser cet utilisateur.');
    }
    const reason = options.getString('raison') || 'Aucune raison spécifiée';
    await member.kick(reason);
    return interaction.reply(`${member.user.tag} a été expulsé avec succès. Raison: ${reason}`);
  } else if (commandName === 'ban') {
    const member = options.getMember('utilisateur');
    if (!member) {
      return interaction.reply('Veuillez mentionner un utilisateur à bannir.');
    }
    if (!member.bannable) {
      return interaction.reply('Je ne peux pas bannir cet utilisateur.');
    }
    const reason = options.getString('raison') || 'Aucune raison spécifiée';
    await member.ban({ reason: reason });
    return interaction.reply(`${member.user.tag} a été banni avec succès. Raison: ${reason}`);
  }
});

client.login(TOKEN);
