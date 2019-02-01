const commando = require('discord.js-commando');
const discord = require('discord.js');
class AddTeam1Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'addteam1',
            group: 'team',
            memberName: 'addteam1',
            description: 'captain kan iemand toeveogen met deze command "?addteam1 (naam)"'
        });
    }
    async run(message, args)
    {
        console.log("testing addteam1 " + message.mentions.members)
        if(message.author == team1Captain[0])
        {
            
            // hier nog mee bezig
            currentTeamMembers1.push(message.mentions.members);
    
            console.log("team1member is toegevoegd als = " + args)
            var addTeam1Msg = new discord.RichEmbed()
            .setTitle("U hebt " + args + " toegevoegd aan "+ team1Name +"!")
            .setDescription("bekijk hoe de teams verdeeld zijn met {viewteamcommand}!")
            .setColor("#ffffff")
            message.channel.sendEmbed(addTeam1Msg);
        }
        else {        
        var noCaptainMsg = new discord.RichEmbed()
        .setTitle("U bent geen captain van " + team1Name + "!")
        .setDescription("gebruik ?help voor alle commands!")
        .setColor("#ff0000")
        message.channel.sendEmbed(noCaptainMsg);
        }
    }
}

module.exports = AddTeam1Command;