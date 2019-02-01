const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        if(server.queue[0])
        {
            play(connection,message);
            

        }
        else{
            connection.disconnect();
        }
    });
}

class PlayChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Speelt muziek af.'
        });
    }
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.reply("Succesvol verbonden!");
                        console.log('Playing video requested by ' + message.author);
                        server.queue.push(args);
                        Play(connection, message);
                        })             
            }
        }
        else
        {
            message.reply("Je moet in een 'voicechannel' zijn.");
        }
    }
}
module.exports = PlayChannelCommand;