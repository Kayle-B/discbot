const commando = require('discord.js-commando');
const discord = require('discord.js');
class JoinTeam1Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'jointeam1',
            group: 'team',
            memberName: 'jointeam1',
            description: 'joint een nieuw scrim team'
        });
    }
    async run(message, args)
    {

        currentTeamMembers1.push(message.author);
        
        var resetTeamMsg = new discord.RichEmbed()
        .setTitle("U hebt {discordname} toegevoegd aan {team1}!")
        .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
        .setColor("#ffffff")
        message.channel.sendEmbed(resetTeamMsg);
    }
}

module.exports = JoinTeam1Command;