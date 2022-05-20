
var x = 'x'
var tilte = document.getElementsByClassName('board')[0]
var winner_tiltle = document.getElementsByClassName('boards')[0]
var again_game = document.getElementsByClassName('again-game')[0]




var arrid = []

again_game.addEventListener('click',function reload_agin(){
    location.reload()
})


function winner(num1, num2, num3) {
    tilte.innerHTML = `${arrid[num1]} 'winner'`;
    document.getElementById(`item${num1}`).style.background = '#FFFAF0';
    document.getElementById(`item${num2}`).style.background = '#FFFAF0';
    document.getElementById(`item${num3}`).style.background = '#FFFAF0';
    winner_tiltle.style.opacity = 1;
    setInterval(() => {
        winner_tiltle.innerHTML = `${arrid[num1]} 'winner...'`;


    }, 1000);
    again_game.style.opacity = 1 ;

}
function coodwiner() {
    for (let i = 1; i < 10; i++) {
        arrid[i] = document.getElementById(`item${i}`).innerHTML

    }
    if (arrid[1] == arrid[2] && arrid[2] == arrid[3] && arrid[1] != '') {

        winner(1, 2, 3)

    }

    else if (arrid[4] == arrid[5] && arrid[5] == arrid[6] && arrid[5] != '') {
        winner(4, 5, 6)


    }
    else if (arrid[7] == arrid[8] && arrid[8] == arrid[9] && arrid[9] != '') {
        winner(7, 8, 9)

    }
    else if (arrid[1] == arrid[5] && arrid[5] == arrid[9] && arrid[5] != '') {
        winner(1, 5, 9)

    }
    else if (arrid[3] == arrid[5] && arrid[5] == arrid[7] && arrid[7] != '') {
        winner(3, 5, 7)

    }
    else if (arrid[3] == arrid[6] && arrid[6] == arrid[9] && arrid[9] != '') {
        winner(3, 6, 9)

    }
    else if (arrid[1] == arrid[4] && arrid[4] == arrid[7] && arrid[7] != '') {
        winner(1, 4, 7)

    }
    else if (arrid[2] == arrid[5] && arrid[5] == arrid[8] && arrid[8] != '') {
        winner(2, 5, 8)

    }
    else if (arrid[7] == arrid[5] && arrid[5] == arrid[3] && arrid[3] != '') {
        winner(7, 5, 3)

    }
    else if (arrid[3] == arrid[6] && arrid[6] == arrid[9] && arrid[9] != '') {
        winner(3, 6, 9)

    }

}


const addclick = (id) => {

    let item = document.getElementById(id)
    if (x === 'x' && item.innerHTML == '') {
        item.innerHTML = 'X'
        tilte.innerHTML = 'O'
        x = 'o'
    }
    else if (x === 'o') {
        item.innerHTML = 'O'
        tilte.innerHTML = 'X'
        x = 'x'
        console.log('ddd')


    }
    coodwiner()
    console.log(id)

}