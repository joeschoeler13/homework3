function AddAnimal() {
    
      var animal = document.getElementById('input1').value;
      var item = "<li>" + animal + "</li>";
    
      document.getElementById("list1").insertAdjacentHTML('beforeend', item);
    
      document.getElementById('input1').value = "";
}
