 $(document).ready(function() {

 $(".hide").hide(); //Initially form wil be hidden.
 $(".field input").keyup(function() {

        var empty = false;
        $(".field input").each(function() {
            if ($(this).val().length == 4) {
                go = true;
            }
        });

        if (go) {
            $(".hide").show('slow');
			//$(".field input").hide('slow');
        } else {
            $(".actions input").removeAttr("disabled");
        }
    });

  
});