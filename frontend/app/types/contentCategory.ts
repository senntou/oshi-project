export interface Content {
  title: string;
  description: string;
}

export interface Anime extends Content {
  period: string;
}
export interface Radio extends Content {
  schedule_type: string;
  schedule_day: string | null;
}
// TODO: dateをstringからDate型に変更する
export interface Live extends Content {
  place: string;
  date: string;
}
