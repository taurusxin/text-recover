export interface Codec {
  origin: string
  target: string
}

export const codecs: Codec[] = [
  {
    origin: 'GBK',
    target: 'UTF-8',
  },
  {
    origin: 'UTF-8',
    target: 'GBK',
  },
  {
    origin: 'GBK',
    target: 'ISO-8859-1',
  },
  {
    origin: 'GBK',
    target: 'BIG5',
  },
  {
    origin: 'GBK',
    target: 'UTF-16',
  },
  {
    origin: 'GBK',
    target: 'WINDOWS-1252',
  },
  {
    origin: 'UTF-8',
    target: 'ISO-8859-1',
  },
  {
    origin: 'UTF-8',
    target: 'BIG5',
  },
  {
    origin: 'UTF-8',
    target: 'UTF-16',
  },
  {
    origin: 'UTF-8',
    target: 'WINDOWS-1252',
  },
]
