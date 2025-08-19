
        //MATRIZES

        //EX1
        let matriz = [[1,2],[3,4]]
        console.log(matriz[0][0])

        let matriz1 = [
         [1, 10, 20],
         [30, 5, 6],
         [7, 8, 15]
        ];

        //EX2
        for(let i = 0; i < matriz1.length; i++) {
         let subArray = matriz1[i]
         for(let j = 0; j < subArray.length; j++) {
            console.log(matriz1[i][j]);
         }
        }