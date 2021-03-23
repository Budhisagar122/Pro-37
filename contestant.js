class Contestant{
    constructor(){
        this.name=null
        this.index=null
        this.answer=null
    }
    getCount(){
        var countref=database.ref('contestantCount')
        countref.on("value",function(data){
            contestantCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({contestantCount:count})

    }
    update(){
        var contestantIndex="contestants/contestant"+contestantCount
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer

        })
        
    }
    static getContestantsInfo(){
        var contestantref=database.ref('contestants')
        contestantref.on("value",(data)=>{allContestants=data.val()})
    }
}