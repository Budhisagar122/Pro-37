class Contestant{
    constructor(){
        this.name=null
        this.index=null
        this.distance=0
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
            distance:this.distance

        })
        
    }
    static getcontestantsInfo(){
        var contestantref=database.ref('contestants')
        contestantref.on("value",(data)=>{allContestants=data.val()})
    }
}