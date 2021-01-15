const reverseString = function(text) {
    let newText = [];
    for(i=text.length;i>=0;i--){
      newText.push(text[i]);
    }
    return newText.join("");
}

module.exports = reverseString
