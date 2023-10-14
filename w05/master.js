var Body = {
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor=color;
  },
  setcolor : function(color){
    document.querySelector('body').style.color= color;
  }
}
var link = {
setcolor : function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length)
     {alist[i].style.color =color;
     i = i + 1;

}
}
}


function nightdayhandler(self){
    var target = document.querySelector('body');
  if(self.value=='night'){
    Body.setBackgroundColor('black');
    Body.setcolor('white');
    link.setcolor('powderblue');
    self.value='day'  
    }
    else{
        Body.setBackgroundColor('white');
        Body.setcolor('black');
        link.setcolor('blue');
    self.value='night'
     }
  }