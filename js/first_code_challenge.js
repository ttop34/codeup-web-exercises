
var str = "",x,y,z;

    for (var i =1; i <=100; i++) {
        var x = i%3 ==0;
        var y = i%5 ==0;

        if (x){
            str+= 'fizz';
        }

        if (y) {
            str+= 'buzz';
        }

        if (!(x||y)) {
            str+=i;
        }
        str+='\n';


    }
    console.log(str);





function repeatStr(number, given) {
    return given.repeat(number);

}








function isPhoneNumber(phone) {
     if (phone.length === 14) {
         return true
     }  else {
         return false;
     }
}







