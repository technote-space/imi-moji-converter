import moji from 'moji';

export const toHalfWidth = (value: string): string => moji(value).convert('ZE', 'HE').convert('ZS', 'HS').convert('ZK', 'HK').toString();
export const toFullWidth = (value: string): string => moji(value).convert('HE', 'ZE').convert('HS', 'ZS').convert('HK', 'ZK').toString();
