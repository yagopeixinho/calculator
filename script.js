function calcular (tipo, valor) {

    if(tipo === 'acao') {
        
        if( valor === 'c') {
          //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''  
        }

        if( valor === '+') {
            
        }

} else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
}
}