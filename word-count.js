export function count(string) {
    return string
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .reduce((arrayOfWords, words) => {
            arrayOfWords[words] = (arrayOfWords[words] || 0) + 1;
            return arrayOfWords
        }, {})
}