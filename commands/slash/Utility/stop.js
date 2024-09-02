const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
} = require('discord.js');
const config = process.env.PRODUCTION
    ? require('../../../server-config')
    : require('../../../config');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop the Minecraft Server!'),
    options: {
        cooldown: 5000,
    },
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction} interaction
     */
    run: async (client, interaction) => {
        // curl -X POST -H "Authorization: Bearer ymO5aQjdauHubRdwL0tERYS4rLWCV29yJzUGwLoZHlbE07V7HZkbnkRTLxjr2jSf" "https://api.hetzner.cloud/v1/servers/52381354/actions/shutdown"
        fetch(
            `https://api.hetzner.cloud/v1/servers/${config.hetzner.id}/actions/shutdown`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.HETZNER_API_TOKEN}`,
                },
            }
        );
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Server Status')
                    .setDescription('Stopping the server...')
                    .setColor('Red')
                    .setTimestamp(),
            ],
        });
    },
};
