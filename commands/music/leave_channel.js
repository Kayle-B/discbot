const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaved een channel'
        });
    }
    async run(message, args)
    {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("Ben nog niet eens verbonden.");
        }
    }
}
module.exports = LeaveChannelCommand;