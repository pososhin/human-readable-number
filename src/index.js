module.exports  = function toReadable(number) {
    if (number === 0) return 'zero';
    const num_1_19 = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const num_x10_20_90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    const num_1000 = ['', 'thousand', 'million', 'billion'];
    const less100 = (n) => {
        if (n < 20) return num_1_19[n];
        return (num_x10_20_90[Math.floor(n / 10) - 2] + ' ' + num_1_19[n % 10]).trim();
    }

    const less1000 = (n) => {
        let t = less100(Math.floor(n / 100)).trim();
        let l = less100(n % 100).trim();
        return (((t !== '') ? t + ' hundred' : '') + ' ' + l).trim();
    }


    let positive = (number > 0);
    if (!positive) number = number * (-1);

    if (number > 999999999999) console.log('google :)');

    let l,i=0;
    let r='';
    do {
        l = number % 1000;
        number = Math.floor(number / 1000)
        let sl = less1000(l); 
        r = (((sl!='')?sl+' '+num_1000[i]:'')+' '+r).trim();
        i++;
    } while (number > 0)
    return ((positive)?'':'minus ')+r;
}

