console.log("js init");

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(b => {
    b.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC': 
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                    break;
                } catch {
                    display.innerText = 'Error';
                }
            default: 
                display.innerText += e.target.innerText;        
        }
    });
});