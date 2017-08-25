require('uppercase-core');
require('../JSONCode.js');

JSONCode.addCommand('append', (data) => {
	//REQUIRED: data
	//REQUIRED: data.target
	//REQUIRED: data.value
	
	return data.target + ' += ' + data.value;
});

let jsCode = JSONCode([{
	command : 'var',
	name : 'a',
	value : '3'
}, {
	command : 'append',
	target : 'a',
	value : '5'
}, {
	command : 'print',
	value : 'a'
}]);

console.log(jsCode);
console.log('========================================');
eval(jsCode);
