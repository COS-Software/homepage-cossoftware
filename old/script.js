
// helper functions 

const calcDistance = (point1, point2) => {
    const dx = point1.x - point2.x
    const dy = point1.y - point2.y
    return Math.sqrt(dx * dx + dy * dy)
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.floor(Math.random() * (max - min + 1)) + min)
}

// canvas functions 

const loadCanvasEffect = () => {
    resizeCanvas()
    runAnimation()
}

const runAnimation = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")

    const getRandomX = () => generateRandomNumber(0, window.innerWidth)
    const getRandomY = () => generateRandomNumber(0, window.innerHeight)

    let objs = new Array(20).fill({}).map((e) => ({
            x: getRandomX(),
            targetX: getRandomX(),
            y: getRandomY(),
            targetY: getRandomY(),
            r: 2,
            speed: 1,
        })
    )

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let index = 0; index < objs.length; index++) {
            obj = objs[index]
            nextObj = objs[index-1]
            lastObj = objs[index+1]

            ctx.fillStyle = '#83a6de'
            ctx.strokeStyle = '#83a6de'
            ctx.beginPath()
            ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI)
            ctx.fill()

            if (nextObj) {
                ctx.beginPath()
                ctx.moveTo(obj.x, obj.y)
                ctx.lineTo(nextObj.x, nextObj.y)
                ctx.stroke()
            }

            if (lastObj) {
                ctx.beginPath()
                ctx.moveTo(obj.x, obj.y)
                ctx.lineTo(lastObj.x, lastObj.y)
                ctx.stroke()
            }
        }

        objs = objs.map((e) => {
            if (e.x < e.targetX) {
                e.x = e.x + e.speed
            } else if (e.x > e.targetX) {
                e.x = e.x - e.speed
            } else {
                e.targetX = getRandomX()
            }
            
            if (e.y < e.targetY) {
                e.y = e.y + e.speed
            } else if (e.y > e.targetY) {
                e.y = e.y - e.speed
            } else {
                e.targetY = getRandomY()
            }

            return e
        })
    }, 10)
}

const resizeCanvas = () => {
    const canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

// change msgs effect functions
const loadMsgs = () => {
    let index = 0
    const msgs = [
        'Uma empresa de negócios voltada para a produção de software sob demanda.',
        'Pense. Nós construímos para você.',
        'Soluções de Software Personalizadas para Impulsionar Seu Negócio.',
        'Do conceito à execução, entregamos software de alta qualidade, sob medida para você.',
    ]
    
    const msgElement = document.getElementById('msg')

    setInterval(() => {
        msgElement.style.opacity = 0

        setTimeout(() => {
            msgElement.innerText = msgs[index++ % msgs.length]
            msgElement.style.opacity = 1
        }, 1e3)
    }, 3e3)
}


window.onload = () => {
    loadMsgs()
    loadCanvasEffect()
}

window.onresize = resizeCanvas
