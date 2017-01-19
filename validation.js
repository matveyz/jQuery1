$(function(){
	$("form").validate({

  rules: {

    name: {
      required: true,
      minlength: 5,
      maxlength: 30
    },

    email: {
      required: true,
      email: true
    },

    date: "date",
    ip: "ip"
  }

});

jQuery.validator.addMethod("ip", function(value, element) {
return this.optional(element) || /^\d+\.\d+\.\d+\.\d+$/.test(value);
}, 'Please try again, and enter a valid ip adress!');


jQuery.validator.addMethod("date", function(value, element) {
  return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value);
}, 'Please try again, and enter a valid date!'); 

})