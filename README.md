# JSONCode
JSON을 JavaScript 코드로 해석합니다.

## 기본 명령어
### `variable`

```javascript
JSONCode({
	command : 'variable',
	name : 'a',
	value : '1'
});
```

* `name` 변수의 이름을 입력합니다.
* `value` 변수의 값을 입력합니다.

### `function`

```javascript
JSONCode({
    command : 'function',
	name : 'say',
	argumentNames : ['message'],
	inner : {
		command : 'print',
		value : 'message'
	}
});
```

* `name` 함수의 이름을 입력합니다.
* `argumentNames` 매개변수의 이름들을 입력합니다.
* `inner` 함수의 내부 코드를 입력합니다.

### `same`

```javascript
JSONCode({
	command : 'same',
	target : 'a',
	as : '5',
	inner : {
		command : 'print',
		value : '\'a는 5입니다.\''
	}
});
```

* `target` 비교 대상을 입력합니다.
* `as` 비교할 값을 입력합니다.

### `bigger`

```javascript
JSONCode({
	command : 'bigger',
	target : 'a',
	than : '5',
	inner : {
		command : 'print',
		value : '\'a는 5입니다.\''
	}
});
```

* `target` 비교 대상을 입력합니다.
* `than` 비교할 값을 입력합니다.

### `smaller`

```javascript
JSONCode({
	command : 'smaller',
	target : 'a',
	than : '5',
	inner : {
		command : 'print',
		value : '\'a는 5입니다.\''
	}
});
```

* `target` 비교 대상을 입력합니다.
* `than` 비교할 값을 입력합니다.

### `append`

```javascript
JSONCode({
	command : 'append',
	target : 'a',
	value : '5'
});
```

* `target` 더할 대상을 입력합니다.
* `than` 더할 값을 입력합니다.

### `print`

```javascript
JSONCode({
	command : 'print',
	code : 'a'
});
```

* `value` 출력할 값을 입력합니다.

### `code`

```javascript
JSONCode({
	command : 'code',
	code : 'console.log(a);'
});
```

* `code` JavaScript 코드를 입력합니다.

## 명령어 확장하기
```javascript
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
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)