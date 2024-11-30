const conexion = require('./connexion');


function Result(car) {
    //car < catalogo.legth
    if ( car >= 0) {
        console.log(
            "\nResultado de la consulta",
            "\n\n Placa: " + catalogo[car].placa,
            "\n Marca: " + catalogo[car].marca,
            "\n Color: " + catalogo[car].color,
            "\n Modelo: " + catalogo[car].modelo,
            "\n Anlho: " + catalogo[car].agno,

        );

        console.log(" Multas: \n")

        for (let index = 0; index < catalogo[car].multas.length; index++) {
            let num =index+1;
            let multas = "  Multa  " + num + ": " +catalogo[car].multas[i];
            console.log(multas)
            
        }

        let prop = catalogo[car].propepietarios.legth;

        console.log("\n PROPIERTARIOS");

        for (i=0; i<prop; i++){
            let num =i+1;
            console.log(
                "\n Nombre: " + catalogo[car].propietarios[i].nombre,
                "\n Documento: " + catalogo[car].propietarios[i].documento,
                "\n Ciudad: " + catalogo[car].propietarios[i].ciudad,

                
            )
        }
        console.log(
            "\n Kilometraje: " + catalogo[car].kilometraje + "\n",

        );

        conexion.ConexionMongoDB(catalogo[car]);
    }   
    else{
        console.log("El numero seleccionado no corresponde")
    }


}


module.exports = {
    "Result" : Result
}