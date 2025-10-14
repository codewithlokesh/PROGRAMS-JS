const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit',(ex) =>{
    ex.preventDefault()
    console.log(ex)
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const status = document.querySelector('#status')
    if(height=="" || height < 0 || isNaN(height) )
    {
        result.textContent = "Enter a valid height"
    }
    else if(weight==="" || weight < 0 || isNaN(weight) )
    {
        result.textContent = "Enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.textContent = `${bmi}`

        if(bmi < 18.6){
            status.textContent = "UnderWeight"
        }
        else if(bmi > 18.6 && bmi < 24.9){
            status.textContent = "NormalWeight"
        }
        else{
            status.textContent = "OverWeight need to consult a doctor"
        }
    }
    
})