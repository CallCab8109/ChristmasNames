
const names1 = document.querySelector('#abc')
const button = document.querySelector('#submit')


function namePicker () {
    const names = names1.value.split(",")
    const namesList = []
    let namesCopy = [...names]
    const times = names.length
    while(namesList.length < times){
    const random = Math.floor(Math.random() * namesCopy.length)
        namesList.push(namesCopy[random])
        namesCopy.splice(random, [1])
    }
    alert(namesList)
}


button.addEventListener('click', namePicker)
