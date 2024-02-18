const seat = document.getElementsByClassName('seat');
for (let i of seat){
    i.addEventListener('click', function(){
        i.classList.add('bg-[#1DD100]');
        i.classList.add('text-white');
        i.classList.remove('bg-opacity-10');
        let seatLefts = parseInt(document.getElementById('seatLefts').innerText);
        let seatLeftAfterSelect = seatLefts-1;
        document.getElementById('seatLefts').innerText = seatLeftAfterSelect;
        let seatBooked = parseInt(document.getElementById('seatBooked').innerText);
        let seatBookedAfterSelect = seatBooked+1;
        document.getElementById('seatBooked').innerText = seatBookedAfterSelect;

        let appentElement = document.getElementById('newSeats');
        
        let seatName = document.createElement('p')
        seatName.innerText = i.innertext;
        let className = document.createElement('p')
        className.innerText = 'Economy';
        let pricePerSeat = document.createElement('p')
        pricePerSeat.innerText = 550;


        appentElement.appendChild(seatName);
        appentElement.appendChild(className);
        appentElement.appendChild(pricePerSeat);

    })
    console.log('hello')
}