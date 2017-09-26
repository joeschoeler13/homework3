var count = 0

function AddAnimal() {

  var animal = document.getElementById('input1').value;
  var item = "<li>" + animal + "</li>";

  document.getElementById("list1").insertAdjacentHTML('beforeend', item);
  
  count = count + 1;
  var textcount = "Your list is " + count + " item/s long.";
  document.getElementById("list1").insertAdjacentHTML('afterbegin', textcount);
  
  document.getElementById('input1').value = "";
}
