const form = document.querySelector('form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B', 'A', 'A']

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            Math.round(score += 16.6)
        }
    })

    finalResult.classList.remove('d-none')
    scrollTo(0, 0)

    let count = 0;

    const timer = setInterval(() => {
        if (count === Math.random(score)) {
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${count}`
        count++
    }, 10)
})