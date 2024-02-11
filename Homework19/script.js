function generateKey(length, str) {
    let key = '';
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * str.length);
        key += str.charAt(rand);
    }
    return key;
}
console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));