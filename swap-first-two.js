module.exports = function(list){

    var newSecond = list[0];
    var newFirst = list[1];

    list[0] = newFirst;
    list[1] = newSecond;

    return list;
}
