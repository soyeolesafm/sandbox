const btn = document.querySelector(`.btn`)
const phonyBtn = document.querySelector(`.phony_btn`)
const topMessage =document.querySelector('#top_message').innerHTML  
btn.addEventListener(`click`, (e) => {
    document.getElementById('top_message').innerHTML = ""
    document.getElementById('bottom_message').innerHTML = "I just did"
} )

phonyBtn.addEventListener(`click`, (e) => {
    document.getElementById('top_message').innerHTML = "How rude!"
})

