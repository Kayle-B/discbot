const commando = require('discord.js-commando');
const discord = require('discord.js');
class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flipt een munt, kop of munt'
        });
    }
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            
            var headsMsg = new discord.RichEmbed()
            .setTitle("Het is kop!")
            .setDescription("Probeer het nog een keer met !flip.")
            .setThumbnail("http://www.clipartsuggest.com/images/554/thecoinspot-com-us-washington-head-quarter-dollar-coin-details-nmmeXf-clipart.png")
            .setColor("#00870b")
            message.channel.sendEmbed(headsMsg);
        }
        else{
            var tailsMsg = new discord.RichEmbed()
            .setTitle("Het is munt!")
            .setDescription("Probeer het nog een keer met !flip.")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png")
            .setColor("#00870b")
            message.channel.sendEmbed(tailsMsg);
        }
    }
}

module.exports = CoinFlipCommand;