const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
} = require('discord.js');
const config = process.env.PRODUCTION
    ? require('../../../server-config')
    : require('../../../config');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Get the status of a server!'),
    options: {
        cooldown: 5000,
    },
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction} interaction
     */
    run: async (client, interaction) => {
        await interaction.deferReply();
        /* First get hetzner server status, then ping the if status is running: (config.mc.host)
        curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID"
        */
        fetch('https://api.hetzner.cloud/v1/servers/' + config.hetzner.id, {
            headers: {
                Authorization: `Bearer ${process.env.HETZNER_API_TOKEN}`,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.server.status == 'running') {
                    fetch(
                        `https://api.mcstatus.io/v2/status/java/${config.mc.host}`
                    )
                        .then((res) => res.json())
                        .then((res) => {
                            console.log(res);
                            if (res.online) {
                                interaction.editReply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setTitle('Server Status')
                                            .setDescription(
                                                'The Minecraft server is running!'
                                            )
                                            .setFooter({
                                                text: `Online Players: ${res.players.online}`,
                                            })
                                            .setColor('Green')
                                            .setTimestamp(),
                                    ],
                                });
                            } else {
                                interaction.editReply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setTitle('Server Status')
                                            .setDescription(
                                                'The Minecraft server is starting/stopping!'
                                            )
                                            .setColor('Yellow')
                                            .setTimestamp(),
                                    ],
                                });
                            }
                        });
                } else {
                    interaction.editReply({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('Server Status')
                                .setDescription('The server is offline!')
                                .setColor('Red')
                                .setTimestamp(),
                        ],
                    });
                }
            })
            .catch((err) => {
                interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('Server Status')
                            .setDescription('An error occurred!')
                            .setColor('RED')
                            .setTimestamp(),
                    ],
                });
            });
    },
};
