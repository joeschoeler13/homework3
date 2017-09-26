var count = 0

function AddAnimal() {

  var animal = document.getElementById('input1').value;
  var item = "<li>" + animal + "</li>";

  document.getElementById("list1").insertAdjacentHTML('beforeend', item);
  document.getElementById('input1').value = "";

  count = count + 1;
  document.getElementById('span1').innerHTML = count
}
