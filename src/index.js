/**
   * Decode a binary number to text
   * @param {string} input
   *
   * @example
   * const test = require("decode-encode-binary");
   * test.decode("0100100001100101011011000110110001101111"
   *
   * // output: "Hello"
   */

export function decode(input) {
  if (!input || /^\s*$/.test(input)) {
    throw new Error('No parameter was specified.');
  }

  if (!typeof input === String) {
    throw new Error('Parameter must be a String');
  }

  function toBinary(string) {
    let i;
    i = string.replace(/\s+/g, '');
    i = string.match(/.{1,8}/g).join(' ');

    return i
      .split(' ')
      .map((m) => String.fromCharCode(parseInt(m, 2)))
      .join('');
  }

  return toBinary(input);
}

/**
   * Encode a text to binary
   * @param {string} input
   * @param {boolean} padding
   *
   * @example
   * const test = require("decode-encode-binary");
   * test.encode("Hello")
   *
   * // output: "0100100001100101011011000110110001101111"
   *
   * @example
   * // Pad every letter in binary
   * const test = require("decode-encode-binary");
   * test.encode("Hello", true)
   *
   * // output: "01001000 01100101 01101100 01101100 01101111"
   */

export function encode(input, padding) {
  if (!input || /^\s*$/.test(input)) {
    throw new Error('No parameter was specified.');
  }

  if (!typeof input === String) {
    throw new Error('Parameter must be a String');
  }

  function toText(textInput) {
    function zeroPad(number) {
      return '00000000'.slice(String(number).length) + number;
    }

    return input.replace(/[\s\S]/g, (text) => {
      const binary = zeroPad(text.charCodeAt().toString(2));

      // Pad letters if the parameter is set
      return !1 === textInput ? binary : `${binary}${padding === true ? ' ' : ''}`;
    });
  }

  return toText(input);
}

/**
   * Automatically determine decode/encode
   * @param {string} input
   * @param {boolean} padding (encoding)
   *
   * @example
   * const test = require("decode-encode-binary");
   * test.auto("Hello")
   * // output: "0100100001100101011011000110110001101111"
   *
   * @example
   * test.auto("0100100001100101011011000110110001101111")
   * // output: "Hello"
   */

export function determine(input, padding) {
  if (/^[01][01\s]*[01]$/.test(input)) {
    return decode(input);
  }

  if (padding === true) {
    return encode(input, true);
  }

  return encode(input);
}
