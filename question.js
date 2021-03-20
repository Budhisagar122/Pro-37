class Question{
    constructor(){
        this.input1=createInput("Enter Your Name Here")
        this.input2=createInput("Write Correct Option Here")
        this.button=createButton("Submit")

        this.option1=createElement('h4')
        this.option2=createElement('h4')
        this.option3=createElement('h4')
       this.option4=createElement('h4')
       
       this.title=createElement('h2')
       this.question=createElement('h3')
    }
    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0)

        this.question.html("Question1:-Who is the Finance Minister of India?")
        this.question.position(150,70);
        this.option1.html("1:Narendra Modi")
        this.option1.position(150,100)
        this.option2.html("2:Ramnath Kovind")
        this.option2.position(150,120);
        this.option3.html("3:Bhupesh Baghel")
        this.option3.position(150,140);
        this.option4.html("4:Nirmala Sitaraman")
        this.option4.position(150,160);

        this.button.position(330,270)

        this.button.mousePressed(()=>{
            this.title.hide()
            this.button.hide()
            this.input1.hide()
            this.input2.hide()
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();


            constestant.name=this.input1.value()
            contestantCount=contestantCount+1;
            contestant.index=contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
        })

        this.input1.position(150,230)
        this.input2.position(400,230)

        
        
    }
    hide(){
        this.input1.hide()
        this.input2.hide();
        this.button.hide();
        this.option.hide()
        this.question.hide()
    }
}