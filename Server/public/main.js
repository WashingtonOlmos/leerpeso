let contador = 0;

document.getElementById('estableId').classList.add('parpadea', 'tomando_dato');
estableId.innerHTML = 'Tomando Datos...';

const socket = io();

socket.on('kilos', (data)=>{
   // console.log(data);
    let show = data.match("[0-9]+");

    let kilos = document.getElementById('kilosId');
    kilos.innerHTML = show + ' Kilos';

    let resultado = data.includes('D')

    if(resultado){
        contador ++;
        if(contador >= 5){
            socket.disconnect()
            let pesoFinal = (parseFloat(String(data.match("[0-9]+"))))

            const pesoJson = {
                peso: pesoFinal
            }

            console.log(pesoJson);
            document.getElementById('estableId').classList.remove('parpadea', 'tomando_dato');
            document.getElementById('estableId').classList.add('dato_estable');
          
            estableId.innerHTML = 'Total del pesaje';

            setTimeout(()=>{
                contador = 0;
                document.getElementById('estableId').classList.remove('dato_estable');
                document.getElementById('estableId').classList.add('parpadea', 'tomando_dato');
                estableId.innerHTML = 'Tomando Datos...';
                socket.connect();
            },3000) // retomo el pesaje luego de 3segundos
        }
    }else {
        contador = 0;
    }
    
})

/* socket.on('kilos', (data)=>{
    let resultado = data.includes('D');
    
    if(resultado){
        contador ++;
        // Utilizo String para convertilo, ya que no solo recibo enteros.
        if(contador >= 5){

            let pesoFinal = (parseFloat(String(data.match("[0-9]+"))))

            const pesoJson = {
                peso: pesoFinal
            }

            console.log(pesoJson);
        }
    }else {
        contador = 0;
    }
})

 */