module.exports = function(controller) {


  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'Hey team, I\'m PIE, say `@PIE help` if you want to check out my skills');

  });

  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hey ' + message.raw_message.data.personDisplayName + ' say `@PIE help` if you want to see my skills');

  });


};
