function get_Average(matriz_para_sacar_el_promedio) {
    var acumulador_del_promedio = 0;
    var cantidad_de_datos = 0;
    matriz_para_sacar_el_promedio.map((matriz_para_sacar_el_promedio) => matriz_para_sacar_el_promedio.map((dato) => {(acumulador_del_promedio=acumulador_del_promedio+dato); cantidad_de_datos++}));
    return acumulador_del_promedio/cantidad_de_datos;
}

//console.log(get_Average([[6,6,1],[9,3],[7,123,723,2]]));

function reverse_Words(arreglo_para_revertir){
    var arreglo_de_palabras = arreglo_para_revertir.split(" ");
    var resultado_con_las_palabras_revertidas = arreglo_de_palabras.reverse().join(" ");
    return resultado_con_las_palabras_revertidas;
}

//console.log(reverse_Words("¡Hola mundo!"));

function countVowels(cadena_para_verificar_cuantas_vocales_tiene){
    var cantidad_de_vocales = 0;
    var cadena_en_minuscula = cadena_para_verificar_cuantas_vocales_tiene.toLowerCase();
    var tamaño_cadena_en_minuscula = cadena_en_minuscula.length;
    for (var i = 0; i < tamaño_cadena_en_minuscula; i++) {
        var caracter_en_minuscula = cadena_en_minuscula.charAt(i);
        if(caracter_en_minuscula == 'a' || caracter_en_minuscula == 'e' || caracter_en_minuscula == 'i' || caracter_en_minuscula == 'o' || caracter_en_minuscula == 'u'){
            cantidad_de_vocales++;
        }
    }
    
    return cantidad_de_vocales;
}

//console.log(countVowels("¡HolA mUndo!"));

function removeDuplicates(matriz_para_eliminar_duplicados){
    var matriz_posiciones_a_ignorar = matriz_para_eliminar_duplicados;
    var nueva_matriz_sin_valores_repetidos = 0;
    for(var i = 0; i < matriz_posiciones_a_ignorar.length;i++){
        for(var j = 0; j < matriz_posiciones_a_ignorar[i].length;j++){
            
            for(var h = 0; h < matriz_posiciones_a_ignorar.length;h++){
                for(var g = 0; g < matriz_posiciones_a_ignorar[h].length-1;g++){
                    if( !(i == h && j == g) && matriz_posiciones_a_ignorar[i][j] === matriz_posiciones_a_ignorar[h][g]){
                        matriz_posiciones_a_ignorar[h].splice(g, 1);
                        g--;
                    }
                }
            }
            
        }
    }
    return(matriz_posiciones_a_ignorar);
}

//console.log( removeDuplicates([[6,6,1,"a"],["a",9,3,7,"b","abc",9],[7,123,2,1,"c","9"]]) );

function capitalizeFirstletters(cadena_para_poner_en_mayuscula){
    var arreglo_de_palabras = cadena_para_poner_en_mayuscula.split(" ");
    var tamaño_de_arreglo_de_palabras = arreglo_de_palabras.length
    for (var i = 0; i < tamaño_de_arreglo_de_palabras; i++) {
        var palabra_a_modificar = arreglo_de_palabras[i];
        if(/[a-zA-ZñÑ]/.test(palabra_a_modificar)){
            var posicion_de_la_letra_a_reemplazar = /[a-zA-ZñÑ]/.exec(palabra_a_modificar).index ;
            arreglo_de_palabras[i] = palabra_a_modificar.substring(0,posicion_de_la_letra_a_reemplazar) + palabra_a_modificar.charAt(posicion_de_la_letra_a_reemplazar).toUpperCase() + palabra_a_modificar.substring(posicion_de_la_letra_a_reemplazar+1,palabra_a_modificar.length)
        }
    }
    return arreglo_de_palabras.join(" ");
}

//console.log(capitalizeFirstletters("¡Hola mundo! 123 "));


function findLongestWord(matriz_para_buscar_la_palabra_mas_larga) {
    var palabra_mas_larga ="";
    var rows_de_matriz_para_buscar_la_palabra_mas_larga = matriz_para_buscar_la_palabra_mas_larga.length;

    for(var i = 0; i < rows_de_matriz_para_buscar_la_palabra_mas_larga;i++){
        for(var j = 0; j < matriz_para_buscar_la_palabra_mas_larga[i].length;j++){
            if(matriz_para_buscar_la_palabra_mas_larga[i][j].length > palabra_mas_larga.length){
                palabra_mas_larga = matriz_para_buscar_la_palabra_mas_larga[i][j];
            }
        }
    }
    return palabra_mas_larga;
}

//console.log(findLongestWord([["hola","adios","javascript"],["programacion","nodejs"],["run","ciclo","matriz","abc"]]));

function reverseInPlace(matriz_a_invertir) {
    
    var length_de_matriz_a_invertir = matriz_a_invertir.length;
    var mitad_truncada_del_lenght_de_la_matriz_a_invertir = parseInt(matriz_a_invertir.join(',').split(',').length/2);
    var numero_de_ciclos = 1;
    var contador_datos_dentro_del_arreglo = 0;
    var contador_de_arreglos_dentro_de_la_matriz = 1;
    var length_de_la_columna_actual = matriz_a_invertir[length_de_matriz_a_invertir-1].length-1;

    for(var i = 0; i < length_de_matriz_a_invertir;i++){

        for(var j = 0; j < matriz_a_invertir[i].length;j++){

            if(contador_datos_dentro_del_arreglo > length_de_la_columna_actual){
                contador_de_arreglos_dentro_de_la_matriz++;
                length_de_la_columna_actual = matriz_a_invertir[length_de_matriz_a_invertir-contador_de_arreglos_dentro_de_la_matriz].length-1;
                contador_datos_dentro_del_arreglo = 0;
            }
            
            var dato_teporal = matriz_a_invertir[i][j];
            matriz_a_invertir[i][j] = matriz_a_invertir[length_de_matriz_a_invertir-contador_de_arreglos_dentro_de_la_matriz][length_de_la_columna_actual-contador_datos_dentro_del_arreglo];
            matriz_a_invertir[length_de_matriz_a_invertir-contador_de_arreglos_dentro_de_la_matriz][length_de_la_columna_actual-contador_datos_dentro_del_arreglo] = dato_teporal;
            numero_de_ciclos++;
            
            if(numero_de_ciclos > mitad_truncada_del_lenght_de_la_matriz_a_invertir){
                i = length_de_matriz_a_invertir;
                break;
            }
            
            
            contador_datos_dentro_del_arreglo++;
            
        }
    }
    
    return matriz_a_invertir;
}

//console.log(reverseInPlace([["uno"],["hola","adios","javascript"],["programacion","nodejs","css"],["run","ciclo","matriz","abc","123"],["dos","def"]]));
//console.log(([["uno"],["hola","adios","javascript"],["programacion","nodejs","css"],["run","ciclo","matriz","abc","123"],["dos","def"]]));