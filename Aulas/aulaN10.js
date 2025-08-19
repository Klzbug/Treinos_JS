
        //CLASSES E OBJETOS 

        //EX1
        class Carro {
         constructor(marca, modelo, cor) {
            this.marca = marca
            this.modelo = modelo
            this.cor = cor
         }

         acelerar() {
            console.log(`${this.marca} - ${this.modelo} está acelerando`)
         }
        }

        const carro1 = new Carro('Toyota', 'Corola', 'Branco')
        carro1.acelerar()
        const carro2 = new Carro('Honda', 'Civic', 'Preto')
        carro2.acelerar()

        
 
      

       