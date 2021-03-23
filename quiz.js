class Quiz{
    constructor(){

    }
    getState(){
        var stateref=database.ref('gameState')
        stateref.on("value",function(data){
            gameState=data.val();})
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }
    }
    play(){
        question.hide();
        //background("yellow");
        textSize(30)
        text("Result",150,100)
        Contestant.getContestantsInfo()
      if(allContestants!==undefined){
           
           
        for(var plr in allContestants){
            var correctAns ="4";
            if(correctAns===allContestants[plr].answer){
                text(allContestants[plr].name+":"+allContestants[plr].answer,150,200)
            }
            
            
        }
      }
    }

}