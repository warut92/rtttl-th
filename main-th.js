function song1() {
  var laoKraun = "ลาวครวญ:"+"\n"+"/----/----/-ซ-ม/รดรม/----/-ด-ร/-ด-ม/-รรร/---ซ/-ซซซ/ลซมซ/-ล-ดํ/---ดํ/-ดํดํดํ/-ซ-ม/รด-ร/"
  document.getElementById('thm').innerHTML = laoKraun;
}

function song2() {
  var laoToNok = "ลาวต่อนก:"+"\n"+"/----/----/รมซล/ซม-ซ/----/-ดํ-ล/-ซ-ม/รด-ร/---ม/---ร/---ดํ/มํรํดํล/-ซ-ด/-ร-ม/ซลซม/-ร-ด/"
  document.getElementById('thm').innerHTML = laoToNok;
}

function song3() {
    var laoJoi = "ลาวจ้อย:"+"\n"+"/-ดรม/ซด-ร/-ดรม/ซล-ซ/-มซม/รดรม/รมซม/ซล-ซ/----/รมซล/--ดํล/ซม-ซ/-มรด/-ร-ม/รด-ร/-มรด/"
    document.getElementById('thm').innerHTML = laoJoi;
}

function convert() {
	thmtextarea = document.getElementById('thm');
	data = thmtextarea.value;
	i = data.split(":");
	name = i[0];
  note = i[1];

	note = note.replace(/\//g,'');

	note = note.replace(/ดํ/g,'8c6,');
	note = note.replace(/ล/g,'8a5,');
	note = note.replace(/ซ/g,'8g5,');
	note = note.replace(/ซ-/g,'4g5,');
  note = note.replace(/มํ/g,'8e6,');
	note = note.replace(/ม--/g,'4e5,8e5,');
	note = note.replace(/ม-----/g,'2e5,4e5,');
  note = note.replace(/ม/g,'8e5,');

	note = note.replace(/รํ/g,'8d6,');
	note = note.replace(/ร---/g,'2d5,');
	note = note.replace(/ร-/g,'4d5,');
  note = note.replace(/ร/g,'8d5,');

	note = note.replace(/ด-/g,'4c5,');
	note = note.replace(/ด/g,'8c5,');
	note = note.replace(/-/g,'8p5,');

  note = note.replace(/\n/g,'');

	// console.log(note.length);
  document.getElementById('length').innerHTML = note.length;
 // ลบ str สุดท้าย
	var n = note.slice(0,-1);

	var output = name + ":d=4,o=5,b=100:4p,"+ n;
	console.log(note.length);

		rtttltextarea = document.getElementById('rtttl');
		rtttltextarea.value = output;
}
