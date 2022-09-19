//pertambahan
function tambah(){
  //tangkap id form
  var frm = document.getElementById('calcForm');
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = a1 + a2; //rumus
  frm.hasil.value = total; //penempatan hasil
}

if (isNaN(a1) || isNaN(a2)) {
  alert("Harap Masukkan Angka!!");
} else
  var total = a1 + a2; //rumus
     frm.hasil.value = total; //penempatan hasil 

//pengurangan
function kurang(){
  //tangkap id form
  var frm = document.getElementById('calcForm');
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
      alert("Harap masukkan angka!!");
  }    
  else {
     var total = a1 - a2; //rumus
     frm.hasil.value = total; //penempatan hasil 
  } 
  
}

//perkalian
function kali() {
  var frm = document.getElementById('calcForm');
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = a1 * a2; //rumus
  frm.hasil.value = total; //penempatan hasil
}
  

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    var total = a1 * a2;
    frm.hasil.value = total;
  }


//pembagian
function bagi() {
  var frm = document.getElementById('calcForm');
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    var total = a1 / a2;
    frm.hasil.value = total;
  }
}

//perpangkatan
function pangkat() {
  var frm = document.getElementById('calcForm');
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    var total = Math.pow(a1, a2);
    frm.hasil.value = total;
  }
}
