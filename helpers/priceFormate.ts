const addExtraSpace = (num: number): string => String(num).split('').reverse().reduce((acc, el, inx, arr) => {
    (!((inx + 1) % 3)) ? acc.push(' ' + el) : acc.push(el);
    return acc;
}, []).reverse().join('');

const formatePrice = (num: number): string => addExtraSpace(num)[0] === ' ' ? addExtraSpace(num).slice(1) + '.00' : addExtraSpace(num) + '.00';
export default formatePrice;
