/*
curl -X POST -H "Authorization: Bearer ymO5aQjdauHubRdwL0tERYS4rLWCV29yJzUGwLoZHlbE07V7HZkbnkRTLxjr2jSf" "https://api.hetzner.cloud/v1/servers/52381354/actions/poweron"
set "ssh_dir=%USERPROFILE%\.ssh"
set "id_atm9_file=%ssh_dir%\id_atm9"
set "server_ip=188.245.78.73"

if not exist "%ssh_dir%" (
    mkdir "%ssh_dir%"
)
if not exist "%id_atm9_file%" (
    (
    echo -----BEGIN OPENSSH PRIVATE KEY-----
    echo b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
    echo NhAAAAAwEAAQAAAYEAuFxiz6Z5HXW0LE3QRKqylEDq5hNcL+tbrp8Ek0iij+SgSR1stdpe
    echo /V5pirUugbYoOo6cS7YPm/BpZ10PiZwEiWLV5r1qgciF5SNJe9WcJqiIF80aLHYCKMBlZV
    echo YPb/J7jrXHTxjlNl/ralNwH2nGo1a0kpRU0xPJCv6JSERw/TA7C1nWaQbH72ddSzbRGY/K
    echo oGkXMNk2CLrtMkXvP+RrKcBfZ4nss6cA7paMtPJNVVIJSyTuFBeENHBEdka57b/9Y2VWeB
    echo ONa53V4bU3gOCUejK+Klp4EZ6lnk1UNY9HyZqVD43PdgiGpHbbYv4mbJmhnGTAS8IOXrCY
    echo 4HHflXNqljEkMA3twWD6q37vXq9K3NAZn4q1/8iarMfZRMLBq/fY9QtOF/kwxJ6RLE1Fbf
    echo X3CijTkkHIpcDC984HhWChkv/r3B9GfK/OBJ1pTXMAUsE5yh5AxvG1QPJLMJKZZ6AZEKj9
    echo b/YIjG9mMdiWdTc8JrqmWd+VMzi/omPZZQgwixsLAAAFkAVUV+kFVFfpAAAAB3NzaC1yc2
    echo EAAAGBALhcYs+meR11tCxN0ESqspRA6uYTXC/rW66fBJNIoo/koEkdbLXaXv1eaYq1LoG2
    echo KDqOnEu2D5vwaWddD4mcBIli1ea9aoHIheUjSXvVnCaoiBfNGix2AijAZWVWD2/ye461x0
    echo 8Y5TZf62pTcB9pxqNWtJKUVNMTyQr+iUhEcP0wOwtZ1mkGx+9nXUs20RmPyqBpFzDZNgi6
    echo 7TJF7z/kaynAX2eJ7LOnAO6WjLTyTVVSCUsk7hQXhDRwRHZGue2//WNlVngTjWud1eG1N4
    echo DglHoyvipaeBGepZ5NVDWPR8malQ+Nz3YIhqR222L+JmyZoZxkwEvCDl6wmOBx35VzapYx
    echo JDAN7cFg+qt+716vStzQGZ+Ktf/ImqzH2UTCwav32PULThf5MMSekSxNRW319woo05JByK
    echo XAwvfOB4VgoZL/69wfRnyvzgSdaU1zAFLBOcoeQMbxtUDySzCSmWegGRCo/W/2CIxvZjHY
    echo lnU3PCa6plnflTM4v6Jj2WUIMIsbCwAAAAMBAAEAAAGANkRjhZIQFp7eASiKhJvmYwNU4Z
    echo KTUTurShReyWfZChgXIk56AHGeAmC3GnBIlz/iSZJO6W5W2+UBcb6P40a8gyBHrFrXLgqz
    echo dwZTDBONmkeDf9YMvUejTRGNBy407xPmUNSrLVo7pizH5A1ZdLWzFcNg9cCZ02QAiq7wBA
    echo i5ZZ2705SHK3Umhw7bBFfHZwnPcDZe8C8P27QCPAkf6qO285w/uP99YEhpWtGP63djUhkK
    echo yUa+mcVuUe02Cca51gTr9iup8eKGVt++bP7j7BMq5IhyTdvU8WC0X221jmo7XSYIKz7nkj
    echo xU5ClmZVGI6MLssB2a4SJ8fypD6QPfYUpuJEyiMe3ORgCprq5rCIXNEfDhfovMNFG+BA3+
    echo VllSHfAu4Gj6MK1Z71c1n7b7G50ZsV3w1jdVOWfGsBNVbujJsXRx7UmSCH2QMENOflxx+C
    echo oj0BqwYLr5zqT34tNPB4U/2PH21llQ8NNM5zf+oYwy75/RD5S3PeQQD1pl8m3gAq3ZAAAA
    echo wQDlZODjIVAtll15g2lxkO4ZPwxfSgg9mlWAedHTgf3c+wcCHCF5/jjTT4O1gvikhplTPh
    echo 4huMVDVFrU7VdEUjfZ2aIIxwSmoYWM442hfkRq7aIGDtyJ1pw3KJVVuj8yk8xcv0jh+9vv
    echo Mbp6V/kpO9+iKpUgKIURM6EImU44NjFToKm40q/gp7vBhviWfsd9RWi1tbOGOJtFiRFx3D
    echo RebQSNIVRLy9qB+YTbnDyl/p68wHN+TuaX1sN5eu3Hj0bDKI8AAADBAOXSnySQ0Xb6eR4r
    echo 3jehTG0TtlDOAk5a8mGS5IbKXzxhplmnJPfdQg/rbpVTHummmfv9GZ6/nEtMfDKB2fkUzY
    echo C6PD2Yt6x17BsUXNtDJGjQr2U/urg4Aq9mqofSdBoxb3MYNz8d/CHpZE5CQszh/sW3XHYB
    echo BuTODIjkEfbQftQD95wbPTrvsKo23EH+dAMdAznkt1dmxGySf7e/uMO8eLTF9AzpaAF37v
    echo 6Kjgv+Dw4BsbDrYTtg7k2q+BdkEIRVzQAAAMEAzVwlhEKRk+wNyBjsN4RGXrCpoCpeGUnB
    echo OPVYC+CbU3AKVf6fHkPNoXq8lshQbbtrsss4H44by8YPZFsb7fVwjUXg5J3lTp5wBISc2h
    echo E9ZrAoevSzU2BPuL6q56yNHj0XlNJzA840qoxy4hiCN3FL9TJw9s0xKZlIK9F7VTtXyOU3
    echo frLesp7xXSrj6t0nkS7FI0EpNMoxm42cT8MuNUomH1K11QOIdIKHtxhKId7WfvzdXXYcEs
    echo PER9Scf5SDY1w3AAAAFWVubmlvQERFU0tUT1AtQzRIUzJKNgECAwQF
    echo -----END OPENSSH PRIVATE KEY-----
    ) > "%id_atm9_file%"
)
:loop
ssh -f -i "%id_atm9_file%" root@%server_ip% "nohup sudo bash ~/mc/start.sh > /dev/null 2>&1 &"
if %errorlevel% neq 0 (
    goto loop
)
*/
const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
} = require('discord.js');
const config = process.env.PRODUCTION
    ? require('../../../server-config')
    : require('../../../config');
const ExtendedClient = require('../../../class/ExtendedClient');
const { Client } = require('ssh2');
const fs = require('fs');

function startMcServer() {
    return new Promise((resolve, reject) => {
        let connected = false;
        const TIMEOUT = 1000;
        const host = {
            host: config.mc.host,
            //port: 22,
            username: 'root',
            privateKey: fs.readFileSync('ssh_key'),
        };
        console.log('Starting the server...');
        const conn = new Client();

        conn.on('ready', () => {
            connected = true;
            console.log('Client :: ready');
            conn.exec(
                'nohup sudo bash ~/mc/start.sh > /dev/null 2>&1 &',
                (err, stream) => {
                    if (err) {
                        conn.end();
                        clearInterval(retry_intv);
                        return reject();
                    }
                    stream
                        .on('close', (code, signal) => {
                            conn.end();
                            clearInterval(retry_intv);
                            return resolve();
                        })
                        .on('data', (data) => {
                            clearInterval(retry_intv);
                            return resolve(data);
                        })
                        .stderr.on('data', function (data) {
                            clearInterval(retry_intv);
                            return reject();
                        });
                }
            );
            clearInterval(retry_intv);
            return resolve();
        }).on('error', function (data) {
            connected = false;
            conn.end();
        });

        // Try first connect
        conn.connect(host);

        // Handle connection retries
        let retry_intv = setInterval(function () {
            if (!connected) {
                console.log('Trying to connect...');
                conn.connect(host);
            }
        }, TIMEOUT);
    });
}

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Start the Minecraft Server!'),
    options: {
        cooldown: 30000,
    },
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction} interaction
     */
    run: async (client, interaction) => {
        await interaction.deferReply();
        //first check if server is already running
        fetch('https://api.hetzner.cloud/v1/servers/' + config.hetzner.id, {
            headers: {
                Authorization: `Bearer ${process.env.HETZNER_API_TOKEN}`,
            },
        })
            .then((res) => res.json())
            .then(async (json) => {
                if (json.server.status == 'running') {
                    interaction.editReply({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('Server Status')
                                .setDescription(
                                    'The Minecraft server is already running!'
                                )
                                .setColor('Green')
                                .setTimestamp(),
                        ],
                    });
                } else {
                    fetch(
                        `https://api.hetzner.cloud/v1/servers/${config.hetzner.id}/actions/poweron`,
                        {
                            method: 'POST',
                            headers: {
                                Authorization: `Bearer ${process.env.HETZNER_API_TOKEN}`,
                            },
                        }
                    );

                    interaction.editReply({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('Server Status')
                                .setDescription(
                                    'Starting the Virutal Private Server...'
                                )
                                .setColor('Purple')
                                .setTimestamp(),
                        ],
                    });

                    await startMcServer();

                    interaction.channel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('Server Status')
                                .setDescription(
                                    'Starting the Minecraft server...'
                                )
                                .setColor('Green')
                                .setTimestamp(),
                        ],
                    });
                }
            });
    },
};
