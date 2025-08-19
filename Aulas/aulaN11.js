
        //ENCAPSULAMENTO E ABSTRAÇÃO

        //EX1
        class Cofre {
         #senha 

         constructor(senhaInicial) {
            this.senha = senhaInicial
            }

            verificarSenha(senha) {
               return senha === this.#senha
            }
        }
        
      const cofre1 = new Cofre('1234')
      cofre1.verificarSenha()

       