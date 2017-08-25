require('uppercase-core');
require('../JSONCode.js');

let jsCode = JSONCode([{
	command : 'function',
	name : 'say',
	argumentNames : ['message'],
	inner : {
		command : 'print',
		value : 'message'
	}
}, {
	command : 'code',
	code : 'say(\'test\');'
}]);

console.log(jsCode);
console.log('========================================');
eval(jsCode);
