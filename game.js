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
    var a = splitInput(' ');
    splitInput.remove(0);
    var inventory ='';
    for(i = 1; i < splitInput.length; i++0{
      inventory = inventory + splitInput[i] + ' ';
    };
    return inventory;
};

var execute = function(inventory){
    var action = inventory[0];
    var object = inventory[1];
    player[action](object);
};  