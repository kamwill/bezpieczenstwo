var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Mon, 26 Nov 2018 18:37:16 GMT\x0aServer: Apache/2.4.37 (Unix) OpenSSL/1.0.2p PHP/7.2.12 mod_perl/2.0.8-dev Perl/v5.16.3\x0aX-Powered-By: PHP/7.2.12\x0aContent-Range: bytes 0-578/579\x0aContent-Length: 579\x0aKeep-Alive: timeout=5, max=27\x0aConnection: Keep-Alive\x0aContent-Type: text/html; charset=UTF-8\x0a\x0a\x3cbr /\x3e\x0a\x3cb\x3eFatal error\x3c/b\x3e:  Uncaught Error: Call to undefined function mysql_connect() in /opt/lampp/htdocs/bezp_L6/source/include/fg_membersite.php:773\x0aStack trace:\x0a#0 /opt/lampp/htdocs/bezp_L6/source/include/fg_membersite.php(405): FGMembersite-&gt;DBLogin()\x0a#1 /opt/lampp/htdocs/bezp_L6/source/include/fg_membersite.php(109): FGMembersite-&gt;UpdateDBRecForConfirmation(Array)\x0a#2 /opt/lampp/htdocs/bezp_L6/source/confirmreg.php(6): FGMembersite-&gt;ConfirmUser()\x0a#3 {main}\x0a  thrown in \x3cb\x3e/opt/lampp/htdocs/bezp_L6/source/include/fg_membersite.php\x3c/b\x3e on line \x3cb\x3e773\x3c/b\x3e\x3cbr /\x3e\x0a22\xb3\xd2'}