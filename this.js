var obj1={
    id:1,
    name:"vennela",
    sibling:true,
    state:"Telangana"

}

var obj2={
    name:"akhila",
    id:2,
    sibling:false,
    state:"AP"

}
var obj3={
    id:3,
    name:"samyu",
    sibling:false,
    state:"aunachal Pradesh"

}

var obj4={
    id:4,
    name:"siddi",
    sibling:true,
    state:"tamilnadu"

}


var obj5={
    id:5,
    name:"mahi",
    sibling:true,
    state:"Telangana"

}

var obj6={
    id:6,
    name:"keerthhi",
    sibling:true,
    state:"bihar"

}

var obj7={
    id:7,
    name:"Rani",
    sibling:true,
    state:"tamil nadu"

}

var obj8={
    id:8,
    name:"vasu",
    sibling:false,
    state:"AP"

}


var obj9={
    id:9,
    name:"kavya",
    sibling:true,
    state:"AP"

}

var obj10={
    id:10,
    name:"Mahi",
    sibling:true,
    state:"AP"

}

details=function(p,q){
    console.log(`A person with the name ${this.name} and with id ${this .id} and having siblings ${this.sibling},came from ${this.state},${p} ${q}`)
}

details1=function(p,q){
    return `A person with the name ${this.name} and with id ${this.id} and having siblings ${this.sibling},came from ${this.state},${p} ${q}  `
}

details.call(obj1,"she want to join with us","for her higher studies")
details.apply(obj1,["she want  to join with ","for her higher studeies"])
let object1=details1.bind(obj1,"she want to join with us","for her higher studies")
console.log(object1())


details.call(obj2,"she want to go to hyd ","for joining the company")
details.apply(obj2,["she want to go to hyd ","for joining the company"])
let object2=details1.bind(obj2,"she want to go to hyd ","for joining the company")
console.log(object2())


details.call(obj3,"she said came to benguluru","for joining the company")
details.apply(obj3,["she want to go to hyd ","for joining the company"])
let object3=details1.bind(obj3,"she want to go to hyd ","for joining the company")
console.log(object3())


details.call(obj4,"she said came to ooty","for enjoying the tourist place")
details.apply(obj4,["she want to go to ooty ","for enjoying the tourist place"])
let object4=details1.bind(obj4,"she want to go to ooty ","for enjoying the tourist place")
console.log(object4())

details.call(obj5,"she said came to kerala","for enjoying the tourist place")
details.apply(obj5,["she want to go to kerela","for enjoying the tourist place"])
let object5=details1.bind(obj5,"she want to go to kerela","for enjoying the tourist place")
console.log(object5())


details.call(obj6,"she want to join in 10kcoders","for becoming full stack developer")
details.apply(obj6,["she want to join in 10kcoders","for becoming full stack developer"])
let object6=details1.bind(obj6,"she want to join in 10kcoders","for becoming full stack developer")
console.log(object6())

details.call(obj7,"she want to go to hyd ","for joining the company")
details.apply(obj7,["she want to go to hyd ","for joining the company"])
let object7=details1.bind(obj7,"she want to go to hyd ","for joining the company")
console.log(object7())


details.call(obj8,"she said came to benguluru","for joining the company")
details.apply(obj8,["she want to go to hyd ","for joining the company"])
let object8=details1.bind(obj8,"she want to go to hyd ","for joining the company")
console.log(object8())


details.call(obj9,"she said came to ooty","for enjoying the tourist place")
details.apply(obj9,["she want to go to ooty ","for enjoying the tourist place"])
let object9=details1.bind(obj9,"she want to go to ooty ","for enjoying the tourist place")
console.log(object9())

details.call(obj10,"Life of Vennela","Brother of siddi and meghu")
details.apply(obj10,["frnd of akhila","Miss u of Samyu"])
let object10=details1.bind(obj10,"He always come to Hyd","to  meet them")
console.log(object10())