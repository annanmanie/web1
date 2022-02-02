var Links = {
  setColor: function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //  alist[i].style.color = color;
    //  i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor: function (color){
    $('body').css('color', color);
    // document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color){
    $('body').css('backgroundColor', color);
    // document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  if(self.value === 'NIGHT') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.style.color='white';
    self.value = 'DAY';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.style.color='black';
    self.value = 'NIGHT';

    Links.setColor('black');
  }
}

$(document).ready(function()
{
  $('a').hover(function(){
    $(this).css('color', 'red');
  }, function(){
    $(this).css('color', 'black');
  });
});
