function check(reg,string) {
    return reg.test(string);
}
console.log(check(/1[3-9]\d{9}/,'15179670828'));
console.log(check(/^(-w)@(\.\w+)+)$/))
