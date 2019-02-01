const commando = require('discord.js-commando');
const discord = require('discord.js');
class team2CaptainCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'team2captain',
            group: 'team',
            memberName: 'team2captain',
            description: 'word captain van team 2'
        });
    }
    async run(message, args)
    {
        team2Captain[0] = message.author;     
        var team2CaptainMsg = new discord.RichEmbed()
        .setTitle("U hebt {discordname} captain gemaakt van {team2}!")
        .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
        .setColor("#ffffff")
        message.channel.sendEmbed(team2CaptainMsg);
    }
}

module.exports = team2CaptainCommand;