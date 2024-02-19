let arr = []
const seat = document.getElementsByClassName('seat');
for (let i of seat) {

    i.addEventListener('click', function () {
        if (!arr.includes(i.innerText)) {
            let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
            if (totalPrice < 2200) {
                arr.push(i.innerText);
                // change bg and text color
                i.classList.add('bg-[#1DD100]');
                i.classList.add('text-white');
                i.classList.remove('bg-opacity-10');

                // change rest seat numbers
                let seatLefts = parseInt(document.getElementById('seatLefts').innerText);
                let seatLeftAfterSelect = seatLefts - 1;
                document.getElementById('seatLefts').innerText = seatLeftAfterSelect;
                // change booked seat numbers
                let seatBooked = parseInt(document.getElementById('seatBooked').innerText);
                let seatBookedAfterSelect = seatBooked + 1;
                document.getElementById('seatBooked').innerText = seatBookedAfterSelect;
                // creating booked seat info
                let appentElement = document.getElementById('newSeats');

                let seatName = document.createElement('p');
                seatName.classList.add('seatName', (i.innerText).toLowerCase())
                seatName.innerText = i.innerText;
                let className = document.createElement('p');
                className.classList.add('seatClass',(i.innerText).toLowerCase())
                className.innerText = 'Economy';
                let pricePerSeat = document.createElement('p');
                pricePerSeat.classList.add('seatPrice',(i.innerText).toLowerCase())
                pricePerSeat.innerText = 550;

                // appending new booked seat
                appentElement.appendChild(seatName);
                appentElement.appendChild(className);
                appentElement.appendChild(pricePerSeat);
                // changing total price
                let newPrice = totalPrice + 550;
                document.getElementById('totalPrice').innerText = newPrice;
                // document.getElementById('grandTotal').innerText = newPrice;

                // eneble next button
                const nextBtn = document.getElementById('nextButton');
                nextBtn.classList.remove('bg-opacity-20');
                nextBtn.removeAttribute('disabled');
            
            }



        }
        else {
            i.classList.remove('bg-[#1DD100]');
            i.classList.remove('text-white');
            i.classList.add('bg-opacity-10');

            
            arr.splice(arr.indexOf(i.innerText),1)

            // change rest seat numbers
            let seatLefts = parseInt(document.getElementById('seatLefts').innerText);
            let seatLeftAfterSelect = seatLefts + 1;
            document.getElementById('seatLefts').innerText = seatLeftAfterSelect;

            // change booked seat numbers
            let seatBooked = parseInt(document.getElementById('seatBooked').innerText);
            let seatBookedAfterSelect = seatBooked - 1;
            document.getElementById('seatBooked').innerText = seatBookedAfterSelect;

            // changing total price
            document.getElementById('totalPrice').innerText = parseInt(document.getElementById('totalPrice').innerText)-550;
            
            
            
            // pop seat
            let newSeat =document.getElementsByClassName((i.innerText).toLowerCase());
            for(let j of newSeat){
                j.classList.add('hidden')
            }
        }
        document.getElementById('grandTotal').innerText = parseInt(document.getElementById('totalPrice').innerText)
        
    }
    )
}
// check cupon

document.getElementById('cupon').addEventListener('click', function () {
    const cupon = document.getElementById('cuponCode').value;
    if (cupon === 'NEW15') {
        let discount = (parseInt(document.getElementById('totalPrice').innerText) * 15) / 100;
        let newGrandTotalPrice = Math.round(parseInt(document.getElementById('totalPrice').innerText) - discount);
        document.getElementById('grandTotal').innerText = newGrandTotalPrice;
        document.getElementById('couponDiv').classList.add('hidden')
    }
    else if (cupon === 'Couple 20') {
        let discount = (parseInt(document.getElementById('totalPrice').innerText) * 20) / 100;
        let newGrandTotalPrice = Math.round(parseInt(document.getElementById('totalPrice').innerText) - discount);
        document.getElementById('grandTotal').innerText = newGrandTotalPrice;
        document.getElementById('couponDiv').classList.add('hidden')

    }
    else {
        document.getElementById('cpnalt').classList.remove('hidden')
        document.getElementById('cuponCode').value = '';
    }
})