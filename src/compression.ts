import pako from 'pako'

import {
  bytesToBase64,
  bytesToBase64Url,
  base64ToBytes,
  base64UrlToBytes,
  type Base64String,
} from './base64'

export function compressAndEncode(payloadObject: object) {
  const jsonString = JSON.stringify(payloadObject)
  const utf8Bytes = new TextEncoder().encode(jsonString)
  const compressedBytes = pako.deflate(utf8Bytes)

  return bytesToBase64(compressedBytes) as Base64String
}

export function compressAndEncodeUrlSafe(payloadObject: object) {
  const jsonString = JSON.stringify(payloadObject)
  const utf8Bytes = new TextEncoder().encode(jsonString)
  const compressedBytes = pako.deflate(utf8Bytes)

  return bytesToBase64Url(compressedBytes) as Base64String
}

export function decodeAndDecompress(encodedData: Base64String): object | null {
  try {
    const compressedBytes = base64ToBytes(encodedData)
    const decompressedBytes = pako.inflate(compressedBytes)
    const jsonString = new TextDecoder().decode(decompressedBytes)

    return JSON.parse(jsonString)
  } catch (error) {
    console.error('Failed to decode and decompress data: ', error)
    return null
  }
}

export function decodeAndDecompressUrlSafe(
  encodedData: Base64String,
): object | null {
  try {
    const compressedBytes = base64UrlToBytes(encodedData)
    const decompressedBytes = pako.inflate(compressedBytes)
    const jsonString = new TextDecoder().decode(decompressedBytes)

    return JSON.parse(jsonString)
  } catch (error) {
    console.error('Failed to decode Url-safe data: ', error)
    return null
  }
}
