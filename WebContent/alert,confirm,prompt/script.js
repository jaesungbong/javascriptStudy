var event1 = document.getElementById('alert');
event1.addEventListener('click', function(){
	alert('Hello World!');
})

var event2 = document.getElementById('confirm');
event2.addEventListener('click', function(){
	if(confirm('오케이?')){
		alert('오케이');
	}else{
		alert('안오케이');
	}
})

var event3 = document.getElementById('prompt');
event3.addEventListener('click', function(){
	var d = prompt('입력해라', '입력해라');
})