        AOS.init();
$(document).on('click','.send_form', function(){
    var input_blanter = document.getElementById('wa_email');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6281348858608',
        walink2 = 'Halo saya ingin ',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }

    if("" != input_blanter.value){

        /* Call Input Form */
        var input_name1 = $("#nama").val(),
            input_email1 = $("#email").val(),
            input_sub1 = $("#pesan").val(),
            input_textarea1 = $("#wa_textarea").val();

        /* Final Whatsapp URL */
        var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
            '*Name* : ' + input_name1 + '%0A' +
            '*Email Address* : ' + input_email1 + '%0A' +
            '*Subject* : ' + input_sub1 + '%0A' +
            '*Description* : ' + input_textarea1 + '%0A';

        /* Whatsapp Window Open */
        window.open(blanter_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
        document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
});