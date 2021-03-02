// KOMUTLAR KISMINA ATILACAK KOD

const Discord = require('discord.js')

    exports.run = (client, message, args) => {

        let miktar = args.slice(0).join(' ')
        
        // Sınır
        if(miktar > 100){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`**Silmek İstediğin Mesaj Boyutu Çok Yüksek. En Fazla \`100\`**`)
            .setColor('#ff0000')
            return message.channel.send(pâyidar) 
        } else if(isNaN(miktar)){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Geçerli Bir SAYI Giriniz. \`100\`**`)
            .setColor('#ff0000')
            return message.channel.send(pâyidar) 
        }

        // isNaN

        // Miktar Girilmezse & Girilirse.
        if(!miktar){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Miktar Gir.**`)
            .setColor('#ff0000')
            return message.channel.send(pâyidar)
        } else if(miktar){
            message.channel.bulkDelete(miktar);

            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`**Başarıyla ${miktar} Adet Mesaj Sildim.**`)
            .setColor('#00ff00')
            return message.channel.send(pâyidar).then(payidarsil => {
                payidarsil.delete({timeout: 5000})
            })
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Temizle'],
    permLevel: 0
}

exports.help = {
    name: 'temizle'
}
