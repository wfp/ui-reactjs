function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


const onlyDecimal = value => {
    if (!value)
        value = ""

    value = value
        .replace(/[^0-9.\-]/g, '') // Remove all chars except numbers and .

    // Create an array with sections split by .
    const sections = value.split('.')

    // Remove any leading 0s apart from single 0
    if (sections[0] !== '0' && sections[0] !== '00') {
        sections[0] = sections[0].replace(/^0+/, '')
    } else {
        sections[0] = '0'
    }

    // Split sections via comma

    sections[0] = addCommas(sections[0]);

    // If not completely empty
    if (value === '') {
        return '';
    }
    else if (sections[1]) {
        // Join first two sections and truncate end section to length 2
        const trail = (sections[1].slice(0, 2).length >= 2) ? '' : '0';
        return sections[0] + '.' + sections[1].slice(0, 2) + trail;
        // If original value had a decimal place at the end, add it back
    }/* else if (value.indexOf('.') !== -1) {
        return sections[0] + '.00'
        // Otherwise, return only section
    }*/ else {
        return sections[0] + '.00'
    }

}

export default onlyDecimal
