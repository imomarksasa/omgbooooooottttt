const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "*";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Not Activated ❌"));
    });


client.on("message", message => {
    if(message.content.startsWith("verify")) {
      let num = Math.floor((Math.random() * 4783) + 10);
    
      message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.removeRole(message.guild.roles.find(c => c.name == "Not Activated ❌"));
          message.member.addRole(message.guild.roles.find(c => c.name == "Activated ✔️"));
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})
client.login(process.env.BOT_TOKEN);
