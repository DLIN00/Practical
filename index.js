$(function(){
  var MENU=$(".sectionTitle h1");
  MENU.hover(function(){
   $(this).stop(true,false).animate({right:-50},800,"easeOutBounce");
     },function(){$(this).stop(true,false).animate({right:10},1000,"easeOutBack");}
);
});