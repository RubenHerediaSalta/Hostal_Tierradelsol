const evento = document.getElementById('send')
const enviarFormulario =() => {
        let checkin = document.getElementById('dateIn').value;
        let checkout = document.getElementById('dateOut').value;
        let cant = document.getElementById('amount').value;
        let numero= 543874791099;
var win= window.open(`https://wa.me/${numero}?text=Hola, tendra habitacion disponible para ${cant}
 personas, desde el dia ${checkin}, hasta el dia ${checkout} .`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)