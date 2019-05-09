const Discord = require('discord.io');
const logger = require('winston');
//logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// init Discord bot
const bot = new Discord.Client({
    autorun: true,
    token: 'NTc2MTQyODkzMDczNDMyNTc3.XNSNJA.9tRet-bfgSNkfvy0nySw5OiH-J8'
});

bot.on('ready', () => {
    logger.info('Connected');
    logger.info('Logged in as:');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, event) => {
    if (message.substring(0, 1) === '!') {
        let args = message.substring(1).split(' ');
        const cmd = args[0];
        args = args.splice(1);

        let returnMessage = '';
        switch (cmd) {
            case 'ping':
                returnMessage = 'pong';
                break;
            case 'hello':
                returnMessage = 'Hi, ' + user + '!';
                break;
            case 'time':
                let date = new Date();
                returnMessage = date.getHours() + ':' + date.getMinutes();
                break;
            default:
                returnMessage = 'Invalid command, try again!';
        }

        bot.sendMessage({
            to: channelID,
            message: returnMessage
        });
    }
});

