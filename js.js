
metros = parseInt(prompt('Ingrese la distancia en metros que desea recorrer'))
        if (metros < 1000){
        document.write('Este camino puedes hacerlo caminando')
        } else if (metros < 10000) {
        document.write('Este recorrido debes hacerlo en bicicleta')
        } else if (metros < 30000) {
        document.write('Debes tomar el colectivo')
        } else if (metros < 100000) {
        document.write('Este recorrido debe hacerse en automóvil')
        } else {
        document.write('Debes viajar en un avión')
        }


