const form=document.querySelector("form")
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height=parseInt(document.querySelector("#height").value)
  const weight=parseInt(document.querySelector("#weight").value)
  const result=document.querySelector("#results")
  
  if(height==''||height<0||isNaN(height)){
    result.innerHTML="please enter the valid value "
    
    }
  else if(weight==''||weight<0||isNaN(weight)){
    result.innerHTML="please enter the valid value "
    
    }
    else{
      const bmi= (weight/((height*height)/10000)).toFixed(2)
     //show in redult
     
     let bmiCategory ;
     if(bmi<18.6){
         bmiCategory="you are under weight"
      }
      else if(bmi>26.6){
        bmiCategory="you are over weight"
      }
      else{
       bmiCategory="you have perfect bmi"
      }
      result.innerHTML=`<span>${bmi}</span><br><span>${bmiCategory}</span>`;
    }
    
})
