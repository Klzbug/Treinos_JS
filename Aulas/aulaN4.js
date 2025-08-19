
        //STRINGS
        
        //EX1
        let nome = 'João'
        let sobrenome = 'Paulo'
        let saudaçao ='Olá, ${nome} ${sobrenome}'
        console.log(saudaçao);

        //EX2
        let frase = 'Eu amo Programação';
        let palavra = frase.slice(6,18)
        console.log(palavra)

        //EX3
        let name = 'João'
        let sbrenome = 'Paulo'
        let sudaçao ='Olá, ${nome} ${sobrenome}'
        let novaSaudacao = sudaçao.replace('Olá','Boa Tarde')

        //EX4
        let email = 'contato@cueca.com.br'
        if(email.includes('.com.br')){
            console.log('Email Valido')
        }else{
            console.log('Emial Invalido')
        }

