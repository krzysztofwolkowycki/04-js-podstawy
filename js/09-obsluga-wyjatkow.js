function division (a, b) {
    if (0 === b){
        throw new Error('NIe można dzielić przez zero!');
    }
    return a/b;
}

try{
    console.log('start programu');

    var result = 10;
    //console.log(Result);

    console.log(division(10, 0));

    console.log('koniec programu');
} catch (err) {
    console.log('ups... wystąpił błąd... nasza ekipa już się tym zajmuje');
    console.log(err.message);
}
