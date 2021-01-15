const removeFromArray = function(...args) {
    let toRemove = args.slice(1);
      let finalResult = [];
      for(i=0;i<args[0].length;i++){
        if(!toRemove.includes(args[0][i])){
          finalResult.push(args[0][i]);
        }
      }
      return finalResult;
}

module.exports = removeFromArray
