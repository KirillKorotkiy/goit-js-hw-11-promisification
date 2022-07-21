import Notiflix from 'notiflix';

const refs = {
  formRef: document.querySelector('.form'),
  inputRefAmount: document.querySelector('input[name="amount"]'),
  inputRefStep: document.querySelector('input[name="step"]'),
  inputRefDelay: document.querySelector('input[name="delay"]'),
}

refs.formRef.addEventListener('submit', event =>{
event.preventDefault();
let delay = refs.inputRefDelay.value;
 setTimeout(circlePromises, delay)
})

function circlePromises (){
  let itarations = refs.inputRefAmount.value;
  let step = refs.inputRefStep.value;
  for(let i=1; i <= itarations; i++){
    createPromise(i, step*i)
    .then((result => Notiflix.Notify.success(result)))
    .catch(error => Notiflix.Notify.failure(error))}
}

function createPromise(position, delay) {
  return new Promise ((resolve, reject)=>{
   setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve (`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      reject (`❌ Rejected promise ${position} in ${delay}ms`)
    }
   }, delay);
  })
}

