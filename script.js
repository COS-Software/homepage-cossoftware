

function open() {
    const mySidebar = document.getElementById("mySidebar");
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

function close() {
    document.getElementById("mySidebar").style.display = "none";
}

function choose(view) {
    selectSection(view)
    selectImageBackground(view)
    close()
}

function selectSection(view) {
    document.querySelectorAll('.section').forEach(
        element => element.style.display = 'none'
    )
    
    document.querySelectorAll('.section')[view + 1].style.display = 'block'
}

function selectImageBackground(view) {
    const whiteBackground = [
        'dev codando (1).jpg',
        'dev codando (2).jpg',
        'tela (1).jpg',
        'tela (2).jpg',
    ]
    const imgs = [
        'code (1).jpg',
        'code (2).jpg',
        'dev codando (1).jpg',
        'tela (2).jpg',
    ]
    selectedImg = imgs[view] || 'code (3).jpg'
    
    const jumbotron = document.querySelector('.jumbotron')
    jumbotron.style.backgroundImage = `url("assets/design/${selectedImg}")`
}