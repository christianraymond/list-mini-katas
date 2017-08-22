module.exports = function(list){

    var swaPfirst = list[0];
    var swaPlast = list[list.length-1];

    list[0] = swaPlast;
    list[list.length -1] = swaPfirst;

     return list;
}
