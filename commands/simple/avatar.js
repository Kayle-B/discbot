const commando = require('discord.js-commando');
const bot = new commando.Client();
class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'verandert avatar van bot'
        });
    }
    async run(message, args)
    {
        message.reply("avatar set to" + message.author.avatarURL);
        bot.user.setAvatar(message.author.AvatarURL);
    }
}

module.exports = AvatarCommand;