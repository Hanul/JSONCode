require('uppercase-core');
require('../JSONCode.js');

let jsCode = JSONCode([{
	command : 'var',
	name : 'a',
	value : '5'
}, {
	command : 'same',
	target : 'a',
	as : '5',
	inner : {
		command : 'print',
		value : '\'a는 5입니다.\''
	}
}, {
	command : 'bigger',
	target : 'a',
	than : '1',
	inner : {
		command : 'print',
		value : '\'a는 1보다 큽니다.\''
	}
}, {
	command : 'smaller',
	target : 'a',
	than : '8',
	inner : {
		command : 'print',
		value : '\'a는 8보다 작습니다.\''
	}
}]);

console.log(jsCode);
console.log('========================================');
eval(jsCode);
