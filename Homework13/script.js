function pow(num, degree) {
    return degree === 0 ? 1 : num * pow(num, degree - 1);
}
console.log(pow(4,4));
