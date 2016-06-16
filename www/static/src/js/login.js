var $ = require('jquery');
$(function(){
  $('.btnSub').on('click',function(){
    $.post('/user/login',$('#formpost').serialize(),function(data){
      if(data.code==200){
        window.location.reload()
      }else{
        alert(data.msg)
      }
    })
  })
})
