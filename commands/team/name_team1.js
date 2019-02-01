const commando = require('discord.js-commando');
const discord = require('discord.js');
class RenameTeam1Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'team1name',
            group: 'team',
            memberName: 'team1name',
            description: 'zet de naam van team1'
        });
    }
    async run(message, args)
    {
        team1Name[0] = args;
        var resetTeamMsg = new discord.RichEmbed()
        .setTitle("U hebt de naam verandert naar {team1}!")
        .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
        .setColor("#ffffff")
        message.channel.sendEmbed(resetTeamMsg);
    }
}

module.exports = RenameTeam1Command;