const { SerialPort } = require ('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate : 1200,
}, function(err){
    if(err){
        return console.log('Error: ', err.message);
    }
})

port.on('open', function() {
    return console.log('puerto abierto');
})

port.on('error', function(err){
    console.log(err);
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\r' }))
let contador = 0;
parser.on('data',function(data) {
    
    let resultado = data.includes('D');
    
    if(resultado){
        contador ++;
        // Utilizo String para convertilo, ya que no solo recibo enteros.
        if(contador >= 5){
            console.log(parseFloat(String(data.match("[0-9]+"))))
        }
    }else {
        contador = 0;
    }
})