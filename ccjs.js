$(document).ready(function() {
jQuery.validator.setDefaults({
  debug: false,
  success: "valid"
});

$.validator.addMethod("anyDate",
    function(value, element) {
        return value.match(/^(0?[1-9]|1[012])[/]?\d{2}$/);
    },
    "Please enter a date in given format!"
);
$.validator.addMethod("limitCvv",
    function(value, element) {
        return value.match(/^\d{3}$/);
    },
    "Please enter a valid CVV Number!"
);


$( "#myform" ).validate({
  rules: {
    cardField: {
                required: true,
                creditcard: true
              },
    nameField: {
                required: true
              },
    emailField: {
                required: true,
                email: true
              },
    typeAddress: {
                required: true
              },
    expireField : {
                required: true,
                anyDate : true
              },
    cvvField: {
                required: true,
                limitCvv: true,
    }
  }
});

$(".submit-now").click(function() {
  var fname = $(".full-name").val();
  var space = fname.indexOf(" ");
  if(fname.length > 0){
  if(fname[0] != fname[0].toUpperCase()) {
    alert("First letter of 'NAME' should be capital!!!");
    }
  if(space == -1) {
    alert("Please enter your complete name i.e. name and surname!!!");
  }
  if(space != -1) {
    if(fname[space+1] != fname[space+1].toUpperCase()) {
      alert("First letter of 'SURNAME' should be capital!!!");
      }
    }
  }
  });

  $(function() {
    $("#geocomplete").geocomplete({
      map: ".map_canvas",
      details: "form",
      types: ["geocode", "establishment"],
    });

    $("#find").click(function() {
      $("#geocomplete").trigger("geocode");
    });
  });


});
