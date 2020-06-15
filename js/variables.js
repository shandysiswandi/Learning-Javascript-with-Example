/*****************************************************************
 * Copyright (c) shandysiswandi. All rights reserved. MIT License.
 *****************************************************************/

/**
 *  Semua `variable` JavaScript harus diidentifikasi(identified) dengan nama yang unik.
 *  Nama-nama unik ini disebut pengidentifikasi(identifiers).
 */

/**
 * Pengidentifikasi dapat berupa nama pendek (seperti x dan y)
 * Tapi lebih bagus dan disarankan menggunakan nama yang lebih deskriptif (seperti usia, jumlah, nama).
 */

/**
 * Lebih bagus lagi menggunakan bahasa inggris, karena:
 *
 * 1. untuk alasan propesional
 * 2. sekaligus belajar bahasa inggris
 * 3. hampir semua yang berhubungan dengan komputer ada bahasa inggris nya.
 */

/**
 * Aturan umum untuk membuat nama untuk variable (pengidentifikasi unik) adalah:
 *
 * 1. Nama variable dapat berisi huruf, angka, garis bawah (_), dan tanda dolar ($).
 * 2. Nama variable harus dimulai dengan huruf.
 * 3. Nama variable juga dapat dimulai dengan $ dan _ (karena dalam JavaScript $ dan _ dianggap huruf)
 * 4. Semua nama variable adalah case-sensitive (yang berarti x dan X itu berbeda)
 * 5. `Reserved words` (seperti kata kunci var, do, dll) tidak dapat digunakan sebagai nama variable
 * - untuk melihat lengkap daftar `Reserved words` cek link berikut: https://mathiasbynens.be/notes/reserved-keywords
 */

// contoh penulisan variable
// cara 1: deklarasi sekaligus menetapkan nilai
var name = "sandy"; // sebenarnya bisa menggunkan '' atau "" untuk nilai yang bertipe text

var age = 30; // penulisan angka

var phi = 3.14; // penulisan double

var isGood = true; // penulisan boolean

// cara 2: deklarasi dulu, isi kemudian
var x, y, z; // variable disini akan bernilai `undefined`

x = 1; // lalu disini `undefined` berganti jadi number
y = "y"; // lalu disini `undefined` berganti jadi text
z = 1.2; // lalu disini `undefined` berganti jadi double

// cara 3: kita dapat mendeklarasikan banyak variable dalam satu pernyataan. Mulai pernyataan dengan `var` dan pisahkan variabel dengan koma(,):
var person = "John Doe",
  carName = "Volvo",
  price = 200;
