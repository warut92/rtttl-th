//convert
function convert() {
	thmtextarea = document.getElementById('thm');
	data = thmtextarea.value;
	i = data.split(":");
	name = i[0];
  note = i[1];

  note = note.replace(/\n/g,'');

	note = note.replace(/\//g,'');

	note = note.replace(/ *\([^)]*\) */g, "");
    //Bb
  note = note.replace(/ทํb-------/g,'1a#6,');
  note = note.replace(/ทํb-----/g,'2a#.6,');
  note = note.replace(/ทํb---/g,'2a#6,');
  note = note.replace(/ทํb--/g,'4a#.6,');
  note = note.replace(/ทํb-/g,'4a#6,');
  note = note.replace(/ทํb/g,'8a#6,');

  note = note.replace(/ทb-------/g,'1a#5,');
  note = note.replace(/ทb-----/g,'2a#.5,');
  note = note.replace(/ทb---/g,'2a#5,');
  note = note.replace(/ทb--/g,'4a#.5,');
  note = note.replace(/ทb-/g,'4a#5,');
  note = note.replace(/ทb/g,'8a#5,');

  note = note.replace(/ทฺb-------/g,'1a#4,');
  note = note.replace(/ทฺb-----/g,'2a#.4,');
  note = note.replace(/ทฺb---/g,'2a#4,');
  note = note.replace(/ทฺb--/g,'4a#.4,');
  note = note.replace(/ทฺb-/g,'4a#4,');
  note = note.replace(/ทฺb/g,'8a#4,');

  note = note.replace(/ทฺ-------/g,'1b4,');
  note = note.replace(/ทฺ-----/g,'2b.4,');
  note = note.replace(/ทฺ---/g,'2b4,');
  note = note.replace(/ทฺ--/g,'4b.4,');
  note = note.replace(/ทฺ-/g,'4b4,');
  note = note.replace(/ทฺ/g,'8b4,');

  note = note.replace(/ทํ-------/g,'1b6,');
  note = note.replace(/ทํ-----/g,'2b.6,');
  note = note.replace(/ทํ---/g,'2b6,');
  note = note.replace(/ทํ--/g,'4b.6,');
  note = note.replace(/ทํ-/g,'4b6,');
  note = note.replace(/ทํ/g,'8b6,');

  note = note.replace(/ท-------/g,'1b5,');
  note = note.replace(/ท-----/g,'2b.5,');
  note = note.replace(/ท---/g,'2b5,');
  note = note.replace(/ท--/g,'4b.5,');
  note = note.replace(/ท-/g,'4b5,');
  note = note.replace(/ท/g,'8b5,');

  note = note.replace(/ลฺ-------/g,'1a4,');
  note = note.replace(/ลฺ-----/g,'2a.4,');
  note = note.replace(/ลฺ---/g,'2a4,');
  note = note.replace(/ลฺ--/g,'4a.4,');
  note = note.replace(/ลฺ-/g,'4a4,');
  note = note.replace(/ลฺ/g,'8a4,');

  note = note.replace(/ลํ-------/g,'1a6,');
  note = note.replace(/ลํ-----/g,'2a.6,');
  note = note.replace(/ลํ---/g,'2a6,');
  note = note.replace(/ลํ--/g,'4a.6,');
  note = note.replace(/ลํ-/g,'4a6,');
  note = note.replace(/ลํ/g,'8a6,');

  note = note.replace(/ล-------/g,'1a5,');
  note = note.replace(/ล-----/g,'2a.5,');
  note = note.replace(/ล---/g,'2a5,');
  note = note.replace(/ล--/g,'4a.5,');
  note = note.replace(/ล-/g,'4a5,');
  note = note.replace(/ล/g,'8a5,');

  note = note.replace(/ซฺ-------/g,'1g4,');
  note = note.replace(/ซฺ-----/g,'2g.4,');
  note = note.replace(/ซฺ---/g,'2g4,');
  note = note.replace(/ซฺ--/g,'4g.4,');
  note = note.replace(/ซฺ-/g,'4g4,');
  note = note.replace(/ซฺ/g,'8g4,');

  note = note.replace(/ซํ-------/g,'1g6,');
  note = note.replace(/ซํ-----/g,'2g.6,');
  note = note.replace(/ซํ---/g,'2g6,');
  note = note.replace(/ซํ--/g,'4g.6,');
  note = note.replace(/ซํ-/g,'4g6,');
  note = note.replace(/ซํ/g,'8g6,');

  note = note.replace(/ซ-------/g,'1g5,');
  note = note.replace(/ซ-----/g,'2g.5,');
  note = note.replace(/ซ---/g,'2g5,');
  note = note.replace(/ซ--/g,'4g.5,');
  note = note.replace(/ซ-/g,'4g5,');
  note = note.replace(/ซ/g,'8g5,');
  //f#
  note = note.replace(/ฟํ#-----/g,'2f#.6,');
  note = note.replace(/ฟํ#---/g,'2f#6,');
  note = note.replace(/ฟํ#--/g,'4f#.6,');
  note = note.replace(/ฟํ#-/g,'4f#6,');
  note = note.replace(/ฟํ#/g,'8f#6,');

  note = note.replace(/ฟ#-------/g,'1f#5,');
  note = note.replace(/ฟ#-----/g,'2f#.5,');
  note = note.replace(/ฟ#---/g,'2f#5,');
  note = note.replace(/ฟ#--/g,'4f#.5,');
  note = note.replace(/ฟ#-/g,'4f#5,');
  note = note.replace(/ฟ#/g,'8f#5,');

  note = note.replace(/ฟํ-------/g,'1f6,');
  note = note.replace(/ฟํ-----/g,'2f.6,');
  note = note.replace(/ฟํ---/g,'2f6,');
  note = note.replace(/ฟํ--/g,'4f.6,');
  note = note.replace(/ฟํ-/g,'4f6,');
  note = note.replace(/ฟํ/g,'8f6,');

  note = note.replace(/ฟ-------/g,'1f5,');
  note = note.replace(/ฟ-----/g,'2f.5,');
  note = note.replace(/ฟ---/g,'2f5,');
  note = note.replace(/ฟ--/g,'4f.5,');
  note = note.replace(/ฟ-/g,'4f5,');
  note = note.replace(/ฟ/g,'8f5,');

  note = note.replace(/มํ-------/g,'1e6,');
  note = note.replace(/มํ-----/g,'2e.6,');
  note = note.replace(/มํ---/g,'2e6,');
  note = note.replace(/มํ--/g,'4e.6,');
  note = note.replace(/มํ-/g,'4e6,');
  note = note.replace(/มํ/g,'8e6,');

  note = note.replace(/ม-------/g,'1e5,'); //8
  note = note.replace(/ม-----/g,'2e.5,'); //6
  note = note.replace(/ม---/g,'2e5,'); //4
  note = note.replace(/ม--/g,'4e.5,'); //3
	note = note.replace(/ม-/g,'4e5,'); //2
  note = note.replace(/ม/g,'8e5,'); //1

  note = note.replace(/รํ-------/g,'1d6,');
  note = note.replace(/รํ-----/g,'2d.6,');
  note = note.replace(/รํ---/g,'2d6,');
  note = note.replace(/รํ--/g,'4d.6,');
  note = note.replace(/รํ-/g,'4d6,');
  note = note.replace(/รํ/g,'8d6,');

  note = note.replace(/ร-------/g,'1d5,');
  note = note.replace(/ร-----/g,'2d.5,');
  note = note.replace(/ร---/g,'2d5,');
  note = note.replace(/ร--/g,'4d.5,');
  note = note.replace(/ร-/g,'4d5,');
  note = note.replace(/ร/g,'8d5,');

  note = note.replace(/ดํ-------/g,'1c6,');
  note = note.replace(/ดํ-----/g,'2c.6,');
  note = note.replace(/ดํ---/g,'2c6,');
  note = note.replace(/ดํ--/g,'4c.6,');
  note = note.replace(/ดํ-/g,'4c6,');
  note = note.replace(/ดํ/g,'8c6,');

  note = note.replace(/ด-------/g,'1c5,');
  note = note.replace(/ด-----/g,'2c.5,');
  note = note.replace(/ด---/g,'2c5,');
  note = note.replace(/ด--/g,'4c.5,');
  note = note.replace(/ด-/g,'4c5,');
  note = note.replace(/ด/g,'8c5,');

  note = note.replace(/--------/g,'1p5,');
  note = note.replace(/------/g,'2p.5,');
  note = note.replace(/----/g,'2p5,');
  note = note.replace(/---/g,'4p.5,');
  note = note.replace(/--/g,'4p5,');
  note = note.replace(/-/g,'8p5,');

  note = note.replace(/xxxxxxxx/g,'1p5,');
  note = note.replace(/xxxxxx/g,'2p.5,');
  note = note.replace(/xxxx/g,'2p5,');
  note = note.replace(/xxx/g,'4p.5,');
  note = note.replace(/xx/g,'4p5,');
  note = note.replace(/x/g,'8p5,');

 document.getElementById('length').innerHTML = note.length;
 console.log("length:",note.length);

 // ลบ str สุดท้าย
	var n = note.slice(0,-1);
  var b = document.getElementById('bpm').value
	var output = name + ":d=4,o=5,b=" + b + ":"+ n;

		// rtttltextarea = document.getElementById('rtttl');
		// rtttltextarea.value = output;
		document.getElementById('rtttl').value = output;
    console.log("RTTTL:",output);
}

function alphabet() {
	var note = document.getElementById('thm').value;
	note = note.replace(/1/g,'ด');
	note = note.replace(/2/g,'ร');
	note = note.replace(/3/g,'ม');
	note = note.replace(/4/g,'ฟ');
	note = note.replace(/5/g,'ซ');
	note = note.replace(/6/g,'ล');
	note = note.replace(/7/g,'ท');
	note = note.replace(/\*/g,'ํ');
	note = note.replace(/\+/g,'ํ');
	note = note.replace(/\./g,'ฺ');

	document.getElementById('thm').value = note;
	// var output = note;
	// result = document.getElementById('thm').innerHTML;
	// result.value = output;
	// console.log(result);
}

function numberal() {
	var thmtext = document.getElementById('thm').value;
	i = thmtext.split(':')
	note = i[1]

	note = note.replace(/ด/g,'1');
	note = note.replace(/ร/g,'2');
	note = note.replace(/ม/g,'3');
	note = note.replace(/ฟ/g,'4');
	note = note.replace(/ซ/g,'5');
	note = note.replace(/ล/g,'6');
	note = note.replace(/ท/g,'7');
	note = note.replace(/ํ/g,'*');
	note = note.replace(/ฺ/g,'.');

	document.getElementById('thm').value = i[0] + ":" + note;
}

function changeMelody() {
	var x = document.getElementById("melody").value;
	document.getElementById("thm").innerHTML = x;
	console.log(x);
}
