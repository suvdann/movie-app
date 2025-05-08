

 const Less=()=>{
const myname:string="Gerelee"
const age:number=12
const study:boolean=true
console.log(myname,age,study)


const names:string[]=["bayr", "tseteg", "gerel"]
const ages:number[]=[1,2,3]
const isstudying:boolean[]=[false, false,true]
console.log(names,ages, isstudying)


interface Book{
    title:string
    author:string
    pages:number
}
const myBook:Book={
   title:"gearg",
   author:"ggg",
   pages:5

}
console.log(myBook);


interface Animal{
    name:string,
    type:string|number,
    age?:number
}
const animals:Animal[]=[
{
    name:"rabbit",
    type:1,
    age:2,
},
{
    name:"shaun",
    type:"silly",
age:3,
}
]
animals.map((animal)=>{
    // console.log(animal.type,"🧠")
    // console.log(animal.name,"🐰")
    console.log(`Name: ${animal.name} 🐰 | Type: ${animal.type} 🧠 | Age: ${animal.age ?? "?"} 🎂`)
})
// type  vs interface
{/* type=> iluy uyan hatan obj,mass
    
    
    */}
return <div>hi</div>
}
export default Less