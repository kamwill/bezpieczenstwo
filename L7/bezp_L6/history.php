<?PHP
  require_once(__DIR__."/php/myDB.php");

if(!$fgmembersite->CheckLogin())
{
    $fgmembersite->RedirectToURL("index.php");
    exit;
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
    </tr>

    <?php
      $TMPL = "<tr>\n<td>{{DATA}}</td>\n<td>{{KONTO}}</td>\n<td>{{KWOTA}}</td>\n<td>{{POTW}}</td></tr>\n\n";
      $login = $fgmembersite->UserFullName();
      $query    = "select * from przelewy where login='".$login."' order by data DESC;";
      $result   = $fgmembersite->connection->query($query);

      while (($row = $result -> fetch_assoc()) !== null) {
        $kopiaTMPL = $TMPL;
        $s= str_replace(
          ["{{DATA}}", "{{KONTO}}", "{{KWOTA}}", "{{POTW}}"],
          [$row['data'],$row['konto'],$row['kwota'], $row['potw']],
          $kopiaTMPL);
        echo $s;
      }
      $result->close();


    ?>
    </table>

</div>
</body>
</html>
