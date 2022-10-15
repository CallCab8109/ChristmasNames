
const names1 = document.querySelector('#abc')
const button = document.querySelector('#submit')


function namePicker () {
    const names = names1.value.split(",")
    // console.log(names)
    const namesList = []
    let namesCopy = [...names]
    while(namesList.length < names.length){
    const random = Math.floor(Math.random() * names.length)
        namesList.push(namesCopy[random])
        names.splice(names, [1])
    }

    alert(namesList)

}


button.addEventListener('click', namePicker)
