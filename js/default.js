for(var i = 1; i < 100; i++){
  var li = document.createElement('li');
  if(i % 3 == 0) && (i % 5 == 0)
    li.textContent = 'FizzBuzz';
  else if(i % 3 == 0){
   return li.textContent = 'Fizz';
  }else if(i % 5 == 0){
   return li.textContent = 'Buzz';
  } else {
   return li.textContent = i + '回数';
  document.getElementById('list').appendChild(li);
}
  
