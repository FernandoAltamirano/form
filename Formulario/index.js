let name = document.getElementById('name')
let last_name = document.getElementById('last-name')
let email = document.getElementById('email')


console.log(name,last_name,email)

name.addEventListener('keyup', function(){
    if(name.value.length >= 1){
        this.nextElementSibling.classList.add('fijar')
        
    }else{
        this.nextElementSibling.classList.remove('fijar')
    }
})

last_name.addEventListener('keyup', function(){
    if(last_name.value.length >=1){
        this.nextElementSibling.classList.add('fijar')
    }else{
        this.nextElementSibling.classList.remove('fijar')
    }
})

email.addEventListener('keyup', function(){
    if(email.value.length >=1){
        this.nextElementSibling.classList.add('fijar')
    }else{
        this.nextElementSibling.classList.remove('fijar')
    }
})




// let inputs =  document.getElementsByClassName('input')

// console.log(inputs)
// for(let i=0;i<inputs.length;i++){
//     inputs[i].addEventListener('keyup', function(){
//         if(inputs[i].value.length >=1){
//             this.nextElementSibling.classList.add('fijar')
//             console.log('d')
//             console.log(this.nextElementSibling.classList)
//         }else{
//             this.nextElementSibling.classList.remove('fijar')
//         }
//     })
// }