const sumAll = function(from, to) {
  if((from < 0 ) || (to < 0 )){
    return "ERROR";
  } else if((typeof(from) != 'number' ) || (typeof(to) != 'number' )){
    return "ERROR";
  } else if(from > to){
    let temp = to;
    to = from;
    from = temp;
  }
  let result = from;
  while (from !== to){
    result += (from+1);
    from++;
  }
  return result;
}

module.exports = sumAll
