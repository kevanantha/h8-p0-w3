var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(input) {
  // ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input.splice(5, 1, 'Pria', 'SMA Internasional Metro');
  console.log(input);

  // Mei
  var inputSplit = ('0' + input[3].split('/')[1]).slice(-2);
  switch (inputSplit) {
    case '01':
      inputSplit = 'Januari';
      break;
    case '02':
      inputSplit = 'Februari';
      break;
    case '03':
      inputSplit = 'Maret';
      break;
    case '04':
      inputSplit = 'April';
      break;
    case '05':
      inputSplit = 'Mei';
      break;
    case '06':
      inputSplit = 'Juni';
      break;
    case '07':
      inputSplit = 'Juli';
      break;
    case '08':
      inputSplit = 'Agustus';
      break;
    case '09':
      inputSplit = 'September';
      break;
    case '10':
      inputSplit = 'Oktober';
      break;
    case '11':
      inputSplit = 'November';
      break;
    case '12':
      inputSplit = 'Desember';
      break;
    default:
      inputSplit = 'Bulan Invalid';
  }
  console.log(inputSplit);

  // ["1989", "21", "05"]
  console.log(
    input[3].split('/').sort(function(a, b) {
      return b - a;
    })
  );

  // 21-05-1989
  console.log(input[3].split('/').join('-'));

  // Roman Alamsyah
  console.log(input[1].slice(0, 15));
}

dataHandling2(input);
