class user {
    constructor(username){
        this.username=username
    }

    static uniqueid(){
        return(`123`)
        
    }
}

chai=new user('rohit')

console.log(chai.uniqueid());

class teacher extends user{
    constructor(username,email){
super(username)
this.email=email
    }
}

const tea = new teacher('rohit chamoli','rohti@gmail.com')


console.log(tea.uniqueid());

