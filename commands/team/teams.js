const commando = require('discord.js-commando');
const discord = require('discord.js');
class ViewTeamsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'teams',
            group: 'team',
            memberName: 'teams',
            description: 'laat een overview zien van de teams'
        });
    }
    async run(message, args)
    {

   // View total players in team 1
   console.log("team1 values = " + team1Name[0] + team2Name[0]);
   console.log("captain values" + team1Captain[0] + team2Captain[0]);
   if((team1Name[0]== "0") || (team2Name[0]== "0"))
   {
       console.log("stap 1");
    var noTeamMsg = new discord.RichEmbed()
    .setTitle("Je hebt nog geen team aangemaakt")
    .setDescription("Maak een team aan met ?createteam")
    .setColor("#ff0000")
    message.channel.sendEmbed(noTeamMsg);
   }   
   else if((team1Captain[0]== "Not chosen yet") || (team2Captain[0]== "Not chosen yet"))
   {
    console.log("stap 2");
    var noCaptainMsg = new discord.RichEmbed()
    .setTitle("Je hebt nog geen captains gekozen")
    .setDescription("kies een captain met ?team{x}captain")
    .setColor("#ff0000")
    message.channel.sendEmbed(noCaptainMsg);
   }
   else{
    console.log("stap 3");
    var teamview1Msg = new discord.RichEmbed()
    .setTitle(team1Name[0])
 
    for(var i = 0; i < team1Captain.length; i++)
    {            
        teamview1Msg.addField("Captain ", team1Captain[i].username);
    }
    for(var i = 0; i < currentTeamMembers1.length; i++)
    {
        
        teamview1Msg.addField("Member "+ (i+1).toString(),currentTeamMembers1[i].username);
    }
    
    teamview1Msg.setColor("#4286f4")
    message.channel.sendEmbed(teamview1Msg);
 
    // view total players in team 2
    var teamview2Msg = new discord.RichEmbed()       
    .setTitle(team2Name[0])
    for(var i = 0; i < team2Captain.length; i++)
    {            
        teamview2Msg.addField("Captain ", team2Captain[i].username);
    }
    for(var i = 0; i < currentTeamMembers2.length; i++)
    {
        teamview2Msg.addField("Member "+ (i+1).toString(),currentTeamMembers2[i].username);
    }
    
    teamview2Msg.setColor("#41f44d")
    message.channel.sendEmbed(teamview2Msg);
         }
    }
}

module.exports = ViewTeamsCommand;