import 'dotenv/config';
import { Bot } from 'grammy';

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('BOT_TOKEN is required to start the bot.');
  process.exit(1);
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
