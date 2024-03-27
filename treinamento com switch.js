var agora = new Date()
 var diaSem= agora.getDay()
 /*
 0 = Domingo
 1 = Segunda
 2 = Terça
 3 = Quarta
 4 = Quinta
 5 = Sexta
 6 = Sábado
 */
 console.log(diaSem) // 0 - Domingo a 6 - Sábado  
switch(diaSem){// switch e case sao usados para fazer uma escolha de opções, se o valor da variável for igual a 0 ele vai para o case 0
    case 0:// se o valor da variável for igual a 0, imprime "Domingo"
        console.log('Domingo')// e para o switch de dia da semana
        break// quebra o switch caso o valor seja igual a 0
    case 1:// se o valor da variável for igual a 1, imprime "Segunda"
        console.log('Segunda')// e para o switch de dia da semana
        break// quebra o switch caso o valor seja igual a 1 
    case 2:// se o valor da variável for igual a 2, imprime "Terça"   
        console.log('Terça')// e para o switch de dia da semana      
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
    default:// se o valor da variável for diferente de 0, 1, 2, 3, 4, 5 e 6, imprime "[ERRO] Dia inválido!"
        console.log('[ERRO] Dia inválido!')
        break
    }