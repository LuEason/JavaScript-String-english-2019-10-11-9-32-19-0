    // Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
		var name = 'hello';
		// TODO write your code here...
		console.log(name.toUpperCase());


		// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
		var sentence = 'good afternoon, mr mike.';
		//TODO write your code here...
		var sentenceSplit = sentence.split(" ");
		sentence = "";
		for (let i = 0; i < sentenceSplit.length; i ++) {
			var tmp = sentenceSplit[i][0].toUpperCase() + sentenceSplit[i].substring(1);
			sentence += tmp;
			if (i !== sentenceSplit.length - 1) {
				sentence += " ";
			}
		}
		console.log(sentence);


		// Complete the following procedure to extract the amount of money variable, output: 20.
		var money = '￥20';
		//TODO write your code here...
		console.log(money.substring(1));
