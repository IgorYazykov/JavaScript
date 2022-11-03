StartTest = confirm (`Начать тест?`);
points = 0;
TrueAnswer = 0;
if (StartTest === true){
    alert(`каждый правильный ответ равен 10 баллам . Всего 60 баллов`);
    AnswerOne = prompt (`Какая по счету планета Земля?`);
    if (AnswerOne == 3){
        points += 10;
        TrueAnswer ++;
    } 
    else if(AnswerOne == null){}
    else {}

    AnswerTwo = prompt (`Чему равно число ПИ`);
    if (AnswerTwo == 3,14){
        points += 10;
        TrueAnswer ++;
    } 
    else if(AnswerTwo == null){}
    else {}

    AnswerThree = prompt (`чему равна скорость свободного падения?(округленно)`);
    if (AnswerThree == 9,8){
        points += 10;
        TrueAnswer ++;
    } 
    else if(AnswerThree == null){}
    else {}

    AnswerFour = prompt (`чему равен угол равностороннего треугольника?`);
    if (AnswerFour == 60){
        points += 10;
        TrueAnswer ++;
    } 
    else if(AnswerFour == null){}
    else {}

    AnswerFive = prompt (`В каком году полностью распалась Римская Империя?`);
    if (AnswerFive == 476){
        points += 10;
        TrueAnswer ++;
    } 
    else if(AnswerFive == null){}
    else {}

    AnswerSix = prompt (`какая самая большая ягода?`);
    if (AnswerSix == null){}
    else{
        AnswerSix=AnswerSix.toLowerCase();
        console.log(AnswerSix);
        if (AnswerSix == "арбуз"){
            points += 10;
            TrueAnswer ++;
        } 
        else if(AnswerSix == null){}
        else {}
    }

    if(TrueAnswer == 6 ){
        alert(`вы получили максимальное количество баллов и ответили правильно на все вопросы`);
    } else if (TrueAnswer == 0){
        alert(`вы не ответили правильно ни на один вопрос`);
    } else {
        alert(`вы набрали ${points} очков и ответили правильно на ${TrueAnswer}`);
    }

}
else{
    alert(`вы отказались от прохождения теста`);
}
