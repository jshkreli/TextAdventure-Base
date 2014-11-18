var player = function(){
   var newPlayer ={
    name: name,
    items: [],
   };
   newPlayer.pickup = function(item){
     this.items.push(item);
   };
   var report = function(){
     for(i=0; i < this.items.length; i++){
        var inventoryHTML = querySelector('ul');
        return inventoryHTML += this.items[i];
     }
};

var interpret = function(input){
    var str = input.toLowerCase().trim();
    var res = str.split(" ");
    //var a = splitInput(' ');
    //splitInput.remove(0);
    var inventory = [];
    for(i = 1; i < res.length; i++){
      inventory.push(res[i] + ' ');
    };
    return inventory;
};

var execute = function(inventory){
    var action = inventory.splice(0,0);
    var object = inventory;
    //player[action](object);
    var action = function(object){
    };
};  

var report = function(inventory){
    var list = document.getElementById('inventoryList');
    for (var i = 0; i < inventory.length; i++){
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(inventory[i]));
      list.appendChild(li);
    };
};

var gameStep = function(){
    if(event.keyCode === 13){
      var array = interpret(action.value);
      excute(array);
      report(array);
   };
};
