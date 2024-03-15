export interface Codec {
  origin: string
  target: string
}

export const codecs: Codec[] = [
  { origin: 'GBK', target: 'UTF-8' },
  { origin: 'UTF-8', target: 'GBK' },
  { origin: 'GBK', target: 'ISO-8859-1' },
  { origin: 'GBK', target: 'BIG5' },
  { origin: 'GBK', target: 'UTF-16' },
  { origin: 'GBK', target: 'WINDOWS-1252' },
  { origin: 'UTF-8', target: 'ISO-8859-1' },
  { origin: 'UTF-8', target: 'BIG5' },
  { origin: 'UTF-8', target: 'UTF-16' },
  { origin: 'UTF-8', target: 'WINDOWS-1252' },
  { origin: 'ISO-8859-1', target: 'UTF-8' },
  { origin: 'ISO-8859-1', target: 'GBK' },
  { origin: 'ISO-8859-1', target: 'BIG5' },
  { origin: 'ISO-8859-1', target: 'UTF-16' },
  { origin: 'ISO-8859-1', target: 'WINDOWS-1252' },
  { origin: 'BIG5', target: 'UTF-8' },
  { origin: 'BIG5', target: 'GBK' },
  { origin: 'BIG5', target: 'ISO-8859-1' },
  { origin: 'BIG5', target: 'UTF-16' },
  { origin: 'BIG5', target: 'WINDOWS-1252' },
  { origin: 'UTF-16', target: 'UTF-8' },
  { origin: 'UTF-16', target: 'GBK' },
  { origin: 'UTF-16', target: 'ISO-8859-1' },
  { origin: 'UTF-16', target: 'BIG5' },
  { origin: 'UTF-16', target: 'WINDOWS-1252' },
  { origin: 'WINDOWS-1252', target: 'UTF-8' },
  { origin: 'WINDOWS-1252', target: 'GBK' },
  { origin: 'WINDOWS-1252', target: 'ISO-8859-1' },
  { origin: 'WINDOWS-1252', target: 'BIG5' },
  { origin: 'WINDOWS-1252', target: 'UTF-16' },
]
