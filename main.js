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

    var check = 0;
    message.attachments.forEach(attachment => {
        const ImageLink = attachment.proxyURL;
        if(ImageLink.includes('2Q.png')){
            message.delete();
            check = 1;
        }
        else if(ImageLink.includes('Unknown.jpg')){
            message.delete();
            check = 1;
        }
    });

    if(check == 1){
        message.channel.send('Żółta kartka. Uważaj co postujesz.');
        return;
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);

    switch(args[0]){
        case 'teczka':
            message.channel.send('Za każdą powiedzianą teczkę na sesji -2 do HP!');
        break;
        case 'widziszmnie':
            message.channel.send('Tak, widze cię brek!', {files: ["https://i.ytimg.com/vi/4Ii0gklQksU/maxresdefault.jpg"]});
        break;
        case 'piotrek':
            message.channel.send('No co mam powiedzieć. No Piotruś, ekspert od niszczenia promotorom życia.');
        break;
        case 'quals':
            message.channel.send('Piotruś :heart:');
        break;
        case '997':
            message.channel.send('https://www.youtube.com/watch?v=ZWJR1KDMvMQ');
        break;
        case 'slownik':
            message.channel.send('To jak się pisze te stupki?');
        break;
        case 'powrot':
            message.channel.send('Stary wrócił online!', {files: ["https://i.kym-cdn.com/entries/icons/original/000/028/086/cover1.jpg"]});
        break;
        case '5head':
            message.channel.send('Zajebisty pomysł wariacie.');
        break;
        case 'marcin':
            message.channel.send('Marcin w każdym RPG', {files: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLPKpV_kY9rJSYKg4uNuC5yC9-egWrcHRpeFgGrfLopGO162cuOyivIYh9fO-e98u268&usqp=CAU"]});
        break;
        case 'stary':
            message.channel.send('Stary to styl bycia.');
        break;
        case 'kebab':
            message.channel.send('Obaliłbym kebaba. Takiego dobrego. Mhmmmmm.');
        break;
        case 'XD':
            message.channel.send("XD", {files: ["https://hiro.pl/wp-content/uploads/2017/12/xd.jpg"]});
        break;
        case 'jasiek':
            message.channel.send('Jasiek. A no tak. Ten co nie przechodzi żadnej gry i oszukuje na lewo i prawo. To znam.');
            message.channel.send('No i ma ból głowy z rana. EZ');
        break;
        case 'hugo':
            message.channel.send('Hugo :heart:', {files: ["./assa.png"]});
        break;
        case 'susge':
            message.channel.send('Ktoś tu jej sus. Hmmmm.');
        break;
        case 'skanuj':
            message.channel.send('Skanuje za debilami...');
            message.channel.send('Znaleziono 1 taki przypadek.');
        break;
        case 'klamiesz':
            message.channel.send('Ja nie kłamie. :angry:');
        break;
        case 'atencja':
            message.channel.send('Spierdalaj kurwa.');
        break;
        case 'k6':
            message.channel.send('Rzucasz K6. Twój wynik to:');
            message.channel.send(getRandomInt(6)+1);
        break;
        case 'k8':
            message.channel.send('Rzucasz K8. Twój wynik to:');
            message.channel.send(getRandomInt(8)+1);
        break;
        case 'k10':
            message.channel.send('Rzucasz K10. Twój wynik to:');
            message.channel.send(getRandomInt(10)+1);
        break;
        case 'k12':
            message.channel.send('Rzucasz K12. Twój wynik to:');
            message.channel.send(getRandomInt(12)+1);
        break;
        case 'k20':
            message.channel.send('Rzucasz K20. Twój wynik to:');
            message.channel.send(getRandomInt(20)+1);
        break;
        case 'k100':
            message.channel.send('Rzucasz K100. Twój wynik to:');
            message.channel.send(getRandomInt(100)+1);
        break;
        case 'kontrola':
            message.channel.send("Baczność!", {files: ["https://nonsa.pl/images/thumb/e/ed/Rainbow_Dash_salut.svg/1200px-Rainbow_Dash_salut.svg.png"]});
        break;
        case 'NaM':
            async function nam(){
            message.channel.send('Wczytuje procedurę NaM...');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣿⣿⣿⠿⠛⣉⣍⠁⠄⠈⠉⠉⠉⠉⠉⠉⡩⣍⡻⣿⣿⣿⣿⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣿⡿⢃⣴⡿⠛⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢷⣝⣞⢿⣿⣿⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⠟⣰⣿⠟⠁⠄⠄⠄⠄⠄⠄⢀⣀⣤⠄⠄⠄⠄⠙⢯⣻⣿⣿⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣸⣿⠏⠄⠄⠄⠄⠄⢀⣤⣴⣿⣿⣿⣷⡄⠄⠄⠄⠄⣧⠛⣿⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⡇⣿⣯⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣷⠦⠄⠄⠄⠉⠂⢹⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⡇⡿⠃⠄⠄⠄⠄⠄⠄⣉⣛⣿⣿⣿⣿⣿⣶⣶⣤⣴⠄⠄⠄⠘⢿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠋⡉⠻⣿⣿⣿⣿⢫⡉⠄⢹⣿⡀⠐⠂⢁⣾⣿');
            await sleep(100);
            message.channel.send('⣿⣿⡀⠄⠄⠄⠄⠄⠈⠄⣀⣥⣦⡾⠄⣿⣿⣶⣿⣿⣿⣿⡇⠄⠄⠸⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣇⠄⠄⠄⠄⠄⠄⢼⣿⣿⣿⠏⠄⣽⣿⣿⣿⣿⣿⣿⡇⠄⡀⠄⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣷⡀⠄⠄⠄⢀⠘⢿⣿⣿⠄⠂⠛⣛⣿⣿⣿⣿⣿⣇⣾⣿⠄⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣿⣿⣿⣿⣦⠸⣿⣼⡏⠁⠄⠘⢻⡛⢓⡛⣿⣿⡿⣼⣿⣿⢀⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣿⣿⣿⣿⣿⣇⠘⠏⠃⠄⣤⣴⣶⣶⣿⣿⣿⢻⣾⣿⣿⣧⣾⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠈⠻⣿⣿⣽⣿⠋⣰⣿⣿⣿⣿⣿⣿⣿⣿');
            await sleep(100);
            message.channel.send('⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣈⠙⢉⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿');
            await sleep(100);
            }
            nam();
            break;
        case 'ayaya':
                async function ayaya(){
                message.channel.send('Wczytuje procedurę Ayaya...');
                await sleep(100);
                message.channel.send('⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣬⡛⣿⣿⣿⣯⢻ ');
                await sleep(100);
                message.channel.send('⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢻⣿⣿⢟⣻⣿⣿⣿⣿⣿⣿⣮⡻⣿⣿⣧ ');
                await sleep(100);
                message.channel.send('⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣆⠻⡫⣢⠿⣿⣿⣿⣿⣿⣿⣿⣷⣜⢻⣿ ');
                await sleep(100);
                message.channel.send('⣿⣿⢡⣸⣿⣏⣿⣿⣶⣯⣙⠫⢺⣿⣷⡈⣿⣿⣿⣿⡿⠿⢿⣟⣒⣋⣙⠊ ');
                await sleep(100);
                message.channel.send('⣿⡏⡿⣛⣍⢿⣮⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿ ');
                await sleep(100);
                message.channel.send('⣿⢱⣾⣿⣿⣿⣝⡮⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⣋⣻⣿⣿⣿⣿');
                await sleep(100);
                message.channel.send('⢿⢸⣿⣿⣿⣿⣿⣿⣷⣽⣿⣿⣿⣿⣿⣿⣿⡕⣡⣴⣶⣿⣿⣿⡟⣿⣿⣿ ');
                await sleep(100);
                message.channel.send('⣦⡸⣿⣿⣿⣿⣿⣿⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿');
                await sleep(100);
                message.channel.send('⢛⠷⡹⣿⠋⣉⣠⣤⣶⣶⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣷⢹⣿⣿');
                await sleep(100);
                message.channel.send('⣷⡝⣿⡞⣿⣿⣿⣿⣿⣿⣿⣿⡟⠋⠁⣠⣤⣤⣦⣽⣿⣿⣿⡿⠋⠘⣿⣿ ');
                await sleep(100);
                message.channel.send('⣿⣿⡹⣿⡼⣿⣿⣿⣿⣿⣿⣿⣧⡰⣿⣿⣿⣿⣿⣹⡿⠟⠉⡀⠄⠄⢿⣿ ');
                await sleep(100);
                message.channel.send('⣿⣿⣿⣽⣿⣼⣛⠿⠿⣿⣿⣿⣿⣿⣯⣿⠿⢟⣻⡽⢚⣤⡞⠄⠄⠄⢸⣿');
            }
            ayaya();
            break;
        case 'ochuj':
            message.channel.send('O chuj, przypał.', {files: ["https://i.pinimg.com/originals/25/e0/45/25e0450a39f1c01fef9cac41a2da14bb.gif"]});
            break;
        case 'damcirade':
            message.channel.send('Mam coś dla ciebie: https://www.youtube.com/watch?v=20BBZBidjI4');
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
                        //voiceChannel.leave();
                        //message.channel.send('Opuszczanie kanału. Trzymajcie się tam!')
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
                        //voiceChannel.leave();
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
