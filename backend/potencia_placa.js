const connection = require('./connection');

let vetor = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


const POTENCIA_PLACA = async() =>{
    let query = []
    let pot,sum = 0,aux

    for (let index = 0; index < vetor.length; index++) {

      pot = await connection.execute(' SELECT '+
                                                    'T.POTENCIA_PLACA AS POTENCIA_PLACA '+
                                            'FROM ' +
                                                    'projeto_tcc T' +
                                            ' WHERE '+
                                                    'date_format(T.DATA_CAPTURA, "%d/%m/%Y") = "' +'05/05/2023' +'"' +
                                            ' AND '+
                                                   'date_format(T.DATA_CAPTURA, "%H:%i")'+ 
                                            '='+
                                                '( SELECT' +
                                                        ' '+ vetor[index] +' '+ 
                                                'FROM ' +	
                                                        'projeto_tcc P' +
                                                ' WHERE ' +
                                                        'date_format(P.DATA_CAPTURA, "%d/%m/%Y") = "' +'05/05/2023' +'"' +
                                                ' LIMIT 1'+
                                                ' )'+
                                            ' LIMIT '+ 
                                                    '1 '
                                            )
        if (pot[0][0] == undefined){
                query.push("0.00")
        }else{
                query.push((pot[0][0]['POTENCIA_PLACA']).toFixed(2))
                aux = parseInt((pot[0][0]['POTENCIA_PLACA']).toFixed(2))
                sum = sum + aux
        } 
        }
        console.log (sum/query.length)

    return sum/query.length;

}

module.exports = POTENCIA_PLACA;