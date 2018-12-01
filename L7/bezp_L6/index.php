<?php
  require_once(__DIR__."/php/myDB.php");
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if($fgmembersite->Login_inj()){
        echo "zostałeś zalogowany";
        echo "\nJesteś na stronie:" . urldecode($_SERVER["REQUEST_URI"]);
    }else{
        echo $fgmembersite->GetErrorMessage();
    }
  }
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>Tytul strony</title>
    <meta name="description" content="...">
    <meta name="author" content="...">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>


    <h2>Bank</h2>
    <p><span class="error">* required field</span></p>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      Login: <input type="text" name="LOGIN">
      <br><br>
      Password: <input type="text" name="PASS">
      <br><br>
      <input type="submit" name="submit" value="Submit">
    </form>
    <a href="./reset-pass.php">Resetuj hasło</a>
</body>
</html>
