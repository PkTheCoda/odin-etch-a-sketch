const grid = document.querySelector('.grid')
const resetBtn = document.querySelector('.reset-button')
const sizeBtn = document.querySelector('.size-button')
const borderBtn = document.querySelector('.showgrid-button')


function generateGrid(columns, rows) {
    for (let i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div')
        // div.style.border = `1px solid black`
        grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.appendChild(div).classList.add('.square')
        div.classList.add('box')
        function whenClicked() {
            div.classList.add('clicked')
        
        }
        
        div.addEventListener('mousedown', whenClicked)  

        function borderToggle() {
            div.classList.toggle('borderon')
        }
        borderBtn.addEventListener('click', borderToggle)
        
    }
}

function reset() {
    const boxs = grid.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    });
}

function resize() {
    sizeBtn.addEventListener('click', () => {
        let user = prompt("What size do you want the grid to be? Don't say anything to get the default grid!")
        if (user === null || user < 1) {
            reset()
            generateGrid(16,16)
        } else {
            reset()
            generateGrid(user,user)
        }
    });
}

resize()



generateGrid(16,16)

