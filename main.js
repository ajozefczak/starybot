const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


const ytdl = require("ytdl-core");
const ytSearch = require('yt-search');
const prefix = '-';

var servers = {};


client.once('ready', () =>{
    console.log('This bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);


    switch(args[0]){
        case 'teczka':
            message.channel.send('Za każdą powiedzianą teczkę na sesji -2 do HP!');
        break;
        case 'widziszmnie':
            message.channel.send('Tak, widze cię brek!');
        break;
        case 'play':
            async function play(){

                const voiceChannel = message.member.voice.channel;
                console.log(args[1]);
                if(!voiceChannel) return message.channel.send('Ty. Wbij sobie na kanał, co?');
                const permissions = voiceChannel.permissionsFor(message.client.user);
                if(!permissions.has('CONNECT')) return message.channel.send('Nie masz permisji byczqu!');
                if(!permissions.has('SPEAK')) return message.channel.send('Nie masz permisji byczqu!');
                if(!args.length) return message.channel.send('Z czym ty do ludzi idziesz? Dodaj drugi parametr kurwa ten.');
                
                const validURL = (str) =>{
                    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                    if(!regex.test(str)){
                        return false;
                    } else {
                        return true;
                    }
                }
                
                if(validURL(args[1])){
                    const channel = message.member.voice.channel;
                    const connection = await channel.join();
                    const stream = ytdl(args[1], {fillter:'audioonly'});

                    connection.play(stream, {seek: 0, volume: 1})
                    .on('finish', () =>{
                        voiceChannel.leave();
                        message.channel.send('Opuszczanie kanału. Trzymajcie się tam!')
                    });

                    await message.reply(':thumbsup: Teraz gra piosenka z linku. Pozdrawiam :]');
                    return;
                }

                const channel = message.member.voice.channel;
                const connection = await channel.join();

                const videoFinder = async (query) => {
                    const videoResult = await ytSearch(query);

                    return(videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await videoFinder(args.join(''));

                if(video){
                    const stream = ytdl(video.url, {filter: 'audioonly'});
                    connection.play(stream, {seek: 0, volume: 1})
                    .on('finish', () =>{
                        voiceChannel.leave();
                    });
                    message.reply(':thumbsup: Teraz gra: ' + video.title + '. Pozdrawiam :]')
                }
                else {
                    message.reply('Nie znaleziono niczego byczku!');
                }
            }
            play();
        break;
        case 'wyjdz':
            async function leave() {
                const voiceChannel = message.member.voice.channel;

                if(!voiceChannel) return message.channel.send("Musisz być na kanale, aby zatrzymać i wyłączyc bota!")
                await voiceChannel.leave();
                await message.channel.send('Opuszczanie kanału. Trzymajcie się tam!');
            }
            leave();
        break;
    }
});

client.login(process.env.DJS_TOKEN);
