
window.onload = () => {
    let index = 0
    const msgs = [
        'Uma empresa de negócios voltada para a produção de software sob demanda.',
        'Pense. Nós construímos para você.',
        'Soluções de Software Personalizadas para Impulsionar Seu Negócio.',
        'Do conceito à execução, entregamos software de alta qualidade, sob medida para você.',
    ]
    
    const msgElement = document.getElementById('msg');

    setInterval(() => {
        msgElement.style.opacity = 0;

        setTimeout(() => {
            msgElement.innerText = msgs[index++ % msgs.length];
            msgElement.style.opacity = 1;
        }, 1e3);
    }, 4e3);
}