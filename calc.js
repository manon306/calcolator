const display=document.getElementById("display");
function apendtodisplay(input)
{
    display.value +=input;
}
function cleardisplay(){
    display.value="";
}
function calc()
{
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Eror"
    }
}