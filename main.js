//ฟังก์ชันแปลงตัวโน้ตไทยเป็น rtttl
let splitedNote = ""
function convert() {
  thmtextarea = document.getElementById('thm');
  data = thmtextarea.value;
  // console.log(data);
  i = data.split(":");
  name = i[0];
  beat = name.split("(");
  // console.log('BEAT', beat)
  splitedBeat = beat[1]
  //หากไม่ได้กำหนดไว้ จะตั้งค่าปริยายไว้ 100
  if (splitedBeat === undefined) {
    splitedBeat = "100 "
  }
  splitedBeat = splitedBeat.slice(0, -1)
  // console.log('SPLITEDBEAT', splitedBeat)

  pureNote = i[1];

  //split เพื่อการเลือกเล่นเสียงเฉพาะที่
  splitedNote = pureNote.split(">");
  note = splitedNote[1];
  if (splitedNote[1] === undefined) {
    note = pureNote
  }
  //การแปลงโน้ต
  note = note.replace(/\n/g, '');

  note = note.replace(/\//g, '');

  //ลบ string ที่อยู่ในวงเล็บ คือเราจะไม่แปลงอะไรในวงเล็บ ก็เลยต้องลบทิ้งเสีย
  note = note.replace(/ *\([^)]*\) */g, "");
  //Bb
  note = note.replace(/ทํb-------/g, '1a#6,');
  note = note.replace(/ทํb-----/g, '2a#.6,');
  note = note.replace(/ทํb---/g, '2a#6,');
  note = note.replace(/ทํb--/g, '4a#.6,');
  note = note.replace(/ทํb-/g, '4a#6,');
  note = note.replace(/ทํb/g, '8a#6,');

  note = note.replace(/ทb-------/g, '1a#5,');
  note = note.replace(/ทb-----/g, '2a#.5,');
  note = note.replace(/ทb---/g, '2a#5,');
  note = note.replace(/ทb--/g, '4a#.5,');
  note = note.replace(/ทb-/g, '4a#5,');
  note = note.replace(/ทb/g, '8a#5,');

  note = note.replace(/ทฺb-------/g, '1a#4,');
  note = note.replace(/ทฺb-----/g, '2a#.4,');
  note = note.replace(/ทฺb---/g, '2a#4,');
  note = note.replace(/ทฺb--/g, '4a#.4,');
  note = note.replace(/ทฺb-/g, '4a#4,');
  note = note.replace(/ทฺb/g, '8a#4,');

  note = note.replace(/ทฺ-------/g, '1b4,');
  note = note.replace(/ทฺ-----/g, '2b.4,');
  note = note.replace(/ทฺ---/g, '2b4,');
  note = note.replace(/ทฺ--/g, '4b.4,');
  note = note.replace(/ทฺ-/g, '4b4,');
  note = note.replace(/ทฺ/g, '8b4,');

  note = note.replace(/ทํ-------/g, '1b6,');
  note = note.replace(/ทํ-----/g, '2b.6,');
  note = note.replace(/ทํ---/g, '2b6,');
  note = note.replace(/ทํ--/g, '4b.6,');
  note = note.replace(/ทํ-/g, '4b6,');
  note = note.replace(/ทํ/g, '8b6,');

  note = note.replace(/ท-------/g, '1b5,');
  note = note.replace(/ท-----/g, '2b.5,');
  note = note.replace(/ท---/g, '2b5,');
  note = note.replace(/ท--/g, '4b.5,');
  note = note.replace(/ท-/g, '4b5,');
  note = note.replace(/ท/g, '8b5,');

  note = note.replace(/ลฺ-------/g, '1a4,');
  note = note.replace(/ลฺ-----/g, '2a.4,');
  note = note.replace(/ลฺ---/g, '2a4,');
  note = note.replace(/ลฺ--/g, '4a.4,');
  note = note.replace(/ลฺ-/g, '4a4,');
  note = note.replace(/ลฺ/g, '8a4,');

  note = note.replace(/ลํ-------/g, '1a6,');
  note = note.replace(/ลํ-----/g, '2a.6,');
  note = note.replace(/ลํ---/g, '2a6,');
  note = note.replace(/ลํ--/g, '4a.6,');
  note = note.replace(/ลํ-/g, '4a6,');
  note = note.replace(/ลํ/g, '8a6,');

  note = note.replace(/ล-------/g, '1a5,');
  note = note.replace(/ล-----/g, '2a.5,');
  note = note.replace(/ล---/g, '2a5,');
  note = note.replace(/ล--/g, '4a.5,');
  note = note.replace(/ล-/g, '4a5,');
  note = note.replace(/ล/g, '8a5,');
  //G#
  note = note.replace(/ซฺ#-------/g, '1g#4,');
  note = note.replace(/ซฺ#-----/g, '2g#.4,');
  note = note.replace(/ซฺ#---/g, '2g4#,');
  note = note.replace(/ซฺ#--/g, '4g#.4,');
  note = note.replace(/ซฺ#-/g, '4g#4,');
  note = note.replace(/ซฺ#/g, '8g#4,');

  note = note.replace(/ซํ#-------/g, '1g#6,');
  note = note.replace(/ซํ#-----/g, '2g#.6,');
  note = note.replace(/ซํ#---/g, '2g#6,');
  note = note.replace(/ซํ#--/g, '4g#.6,');
  note = note.replace(/ซํ#-/g, '4g#6,');
  note = note.replace(/ซํ#/g, '8g#6,');

  note = note.replace(/ซ#-------/g, '1g#5,');
  note = note.replace(/ซ#-----/g, '2g#.5,');
  note = note.replace(/ซ#---/g, '2g#5,');
  note = note.replace(/ซ#--/g, '4g#.5,');
  note = note.replace(/ซ#-/g, '4g#5,');
  note = note.replace(/ซ#/g, '8g#5,');
  //G
  note = note.replace(/ซฺ-------/g, '1g4,');
  note = note.replace(/ซฺ-----/g, '2g.4,');
  note = note.replace(/ซฺ---/g, '2g4,');
  note = note.replace(/ซฺ--/g, '4g.4,');
  note = note.replace(/ซฺ-/g, '4g4,');
  note = note.replace(/ซฺ/g, '8g4,');

  note = note.replace(/ซํ-------/g, '1g6,');
  note = note.replace(/ซํ-----/g, '2g.6,');
  note = note.replace(/ซํ---/g, '2g6,');
  note = note.replace(/ซํ--/g, '4g.6,');
  note = note.replace(/ซํ-/g, '4g6,');
  note = note.replace(/ซํ/g, '8g6,');

  note = note.replace(/ซ-------/g, '1g5,');
  note = note.replace(/ซ-----/g, '2g.5,');
  note = note.replace(/ซ---/g, '2g5,');
  note = note.replace(/ซ--/g, '4g.5,');
  note = note.replace(/ซ-/g, '4g5,');
  note = note.replace(/ซ/g, '8g5,');
  //f#
  note = note.replace(/ฟํ#-----/g, '2f#.6,');
  note = note.replace(/ฟํ#---/g, '2f#6,');
  note = note.replace(/ฟํ#--/g, '4f#.6,');
  note = note.replace(/ฟํ#-/g, '4f#6,');
  note = note.replace(/ฟํ#/g, '8f#6,');

  note = note.replace(/ฟ#-------/g, '1f#5,');
  note = note.replace(/ฟ#-----/g, '2f#.5,');
  note = note.replace(/ฟ#---/g, '2f#5,');
  note = note.replace(/ฟ#--/g, '4f#.5,');
  note = note.replace(/ฟ#-/g, '4f#5,');
  note = note.replace(/ฟ#/g, '8f#5,');

  note = note.replace(/ฟํ-------/g, '1f6,');
  note = note.replace(/ฟํ-----/g, '2f.6,');
  note = note.replace(/ฟํ---/g, '2f6,');
  note = note.replace(/ฟํ--/g, '4f.6,');
  note = note.replace(/ฟํ-/g, '4f6,');
  note = note.replace(/ฟํ/g, '8f6,');

  note = note.replace(/ฟ-------/g, '1f5,');
  note = note.replace(/ฟ-----/g, '2f.5,');
  note = note.replace(/ฟ---/g, '2f5,');
  note = note.replace(/ฟ--/g, '4f.5,');
  note = note.replace(/ฟ-/g, '4f5,');
  note = note.replace(/ฟ/g, '8f5,');

  note = note.replace(/มํ-------/g, '1e6,');
  note = note.replace(/มํ-----/g, '2e.6,');
  note = note.replace(/มํ---/g, '2e6,');
  note = note.replace(/มํ--/g, '4e.6,');
  note = note.replace(/มํ-/g, '4e6,');
  note = note.replace(/มํ/g, '8e6,');

  note = note.replace(/ม-------/g, '1e5,'); //8
  note = note.replace(/ม-----/g, '2e.5,'); //6
  note = note.replace(/ม---/g, '2e5,'); //4
  note = note.replace(/ม--/g, '4e.5,'); //3
  note = note.replace(/ม-/g, '4e5,'); //2
  note = note.replace(/ม/g, '8e5,'); //1
  //D#
  note = note.replace(/รํ#-------/g, '1d#6,');
  note = note.replace(/รํ#-----/g, '2d#.6,');
  note = note.replace(/รํ#---/g, '2d#6,');
  note = note.replace(/รํ#--/g, '4d#.6,');
  note = note.replace(/รํ#-/g, '4d#6,');
  note = note.replace(/รํ#/g, '8d#6,');

  note = note.replace(/ร#-------/g, '1d#5,');
  note = note.replace(/ร#-----/g, '2d#.5,');
  note = note.replace(/ร#---/g, '2d#5,');
  note = note.replace(/ร#--/g, '4d#.5,');
  note = note.replace(/ร#-/g, '4d#5,');
  note = note.replace(/ร#/g, '8d#5,');
  //D
  note = note.replace(/รํ-------/g, '1d6,');
  note = note.replace(/รํ-----/g, '2d.6,');
  note = note.replace(/รํ---/g, '2d6,');
  note = note.replace(/รํ--/g, '4d.6,');
  note = note.replace(/รํ-/g, '4d6,');
  note = note.replace(/รํ/g, '8d6,');

  note = note.replace(/ร-------/g, '1d5,');
  note = note.replace(/ร-----/g, '2d.5,');
  note = note.replace(/ร---/g, '2d5,');
  note = note.replace(/ร--/g, '4d.5,');
  note = note.replace(/ร-/g, '4d5,');
  note = note.replace(/ร/g, '8d5,');
  //C#
  note = note.replace(/ดํ#-------/g, '1c#6,');
  note = note.replace(/ดํ#-----/g, '2c#.6,');
  note = note.replace(/ด#ํ---/g, '2c#6,');
  note = note.replace(/ดํ#--/g, '4c#.6,');
  note = note.replace(/ดํ#-/g, '4c#6,');
  note = note.replace(/ดํ#/g, '8c#6,');

  note = note.replace(/ด#-------/g, '1c#5,');
  note = note.replace(/ด#-----/g, '2c#.5,');
  note = note.replace(/ด#---/g, '2c#5,');
  note = note.replace(/ด#--/g, '4c#.5,');
  note = note.replace(/ด#-/g, '4c#5,');
  note = note.replace(/ด#/g, '8c#5,');
  //C
  note = note.replace(/ดํ-------/g, '1c6,');
  note = note.replace(/ดํ-----/g, '2c.6,');
  note = note.replace(/ดํ---/g, '2c6,');
  note = note.replace(/ดํ--/g, '4c.6,');
  note = note.replace(/ดํ-/g, '4c6,');
  note = note.replace(/ดํ/g, '8c6,');

  note = note.replace(/ด-------/g, '1c5,');
  note = note.replace(/ด-----/g, '2c.5,');
  note = note.replace(/ด---/g, '2c5,');
  note = note.replace(/ด--/g, '4c.5,');
  note = note.replace(/ด-/g, '4c5,');
  note = note.replace(/ด/g, '8c5,');

  note = note.replace(/--------/g, '1p5,');
  note = note.replace(/------/g, '2p.5,');
  note = note.replace(/----/g, '2p5,');
  note = note.replace(/---/g, '4p.5,');
  note = note.replace(/--/g, '4p5,');
  note = note.replace(/-/g, '8p5,');

  note = note.replace(/xxxxxxxx/g, '1p5,');
  note = note.replace(/xxxxxx/g, '2p.5,');
  note = note.replace(/xxxx/g, '2p5,');
  note = note.replace(/xxx/g, '4p.5,');
  note = note.replace(/xx/g, '4p5,');
  note = note.replace(/x/g, '8p5,');


  // document.getElementById('length').innerHTML = note.length;
  // console.log("length:", note.length);

  // ลบ string สุดท้าย
  var n = note.slice(0, -1);

  //ดึงค่า splitedBeat นำมาใส่
  var output = name + ":d=8,o=5,b=" + splitedBeat + ":" + n;
  document.getElementById('rtttl').value = output;

  function positionOnNote() {
    splitedNote //โน้ตที่จะนำมาเล่น มาเป็นอาร์เรย์ 0, 1
    console.log('SPLITEDNOTE', splitedNote)
    //ตรวจสอบความยาวของข้อมูลอาร์เรย์โน้ต
    let index = ""
    if (splitedNote.length === 1) {
      index = 0
    } else {
      index = 1
    }
    let noteForPlay = splitedNote[index] // เอาเฉพาะ 1
    noteForPlay = noteForPlay.split("") // นำมาทำให้เป็นอาร์เรย์ทุกตัว
    console.log('NOTEFORPLAY', noteForPlay)

    let slash = "/"
    //หา index ของสัญลักษณ์ /
    let filterSigns = noteForPlay.filter(sign => sign == slash)
    console.log('FILTERSIGNS', filterSigns)

    let indexsOfSign = [];
    noteForPlay.filter(function(elem, index, array) {
      if(elem === slash) {
        indexsOfSign.push(index);
        console.log('INDEXSOFSIGN.PUSH(INDEX)', indexsOfSign)
        console.log(index);
        }
      })
      noteForPlay[1]
      console.log('NOTEFORPLAY[1]', noteForPlay[1])
  }
positionOnNote()

}

//ฟังก์ชันแปลงตัวเลขเป็นตัวโน้ตไทย
function alphabet() {
  var thmtext = document.getElementById('thm').value;
  i = thmtext.split(':')
  note = i[1]

  note = note.replace(/1/g, 'ด');
  note = note.replace(/2/g, 'ร');
  note = note.replace(/3/g, 'ม');
  note = note.replace(/4/g, 'ฟ');
  note = note.replace(/5/g, 'ซ');
  note = note.replace(/6/g, 'ล');
  note = note.replace(/7/g, 'ท');
  note = note.replace(/\*/g, 'ํ');
  note = note.replace(/\+/g, 'ํ');
  note = note.replace(/\./g, 'ฺ');

  document.getElementById('thm').value = i[0] + ":" + note;
}

//ฟังก์ชันสลับการแสดงผลตัวหนังสือของฟังก์ชันแปลงตัวเลขเป็นตัวโน้ตไทยและกลับกัน
function changeText() {
  if (document.getElementById("btn1").textContent === "1234") {
    document.getElementById("btn1").textContent = "ดรมฟ";
    alphabet();
  } else {
    document.getElementById("btn1").textContent = "1234";
    numberal();
  }
}

//ฟังก์ชันแปลงตัวโน้ตไทยเป็นตัวเลข
function numberal() {
  var thmtext = document.getElementById('thm').value;
  i = thmtext.split(':')
  note = i[1]
  //regex ไม่แปลงสตริงใด ๆ ในเครื่องหมาย ()
  // note = note.replace(/ *\([^)]*\) */g, /(\w*)/);

  note = note.replace(/ด/g, '1');
  note = note.replace(/ร/g, '2');
  note = note.replace(/ม/g, '3');
  note = note.replace(/ฟ/g, '4');
  note = note.replace(/ซ/g, '5');
  note = note.replace(/ล/g, '6');
  note = note.replace(/ท/g, '7');
  note = note.replace(/ํ/g, '*');
  note = note.replace(/ฺ/g, '.');

  document.getElementById('thm').value = i[0] + ":" + note;
}

function changeMelody() {
  var x = document.getElementById("melody").value;
  document.getElementById("thm").value = x;
}

//ฟังก์ชันอ่านไฟล์โน้ต
//Read file https://www.w3docs.com/learn-javascript/file-and-filereader.html
function readFile(input) {
  let file = input.files[0];
  let fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = function() {
    document.getElementById("thm").value = fileReader.result;
  };
  fileReader.onerror = function() {
    alert(fileReader.error);
  };
}
//Save file https://stackoverflow.com/a/30740104
function saveTextAsFile() {
  var textToWrite = document.getElementById("thm").value;
  var textFileAsBlob = new Blob([textToWrite], {
    type: "text/plain"
  });
  var splitedText = textToWrite.split(":");
  nameAndBPM = splitedText[0];
  onlyName = nameAndBPM.split("(")
  var fileNameToSaveAs = onlyName[0] + ".txt";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}
// var button = document.getElementById("save");
// button.addEventListener("onclick", saveTextAsFile);
