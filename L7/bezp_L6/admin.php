<?PHP
  require_once(__DIR__."/php/myDB.php");

if(!$fgmembersite->CheckAdmin())
{
    $fgmembersite->RedirectToURL("index.php");
    exit;
}

if(isset($_POST['submit']))
{
    echo 'Przelew został potwierdzony';
    $fgmembersite->ConfirmTransfer($_POST['ID');
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
    <a href="./transfer.php"> Wykonaj przelew</a>
    <table>
    <tr>
      <th>Data</th>
      <th>Konto</th>
      <th>Kwota</th>
      <th>Potwierdzony</th>
    </tr>

    <?php
      $TMPL = "<tr>\n<td>{{ID}}</td>\n<td>{{DATA}}</td>\n<td>{{KONTO}}</td>\n<td>{{KWOTA}}</td>\n<td>{{POTW}}</td></tr>\n\n";

      $query    = "select * from przelewy order by id DESC;";
      $result   = $fgmembersite->connection->query($query);

      while (($row = $result -> fetch_assoc()) !== null) {
        $kopiaTMPL = $TMPL;
        $s= str_replace(
          ["{{ID}}","{{DATA}}", "{{KONTO}}", "{{KWOTA}}", "{{POTW}}"],
          [$row['id'],$row['data'],$row['konto'],$row['kwota'], $row['potw']],
          $kopiaTMPL);
        echo $s;
      }
      $result->close();

    ?>
    </table>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      Id przelewu: <input type="text" name="ID">
      <br><br>
      <input type="submit" name="submit" value="Submit">
    </form>

</div>
</body>
</html>
