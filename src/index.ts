import dc from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
import { config } from 'dotenv'; config();
import fs from 'fs';
import { Commands } from "./@types";

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands: Commands = {};

fs.readdirSync(__dirname + "\\commands").forEach(async d => {
    let command = await import(`./commands/${d}`);
    bot.application?.commands.create(command.default.commandSetter);
    commands[d.slice(0, -3)] = command.default.result;
});

bot.on("interactionCreate", async event => {
    if (!event.isCommand()) return;
    commands[event.commandName](event);
});

bot.on("ready", () => {
    console.log("Zephyr está on-line.");
});

bot.login(process.env.TOLKEN);
