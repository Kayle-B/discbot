const commando = require('discord.js-commando');
const discord = require('discord.js');
const fetch = require('isomorphic-fetch');
class PokeFetchCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pokemon',
            group: 'pokemon',
            memberName: 'pokemon',
            description: 'laat stats van een pokemon zien'
        });
    }
    async run(message, args)
    {
        fetch('https://pokeapi.co/api/v2/pokemon/' + args.toLowerCase())
        .then(response => response.json())
        .then(data => {  
                    var pokeAnswerMsg = new discord.RichEmbed()
                    .setTitle(data.name)
                    .addField("Height", data.height / 10 + "m")
                    .addField("Weight", + data.weight / 10 + "kg")
                    .setThumbnail(data.sprites.front_default)
                    .setColor("#00870b")
                    message.channel.sendEmbed(pokeAnswerMsg);
                     console.log(data.name)
                
            
            })
            .catch(() => {
                var pokeErrorMsg = new discord.RichEmbed()
                .setTitle("Error!")
                .setDescription("Pokemon niet gevonden, probeer opnieuw.")
                .setColor("#ff0000")
                message.channel.sendEmbed(pokeErrorMsg);  
            })


    }
}

module.exports = PokeFetchCommand;