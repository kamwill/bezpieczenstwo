<?php
require_once("formvalidator.php");
/*.
  require_module 'standard';
  require_module 'mysqli';
.*/

/**
*  konstruktor połączenia z bazą danych
*  @return void
*/
$fgmembersite = new Banksite();

class portaldb extends mysqli {

  public function __construct() {
    parent::__construct('localhost', 'root', '1234', 'bank');

    if (mysqli_connect_errno() != 0) {
      die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
    }
    parent::query("SET NAMES utf8");
    parent::query("SET CHARACTER SET utf8");
    parent::query("SET collation_connection = utf16_polish_ci");
  }
}


class Banksite{
    var $connection;
    var $table= 'uzytkownicy';
    var $error_message;
    var $rand_key = '0iQx5oBk66oVZep';

    public function __construct() {
        $this->connection = new portaldb();
    }

    function RegisterUser()
    {
        $this->table="uzytkownicy";

        if(!$this->ValidateRegistrationSubmission())
        {
            return false;
        }

        $LOGIN = $_POST["LOGIN"];
        $EMAIL = $_POST["EMAIL"];
        $PASS =  password_hash($_POST["PASS"], PASSWORD_DEFAULT);
        $CPASS = $_POST["CPASS"];

        if($CPASS != $_POST["PASS"]){
            $this->HandleError("failed to confirm password");
            return false;
        }

        if(!$this->IsFieldUnique('email', $EMAIL))
        {
            $this->HandleError("This email is already registered");
            return false;
        }

        if(!$this->IsFieldUnique('login', $LOGIN))
        {
            $this->HandleError("This UserName is already used. Please try another username");
            return false;
        }


        $polecenie = $this->connection->prepare("INSERT INTO uzytkownicy (login, email, haslo) VALUES (?, ?, ?)");

        $polecenie->bind_param("sss", $LOGIN, $EMAIL, $PASS);

        $polecenie->execute();

        $polecenie->close();

        return true;
    }

    function ValidateRegistrationSubmission()
    {

        $validator = new FormValidator();
        $validator->addValidation("LOGIN","req","Please fill in Name");
        $validator->addValidation("EMAIL","email","The input for Email should be a valid email value");
        $validator->addValidation("EMAIL","req","Please fill in Email");
        $validator->addValidation("PASS","req","Please fill in Password");


        if(!$validator->ValidateForm())
        {
            $error='';
            $error_hash = $validator->GetErrors();
            foreach($error_hash as $inpname => $inp_err)
            {
                $error .= $inpname.':'.$inp_err."\n";
            }
            $this->HandleError($error);
            return false;
        }
        return true;
    }

    function IsFieldUnique($fieldname, $field_val)
    {
        $qry = "select * from $this->table where $fieldname='".$field_val."';";
        $result = $this->connection->query($qry);
        if($result && mysqli_num_rows($result) > 0)
        {
            return false;
        }
        return true;
    }

    function HandleError($err)
    {
        $this->error_message .= $err."\r\n";
    }

    function GetErrorMessage()
    {
        if(empty($this->error_message))
        {
            return '';
        }
        $errormsg = nl2br(htmlentities($this->error_message));
        return $errormsg;
    }

    function Login()
    {
        $this->table = 'uzytkownicy';
        if(empty($_POST['LOGIN']))
        {
            $this->HandleError("Login is empty!");
            return false;
        }

        if(empty($_POST['PASS']))
        {
            $this->HandleError("Password is empty!");
            return false;
        }

        $username = trim($_POST['LOGIN']);
        $password = trim($_POST['PASS']);

        if(!isset($_SESSION)){ session_start(); }
        if(!$this->CheckLoginInDB($username,$password))
        {
            return false;
        }

        $_SESSION[$this->GetLoginSessionVar()] = $username;

        return true;
    }

    function Login_inj()
    {
        $this->table = 'uzyt_inj';
        $username = ($_POST['LOGIN']);
        $password = ($_POST['PASS']);


        $qry = "select * from $this->table where login='".$username."' and haslo='".$password."';";
        $result = $this->connection->multi_query($qry);
        $result = $this->connection->store_result();
        $row = $result->fetch_row();

        if(!empty($row))
        {
            echo "You have Logged in successfully" ;
            if(!isset($_SESSION)){ session_start(); }
            $_SESSION[$this->GetLoginSessionVar()] = $username;
            $_SESSION['name_of_user'] = $username;
            return true;
        }
        else
        {
        Echo "Better Luck Next time";
        }




    }

    function CheckLoginInDB($login,$password)
    {

        $qry = "select * from $this->table where login='".$login."';";

        $result = $this->connection->query($qry);
        if($result && mysqli_num_rows($result) > 0){
            $result = mysqli_fetch_array($result);
            $encrypted_password = $result[2];

            if(password_verify ($password , $encrypted_password )){
                $_SESSION['name_of_user']  = $result[0];
                $_SESSION['email_of_user'] = $result[1];

                return true;

            }else{
                $this->HandleError("Error logging in. The username or password does not match");
                return false;
            }
        }

    }

    function GetLoginSessionVar()
    {
        $retvar = md5($this->rand_key);
        $retvar = 'usr_'.substr($retvar,0,10);
        return $retvar;
    }

    function CheckLogin()
    {
         if(!isset($_SESSION)){ session_start(); }

         $sessionvar = $this->GetLoginSessionVar();

         if(empty($_SESSION[$sessionvar]))
         {
            return false;
         }
         return true;
    }

    function CheckAdmin()
    {
         if(!isset($_SESSION)){ session_start(); }


         if($_SESSION['name_of_user'] != 'admin')
         {

            return false;
         }
         return true;
    }

    function RedirectToURL($url)
    {
        header("Location: $url");
        exit;
    }

    function ResetPassword()
    {
        if(empty($_POST['email']))
        {
            $this->HandleError("Email is empty!");
            return false;
        }

        $email = trim($_POST['email']);

        $user_rec;
        if(!$this->GetUserFromEmail($email,$user_rec))
        {
            return false;
        }

        $new_password = substr(uniqid(),0,10);
        $this->ChangePasswordInDB($user_rec, $new_password);
        echo "Nowe hasło: ", $new_password;


        return true;
    }

    function GetUserFromEmail($email,&$user_rec)
    {
        $qry = "select * from $this->table where email='$email';";
        $result = $this->connection->query($qry);

        if(!$result || mysqli_num_rows($result)<= 0)
        {
            $this->HandleError("There is no user with email: $email");
            return false;
        }
        $result = mysqli_fetch_array($result);
        $user_rec = $result[0];
        return true;
    }

    function ChangePasswordInDB($login, $newpwd)
    {
        $hash = password_hash($newpwd, PASSWORD_DEFAULT);

        $qry = "update $this->table set haslo='".$hash."' where login='".$login."';";
        $this->connection->query($qry);

        return true;
    }

    function UserFullName()
    {
        return $_SESSION['name_of_user'];
    }

    function MakeTransfer(){
        $user = $this->UserFullName();
        $konto = $_POST['KONTO'];
        $kwota = $_POST['KWOTA'];

        $polecenie = $this->connection->prepare("INSERT INTO przelewy (login, konto, kwota) VALUES (?, ?, ?)");

        $polecenie->bind_param("ssi", $user, $konto, $kwota);

        $polecenie->execute();

        $polecenie->close();

    }

    function ConfirmTransfer($id){
        $qry = "update przelewy set potw='1' where id='".$id."';";
        $this->connection->query($qry);

    }


}
?>
