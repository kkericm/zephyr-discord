import dc from "discord.js";

export interface CommandStructure {
    commandSetter: dc.ApplicationCommandDataResolvable;
    result: (event: dc.ChatInputCommandInteraction<dc.CacheType> | dc.MessageContextMenuCommandInteraction<dc.CacheType> | dc.UserContextMenuCommandInteraction<dc.CacheType>) => void;
};

export const ParamaterTypes = dc.ApplicationCommandOptionType;

export type Commands = { [key: string]: (event: dc.ChatInputCommandInteraction<dc.CacheType> | dc.MessageContextMenuCommandInteraction<dc.CacheType> | dc.UserContextMenuCommandInteraction<dc.CacheType>) => void };