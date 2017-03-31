$().ready(function() {
  
  $("#myform").validate({
    rules: {
      name: "required",
      email: "required",
      username: "required",
      password: "required",
      passwordc: "required",
      birth: "required",
      activity: {
      	required: true
      },
      email: {
      required: true,
      email: true
      },
    },

    messages: {
      name: "<br />Please enter your full name",
      email: "<br />Please enter your email address",
      birth: "<br />Please enter your birthdate",
      username: "<br />Please choose a username",
      password: "<br/>Please choose a password",
      passwordc: "<br/>Please confirm password",


      email: {
        required: "<br/>Please enter your email address",
        email: "<br/>Please enter a valid email address"
      },
    }
  });
});

function myFunction() {
    var x = document.getElementById("myFile");
    x.disabled = true;
}