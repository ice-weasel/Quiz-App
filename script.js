document.addEventListener('DOMContentLoaded',() => {
    const start = document.querySelector('.startbox');
    const questions = document.querySelector('.questionsbox')
    start.addEventListener('click',()=> {
        document.getElementById('startbox').style.display = "none";
        document.getElementById('questionsbox').style.display = "flex";
    })
})