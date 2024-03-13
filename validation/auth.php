<?php
  $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

  $pass = md5($pass."fgmdljikyh65");

  $mysql = new mysqli('localhost', 'root', '', 'register-bd');
  
  $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$pass'");
  $user = $result->fetch_assoc();
  if(count($user) == 0) {
    echo "Такой пользователь не найден";
    exit();
  }

  setcookie('user', $user['user'], time() + 3600, "/");

  $mysql->close();

  header('Location: /index.html')
?>