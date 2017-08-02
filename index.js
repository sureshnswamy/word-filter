
var fs = require('fs');

console.log('welcome to 4letters');

var src=fs.readFileSync('sowpods-1.txt').toString();
var wordlist = src.split('\n');

console.log('total number of words', wordlist.length);

var word = 'PORTS';

var matchWords = function (test_word, list_word) {
	var arr=[];
	var test = test_word.split('');
	var test_head= test.slice(1).join('');
	var test_tail=test.slice(0,test_word.length-1).join('');
	// console.log( test_word, test_head, test_tail,)
	for (var i=0; i<list_word.length; i++) {
		if (list_word[i].indexOf(test_tail)>-1 || list_word[i].indexOf(test_head)>-1) {
			arr.push(list_word[i]);
		} 
	}	

	console.log( arr, arr.length,'filtered list of words containing', test_tail,' or ', test_head);
	return;
};

matchWords(word, wordlist);


