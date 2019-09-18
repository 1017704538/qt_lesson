const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';

const isBalanced = (str) => {
  // [{()}]
  // es6 新的数据结构 hashmap 映射
  const map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
//   console.log(map.get("{"));
  // map.set
let stack = [];
for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (map.has(element)) {
        stack.push(element);
    }else if ([...map.values()].includes(element)) {
        let key = stack[stack.length - 1];
        if (map.get(key) != element) {
            return false;
        }
        stack.splice(stack.length-1,1);
    }
    return stack.length === 0;
}
}
console.log(isBalanced(expression));
