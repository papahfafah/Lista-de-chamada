const numeros = [
    { numero: 1 }, { numero: 2 }, { numero: 3 }, { numero: 4 }, { numero: 5 },
    { numero: 6 }, { numero: 7 }, { numero: 8 }, { numero: 9 }, { numero: 10 },
    { numero: 11 }, { numero: 12 }, { numero: 13 }, { numero: 14 }, { numero: 15 },
    { numero: 16 }, { numero: 17 }, { numero: 18 }, { numero: 19 }, { numero: 21 },
    { numero: 22 }, { numero: 23 }, { numero: 24 }, { numero: 26 },{ numero: 27 }, { numero: 28 },
    { numero: 29 }, { numero: 30 }, { numero: 31 }, { numero: 32 }, { numero: 33 },
    
];

const listaDeChamada = [
    { nome: "ANA CAROLINA PONTAROLO CARVALHO" },
    { nome: "ANA HELOISE MONTERO DA SILVA" },
    { nome: "ANA LUIZA DA SILVA NOGUEIRA" },
    { nome: "ANDRE CARDIN SOARES" },
    { nome: "BEATRIZ BRANDT VIANA" },
    { nome: "BHIANCA MULDENBERGER PINTO" },
    { nome: "CAUAN JUN KESHINO" },
    { nome: "ELIA GABRIEL VIERA" },
    { nome: "ENZO SAMUEL LISBOA ZORDENUNES" },
    { nome: "GIOVANNA CALDEIRA" },
    { nome: "HENRIQUE DUARTE DOS SANTOS" },
    { nome: "HENRIQUE EMILIO SILVA KRUGER" },
    { nome: "IAGO DANIEL CALIXTO" },
    { nome: "IASMIN APARECIDA DA SILVA PEREIRA" },
    { nome: "ISADORA CRISTINA SILVEIRA" },
    { nome: "JHENYFER GUIMARÃES DE LARA" },
    { nome: "JOAO FRANCISCO KUJIV" },
    { nome: "JOÃO HENRIQUE MORAIS DE ASSIS" },
    { nome: "LORENZO HENRIQUE BENIN" },
    { nome: "LUIZ FELIPE DO ROSARIO DE PAULA" },
    { nome: "LUIZ GUSTAVO BRASIL" },
    { nome: "MARIA JULIA AMORIM DA SILVA" },
    { nome: "MARIA LUYZA MENDES DA SILVA LEAL" },
    { nome: "ADALBERTO RAFAEL DA SILVA AMARAL" },
    { nome: "PEDRO HENRIQUE LOPES DE LARA" },
    { nome: "RENATO GABRIEL VIANA STRAUBE" },
    { nome: "RICHARD CARRARO" },
    { nome: "VICTOR DE PAULA" },
    { nome: "VINICIUS BORTOLI" },
    { nome: "WILLIAN NOVAES BITTENCOURT" },
    { nome: "THAISSA COSTA ALVES" },
    
];


const novaListaDeChamada = listaDeChamada.map((aluno, index) => {
    if (aluno.nome === "ADALBERTO RAFAEL DA SILVA AMARAL") {
        return { nome: "PAOLA RAFAELA DOS SANTOS AMARAL", numero: numeros[index].numero };
    }
    return { ...aluno, numero: numeros[index].numero };
});

console.log(novaListaDeChamada);
