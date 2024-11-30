function arrayData() {
    catalogo= [
        {
        placa: "FSP511",
        marca: "Audi",
        color: "Gris",
        modelo: "Q7",
        agno: "2020",
        multas : ['03/05/2020','12/12/2021','12/5/2022','5/2/2023' ],
        propepietarios: {
            nombre: 'Jesus Martinez',
            documento: '10923325',
            ciudad: 'Piedecuesta'
        },
        kilometraje: '210020'
        
    },
    
   {
        placa: "FAS123",
        marca: "Toyota",
        color: "Gris",
        modelo: "Q7",
        agno: "2020",
        multas : ['03/05/2020','12/12/2021','12/5/2022','5/2/2023' ],
        propepietarios: {
            nombre: 'Daniel Ortiz',
            documento: '10351295',
            ciudad: 'Bucaramanga'
        },
        kilometraje: '3200020'
        
    },
    
    {
        placa: "FIS424",
        marca: "Mercedes",
        color: "Gris",
        modelo: "Q7",
        agno: "2020",
        multas : ['03/05/2020','12/12/2021','12/5/2022','5/2/2023' ],
        propepietarios:[
            {  
            nombre: 'Juan Hernandez',
            documento: '109424295',
            ciudad: 'Bucaramanga'
        },{   
            nombre: 'Andres Albaerto ',
            documento: '10953479395',
            ciudad: 'Maracaibo'
        }
    
        ],
        kilometraje: '4500000'
        
    }]
    return catalogo
}


//Exportar Modulos

module.exports = {
    "arrayData" : arrayData
}