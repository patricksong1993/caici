/**
 * Created by Baisheng on 30/06/2016.
 */
$('#timer')
  .progress('complete')
;



function startTimer(duration) {
    var seconds = duration

    var timer = setInterval(function () {

        // display.text(seconds);
        $('#counter').text(seconds);
        $('#timer').progress({
            percent: seconds*100/180
        });

        if (--seconds < 0) {
            $('#correct_no').text(""+correct+"");

            answers = [];
            for (i = 0; i < total; i++) {
                if (wrong_pos.indexOf(i) == -1) {
                    $('<div class="word item"><strike>'+words[i]+'</strike></div>').appendTo('#word_list');
                } else {
                    $('<div class="word item wrong">'+words[i]+'<i class="remove icon"></i></div>').appendTo('#word_list')
                }
            }
            $('#result').show();
            clearInterval(timer);
        }
    }, 1000);
}

var total = 0, correct = 0, wrong_pos = [];

jQuery(function ($) {
    $('#word').text(words[0]);
    var fiveMinutes = 180;
        // display = $('#time');
    startTimer(fiveMinutes);


});

var systime = (new Date()).getTime();

window.addEventListener('deviceorientation', funclis, false);

function funclis(event) {
    if (35>event.gamma && event.gamma>25 && (new Date()).getTime()>this.systime+1000) {
        $('#correct').show();
        $('#correct').fadeOut(600);
        total++;
        correct++;
        $('#word').text(words[total]);
        this.systime = (new Date()).getTime();
    } else if (-25>event.gamma && event.gamma>-35 && (new Date()).getTime()>this.systime+1000) {
        $('#pass').show();
        $('#pass').fadeOut(600);
        wrong_pos.push(total);
        total++;
        $('#word').text(words[total]);
        this.systime = (new Date()).getTime();
    }
}

$('#home').click(function(){
    window.location.href='/';
})

$('#restart').click(function(){
    window.location.reload();
})