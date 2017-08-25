require('uppercase-core');
require('../JSONCode.js');

let jsCode = JSONCode([{
	command : 'var',
	name : 'a',
	value : '1'
}, {
	command : 'print',
	value : 'a'
}]);

console.log(jsCode);
console.log('========================================');
eval(jsCode);
