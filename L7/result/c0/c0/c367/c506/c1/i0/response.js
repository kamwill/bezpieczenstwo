var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Mon, 26 Nov 2018 18:37:15 GMT\x0aServer: Apache/2.4.37 (Unix) OpenSSL/1.0.2p PHP/7.2.12 mod_perl/2.0.8-dev Perl/v5.16.3\x0aLast-Modified: Thu, 11 Sep 2014 12:49:48 GMT\x0aETag: \x221a6c-502c99a8a7300\x22\x0aAccept-Ranges: bytes\x0aContent-Length: 6764\x0aContent-Range: bytes 0-6763/6764\x0aKeep-Alive: timeout=5, max=25\x0aConnection: Keep-Alive\x0aContent-Type: application/x-javascript\x0a\x0a/* \x0d\x0a*\x0d\x0a* Password Widget 1.0\x0d\x0a*\x0d\x0a* This script is distributed under the GNU Lesser General Public License.\x0d\x0a* Read the entire license text here: http://www.gnu.org/licenses/lgpl.html\x0d\x0a*\x0d\x0a* Copyright (C) 2009 HTML Form Guide \x0d\x0a* http://www.html-form-guide.com/\x0d\x0a*/\x0d\x0a\x0d\x0afunction PasswordWidget(divid,pwdname)\x0d\x0a{\x0d\x0a\x09this.maindivobj = document.getElementById(divid);\x0d\x0a\x09this.pwdobjname = pwdname;\x0d\x0a\x0d\x0a\x09this.MakePWDWidget=_MakePWDWidget;\x0d\x0a\x0d\x0a\x09this.showing_pwd=1;\x0d\x0a\x09this.txtShow = \x27Show\x27;\x0d\x0a\x09this.txtMask = \x27Mask\x27;\x0d\x0a\x09this.txtGenerate = \x27Generate\x27;\x0d\x0a\x09this.txtWeak=\x27weak\x27;\x0d\x0a\x09this.txtMedium=\x27medium\x27;\x0d\x0a\x09this.txtGood=\x27good\x27;\x0d\x0a\x0d\x0a\x09this.enableShowMask=true;\x0d\x0a\x09this.enableGenerate=true;\x0d\x0a\x09this.enableShowStrength=true;\x0d\x0a\x09this.enableShowStrengthStr=true;\x0d\x0a\x0d\x0a}\x0d\x0a\x0d\x0afunction _MakePWDWidget()\x0d\x0a{\x0d\x0a\x09var code=\x22\x22;\x0d\x0a    var pwdname = this.pwdobjname;\x0d\x0a\x0d\x0a\x09this.pwdfieldid = pwdname+\x22_id\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cinput type=\x27password\x27 class=\x27pwdfield\x27 name=\x27\x22+pwdname+\x22\x27 id=\x27\x22+this.pwdfieldid+\x22\x27\x3e\x22;\x0d\x0a\x0d\x0a\x09this.pwdtxtfield=pwdname+\x22_text\x22;\x0d\x0a\x0d\x0a\x09this.pwdtxtfieldid = this.pwdtxtfield+\x22_id\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cinput type=\x27text\x27 class=\x27pwdfield\x27 name=\x27\x22+this.pwdtxtfield+\x22\x27 id=\x27\x22+this.pwdtxtfieldid+\x22\x27 style=\x27display: none;\x27\x3e\x22;\x0d\x0a\x0d\x0a\x09this.pwdshowdiv = pwdname+\x22_showdiv\x22;\x0d\x0a\x0d\x0a\x09this.pwdshow_anch = pwdname + \x22_show_anch\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cdiv class=\x27pwdopsdiv\x27 id=\x27\x22+this.pwdshowdiv+\x22\x27\x3e\x3ca href=\x27#\x27 id=\x27\x22+this.pwdshow_anch+\x22\x27\x3e\x22+this.txtShow+\x22\x3c/a\x3e\x3c/div\x3e\x22;\x0d\x0a\x0d\x0a\x09this.pwdgendiv = pwdname+\x22_gendiv\x22;\x0d\x0a\x0d\x0a\x09this.pwdgenerate_anch = pwdname + \x22_gen_anch\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cdiv class=\x27pwdopsdiv\x27id=\x27\x22+this.pwdgendiv+\x22\x27\x3e\x3ca href=\x27#\x27 id=\x27\x22+this.pwdgenerate_anch+\x22\x27\x3e\x22+this.txtGenerate+\x22\x3c/a\x3e\x3c/div\x3e\x22;\x0d\x0a\x0d\x0a\x09this.pwdstrengthdiv = pwdname + \x22_strength_div\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cdiv class=\x27pwdstrength\x27 id=\x27\x22+this.pwdstrengthdiv+\x22\x27\x3e\x22;\x0d\x0a\x0d\x0a\x09this.pwdstrengthbar = pwdname + \x22_strength_bar\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cdiv class=\x27pwdstrengthbar\x27 id=\x27\x22+this.pwdstrengthbar+\x22\x27\x3e\x3c/div\x3e\x22;\x0d\x0a\x0d\x0a\x09this.pwdstrengthstr = pwdname + \x22_strength_str\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3cdiv class=\x27pwdstrengthstr\x27 id=\x27\x22+this.pwdstrengthstr+\x22\x27\x3e\x3c/div\x3e\x22;\x0d\x0a\x0d\x0a\x09code += \x22\x3c/div\x3e\x22;\x0d\x0a\x0d\x0a\x09this.maindivobj.innerHTML = code;\x0d\x0a\x0d\x0a\x09this.pwdfieldobj = document.getElementById(this.pwdfieldid);\x0d\x0a\x09\x0d\x0a\x09this.pwdfieldobj.pwdwidget=this;\x0d\x0a\x0d\x0a\x09this.pwdstrengthbar_obj = document.getElementById(this.pwdstrengthbar);\x0d\x0a\x09\x0d\x0a\x09this.pwdstrengthstr_obj = document.getElementById(this.pwdstrengthstr);\x0d\x0a\x0d\x0a\x09this._showPasswordStrength = passwordStrength;\x0d\x0a\x0d\x0a\x09this.pwdfieldobj.onkeyup=function(){ this.pwdwidget._onKeyUpPwdFields(); }\x0d\x0a\x0d\x0a\x09this._showGeneatedPwd = showGeneatedPwd;\x0d\x0a\x0d\x0a\x09this.generate_anch_obj = document.getElementById(this.pwdgenerate_anch);\x0d\x0a\x09\x0d\x0a\x09this.generate_anch_obj.pwdwidget=this;\x0d\x0a\x0d\x0a\x09this.generate_anch_obj.onclick = function(){ this.pwdwidget._showGeneatedPwd(); }\x0d\x0a\x0d\x0a\x09this._showpwdchars = showpwdchars;\x0d\x0a\x0d\x0a\x09this.show_anch_obj = document.getElementById(this.pwdshow_anch);\x0d\x0a\x0d\x0a\x09this.show_anch_obj.pwdwidget = this;\x0d\x0a\x0d\x0a\x09this.show_anch_obj.onclick = function(){ this.pwdwidget._showpwdchars();}\x0d\x0a\x0d\x0a\x09this.pwdtxtfield_obj = document.getElementById(this.pwdtxtfieldid);\x0d\x0a\x0d\x0a\x09this.pwdtxtfield_obj.pwdwidget=this;\x0d\x0a\x0d\x0a\x09this.pwdtxtfield_obj.onkeyup=function(){ this.pwdwidget._onKeyUpPwdFields(); }\x0d\x0a\x09\x0d\x0a\x0d\x0a\x09this._updatePwdFieldValues = updatePwdFieldValues;\x0d\x0a\x0d\x0a\x09this._onKeyUpPwdFields=onKeyUpPwdFields;\x0d\x0a\x0d\x0a\x09if(!this.enableShowMask)\x0d\x0a\x09{ document.getElementById(this.pwdshowdiv).style.display=\x27none\x27;}\x0d\x0a\x0d\x0a\x09if(!this.enableGenerate)\x0d\x0a\x09{ document.getElementById(this.pwdgendiv).style.display=\x27none\x27;}\x0d\x0a\x0d\x0a\x09if(!this.enableShowStrength)\x0d\x0a\x09{ document.getElementById(this.pwdstrengthdiv).style.display=\x27none\x27;}\x0d\x0a\x0d\x0a\x09if(!this.enableShowStrengthStr)\x0d\x0a\x09{ document.getElementById(this.pwdstrengthstr).style.display=\x27none\x27;}\x0d\x0a}\x0d\x0a\x0d\x0afunction onKeyUpPwdFields()\x0d\x0a{\x0d\x0a\x09this._updatePwdFieldValues(); \x0d\x0a\x09this._showPasswordStrength();\x0d\x0a}\x0d\x0a\x0d\x0afunction updatePwdFieldValues()\x0d\x0a{\x0d\x0a\x09if(1 == this.showing_pwd)\x0d\x0a\x09{\x0d\x0a\x09\x09this.pwdtxtfield_obj.value = this.pwdfieldobj.value;\x09\x0d\x0a\x09}\x0d\x0a\x09else\x0d\x0a\x09{\x0d\x0a\x09\x09this.pwdfieldobj.value = this.pwdtxtfield_obj.value;\x0d\x0a\x09}\x0d\x0a}\x0d\x0a\x0d\x0afunction showpwdchars()\x0d\x0a{\x0d\x0a\x09var innerText=\x27\x27;\x0d\x0a\x09var pwdfield = this.pwdfieldobj;\x0d\x0a\x09var pwdtxt = this.pwdtxtfield_obj;\x0d\x0a\x09var field;\x0d\x0a\x09if(1 == this.showing_pwd)\x0d\x0a\x09{\x0d\x0a\x09\x09this.showing_pwd=0;\x0d\x0a\x09\x09innerText = this.txtMask;\x0d\x0a\x0d\x0a\x09\x09pwdtxt.value = pwdfield.value;\x0d\x0a\x09\x09pwdfield.style.display=\x27none\x27;\x0d\x0a\x09\x09pwdtxt.style.display=\x27\x27;\x0d\x0a\x09\x09pwdtxt.focus();\x0d\x0a\x09}\x0d\x0a\x09else\x0d\x0a\x09{\x0d\x0a\x09\x09this.showing_pwd=1;\x0d\x0a\x09\x09innerText = this.txtShow;\x09\x0d\x0a\x09\x09pwdfield.value = pwdtxt.value;\x0d\x0a\x09\x09pwdtxt.style.display=\x27none\x27;\x0d\x0a\x09\x09pwdfield.style.display=\x27\x27;\x0d\x0a\x09\x09pwdfield.focus();\x0d\x0a\x09\x09\x09\x0d\x0a\x09}\x0d\x0a\x09this.show_anch_obj.innerHTML = innerText;\x0d\x0a\x0d\x0a}\x0d\x0a\x0d\x0afunction passwordStrength()\x0d\x0a{\x0d\x0a\x09var colors = new Array();\x0d\x0a\x09colors[0] = \x22#cccccc\x22;\x0d\x0a\x09colors[1] = \x22#ff0000\x22;\x0d\x0a\x09colors[2] = \x22#ff5f5f\x22;\x0d\x0a\x09colors[3] = \x22#56e500\x22;\x0d\x0a\x09colors[4] = \x22#4dcd00\x22;\x0d\x0a\x09colors[5] = \x22#399800\x22;\x0d\x0a\x0d\x0a\x09var pwdfield = this.pwdfieldobj;\x0d\x0a\x09var password = pwdfield.value\x0d\x0a\x0d\x0a\x09var score   = 0;\x0d\x0a\x0d\x0a\x09if (password.length \x3e 6) {score++;}\x0d\x0a\x0d\x0a\x09if ( ( password.match(/[a-z]/) ) && \x0d\x0a\x09     ( password.match(/[A-Z]/) ) ) {score++;}\x0d\x0a\x0d\x0a\x09if (password.match(/\x5cd+/)){ score++;}\x0d\x0a\x0d\x0a\x09if ( password.match(/[^a-z\x5cd]+/) )\x09{score++};\x0d\x0a\x0d\x0a\x09if (password.length \x3e 12){ score++;}\x0d\x0a\x09\x0d\x0a\x09var color=colors[score];\x0d\x0a\x09var strengthdiv = this.pwdstrengthbar_obj;\x0d\x0a\x09\x0d\x0a\x09strengthdiv.style.background=colors[score];\x0d\x0a\x09\x0d\x0a\x09if (password.length \x3c= 0)\x0d\x0a\x09{ \x0d\x0a\x09\x09strengthdiv.style.width=0; \x0d\x0a\x09}\x0d\x0a\x09else\x0d\x0a\x09{\x0d\x0a\x09\x09strengthdiv.style.width=(score+1)*10+\x27px\x27;\x0d\x0a\x09}\x0d\x0a\x0d\x0a\x09var desc=\x27\x27;\x0d\x0a\x09if(password.length \x3c 1){desc=\x27\x27;}\x0d\x0a\x09else if(score\x3c3){ desc = this.txtWeak; }\x0d\x0a\x09else if(score\x3c4){ desc = this.txtMedium; }\x0d\x0a\x09else if(score\x3e=4){ desc= this.txtGood; }\x0d\x0a\x0d\x0a\x09var strengthstrdiv = this.pwdstrengthstr_obj;\x0d\x0a\x09strengthstrdiv.innerHTML = desc;\x0d\x0a}\x0d\x0a\x0d\x0afunction getRand(max) \x0d\x0a{\x0d\x0a\x09return (Math.floor(Math.random() * max));\x0d\x0a}\x0d\x0a\x0d\x0afunction shuffleString(mystr)\x0d\x0a{\x0d\x0a\x09var arrPwd=mystr.split(\x27\x27);\x0d\x0a\x0d\x0a\x09for(i=0;i\x3c mystr.length;i++)\x0d\x0a\x09{\x0d\x0a\x09\x09var r1= i;\x0d\x0a\x09\x09var r2=getRand(mystr.length);\x0d\x0a\x0d\x0a\x09\x09var tmp = arrPwd[r1];\x0d\x0a\x09\x09arrPwd[r1] = arrPwd[r2];\x0d\x0a\x09\x09arrPwd[r2] = tmp;\x0d\x0a\x09}\x0d\x0a\x0d\x0a\x09return arrPwd.join(\x22\x22);\x0d\x0a}\x0d\x0a\x0d\x0afunction showGeneatedPwd()\x0d\x0a{\x0d\x0a\x09var pwd = generatePWD();\x0d\x0a\x09this.pwdfieldobj.value= pwd;\x0d\x0a\x09this.pwdtxtfield_obj.value =pwd;\x0d\x0a\x0d\x0a\x09this._showPasswordStrength();\x0d\x0a}\x0d\x0a\x0d\x0afunction generatePWD()\x0d\x0a{\x0d\x0a    var maxAlpha = 26;\x0d\x0a\x09var strSymbols=\x22~!@#$%^&*(){}?\x3e\x3c`=-|][\x22;\x0d\x0a\x09var password=\x27\x27;\x0d\x0a\x09for(i=0;i\x3c3;i++)\x0d\x0a\x09{\x0d\x0a\x09\x09password += String.fromCharCode(\x22a\x22.charCodeAt(0) + getRand(maxAlpha));\x0d\x0a\x09}\x0d\x0a\x09for(i=0;i\x3c3;i++)\x0d\x0a\x09{\x0d\x0a\x09\x09password += String.fromCharCode(\x22A\x22.charCodeAt(0) + getRand(maxAlpha));\x0d\x0a\x09}\x0d\x0a\x09for(i=0;i\x3c3;i++)\x0d\x0a\x09{\x0d\x0a\x09\x09password += String.fromCharCode(\x220\x22.charCodeAt(0) + getRand(10));\x0d\x0a\x09}\x0d\x0a\x09for(i=0;i\x3c4;i++)\x0d\x0a\x09{\x0d\x0a\x09\x09password += strSymbols.charAt(getRand(strSymbols.length));\x0d\x0a\x09}\x0d\x0a\x0d\x0a\x09password = shuffleString(password);\x0d\x0a\x09password = shuffleString(password);\x0d\x0a\x09password = shuffleString(password);\x0d\x0a\x0d\x0a\x09return password;\x0d\x0a}\x0d\x0a\x09\x09pa1'}