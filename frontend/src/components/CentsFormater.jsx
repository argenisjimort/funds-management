const CentsFormater = ({amountInCents}) => {

    const numberAsStringReversed = Math.floor(amountInCents).toString().split('').reverse()
    let numberWithSeparations = numberAsStringReversed.splice(0, 2)


    numberWithSeparations.push(',')
    numberAsStringReversed.unshift(null)
    for( let i=1; i<numberAsStringReversed.length; i++ ) {
        numberWithSeparations.push( numberAsStringReversed[i] )
        if( i%3 === 0 && i!=numberAsStringReversed.length-1 ) numberWithSeparations.push('.')
    }

    // console.log(numberWithSeparations)
    
    const formatedNumber = numberWithSeparations.reverse().join("")

    // console.log(formatedNumber)

    return <>{formatedNumber}</>
}


export default CentsFormater