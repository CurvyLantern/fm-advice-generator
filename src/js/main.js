'use strict'

const insertAdvice = document.getElementById('insertAdvice')
const adviceId = document.getElementById('adviceId')
const adviceBtn = document.getElementById('adviceBtn')
const api__uri = 'https://api.adviceslip.com/advice'
async function onClick() {
    const { slip } = await (await fetch(api__uri)).json()

    adviceId.textContent = '#' + slip.id
    insertAdvice.textContent = slip.advice
}
adviceBtn.addEventListener('click', onClick)
