module.exports = {
  /**
     * Decodes a binary code to text
     * @param {string} binary
     * @example
     *
     * const test = require("decode-encode-binary")
     * console.log(test.decode("0100100001100101011011000110110001101111"))
     * // outputs "Hello"
     *
     */

  decode(b) {
    if (!b || /^\s*$/.test(b)) {
      throw new Error('No Decode Argument was Received');
    }
    if (typeof b === 'number') {
      throw new Error('Decode Argument must be string, received Number');
    }

    try {
      function tobin(b) {
        b = b.replace(/\s+/g, '');
        b = b.match(/.{1,8}/g).join(' ');
        return b
          .split(' ')
          .map((m) => String.fromCharCode(parseInt(m, 2)))
          .join('');
      }
      return tobin(b).toString();
    } catch (e) {
      if (e.message === "Cannot read property 'join' of null") {
        throw new Error("Decode argument can't be empty string");
      }
      throw new Error(e.stack);
    }
  },
  /**
     * Encodes a text to binary
     * @param {string} text
     * @param {boolean} spaces
     * @example
     * var test = require("decode-encode-binary")
     * console.log(test.encode("Hello"))
     * // outputs "0100100001100101011011000110110001101111"
     *
     * // second example using "spaces"
     * var test = require("decode-encode-binary")
     * console.log(test.encode("Hello", true))
     * // outputs "01001000 01100101 01101100 01101100 01101111"
     */
  encode(t, sso) {
    if (!t) {
      throw new Error('No Encode Argument was Received');
    }
    if (typeof t === 'number') {
      throw new Error('Encode Argument must be string, received Number');
    }
    try {
      function totxt(s, ss) {
        function zeroPad(n) {
          return '00000000'.slice(String(n).length) + n;
        }
        return t.replace(/[\s\S]/g, (t) => {
          t = zeroPad(t.charCodeAt().toString(2));
          if (sso === true) {
            return !1 === ss ? t : `${t} `;
          }
          return !1 === ss ? t : `${t}`;
        });
      }
      return totxt(t).toString();
    } catch (e) {
      throw new Error(`Error ${e.stack}`);
    }
  },

  /**
     * Automatically determine if you wan't to decode or encode
     * @param {string} detect
     * @example
     * var test = require("decode-encode-binary")
     * console.log(test.auto("Hello"))
     * // outputs "0100100001100101011011000110110001101111"
     *
     * console.log(test.auto("0100100001100101011011000110110001101111"))
     * // outputs "Hello"
     */

  auto(d, spcs) {
    if (/^[01][01\s]*[01]$/.test(d)) {
      return this.decode(d);
    }
    if (spcs === true) {
      return this.encode(d, true);
    }
    return this.encode(d);
  },
  
  version() {
    try {
      return require('../package.json').version;
    } catch (e) {
      throw new Error(e.stack);
    }
  },
};
