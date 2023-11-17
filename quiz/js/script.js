document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    function checkConnection() {
        var networkState = navigator.connection.type;
    
        var states = {};
        states[Connection.UNKNOWN]  = 'yes';
        states[Connection.ETHERNET] = 'yes';
        states[Connection.WIFI]     = 'yes';
        states[Connection.CELL_2G]  = 'yes';
        states[Connection.CELL_3G]  = 'yes';
        states[Connection.CELL_4G]  = 'yes';
        states[Connection.CELL]     = 'yes';
        states[Connection.NONE]     = 'no';

        if(states[networkState] == "no"){
            var hiding_box = document.querySelector(".info_box");
            hiding_box.style.display = "none";
            result_box.style.display = "none";
            swal.fire({
                title: "দূঃখিত",
                text: "কোনো ইন্টারনেট সংযোগ নেই ।",
                type: "error",
                footer: '<a href="">Buy Pro <i class="fa-solid fa-crown"style="color:red;"></i></a>'
            }).then(function() {
                window.history.back();
            });
        }
        else{
            hiding_box.style.display = "block";
            result_box.style.display = "block";
        }
    }

    checkConnection();
    //All add goes
    document.removeEventListener('deviceready', onDeviceReady, false);
    
    // Set AdMobAds options:
    admob.interstitial.config({
    id: 'ca-app-pub-8652940814169251/1098081791',
    })

    admob.interstitial.prepare()

    admob.interstitial.show()
}

document.addEventListener("deviceready", onDeviceReady, false);
//selecting all required elements
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const right_ans_music = new sound("music/right.wav");
const wrong_ans_music = new sound("music/wrong.wav");

// if startquiz button clicked
info_box.classList.add("activeInfo"); //show info box
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    window.history.back();
}
//find the quiz is taken or not 
//if taken show the scores and retake system
var quiz_taken_or_not = localStorage.getItem(document.title+" score");
var percentage_get_passed_or_not = localStorage.getItem(document.title+" percentage");
if(quiz_taken_or_not != null){
	if(percentage_get_passed_or_not >= 80){
		 info_box.classList.remove("activeInfo"); //hide info box
         quiz_box.classList.remove("activeQuiz"); //hide quiz box
         result_box.classList.add("activeResult"); //show result box
         var scoreText_final = result_box.querySelector(".score_text");
    
   
        let scoreTag = '<span>আপনি পেয়েছেন '+ quiz_taken_or_not +' নম্বর অর্থাৎ '+percentage_get_passed_or_not+'% নম্বর পেয়েছেন । ভালো স্কোর করার জন্য আপনাকে অভিনন্দন ।</span>'+'<br><br><br>আপনি replay করলে আপনার বর্তমান quiz score আপনার quiz এ করা স্কোর দ্বারা পরিবর্তন হয়ে যাবে ।' ;
        scoreText_final.innerHTML = scoreTag;  //adding new span tag inside score_Text
		}
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let timeValue =  20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 20; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.history.back(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        right_ans_music.play();//Play the sound for right ans
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        wrong_ans_music.play();//Play the sound for wrong ans
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function showResult(){
    var percentage_of_score;
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    var main_title_of_quiz = document.title;

    var percentage_of_score = (userScore/questions.length) * 100;
    
    if(percentage_of_score >= 80){ 
        let scoreTag = '<span>আপনি পেয়েছেন '+ userScore +' নম্বর যা ৮০% এর চেয়ে বেশী তাই আপনাকে পরবর্তী লেভেলে দেয়া হলো ।</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
        localStorage.setItem(main_title_of_quiz,"4");
        localStorage.setItem(main_title_of_quiz+" score",userScore);
        localStorage.setItem(main_title_of_quiz+" percentage",percentage_of_score);
        
    }
    else{ // if user scored less than 1
        let scoreTag = '<p>আপনি পেয়েছেন '+ userScore +' নম্বর যা ৮০% এর কম । <span style="color:red;background-color:#33;"> দূঃখিত! আপনাকে আবার কুইজ দেয়ার অনুরোধ করা হলো । </span></p>';
        scoreText.innerHTML = scoreTag;
        localStorage.setItem(main_title_of_quiz,"0");
        localStorage.setItem(main_title_of_quiz+" score",userScore);
        localStorage.setItem(main_title_of_quiz+" percentage",percentage_of_score);
    }

    
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 0.5; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 734){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

//create sound fucntion for play sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
