alert("Welcome to Jordan");
var userName = prompt("Enter your name please? ");

alert("Welcome " + userName);

var city = prompt("So Mr/Ms " + userName + " which city are you from?");

if (city === "amman") {
  document.write(
    "Amman is the capital and largest city of Jordan and the country's economic, political and cultural centre. With a population of 4,007,526, Amman is the largest city in the Levant region and the sixth-largest city in the Arab world"
  );
  document.write(
    '<img src="https://www.gulfair.com/sites/default/files/AMM_Mar_2020_Contactus.jpg"/>'
  );
} else if (city === "irbid") {
  document.write(
    "Irbid known in ancient times as Arabella or Arbela, is the capital and largest city of the Irbid Governorate. It also has the second largest metropolitan population in Jordan after Amman, with a population of around 1,911,600. [3] Irbid is locayated about 70 kilometres (43 mi) north of Amman on the northern ridge of the Gilead, equidistant from Pella, Beit Ras (Capitolias), and Um Qais, and approximately 20 kilometres (12 mi) south of the Syrian border."
  );
  document.write(
    '<img src="https://book2jordan.com/wp-content/uploads/2019/10/irbid-5.jpg"/>'
  );
} else if (city === "aqaba") {
  document.write(
    " Aqaba is the only coastal city in Jordan and the largest and most populous city on the Gulf of Aqaba.Situated in southernmost Jordan, Aqaba is the administrative centre of the Aqaba Governorate. The city had a population of 148,398 in 2015 and a land area of 375 square kilometres (144.8 sq mi)."
  );
  document.write(
    '<img src="https://igoogledjordan.com/wp-content/uploads/2018/05/Jordan-Aqaba_bs-e1526978847365.jpg"/>'
  );
} else {
  prompt("Please choose either (amman,irbid or aqaba)");
}
alert("Don't forget to visit Jordan,,, Have a nice day");

