
        //RECURSÃO

        //EX1
        //+ Faça uma função, que receba um número e conta 
        //+ Conençando esse numero e indo até zero   
        function contRegressi(numero) {
         if(numero == 0) {
            console.log('Fim')
            return
         }
         console.log(numero)
        contRegressi(numero - 1)
        }
 
      

       