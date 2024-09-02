module.exports = {
    client: {
        token: process.env.DISCORD_TOKEN,
        id: process.env.DISCORD_CLIENT_ID,
    },
    handler: {
        prefix: 'ms_',
        deploy: true,
        commands: {
            prefix: true,
            slash: true,
            user: true,
            message: true,
        },
        errors: 'owner', // "owner" or "developers"
    },
    users: {
        developers: ['738346395416789022'],
        ownerId: '738346395416789022',
    },
    development: {
        enabled: true,
        ephemeral: false,
        deployToGuild: true,
        logFile: 'log.txt',
        guild: process.env.GUILD_ID,
    },
    messageSettings: {
        nsfwMessage: 'The current channel is not a NSFW channel.',
        ownerMessage:
            'The bot developer has the only permissions to use this command.',
        developerMessageCommand: 'You are not authorized to use this command.',
        developerMessageComponent:
            'You are not authorized to use this component.',
        cooldownMessage:
            "Slow down buddy! You're too fast to use this command ({cooldown}s).", // '{cooldown}' is a variable that shows the time to use the command again (in seconds)
        globalCooldownMessage:
            'Slow down buddy! This command is on a global cooldown ({cooldown}s).', // '{cooldown}' is a variable that shows the time to use the command again (in seconds)
        notHasPermissionMessage:
            'You do not have the permission to use this command.',
        notHasPermissionComponent:
            'You do not have the permission to use this component.',
        missingDevIDsMessage:
            'This is a developer only command, but unable to execute due to missing user IDs in configuration file.',
    },
    hetzner: {
        id: '52381354',
    },
    mc: {
        host: '188.245.78.73',
    },
};
