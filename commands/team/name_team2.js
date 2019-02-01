const commando = require('discord.js-commando');
const discord = require('discord.js');
class RenameTeam2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'team2name',
            group: 'team',
            memberName: 'team2name',
            description: 'zet de naam van team1'
        });
    }
    async run(message, args)
    {
        team2Name[0] = args;
        var resetTeam2Msg = new discord.RichEmbed()
        .setTitle("U hebt de naam verandert naar {team2}!")
        .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
        .setColor("#ffffff")
        message.channel.sendEmbed(resetTeam2Msg);
    }
}

module.exports = RenameTeam2Command;