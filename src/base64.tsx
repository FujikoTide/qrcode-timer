export type Base64String = string & { readonly __brand: 'Base64' }

export function base64ToBytes(base64: Base64String) {
  const binString = atob(base64)
  return Uint8Array.from(binString, (m) => m.codePointAt(0)!)
}

export function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join('')
  return btoa(binString)
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
