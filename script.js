let UserScore = 0;
let CompScore = 0;
let choices = document.querySelectorAll('.choice');
let choosed = document.getElementById("choosed");
let user = document.getElementById('user-score');
let computer = document.getElementById('comp-score');
let reset = document.getElementById('reset');
let animationSrc = document.getElementById('anim');
let btn = document.getElementById('btn');
let video = document.getElementById('myvideo');

reset.addEventListener('click', () => {
    UserScore = 0;
    CompScore = 0;
    user.innerHTML = '<b>0 User</b>';
    computer.innerHTML = '<b> 0 Comp</b>';
    choosed.innerText = '';
    animationSrc.style.display = 'none';
})

let comp = () => {
    let options = ['rock', 'paper', 'scissor'];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        const compChoice = comp();
        console.log("User = ", userChoice);
        console.log("Computer = ", comp());
        choosed.innerText = `User Choose = ${userChoice} \n Computer Choose = ${compChoice}`;
        animationSrc.style.display = 'block';

        if (userChoice === "rock" && compChoice === "scissor" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissor" && compChoice === "paper") {
            UserScore++;
            user.innerHTML = `<b> User ${UserScore}</b>`;
            
            if (userChoice === "rock" && compChoice === "scissor") {
                animationSrc.setAttribute('src', `./anim/user r.mp4`);
                video.load();
                video.play();
            }
            else if (userChoice === "paper" && compChoice === "rock") {
                animationSrc.setAttribute('src', `./anim/user p w.mp4`);
                video.load();
                video.play();
            }
            else {
                animationSrc.setAttribute('src', `./anim/u s.mp4`);
                video.load();
                video.play();
            }
        }
        else if (userChoice === "rock" && compChoice === "rock" || userChoice === "paper" && compChoice === "paper" || userChoice === "scissor" && compChoice === "scissor") {
           
            if (userChoice === "rock" && compChoice === "rock") {
                animationSrc.setAttribute('src', `./anim/r t.mp4`);
                video.load();
                video.play();
            }
            else if (userChoice === "paper" && compChoice === "paper") {
                animationSrc.setAttribute('src', `./anim/p t.mp4`);
                video.load();
                video.play();

            }
            else {
                animationSrc.setAttribute('src', `./anim/s t.mp4`);
                video.load();
                video.play();
            }
        }
        else {
            CompScore++;
            computer.innerHTML = `<b>Comp ${CompScore}</b>`;
            if (userChoice === "scissor" && compChoice === "rock") {
                animationSrc.setAttribute('src', `./anim/comp r.mp4`);
                video.load();
                video.play();
            }
            else if (userChoice === "rock" && compChoice === "paper") {
                animationSrc.setAttribute('src', `./anim/comp p w.mp4`);
                video.load();
                video.play();
            }
            else {
                animationSrc.setAttribute('src', `./anim/c s.mp4`);
                video.load();
                video.play();
            }
        }
    });

});