const TelegramBot = require("node-telegram-bot-api");

// Вставьте сюда токен вашего бота
const token = "5772918708:AAGCnOeqwNXfnUKWLaGf8YsLDoAHx-4gTPQ";

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик для команды /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Привет! Я буду отправлять тебе картинки с расписанием в нужный день недели, когда ты напишешь мне команду /rasp. Бота написал - @uuuuuno"
  );
});

// Обработчик для команды /rasp
bot.onText(/\/rasp/, (msg) => {
  const chatId = msg.chat.id;
  const today = new Date().getDay();
  let image = "";

  switch (today) {
    case 1:
      image = "1.png";
      break;
    case 2:
      image = "2.png";
      break;
    case 3:
      image = "3.png";
      break;
    case 4:
      image = "4.png";
      break;
    case 5:
      image = "5.png";
      break;
    default:
      // Если сегодня не учебный день, то отправляем сообщение об этом
      bot.sendMessage(chatId, "Сегодня нет учебы, нет расписания.");
      return;
  }

  bot.sendPhoto(chatId, image);
});
