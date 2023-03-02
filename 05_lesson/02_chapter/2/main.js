function readNumber () {
    let value;

    do {
        value = prompt( 'Введите число' );
    } while ( !isFinite(value))

    console.log( value );

    if (value === null || value ==='') {
       return null;
    }
 return value
}

console.log(`Число: ${readNumber()}`)