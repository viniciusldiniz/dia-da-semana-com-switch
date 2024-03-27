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
console.log(diaSem); // Imprime o valor de diaSem, que deve ser um número de 0 a 6 representando os dias da semana (0 - Domingo a 6 - Sábado)

switch(diaSem) { // Inicia a estrutura de controle switch, onde diaSem será avaliado para diferentes casos
    case 0: // Se o valor de diaSem for igual a 0, imprime "Domingo"
        console.log('Domingo');
        break; // Encerra o switch caso este caso seja correspondido
    case 1: // Se o valor de diaSem for igual a 1, imprime "Segunda"
        console.log('Segunda');
        break; // Encerra o switch caso este caso seja correspondido
    case 2: // Se o valor de diaSem for igual a 2, imprime "Terça"
        console.log('Terça');
        break; // Encerra o switch caso este caso seja correspondido
    case 3: // Se o valor de diaSem for igual a 3, imprime "Quarta"
        console.log('Quarta');
        break; // Encerra o switch caso este caso seja correspondido
    case 4: // Se o valor de diaSem for igual a 4, imprime "Quinta"
        console.log('Quinta');
        break; // Encerra o switch caso este caso seja correspondido
    case 5: // Se o valor de diaSem for igual a 5, imprime "Sexta"
        console.log('Sexta');
        break; // Encerra o switch caso este caso seja correspondido
    case 6: // Se o valor de diaSem for igual a 6, imprime "Sábado"
        console.log('Sábado');
        break; // Encerra o switch caso este caso seja correspondido
    default: // Caso nenhum dos casos acima seja correspondido (caso o valor de diaSem não seja 0 a 6)
        console.log('[ERRO] Dia inválido!'); // Imprime "[ERRO] Dia inválido!"
        break; // Encerra o switch
}
