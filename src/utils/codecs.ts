export interface Codec {
  origin: string;
  target: string;
}

export const codecs: Codec[] = [
  {
    origin: 'gbk',
    target: 'utf8',
  },
  {
    origin: 'utf8',
    target: 'gbk',
  }
]