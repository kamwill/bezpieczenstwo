<?PHP
  require_once(__DIR__."/php/myDB.php");

if(!$fgmembersite->CheckLogin())
{
    $fgmembersite->RedirectToURL("index.php");
    exit;
}else{
    $fgmembersite->MakeTransfer();
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
      <title>An Access Controlled Page</title>
      <link rel="STYLESHEET" type="text/css" href="style/fg_membersite.css">
</head>
<body>
<div >
<h2>BANK</h2>
<h3>Przelew został wykonany</h3>
  Nr konta: <p id = "konto" ><?php echo $_POST['KONTO']?></p>
  <br><br>
  Kwota: <?php echo $_POST['KWOTA']?>
  <br><br>
  <a href="./history.php">Historia transakcji</a>



</div>
<script type="text/javascript">

</script>
</body>
</html>
