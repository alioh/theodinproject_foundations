const repeatString = function(text, number) {
    final_text = [];
    if(number<0){
        return "ERROR";
    } else {
    for(i=1;i<=number;i++){
        final_text.push(text);
    }
    return final_text.join("");
}
}

module.exports = repeatString