$(document).ready(function(){
    $('#signInBtn').on('click', function(){
        alert("Wow");
    });
    $('#regBtn').on('click', function(){
        window.location.href = 'registration.html';
    });
    $(".box").on('click', function(){
      var animations = ['crawl', 'dangle', 'jump', 'stretch', 'flip'];
      var box = this;
      var animation = animations[Math.floor(Math.random() * 5)];

      $(box).addClass(animation);

      setTimeout(function() {
            $(box).removeClass(animation);
      }, 4000);
    });
    $('#registration-submit').on('click', function() {
      var email = $('#email').val();

      var formFilled = true;
      if ($('#username').val() == '') {
        formFilled = false;
        $('#username-warning').show();
      }
      if ($('#password').val() == '') {
        formFilled = false;
        $('#password-warning').show();
      }
      if ($('#email').val() == '') {
        formFilled = false;
        $('#email-warning').show();
      }
      if (formFilled) {
        $('.success').show();
      }
    });
});
