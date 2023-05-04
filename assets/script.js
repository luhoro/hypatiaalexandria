const controls = document.querySelectorAll('.control')

let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach( control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')
        
        moveItems()
        showItems()

        items.forEach(item => item.classList.remove('current-item'))

        //scroll property
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        items[currentItem].classList.add("current-item")
    })
})


function moveItems() {
    if (isLeft) {
        currentItem -= 1
    } else {
        currentItem += 1
    }
}

function showItems() {
    if (currentItem >= maxItems) {
        currentItem = 0
    } else if (currentItem < 0) {
        currentItem = maxItems - 1
    }
}