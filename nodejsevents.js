const EventEmitter =require('events')



class MyEmitter extends EventEmitter {}
const myemitter =new MyEmitter();

myemitter.on('WaterFull',() =>{
    console.log("Please turn off the motor!")
    setTimeout(() => {
        console.log("Please turn off the motor! Its a gentle remainder")
        
    },3000);
});
console.log("The script is running")
myemitter.emit('WaterFull')
console.log("The script is still running")
myemitter.emit('WaterFull')
