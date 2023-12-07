class boy{
    constructor(name , age){
        this.name=name
        this.age=age
    }
    generate(){
        return `${this.name} has ${this.age} age`
    }
}
const subbu=new boy("subodh",90);
console.log(subbu.generate());