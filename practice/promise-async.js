const myPromise = new Promise((resolve, reject) => {
  if(true) {
    setTimeout(() => {
      resolve('I have resolved');
    }, 1000);
  } else {
    reject('I have rejected.');
  }
});

myPromise 
  .then(value => value + '!!!')
  .then(newValue => newValue + ' YOLO!')
  .then(newValue2 => newValue2 + 'woohoo')
  .then(newValue3 => console.log(newValue3 + ' Ferrari F80 Tributo for me!'))
  .catch(rejectValue => console.log(rejectValue));


// a fetch is a Promise

