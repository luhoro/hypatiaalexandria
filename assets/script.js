const controls = document.querySelectorAll('.control')

const items = document.querySelectorAll('.item')
let currentItem = 0
const maxItems = items.length

controls.forEach( control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')

        //move Items
        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        //show Items
        if (currentItem >= maxItems) {
            currentItem = 0
        } else if (currentItem < 0) {
            currentItem = maxItems - 1
        }

        items.forEach(item => item.classList.remove('current-item'))

        //scroll property
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })

        items[currentItem].classList.add("current-item")
    })
})