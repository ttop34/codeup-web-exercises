var str = "",x,y;

for (var i =1; i <=100; i++) {
    x = i%3 ==0;
    y = i%5 ==0;

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


