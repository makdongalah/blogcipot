function updateme(){

var a=document.getElementById("tbl1").innerHTML;
var k='https://movieright.us/play.php?movie='+a;
var c=document.getElementById("tbl2").innerHTML;
var c2=c.replace(c,'<center><a href="https://movielot.us/play.php?movie='+a+'" title="Download Now"  target="_blank"  id="ke"><img src="http://4.bp.blogspot.com/-MVfO3Jc-NSg/U7C1Y_btgCI/AAAAAAAAAPM/8k_3ZKMiI6o/s1600/download-hd.png" style="cursor:pointer;" alt="Watch Now" /></a></center>');
document.getElementById("tbl2").innerHTML=c2;
var e=document.getElementById("backdrop").innerHTML;
var e2=e.replace(e,'<img src="http://img.movielot.us/backdrop.php?img='+a+'" width="560" height="auto" />');
document.getElementById("backdrop").innerHTML=e2;
var s=document.getElementById("pst").innerHTML;
var s2=s.replace(s,'<img src="http://img.movielot.us/poster.php?img='+a+'" width="200" height="300" />');
document.getElementById("pst").innerHTML=s2;
var a2=a.replace(a,'<br /><center><a href="javascript:void()" title="Watch Now" id="tuju2" onclick="noti()" target="_blank"><img src="http://2.bp.blogspot.com/-D8I6lMViCL4/U7C1fHM5MOI/AAAAAAAAAPU/Uisua7fLIKY/s1600/watch-hd.png" style="cursor:pointer;"/></a></center>');
document.getElementById("tbl1").innerHTML=a2;
}

function noti(){
var ur = document.getElementById("ke").href;
document.getElementById("tuju1").href = ur;
document.getElementById("tuju2").href = ur;
}

window.setTimeout(updateme,500)
