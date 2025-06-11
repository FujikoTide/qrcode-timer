export type Base64String = string & { readonly __brand: 'Base64' }

export function base64ToBytes(base64: Base64String) {
  const binString = atob(base64)
  return Uint8Array.from(binString, (m) => m.codePointAt(0)!)
}

export function base64UrlToBytes(base64Url: string) {
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  base64 += padding

  return base64ToBytes(base64 as Base64String)
}

export function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join('')
  return btoa(binString)
}

export function bytesToBase64Url(bytes: Uint8Array) {
  return bytesToBase64(bytes)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

export function stringToBase64(string: string) {
  return bytesToBase64(new TextEncoder().encode(string)) as Base64String
}

export function base64ToString(base64: Base64String) {
  return new TextDecoder().decode(base64ToBytes(base64))
}

// Usage
// bytesToBase64(new TextEncoder().encode('something !!! a Ā 𐀀 文 🦄')) // c29tZXRoaW5nICEhISBhIMSAIPCQgIAg5paHIPCfpoQ=
// new TextDecoder().decode(base64ToBytes("c29tZXRoaW5nICEhISBhIMSAIPCQgIAg5paHIPCfpoQ=")) // something !!! a Ā 𐀀 文 🦄

// function testing() {
//   console.log(
//     bytesToBase64(new TextEncoder().encode('something !!! a Ā 𐀀 文 🦄'))
//   )
//   console.log(
//     new TextDecoder().decode(
//       base64ToBytes('c29tZXRoaW5nICEhISBhIMSAIPCQgIAg5paHIPCfpoQ=')
//     )
//   )
// }
