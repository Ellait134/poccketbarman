const cards = document.querySelectorAll('.coctails_card');
const clearBtn = document.querySelector('.sidebar_btn2');
const updateBtn = document.querySelector('.sidebar_btn1');
const checkboxes = document.querySelectorAll('.checkbox');

let listArray = []

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked) {
            listArray.push(this.value);
        } else
            listArray = listArray.filter(e => e !== this.value);
    })
}

updateBtn.onclick = () => {
    if (listArray.length > 0) {
        cards.forEach((item) => {
            item.classList.add('hide')
        })

        if (listArray.includes('vodka')) {
            cards.forEach((item) => {
                if (item.classList.contains('vodka')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('gin')) {
            cards.forEach((item) => {
                if (item.classList.contains('gin')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('rom')) {
            cards.forEach((item) => {
                if (item.classList.contains('rom')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('liquor')) {
            cards.forEach((item) => {
                if (item.classList.contains('liquor')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('viski')) {
            cards.forEach((item) => {
                if (item.classList.contains('viski')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('tequila')) {
            cards.forEach((item) => {
                if (item.classList.contains('tequila')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('tonic')) {
            cards.forEach((item) => {
                if (item.classList.contains('tonic')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('bitter')) {
            cards.forEach((item) => {
                if (item.classList.contains('bitter')) {
                    item.classList.remove('hide')
                }
            })
        }

        if (listArray.includes('vermyt')) {
            cards.forEach((item) => {
                if (item.classList.contains('vermyt')) {
                    item.classList.remove('hide')
                }
            })
        }
    } else {
        cards.forEach((item) => {
            item.classList.remove('hide')
        })
    }
}

clearBtn.onclick = () => {
    checkboxes.forEach((item) => {
        item.checked = false
    })
    cards.forEach((item) => {
        item.classList.remove('hide')
    })
}



