import { Codec } from '@/utils/codecs'

export class EncodingConverter {
  async convert(codec: Codec, text: string): Promise<string | null> {
    let convertedText: string | null = null
    try {
      const byteArray = new TextEncoder().encode(text)
      const decodedText = new TextDecoder(codec.origin).decode(byteArray)
      const byteArray2 = new TextEncoder().encode(decodedText)
      convertedText = new TextDecoder(codec.target).decode(byteArray2)
      text = convertedText
    } catch (error) {
      console.error(
        `Failed to convert from ${codec.origin} to ${codec.target}: ${error}`
      )
      return null
    }
    return convertedText
  }
}
