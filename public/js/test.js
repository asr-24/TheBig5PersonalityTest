let numberOfOptionsChosen = 0
let value;

$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    console.log(typeof this);
    if ($(this).prop("checked") == true) {
      numberOfOptionsChosen++;

      if (numberOfOptionsChosen > 1) {
        $("form").trigger("reset");
        numberOfOptionsChosen = 0;
      }
      console.log($(this).val());
      $(this).attr("name", $(this).val());
    }
  });
  $('body').keydown(function(event) {
    let key = event.key;
    if (key === '1') {
      checkNow();
      $('input[type="checkbox"].one').prop('checked', true);
      checkNow();
      $('input[type="checkbox"].one').attr("name","one");
    } else if (key === '2') {
      checkNow();
      $('input[type="checkbox"].two').prop('checked', true);
      checkNow();
      $('input[type="checkbox"].two').attr("name","two");
    } else if (key === '3') {
      checkNow();
      $('input[type="checkbox"].three').prop('checked', true);
      checkNow();
      $('input[type="checkbox"].three').attr("name","three");
    } else if (key === '4') {
      checkNow();
      $('input[type="checkbox"].four').prop('checked', true);
      checkNow();
      $('input[type="checkbox"].four').attr("name","four");
    } else if (key === '5') {
      checkNow();
      $('input[type="checkbox"].five').prop('checked', true);
      checkNow();
      $('input[type="checkbox"].five').attr("name","five");
    }
  });
  $('body').keydown(function(event){
    if (event.key==='Enter'){
      $('#imp').click();
    }
  });

});

function checkNow() {
  if ($('input[type="checkbox"].one').prop("checked") == true) {
    numberOfOptionsChosen++;
  }
  if ($('input[type="checkbox"].two').prop("checked") == true) {
    numberOfOptionsChosen++;
  }
  if ($('input[type="checkbox"].three').prop("checked") == true) {
    numberOfOptionsChosen++;
  }
  if ($('input[type="checkbox"].four').prop("checked") == true) {
    numberOfOptionsChosen++;
  }
  if ($('input[type="checkbox"].five').prop("checked") == true) {
    numberOfOptionsChosen++;
  }

  if (numberOfOptionsChosen > 1) {
    $("form").trigger("reset");
    numberOfOptionsChosen = 0;
  }
}
