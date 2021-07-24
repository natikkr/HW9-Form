
let  password = document.getElementById('UserPassword');
let form = document.getElementById('form');
let login = document.getElementById('UserName')


document.getElementById("btn").addEventListener('click', () => {
    let pass = password.value;
    let name = login.value;
       
});
    console.log(document.getElementById('UserName').innerText);
    console.log(document.getElementById('UserPassword').innerText);

let logInp = document.querySelectorAll('input')
for (let input of logInp){
    input.addEventListener('change', function store() {
        let rule= this.dataset.rule;
        let value = this.value;
        let reg;

switch(rule){
    case 'login':
        reg= /^[A-Za-z0-9]{2,15}$/.test(value);
    break;

    case 'password':
        reg= /(?=.*[#$])^[A-Za-z0-9]{6,15}$/.test(value);
    break;
    }
    this.classList.remove('invalid')
    this.classList.remove('valid')

    if (reg){        
        this.classList.add('valid');
        }
    else {    
        this.classList.add('invalid')
    }
        });
    }
