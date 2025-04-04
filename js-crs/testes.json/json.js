const animais = [
    {
        nome: 'vaca',
        regiao: 'oeste catarinense',
        pelo: true,
        mugir: () =>{
            console.log('muuuuuuu');
        }
    },
    {
        nome: 'cachorro',
        regiao: 'todas',
        pelo: true,
        latir: () =>{
            console.log('auauauau ruf ruf ruf');
        }
    },
    {
        nome: 'peixe',
        regiao: 'todas',
        pelo: false,
        roncar: () =>{
            console.log('glub glub');
        }
    }
]

animais.forEach((animal) => {
    Object.keys(animal).forEach((chave) => {
        console.log(`Chave: ${chave}, Valor: ${animal[chave]}`);
    });
});
