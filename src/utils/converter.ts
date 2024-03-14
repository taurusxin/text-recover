import { Codec } from '@/utils/codecs'
import '@/utils/iconv'

export class EncodingConverter {
  async convert(codec: Codec, text: string): Promise<string | null> {
    let convertedText: string | null = null
    try {
      const byteArray = iconv.encode(text, codec.origin)
      convertedText = iconv.decode(byteArray, codec.target)
      text = convertedText
    } catch (error) {
      console.error(`Failed to convert from ${codec.origin} to ${codec.target}: ${error}`)
      return null
    }
    return convertedText
  }
}
