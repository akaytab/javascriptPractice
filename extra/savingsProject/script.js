
const goalAmount = document.getElementById('goal-amount');
const currentSavings=document.getElementById('current-savings');
const monthlyContribution=document.getElementById('monthly-contribution');
const calculateBtn=document.getElementById('calculate-btn');
const progressBar=document.getElementById('progress-bar');
const result=document.getElementById('result')


// console.log("---->",goalAmount.value);

calculateBtn.addEventListener('click',()=>{
    const gAmt=parseFloat(goalAmount.value);
    const cSave=parseFloat(currentSavings.value);
    const mContri=parseFloat(monthlyContribution.value);
    

    if(isNaN(gAmt) || isNaN(cSave) || isNaN(mContri)){
        result.textContent='Please Enter a valid number';
        result.classList.add('show');
        return;
    }
    const remainingAmount=gAmt-cSave;
    const remainingMonths=Math.ceil(remainingAmount/mContri);
    const progressPercent=(cSave/gAmt)*100;
    progressBar.style.width=`${progressPercent}%`;
    result.classList.remove('show');

    setTimeout(()=>{
        if(cSave>=gAmt){
            result.innerHTML=`Congratulation! you have reached your Goal.`
        }else{
            result.innerHTML=`You are ${remainingMonths} months behind yoyr goal`
        }
        result.classList.add('show');
    },100);    
});




