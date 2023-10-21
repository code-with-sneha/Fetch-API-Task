const form=document.getElementById('login');
const email=document.getElementById('userEmail');
const password=document.getElementById('password');
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const emailVal=userEmail.value.trim();
    const passwordVal=password.value.trim();
    let success=true

    if(emailVal===''){
        success=false;
        setError(userEmail,'Email is required')
    }else{
        setSuccess(userEmail)
    }

    if(passwordVal===''){
        success=false;
        setError(password,'Password is required')
    }else if(passwordVal.length<8){
        success=false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (userEmail) => {
    return String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };