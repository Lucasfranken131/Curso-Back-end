let a,b,c,d;

a = 0;

b = 1;

console.log(a,b);

for(c = 1; c < 50; c++){

    d = a + b;

    a = d;
    let e = b + d;

    b = e;

    console.log(d,e);

}