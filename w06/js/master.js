var Body = {
  setBackgroundColor : function(color){
    $('body').css('background-color', color);
    // document.querySelector('body').style.backgroundColor=color;
  },
  setcolor : function(color){
    $('body').css('color', color);
    // document.querySelector('body').style.color= color;
  }
}
var link = {
setcolor : function(color){
  $('a').css('color', color)
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length)
    //  {alist[i].style.color =color;
    //  i = i + 1;

// }
}
}


function nightdayhandler(self){
    var target = document.querySelector('body');
  if(self.value=='night'){
    Body.setBackgroundColor('rgb(8, 27, 114)');
    Body.setcolor('white');
    link.setcolor('powderblue');
    self.value='day'  
    }
    else{
        Body.setBackgroundColor('white');
        Body.setcolor('black');
        link.setcolor('pink');
    self.value='night'
     }
  }