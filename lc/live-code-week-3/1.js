/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */
​
// Tulis algoritma di sini
1. var 'angka' dari inputan
2. cek jika 'angka' le
​
// Tulis pseudocode di sini
'angka' (input dari user)
IF 'angka' EQUALS TO 1 THEN
  RETURN FALSE
ENDIF
FOR 'i' EQUALS TO 2; 'i' LESS THAN 'angka'; 'i' PLUS PLUS THEN
  IF 'angka' MODULUS 'i' EQUALS TO 0 THEN
    IF 'i' LESS THAN 'angka' THEN
      RETURN FALSE
    ELSE 
      RETURN TRUE
    ENDIF
  ENDIF
ENDFOR