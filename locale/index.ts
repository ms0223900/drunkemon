import { PokemonRegionEnum, PokemonTypeEnum } from 'src/types';
import zhTw from './zh-tw';

export type Locale = 'zhTw' | 'en';

export type LocaleKeys = PokemonTypeEnum | PokemonRegionEnum;

const messages: Record<Locale, Record<LocaleKeys, string>> = {
  zhTw: zhTw,
  en: zhTw,
};

export const getMessage = (localeKey: LocaleKeys, locale: Locale = 'zhTw') =>
  messages[locale][localeKey] || '';

export default messages;
