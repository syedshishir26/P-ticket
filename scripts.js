const seat = document.getElementsByClassName('seat');
for (let i of seat){
    i.addEventListener('click', function(){
        // change bg and text color
        i.classList.add('bg-[#1DD100]');
        i.classList.add('text-white');
        i.classList.remove('bg-opacity-10');
        // change rest seat numbers
        let seatLefts = parseInt(document.getElementById('seatLefts').innerText);
        let seatLeftAfterSelect = seatLefts-1;
        document.getElementById('seatLefts').innerText = seatLeftAfterSelect;
        // change booked seat numbers
        let seatBooked = parseInt(document.getElementById('seatBooked').innerText);
        let seatBookedAfterSelect = seatBooked+1;
        document.getElementById('seatBooked').innerText = seatBookedAfterSelect;
        // creating booked seat info
        let appentElement = document.getElementById('newSeats');        
        let seatName = document.createElement('p');
        seatName.innerText = 'A1';
        let className = document.createElement('p');
        className.innerText = 'Economy';
        let pricePerSeat = document.createElement('p');
        pricePerSeat.innerText = 550;
        // appending new booked seat
        appentElement.appendChild(seatName);
        appentElement.appendChild(className);
        appentElement.appendChild(pricePerSeat);
        // changing total price
        let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
        let newPrice = totalPrice+550;
        document.getElementById('totalPrice').innerText = newPrice; 
        
        // discount price
        let discout = 0;

        // grand totalprice 
        let newGrandTotalPrice = newPrice - discout;

        document.getElementById('grandTotal').innerText = newGrandTotalPrice;


    })
}