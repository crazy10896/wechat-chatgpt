import * as dotenv from "dotenv";
dotenv.config();
import { IConfig } from "./interface";

export const config: IConfig = {
  api: 'https://api.chatanywhere.tech/v1',
  openai_api_key: process.env.OPENAI_API_KEY || "123456789",
  model: process.env.MODEL || "gpt-4o-mini",
  chatPrivateTriggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "bot",
  chatTriggerRule: process.env.CHAT_TRIGGER_RULE || "bot",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "true",
  temperature: process.env.TEMPERATURE ? parseFloat(process.env.TEMPERATURE) : 0.6,
  blockWords: process.env.BLOCK_WORDS?.split(",") || [],
  chatgptBlockWords: process.env.CHATGPT_BLOCK_WORDS?.split(",") || [],
};
