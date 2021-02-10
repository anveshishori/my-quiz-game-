class Contestant{

    constructor(){
        this.name = null
        this.answer = null
        this.index = null

    }

    getCount(){

        database.ref('contestantCount').on('value', function(data){

            contestantCount = data.val();

        })

    }

    updateCount(count){

        database.ref('/').update({
            'contestantCount': count
        })
    }


    update(){

        var cIndex = "contestants/contestant" + this.index;

        database.ref(cIndex).set({
            
            name: this.name,
            answer: this.answer
        })

    }

    static getCInfo(){

        database.ref('contestants').on('value',(data)=>{
            allContestant = data.val();
        })

        
    }


}