const ftoc = function(number) {
  return parseFloat((( number - 32 ) * (5/9)).toFixed(1));
}

const ctof = function(number) {
  return parseFloat((( number * (9/5) ) + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
