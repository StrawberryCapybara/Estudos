function multiplied (numberA: number, numberB: number): number {
    try{
        return numberA * numberB;
    }
    catch (error) {
        console.log ('ouve um erro na multiplicação', error)
    }
    return 0;
}


function greeting (nome: string): string {
    try{
        return `Olá ${nome}`;
    }
    catch (error) {
        console.log ('ocorreu um erro ao carregar o nome', error)
        return '';
    }
}

console.log(multiplied(5, 2));
console.log(greeting('Jorge'));
