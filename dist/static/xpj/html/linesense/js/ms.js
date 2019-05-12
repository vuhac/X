var tim=1;
setInterval("tim++",100);
var autourl=new Array();
autourl[1]='https://xpj99980.com';
autourl[2]='https://xpj99981.com';
autourl[3]='https://xpj99982.com';
autourl[4]='https://xpj99983.com';
autourl[5]='https://xpj99984.com';
autourl[6]='https://xpj99985.com';
autourl[7]='https://xpj99986.com';
autourl[8]='https://xpj99987.com';

function auto(url){
	var str=""+tim*10;
	if(url=='http://xpj99980.com'){
		document.getElementById('em_1').innerHTML=str+'ms';
	}
	if(url=='https://xpj99981.com'){
		document.getElementById('em_2').innerHTML=str+'ms';
	}
	if(url=='https://xpj99982.com'){
		document.getElementById('em_3').innerHTML=str+'ms';
	}
	if(url=='https://xpj99983.com'){
		document.getElementById('em_4').innerHTML=str+'ms';
	}
	if(url=='https://xpj99984.com'){
		document.getElementById('em_5').innerHTML=str+'ms';
	}
	if(url=='https://xpj99985.com'){
		document.getElementById('em_6').innerHTML=str+'ms';
	}
	if(url=='https://xpj99986.com'){
		document.getElementById('em_7').innerHTML=str+'ms';
	}
	if(url=='https://xpj99987.com'){
		document.getElementById('em_8').innerHTML=str+'ms';
	}

}
function run(){
	for(var i=1;i<autourl.length;i++){
		document.write("<img src="+autourl[i]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i]+"') style='display:none'>");		
	}
}
run();