class Students{

    constructor(Name,Phoneno){
        this.Name=Name;
        this.Phoneno=Phoneno;
    }
    display(){
        console.log(`Student details are ${this.Name} and ${this.Phoneno}`);
        // console.log(this.Phoneno);
    }
    
}
let s1=new Students("Anurag",9267918534);
let s2=new Students("Anas",382938949);
s1.display();
s2.display();


