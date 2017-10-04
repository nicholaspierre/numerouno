var list;
var num = 7

function joinList(n) {
    str = ''
    for (var j = 1; j <= n; j++) {
        if (j > 1) {
            str += ', '
        }
        str += j;
    }   
    return str; 
}

for (var i = 1; i <= num; i += 3) {
    list = joinList(i);
    console.log(i + ' ' + list);
}