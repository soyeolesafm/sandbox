const btn = document.querySelector(`.btn`)
const phonyBtn = document.querySelector(`.phony_btn`)
let phonyBtnActive = false
btn.addEventListener(`click`, (e) => {
    if (phonyBtnActive) { return
        
    } else {
        document.getElementById('top_message').innerHTML = ""
        document.getElementById('bottom_message').innerHTML = "I just did"
        phonyBtn.style.display = "none"
        btn.style.display = "none"
    }

    
} )

phonyBtn.addEventListener(`click`, (e) => {
    document.getElementById('top_message').innerHTML = "How rude!"
    phonyBtn.style.display = "none"
    phonyBtnActive = true
})

