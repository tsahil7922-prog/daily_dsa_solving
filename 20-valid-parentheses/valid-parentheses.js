/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let store = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            store.push(")")
        } else if (s[i] === "[") {
            store.push("]")
        }
        else if (s[i] === "{") {
            store.push("}")
        }
        else {
            if (store.pop() !== s[i]) {
                return false
            }
        }
    }
    return store.length === 0;
};