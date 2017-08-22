module.exports = function(list){

  var firstList = list[0];
  var secondList = list[1];

  list[0] = list[1];
  list[1] = list[0];

    return [];
}
