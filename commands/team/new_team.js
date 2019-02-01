const commando = require('discord.js-commando');
const discord = require('discord.js');
class NewTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'createteam',
            group: 'team',
            memberName: 'createteam',
            description: 'Creert een nieuw scrim team'
        });
    }
    async run(message, args)
    {

        currentTeamMembers1 = [];
        currentTeamMembers2 = [];
        team1Captain[0] = "Not chosen yet";
        team2Captain[0] = "Not chosen yet";
        team1Name[0] = "Team 1";
        team2Name[0] = "Team 2";

        var resetTeamMsg = new discord.RichEmbed()
        .setTitle("De teams zijn gereset!")
        .setDescription("maak een nieuw team aan met (vulditin)")
        .setColor("#ffffff")
        message.channel.sendEmbed(resetTeamMsg);
    }
}

module.exports = NewTeamCommand;