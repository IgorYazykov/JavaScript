const button = document.getElementById("button_input");
const inputForm = document.getElementById("input");
const targetForm = document.getElementById("target");
let valueInput;
const controlValue = ["h","t","t","p"];
const secondControlValue = ["h","t","t","p","s"];
let finalLink = "";

button.addEventListener('click',function(e){
    valueInput = inputForm.value;
    valueInput =[...valueInput];
    console.log(valueInput);
    for(let i=0; i<5 ; i++){
        if (valueInput[i] == controlValue[i] || valueInput[i] == secondControlValue[i]){
            continue;
        } else {
            valueInput = [...secondControlValue, ...valueInput];
            console.log(valueInput);
            break;
        };
    };
    
    for(let i=0 ; i<valueInput.length ; i++){
        finalLink += valueInput[i]; 
    }

    targetForm.setAttribute("action",`${finalLink}`)

    e.preventDefault();
});

