    import{universeScreen, homeScreen, explorationScreen, homeButton, universeButton, explorationButton, jhonnyImg, judyImg,kerryImg,pananImg,
        rogueImg,riverImg, jhonnyModal,judyModal, kerryModal, pananModal, rogueModal, riverModal, kerrysong, closeModal,closeModal2, closeModal3,
        closeModal4, closeModal5, closeModal6
    } from "./elements.js"




universeScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg2')
    
})


explorationScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg3')
    
})


homeScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg1')
    
})

function removeAllBgs(){
    document.querySelector('html').classList.remove('bg1')
    document.querySelector('html').classList.remove('bg2')
    document.querySelector('html').classList.remove('bg3')
    
    
}
homeButton.addEventListener('click', function(){
    removeAllWhiteColors()
    homeButton.style.color = 'black'
})

universeButton.addEventListener('click', function(){
    removeAllWhiteColors()
    universeButton.style.color = 'black'
})

explorationButton.addEventListener('click', function(){
    removeAllWhiteColors()
    explorationButton.style.color = 'black'
})

function removeAllWhiteColors(){
    homeButton.style.color = 'white'
    universeButton.style.color = 'white'
    explorationButton.style.color = 'white'
}




  function diminuir_volume(){
    if( kerrysong.volume > 0)  kerrysong.volume -= 0.7;
}
   
   
   jhonnyImg.addEventListener('click', () =>{
        jhonnyModal.classList.remove('hide')
        kerrysong.play()
   })
   judyImg.addEventListener('click', () =>{
    judyModal.classList.remove('hide')
    kerrysong.play()
   })
   kerryImg.addEventListener('click', () =>{
    kerryModal.classList.remove('hide')
    kerrysong.play()
   })
   pananImg.addEventListener('click', () =>{
    pananModal.classList.remove('hide')
    kerrysong.play()
   })
   rogueImg.addEventListener('click', () =>{
    rogueModal.classList.remove('hide')
    kerrysong.play()
   })
   riverImg.addEventListener('click', () =>{
    riverModal.classList.remove('hide')
    kerrysong.play()
   })

   diminuir_volume()



   closeModal.addEventListener('click', () => {
    jhonnyModal.classList.add('hide')
   })

   closeModal2.addEventListener('click', ()=>{
    judyModal.classList.add('hide')
   })

   closeModal3.addEventListener('click', ()=>{
    kerryModal.classList.add('hide')
   })

   closeModal4.addEventListener('click', ()=>{
    pananModal.classList.add('hide')
   })
   closeModal5.addEventListener('click', ()=>{
    rogueModal.classList.add('hide')
   })
   closeModal6.addEventListener('click', ()=>{
    riverModal.classList.add('hide')
   })



  