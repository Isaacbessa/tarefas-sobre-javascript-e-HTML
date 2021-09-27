const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// resultado: 42

console.log(obj.result);
// resultado: true

