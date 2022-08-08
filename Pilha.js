//var elemetos = [];
//		var topo = -1;
//		const MAX = 10;		
		//function push(num) {
		  //  if (topo < MAX){
		    //    topo = topo + 1;
		      //  elementos[topo] = num;
		        
		    //}
		//else{
		  //  console.log("pilha esta cheia")
		//}
		    
//}
        
//function pop() {
  //  if (topo != -1) {
    //    let num = elementos[topo];
      //  topo = topo - 1;
        //return num;
    //}
	//	 else {
      //      console.log("Pilha esta vazia");  
        // }
        
        
    //}     
		//---------- parte do codigo que usa pilha------ //
		
var numDecimal = 10;
var resto;

while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while (!estaVazia()) {
    console.log(pop);
}
