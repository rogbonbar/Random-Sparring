let jiujiteiro = ['Miguel ✈️ ', 'Cristina🌵 ', 'Carlos🐙', 'Miriam🦖 ', 'Paloma🐣 ', 'Enrique🦕 ', 'Juanjo🦍 ', 'Itziar🦈 ', 'Inna🦅 ','Paula🐒 '];
let tatamiEL = document.getElementById('tatami-el');



function porradaTime() {
    
    let JiuititeiroOne = Math.floor(Math.random()*jiujiteiro.length);
    let JiuititeiroTwo = Math.floor(Math.random()*jiujiteiro.length);
    tatamiEL.textContent = (jiujiteiro[JiuititeiroOne] + ' vs ' + jiujiteiro[JiuititeiroTwo]);
   
} 