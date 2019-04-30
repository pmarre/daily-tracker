$('document').ready(function(){
    let ob_goal = $('#js_user_outbound_goal').val();
    let screen_goal = $('#js_user_screen_goal').val();
    let goal_submit = $('#js_submit_goals');
    
    let select_submit = $('#js_submit_btn');
    
    goal_submit.click(function(e){
        console.log(ob_goal + ' test');
        let ob_goal_num = parseInt(ob_goal);
        let screen_num = parseInt(screen_goal);
        $('#js_outbound_goal').text(ob_goal);
        $('#js_screen_goal').text(screen_goal);
    });

    select_submit.click(function(e){
        let ob = 0;
        let screens = 0;
      
        console.log($('call_select').val());
        if ($('call_select').val() === 'outbound') {
            console.log('outbound');
            ob += 1;
            $('outbound_total').text(ob);
        } else if ($('call_select').val() === 'screen') {
            console.log('screen');
            screens += 1;
            $('outbound_total').text(screens);
        } else {
            alert('fail');
        }
    });
});

$('document').ready(function(){
    
    let select_submit = $('#js_submit_btn');

    select_submit.click(function(e){
        let ob = 0;
        let screens = 0;
      
        console.log($('call_select').val());
        if ($('call_select').val() === 'outbound') {
            console.log('outbound');
            ob += 1;
            $('outbound_total').text(ob);
        } else if ($('call_select').val() === 'screen') {
            console.log('screen');
            screens += 1;
            $('outbound_total').text(screens);
        } else {
            alert('fail');
        }
    });
});