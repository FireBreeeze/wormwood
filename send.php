<?php
// несколько получателей
$to  = 'brize2021@bk.ru' . ', ';  // обратите внимание на запятую
$to .= 'brize2021@bk.ru';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Иван <brize2021@bk.ru>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>

<!-- 

<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("brize2021@bk.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: info@polintrava.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>

ini_set('display_errors','On');
error_reporting('E_ALL'); -->

<!-- 
<?php
 if($_POST)
 {
 $to_Email = "example@mail.ru";
 $subject = 'Запрос обратного звонка '.$_POST["polz_name"];

 if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

 $otvet_serv = json_encode(
 array(
 'text' => 'Возникла ошибка при отправке данных'
 ));

 die($otvet_serv);
 }

 if(!isset($_POST["polz_name"]) || !isset($_POST["polz_tel"]))
 {
 $otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
 die($otvet_serv);
 }

 $user_Name = filter_var($_POST["polz_name"], FILTER_SANITIZE_STRING);
 $user_Phone = filter_var($_POST["polz_tel"], FILTER_SANITIZE_STRING);

 if(strlen($user_Name)<3)
 {
 $otvet_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
 die($otvet_serv);
 }
 if(!is_numeric($user_Phone))
 {
 $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
 die($otvet_serv);
 }

 $message = "Имя: ".$user_Name.". Телефон: ".$user_Phone;

 if(!mail($to_Email, $subject, $message, "From: info@webriz.ru \r\n"))
 {
 $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
 die($otvet_serv);
 }else{
 $otvet_serv = json_encode(array('text' => 'Спасибо! '.$user_Name .', ваше сообщение отправлено.'));
 die($otvet_serv);
 }
 }
 ?> -->