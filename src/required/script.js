$(document).ready(function () {
  
  /////////////////////////////////////////////////////////////////////////////////////////////
  //TESTAREN LOGIkA ////////////////////////////////////////////////////////////////



  $('.answer-checkbox').click(function () {
    var group = $(this).data('group');
    var correctAnswer = $(this).data('correct-answer');
    if ($(this).prop('checked')) {
      $('.answer-checkbox[data-group="' + group + '"]').not(this).prop('disabled', true);
    } else {
      $('.answer-checkbox[data-group="' + group + '"]').prop('disabled', false);
    }
    // Comprobar si la respuesta seleccionada es correcta
    if ($(this).val() === correctAnswer && $(this).prop('checked')) {
      $('.answer-checkbox[data-group="' + group + '"]').not(this).prop('checked', false);
    }
  });

  $('.testBidali').click(function (e) {
    var correctCount = 0;
    $('.answers').each(function () {
      var $checkedCheckbox = $(this).find('.answer-checkbox:checked');
      if ($checkedCheckbox.length > 0) {
        var selectedAnswer = $checkedCheckbox.val();
        var correctAnswer = $checkedCheckbox.data('correct-answer');
        if (selectedAnswer === correctAnswer) {
          correctCount++;
        }
      }
    });
    alert("Erantzun zuzenak " + correctCount);
    

   

      location.reload();
    });
});