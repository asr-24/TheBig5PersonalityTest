let numberOfOptionsChosen = 0
let value;

$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                numberOfOptionsChosen++;

                if(numberOfOptionsChosen>1){
                  $("form").trigger("reset");
                  numberOfOptionsChosen=0;
                }
                console.log($(this).val());
                $(this).attr("name",$(this).val());
            }
      });
});
