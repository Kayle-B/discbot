const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'info over mij'
        });
    }
    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle('IKKKKK')
            .addField('Over mij', 'Hallo, Ik ben de beste bot.', true)
            .addField('Oke', 'nee', false)
            .setColor('#ff0000')
            .setThumbnail(message.author.avatarURL)
            .setFooter("Kut zooi")
            .setURL('https://livecount.ga/')

        message.channel.sendEmbed(myInfo);
    }
    
}

module.exports = InfoAboutMeCommand;