<html>
 <head><title>Форма обратного звонка с сайта</title></head>
 <script type="text/jаvascript" src="jquery.min.js"></script>
 <body>
 <input type="text" name="fio" placeholder="Имя" required>
 <input type="text" name="tel" placeholder="Телефон" required>
 <div id="form_result"></div>
 <input id="submit" type="submit" value="Заказать звонок">
 <script type="text/jаvascript" src="bootstrap.js"></script>
 <script>
 $("#submit").click(function() {
 var name = $('input[name=fio]').val();
 var tel = $('input[name=tel]').val();
 var otpravka = true;
 if(name==""){
 otpravka = false;
 }
 if(tel==""){
 otpravka = false;
 }
 if(otpravka)
 {

 dannie = {'polz_name':name, 'polz_tel':tel};
 $.post('senda.php', dannie, function(otvet){
 rezultat = '<div style="color:#D80018;">'+otvet.text+'</div>';
 $("#form_result").hide().html(rezultat).slideDown();
 }, 'json');
 }
 });
 </script>
 </body>