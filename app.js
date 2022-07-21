const tableBody = document.getElementById('table-body')


let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "09:00",
        destination: "SAO PAULO",
        flight: "BR 55",
        gate: "B 51",
        remarks: "ON TIME"
    },
    {
        time: "11:15",
        destination: "CANADA",
        flight: "CA 604",
        gate: "C 05",
        remarks: "ARRIVED"
    },
    {
        time: "16:00",
        destination: "GREECE",
        flight: "GC 009",
        gate: "G 07",
        remarks: "CANCELLED"
    }
]

const destination = ["OMAN", "SAO PAULO", "CANADA", "GREECE"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED", "ARRIVED"];
let hour = 16;



function populateTable() {
    
    for (const flight of flights) {
        //This creates a new row in the table for each flight in the flights array
        const tableRow = document.createElement("tr");

        for (const flightDetail in flight) {

            //This creates a new  cell in the table for each flight value
            const tableCell = document.createElement("td");

            const word = Array.from(flight[flightDetail])

            for(const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {

                    letterElement.classList.add('flip')

                    letterElement.textContent = letter;
                    tableCell.append(letterElement);

                }, 100 * index)

            }

            //console.log('flightDetail', flightDetail);

            //This captures the value for each detail (time, dest, flight, gate, remarks)
            //tableCell.innerText = flight[flightDetail];


            //This appends the value (time, dest, flight,...) into the Row
            tableRow.append(tableCell);
        }
        
        tableBody.append(tableRow)
        console.log(tableBody)
        
    }
}

populateTable();

//This will generate a random Letter
function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUBWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

//This will generate a random number
function generateRandomNumber(maxNumber) {
    const numbers = "1234567890"
    if(maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.chartAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if(hour < 24) {
        hour++
    }
    if(hour > 24) {
        hour = 1;
        displayHour = hour;
    }
    if(hour < 10) {
        displayHour = "0" + hour;
    }

    return displayHour + ":" + generateRandomNumber() + generateRandomNumber();
}


function shuffleUp() {
    flights.shift()
    flights.push(
        {
        time: generateTime(),
        destination: destination[Math.floor(Math.random() * destination.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
        }
    )

    tableBody.textContent = "";
    populateTable()
}

setInterval(shuffleUp, 2000)

