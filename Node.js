// Підключаємо бібліотеку для Telegram-бота
const TelegramBot = require('node-telegram-bot-api');

// ВСТАВ СВІЙ TELEGRAM ТОКЕН СЮДИ
const token = '8091191718:AAFNnWO8SbAtolGdZY0l3SeTlfImTsQ1Iq0';

// Створюємо нового бота
const bot = new TelegramBot(token, { polling: true });

// Обробник команди /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привіт! Я твій арбітражний бот. Я буду надсилати сигнали сюди.');
});

// Приклад функції для надсилання арбітражного сигналу
function sendArbitrageSignal(chatId, signal) {
  const message = `
Арбітражний сигнал:
Монета: ${signal.symbol}
Сторона: ${signal.side}
Спред: ${signal.spreadPct.toFixed(2)}%
Ціна на CEX (${signal.cexName}): ${signal.priceCEX}$
Ціна на DEX (${signal.dexName}): ${signal.priceDEX}$
Мережа: ${signal.chain}
Контракт: ${signal.ca}

Рекомендація: ${signal.explanation}
`;
  bot.sendMessage(chatId, message);
}

// Тут можна додати свою логіку для пошуку сигналів
// Наприклад, після знаходження арбітражу викликаємо:
// sendArbitrageSignal(chatId, yourSignalObject);
