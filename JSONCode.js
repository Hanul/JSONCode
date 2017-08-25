global.JSONCode = METHOD((m) => {
	
	let commands = {
		
		'var' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.name
			//REQUIRED: data.value
			
			return 'let ' + data.name + ' = ' + data.value + ';';
		},
		
		'function' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.name
			//REQUIRED: data.argumentNames
			//OPTIONAL: data.inner
			
			let argumentNames = data.argumentNames;
			let inner = data.inner;
			
			let argumentsStr = '';
			if (argumentNames !== undefined) {
				EACH(argumentNames, (argumentName, i) => {
					argumentsStr += (i === 0 ? '' : ', ') + argumentName;
				});
			}
			
			return 'let ' + data.name + ' = (' + argumentsStr + ') => {' +
				(inner === undefined ? '' : ('\n' + JSONCode(inner)).replace(/\n/g, '\n\t')) + '\n' +
			'};';
		},
		
		'same' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.target
			//REQUIRED: data.as
			//OPTIONAL: data.inner
			
			let inner = data.inner;
			
			return 'if (' + data.target + ' === ' + data.as + ') {' +
				(inner === undefined ? '' : ('\n' + JSONCode(inner)).replace(/\n/g, '\n\t')) + '\n' +
			'}';
		},
		
		'bigger' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.target
			//REQUIRED: data.than
			//OPTIONAL: data.inner
			
			let inner = data.inner;
			
			return 'if (' + data.target + ' > ' + data.than + ') {' +
				(inner === undefined ? '' : ('\n' + JSONCode(inner)).replace(/\n/g, '\n\t')) + '\n' +
			'}';
		},
		
		'smaller' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.target
			//REQUIRED: data.than
			//OPTIONAL: data.inner
			
			let inner = data.inner;
			
			return 'if (' + data.target + ' < ' + data.than + ') {' +
				(inner === undefined ? '' : ('\n' + JSONCode(inner)).replace(/\n/g, '\n\t')) + '\n' +
			'}';
		},
		
		'append' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.target
			//REQUIRED: data.value
			
			return data.target + ' += ' + data.value;
		},
		
		'print' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.value
			
			return 'console.log(' + data.value + ');';
		},
		
		'code' : (data) => {
			//REQUIRED: data
			//REQUIRED: data.code
			
			return data.code;
		}
	};
	
	let addCommand = m.addCommand = (command, translate) => {
		//REQUIRED: command
		//REQUIRED: translate
		
		commands[command] = translate;
	};
	
	return {
		
		run : (dataOrDataSet) => {
			//REQUIRED: dataOrDataSet
			//REQUIRED: dataOrDataSet.command
			
			let dataSet;
			if (CHECK_IS_ARRAY(dataOrDataSet) !== true) {
				dataSet = [dataOrDataSet];
			} else {
				dataSet = dataOrDataSet;
			}
			
			let jsCode = '';
			EACH(dataSet, (data) => {
				
				let command = data.command;
				
				if (commands[command] === undefined) {
					SHOW_ERROR('JSONCode', '알 수 없는 명령어입니다.', {
						command : command
					});
				}
				
				else {
					jsCode += (jsCode === '' ? '' : '\n') + commands[data.command](data);
				}
			});
			
			return jsCode;
		}
	};
});
