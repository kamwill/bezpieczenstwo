var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Mon, 26 Nov 2018 18:43:39 GMT\x0aServer: Apache/2.4.37 (Unix) OpenSSL/1.0.2p PHP/7.2.12 mod_perl/2.0.8-dev Perl/v5.16.3\x0aX-Powered-By: PHP/7.2.12\x0aContent-Range: bytes 0-2096/2097\x0aContent-Length: 2097\x0aKeep-Alive: timeout=5, max=15\x0aConnection: Keep-Alive\x0aContent-Type: text/html; charset=UTF-8\x0a\x0a\x3c!DOCTYPE html PUBLIC \x22-//W3C//DTD XHTML 1.0 Strict//EN\x22  \x22http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\x22\x3e\x0d\x0a\x3chtml xmlns=\x22http://www.w3.org/1999/xhtml\x22 xml:lang=\x22en-US\x22 lang=\x22en-US\x22\x3e\x0d\x0a\x3chead\x3e\x0d\x0a      \x3cmeta http-equiv=\x27Content-Type\x27 content=\x27text/html; charset=utf-8\x27/\x3e\x0d\x0a      \x3ctitle\x3eLogin\x3c/title\x3e\x0d\x0a      \x3clink rel=\x22STYLESHEET\x22 type=\x22text/css\x22 href=\x22style/fg_membersite.css\x22 /\x3e\x0d\x0a      \x3cscript type=\x27text/javascript\x27 src=\x27scripts/gen_validatorv31.js\x27\x3e\x3c/script\x3e\x0d\x0a\x3c/head\x3e\x0d\x0a\x3cbody\x3e\x0d\x0a\x0d\x0a\x3c!-- Form Code Start --\x3e\x0d\x0a\x3cdiv id=\x27fg_membersite\x27\x3e\x0d\x0a\x3cform id=\x27login\x27 action=\x27/bezp_L6/source/login.php/\x27 method=\x27post\x27 accept-charset=\x27UTF-8\x27\x3e\x0d\x0a\x3cfieldset \x3e\x0d\x0a\x3clegend\x3eLogin\x3c/legend\x3e\x0d\x0a\x0d\x0a\x3cinput type=\x27hidden\x27 name=\x27submitted\x27 id=\x27submitted\x27 value=\x271\x27/\x3e\x0d\x0a\x0d\x0a\x3cdiv class=\x27short_explanation\x27\x3e* required fields\x3c/div\x3e\x0d\x0a\x0d\x0a\x3cdiv\x3e\x3cspan class=\x27error\x27\x3eUserName is empty!\x3cbr /\x3e\x0d\x0a\x3c/span\x3e\x3c/div\x3e\x0d\x0a\x3cdiv class=\x27container\x27\x3e\x0d\x0a    \x3clabel for=\x27username\x27 \x3eUserName*:\x3c/label\x3e\x3cbr/\x3e\x0d\x0a    \x3cinput type=\x27text\x27 name=\x27username\x27 id=\x27username\x27 value=\x27\x27 maxlength=\x2250\x22 /\x3e\x3cbr/\x3e\x0d\x0a    \x3cspan id=\x27login_username_errorloc\x27 class=\x27error\x27\x3e\x3c/span\x3e\x0d\x0a\x3c/div\x3e\x0d\x0a\x3cdiv class=\x27container\x27\x3e\x0d\x0a    \x3clabel for=\x27password\x27 \x3ePassword*:\x3c/label\x3e\x3cbr/\x3e\x0d\x0a    \x3cinput type=\x27password\x27 name=\x27password\x27 id=\x27password\x27 maxlength=\x2250\x22 /\x3e\x3cbr/\x3e\x0d\x0a    \x3cspan id=\x27login_password_errorloc\x27 class=\x27error\x27\x3e\x3c/span\x3e\x0d\x0a\x3c/div\x3e\x0d\x0a\x0d\x0a\x3cdiv class=\x27container\x27\x3e\x0d\x0a    \x3cinput type=\x27submit\x27 name=\x27Submit\x27 value=\x27Submit\x27 /\x3e\x0d\x0a\x3c/div\x3e\x0d\x0a\x3cdiv class=\x27short_explanation\x27\x3e\x3ca href=\x27reset-pwd-req.php\x27\x3eForgot Password?\x3c/a\x3e\x3c/div\x3e\x0d\x0a\x3c/fieldset\x3e\x0d\x0a\x3c/form\x3e\x0d\x0a\x3c!-- client-side Form Validations:\x0d\x0aUses the excellent form validation script from JavaScript-coder.com--\x3e\x0d\x0a\x0d\x0a\x3cscript type=\x27text/javascript\x27\x3e\x0d\x0a// \x3c![CDATA[\x0d\x0a\x0d\x0a    var frmvalidator  = new Validator(\x22login\x22);\x0d\x0a    frmvalidator.EnableOnPageErrorDisplay();\x0d\x0a    frmvalidator.EnableMsgsTogether();\x0d\x0a\x0d\x0a    frmvalidator.addValidation(\x22username\x22,\x22req\x22,\x22Please provide your username\x22);\x0d\x0a    \x0d\x0a    frmvalidator.addValidation(\x22password\x22,\x22req\x22,\x22Please provide the password\x22);\x0d\x0a\x0d\x0a// ]]\x3e\x0d\x0a\x3c/script\x3e\x0d\x0a\x3c/div\x3e\x0d\x0a\x3c!--\x0d\x0aForm Code End (see html-form-guide.com for more info.)\x0d\x0a--\x3e\x0d\x0a\x0d\x0a\x3c/body\x3e\x0d\x0a\x3c/html\x3e'}