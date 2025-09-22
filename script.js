let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';


buttonsArray.forEach(btn => {
    
    btn.addEventListener('click' ,(e) => { //event=e

        if(e.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        //To get square the number
        else if(e.target.innerHTML == 'x²'){
            string = string*string;
            display.value = string;
        }
        //To get cube of the number
        else if(e.target.innerHTML == 'x³'){
            string = string*string*string;
            display.value = string;
        }
        //To get squareroot of the given number
        else if(e.target.innerHTML == '√x'){
            string = Math.sqrt(string);
            display.value = string;
        }
        //To get cube root of the given number
        else if(e.target.innerHTML == '∛x'){
            string = Math.cbrt(string);
            display.value = string;
        }
        //To get the answer
        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{
            string += e.target.innerHTML;
            display.value = string;
        }    

        
    });

});


