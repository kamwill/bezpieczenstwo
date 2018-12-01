<?php
  require_once(__DIR__."/php/myDB.php");
  //$_SESSION[$sessionKEY] = $sessionVAL;

  // define variables and set to empty values
  $nameErr = $emailErr = "";
  $name = $email = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if($fgmembersite->RegisterUser()){
        echo "zostałeś zarejestrowany";
    }else{
        echo $fgmembersite->GetErrorMessage();
    }
  }

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
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
      Login: <input type="text" name="LOGIN" value="<?php echo $name;?>">
      <span class="error">* <?php echo $nameErr;?></span>
      <br><br>
      E-mail: <input type="text" name="EMAIL" value="<?php echo $email;?>">
      <span class="error">* <?php echo $emailErr;?></span>
      <br><br>
      Password: <input type="text" name="PASS" value="<?php echo $name;?>">
      <span class="error">* <?php echo $nameErr;?></span>
      Confirm Password: <input type="text" name="CPASS" value="<?php echo $name;?>">

      <br><br>
      <input type="submit" name="submit" value="Submit">
    </form>
</body>
</html>
