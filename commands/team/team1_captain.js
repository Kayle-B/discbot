const commando = require('discord.js-commando');
const discord = require('discord.js');
class team1CaptainCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'team1captain',
            group: 'team',
            memberName: 'team1captain',
            description: 'word captain van team 1'
        });
    }
    async run(message, args)
    {
        team1Captain[0] = message.author;     
        var team1CaptainMsg = new discord.RichEmbed()
        .setTitle("U hebt {discordname} captain gemaakt van {team1}!")
        .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
        .setColor("#ffffff")
        message.channel.sendEmbed(team1CaptainMsg);
    }
}

module.exports = team1CaptainCommand;