class Question{
constructor(){
    this.inputName = createInput("Name");
    this.inputAnswer = createInput("Answer")
    this.button = createButton('Submit Response');
    this.greeting = createElement('h3');
    this.title = createElement('h2')
    this.question = createElement('h4')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')

}

hide_details(){
this.inputName.hide();
this.inputAnswer.hide();
this.button.hide();
this.greeting.hide();
this.title.hide();


}

display(){

    this.title.html("My Quiz Game")
    this.title.position(350,0)
    this.question.html("Question - What starts and ends with E, but has only one letter?")
    this.question.position(150,80)
    this.option1.html("1: Everyone")
    this.option1.position(150,100)
    this.option2.html("2: Envelope")
    this.option2.position(150,120)
    this.option3.html("3: Estimate")
    this.option3.position(150,140)
    this.option4.html("4: Example")
    this.option4.position(150,160)


    this.inputName.position(130,250)
    this.inputAnswer.position(130,280)
    this.button.position(150,320)


    this.button.mousePressed(()=>{
        this.button.hide();
        this.inputName.hide();
        this.inputAnswer.hide();

        contestant.name = this.inputName.value()
        contestant.answer = this.inputAnswer.value();

        contestantCount = contestantCount+1 ;
        contestant.index = contestantCount;
        contestant.update()
        contestant.updateCount(contestantCount);
        
    })





}

play(){

question.hide_details();
background("yellow");
fill("black")
text("Result of the Quiz", 350,0)

Contestant.getCInfo();

if(allContestant!== undefined){

    
    
    var y = 200
    for(var c in allContestant){

       var correctans = "2";
        y = y+30
    if(allContestant[c].answer === correctans){
        
        fill("green")
        text(allContestant[c].name + ":" + allContestant[c].answer, 150,y)

    }
else{
    fill("red")
    text(allContestant[c].name + ":" + allContestant[c].answer, 150,y)

}
    }

}

}





}