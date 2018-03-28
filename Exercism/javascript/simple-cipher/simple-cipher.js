var Cipher = function(key) {
    if (key) {
        this.key = key;
    } else {
        this.key = 'aaaaaaaaaa';
    }
    if (key === '' || !this.key.match(/^[a-z]+$/)) {
        throw new Error('Bad key');
    }
};

Cipher.prototype.encode = function(plaintext) {
    return plaintext;
};

Cipher.prototype.decode = function(plaintext) {
    return plaintext;
};

module.exports = Cipher;