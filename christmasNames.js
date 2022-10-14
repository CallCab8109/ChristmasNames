const names = ["Carter", "Lily", "Madi & Nohea", "Kenni & Josh", "Taylor", "Kelly"]

function namePicker () {
    const namesList = new Set()
    let namesCopy = [...names]
    while(namesList.size < names.length){
    const random = Math.floor(Math.random() * names.length)
        namesList.add(names[random])
        namesCopy.splice(random, 1)
    }

    console.log([...namesList])

}

namePicker()

