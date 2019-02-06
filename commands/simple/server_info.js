const commando = require('discord.js-commando');
const discord = require('discord.js');

class ServerInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'serverinfo',
            group: 'simple',
            memberName: 'serverinfo',
            description: 'info over de server en jij'
        });
    }
    async run(message, args)
    {
        var Server_Info = new discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .addField('Server Naam', message.guild.name, true)
            .addField('Server start datum', message.guild.createdAt, false)
            .addField('Jij bent gejoint op', message.guild.joinedAt, false)
            .addField('Aantal members', message.guild.memberCount, false)
            .setColor('#ff0000')
            .setFooter("door Kas")

        message.channel.sendEmbed(Server_Info);
        console.log("!serverinfo is geexecuteerd door" + message.author)
    }
}

module.exports = ServerInfoCommand;