function removeElement(array, index) {
    let element = array.indexOf(index);

    if (element !== -1) {
        array.splice(index, 1);
    }
    return array;
}
let arrA = [1,2,3,4,5,6];
console.log(removeElement(arrA,2))
console.log(arrA)

