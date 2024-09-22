export const Category = {
  Anime: 'ANIME',
  Radio: 'RADIO',
  Live: 'LIVE',
};

export type CategoryType = (typeof Category)[keyof typeof Category];
