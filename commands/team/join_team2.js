const commando = require('discord.js-commando');
const discord = require('discord.js');
class JoinTeam2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'jointeam2',
            group: 'team',
            memberName: 'jointeam2',
            description: 'joint een nieuw scrim team'
        });
    }
    async run(message, args)
    {

        currentTeamMembers2.push(message.author);
        
        var resetTeamMsg = new discord.RichEmbed()
        .setTitle("U hebt {discordname} toegevoegd aan {team2}!")
        .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
        .setColor("#ffffff")
        message.channel.sendEmbed(resetTeamMsg);
    }
}

module.exports = JoinTeam2Command;