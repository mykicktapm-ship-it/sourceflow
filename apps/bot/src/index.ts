import { Bot } from 'grammy';

const token = process.env.BOT_TOKEN;

if (!token) {
  console.warn('BOT_TOKEN is not set. Bot will not start.');
  process.exit(0);
}

const bot = new Bot(token);

bot.catch((error) => {
  console.error('Bot error', error);
});

const start = async () => {
  console.log('Bot started');
  await bot.start();
};

start();
