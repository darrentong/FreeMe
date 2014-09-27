
/** instructor indexes **/
db.getCollection("instructor").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** instructor records **/
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700293"),
  "department": "Mathematics",
  "email": "info@edupal.co",
  "firstName": "Mr.",
  "fullName": "Mr. Instructor",
  "lastName": "Instructor",
  "photoUrl": "\/edupal\/static\/images\/lock_thumb.jpg",
  "refId": NumberLong(10000),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700294"),
  "department": "Africana Studies",
  "email": "kwaansa@umbc.edu",
  "firstName": "Kwame",
  "fullName": "Kwame Ansah-Brew",
  "lastName": "Ansah-Brew",
  "photoUrl": "https:\/\/edupal.co\/images\/KwameAnsah-Brew.jpg",
  "refId": NumberLong(1),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700295"),
  "department": "Africana Studies",
  "email": "lbadru@umbc.edu",
  "firstName": "Lateef",
  "fullName": "Lateef Badru",
  "lastName": "Badru",
  "photoUrl": "https:\/\/edupal.co\/images\/LateefBadru.jpg",
  "refId": NumberLong(2),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700296"),
  "department": "Africana Studies",
  "email": "chuku@umbc.edu",
  "firstName": "Gloria",
  "fullName": "Gloria Chuku",
  "lastName": "Chuku",
  "photoUrl": "https:\/\/edupal.co\/images\/GloriaChuku.jpg",
  "refId": NumberLong(3),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700297"),
  "department": "Africana Studies",
  "email": "xu61256@umbc.edu",
  "firstName": "Tammy",
  "fullName": "Tammy Henderson",
  "lastName": "Henderson",
  "photoUrl": "https:\/\/edupal.co\/images\/TammyHenderson.jpg",
  "refId": NumberLong(4),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700298"),
  "department": "Africana Studies",
  "email": "tkingmea@umbc.edu",
  "firstName": "Tyson",
  "fullName": "Tyson King-Meadows",
  "lastName": "King-Meadows",
  "photoUrl": "https:\/\/edupal.co\/images\/TysonKing-Meadows.jpg",
  "refId": NumberLong(5),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab33153700299"),
  "department": "Africana Studies",
  "email": "kmack@umbc.edu",
  "firstName": "Dr KV",
  "fullName": "Dr KV Mack-Shelton",
  "lastName": "Mack-Shelton",
  "photoUrl": "https:\/\/edupal.co\/images\/DrKVMack-Shelton.jpg",
  "refId": NumberLong(6),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab3315370029a"),
  "department": "Africana Studies",
  "email": "trobinso@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Robinson",
  "lastName": "Robinson",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasRobinson.jpg",
  "refId": NumberLong(7),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab3315370029b"),
  "department": "American Studies",
  "email": "tbhalla@umbc.edu",
  "firstName": "Tamara",
  "fullName": "Tamara Bhalla",
  "lastName": "Bhalla",
  "photoUrl": "https:\/\/edupal.co\/images\/TamaraBhalla.jpg",
  "refId": NumberLong(8),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab3315370029c"),
  "department": "American Studies",
  "email": "kbryan@umbc.edu",
  "firstName": "Kathy",
  "fullName": "Kathy Bryan",
  "lastName": "Bryan",
  "photoUrl": "https:\/\/edupal.co\/images\/KathyBryan.jpg",
  "refId": NumberLong(9),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946a975ab3315370029d"),
  "department": "American Studies",
  "email": "theo@umbc.edu",
  "firstName": "Theodore",
  "fullName": "Theodore Gonzalves",
  "lastName": "Gonzalves",
  "photoUrl": "https:\/\/edupal.co\/images\/TheodoreGonzalves.jpg",
  "refId": NumberLong(10),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab3315370029e"),
  "department": "American Studies",
  "email": "hummel1@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Hummel",
  "lastName": "Hummel",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelHummel.jpg",
  "refId": NumberLong(11),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab3315370029f"),
  "department": "American Studies",
  "email": "nking@umbc.edu",
  "firstName": "(Paula) Nicole",
  "fullName": "(Paula) Nicole King",
  "lastName": "King",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulaNicoleKing.jpg",
  "refId": NumberLong(12),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a0"),
  "department": "American Studies",
  "email": "kmoffitt@umbc.edu",
  "firstName": "Kimberly",
  "fullName": "Kimberly Moffitt",
  "lastName": "Moffitt",
  "photoUrl": "https:\/\/edupal.co\/images\/KimberlyMoffitt.jpg",
  "refId": NumberLong(13),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a1"),
  "department": "American Studies",
  "email": "cmuller@umbc.edu",
  "firstName": "Christine",
  "fullName": "Christine Muller",
  "lastName": "Muller",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristineMuller.jpg",
  "refId": NumberLong(14),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a2"),
  "department": "American Studies",
  "email": "ms@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Stefano",
  "lastName": "Stefano",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleStefano.jpg",
  "refId": NumberLong(15),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a3"),
  "department": "American Studies",
  "email": "dataylor@umbc.edu",
  "firstName": "Dabrina",
  "fullName": "Dabrina Taylor",
  "lastName": "Taylor",
  "photoUrl": "https:\/\/edupal.co\/images\/DabrinaTaylor.jpg",
  "refId": NumberLong(16),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a4"),
  "department": "Ancient Studies",
  "email": "dooley@umbc.edu",
  "firstName": "Daniel",
  "fullName": "Daniel Dooley",
  "lastName": "Dooley",
  "photoUrl": "https:\/\/edupal.co\/images\/DanielDooley.jpg",
  "refId": NumberLong(17),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a7"),
  "department": "Ancient Studies",
  "email": "masonrs@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Mason",
  "lastName": "Mason",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardMason.jpg",
  "refId": NumberLong(20),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a5"),
  "department": "Ancient Studies",
  "email": "goldberg@umbc.edu",
  "firstName": "Marilyn",
  "fullName": "Marilyn Goldberg",
  "lastName": "Goldberg",
  "photoUrl": "https:\/\/edupal.co\/images\/MarilynGoldberg.jpg",
  "refId": NumberLong(18),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a6"),
  "department": "Ancient Studies",
  "email": "koehler@umbc.edu",
  "firstName": "Carolyn",
  "fullName": "Carolyn Koehler",
  "lastName": "Koehler",
  "photoUrl": "https:\/\/edupal.co\/images\/CarolynKoehler.jpg",
  "refId": NumberLong(19),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a8"),
  "department": "Ancient Studies",
  "email": "aipeters@umbc.edu",
  "firstName": "Anna",
  "fullName": "Anna Peterson",
  "lastName": "Peterson",
  "photoUrl": "https:\/\/edupal.co\/images\/AnnaPeterson.jpg",
  "refId": NumberLong(21),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002a9"),
  "department": "Ancient Studies",
  "email": "tphin@umbc.edu",
  "firstName": "Timothy",
  "fullName": "Timothy Phin",
  "lastName": "Phin",
  "photoUrl": "https:\/\/edupal.co\/images\/TimothyPhin.jpg",
  "refId": NumberLong(22),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002aa"),
  "department": "Ancient Studies",
  "email": "eread@umbc.edu",
  "firstName": "Esther",
  "fullName": "Esther Read",
  "lastName": "Read",
  "photoUrl": "https:\/\/edupal.co\/images\/EstherRead.jpg",
  "refId": NumberLong(23),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002ab"),
  "department": "Anthropology",
  "email": "schard@umbc.edu",
  "firstName": "Sarah",
  "fullName": "Sarah Chard",
  "lastName": "Chard",
  "photoUrl": "https:\/\/edupal.co\/images\/SarahChard.jpg",
  "refId": NumberLong(24),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002ac"),
  "department": "Psychology",
  "email": "brodsky@umbc.edu",
  "firstName": "Anne",
  "fullName": "Anne Brodsky",
  "lastName": "Brodsky",
  "photoUrl": "https:\/\/edupal.co\/images\/AnneBrodsky.jpg",
  "refId": NumberLong(25),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002ad"),
  "department": "Arts, Humaniites and Social Sciences",
  "email": "edomin2@umbc.edu",
  "firstName": "Eva",
  "fullName": "Eva Dominguez",
  "lastName": "Dominguez",
  "photoUrl": "https:\/\/edupal.co\/images\/EvaDominguez.jpg",
  "refId": NumberLong(26),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002ae"),
  "department": "Arts, Humaniites and Social Sciences",
  "email": "odell@umbc.edu",
  "firstName": "Kathy",
  "fullName": "Kathy O'Dell",
  "lastName": "O'Dell",
  "photoUrl": "https:\/\/edupal.co\/images\/KathyO'Dell.jpg",
  "refId": NumberLong(27),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002af"),
  "department": "Biological Sciences",
  "email": "bieberic@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Bieberich",
  "lastName": "Bieberich",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesBieberich.jpg",
  "refId": NumberLong(28),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b0"),
  "department": "Biological Sciences",
  "email": "brewster@umbc.edu",
  "firstName": "Rachel",
  "fullName": "Rachel Brewster",
  "lastName": "Brewster",
  "photoUrl": "https:\/\/edupal.co\/images\/RachelBrewster.jpg",
  "refId": NumberLong(29),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b1"),
  "department": "Biological Sciences",
  "email": "vbrown@umbc.edu",
  "firstName": "Virginia",
  "fullName": "Virginia Brown",
  "lastName": "Brown",
  "photoUrl": "https:\/\/edupal.co\/images\/VirginiaBrown.jpg",
  "refId": NumberLong(30),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b2"),
  "department": "Biological Sciences",
  "email": "bustos@umbc.edu",
  "firstName": "Mauricio",
  "fullName": "Mauricio Bustos",
  "lastName": "Bustos",
  "photoUrl": "https:\/\/edupal.co\/images\/MauricioBustos.jpg",
  "refId": NumberLong(31),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b3"),
  "department": "Biological Sciences",
  "email": "scaruso@umbc.edu",
  "firstName": "Steven",
  "fullName": "Steven Caruso",
  "lastName": "Caruso",
  "photoUrl": "https:\/\/edupal.co\/images\/StevenCaruso.jpg",
  "refId": NumberLong(32),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b4"),
  "department": "Biological Sciences",
  "email": "schao@umbc.edu",
  "firstName": "Shirely",
  "fullName": "Shirely Chao",
  "lastName": "Chao",
  "photoUrl": "https:\/\/edupal.co\/images\/ShirelyChao.jpg",
  "refId": NumberLong(33),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b5"),
  "department": "Biological Sciences",
  "email": "c76@umbc.edu",
  "firstName": "Patrick",
  "fullName": "Patrick Ciccotto",
  "lastName": "Ciccotto",
  "photoUrl": "https:\/\/edupal.co\/images\/PatrickCiccotto.jpg",
  "refId": NumberLong(34),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946b975ab331537002b6"),
  "department": "Biological Sciences",
  "email": "claassen@umbc.edu",
  "firstName": "Lark",
  "fullName": "Lark Claassen",
  "lastName": "Claassen",
  "photoUrl": "https:\/\/edupal.co\/images\/LarkClaassen.jpg",
  "refId": NumberLong(35),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002b7"),
  "department": "Biological Sciences",
  "email": "vclement@umbc.edu",
  "firstName": "Virginia",
  "fullName": "Virginia Clements",
  "lastName": "Clements",
  "photoUrl": "https:\/\/edupal.co\/images\/VirginiaClements.jpg",
  "refId": NumberLong(36),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002b8"),
  "department": "Biological Sciences",
  "email": "mcortes1@umbc.edu",
  "firstName": "Maria-Cortes",
  "fullName": "Maria-Cortes Rodriguez",
  "lastName": "Rodriguez",
  "photoUrl": "https:\/\/edupal.co\/images\/Maria-CortesRodriguez.jpg",
  "refId": NumberLong(37),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002b9"),
  "department": "Biological Sciences",
  "email": "cronin@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Cronin",
  "lastName": "Cronin",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasCronin.jpg",
  "refId": NumberLong(38),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002ba"),
  "department": "Biological Sciences",
  "email": "eisenman@umbc.edu",
  "firstName": "David",
  "fullName": "David Eisenmann",
  "lastName": "Eisenmann",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidEisenmann.jpg",
  "refId": NumberLong(39),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002bb"),
  "department": "Biological Sciences",
  "email": "erill@umbc.edu",
  "firstName": "Ivan-Erill",
  "fullName": "Ivan-Erill Sagales",
  "lastName": "Sagales",
  "photoUrl": "https:\/\/edupal.co\/images\/Ivan-ErillSagales.jpg",
  "refId": NumberLong(40),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002bc"),
  "department": "Biological Sciences",
  "email": "farabaugh@umbc.edu",
  "firstName": "Philip",
  "fullName": "Philip Farabaugh",
  "lastName": "Farabaugh",
  "photoUrl": "https:\/\/edupal.co\/images\/PhilipFarabaugh.jpg",
  "refId": NumberLong(41),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002bd"),
  "department": "Biological Sciences",
  "email": "fleischm@umbc.edu",
  "firstName": "Esther",
  "fullName": "Esther Fleishcemann",
  "lastName": "Fleishcemann",
  "photoUrl": "https:\/\/edupal.co\/images\/EstherFleishcemann.jpg",
  "refId": NumberLong(42),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002be"),
  "department": "Chemistry and Biochemistry",
  "email": "galitsky@umbc.edu",
  "firstName": "Nikolai",
  "fullName": "Nikolai Galitsky",
  "lastName": "Galitsky",
  "photoUrl": "https:\/\/edupal.co\/images\/NikolaiGalitsky.jpg",
  "refId": NumberLong(43),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002bf"),
  "department": "Biological Sciences",
  "email": "gdovin@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Gdovin",
  "lastName": "Gdovin",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanGdovin.jpg",
  "refId": NumberLong(44),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c0"),
  "department": "Biological Sciences",
  "email": "jgumm@umbc.edu",
  "firstName": "Jennifer",
  "fullName": "Jennifer Gumm",
  "lastName": "Gumm",
  "photoUrl": "https:\/\/edupal.co\/images\/JenniferGumm.jpg",
  "refId": NumberLong(45),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c1"),
  "department": "Biological Sciences",
  "email": "aharry1@umbc.edu",
  "firstName": "Alexandra",
  "fullName": "Alexandra Harryman",
  "lastName": "Harryman",
  "photoUrl": "https:\/\/edupal.co\/images\/AlexandraHarryman.jpg",
  "refId": NumberLong(46),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c2"),
  "department": "Biological Sciences",
  "email": "mkann@umbc.edu",
  "firstName": "Maricel",
  "fullName": "Maricel Kann",
  "lastName": "Kann",
  "photoUrl": "https:\/\/edupal.co\/images\/MaricelKann.jpg",
  "refId": NumberLong(47),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c3"),
  "department": "Biological Sciences",
  "email": "kurtk1@umbc.edu",
  "firstName": "Kurt",
  "fullName": "Kurt Krosnowski",
  "lastName": "Krosnowski",
  "photoUrl": "https:\/\/edupal.co\/images\/KurtKrosnowski.jpg",
  "refId": NumberLong(48),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c4"),
  "department": "Biological Sciences",
  "email": "leips@umbc.edu",
  "firstName": "Jeff",
  "fullName": "Jeff Leips",
  "lastName": "Leips",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffLeips.jpg",
  "refId": NumberLong(50),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c5"),
  "department": "Biological Sciences",
  "email": "leupen@umbc.edu",
  "firstName": "Sarah",
  "fullName": "Sarah Leupen",
  "lastName": "Leupen",
  "photoUrl": "https:\/\/edupal.co\/images\/SarahLeupen.jpg",
  "refId": NumberLong(51),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c6"),
  "department": "Biological Sciences",
  "email": "lxiang@umbc.edu",
  "firstName": "Xiang",
  "fullName": "Xiang Li",
  "lastName": "Li",
  "photoUrl": "https:\/\/edupal.co\/images\/XiangLi.jpg",
  "refId": NumberLong(52),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c7"),
  "department": "Biological Sciences",
  "email": "weihong@umbc.edu",
  "firstName": "Weihong",
  "fullName": "Weihong Lin",
  "lastName": "Lin",
  "photoUrl": "https:\/\/edupal.co\/images\/WeihongLin.jpg",
  "refId": NumberLong(53),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c8"),
  "department": "Biological Sciences",
  "email": "lindahl@umbc.edu",
  "firstName": "Lasse",
  "fullName": "Lasse Lindahl",
  "lastName": "Lindahl",
  "photoUrl": "https:\/\/edupal.co\/images\/LasseLindahl.jpg",
  "refId": NumberLong(54),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002c9"),
  "department": "Biological Sciences",
  "email": "blohr@umbc.edu",
  "firstName": "Bernard",
  "fullName": "Bernard Lohr",
  "lastName": "Lohr",
  "photoUrl": "https:\/\/edupal.co\/images\/BernardLohr.jpg",
  "refId": NumberLong(55),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002ca"),
  "department": "Biological Sciences",
  "email": "hualu@umbc.edu",
  "firstName": "Hua",
  "fullName": "Hua lu",
  "lastName": "lu",
  "photoUrl": "https:\/\/edupal.co\/images\/Hualu.jpg",
  "refId": NumberLong(56),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002cb"),
  "department": "Biological Sciences",
  "email": "wangmei@umbc.edu",
  "firstName": "Lucy",
  "fullName": "Lucy Lou",
  "lastName": "Lou",
  "photoUrl": "https:\/\/edupal.co\/images\/LucyLou.jpg",
  "refId": NumberLong(57),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002cc"),
  "department": "Biological Sciences",
  "email": "tamram@umbc.edu",
  "firstName": "Tamra",
  "fullName": "Tamra Mendelson",
  "lastName": "Mendelson",
  "photoUrl": "https:\/\/edupal.co\/images\/TamraMendelson.jpg",
  "refId": NumberLong(58),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002cd"),
  "department": "Biological Sciences",
  "email": "stmiller@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Miller",
  "lastName": "Miller",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenMiller.jpg",
  "refId": NumberLong(59),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002ce"),
  "department": "Biological Sciences",
  "email": "cyn2@umbc.edu",
  "firstName": "Cynthia",
  "fullName": "Cynthia O'Rourke",
  "lastName": "O'Rourke",
  "photoUrl": "https:\/\/edupal.co\/images\/CynthiaO'Rourke.jpg",
  "refId": NumberLong(60),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002cf"),
  "department": "Biological Sciences",
  "email": "tatsuya@umbc.edu",
  "firstName": "Tatsuya",
  "fullName": "Tatsuya Ogura",
  "lastName": "Ogura",
  "photoUrl": "https:\/\/edupal.co\/images\/TatsuyaOgura.jpg",
  "refId": NumberLong(61),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d0"),
  "department": "Biological Sciences",
  "email": "valolmo@umbc.edu",
  "firstName": "Valerie",
  "fullName": "Valerie Olmo",
  "lastName": "Olmo",
  "photoUrl": "https:\/\/edupal.co\/images\/ValerieOlmo.jpg",
  "refId": NumberLong(62),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d1"),
  "department": "Biological Sciences",
  "email": "omland@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Omland",
  "lastName": "Omland",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinOmland.jpg",
  "refId": NumberLong(63),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d2"),
  "department": "Biological Sciences",
  "email": "probinso@umbc.edu",
  "firstName": "Phyllis",
  "fullName": "Phyllis Robinson",
  "lastName": "Robinson",
  "photoUrl": "https:\/\/edupal.co\/images\/PhyllisRobinson.jpg",
  "refId": NumberLong(64),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d3"),
  "department": "Biological Sciences",
  "email": "erogers@umbc.edu",
  "firstName": "Elizabeth",
  "fullName": "Elizabeth Rogers",
  "lastName": "Rogers",
  "photoUrl": "https:\/\/edupal.co\/images\/ElizabethRogers.jpg",
  "refId": NumberLong(65),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d4"),
  "department": "Biological Sciences",
  "email": "srosenbe@umbc.edu",
  "firstName": "Suzanne",
  "fullName": "Suzanne Rosenberg",
  "lastName": "Rosenberg",
  "photoUrl": "https:\/\/edupal.co\/images\/SuzanneRosenberg.jpg",
  "refId": NumberLong(66),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d5"),
  "department": "Biological Sciences",
  "email": "neus1@umbc.edu",
  "firstName": "Neus-Sanchez",
  "fullName": "Neus-Sanchez Alberola",
  "lastName": "Alberola",
  "photoUrl": "https:\/\/edupal.co\/images\/Neus-SanchezAlberola.jpg",
  "refId": NumberLong(67),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d6"),
  "department": "Marine Biotechnology",
  "email": "schreier@umbc.edu",
  "firstName": "Harold",
  "fullName": "Harold Schreier",
  "lastName": "Schreier",
  "photoUrl": "https:\/\/edupal.co\/images\/HaroldSchreier.jpg",
  "refId": NumberLong(68),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d7"),
  "department": "Biological Sciences",
  "email": "sjl@umbc.edu",
  "firstName": "Jiangli",
  "fullName": "Jiangli Shi",
  "lastName": "Shi",
  "photoUrl": "https:\/\/edupal.co\/images\/JiangliShi.jpg",
  "refId": NumberLong(69),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d8"),
  "department": "Biological Sciences",
  "email": "pratima@umbc.edu",
  "firstName": "Pratima",
  "fullName": "Pratima Sinha",
  "lastName": "Sinha",
  "photoUrl": "https:\/\/edupal.co\/images\/PratimaSinha.jpg",
  "refId": NumberLong(70),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002d9"),
  "department": "Biological Sciences",
  "email": "sokolove@umbc.edu",
  "firstName": "Phil",
  "fullName": "Phil Sokolove",
  "lastName": "Sokolove",
  "photoUrl": "https:\/\/edupal.co\/images\/PhilSokolove.jpg",
  "refId": NumberLong(71),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002da"),
  "department": "Biological Sciences",
  "email": "starz@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Starz-Gaiano",
  "lastName": "Starz-Gaiano",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleStarz-Gaiano.jpg",
  "refId": NumberLong(72),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002db"),
  "department": "Biological Sciences",
  "email": "szebenyi@umbc.edu",
  "firstName": "Steven",
  "fullName": "Steven Szebenyi",
  "lastName": "Szebenyi",
  "photoUrl": "https:\/\/edupal.co\/images\/StevenSzebenyi.jpg",
  "refId": NumberLong(73),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002dc"),
  "department": "Biological Sciences",
  "email": "arianne@umbc.edu",
  "firstName": "Arianne",
  "fullName": "Arianne Tremblay",
  "lastName": "Tremblay",
  "photoUrl": "https:\/\/edupal.co\/images\/ArianneTremblay.jpg",
  "refId": NumberLong(74),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002dd"),
  "department": "Biological Sciences",
  "email": "cwagner@umbc.edu",
  "firstName": "Cynthia",
  "fullName": "Cynthia Wagner",
  "lastName": "Wagner",
  "photoUrl": "https:\/\/edupal.co\/images\/CynthiaWagner.jpg",
  "refId": NumberLong(75),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002de"),
  "department": "Biological Sciences",
  "email": "jwolf@umbc.edu",
  "firstName": "Julia",
  "fullName": "Julia Wolf",
  "lastName": "Wolf",
  "photoUrl": "https:\/\/edupal.co\/images\/JuliaWolf.jpg",
  "refId": NumberLong(76),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002df"),
  "department": "Biological Sciences",
  "email": "wolf@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Wolf",
  "lastName": "Wolf",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardWolf.jpg",
  "refId": NumberLong(77),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e0"),
  "department": "Chemical and Biochemical Engineering",
  "email": "barnold@umbc.edu",
  "firstName": "Bradely",
  "fullName": "Bradely Arnold",
  "lastName": "Arnold",
  "photoUrl": "https:\/\/edupal.co\/images\/BradelyArnold.jpg",
  "refId": NumberLong(78),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e1"),
  "department": "Chemical and Biochemical Engineering",
  "email": "tbayles@umbc.edu",
  "firstName": "Taryn",
  "fullName": "Taryn Bayles",
  "lastName": "Bayles",
  "photoUrl": "https:\/\/edupal.co\/images\/TarynBayles.jpg",
  "refId": NumberLong(79),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e2"),
  "department": "Chemical and Biochemical Engineering",
  "email": "blaney@umbc.edu",
  "firstName": "Lee",
  "fullName": "Lee Blaney",
  "lastName": "Blaney",
  "photoUrl": "https:\/\/edupal.co\/images\/LeeBlaney.jpg",
  "refId": NumberLong(80),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e3"),
  "department": "Chemical and Biochemical Engineering",
  "email": "bush@umbc.edu",
  "firstName": "Allen",
  "fullName": "Allen Bush",
  "lastName": "Bush",
  "photoUrl": "https:\/\/edupal.co\/images\/AllenBush.jpg",
  "refId": NumberLong(81),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e4"),
  "department": "Chemical and Biochemical Engineering",
  "email": "mariajose@umbc.edu",
  "firstName": "Mariajose",
  "fullName": "Mariajose Castellanos",
  "lastName": "Castellanos",
  "photoUrl": "https:\/\/edupal.co\/images\/MariajoseCastellanos.jpg",
  "refId": NumberLong(82),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e5"),
  "department": "Center for Advanced Sensor Technology",
  "email": "leah@umbc.edu",
  "firstName": "Leah",
  "fullName": "Leah Crouncher",
  "lastName": "Crouncher",
  "photoUrl": "https:\/\/edupal.co\/images\/LeahCrouncher.jpg",
  "refId": NumberLong(83),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e6"),
  "department": "Chemistry and Biochemistry",
  "email": "cullum@umbc.edu",
  "firstName": "Brian",
  "fullName": "Brian Cullum",
  "lastName": "Cullum",
  "photoUrl": "https:\/\/edupal.co\/images\/BrianCullum.jpg",
  "refId": NumberLong(84),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e7"),
  "department": "Chemical and Biochemical Engineering",
  "email": "npinto1@umbc.edu",
  "firstName": "Nuno",
  "fullName": "Nuno Pinto",
  "lastName": "Pinto",
  "photoUrl": "https:\/\/edupal.co\/images\/NunoPinto.jpg",
  "refId": NumberLong(85),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946c975ab331537002e8"),
  "department": "Chemical and Biochemical Engineering",
  "email": "enszer@umbc.edu",
  "firstName": "Joshua",
  "fullName": "Joshua Enszer",
  "lastName": "Enszer",
  "photoUrl": "https:\/\/edupal.co\/images\/JoshuaEnszer.jpg",
  "refId": NumberLong(86),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002e9"),
  "department": "Chemical and Biochemical Engineering",
  "email": "dfrey1@umbc.edu",
  "firstName": "Douglas",
  "fullName": "Douglas Frey",
  "lastName": "Frey",
  "photoUrl": "https:\/\/edupal.co\/images\/DouglasFrey.jpg",
  "refId": NumberLong(87),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002ea"),
  "department": "Chemical and Biochemical Engineering",
  "email": "lgaryu1@umbc.edu",
  "firstName": "Lianko",
  "fullName": "Lianko Garyu",
  "lastName": "Garyu",
  "photoUrl": "https:\/\/edupal.co\/images\/LiankoGaryu.jpg",
  "refId": NumberLong(88),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002eb"),
  "department": "Chemical and Biochemical Engineering",
  "email": "xge1@umbc.edu",
  "firstName": "Xudong",
  "fullName": "Xudong Ge",
  "lastName": "Ge",
  "photoUrl": "https:\/\/edupal.co\/images\/XudongGe.jpg",
  "refId": NumberLong(89),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002ec"),
  "department": "Chemical and Biochemical Engineering",
  "email": "ughosh@umbc.edu",
  "firstName": "Upal",
  "fullName": "Upal Ghosh",
  "lastName": "Ghosh",
  "photoUrl": "https:\/\/edupal.co\/images\/UpalGhosh.jpg",
  "refId": NumberLong(90),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002ed"),
  "department": "Chemical and Biochemical Engineering",
  "email": "tgood@umbc.edu",
  "firstName": "Theresa",
  "fullName": "Theresa Good",
  "lastName": "Good",
  "photoUrl": "https:\/\/edupal.co\/images\/TheresaGood.jpg",
  "refId": NumberLong(91),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002ee"),
  "department": "Center for Advanced Sensor Technology",
  "email": "chskrg@umbc.edu",
  "firstName": "Chandrasekahr",
  "fullName": "Chandrasekahr Gurramkonda",
  "lastName": "Gurramkonda",
  "photoUrl": "https:\/\/edupal.co\/images\/ChandrasekahrGurramkonda.jpg",
  "refId": NumberLong(92),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002ef"),
  "department": "Chemical and Biochemical Engineering",
  "email": "hxiao1@umbc.edu",
  "firstName": "Xiao",
  "fullName": "Xiao Heng",
  "lastName": "Heng",
  "photoUrl": "https:\/\/edupal.co\/images\/XiaoHeng.jpg",
  "refId": NumberLong(93),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f0"),
  "department": "Chemical and Biochemical Engineering",
  "email": "hennigan@umbc.edu",
  "firstName": "Christopher",
  "fullName": "Christopher Hennigan",
  "lastName": "Hennigan",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristopherHennigan.jpg",
  "refId": NumberLong(94),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f1"),
  "department": "Chemical and Biochemical Engineering",
  "email": "kostov@umbc.edu",
  "firstName": "Dan",
  "fullName": "Dan Kostov",
  "lastName": "Kostov",
  "photoUrl": "https:\/\/edupal.co\/images\/DanKostov.jpg",
  "refId": NumberLong(95),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f2"),
  "department": "Chemical and Biochemical Engineering",
  "email": "jleach@umbc.edu",
  "firstName": "Jennie",
  "fullName": "Jennie Leach",
  "lastName": "Leach",
  "photoUrl": "https:\/\/edupal.co\/images\/JennieLeach.jpg",
  "refId": NumberLong(96),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f3"),
  "department": "Chemical and Biochemical Engineering",
  "email": "loehe@umbc.edu",
  "firstName": "Joseph",
  "fullName": "Joseph Loehe",
  "lastName": "Loehe",
  "photoUrl": "https:\/\/edupal.co\/images\/JosephLoehe.jpg",
  "refId": NumberLong(97),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f4"),
  "department": "Chemical and Biochemical Engineering",
  "email": "marten@umbc.edu",
  "firstName": "Mark",
  "fullName": "Mark Marten",
  "lastName": "Marten",
  "photoUrl": "https:\/\/edupal.co\/images\/MarkMarten.jpg",
  "refId": NumberLong(98),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f5"),
  "department": "Chemical and Biochemical Engineering",
  "email": "gibmason@umbc.edu",
  "firstName": "Gilbert",
  "fullName": "Gilbert Mason",
  "lastName": "Mason",
  "photoUrl": "https:\/\/edupal.co\/images\/GilbertMason.jpg",
  "refId": NumberLong(99),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f6"),
  "department": "Chemical and Biochemical Engineering",
  "email": "karunam@umbc.edu",
  "firstName": "KarunaSri",
  "fullName": "KarunaSri Mupparapu",
  "lastName": "Mupparapu",
  "photoUrl": "https:\/\/edupal.co\/images\/KarunaSriMupparapu.jpg",
  "refId": NumberLong(100),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f7"),
  "department": "Center for Advanced Sensor Technology",
  "email": "grao@umbc.edu",
  "firstName": "Govind",
  "fullName": "Govind Rao",
  "lastName": "Rao",
  "photoUrl": "https:\/\/edupal.co\/images\/GovindRao.jpg",
  "refId": NumberLong(101),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f8"),
  "department": "Chemical and Biochemical Engineering",
  "email": "reedb@umbc.edu",
  "firstName": "Brain",
  "fullName": "Brain Reed",
  "lastName": "Reed",
  "photoUrl": "https:\/\/edupal.co\/images\/BrainReed.jpg",
  "refId": NumberLong(102),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002f9"),
  "department": "Chemical and Biochemical Engineering",
  "email": "jross@umbc.edu",
  "firstName": "Julia",
  "fullName": "Julia Ross",
  "lastName": "Ross",
  "photoUrl": "https:\/\/edupal.co\/images\/JuliaRoss.jpg",
  "refId": NumberLong(103),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002fa"),
  "department": "Chemical and Biochemical Engineering",
  "email": "redesill@umbc.edu",
  "firstName": "John",
  "fullName": "John Rudesill",
  "lastName": "Rudesill",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnRudesill.jpg",
  "refId": NumberLong(104),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002fb"),
  "department": "Chemical and Biochemical Engineering",
  "email": "nselock1@umbc.edu",
  "firstName": "Nicholas",
  "fullName": "Nicholas Selock",
  "lastName": "Selock",
  "photoUrl": "https:\/\/edupal.co\/images\/NicholasSelock.jpg",
  "refId": NumberLong(105),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002fc"),
  "department": "Chemical and Biochemical Engineering",
  "email": "jeffreys@umbc.edu",
  "firstName": "Jeffrey",
  "fullName": "Jeffrey Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffreySmith.jpg",
  "refId": NumberLong(106),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002fd"),
  "department": "Chemical and Biochemical Engineering",
  "email": "pjsmith@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulSmith.jpg",
  "refId": NumberLong(107),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002fe"),
  "department": "Chemical and Biochemical Engineering",
  "email": "ktran2@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Tran",
  "lastName": "Tran",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinTran.jpg",
  "refId": NumberLong(108),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab331537002ff"),
  "department": "Chemistry and Biochemistry",
  "email": "allenm@umbc.edu",
  "firstName": "Mark A.",
  "fullName": "Mark A. Allen",
  "lastName": "Allen",
  "photoUrl": "https:\/\/edupal.co\/images\/MarkAllen.jpg",
  "refId": NumberLong(109),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700300"),
  "department": "Chemistry and Biochemistry",
  "email": "san@umbc.edu",
  "firstName": "Songon",
  "fullName": "Songon An",
  "lastName": "An",
  "photoUrl": "https:\/\/edupal.co\/images\/SongonAn.jpg",
  "refId": NumberLong(110),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700301"),
  "department": "Chemistry and Biochemistry",
  "email": "rbanton@umbc.edu",
  "firstName": "Rohan",
  "fullName": "Rohan Banton",
  "lastName": "Banton",
  "photoUrl": "https:\/\/edupal.co\/images\/RohanBanton.jpg",
  "refId": NumberLong(111),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700302"),
  "department": "Chemistry and Biochemistry",
  "email": "carpent@umbc.edu",
  "firstName": "Tara",
  "fullName": "Tara Carpenter",
  "lastName": "Carpenter",
  "photoUrl": "https:\/\/edupal.co\/images\/TaraCarpenter.jpg",
  "refId": NumberLong(112),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700303"),
  "department": "Chemistry and Biochemistry",
  "email": "jfishbei@umbc.edu",
  "firstName": "James",
  "fullName": "James Fishbein",
  "lastName": "Fishbein",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesFishbein.jpg",
  "refId": NumberLong(114),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700304"),
  "department": "Chemistry and Biochemistry",
  "email": "egarcin@umbc.edu",
  "firstName": "Elsa",
  "fullName": "Elsa Garcin",
  "lastName": "Garcin",
  "photoUrl": "https:\/\/edupal.co\/images\/ElsaGarcin.jpg",
  "refId": NumberLong(115),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700305"),
  "department": "Chemistry and Biochemistry",
  "email": "hamilton@umbc.edu",
  "firstName": "Diana",
  "fullName": "Diana Hamilton",
  "lastName": "Hamilton",
  "photoUrl": "https:\/\/edupal.co\/images\/DianaHamilton.jpg",
  "refId": NumberLong(116),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700306"),
  "department": "Chemistry and Biochemistry",
  "email": "johnsonb@umbc.edu",
  "firstName": "Bruce",
  "fullName": "Bruce Johnson",
  "lastName": "Johnson",
  "photoUrl": "https:\/\/edupal.co\/images\/BruceJohnson.jpg",
  "refId": NumberLong(117),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700307"),
  "department": "Chemistry and Biochemistry",
  "email": "j.johnson@umbc.edu",
  "firstName": "Justine",
  "fullName": "Justine Johnson",
  "lastName": "Johnson",
  "photoUrl": "https:\/\/edupal.co\/images\/JustineJohnson.jpg",
  "refId": NumberLong(118),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700308"),
  "department": "Chemistry and Biochemistry",
  "email": "karpel@umbc.edu",
  "firstName": "R",
  "fullName": "R Karpel",
  "lastName": "Karpel",
  "photoUrl": "https:\/\/edupal.co\/images\/RKarpel.jpg",
  "refId": NumberLong(119),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700309"),
  "department": "Chemistry and Biochemistry",
  "email": "Ikelly@umbc.edu",
  "firstName": "Lisa",
  "fullName": "Lisa Kelly",
  "lastName": "Kelly",
  "photoUrl": "https:\/\/edupal.co\/images\/LisaKelly.jpg",
  "refId": NumberLong(120),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370030a"),
  "department": "Chemistry and Biochemistry",
  "email": "mjkyoung@umbc.edu",
  "firstName": "Minjoung",
  "fullName": "Minjoung Kyoung",
  "lastName": "Kyoung",
  "photoUrl": "https:\/\/edupal.co\/images\/MinjoungKyoung.jpg",
  "refId": NumberLong(121),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370030b"),
  "department": "Chemistry and Biochemistry",
  "email": "jliebman@umbc.edu",
  "firstName": "Joel",
  "fullName": "Joel Liebman",
  "lastName": "Liebman",
  "photoUrl": "https:\/\/edupal.co\/images\/JoelLiebman.jpg",
  "refId": NumberLong(122),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370030c"),
  "department": "Chemistry and Biochemistry",
  "email": "smang@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Mang",
  "lastName": "Mang",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenMang.jpg",
  "refId": NumberLong(123),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370030d"),
  "department": "Chemistry and Biochemistry",
  "email": "wolson001@umbc.edu",
  "firstName": "Wendy",
  "fullName": "Wendy Olson",
  "lastName": "Olson",
  "photoUrl": "https:\/\/edupal.co\/images\/WendyOlson.jpg",
  "refId": NumberLong(124),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370030e"),
  "department": "Chemistry and Biochemistry",
  "email": "mdaniel@umbc.edu",
  "firstName": "Marie-Christine",
  "fullName": "Marie-Christine Onuta",
  "lastName": "Onuta",
  "photoUrl": "https:\/\/edupal.co\/images\/Marie-ChristineOnuta.jpg",
  "refId": NumberLong(125),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370030f"),
  "department": "Chemistry and Biochemistry",
  "email": "perks@umbc.edu",
  "firstName": "Mark",
  "fullName": "Mark Perks",
  "lastName": "Perks",
  "photoUrl": "https:\/\/edupal.co\/images\/MarkPerks.jpg",
  "refId": NumberLong(126),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700310"),
  "department": "Chemistry and Biochemistry",
  "email": "mptaszek@umbc.edu",
  "firstName": "Marcin",
  "fullName": "Marcin Ptszek",
  "lastName": "Ptszek",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcinPtszek.jpg",
  "refId": NumberLong(127),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700311"),
  "department": "Chemistry and Biochemistry",
  "email": "kseley@umbc.edu",
  "firstName": "Dr.Katherine",
  "fullName": "Dr.Katherine Radtke",
  "lastName": "Radtke",
  "photoUrl": "https:\/\/edupal.co\/images\/Dr.KatherineRadtke.jpg",
  "refId": NumberLong(128),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700312"),
  "department": "Chemistry and Biochemistry",
  "email": "ithorpe@umbc.edu",
  "firstName": "Ian",
  "fullName": "Ian Thorpe",
  "lastName": "Thorpe",
  "photoUrl": "https:\/\/edupal.co\/images\/IanThorpe.jpg",
  "refId": NumberLong(129),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700313"),
  "department": "Chemistry and Biochemistry",
  "email": "atracy@umbc.edu",
  "firstName": "Allison",
  "fullName": "Allison Tracy",
  "lastName": "Tracy",
  "photoUrl": "https:\/\/edupal.co\/images\/AllisonTracy.jpg",
  "refId": NumberLong(130),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700314"),
  "department": "Chemistry and Biochemistry",
  "email": "rjwhite@umbc.edu",
  "firstName": "Ryan",
  "fullName": "Ryan White",
  "lastName": "White",
  "photoUrl": "https:\/\/edupal.co\/images\/RyanWhite.jpg",
  "refId": NumberLong(131),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700315"),
  "department": "College of Engineering and Information Technology",
  "email": "wdevries@umbc.edu",
  "firstName": "Warren",
  "fullName": "Warren Devriews",
  "lastName": "Devriews",
  "photoUrl": "https:\/\/edupal.co\/images\/WarrenDevriews.jpg",
  "refId": NumberLong(132),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700316"),
  "department": "Computer Science and Electrical Engineering",
  "email": "adali@umbc.edu",
  "firstName": "Tulay",
  "fullName": "Tulay Adali",
  "lastName": "Adali",
  "photoUrl": "https:\/\/edupal.co\/images\/TulayAdali.jpg",
  "refId": NumberLong(133),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700317"),
  "department": "Computer Science and Electrical Engineering",
  "email": "jbarcz1@umbc.edu",
  "firstName": "Joshua",
  "fullName": "Joshua Barczak",
  "lastName": "Barczak",
  "photoUrl": "https:\/\/edupal.co\/images\/JoshuaBarczak.jpg",
  "refId": NumberLong(134),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700318"),
  "department": "Computer Science and Electrical Engineering",
  "email": "rberge1@umbc.edu",
  "firstName": "Ryan",
  "fullName": "Ryan Bergeron",
  "lastName": "Bergeron",
  "photoUrl": "https:\/\/edupal.co\/images\/RyanBergeron.jpg",
  "refId": NumberLong(135),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700319"),
  "department": "Computer Science and Electrical Engineering",
  "email": "jesus.caban@umbc.edu",
  "firstName": "Jesus J.",
  "fullName": "Jesus J. Caban",
  "lastName": "Caban",
  "photoUrl": "https:\/\/edupal.co\/images\/JesusCaban.jpg",
  "refId": NumberLong(136),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370031a"),
  "department": "Computer Science and Electrical Engineering",
  "email": "rpcain@umbc.edu",
  "firstName": "Russ",
  "fullName": "Russ Cain",
  "lastName": "Cain",
  "photoUrl": "https:\/\/edupal.co\/images\/RussCain.jpg",
  "refId": NumberLong(137),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370031b"),
  "department": "Computer Science and Electrical Engineering",
  "email": "carback1@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Carback",
  "lastName": "Carback",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardCarback.jpg",
  "refId": NumberLong(138),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370031c"),
  "department": "Computer Science and Electrical Engineering",
  "email": "carter@umbc.edu",
  "firstName": "Gary",
  "fullName": "Gary Carter",
  "lastName": "Carter",
  "photoUrl": "https:\/\/edupal.co\/images\/GaryCarter.jpg",
  "refId": NumberLong(139),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370031d"),
  "department": "Computer Science and Electrical Engineering",
  "email": "cchange@umbc.edu",
  "firstName": "Chein-I",
  "fullName": "Chein-I Chang",
  "lastName": "Chang",
  "photoUrl": "https:\/\/edupal.co\/images\/Chein-IChang.jpg",
  "refId": NumberLong(140),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370031e"),
  "department": "Computer Science and Electrical Engineering",
  "email": "chang@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Chang",
  "lastName": "Chang",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardChang.jpg",
  "refId": NumberLong(141),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370031f"),
  "department": "Computer Science and Electrical Engineering",
  "email": "chettri@umbc.edu",
  "firstName": "Samir",
  "fullName": "Samir Chettri",
  "lastName": "Chettri",
  "photoUrl": "https:\/\/edupal.co\/images\/SamirChettri.jpg",
  "refId": NumberLong(142),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700320"),
  "department": "Computer Science and Electrical Engineering",
  "email": "choa@umbc.edu",
  "firstName": "Fow-Sen",
  "fullName": "Fow-Sen Choa",
  "lastName": "Choa",
  "photoUrl": "https:\/\/edupal.co\/images\/Fow-SenChoa.jpg",
  "refId": NumberLong(143),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700321"),
  "department": "Computer Science and Electrical Engineering",
  "email": "dorband@umbc.edu",
  "firstName": "John",
  "fullName": "John Dorband",
  "lastName": "Dorband",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnDorband.jpg",
  "refId": NumberLong(144),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700322"),
  "department": "Computer Science and Electrical Engineering",
  "email": "finin@cs.umbc.edu",
  "firstName": "Tim",
  "fullName": "Tim Finin",
  "lastName": "Finin",
  "photoUrl": "https:\/\/edupal.co\/images\/TimFinin.jpg",
  "refId": NumberLong(145),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700323"),
  "department": "Computer Science and Electrical Engineering",
  "email": "rforno@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Forno",
  "lastName": "Forno",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardForno.jpg",
  "refId": NumberLong(146),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700324"),
  "department": "Computer Science and Electrical Engineering",
  "email": "fgreen@umbc.edu",
  "firstName": "Frank",
  "fullName": "Frank Green",
  "lastName": "Green",
  "photoUrl": "https:\/\/edupal.co\/images\/FrankGreen.jpg",
  "refId": NumberLong(147),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700325"),
  "department": "Computer Science and Electrical Engineering",
  "email": "halem@umbc.edu",
  "firstName": "Milton",
  "fullName": "Milton Halem",
  "lastName": "Halem",
  "photoUrl": "https:\/\/edupal.co\/images\/MiltonHalem.jpg",
  "refId": NumberLong(148),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700326"),
  "department": "Computer Science and Electrical Engineering",
  "email": "joshi@umbc.edu",
  "firstName": "Anupam",
  "fullName": "Anupam Joshi",
  "lastName": "Joshi",
  "photoUrl": "https:\/\/edupal.co\/images\/AnupamJoshi.jpg",
  "refId": NumberLong(149),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700327"),
  "department": "Computer Science and Electrical Engineering",
  "email": "kalpakis@umbc.edu",
  "firstName": "Konstantin",
  "fullName": "Konstantin Kalpakis",
  "lastName": "Kalpakis",
  "photoUrl": "https:\/\/edupal.co\/images\/KonstantinKalpakis.jpg",
  "refId": NumberLong(150),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700328"),
  "department": "Computer Science and Electrical Engineering",
  "email": "hillol@cs.umbc.edu",
  "firstName": "Hillol",
  "fullName": "Hillol Kargupta",
  "lastName": "Kargupta",
  "photoUrl": "https:\/\/edupal.co\/images\/HillolKargupta.jpg",
  "refId": NumberLong(151),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700329"),
  "department": "Computer Science and Electrical Engineering",
  "email": "chuck.laberge@umbc.edu",
  "firstName": "E F Charles",
  "fullName": "E F Charles Laberge",
  "lastName": "Laberge",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesLaberge.jpg",
  "refId": NumberLong(152),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370032a"),
  "department": "Computer Science and Electrical Engineering",
  "email": "lomonaco@umbc.edu",
  "firstName": "Samuel",
  "fullName": "Samuel Lomonaco",
  "lastName": "Lomonaco",
  "photoUrl": "https:\/\/edupal.co\/images\/SamuelLomonaco.jpg",
  "refId": NumberLong(153),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370032b"),
  "department": "Computer Science and Electrical Engineering",
  "email": "slupoli@cs.umbc.edu",
  "firstName": "Shawn",
  "fullName": "Shawn Lupoli",
  "lastName": "Lupoli",
  "photoUrl": "https:\/\/edupal.co\/images\/ShawnLupoli.jpg",
  "refId": NumberLong(154),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370032c"),
  "department": "Computer Science and Electrical Engineering",
  "email": "jmac1@umbc.edu",
  "firstName": "James",
  "fullName": "James MacGlashan",
  "lastName": "MacGlashan",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesMacGlashan.jpg",
  "refId": NumberLong(155),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370032d"),
  "department": "Computer Science and Electrical Engineering",
  "email": "cmarron@umbc.edu",
  "firstName": "Christopher",
  "fullName": "Christopher Marron",
  "lastName": "Marron",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristopherMarron.jpg",
  "refId": NumberLong(156),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370032e"),
  "department": "Computer Science and Electrical Engineering",
  "email": "menyuk@umbc.edu",
  "firstName": "Curtis",
  "fullName": "Curtis Menyuk",
  "lastName": "Menyuk",
  "photoUrl": "https:\/\/edupal.co\/images\/CurtisMenyuk.jpg",
  "refId": NumberLong(157),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370032f"),
  "department": "Computer Science and Electrical Engineering",
  "email": "tinoosh@umbc.edu",
  "firstName": "Tinoosh",
  "fullName": "Tinoosh Mohsenin",
  "lastName": "Mohsenin",
  "photoUrl": "https:\/\/edupal.co\/images\/TinooshMohsenin.jpg",
  "refId": NumberLong(158),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700330"),
  "department": "Computer Science and Electrical Engineering",
  "email": "emontgomery@umbc.edu",
  "firstName": "Eric",
  "fullName": "Eric Montgomery",
  "lastName": "Montgomery",
  "photoUrl": "https:\/\/edupal.co\/images\/EricMontgomery.jpg",
  "refId": NumberLong(159),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700331"),
  "department": "Computer Science and Electrical Engineering",
  "email": "mm11@umbc.edu",
  "firstName": "Maksym",
  "fullName": "Maksym morawski",
  "lastName": "morawski",
  "photoUrl": "https:\/\/edupal.co\/images\/Maksymmorawski.jpg",
  "refId": NumberLong(160),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700332"),
  "department": "Computer Science and Electrical Engineering",
  "email": "morris@umbc.edu",
  "firstName": "Joel",
  "fullName": "Joel Morris",
  "lastName": "Morris",
  "photoUrl": "https:\/\/edupal.co\/images\/JoelMorris.jpg",
  "refId": NumberLong(161),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700333"),
  "department": "Computer Science and Electrical Engineering",
  "email": "nicholas@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Nicholas",
  "lastName": "Nicholas",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesNicholas.jpg",
  "refId": NumberLong(162),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700334"),
  "department": "Computer Science and Electrical Engineering",
  "email": "mnovey1@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Novey",
  "lastName": "Novey",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelNovey.jpg",
  "refId": NumberLong(163),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700335"),
  "department": "Computer Science and Electrical Engineering",
  "email": "oates@umbc.edu",
  "firstName": "James",
  "fullName": "James Oates",
  "lastName": "Oates",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesOates.jpg",
  "refId": NumberLong(164),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700336"),
  "department": "Computer Science and Electrical Engineering",
  "email": "okusaga1@umbc.edu",
  "firstName": "Olukayode",
  "fullName": "Olukayode Okusaga",
  "lastName": "Okusaga",
  "photoUrl": "https:\/\/edupal.co\/images\/OlukayodeOkusaga.jpg",
  "refId": NumberLong(165),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700337"),
  "department": "Computer Science and Electrical Engineering",
  "email": "loano@umbc.edu",
  "firstName": "Marc",
  "fullName": "Marc Olano",
  "lastName": "Olano",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcOlano.jpg",
  "refId": NumberLong(166),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700338"),
  "department": "Computer Science and Electrical Engineering",
  "email": "park@umbc.edu",
  "firstName": "John",
  "fullName": "John Park",
  "lastName": "Park",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnPark.jpg",
  "refId": NumberLong(167),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700339"),
  "department": "Computer Science and Electrical Engineering",
  "email": "jparke2@umbc.edu",
  "firstName": "James",
  "fullName": "James Parker",
  "lastName": "Parker",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesParker.jpg",
  "refId": NumberLong(168),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370033a"),
  "department": "Computer Science and Electrical Engineering",
  "email": "cpatel2@umbc.edu",
  "firstName": "Chintan",
  "fullName": "Chintan Patel",
  "lastName": "Patel",
  "photoUrl": "https:\/\/edupal.co\/images\/ChintanPatel.jpg",
  "refId": NumberLong(169),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370033b"),
  "department": "Computer Science and Electrical Engineering",
  "email": "ypeng@umbc.edu",
  "firstName": "Yun",
  "fullName": "Yun Pen",
  "lastName": "Pen",
  "photoUrl": "https:\/\/edupal.co\/images\/YunPen.jpg",
  "refId": NumberLong(170),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370033c"),
  "department": "Computer Science and Electrical Engineering",
  "email": "phatak@umbc.edu",
  "firstName": "Dhananjay",
  "fullName": "Dhananjay Phatak",
  "lastName": "Phatak",
  "photoUrl": "https:\/\/edupal.co\/images\/DhananjayPhatak.jpg",
  "refId": NumberLong(171),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370033d"),
  "department": "Computer Science and Electrical Engineering",
  "email": "radtak1@umbc.edu",
  "firstName": "Zachary",
  "fullName": "Zachary Radtka",
  "lastName": "Radtka",
  "photoUrl": "https:\/\/edupal.co\/images\/ZacharyRadtka.jpg",
  "refId": NumberLong(172),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370033e"),
  "department": "Computer Science and Electrical Engineering",
  "email": "rheingan@umbc.edu",
  "firstName": "Penny",
  "fullName": "Penny Rheingan",
  "lastName": "Rheingan",
  "photoUrl": "https:\/\/edupal.co\/images\/PennyRheingan.jpg",
  "refId": NumberLong(173),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370033f"),
  "department": "Computer Science and Electrical Engineering",
  "email": "crichey@umbc.edu",
  "firstName": "Clark",
  "fullName": "Clark Richey",
  "lastName": "Richey",
  "photoUrl": "https:\/\/edupal.co\/images\/ClarkRichey.jpg",
  "refId": NumberLong(174),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700340"),
  "department": "Computer Science and Electrical Engineering",
  "email": "robucci@umbc.edu",
  "firstName": "Ryan",
  "fullName": "Ryan Robucci",
  "lastName": "Robucci",
  "photoUrl": "https:\/\/edupal.co\/images\/RyanRobucci.jpg",
  "refId": NumberLong(175),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700341"),
  "department": "Computer Science and Electrical Engineering",
  "email": "rromano@umbc.edu",
  "firstName": "Ross",
  "fullName": "Ross Romano",
  "lastName": "Romano",
  "photoUrl": "https:\/\/edupal.co\/images\/RossRomano.jpg",
  "refId": NumberLong(176),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700342"),
  "department": "Computer Science and Electrical Engineering",
  "email": "rushemp@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Rushe",
  "lastName": "Rushe",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelRushe.jpg",
  "refId": NumberLong(177),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700343"),
  "department": "Computer Science and Electrical Engineering",
  "email": "schmill@umbc.edu",
  "firstName": "Matthew",
  "fullName": "Matthew Schmill",
  "lastName": "Schmill",
  "photoUrl": "https:\/\/edupal.co\/images\/MatthewSchmill.jpg",
  "refId": NumberLong(178),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700344"),
  "department": "Computer Science and Electrical Engineering",
  "email": "zary@umbc.edu",
  "firstName": "Zary",
  "fullName": "Zary Segal",
  "lastName": "Segal",
  "photoUrl": "https:\/\/edupal.co\/images\/ZarySegal.jpg",
  "refId": NumberLong(179),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700345"),
  "department": "Computer Science and Electrical Engineering",
  "email": "sherman@umbc.edu",
  "firstName": "Alan",
  "fullName": "Alan Sherman",
  "lastName": "Sherman",
  "photoUrl": "https:\/\/edupal.co\/images\/AlanSherman.jpg",
  "refId": NumberLong(180),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700346"),
  "department": "Computer Science and Electrical Engineering",
  "email": "shilling.jake@umbc.edu",
  "firstName": "Jake",
  "fullName": "Jake Shilling",
  "lastName": "Shilling",
  "photoUrl": "https:\/\/edupal.co\/images\/JakeShilling.jpg",
  "refId": NumberLong(181),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700347"),
  "department": "Computer Science and Electrical Engineering",
  "email": "sidhu@umbc.edu",
  "firstName": "Deepinder",
  "fullName": "Deepinder Sidhu",
  "lastName": "Sidhu",
  "photoUrl": "https:\/\/edupal.co\/images\/DeepinderSidhu.jpg",
  "refId": NumberLong(182),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700348"),
  "department": "Computer Science and Electrical Engineering",
  "email": "tsimo1@umbc.edu",
  "firstName": "Tyler",
  "fullName": "Tyler Simon",
  "lastName": "Simon",
  "photoUrl": "https:\/\/edupal.co\/images\/TylerSimon.jpg",
  "refId": NumberLong(183),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab33153700349"),
  "department": "Computer Science and Electrical Engineering",
  "email": "gslaught@umbc.edu",
  "firstName": "Gymama",
  "fullName": "Gymama Slaughter",
  "lastName": "Slaughter",
  "photoUrl": "https:\/\/edupal.co\/images\/GymamaSlaughter.jpg",
  "refId": NumberLong(184),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370034a"),
  "department": "Computer Science and Electrical Engineering",
  "email": "mwilson3@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Wilson",
  "lastName": "Wilson",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelWilson.jpg",
  "refId": NumberLong(185),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370034b"),
  "department": "Computer Science and Electrical Engineering",
  "email": "winnerk1@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Winner",
  "lastName": "Winner",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinWinner.jpg",
  "refId": NumberLong(186),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370034c"),
  "department": "Computer Science and Electrical Engineering",
  "email": "liyan@umbc.edu",
  "firstName": "Li",
  "fullName": "Li Yan",
  "lastName": "Yan",
  "photoUrl": "https:\/\/edupal.co\/images\/LiYan.jpg",
  "refId": NumberLong(187),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370034d"),
  "department": "Computer Science and Electrical Engineering",
  "email": "shiming1@umbc.edu",
  "firstName": "Shiming",
  "fullName": "Shiming Yang",
  "lastName": "Yang",
  "photoUrl": "https:\/\/edupal.co\/images\/ShimingYang.jpg",
  "refId": NumberLong(188),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370034e"),
  "department": "Computer Science and Electrical Engineering",
  "email": "yayesha@umbc.edu",
  "firstName": "Yaacov",
  "fullName": "Yaacov Yesha",
  "lastName": "Yesha",
  "photoUrl": "https:\/\/edupal.co\/images\/YaacovYesha.jpg",
  "refId": NumberLong(189),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946d975ab3315370034f"),
  "department": "Computer Science and Electrical Engineering",
  "email": "younis@cs.umbc.edu",
  "firstName": "Mohamed",
  "fullName": "Mohamed Younis",
  "lastName": "Younis",
  "photoUrl": "https:\/\/edupal.co\/images\/MohamedYounis.jpg",
  "refId": NumberLong(190),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700350"),
  "department": "Computer Science and Electrical Engineering",
  "email": "szhou@umbc.edu",
  "firstName": "Shujia",
  "fullName": "Shujia Zhou",
  "lastName": "Zhou",
  "photoUrl": "https:\/\/edupal.co\/images\/ShujiaZhou.jpg",
  "refId": NumberLong(191),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700351"),
  "department": "Computer Science and Electrical Engineering",
  "email": "eziegl1@umbc.edu",
  "firstName": "Edward",
  "fullName": "Edward Zieglar",
  "lastName": "Zieglar",
  "photoUrl": "https:\/\/edupal.co\/images\/EdwardZieglar.jpg",
  "refId": NumberLong(192),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700352"),
  "department": "Computer Science and Electrical Engineering",
  "email": "mariedj@cs.umbc.edu",
  "firstName": "Marie",
  "fullName": "Marie desJardins",
  "lastName": "desJardins",
  "photoUrl": "https:\/\/edupal.co\/images\/MariedesJardins.jpg",
  "refId": NumberLong(193),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700353"),
  "department": "Dance",
  "email": "abelc@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Abel",
  "lastName": "Abel",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesAbel.jpg",
  "refId": NumberLong(194),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700354"),
  "department": "Dance",
  "email": "aclancy@umbc.edu",
  "firstName": "Adrienne",
  "fullName": "Adrienne Clancy",
  "lastName": "Clancy",
  "photoUrl": "https:\/\/edupal.co\/images\/AdrienneClancy.jpg",
  "refId": NumberLong(195),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700355"),
  "department": "Dance",
  "email": "acrosby@umbc.edu",
  "firstName": "Alison",
  "fullName": "Alison Crosby",
  "lastName": "Crosby",
  "photoUrl": "https:\/\/edupal.co\/images\/AlisonCrosby.jpg",
  "refId": NumberLong(196),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700356"),
  "department": "Dance",
  "email": "hessvait@umbc.edu",
  "firstName": "Carol",
  "fullName": "Carol Hess-Vait",
  "lastName": "Hess-Vait",
  "photoUrl": "https:\/\/edupal.co\/images\/CarolHess-Vait.jpg",
  "refId": NumberLong(198),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700357"),
  "department": "Dance",
  "email": "lacy@umbc.edu",
  "firstName": "Sandra",
  "fullName": "Sandra Lacy",
  "lastName": "Lacy",
  "photoUrl": "https:\/\/edupal.co\/images\/SandraLacy.jpg",
  "refId": NumberLong(199),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700358"),
  "department": "Dance",
  "email": "walton@umbc.edu",
  "firstName": "Liz",
  "fullName": "Liz Walton Leblanc",
  "lastName": "Walton Leblanc",
  "photoUrl": "https:\/\/edupal.co\/images\/LizWaltonLeblanc.jpg",
  "refId": NumberLong(200),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700359"),
  "department": "Dance",
  "email": "emitch4@umbc.edu",
  "firstName": "Eileen",
  "fullName": "Eileen Mitchell-Schwartz",
  "lastName": "Mitchell-Schwartz",
  "photoUrl": "https:\/\/edupal.co\/images\/EileenMitchell-Schwartz.jpg",
  "refId": NumberLong(201),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370035a"),
  "department": "Dance",
  "email": "miako@umbc.edu",
  "firstName": "Misako",
  "fullName": "Misako Oda",
  "lastName": "Oda",
  "photoUrl": "https:\/\/edupal.co\/images\/MisakoOda.jpg",
  "refId": NumberLong(202),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370035b"),
  "department": "Dance",
  "email": "vjill@umbc.edu",
  "firstName": "Jill",
  "fullName": "Jill Vasbinder",
  "lastName": "Vasbinder",
  "photoUrl": "https:\/\/edupal.co\/images\/JillVasbinder.jpg",
  "refId": NumberLong(203),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370035c"),
  "department": "Dance",
  "email": "helanius@umbc.edu",
  "firstName": "Helanius",
  "fullName": "Helanius Wilkins",
  "lastName": "Wilkins",
  "photoUrl": "https:\/\/edupal.co\/images\/HelaniusWilkins.jpg",
  "refId": NumberLong(204),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370035d"),
  "department": "Division of Professional Studies",
  "email": "abdullah@umbc.edu",
  "firstName": "Qassim",
  "fullName": "Qassim Abdullah",
  "lastName": "Abdullah",
  "photoUrl": "https:\/\/edupal.co\/images\/QassimAbdullah.jpg",
  "refId": NumberLong(205),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370035e"),
  "department": "Division of Professional Studies",
  "email": "sahuja1@umbc.edu",
  "firstName": "Sanjeev",
  "fullName": "Sanjeev Ahuja",
  "lastName": "Ahuja",
  "photoUrl": "https:\/\/edupal.co\/images\/SanjeevAhuja.jpg",
  "refId": NumberLong(206),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370035f"),
  "department": "Division of Professional Studies",
  "email": "asarocat@umbc.edu",
  "firstName": "Catherine",
  "fullName": "Catherine Asaro",
  "lastName": "Asaro",
  "photoUrl": "https:\/\/edupal.co\/images\/CatherineAsaro.jpg",
  "refId": NumberLong(207),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700360"),
  "department": "Division of Professional Studies",
  "email": "rbalci@umbc.edu",
  "firstName": "Rana",
  "fullName": "Rana Balci-Sinha",
  "lastName": "Balci-Sinha",
  "photoUrl": "https:\/\/edupal.co\/images\/RanaBalci-Sinha.jpg",
  "refId": NumberLong(208),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700361"),
  "department": "Division of Professional Studies",
  "email": "bermud@umbc.edu",
  "firstName": "Luis",
  "fullName": "Luis Bermudez",
  "lastName": "Bermudez",
  "photoUrl": "https:\/\/edupal.co\/images\/LuisBermudez.jpg",
  "refId": NumberLong(209),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700362"),
  "department": "Division of Professional Studies",
  "email": "karen.blinder@umbc.edu",
  "firstName": "Karen",
  "fullName": "Karen Blinder",
  "lastName": "Blinder",
  "photoUrl": "https:\/\/edupal.co\/images\/KarenBlinder.jpg",
  "refId": NumberLong(210),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700363"),
  "department": "Division of Professional Studies",
  "email": "bolognes@umbc.edu",
  "firstName": "Cynthia",
  "fullName": "Cynthia Bolognese",
  "lastName": "Bolognese",
  "photoUrl": "https:\/\/edupal.co\/images\/CynthiaBolognese.jpg",
  "refId": NumberLong(211),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700364"),
  "department": "Division of Professional Studies",
  "email": "bboswell@umbc.edu",
  "firstName": "Barbara Anne",
  "fullName": "Barbara Anne Boswell",
  "lastName": "Boswell",
  "photoUrl": "https:\/\/edupal.co\/images\/BarbaraAnneBoswell.jpg",
  "refId": NumberLong(212),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700365"),
  "department": "Division of Professional Studies",
  "email": "broedel@umbc.edu",
  "firstName": "Sheldon",
  "fullName": "Sheldon Broedel",
  "lastName": "Broedel",
  "photoUrl": "https:\/\/edupal.co\/images\/SheldonBroedel.jpg",
  "refId": NumberLong(213),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700366"),
  "department": "Division of Professional Studies",
  "email": "bles@umbc.edu",
  "firstName": "Lester",
  "fullName": "Lester Brooks",
  "lastName": "Brooks",
  "photoUrl": "https:\/\/edupal.co\/images\/LesterBrooks.jpg",
  "refId": NumberLong(214),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700367"),
  "department": "Division of Professional Studies",
  "email": "cambe@umbc.edu",
  "firstName": "Duncan",
  "fullName": "Duncan Campell",
  "lastName": "Campell",
  "photoUrl": "https:\/\/edupal.co\/images\/DuncanCampell.jpg",
  "refId": NumberLong(215),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700368"),
  "department": "Division of Professional Studies",
  "email": "carbone@umbc.edu",
  "firstName": "Christopher",
  "fullName": "Christopher Carbone",
  "lastName": "Carbone",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristopherCarbone.jpg",
  "refId": NumberLong(216),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700369"),
  "department": "Division of Professional Studies",
  "email": "clarkr@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Clark",
  "lastName": "Clark",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertClark.jpg",
  "refId": NumberLong(217),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370036a"),
  "department": "Division of Professional Studies",
  "email": "violetalaura@umbc.edu",
  "firstName": "Violeta",
  "fullName": "Violeta Colombo",
  "lastName": "Colombo",
  "photoUrl": "https:\/\/edupal.co\/images\/VioletaColombo.jpg",
  "refId": NumberLong(218),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370036b"),
  "department": "Division of Professional Studies",
  "email": "scrosby@umbc.edu",
  "firstName": "Sonya",
  "fullName": "Sonya Croby",
  "lastName": "Croby",
  "photoUrl": "https:\/\/edupal.co\/images\/SonyaCroby.jpg",
  "refId": NumberLong(219),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370036c"),
  "department": "Division of Professional Studies",
  "email": "ddailey@umbc.edu",
  "firstName": "Diane",
  "fullName": "Diane Dailey",
  "lastName": "Dailey",
  "photoUrl": "https:\/\/edupal.co\/images\/DianeDailey.jpg",
  "refId": NumberLong(220),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370036d"),
  "department": "Division of Professional Studies",
  "email": "mdaniels@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Daniels",
  "lastName": "Daniels",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleDaniels.jpg",
  "refId": NumberLong(221),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370036e"),
  "department": "Division of Professional Studies",
  "email": "nandita@umbc.edu",
  "firstName": "Nandita",
  "fullName": "Nandita Dasgupta",
  "lastName": "Dasgupta",
  "photoUrl": "https:\/\/edupal.co\/images\/NanditaDasgupta.jpg",
  "refId": NumberLong(222),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370036f"),
  "department": "Division of Professional Studies",
  "email": "adevos1@umbc.edu",
  "firstName": "Andrew",
  "fullName": "Andrew Devos",
  "lastName": "Devos",
  "photoUrl": "https:\/\/edupal.co\/images\/AndrewDevos.jpg",
  "refId": NumberLong(223),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700370"),
  "department": "Division of Professional Studies",
  "email": "diamond@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Diamond",
  "lastName": "Diamond",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertDiamond.jpg",
  "refId": NumberLong(224),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700371"),
  "department": "Division of Professional Studies",
  "email": "dunleavy@umbc.edu",
  "firstName": "Eric",
  "fullName": "Eric Dunleavy",
  "lastName": "Dunleavy",
  "photoUrl": "https:\/\/edupal.co\/images\/EricDunleavy.jpg",
  "refId": NumberLong(225),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700372"),
  "department": "Division of Professional Studies",
  "email": "terille@umbc.edu",
  "firstName": "Terilee",
  "fullName": "Terilee Edwards-Hewitt",
  "lastName": "Edwards-Hewitt",
  "photoUrl": "https:\/\/edupal.co\/images\/TerileeEdwards-Hewitt.jpg",
  "refId": NumberLong(226),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700373"),
  "department": "Division of Professional Studies",
  "email": "jellis@umbc.edu",
  "firstName": "Joan",
  "fullName": "Joan Ellis",
  "lastName": "Ellis",
  "photoUrl": "https:\/\/edupal.co\/images\/JoanEllis.jpg",
  "refId": NumberLong(227),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700374"),
  "department": "Division of Professional Studies",
  "email": "yengland@umbc.edu",
  "firstName": "Yuliya",
  "fullName": "Yuliya England",
  "lastName": "England",
  "photoUrl": "https:\/\/edupal.co\/images\/YuliyaEngland.jpg",
  "refId": NumberLong(228),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700375"),
  "department": "Division of Professional Studies",
  "email": "owen@umbc.edu",
  "firstName": "Owen",
  "fullName": "Owen Evans",
  "lastName": "Evans",
  "photoUrl": "https:\/\/edupal.co\/images\/OwenEvans.jpg",
  "refId": NumberLong(229),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700376"),
  "department": "Division of Professional Studies",
  "email": "federici@umbc.edu",
  "firstName": "Mary",
  "fullName": "Mary Federici",
  "lastName": "Federici",
  "photoUrl": "https:\/\/edupal.co\/images\/MaryFederici.jpg",
  "refId": NumberLong(230),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700377"),
  "department": "Division of Professional Studies",
  "email": "robertefenton@gmail.com",
  "firstName": "Robert",
  "fullName": "Robert Fenton",
  "lastName": "Fenton",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertFenton.jpg",
  "refId": NumberLong(231),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700378"),
  "department": "Division of Professional Studies",
  "email": "tfoster@umbc.edu",
  "firstName": "Ted",
  "fullName": "Ted Foster",
  "lastName": "Foster",
  "photoUrl": "https:\/\/edupal.co\/images\/TedFoster.jpg",
  "refId": NumberLong(232),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700379"),
  "department": "Division of Professional Studies",
  "email": "gardenghi@umbc.edu",
  "firstName": "Sarah",
  "fullName": "Sarah Gardenghi",
  "lastName": "Gardenghi",
  "photoUrl": "https:\/\/edupal.co\/images\/SarahGardenghi.jpg",
  "refId": NumberLong(233),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370037a"),
  "department": "Division of Professional Studies",
  "email": "gartside@umbc.edu",
  "firstName": "James",
  "fullName": "James Gartside",
  "lastName": "Gartside",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesGartside.jpg",
  "refId": NumberLong(234),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370037b"),
  "department": "Division of Professional Studies",
  "email": "phgloor@umbc.edu",
  "firstName": "Philip",
  "fullName": "Philip Gloor",
  "lastName": "Gloor",
  "photoUrl": "https:\/\/edupal.co\/images\/PhilipGloor.jpg",
  "refId": NumberLong(235),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370037c"),
  "department": "Division of Professional Studies",
  "email": "go@umbc.edu",
  "firstName": "Robin",
  "fullName": "Robin Goldstein",
  "lastName": "Goldstein",
  "photoUrl": "https:\/\/edupal.co\/images\/RobinGoldstein.jpg",
  "refId": NumberLong(236),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370037d"),
  "department": "Division of Professional Studies",
  "email": "matgopa1@umbc.edu",
  "firstName": "Mathangi",
  "fullName": "Mathangi Gopalkrishan",
  "lastName": "Gopalkrishan",
  "photoUrl": "https:\/\/edupal.co\/images\/MathangiGopalkrishan.jpg",
  "refId": NumberLong(237),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370037e"),
  "department": "Division of Professional Studies",
  "email": "tgouker@umbc.edu",
  "firstName": "Toby",
  "fullName": "Toby Gouker",
  "lastName": "Gouker",
  "photoUrl": "https:\/\/edupal.co\/images\/TobyGouker.jpg",
  "refId": NumberLong(238),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370037f"),
  "department": "Division of Professional Studies",
  "email": "griffijam@umbc.edu",
  "firstName": "James",
  "fullName": "James Griffith",
  "lastName": "Griffith",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesGriffith.jpg",
  "refId": NumberLong(239),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700380"),
  "department": "Division of Professional Studies",
  "email": "gsokhna1@umbc.edu",
  "firstName": "Sokhna Fatou",
  "fullName": "Sokhna Fatou Gueye",
  "lastName": "Gueye",
  "photoUrl": "https:\/\/edupal.co\/images\/SokhnaFatouGueye.jpg",
  "refId": NumberLong(240),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700381"),
  "department": "Division of Professional Studies",
  "email": "rgusta@umbc.edu",
  "firstName": "Reid",
  "fullName": "Reid Gustafson",
  "lastName": "Gustafson",
  "photoUrl": "https:\/\/edupal.co\/images\/ReidGustafson.jpg",
  "refId": NumberLong(241),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700382"),
  "department": "Division of Professional Studies",
  "email": "hagovsky@umbc.edu",
  "firstName": "Elizabeth",
  "fullName": "Elizabeth Hagovsky",
  "lastName": "Hagovsky",
  "photoUrl": "https:\/\/edupal.co\/images\/ElizabethHagovsky.jpg",
  "refId": NumberLong(242),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700383"),
  "department": "Division of Professional Studies",
  "email": "nhall@umbc.edu",
  "firstName": "Nancy",
  "fullName": "Nancy Hall",
  "lastName": "Hall",
  "photoUrl": "https:\/\/edupal.co\/images\/NancyHall.jpg",
  "refId": NumberLong(243),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700384"),
  "department": "Division of Professional Studies",
  "email": "Iharfoot@umbc.edu",
  "firstName": "Lisa",
  "fullName": "Lisa Harfoot",
  "lastName": "Harfoot",
  "photoUrl": "https:\/\/edupal.co\/images\/LisaHarfoot.jpg",
  "refId": NumberLong(244),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700385"),
  "department": "Division of Professional Studies",
  "email": "mhansib@umbc.edu",
  "firstName": "Mansur",
  "fullName": "Mansur Hasib",
  "lastName": "Hasib",
  "photoUrl": "https:\/\/edupal.co\/images\/MansurHasib.jpg",
  "refId": NumberLong(245),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700386"),
  "department": "Division of Professional Studies",
  "email": "rheimann@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Heimann",
  "lastName": "Heimann",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardHeimann.jpg",
  "refId": NumberLong(246),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700387"),
  "department": "Division of Professional Studies",
  "email": "JHen816@verizon.net",
  "firstName": "Joyce",
  "fullName": "Joyce Henderson",
  "lastName": "Henderson",
  "photoUrl": "https:\/\/edupal.co\/images\/JoyceHenderson.jpg",
  "refId": NumberLong(247),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700388"),
  "department": "Division of Professional Studies",
  "email": "adamh@umbc.edu",
  "firstName": "Adam",
  "fullName": "Adam Henricksen",
  "lastName": "Henricksen",
  "photoUrl": "https:\/\/edupal.co\/images\/AdamHenricksen.jpg",
  "refId": NumberLong(248),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab33153700389"),
  "department": "Division of Professional Studies",
  "email": "jh3@umbc.edu",
  "firstName": "Joshua",
  "fullName": "Joshua Herring",
  "lastName": "Herring",
  "photoUrl": "https:\/\/edupal.co\/images\/JoshuaHerring.jpg",
  "refId": NumberLong(249),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370038a"),
  "department": "Division of Professional Studies",
  "email": "aramhenssami@umbc.edu",
  "firstName": "Aram",
  "fullName": "Aram Hessami",
  "lastName": "Hessami",
  "photoUrl": "https:\/\/edupal.co\/images\/AramHessami.jpg",
  "refId": NumberLong(250),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370038b"),
  "department": "Division of Professional Studies",
  "email": "cherylh1@umbc.edu",
  "firstName": "Cheryl",
  "fullName": "Cheryl Hoffman",
  "lastName": "Hoffman",
  "photoUrl": "https:\/\/edupal.co\/images\/CherylHoffman.jpg",
  "refId": NumberLong(251),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370038c"),
  "department": "Sociology and Anthropology",
  "email": "hosler1@umbc.edu",
  "firstName": "Colleen",
  "fullName": "Colleen Hosler",
  "lastName": "Hosler",
  "photoUrl": "https:\/\/edupal.co\/images\/ColleenHosler.jpg",
  "refId": NumberLong(252),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370038d"),
  "department": "Division of Professional Studies",
  "email": "hrose1@umbc.edu",
  "firstName": "Rosemary",
  "fullName": "Rosemary Hsu",
  "lastName": "Hsu",
  "photoUrl": "https:\/\/edupal.co\/images\/RosemaryHsu.jpg",
  "refId": NumberLong(253),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370038e"),
  "department": "Division of Professional Studies",
  "email": "mshuhn@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Huhn",
  "lastName": "Huhn",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelHuhn.jpg",
  "refId": NumberLong(254),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946e975ab3315370038f"),
  "department": "Division of Professional Studies",
  "email": "khylton@Umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Hylton",
  "lastName": "Hylton",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinHylton.jpg",
  "refId": NumberLong(255),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700390"),
  "department": "Division of Professional Studies",
  "email": "dirvine1@umbc.edu",
  "firstName": "David",
  "fullName": "David Irvine",
  "lastName": "Irvine",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidIrvine.jpg",
  "refId": NumberLong(256),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700391"),
  "department": "Division of Professional Studies",
  "email": "izenberg@umbc.edu",
  "firstName": "Illysa",
  "fullName": "Illysa Izenberg",
  "lastName": "Izenberg",
  "photoUrl": "https:\/\/edupal.co\/images\/IllysaIzenberg.jpg",
  "refId": NumberLong(257),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700392"),
  "department": "Division of Professional Studies",
  "email": "jacobso1@umbc.edu",
  "firstName": "John",
  "fullName": "John Jacobson",
  "lastName": "Jacobson",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnJacobson.jpg",
  "refId": NumberLong(258),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700393"),
  "department": "Division of Professional Studies",
  "email": "sjeffrey@ccbcmd.edu",
  "firstName": "Scott",
  "fullName": "Scott Jeffrey",
  "lastName": "Jeffrey",
  "photoUrl": "https:\/\/edupal.co\/images\/ScottJeffrey.jpg",
  "refId": NumberLong(259),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700394"),
  "department": "Division of Professional Studies",
  "email": "cj@umbc.edu",
  "firstName": "Cathy",
  "fullName": "Cathy Johnson",
  "lastName": "Johnson",
  "photoUrl": "https:\/\/edupal.co\/images\/CathyJohnson.jpg",
  "refId": NumberLong(260),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700395"),
  "department": "Division of Professional Studies",
  "email": "kalweisu@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Kalweit",
  "lastName": "Kalweit",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanKalweit.jpg",
  "refId": NumberLong(261),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700396"),
  "department": "Division of Professional Studies",
  "email": "jkriko1@umbc.edu",
  "firstName": "Jacqueline",
  "fullName": "Jacqueline Krikorian",
  "lastName": "Krikorian",
  "photoUrl": "https:\/\/edupal.co\/images\/JacquelineKrikorian.jpg",
  "refId": NumberLong(262),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700397"),
  "department": "Division of Professional Studies",
  "email": "skronhei@umbc.edu",
  "firstName": "Steven",
  "fullName": "Steven Kronheim",
  "lastName": "Kronheim",
  "photoUrl": "https:\/\/edupal.co\/images\/StevenKronheim.jpg",
  "refId": NumberLong(263),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700398"),
  "department": "Division of Professional Studies",
  "email": "mflane@umbc.edu",
  "firstName": "Michaell",
  "fullName": "Michaell Lane",
  "lastName": "Lane",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaellLane.jpg",
  "refId": NumberLong(264),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab33153700399"),
  "department": "Psychology",
  "email": "elasson@umbc.edu",
  "firstName": "Dr.Elliot",
  "fullName": "Dr.Elliot D. Lasson",
  "lastName": "D. Lasson",
  "photoUrl": "https:\/\/edupal.co\/images\/ElliotLasson.jpg",
  "refId": NumberLong(265),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab3315370039a"),
  "department": "Division of Professional Studies",
  "email": "iris2@umbc.edu",
  "firstName": "Iris",
  "fullName": "Iris Laurencio",
  "lastName": "Laurencio",
  "photoUrl": "https:\/\/edupal.co\/images\/IrisLaurencio.jpg",
  "refId": NumberLong(266),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab3315370039b"),
  "department": "Division of Professional Studies",
  "email": "ljlewis@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura R. Lewis",
  "lastName": "R. Lewis",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraLewis.jpg",
  "refId": NumberLong(267),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab3315370039c"),
  "department": "Division of Professional Studies",
  "email": "jlieberm@umbc.edu",
  "firstName": "Joshua",
  "fullName": "Joshua Lieberman",
  "lastName": "Lieberman",
  "photoUrl": "https:\/\/edupal.co\/images\/JoshuaLieberman.jpg",
  "refId": NumberLong(268),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab3315370039d"),
  "department": "Division of Professional Studies",
  "email": "anthonyl@umbc.edu",
  "firstName": "Anthony",
  "fullName": "Anthony Lubiniecki",
  "lastName": "Lubiniecki",
  "photoUrl": "https:\/\/edupal.co\/images\/AnthonyLubiniecki.jpg",
  "refId": NumberLong(269),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab3315370039e"),
  "department": "Division of Professional Studies",
  "email": "mrlynch@umbc.edu",
  "firstName": "Minda",
  "fullName": "Minda Lynch",
  "lastName": "Lynch",
  "photoUrl": "https:\/\/edupal.co\/images\/MindaLynch.jpg",
  "refId": NumberLong(270),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab3315370039f"),
  "department": "Division of Professional Studies",
  "email": "lynn@umbc.edu",
  "firstName": "Yen-mow",
  "fullName": "Yen-mow Lynn",
  "lastName": "Lynn",
  "photoUrl": "https:\/\/edupal.co\/images\/Yen-mowLynn.jpg",
  "refId": NumberLong(271),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a0"),
  "department": "Division of Professional Studies",
  "email": "slyons1@umbc.edu",
  "firstName": "Sherry",
  "fullName": "Sherry Lyons",
  "lastName": "Lyons",
  "photoUrl": "https:\/\/edupal.co\/images\/SherryLyons.jpg",
  "refId": NumberLong(272),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a1"),
  "department": "Division of Professional Studies",
  "email": "maccarth@umbc.edu",
  "firstName": "John",
  "fullName": "John Maccarthy",
  "lastName": "Maccarthy",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnMaccarthy.jpg",
  "refId": NumberLong(273),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a2"),
  "department": "Division of Professional Studies",
  "email": "abdul@umbc.edu",
  "firstName": "Abdul",
  "fullName": "Abdul Majid",
  "lastName": "Majid",
  "photoUrl": "https:\/\/edupal.co\/images\/AbdulMajid.jpg",
  "refId": NumberLong(274),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a3"),
  "department": "Division of Professional Studies",
  "email": "martellow@umbc.edu",
  "firstName": "John",
  "fullName": "John Martello",
  "lastName": "Martello",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnMartello.jpg",
  "refId": NumberLong(275),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a4"),
  "department": "Division of Professional Studies",
  "email": "pmartin@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Martin",
  "lastName": "Martin",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulMartin.jpg",
  "refId": NumberLong(276),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a5"),
  "department": "Division of Professional Studies",
  "email": "jessmath@umbc.edu",
  "firstName": "Jesse-Douglas",
  "fullName": "Jesse-Douglas Mathewson",
  "lastName": "Mathewson",
  "photoUrl": "https:\/\/edupal.co\/images\/Jesse-DouglasMathewson.jpg",
  "refId": NumberLong(277),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a6"),
  "department": "Division of Professional Studies",
  "email": "nmay@umbc.edu",
  "firstName": "Nora",
  "fullName": "Nora May",
  "lastName": "May",
  "photoUrl": "https:\/\/edupal.co\/images\/NoraMay.jpg",
  "refId": NumberLong(278),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a7"),
  "department": "Division of Professional Studies",
  "email": "mcintyre@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Mcintyre",
  "lastName": "Mcintyre",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinMcintyre.jpg",
  "refId": NumberLong(279),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a8"),
  "department": "Division of Professional Studies",
  "email": "jmilatzo@umbc.edu",
  "firstName": "John",
  "fullName": "John Milatzo",
  "lastName": "Milatzo",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnMilatzo.jpg",
  "refId": NumberLong(280),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003a9"),
  "department": "Division of Professional Studies",
  "email": "kmilter@umbc.edu",
  "firstName": "Kati",
  "fullName": "Kati Milter",
  "lastName": "Milter",
  "photoUrl": "https:\/\/edupal.co\/images\/KatiMilter.jpg",
  "refId": NumberLong(281),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003aa"),
  "department": "Division of Professional Studies",
  "email": "hmoore2@umbc.edu",
  "firstName": "Heidi",
  "fullName": "Heidi moore",
  "lastName": "moore",
  "photoUrl": "https:\/\/edupal.co\/images\/HeidiMoore.jpg",
  "refId": NumberLong(283),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003ab"),
  "department": "Division of Professional Studies",
  "email": "suelnlaf@umbc.edu",
  "firstName": "Sue Ellen",
  "fullName": "Sue Ellen Morakinyo",
  "lastName": "Morakinyo",
  "photoUrl": "https:\/\/edupal.co\/images\/SueEllenMorakinyo.jpg",
  "refId": NumberLong(284),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003ac"),
  "department": "Division of Professional Studies",
  "email": "bnewton@umbc.edu",
  "firstName": "Brent",
  "fullName": "Brent Newton",
  "lastName": "Newton",
  "photoUrl": "https:\/\/edupal.co\/images\/BrentNewton.jpg",
  "refId": NumberLong(286),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003ad"),
  "department": "Division of Professional Studies",
  "email": "sknicht@umbc.edu",
  "firstName": "Sandra",
  "fullName": "Sandra Nicht",
  "lastName": "Nicht",
  "photoUrl": "https:\/\/edupal.co\/images\/SandraNicht.jpg",
  "refId": NumberLong(287),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003ae"),
  "department": "Division of Professional Studies",
  "email": "moliver@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Oliver",
  "lastName": "Oliver",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelOliver.jpg",
  "refId": NumberLong(288),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003af"),
  "department": "Division of Professional Studies",
  "email": "papadaki@umbc.edu",
  "firstName": "Aristeides",
  "fullName": "Aristeides Papadakis",
  "lastName": "Papadakis",
  "photoUrl": "https:\/\/edupal.co\/images\/AristeidesPapadakis.jpg",
  "refId": NumberLong(289),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b0"),
  "department": "Division of Professional Studies",
  "email": "apavlak@umbc.edu",
  "firstName": "Alex",
  "fullName": "Alex Pavlak",
  "lastName": "Pavlak",
  "photoUrl": "https:\/\/edupal.co\/images\/AlexPavlak.jpg",
  "refId": NumberLong(290),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b1"),
  "department": "Division of Professional Studies",
  "email": "sandyptr@umbc.edu",
  "firstName": "Sandra",
  "fullName": "Sandra Peterson",
  "lastName": "Peterson",
  "photoUrl": "https:\/\/edupal.co\/images\/SandraPeterson.jpg",
  "refId": NumberLong(291),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b2"),
  "department": "Division of Professional Studies",
  "email": "kevinp@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Pomfret",
  "lastName": "Pomfret",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinPomfret.jpg",
  "refId": NumberLong(292),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b3"),
  "department": "Division of Professional Studies",
  "email": "jporter@umbc.edu",
  "firstName": "Jane",
  "fullName": "Jane Porter",
  "lastName": "Porter",
  "photoUrl": "https:\/\/edupal.co\/images\/JanePorter.jpg",
  "refId": NumberLong(293),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b4"),
  "department": "Division of Professional Studies",
  "email": "mrahman@umbc.edu",
  "firstName": "Mahfuzur",
  "fullName": "Mahfuzur Rahman",
  "lastName": "Rahman",
  "photoUrl": "https:\/\/edupal.co\/images\/MahfuzurRahman.jpg",
  "refId": NumberLong(294),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b5"),
  "department": "Division of Professional Studies",
  "email": "randles@umbc.edu",
  "firstName": "J. Scott",
  "fullName": "J. Scott Randles",
  "lastName": "Randles",
  "photoUrl": "https:\/\/edupal.co\/images\/J.ScottRandles.jpg",
  "refId": NumberLong(295),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b6"),
  "department": "Division of Professional Studies",
  "email": "rappazzo@umbc.edu",
  "firstName": "Wendy",
  "fullName": "Wendy Rappazzo",
  "lastName": "Rappazzo",
  "photoUrl": "https:\/\/edupal.co\/images\/WendyRappazzo.jpg",
  "refId": NumberLong(296),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b7"),
  "department": "Division of Professional Studies",
  "email": "jeffray@umbc.edu",
  "firstName": "Jeffery",
  "fullName": "Jeffery Ray",
  "lastName": "Ray",
  "photoUrl": "https:\/\/edupal.co\/images\/JefferyRay.jpg",
  "refId": NumberLong(297),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b8"),
  "department": "UMBC at the Universities at Shady Grove",
  "email": "regimbal@umbc.edu",
  "firstName": "Ray",
  "fullName": "Ray Regimabal",
  "lastName": "Regimabal",
  "photoUrl": "https:\/\/edupal.co\/images\/RayRegimabal.jpg",
  "refId": NumberLong(299),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003b9"),
  "department": "Division of Professional Studies",
  "email": "rrivkin@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Rivkin",
  "lastName": "Rivkin",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertRivkin.jpg",
  "refId": NumberLong(300),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003ba"),
  "department": "Division of Professional Studies",
  "email": "droberts@umbc.edu",
  "firstName": "Darryl",
  "fullName": "Darryl Robertson",
  "lastName": "Robertson",
  "photoUrl": "https:\/\/edupal.co\/images\/DarrylRobertson.jpg",
  "refId": NumberLong(301),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003bb"),
  "department": "Division of Professional Studies",
  "email": "lrowland@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Rowland",
  "lastName": "Rowland",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraRowland.jpg",
  "refId": NumberLong(302),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003bc"),
  "department": "Division of Professional Studies",
  "email": "erudow@umbc.edu",
  "firstName": "Edward",
  "fullName": "Edward Rudow",
  "lastName": "Rudow",
  "photoUrl": "https:\/\/edupal.co\/images\/EdwardRudow.jpg",
  "refId": NumberLong(303),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003bd"),
  "department": "Division of Professional Studies",
  "email": "grupert@umbc.edu",
  "firstName": "Geoffrey",
  "fullName": "Geoffrey Rupert",
  "lastName": "Rupert",
  "photoUrl": "https:\/\/edupal.co\/images\/GeoffreyRupert.jpg",
  "refId": NumberLong(304),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003be"),
  "department": "Division of Professional Studies",
  "email": "esadners@umbc.edu",
  "firstName": "Ethan",
  "fullName": "Ethan Sanders",
  "lastName": "Sanders",
  "photoUrl": "https:\/\/edupal.co\/images\/EthanSanders.jpg",
  "refId": NumberLong(305),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003bf"),
  "department": "Division of Professional Studies",
  "email": "jschlee@umbc.edu",
  "firstName": "John",
  "fullName": "John Schlee",
  "lastName": "Schlee",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnSchlee.jpg",
  "refId": NumberLong(306),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c0"),
  "department": "Division of Professional Studies",
  "email": "pschnur@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Schnur",
  "lastName": "Schnur",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulSchnur.jpg",
  "refId": NumberLong(307),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c1"),
  "department": "Division of Professional Studies",
  "email": "vscott@umbc.edu",
  "firstName": "Valeri",
  "fullName": "Valeri Scott",
  "lastName": "Scott",
  "photoUrl": "https:\/\/edupal.co\/images\/ValeriScott.jpg",
  "refId": NumberLong(308),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c2"),
  "department": "Division of Professional Studies",
  "email": "ascriv1@umbc.edu",
  "firstName": "Alsiha",
  "fullName": "Alsiha Scrivens",
  "lastName": "Scrivens",
  "photoUrl": "https:\/\/edupal.co\/images\/AlsihaScrivens.jpg",
  "refId": NumberLong(309),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c3"),
  "department": "Division of Professional Studies",
  "email": "escully@umbc.edu",
  "firstName": "Erik",
  "fullName": "Erik Scully",
  "lastName": "Scully",
  "photoUrl": "https:\/\/edupal.co\/images\/ErikScully.jpg",
  "refId": NumberLong(310),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c4"),
  "department": "Division of Professional Studies",
  "email": "servatiu@umbc.edu",
  "firstName": "Nancy",
  "fullName": "Nancy Servatius",
  "lastName": "Servatius",
  "photoUrl": "https:\/\/edupal.co\/images\/NancyServatius.jpg",
  "refId": NumberLong(311),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c5"),
  "department": "Division of Professional Studies",
  "email": "jshannon@umbc.edu",
  "firstName": "James",
  "fullName": "James Shannon",
  "lastName": "Shannon",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesShannon.jpg",
  "refId": NumberLong(312),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c6"),
  "department": "Division of Professional Studies",
  "email": "carsharp1@umbc.edu",
  "firstName": "Caroline",
  "fullName": "Caroline Sharp",
  "lastName": "Sharp",
  "photoUrl": "https:\/\/edupal.co\/images\/CarolineSharp.jpg",
  "refId": NumberLong(313),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c7"),
  "department": "Division of Professional Studies",
  "email": "ljones@umbc.edu",
  "firstName": "Linda",
  "fullName": "Linda Shern",
  "lastName": "Shern",
  "photoUrl": "https:\/\/edupal.co\/images\/LindaShern.jpg",
  "refId": NumberLong(314),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c8"),
  "department": "Division of Professional Studies",
  "email": "jshin2@umbc.edu",
  "firstName": "Joan",
  "fullName": "Joan Shin",
  "lastName": "Shin",
  "photoUrl": "https:\/\/edupal.co\/images\/JoanShin.jpg",
  "refId": NumberLong(315),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003c9"),
  "department": "Division of Professional Studies",
  "email": "signhy@umbc.edu",
  "firstName": "Yashoda",
  "fullName": "Yashoda Singh",
  "lastName": "Singh",
  "photoUrl": "https:\/\/edupal.co\/images\/YashodaSingh.jpg",
  "refId": NumberLong(316),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb946f975ab331537003ca"),
  "department": "Division of Professional Studies",
  "email": "sirkis@umbc.edu",
  "firstName": "Sharon",
  "fullName": "Sharon Sirkis",
  "lastName": "Sirkis",
  "photoUrl": "https:\/\/edupal.co\/images\/SharonSirkis.jpg",
  "refId": NumberLong(317),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003cb"),
  "department": "Division of Professional Studies",
  "email": "aosmith@umbc.edu",
  "firstName": "Adrian",
  "fullName": "Adrian Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/AdrianSmith.jpg",
  "refId": NumberLong(318),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003cc"),
  "department": "Division of Professional Studies",
  "email": "snsmith@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanSmith.jpg",
  "refId": NumberLong(319),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003cd"),
  "department": "Division of Professional Studies",
  "email": "jassolo@umbc.edu",
  "firstName": "Janet",
  "fullName": "Janet Solomon",
  "lastName": "Solomon",
  "photoUrl": "https:\/\/edupal.co\/images\/JanetSolomon.jpg",
  "refId": NumberLong(320),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ce"),
  "department": "Division of Professional Studies",
  "email": "sonnensc@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Sonnenschein",
  "lastName": "Sonnenschein",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanSonnenschein.jpg",
  "refId": NumberLong(321),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003cf"),
  "department": "Division of Professional Studies",
  "email": "squire@umbc.edu",
  "firstName": "Jon",
  "fullName": "Jon Squire",
  "lastName": "Squire",
  "photoUrl": "https:\/\/edupal.co\/images\/JonSquire.jpg",
  "refId": NumberLong(322),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d0"),
  "department": "Division of Professional Studies",
  "email": "stephens@umbc.edu",
  "firstName": "Arthur",
  "fullName": "Arthur Stepehns",
  "lastName": "Stepehns",
  "photoUrl": "https:\/\/edupal.co\/images\/ArthurStepehns.jpg",
  "refId": NumberLong(323),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d1"),
  "department": "Division of Professional Studies",
  "email": "jstraus@umbc.edu",
  "firstName": "Jacob",
  "fullName": "Jacob Straus",
  "lastName": "Straus",
  "photoUrl": "https:\/\/edupal.co\/images\/JacobStraus.jpg",
  "refId": NumberLong(324),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d2"),
  "department": "Division of Professional Studies",
  "email": "sufian@umbc.edu",
  "firstName": "Meryl",
  "fullName": "Meryl Sufian",
  "lastName": "Sufian",
  "photoUrl": "https:\/\/edupal.co\/images\/MerylSufian.jpg",
  "refId": NumberLong(325),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d3"),
  "department": "Division of Professional Studies",
  "email": "atang@umbc.edu",
  "firstName": "Alex",
  "fullName": "Alex Tang",
  "lastName": "Tang",
  "photoUrl": "https:\/\/edupal.co\/images\/AlexTang.jpg",
  "refId": NumberLong(326),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d4"),
  "department": "Division of Professional Studies",
  "email": "tarner@umbc.edu",
  "firstName": "Nina",
  "fullName": "Nina Tarner",
  "lastName": "Tarner",
  "photoUrl": "https:\/\/edupal.co\/images\/NinaTarner.jpg",
  "refId": NumberLong(327),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d5"),
  "department": "Division of Professional Studies",
  "email": "taylor7@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Taylor",
  "lastName": "Taylor",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardTaylor.jpg",
  "refId": NumberLong(328),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d6"),
  "department": "Division of Professional Studies",
  "email": "ctemple@umbc.edu",
  "firstName": "Christel",
  "fullName": "Christel Temple",
  "lastName": "Temple",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristelTemple.jpg",
  "refId": NumberLong(329),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d7"),
  "department": "Division of Professional Studies",
  "email": "terryt@umbc.edu",
  "firstName": "Terry",
  "fullName": "Terry Thompson",
  "lastName": "Thompson",
  "photoUrl": "https:\/\/edupal.co\/images\/TerryThompson.jpg",
  "refId": NumberLong(330),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d8"),
  "department": "Division of Professional Studies",
  "email": "torge1@umbc.edu",
  "firstName": "Andrew",
  "fullName": "Andrew Torge",
  "lastName": "Torge",
  "photoUrl": "https:\/\/edupal.co\/images\/AndrewTorge.jpg",
  "refId": NumberLong(331),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003d9"),
  "department": "Division of Professional Studies",
  "email": "tiffani@umbc.edu",
  "firstName": "Tiffanie",
  "fullName": "Tiffanie Tsui",
  "lastName": "Tsui",
  "photoUrl": "https:\/\/edupal.co\/images\/TiffanieTsui.jpg",
  "refId": NumberLong(332),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003da"),
  "department": "Division of Professional Studies",
  "email": "zeynep@umbc.edu",
  "firstName": "Zeynep",
  "fullName": "Zeynep Tufekcioglu",
  "lastName": "Tufekcioglu",
  "photoUrl": "https:\/\/edupal.co\/images\/ZeynepTufekcioglu.jpg",
  "refId": NumberLong(333),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003db"),
  "department": "Division of Professional Studies",
  "email": "ann9@umbc.edu",
  "firstName": "Anna Van",
  "fullName": "Anna Van Dam",
  "lastName": "Dam",
  "photoUrl": "https:\/\/edupal.co\/images\/AnnaVanDam.jpg",
  "refId": NumberLong(334),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003dc"),
  "department": "Division of Professional Studies",
  "email": "krishv@umbc.edu",
  "firstName": "Krish",
  "fullName": "Krish Venkat",
  "lastName": "Venkat",
  "photoUrl": "https:\/\/edupal.co\/images\/KrishVenkat.jpg",
  "refId": NumberLong(335),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003dd"),
  "department": "Division of Professional Studies",
  "email": "kerczek@umbc.edu",
  "firstName": "Christian",
  "fullName": "Christian Vonkerczek",
  "lastName": "Vonkerczek",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristianVonkerczek.jpg",
  "refId": NumberLong(336),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003de"),
  "department": "Division of Professional Studies",
  "email": "ronaldw@umbc.edu",
  "firstName": "Ronald",
  "fullName": "Ronald Walters",
  "lastName": "Walters",
  "photoUrl": "https:\/\/edupal.co\/images\/RonaldWalters.jpg",
  "refId": NumberLong(337),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003df"),
  "department": "Division of Professional Studies",
  "email": "sarahwarner@umbc.edu",
  "firstName": "Sarah",
  "fullName": "Sarah Warner",
  "lastName": "Warner",
  "photoUrl": "https:\/\/edupal.co\/images\/SarahWarner.jpg",
  "refId": NumberLong(338),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e0"),
  "department": "Division of Professional Studies",
  "email": "stuarthw@umbc.edu",
  "firstName": "Stuart",
  "fullName": "Stuart Weinstein",
  "lastName": "Weinstein",
  "photoUrl": "https:\/\/edupal.co\/images\/StuartWeinstein.jpg",
  "refId": NumberLong(339),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e1"),
  "department": "Division of Professional Studies",
  "email": "wexler@umbc.edu",
  "firstName": "Victor",
  "fullName": "Victor Wexler",
  "lastName": "Wexler",
  "photoUrl": "https:\/\/edupal.co\/images\/VictorWexler.jpg",
  "refId": NumberLong(340),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e2"),
  "department": "Division of Professional Studies",
  "email": "rwiggi1@umbc.edi",
  "firstName": "Ryan",
  "fullName": "Ryan Wiggins",
  "lastName": "Wiggins",
  "photoUrl": "https:\/\/edupal.co\/images\/RyanWiggins.jpg",
  "refId": NumberLong(341),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e3"),
  "department": "Division of Professional Studies",
  "email": "mweinb2@umbc.edu",
  "firstName": "Mary",
  "fullName": "Mary Wilson",
  "lastName": "Wilson",
  "photoUrl": "https:\/\/edupal.co\/images\/MaryWilson.jpg",
  "refId": NumberLong(342),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e4"),
  "department": "Division of Professional Studies",
  "email": "rwilson@umbc.edu",
  "firstName": "Ronald",
  "fullName": "Ronald Wilson",
  "lastName": "Wilson",
  "photoUrl": "https:\/\/edupal.co\/images\/RonaldWilson.jpg",
  "refId": NumberLong(343),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e5"),
  "department": "Division of Professional Studies",
  "email": "twood@umbc.edu",
  "firstName": "Timothy",
  "fullName": "Timothy Wood",
  "lastName": "Wood",
  "photoUrl": "https:\/\/edupal.co\/images\/TimothyWood.jpg",
  "refId": NumberLong(344),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e6"),
  "department": "Division of Professional Studies",
  "email": "xudihua2008@umbc.edu",
  "firstName": "Dihua",
  "fullName": "Dihua Xu",
  "lastName": "Xu",
  "photoUrl": "https:\/\/edupal.co\/images\/DihuaXu.jpg",
  "refId": NumberLong(345),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e7"),
  "department": "Division of Professional Studies",
  "email": "yangx@umbc.edu",
  "firstName": "Xiuzhu",
  "fullName": "Xiuzhu Yang",
  "lastName": "Yang",
  "photoUrl": "https:\/\/edupal.co\/images\/XiuzhuYang.jpg",
  "refId": NumberLong(346),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e8"),
  "department": "Division of Professional Studies",
  "email": "yushu1@umbc.edu",
  "firstName": "Yushu",
  "fullName": "Yushu Yang",
  "lastName": "Yang",
  "photoUrl": "https:\/\/edupal.co\/images\/YushuYang.jpg",
  "refId": NumberLong(347),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003e9"),
  "department": "Division of Professional Studies",
  "email": "annette2@umbc.edu",
  "firstName": "Annette",
  "fullName": "Annette Zeender",
  "lastName": "Zeender",
  "photoUrl": "https:\/\/edupal.co\/images\/AnnetteZeender.jpg",
  "refId": NumberLong(348),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ea"),
  "department": "Division of Professional Studies",
  "email": "jamesz@umbc.edu",
  "firstName": "James",
  "fullName": "James Ziegler",
  "lastName": "Ziegler",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesZiegler.jpg",
  "refId": NumberLong(349),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003eb"),
  "department": "Division of Professional Studies",
  "email": "Idecola@comcast.net",
  "firstName": "Felix de",
  "fullName": "Felix de Cola",
  "lastName": "Cola",
  "photoUrl": "https:\/\/edupal.co\/images\/FelixdeCola.jpg",
  "refId": NumberLong(350),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ec"),
  "department": "Economics",
  "email": "anoruo@umbc.edu",
  "firstName": "Emmanual",
  "fullName": "Emmanual Anoruo",
  "lastName": "Anoruo",
  "photoUrl": "https:\/\/edupal.co\/images\/EmmanualAnoruo.jpg",
  "refId": NumberLong(351),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ed"),
  "department": "Economics",
  "email": "reamscpa@umbc.edu",
  "firstName": "Ronald",
  "fullName": "Ronald Antlitz",
  "lastName": "Antlitz",
  "photoUrl": "https:\/\/edupal.co\/images\/RonaldAntlitz.jpg",
  "refId": NumberLong(352),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ee"),
  "department": "Economics",
  "email": "cbondi1@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Bondi",
  "lastName": "Bondi",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesBondi.jpg",
  "refId": NumberLong(353),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ef"),
  "department": "Economics",
  "email": "mbradley@umbc.edu",
  "firstName": "Mike",
  "fullName": "Mike Bradley",
  "lastName": "Bradley",
  "photoUrl": "https:\/\/edupal.co\/images\/MikeBradley.jpg",
  "refId": NumberLong(354),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f0"),
  "department": "Economics",
  "email": "mbroache@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Broache",
  "lastName": "Broache",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelBroache.jpg",
  "refId": NumberLong(355),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f1"),
  "department": "Economics",
  "email": "bobc@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Carpenter",
  "lastName": "Carpenter",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertCarpenter.jpg",
  "refId": NumberLong(356),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f3"),
  "department": "Economics",
  "email": "coates@umbc.edu",
  "firstName": "Dennis",
  "fullName": "Dennis Coates",
  "lastName": "Coates",
  "photoUrl": "https:\/\/edupal.co\/images\/DennisCoates.jpg",
  "refId": NumberLong(358),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f2"),
  "department": "Economics",
  "email": "carroll@umbc.edu",
  "firstName": "Kathleen",
  "fullName": "Kathleen Carroll",
  "lastName": "Carroll",
  "photoUrl": "https:\/\/edupal.co\/images\/KathleenCarroll.jpg",
  "refId": NumberLong(357),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f4"),
  "department": "Economics",
  "email": "richardc@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Cole",
  "lastName": "Cole",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardCole.jpg",
  "refId": NumberLong(359),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f5"),
  "department": "Economics",
  "email": "coomber@umbc.edu",
  "firstName": "William",
  "fullName": "William Coomber",
  "lastName": "Coomber",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamCoomber.jpg",
  "refId": NumberLong(360),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f6"),
  "department": "Economics",
  "email": "adavis@umbc.edu",
  "firstName": "Alexis",
  "fullName": "Alexis Davis",
  "lastName": "Davis",
  "photoUrl": "https:\/\/edupal.co\/images\/AlexisDavis.jpg",
  "refId": NumberLong(361),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f7"),
  "department": "Economics",
  "email": "ldickson@umbc.edu",
  "firstName": "Lisa",
  "fullName": "Lisa Dickson",
  "lastName": "Dickson",
  "photoUrl": "https:\/\/edupal.co\/images\/LisaDickson.jpg",
  "refId": NumberLong(362),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f8"),
  "department": "Economics",
  "email": "farrow@umbc.edu",
  "firstName": "Scott",
  "fullName": "Scott Farrow",
  "lastName": "Farrow",
  "photoUrl": "https:\/\/edupal.co\/images\/ScottFarrow.jpg",
  "refId": NumberLong(363),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003f9"),
  "department": "Economics",
  "email": "dgetter@umbc.edu",
  "firstName": "Darryl",
  "fullName": "Darryl Getter",
  "lastName": "Getter",
  "photoUrl": "https:\/\/edupal.co\/images\/DarrylGetter.jpg",
  "refId": NumberLong(364),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003fa"),
  "department": "Economics",
  "email": "gindling@umbc.edu",
  "firstName": "Thomas H",
  "fullName": "Thomas H Gindling",
  "lastName": "Gindling",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasHGindling.jpg",
  "refId": NumberLong(365),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003fb"),
  "department": "Economics",
  "email": "thardy@umbc.edu",
  "firstName": "Timothy",
  "fullName": "Timothy Hardy",
  "lastName": "Hardy",
  "photoUrl": "https:\/\/edupal.co\/images\/TimothyHardy.jpg",
  "refId": NumberLong(366),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003fc"),
  "department": "Economics",
  "email": "akaikai@umbc.edu",
  "firstName": "Alpha",
  "fullName": "Alpha Kaikai",
  "lastName": "Kaikai",
  "photoUrl": "https:\/\/edupal.co\/images\/AlphaKaikai.jpg",
  "refId": NumberLong(367),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003fd"),
  "department": "Economics",
  "email": "fkelly1@umbc.edu",
  "firstName": "Nick",
  "fullName": "Nick Kelly",
  "lastName": "Kelly",
  "photoUrl": "https:\/\/edupal.co\/images\/NickKelly.jpg",
  "refId": NumberLong(368),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003fe"),
  "department": "Economics",
  "email": "lamdin@umbc.edu",
  "firstName": "Douglas",
  "fullName": "Douglas Lamdin",
  "lastName": "Lamdin",
  "photoUrl": "https:\/\/edupal.co\/images\/DouglasLamdin.jpg",
  "refId": NumberLong(369),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab331537003ff"),
  "department": "Economics",
  "email": "lord@umbc.edu",
  "firstName": "William",
  "fullName": "William Lord",
  "lastName": "Lord",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamLord.jpg",
  "refId": NumberLong(370),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700400"),
  "department": "Economics",
  "email": "bingma@umbc.edu",
  "firstName": "Bing",
  "fullName": "Bing Ma",
  "lastName": "Ma",
  "photoUrl": "https:\/\/edupal.co\/images\/BingMa.jpg",
  "refId": NumberLong(371),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700401"),
  "department": "Economics",
  "email": "charlesm@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Mcbride",
  "lastName": "Mcbride",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesMcbride.jpg",
  "refId": NumberLong(372),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700402"),
  "department": "Economics",
  "email": "mcconnel@umbc.edu",
  "firstName": "Virginia",
  "fullName": "Virginia Mcconnell",
  "lastName": "Mcconnell",
  "photoUrl": "https:\/\/edupal.co\/images\/VirginiaMcconnell.jpg",
  "refId": NumberLong(373),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700403"),
  "department": "Economics",
  "email": "medicus@umbc.edu",
  "firstName": "Suzann",
  "fullName": "Suzann Medicus",
  "lastName": "Medicus",
  "photoUrl": "https:\/\/edupal.co\/images\/SuzannMedicus.jpg",
  "refId": NumberLong(374),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700404"),
  "department": "Economics",
  "email": "mitch@umbc.edu",
  "firstName": "David",
  "fullName": "David Mitch",
  "lastName": "Mitch",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidMitch.jpg",
  "refId": NumberLong(375),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700405"),
  "department": "Economics",
  "email": "kmulchan@umbc.edu",
  "firstName": "Kabir",
  "fullName": "Kabir Mulchandani",
  "lastName": "Mulchandani",
  "photoUrl": "https:\/\/edupal.co\/images\/KabirMulchandani.jpg",
  "refId": NumberLong(376),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700406"),
  "department": "Economics",
  "email": "jasonp@umbc.edu",
  "firstName": "Jason",
  "fullName": "Jason Palmateer",
  "lastName": "Palmateer",
  "photoUrl": "https:\/\/edupal.co\/images\/JasonPalmateer.jpg",
  "refId": NumberLong(377),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700407"),
  "department": "Economics",
  "email": "mrose@umbc.edu",
  "firstName": "Morgan",
  "fullName": "Morgan Rose",
  "lastName": "Rose",
  "photoUrl": "https:\/\/edupal.co\/images\/MorganRose.jpg",
  "refId": NumberLong(378),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700408"),
  "department": "Economics",
  "email": "jeanne@umbc.edu",
  "firstName": "Jeanne",
  "fullName": "Jeanne Stmartin",
  "lastName": "Stmartin",
  "photoUrl": "https:\/\/edupal.co\/images\/JeanneStmartin.jpg",
  "refId": NumberLong(379),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700409"),
  "department": "Economics",
  "email": "wtakacs@umbc.edu",
  "firstName": "Wendy",
  "fullName": "Wendy Takacs",
  "lastName": "Takacs",
  "photoUrl": "https:\/\/edupal.co\/images\/WendyTakacs.jpg",
  "refId": NumberLong(380),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370040a"),
  "department": "Economics",
  "email": "sharan2@umbc.edu",
  "firstName": "Sharanjit",
  "fullName": "Sharanjit Toor",
  "lastName": "Toor",
  "photoUrl": "https:\/\/edupal.co\/images\/SharanjitToor.jpg",
  "refId": NumberLong(381),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370040b"),
  "department": "Economics",
  "email": "ckviauro@umbc.edu",
  "firstName": "Christelle",
  "fullName": "Christelle Viauroux",
  "lastName": "Viauroux",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristelleViauroux.jpg",
  "refId": NumberLong(382),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370040c"),
  "department": "Economics",
  "email": "awood@umbc.edu",
  "firstName": "Allan",
  "fullName": "Allan Wood",
  "lastName": "Wood",
  "photoUrl": "https:\/\/edupal.co\/images\/AllanWood.jpg",
  "refId": NumberLong(383),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370040d"),
  "department": "Economics",
  "email": "cmyuan@umbc.edu",
  "firstName": "Chunming",
  "fullName": "Chunming Yuan",
  "lastName": "Yuan",
  "photoUrl": "https:\/\/edupal.co\/images\/ChunmingYuan.jpg",
  "refId": NumberLong(384),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370040e"),
  "department": "Education",
  "email": "nberge@umbc.edu",
  "firstName": "Nancy",
  "fullName": "Nancy Berge",
  "lastName": "Berge",
  "photoUrl": "https:\/\/edupal.co\/images\/NancyBerge.jpg",
  "refId": NumberLong(386),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370040f"),
  "department": "Education",
  "email": "blunck@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Blunck",
  "lastName": "Blunck",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanBlunck.jpg",
  "refId": NumberLong(388),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700410"),
  "department": "Education",
  "email": "Barbara.Bourne@umbc.edu",
  "firstName": "Barbara",
  "fullName": "Barbara Bourne",
  "lastName": "Bourne",
  "photoUrl": "https:\/\/edupal.co\/images\/BarbaraBourne.jpg",
  "refId": NumberLong(389),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700411"),
  "department": "Education",
  "email": "dcolesr@umbc.edu",
  "firstName": "Dennis",
  "fullName": "Dennis Cole",
  "lastName": "Cole",
  "photoUrl": "https:\/\/edupal.co\/images\/DennisCole.jpg",
  "refId": NumberLong(392),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700412"),
  "department": "Education",
  "email": "costello@umbc.edu",
  "firstName": "Peg",
  "fullName": "Peg Costello",
  "lastName": "Costello",
  "photoUrl": "https:\/\/edupal.co\/images\/PegCostello.jpg",
  "refId": NumberLong(393),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700413"),
  "department": "Education",
  "email": "dannas@umbc.edu",
  "firstName": "Sandy",
  "fullName": "Sandy Danna",
  "lastName": "Danna",
  "photoUrl": "https:\/\/edupal.co\/images\/SandyDanna.jpg",
  "refId": NumberLong(394),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700414"),
  "department": "Education",
  "email": "le1@umbc.edu",
  "firstName": "Lori",
  "fullName": "Lori Edmonds",
  "lastName": "Edmonds",
  "photoUrl": "https:\/\/edupal.co\/images\/LoriEdmonds.jpg",
  "refId": NumberLong(395),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700415"),
  "department": "Education",
  "email": "bevfeig@umbc.edu",
  "firstName": "Beverly",
  "fullName": "Beverly Feig",
  "lastName": "Feig",
  "photoUrl": "https:\/\/edupal.co\/images\/BeverlyFeig.jpg",
  "refId": NumberLong(396),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700416"),
  "department": "Education",
  "email": "fitzhugh@umbc.edu",
  "firstName": "William",
  "fullName": "William Fitzhugh",
  "lastName": "Fitzhugh",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamFitzhugh.jpg",
  "refId": NumberLong(397),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700417"),
  "department": "Education",
  "email": "frick@umbc.edu",
  "firstName": "Jerri",
  "fullName": "Jerri Frick",
  "lastName": "Frick",
  "photoUrl": "https:\/\/edupal.co\/images\/JerriFrick.jpg",
  "refId": NumberLong(398),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700418"),
  "department": "Education",
  "email": "gmar@umbc.edu",
  "firstName": "Margaret",
  "fullName": "Margaret Golibersuch",
  "lastName": "Golibersuch",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaretGolibersuch.jpg",
  "refId": NumberLong(399),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700419"),
  "department": "Education",
  "email": "grisham@umbc.edu",
  "firstName": "Colleen",
  "fullName": "Colleen Grisham",
  "lastName": "Grisham",
  "photoUrl": "https:\/\/edupal.co\/images\/ColleenGrisham.jpg",
  "refId": NumberLong(400),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370041a"),
  "department": "Education",
  "email": "vheller@umbc.edu",
  "firstName": "Valerie",
  "fullName": "Valerie Heller",
  "lastName": "Heller",
  "photoUrl": "https:\/\/edupal.co\/images\/ValerieHeller.jpg",
  "refId": NumberLong(401),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370041b"),
  "department": "Education",
  "email": "pamelah@umbc.edu",
  "firstName": "Pamela",
  "fullName": "Pamela Howland",
  "lastName": "Howland",
  "photoUrl": "https:\/\/edupal.co\/images\/PamelaHowland.jpg",
  "refId": NumberLong(402),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370041c"),
  "department": "Education",
  "email": "ira@umbc.edu",
  "firstName": "Katherine",
  "fullName": "Katherine Ira",
  "lastName": "Ira",
  "photoUrl": "https:\/\/edupal.co\/images\/KatherineIra.jpg",
  "refId": NumberLong(403),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370041d"),
  "department": "Education",
  "email": "sjianha@umbc.edu",
  "firstName": "Sunji",
  "fullName": "Sunji Jangha",
  "lastName": "Jangha",
  "photoUrl": "https:\/\/edupal.co\/images\/SunjiJangha.jpg",
  "refId": NumberLong(404),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370041e"),
  "department": "Education",
  "email": "jul@umbc.edu",
  "firstName": "Julie",
  "fullName": "Julie Jones",
  "lastName": "Jones",
  "photoUrl": "https:\/\/edupal.co\/images\/JulieJones.jpg",
  "refId": NumberLong(405),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab3315370041f"),
  "department": "Education",
  "email": "cjordan@umbc.edu",
  "firstName": "Cynthia",
  "fullName": "Cynthia Jordan",
  "lastName": "Jordan",
  "photoUrl": "https:\/\/edupal.co\/images\/CynthiaJordan.jpg",
  "refId": NumberLong(406),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700420"),
  "department": "Education",
  "email": "bking@umbc.edu",
  "firstName": "Betty",
  "fullName": "Betty King",
  "lastName": "King",
  "photoUrl": "https:\/\/edupal.co\/images\/BettyKing.jpg",
  "refId": NumberLong(407),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9470975ab33153700421"),
  "department": "Education",
  "email": "rlawton@umbc.edu",
  "firstName": "Rachele",
  "fullName": "Rachele Lawton",
  "lastName": "Lawton",
  "photoUrl": "https:\/\/edupal.co\/images\/RacheleLawton.jpg",
  "refId": NumberLong(408),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700422"),
  "department": "Education",
  "email": "lollar@umbc.edu",
  "firstName": "Ada",
  "fullName": "Ada Lollar",
  "lastName": "Lollar",
  "photoUrl": "https:\/\/edupal.co\/images\/AdaLollar.jpg",
  "refId": NumberLong(409),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700423"),
  "department": "Education",
  "email": "pwmorgan1@umbc.edu",
  "firstName": "Pamela",
  "fullName": "Pamela Morgan",
  "lastName": "Morgan",
  "photoUrl": "https:\/\/edupal.co\/images\/PamelaMorgan.jpg",
  "refId": NumberLong(410),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700424"),
  "department": "Education",
  "email": "jmurphy@umbc.edu",
  "firstName": "Joyce",
  "fullName": "Joyce Murphy",
  "lastName": "Murphy",
  "photoUrl": "https:\/\/edupal.co\/images\/JoyceMurphy.jpg",
  "refId": NumberLong(411),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700425"),
  "department": "Education",
  "email": "cnorth@umbc.edu",
  "firstName": "Cheryl",
  "fullName": "Cheryl North",
  "lastName": "North",
  "photoUrl": "https:\/\/edupal.co\/images\/CherylNorth.jpg",
  "refId": NumberLong(412),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700426"),
  "department": "Education",
  "email": "droaks@umbc.edu",
  "firstName": "David",
  "fullName": "David Oaks",
  "lastName": "Oaks",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidOaks.jpg",
  "refId": NumberLong(413),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700427"),
  "department": "Education",
  "email": "olivia@umbc.edu",
  "firstName": "Linda",
  "fullName": "Linda Oliva",
  "lastName": "Oliva",
  "photoUrl": "https:\/\/edupal.co\/images\/LindaOliva.jpg",
  "refId": NumberLong(414),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700428"),
  "department": "Education",
  "email": "rakes@umbc.edu",
  "firstName": "Christopher",
  "fullName": "Christopher Rakes",
  "lastName": "Rakes",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristopherRakes.jpg",
  "refId": NumberLong(415),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700429"),
  "department": "Education",
  "email": "mreamore@umbc.edu",
  "firstName": "Maria",
  "fullName": "Maria Reamore",
  "lastName": "Reamore",
  "photoUrl": "https:\/\/edupal.co\/images\/MariaReamore.jpg",
  "refId": NumberLong(416),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370042a"),
  "department": "Education",
  "email": "rivkin@umbc.edu",
  "firstName": "Mary",
  "fullName": "Mary Rivkin",
  "lastName": "Rivkin",
  "photoUrl": "https:\/\/edupal.co\/images\/MaryRivkin.jpg",
  "refId": NumberLong(417),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370042b"),
  "department": "Education",
  "email": "srosen@umbc.edu",
  "firstName": "Sara",
  "fullName": "Sara Rosen",
  "lastName": "Rosen",
  "photoUrl": "https:\/\/edupal.co\/images\/SaraRosen.jpg",
  "refId": NumberLong(418),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370042c"),
  "department": "Education",
  "email": "cherkyl@umbc.edu",
  "firstName": "Cheryl",
  "fullName": "Cheryl Rosenfeld",
  "lastName": "Rosenfeld",
  "photoUrl": "https:\/\/edupal.co\/images\/CherylRosenfeld.jpg",
  "refId": NumberLong(419),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370042d"),
  "department": "Education",
  "email": "kruben@umbc.edu",
  "firstName": "Kathy",
  "fullName": "Kathy Ruben",
  "lastName": "Ruben",
  "photoUrl": "https:\/\/edupal.co\/images\/KathyRuben.jpg",
  "refId": NumberLong(420),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370042e"),
  "department": "Education",
  "email": "msander@umbc.edu",
  "firstName": "Mavis",
  "fullName": "Mavis Sanders",
  "lastName": "Sanders",
  "photoUrl": "https:\/\/edupal.co\/images\/MavisSanders.jpg",
  "refId": NumberLong(421),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370042f"),
  "department": "Education",
  "email": "schaffer@umbc.edu",
  "firstName": "Eugene",
  "fullName": "Eugene Schaffer",
  "lastName": "Schaffer",
  "photoUrl": "https:\/\/edupal.co\/images\/EugeneSchaffer.jpg",
  "refId": NumberLong(422),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700430"),
  "department": "Education",
  "email": "Patricia.Scully@umbc.edu",
  "firstName": "Patricia",
  "fullName": "Patricia Scully",
  "lastName": "Scully",
  "photoUrl": "https:\/\/edupal.co\/images\/PatriciaScully.jpg",
  "refId": NumberLong(423),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700431"),
  "department": "Education",
  "email": "nshelton@umbc.edu",
  "firstName": "Nancy",
  "fullName": "Nancy Shelton",
  "lastName": "Shelton",
  "photoUrl": "https:\/\/edupal.co\/images\/NancyShelton.jpg",
  "refId": NumberLong(424),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700432"),
  "department": "Education",
  "email": "els@umbc.edu",
  "firstName": "Eryn",
  "fullName": "Eryn Sherman",
  "lastName": "Sherman",
  "photoUrl": "https:\/\/edupal.co\/images\/ErynSherman.jpg",
  "refId": NumberLong(425),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700433"),
  "department": "Education",
  "email": "shin@umbc.edu",
  "firstName": "Sarah",
  "fullName": "Sarah Shin",
  "lastName": "Shin",
  "photoUrl": "https:\/\/edupal.co\/images\/SarahShin.jpg",
  "refId": NumberLong(426),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700434"),
  "department": "Education",
  "email": "jsinger@umbc.edu",
  "firstName": "Jonathan",
  "fullName": "Jonathan Singer",
  "lastName": "Singer",
  "photoUrl": "https:\/\/edupal.co\/images\/JonathanSinger.jpg",
  "refId": NumberLong(428),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700435"),
  "department": "Education",
  "email": "small@umbc.edu",
  "firstName": "Sue",
  "fullName": "Sue Small",
  "lastName": "Small",
  "photoUrl": "https:\/\/edupal.co\/images\/SueSmall.jpg",
  "refId": NumberLong(429),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700436"),
  "department": "Education",
  "email": "hstein@umbc.edu",
  "firstName": "Hollis",
  "fullName": "Hollis Stein",
  "lastName": "Stein",
  "photoUrl": "https:\/\/edupal.co\/images\/HollisStein.jpg",
  "refId": NumberLong(430),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700437"),
  "department": "Education",
  "email": "tabaa@umbc.edu",
  "firstName": "Mary",
  "fullName": "Mary Tabaa",
  "lastName": "Tabaa",
  "photoUrl": "https:\/\/edupal.co\/images\/MaryTabaa.jpg",
  "refId": NumberLong(432),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700438"),
  "department": "Education",
  "email": "dianew@umbc.edu",
  "firstName": "Diane",
  "fullName": "Diane Wacks",
  "lastName": "Wacks",
  "photoUrl": "https:\/\/edupal.co\/images\/DianeWacks.jpg",
  "refId": NumberLong(433),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700439"),
  "department": "Education",
  "email": "vwilli5@umbc.edu",
  "firstName": "Vickie",
  "fullName": "Vickie Williams",
  "lastName": "Williams",
  "photoUrl": "https:\/\/edupal.co\/images\/VickieWilliams.jpg",
  "refId": NumberLong(434),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370043a"),
  "department": "Education",
  "email": "ewcraig@umbc.edu",
  "firstName": "Esther",
  "fullName": "Esther Wilson-Craig",
  "lastName": "Wilson-Craig",
  "photoUrl": "https:\/\/edupal.co\/images\/EstherWilson-Craig.jpg",
  "refId": NumberLong(435),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370043b"),
  "department": "Education",
  "email": "pyoung@umbc.edu",
  "firstName": "Patricia",
  "fullName": "Patricia Young",
  "lastName": "Young",
  "photoUrl": "https:\/\/edupal.co\/images\/PatriciaYoung.jpg",
  "refId": NumberLong(437),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370043c"),
  "department": "Education",
  "email": "r.dewit@umbc.edu",
  "firstName": "Rebekah de",
  "fullName": "Rebekah de wit",
  "lastName": "wit",
  "photoUrl": "https:\/\/edupal.co\/images\/Rebekahdewit.jpg",
  "refId": NumberLong(438),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370043d"),
  "department": "Emergency Health Services",
  "email": "bissell@umbc.edu",
  "firstName": "Rick",
  "fullName": "Rick Bissell",
  "lastName": "Bissell",
  "photoUrl": "https:\/\/edupal.co\/images\/RickBissell.jpg",
  "refId": NumberLong(439),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370043e"),
  "department": "Emergency Health Services",
  "email": "sdean@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Dean",
  "lastName": "Dean",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenDean.jpg",
  "refId": NumberLong(441),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370043f"),
  "department": "Emergency Health Services",
  "email": "dianeflint@umbc.edu",
  "firstName": "D .C.",
  "fullName": "D .C. Flint",
  "lastName": "Flint",
  "photoUrl": "https:\/\/edupal.co\/images\/D.C.Flint.jpg",
  "refId": NumberLong(442),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700440"),
  "department": "Emergency Health Services",
  "email": "hodgson1@umbc.edu",
  "firstName": "Luke",
  "fullName": "Luke Hodgson",
  "lastName": "Hodgson",
  "photoUrl": "https:\/\/edupal.co\/images\/LukeHodgson.jpg",
  "refId": NumberLong(444),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700441"),
  "department": "Emergency Health Services",
  "email": "kirkwood@umbc.edu",
  "firstName": "Skip",
  "fullName": "Skip Kirkwood",
  "lastName": "Kirkwood",
  "photoUrl": "https:\/\/edupal.co\/images\/SkipKirkwood.jpg",
  "refId": NumberLong(445),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700442"),
  "department": "Emergency Health Services",
  "email": "blawn001@umaryland.edu",
  "firstName": "Benjamin",
  "fullName": "Benjamin Lawner",
  "lastName": "Lawner",
  "photoUrl": "https:\/\/edupal.co\/images\/BenjaminLawner.jpg",
  "refId": NumberLong(446),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700443"),
  "department": "Emergency Health Services",
  "email": "dlebow1@umbc.edu",
  "firstName": "David",
  "fullName": "David Lebowitz",
  "lastName": "Lebowitz",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidLebowitz.jpg",
  "refId": NumberLong(447),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700444"),
  "department": "Emergency Health Services",
  "email": "clenk@umbc.edu",
  "firstName": "Crista",
  "fullName": "Crista Lenk",
  "lastName": "Lenk",
  "photoUrl": "https:\/\/edupal.co\/images\/CristaLenk.jpg",
  "refId": NumberLong(448),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700445"),
  "department": "Emergency Health Services",
  "email": "Matthew.Levy@umbc.edu",
  "firstName": "Matthew",
  "fullName": "Matthew Levy",
  "lastName": "Levy",
  "photoUrl": "https:\/\/edupal.co\/images\/MatthewLevy.jpg",
  "refId": NumberLong(449),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700446"),
  "department": "Emergency Health Services",
  "email": "mlusby1@umbc.edu",
  "firstName": "Meghan",
  "fullName": "Meghan Lusby-Treber",
  "lastName": "Lusby-Treber",
  "photoUrl": "https:\/\/edupal.co\/images\/MeghanLusby-Treber.jpg",
  "refId": NumberLong(450),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700447"),
  "department": "Emergency Health Services",
  "email": "jmitch@umbc.edu",
  "firstName": "Jeffrey",
  "fullName": "Jeffrey Mitchell",
  "lastName": "Mitchell",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffreyMitchell.jpg",
  "refId": NumberLong(452),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700448"),
  "department": "Emergency Health Services",
  "email": "jnable@umbc.edu",
  "firstName": "Jose",
  "fullName": "Jose Nable",
  "lastName": "Nable",
  "photoUrl": "https:\/\/edupal.co\/images\/JoseNable.jpg",
  "refId": NumberLong(453),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700449"),
  "department": "Emergency Health Services",
  "email": "polk@umbc.edu",
  "firstName": "Dwight",
  "fullName": "Dwight Polk",
  "lastName": "Polk",
  "photoUrl": "https:\/\/edupal.co\/images\/DwightPolk.jpg",
  "refId": NumberLong(454),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370044a"),
  "department": "Emergency Health Services",
  "email": "taigman@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Taigman",
  "lastName": "Taigman",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelTaigman.jpg",
  "refId": NumberLong(457),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370044b"),
  "department": "Emergency Health Services",
  "email": "mts1@umbc.edu",
  "firstName": "Margarita",
  "fullName": "Margarita Tsionsky",
  "lastName": "Tsionsky",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaritaTsionsky.jpg",
  "refId": NumberLong(458),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370044c"),
  "department": "Emergency Health Services",
  "email": "vidacovi@umbc.edu",
  "firstName": "William",
  "fullName": "William Vidacovich",
  "lastName": "Vidacovich",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamVidacovich.jpg",
  "refId": NumberLong(459),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370044d"),
  "department": "Emergency Health Services",
  "email": "walz@umbc.edu",
  "firstName": "Bruce",
  "fullName": "Bruce Walz",
  "lastName": "Walz",
  "photoUrl": "https:\/\/edupal.co\/images\/BruceWalz.jpg",
  "refId": NumberLong(460),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370044e"),
  "department": "Emergency Health Services",
  "email": "garywil1@umbc.edu",
  "firstName": "Gary",
  "fullName": "Gary Williams",
  "lastName": "Williams",
  "photoUrl": "https:\/\/edupal.co\/images\/GaryWilliams.jpg",
  "refId": NumberLong(462),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370044f"),
  "department": "Dresher Center for the Humanities",
  "email": "jberman@umbc.edu",
  "firstName": "Jessica",
  "fullName": "Jessica Berman",
  "lastName": "Berman",
  "photoUrl": "https:\/\/edupal.co\/images\/JessicaBerman.jpg",
  "refId": NumberLong(463),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700450"),
  "department": "English",
  "email": "rbloom2@umbc.edu",
  "firstName": "Ryan",
  "fullName": "Ryan Bloom",
  "lastName": "Bloom",
  "photoUrl": "https:\/\/edupal.co\/images\/RyanBloom.jpg",
  "refId": NumberLong(464),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700451"),
  "department": "English",
  "email": "lbrown@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Brown",
  "lastName": "Brown",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraBrown.jpg",
  "refId": NumberLong(465),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700452"),
  "department": "English",
  "email": "brugess@umbc.edu",
  "firstName": "Helen",
  "fullName": "Helen Burgess",
  "lastName": "Burgess",
  "photoUrl": "https:\/\/edupal.co\/images\/HelenBurgess.jpg",
  "refId": NumberLong(466),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700453"),
  "department": "English",
  "email": "jcarillo@umbc.edu",
  "firstName": "John",
  "fullName": "John Carillo",
  "lastName": "Carillo",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnCarillo.jpg",
  "refId": NumberLong(467),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700454"),
  "department": "English",
  "email": "corbett@umbc.edu",
  "firstName": "Christophe",
  "fullName": "Christophe Corbett",
  "lastName": "Corbett",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristopheCorbett.jpg",
  "refId": NumberLong(468),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700455"),
  "department": "English",
  "email": "dicuirci@umbc.edu",
  "firstName": "Lindsay",
  "fullName": "Lindsay DiCuirci",
  "lastName": "DiCuirci",
  "photoUrl": "https:\/\/edupal.co\/images\/LindsayDiCuirci.jpg",
  "refId": NumberLong(469),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700456"),
  "department": "English",
  "email": "bdunni25@msn.com",
  "firstName": "Brian",
  "fullName": "Brian Dunnigan",
  "lastName": "Dunnigan",
  "photoUrl": "https:\/\/edupal.co\/images\/BrianDunnigan.jpg",
  "refId": NumberLong(470),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700457"),
  "department": "English",
  "email": "falco@umbc.edu",
  "firstName": "Raphael",
  "fullName": "Raphael Falco",
  "lastName": "Falco",
  "photoUrl": "https:\/\/edupal.co\/images\/RaphaelFalco.jpg",
  "refId": NumberLong(471),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700458"),
  "department": "English",
  "email": "rfaraubau@umbc.edu",
  "firstName": "Robin",
  "fullName": "Robin Farabaugh",
  "lastName": "Farabaugh",
  "photoUrl": "https:\/\/edupal.co\/images\/RobinFarabaugh.jpg",
  "refId": NumberLong(472),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700459"),
  "department": "English",
  "email": "jfernand@umbc.edu",
  "firstName": "Jean",
  "fullName": "Jean Fernandez",
  "lastName": "Fernandez",
  "photoUrl": "https:\/\/edupal.co\/images\/JeanFernandez.jpg",
  "refId": NumberLong(473),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370045a"),
  "department": "English",
  "email": "cfitzpat@umbc.edu",
  "firstName": "Carol",
  "fullName": "Carol Fitzpatrick",
  "lastName": "Fitzpatrick",
  "photoUrl": "https:\/\/edupal.co\/images\/CarolFitzpatrick.jpg",
  "refId": NumberLong(474),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370045b"),
  "department": "English",
  "email": "sflan@umbc.edu",
  "firstName": "Sean",
  "fullName": "Sean Flanigan",
  "lastName": "Flanigan",
  "photoUrl": "https:\/\/edupal.co\/images\/SeanFlanigan.jpg",
  "refId": NumberLong(475),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370045c"),
  "department": "English",
  "email": "jfrusc@umbc.edu",
  "firstName": "Professor",
  "fullName": "Professor Fruscione",
  "lastName": "Fruscione",
  "photoUrl": "https:\/\/edupal.co\/images\/ProfessorFruscione.jpg",
  "refId": NumberLong(476),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370045d"),
  "department": "English",
  "email": "gwiazda@umbc.edu",
  "firstName": "Piotr",
  "fullName": "Piotr Gwiazda",
  "lastName": "Gwiazda",
  "photoUrl": "https:\/\/edupal.co\/images\/PiotrGwiazda.jpg",
  "refId": NumberLong(477),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370045e"),
  "department": "English",
  "email": "lahess@umbc.edu",
  "firstName": "Laurie",
  "fullName": "Laurie Hess",
  "lastName": "Hess",
  "photoUrl": "https:\/\/edupal.co\/images\/LaurieHess.jpg",
  "refId": NumberLong(478),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370045f"),
  "department": "English",
  "email": "vapts@umbc.edu",
  "firstName": "Victoria",
  "fullName": "Victoria Kamphaus",
  "lastName": "Kamphaus",
  "photoUrl": "https:\/\/edupal.co\/images\/VictoriaKamphaus.jpg",
  "refId": NumberLong(479),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700460"),
  "department": "English",
  "email": "mkenny@umbc.edu",
  "firstName": "Maghan",
  "fullName": "Maghan Kenny",
  "lastName": "Kenny",
  "photoUrl": "https:\/\/edupal.co\/images\/MaghanKenny.jpg",
  "refId": NumberLong(480),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700461"),
  "department": "English",
  "email": "kkidd@umbc.edu",
  "firstName": "Kathleen",
  "fullName": "Kathleen Kidd",
  "lastName": "Kidd",
  "photoUrl": "https:\/\/edupal.co\/images\/KathleenKidd.jpg",
  "refId": NumberLong(481),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700462"),
  "department": "English",
  "email": "killgall@umbc.edu",
  "firstName": "Don",
  "fullName": "Don Killgallon",
  "lastName": "Killgallon",
  "photoUrl": "https:\/\/edupal.co\/images\/DonKillgallon.jpg",
  "refId": NumberLong(482),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700463"),
  "department": "English",
  "email": "mabe@umbc.edu",
  "firstName": "Mitzi",
  "fullName": "Mitzi Mabe",
  "lastName": "Mabe",
  "photoUrl": "https:\/\/edupal.co\/images\/MitziMabe.jpg",
  "refId": NumberLong(483),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700464"),
  "department": "English",
  "email": "e.macdougall@umbc.edu",
  "firstName": "Elaine",
  "fullName": "Elaine MacDougall",
  "lastName": "MacDougall",
  "photoUrl": "https:\/\/edupal.co\/images\/ElaineMacDougall.jpg",
  "refId": NumberLong(484),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700465"),
  "department": "English",
  "email": "pmacek@umbc.edu",
  "firstName": "Philip",
  "fullName": "Philip Macek",
  "lastName": "Macek",
  "photoUrl": "https:\/\/edupal.co\/images\/PhilipMacek.jpg",
  "refId": NumberLong(485),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700466"),
  "department": "English",
  "email": "jmaher@umbc.edu",
  "firstName": "Jennifer",
  "fullName": "Jennifer Maher",
  "lastName": "Maher",
  "photoUrl": "https:\/\/edupal.co\/images\/JenniferMaher.jpg",
  "refId": NumberLong(486),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700467"),
  "department": "English",
  "email": "mccarthy@umbc.edu",
  "firstName": "Lucille",
  "fullName": "Lucille McCarthy",
  "lastName": "McCarthy",
  "photoUrl": "https:\/\/edupal.co\/images\/LucilleMcCarthy.jpg",
  "refId": NumberLong(487),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700468"),
  "department": "English",
  "email": "kmckinle@umbc.edu",
  "firstName": "Kathyrn",
  "fullName": "Kathyrn Mckinely",
  "lastName": "Mckinely",
  "photoUrl": "https:\/\/edupal.co\/images\/KathyrnMckinely.jpg",
  "refId": NumberLong(488),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab33153700469"),
  "department": "English",
  "email": "vickim@umbc.edu",
  "firstName": "Vicki",
  "fullName": "Vicki Meade",
  "lastName": "Meade",
  "photoUrl": "https:\/\/edupal.co\/images\/VickiMeade.jpg",
  "refId": NumberLong(489),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370046a"),
  "department": "English",
  "email": "mosherow@umbc.edu",
  "firstName": "Michele",
  "fullName": "Michele Osherow",
  "lastName": "Osherow",
  "photoUrl": "https:\/\/edupal.co\/images\/MicheleOsherow.jpg",
  "refId": NumberLong(490),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9471975ab3315370046b"),
  "department": "English",
  "email": "nicolep@umbc.edu",
  "firstName": "Nicole",
  "fullName": "Nicole Perkarske",
  "lastName": "Perkarske",
  "photoUrl": "https:\/\/edupal.co\/images\/NicolePerkarske.jpg",
  "refId": NumberLong(491),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370046c"),
  "department": "English",
  "email": "putzel@umbc.edu",
  "firstName": "Diane",
  "fullName": "Diane Putzel",
  "lastName": "Putzel",
  "photoUrl": "https:\/\/edupal.co\/images\/DianePutzel.jpg",
  "refId": NumberLong(492),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370046d"),
  "department": "English",
  "email": "danika1@umbc.edu",
  "firstName": "Danika",
  "fullName": "Danika Rockett",
  "lastName": "Rockett",
  "photoUrl": "https:\/\/edupal.co\/images\/DanikaRockett.jpg",
  "refId": NumberLong(493),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370046e"),
  "department": "English",
  "email": "ssawye1@umbc.edu",
  "firstName": "Seth",
  "fullName": "Seth Sawyers",
  "lastName": "Sawyers",
  "photoUrl": "https:\/\/edupal.co\/images\/SethSawyers.jpg",
  "refId": NumberLong(494),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370046f"),
  "department": "English",
  "email": "shipka@umbc.edu",
  "firstName": "Jody",
  "fullName": "Jody Shipka",
  "lastName": "Shipka",
  "photoUrl": "https:\/\/edupal.co\/images\/JodyShipka.jpg",
  "refId": NumberLong(495),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700470"),
  "department": "English",
  "email": "shivnan@umbc.edu",
  "firstName": "Sally",
  "fullName": "Sally Shivnan",
  "lastName": "Shivnan",
  "photoUrl": "https:\/\/edupal.co\/images\/SallyShivnan.jpg",
  "refId": NumberLong(496),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700471"),
  "department": "English",
  "email": "aslythom@umbc.edu",
  "firstName": "Almeta",
  "fullName": "Almeta Sly-Thompson",
  "lastName": "Sly-Thompson",
  "photoUrl": "https:\/\/edupal.co\/images\/AlmetaSly-Thompson.jpg",
  "refId": NumberLong(497),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700472"),
  "department": "English",
  "email": "osmith@umbc.edu",
  "firstName": "Orianne",
  "fullName": "Orianne Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/OrianneSmith.jpg",
  "refId": NumberLong(498),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700473"),
  "department": "English",
  "email": "hollys@umbc.edu",
  "firstName": "Holly",
  "fullName": "Holly Sneeringer",
  "lastName": "Sneeringer",
  "photoUrl": "https:\/\/edupal.co\/images\/HollySneeringer.jpg",
  "refId": NumberLong(499),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700474"),
  "department": "English",
  "email": "rterho1@umbc.edu",
  "firstName": "Raymond",
  "fullName": "Raymond Terhorst",
  "lastName": "Terhorst",
  "photoUrl": "https:\/\/edupal.co\/images\/RaymondTerhorst.jpg",
  "refId": NumberLong(500),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700475"),
  "department": "English",
  "email": "awalthers@umbc.edu",
  "firstName": "April",
  "fullName": "April Walters",
  "lastName": "Walters",
  "photoUrl": "https:\/\/edupal.co\/images\/AprilWalters.jpg",
  "refId": NumberLong(501),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700476"),
  "department": "English",
  "email": "oware@umbc.edu",
  "firstName": "Olga",
  "fullName": "Olga Ware",
  "lastName": "Ware",
  "photoUrl": "https:\/\/edupal.co\/images\/OlgaWare.jpg",
  "refId": NumberLong(502),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700477"),
  "department": "English",
  "email": "kweiss@umbc.edu",
  "firstName": "Kenneth",
  "fullName": "Kenneth Weiss",
  "lastName": "Weiss",
  "photoUrl": "https:\/\/edupal.co\/images\/KennethWeiss.jpg",
  "refId": NumberLong(503),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700478"),
  "department": "English",
  "email": "rwilkinson07@yahoo.com",
  "firstName": "Rachel",
  "fullName": "Rachel Wilkinson",
  "lastName": "Wilkinson",
  "photoUrl": "https:\/\/edupal.co\/images\/RachelWilkinson.jpg",
  "refId": NumberLong(504),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700479"),
  "department": "Erickson School",
  "email": "jash@umbc.edu",
  "firstName": "Jeffrey",
  "fullName": "Jeffrey Ash",
  "lastName": "Ash",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffreyAsh.jpg",
  "refId": NumberLong(505),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370047a"),
  "department": "Erickson School",
  "email": "foxnich1@umbc.edu",
  "firstName": "Nichlas",
  "fullName": "Nichlas Fox",
  "lastName": "Fox",
  "photoUrl": "https:\/\/edupal.co\/images\/NichlasFox.jpg",
  "refId": NumberLong(506),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370047b"),
  "department": "Erickson School",
  "email": "gribbin@umbc.edu",
  "firstName": "Joe",
  "fullName": "Joe Gribbin",
  "lastName": "Gribbin",
  "photoUrl": "https:\/\/edupal.co\/images\/JoeGribbin.jpg",
  "refId": NumberLong(507),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370047c"),
  "department": "Erickson School",
  "email": "heffner@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Heffner",
  "lastName": "Heffner",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinHeffner.jpg",
  "refId": NumberLong(508),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370047d"),
  "department": "Erickson School",
  "email": "holman1@umbc.edu",
  "firstName": "William",
  "fullName": "William Holman",
  "lastName": "Holman",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamHolman.jpg",
  "refId": NumberLong(509),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370047e"),
  "department": "Erickson School",
  "email": "galinamadjaroff@umbc.edu",
  "firstName": "Galina",
  "fullName": "Galina Madjaroff",
  "lastName": "Madjaroff",
  "photoUrl": "https:\/\/edupal.co\/images\/GalinaMadjaroff.jpg",
  "refId": NumberLong(510),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370047f"),
  "department": "Erickson School",
  "email": "majeski@umbc.edu",
  "firstName": "Robin",
  "fullName": "Robin Majeski",
  "lastName": "Majeski",
  "photoUrl": "https:\/\/edupal.co\/images\/RobinMajeski.jpg",
  "refId": NumberLong(511),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700480"),
  "department": "Erickson School",
  "email": "ronch@umbc.edu",
  "firstName": "Judah",
  "fullName": "Judah Ronch",
  "lastName": "Ronch",
  "photoUrl": "https:\/\/edupal.co\/images\/JudahRonch.jpg",
  "refId": NumberLong(512),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700481"),
  "department": "Erickson School",
  "email": "mstewart@umbc.edu",
  "firstName": "Margaret",
  "fullName": "Margaret Stewart",
  "lastName": "Stewart",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaretStewart.jpg",
  "refId": NumberLong(513),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700482"),
  "department": "Erickson School",
  "email": "wthomas@umbc.edu",
  "firstName": "William",
  "fullName": "William Thomas",
  "lastName": "Thomas",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamThomas.jpg",
  "refId": NumberLong(514),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700483"),
  "department": "Erickson School",
  "email": "Stownsley@umbc.edu",
  "firstName": "Scott",
  "fullName": "Scott Townsley",
  "lastName": "Townsley",
  "photoUrl": "https:\/\/edupal.co\/images\/ScottTownsley.jpg",
  "refId": NumberLong(515),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700484"),
  "department": "Gender and Women's Studies",
  "email": "benveng1@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Benvenga",
  "lastName": "Benvenga",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleBenvenga.jpg",
  "refId": NumberLong(516),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700485"),
  "department": "Gender and Women's Studies",
  "email": "abhatt@umbc.edu",
  "firstName": "Amy",
  "fullName": "Amy Bhatt",
  "lastName": "Bhatt",
  "photoUrl": "https:\/\/edupal.co\/images\/AmyBhatt.jpg",
  "refId": NumberLong(517),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700486"),
  "department": "Language, Literacy, and Culture",
  "email": "bickel@umbc.edu",
  "firstName": "Beverly",
  "fullName": "Beverly Bickel",
  "lastName": "Bickel",
  "photoUrl": "https:\/\/edupal.co\/images\/BeverlyBickel.jpg",
  "refId": NumberLong(518),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700487"),
  "department": "Gender and Women's Studies",
  "email": "drabinsky@umbc.edu",
  "firstName": "Kathyrn",
  "fullName": "Kathyrn Drabinski",
  "lastName": "Drabinski",
  "photoUrl": "https:\/\/edupal.co\/images\/KathyrnDrabinski.jpg",
  "refId": NumberLong(519),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700488"),
  "department": "Gender and Women's Studies",
  "email": "eergun1@umbc.edu",
  "firstName": "Emek",
  "fullName": "Emek Ergun",
  "lastName": "Ergun",
  "photoUrl": "https:\/\/edupal.co\/images\/EmekErgun.jpg",
  "refId": NumberLong(520),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700489"),
  "department": "Gender and Women's Studies",
  "email": "mccann@umbc.edu",
  "firstName": "Carole",
  "fullName": "Carole Mccann",
  "lastName": "Mccann",
  "photoUrl": "https:\/\/edupal.co\/images\/CaroleMccann.jpg",
  "refId": NumberLong(521),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370048a"),
  "department": "Theatre",
  "email": "mccully@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Mccully",
  "lastName": "Mccully",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanMccully.jpg",
  "refId": NumberLong(522),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370048b"),
  "department": "Geography and Environmental Systems",
  "email": "daufsee@umbc.edu",
  "firstName": "Dena",
  "fullName": "Dena Aufseeser",
  "lastName": "Aufseeser",
  "photoUrl": "https:\/\/edupal.co\/images\/DenaAufseeser.jpg",
  "refId": NumberLong(523),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370048c"),
  "department": "Geography and Environmental Systems",
  "email": "mbaker@umbc.edu",
  "firstName": "Matthew",
  "fullName": "Matthew Baker",
  "lastName": "Baker",
  "photoUrl": "https:\/\/edupal.co\/images\/MatthewBaker.jpg",
  "refId": NumberLong(524),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370048d"),
  "department": "Geography and Environmental Systems",
  "email": "sbennett@umbc.edu",
  "firstName": "Sari",
  "fullName": "Sari Bennet",
  "lastName": "Bennet",
  "photoUrl": "https:\/\/edupal.co\/images\/SariBennet.jpg",
  "refId": NumberLong(525),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370048e"),
  "department": "Geography and Environmental Systems",
  "email": "dbiehler@umbc.edu",
  "firstName": "Dawn",
  "fullName": "Dawn Biehler",
  "lastName": "Biehler",
  "photoUrl": "https:\/\/edupal.co\/images\/DawnBiehler.jpg",
  "refId": NumberLong(526),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370048f"),
  "department": "Geography and Environmental Systems",
  "email": "sbraun@umbc.edu",
  "firstName": "S.",
  "fullName": "S. Braunschweigh",
  "lastName": "Braunschweigh",
  "photoUrl": "https:\/\/edupal.co\/images\/S.Braunschweigh.jpg",
  "refId": NumberLong(527),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700490"),
  "department": "Geography and Environmental Systems",
  "email": "ece@umbc.edu",
  "firstName": "Erle",
  "fullName": "Erle Ellis",
  "lastName": "Ellis",
  "photoUrl": "https:\/\/edupal.co\/images\/ErleEllis.jpg",
  "refId": NumberLong(528),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700491"),
  "department": "Geography and Environmental Systems",
  "email": "jeffhalv@umbc.edu",
  "firstName": "Jeffrey",
  "fullName": "Jeffrey Halverson",
  "lastName": "Halverson",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffreyHalverson.jpg",
  "refId": NumberLong(529),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700492"),
  "department": "Geography and Environmental Systems",
  "email": "qholifie@umbc.edu",
  "firstName": "Quintaniay",
  "fullName": "Quintaniay Holifeild",
  "lastName": "Holifeild",
  "photoUrl": "https:\/\/edupal.co\/images\/QuintaniayHolifeild.jpg",
  "refId": NumberLong(530),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700493"),
  "department": "Geography and Environmental Systems",
  "email": "mholland@umbc.edu",
  "firstName": "Margaret",
  "fullName": "Margaret Holland",
  "lastName": "Holland",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaretHolland.jpg",
  "refId": NumberLong(531),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700494"),
  "department": "Geography and Environmental Systems",
  "email": "dlansing@umbc.edu",
  "firstName": "David",
  "fullName": "David Lansing",
  "lastName": "Lansing",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidLansing.jpg",
  "refId": NumberLong(532),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700495"),
  "department": "Geography and Environmental Systems",
  "email": "rlewis@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Lewis",
  "lastName": "Lewis",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardLewis.jpg",
  "refId": NumberLong(533),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700496"),
  "department": "Geography and Environmental Systems",
  "email": "ronaldl@umbc.edu",
  "firstName": "Ronald",
  "fullName": "Ronald Luna",
  "lastName": "Luna",
  "photoUrl": "https:\/\/edupal.co\/images\/RonaldLuna.jpg",
  "refId": NumberLong(534),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700497"),
  "department": "Geography and Environmental Systems",
  "email": "miller@umbc.edu",
  "firstName": "Andy",
  "fullName": "Andy Miller",
  "lastName": "Miller",
  "photoUrl": "https:\/\/edupal.co\/images\/AndyMiller.jpg",
  "refId": NumberLong(535),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700498"),
  "department": "Geography and Environmental Systems",
  "email": "neff@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Neff",
  "lastName": "Neff",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertNeff.jpg",
  "refId": NumberLong(536),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab33153700499"),
  "department": "Geography and Environmental Systems",
  "email": "eparker@umbc.edu",
  "firstName": "Sandy",
  "fullName": "Sandy Parker",
  "lastName": "Parker",
  "photoUrl": "https:\/\/edupal.co\/images\/SandyParker.jpg",
  "refId": NumberLong(537),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370049a"),
  "department": "Geography and Environmental Systems",
  "email": "tomr@umbc.edu",
  "firstName": "Tom",
  "fullName": "Tom Rabenhorst",
  "lastName": "Rabenhorst",
  "photoUrl": "https:\/\/edupal.co\/images\/TomRabenhorst.jpg",
  "refId": NumberLong(538),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370049b"),
  "department": "Geography and Environmental Systems",
  "email": "school@umbc.edu",
  "firstName": "Joseph",
  "fullName": "Joseph School",
  "lastName": "School",
  "photoUrl": "https:\/\/edupal.co\/images\/JosephSchool.jpg",
  "refId": NumberLong(539),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370049c"),
  "department": "Geography and Environmental Systems",
  "email": "crnswan@umbc.edu",
  "firstName": "Chris",
  "fullName": "Chris Swan",
  "lastName": "Swan",
  "photoUrl": "https:\/\/edupal.co\/images\/ChrisSwan.jpg",
  "refId": NumberLong(540),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370049d"),
  "department": "Geography and Environmental Systems",
  "email": "junmei@umbc.edu",
  "firstName": "Junmei",
  "fullName": "Junmei Tang",
  "lastName": "Tang",
  "photoUrl": "https:\/\/edupal.co\/images\/JunmeiTang.jpg",
  "refId": NumberLong(541),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370049e"),
  "department": "Geography and Environmental Systems",
  "email": "villiger@umbc.edu",
  "firstName": "Erwin",
  "fullName": "Erwin Villiger",
  "lastName": "Villiger",
  "photoUrl": "https:\/\/edupal.co\/images\/ErwinVilliger.jpg",
  "refId": NumberLong(542),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab3315370049f"),
  "department": "Geography and Environmental Systems",
  "email": "ejw@umbc.edu",
  "firstName": "Eric",
  "fullName": "Eric Weissberger",
  "lastName": "Weissberger",
  "photoUrl": "https:\/\/edupal.co\/images\/EricWeissberger.jpg",
  "refId": NumberLong(543),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a0"),
  "department": "Sociology and Anthropology",
  "email": "christine_mair@umbc.edu",
  "firstName": "Christine",
  "fullName": "Christine Mari",
  "lastName": "Mari",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristineMari.jpg",
  "refId": NumberLong(544),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a1"),
  "department": "Sociology and Anthropology",
  "email": "lmorgan@umbc.edu",
  "firstName": "Leslie",
  "fullName": "Leslie Morgan",
  "lastName": "Morgan",
  "photoUrl": "https:\/\/edupal.co\/images\/LeslieMorgan.jpg",
  "refId": NumberLong(545),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a2"),
  "department": "Graduate School",
  "email": "datkinson@umbc.edu",
  "firstName": "Helen",
  "fullName": "Helen Atkinson",
  "lastName": "Atkinson",
  "photoUrl": "https:\/\/edupal.co\/images\/HelenAtkinson.jpg",
  "refId": NumberLong(546),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a3"),
  "department": "Graduate Student Association",
  "email": "hall@umbc.edu",
  "firstName": "Jenness",
  "fullName": "Jenness Hall",
  "lastName": "Hall",
  "photoUrl": "https:\/\/edupal.co\/images\/JennessHall.jpg",
  "refId": NumberLong(547),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a4"),
  "department": "Graduate School",
  "email": "marghow1@umbc.edu",
  "firstName": "Margaret",
  "fullName": "Margaret Howell",
  "lastName": "Howell",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaretHowell.jpg",
  "refId": NumberLong(548),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a5"),
  "department": "Graduate School",
  "email": "limorgan@umbc.edu",
  "firstName": "Lisa",
  "fullName": "Lisa Morgan",
  "lastName": "Morgan",
  "photoUrl": "https:\/\/edupal.co\/images\/LisaMorgan.jpg",
  "refId": NumberLong(549),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a6"),
  "department": "Graduate School",
  "email": "jrutledge@umbc.edu",
  "firstName": "Janet",
  "fullName": "Janet Rutledge",
  "lastName": "Rutledge",
  "photoUrl": "https:\/\/edupal.co\/images\/JanetRutledge.jpg",
  "refId": NumberLong(550),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a7"),
  "department": "History",
  "email": "martinb@umbc.edu",
  "firstName": "Martin",
  "fullName": "Martin Becker",
  "lastName": "Becker",
  "photoUrl": "https:\/\/edupal.co\/images\/MartinBecker.jpg",
  "refId": NumberLong(551),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a8"),
  "department": "History",
  "email": "jwbirk@umbc.edu",
  "firstName": "John",
  "fullName": "John Birkenmeiser",
  "lastName": "Birkenmeiser",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnBirkenmeiser.jpg",
  "refId": NumberLong(552),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004a9"),
  "department": "History",
  "email": "bouton@umbc.edu",
  "firstName": "Terry",
  "fullName": "Terry Bouton",
  "lastName": "Bouton",
  "photoUrl": "https:\/\/edupal.co\/images\/TerryBouton.jpg",
  "refId": NumberLong(553),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004aa"),
  "department": "History",
  "email": "kbronw@umbc.edu",
  "firstName": "Kate",
  "fullName": "Kate Brown",
  "lastName": "Brown",
  "photoUrl": "https:\/\/edupal.co\/images\/KateBrown.jpg",
  "refId": NumberLong(554),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004ab"),
  "department": "History",
  "email": "Rachel_Brubaker@umbc.edu",
  "firstName": "Rachel",
  "fullName": "Rachel Brubaker",
  "lastName": "Brubaker",
  "photoUrl": "https:\/\/edupal.co\/images\/RachelBrubaker.jpg",
  "refId": NumberLong(555),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004ac"),
  "department": "History",
  "email": "cmeghan1@umbc.edu",
  "firstName": "Meghan",
  "fullName": "Meghan Colabella",
  "lastName": "Colabella",
  "photoUrl": "https:\/\/edupal.co\/images\/MeghanColabella.jpg",
  "refId": NumberLong(556),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004ad"),
  "department": "History",
  "email": "froide@umbc.edu",
  "firstName": "Amy",
  "fullName": "Amy Froide",
  "lastName": "Froide",
  "photoUrl": "https:\/\/edupal.co\/images\/AmyFroide.jpg",
  "refId": NumberLong(557),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004ae"),
  "department": "History",
  "email": "grubb@umbc.edu",
  "firstName": "James",
  "fullName": "James Grubb",
  "lastName": "Grubb",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesGrubb.jpg",
  "refId": NumberLong(558),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004af"),
  "department": "History",
  "email": "kars@umbc.edu",
  "firstName": "Marjoleine",
  "fullName": "Marjoleine Kars",
  "lastName": "Kars",
  "photoUrl": "https:\/\/edupal.co\/images\/MarjoleineKars.jpg",
  "refId": NumberLong(559),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b0"),
  "department": "History",
  "email": "dkatz@umbc.edu",
  "firstName": "David",
  "fullName": "David Katz",
  "lastName": "Katz",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidKatz.jpg",
  "refId": NumberLong(560),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b1"),
  "department": "History",
  "email": "lanman@umbc.edu",
  "firstName": "Barry",
  "fullName": "Barry Lanman",
  "lastName": "Lanman",
  "photoUrl": "https:\/\/edupal.co\/images\/BarryLanman.jpg",
  "refId": NumberLong(561),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b2"),
  "department": "History",
  "email": "clalauri@umbc.edu",
  "firstName": "Clayton",
  "fullName": "Clayton Laurie",
  "lastName": "Laurie",
  "photoUrl": "https:\/\/edupal.co\/images\/ClaytonLaurie.jpg",
  "refId": NumberLong(562),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b3"),
  "department": "History",
  "email": "maxwell5@umbc.edu",
  "firstName": "Megan",
  "fullName": "Megan Maxwell",
  "lastName": "Maxwell",
  "photoUrl": "https:\/\/edupal.co\/images\/MeganMaxwell.jpg",
  "refId": NumberLong(563),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b4"),
  "department": "History",
  "email": "mcdonoug@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan McDonogh",
  "lastName": "McDonogh",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanMcDonogh.jpg",
  "refId": NumberLong(564),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b5"),
  "department": "History",
  "email": "ddm@umbc.edu",
  "firstName": "Denise",
  "fullName": "Denise Meringolo",
  "lastName": "Meringolo",
  "photoUrl": "https:\/\/edupal.co\/images\/DeniseMeringolo.jpg",
  "refId": NumberLong(565),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b6"),
  "department": "History",
  "email": "nolan@umbc.edu",
  "firstName": "Andrew",
  "fullName": "Andrew Nolan",
  "lastName": "Nolan",
  "photoUrl": "https:\/\/edupal.co\/images\/AndrewNolan.jpg",
  "refId": NumberLong(566),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b7"),
  "department": "History",
  "email": "juloakes@umbc.edu",
  "firstName": "Julie",
  "fullName": "Julie Oakes",
  "lastName": "Oakes",
  "photoUrl": "https:\/\/edupal.co\/images\/JulieOakes.jpg",
  "refId": NumberLong(567),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b8"),
  "department": "History",
  "email": "orisich@umbc.edu",
  "firstName": "Shari",
  "fullName": "Shari Orisich",
  "lastName": "Orisich",
  "photoUrl": "https:\/\/edupal.co\/images\/ShariOrisich.jpg",
  "refId": NumberLong(568),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004b9"),
  "department": "History",
  "email": "oyen@umbc.edu",
  "firstName": "Meredith",
  "fullName": "Meredith Oyen",
  "lastName": "Oyen",
  "photoUrl": "https:\/\/edupal.co\/images\/MeredithOyen.jpg",
  "refId": NumberLong(569),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004ba"),
  "department": "History",
  "email": "rischel@umbc.edu",
  "firstName": "Danile",
  "fullName": "Danile Ritschel",
  "lastName": "Ritschel",
  "photoUrl": "https:\/\/edupal.co\/images\/DanileRitschel.jpg",
  "refId": NumberLong(570),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004bb"),
  "department": "History",
  "email": "arubin@umbc.edu",
  "firstName": "Anne",
  "fullName": "Anne Rubin",
  "lastName": "Rubin",
  "photoUrl": "https:\/\/edupal.co\/images\/AnneRubin.jpg",
  "refId": NumberLong(571),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9472975ab331537004bc"),
  "department": "History",
  "email": "mscott@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Scott",
  "lastName": "Scott",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleScott.jpg",
  "refId": NumberLong(572),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004bd"),
  "department": "History",
  "email": "asimon@umbc.edu",
  "firstName": "Amy",
  "fullName": "Amy Simon",
  "lastName": "Simon",
  "photoUrl": "https:\/\/edupal.co\/images\/AmySimon.jpg",
  "refId": NumberLong(573),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004be"),
  "department": "History",
  "email": "smead@umbc.edu",
  "firstName": "Howard",
  "fullName": "Howard Smead",
  "lastName": "Smead",
  "photoUrl": "https:\/\/edupal.co\/images\/HowardSmead.jpg",
  "refId": NumberLong(574),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004bf"),
  "department": "History",
  "email": "etapscott@umbc.edu",
  "firstName": "Elizabeth",
  "fullName": "Elizabeth Tapscott",
  "lastName": "Tapscott",
  "photoUrl": "https:\/\/edupal.co\/images\/ElizabethTapscott.jpg",
  "refId": NumberLong(575),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c0"),
  "department": "History",
  "email": "tatrewicz@umbc.edu",
  "firstName": "Josepth",
  "fullName": "Josepth Tatarewicz",
  "lastName": "Tatarewicz",
  "photoUrl": "https:\/\/edupal.co\/images\/JosepthTatarewicz.jpg",
  "refId": NumberLong(576),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c1"),
  "department": "History",
  "email": "vaporis@umbc.edu",
  "firstName": "Constantine",
  "fullName": "Constantine Vaporis",
  "lastName": "Vaporis",
  "photoUrl": "https:\/\/edupal.co\/images\/ConstantineVaporis.jpg",
  "refId": NumberLong(577),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c2"),
  "department": "History",
  "email": "jdwillard@umbc.edu",
  "firstName": "John",
  "fullName": "John Willard",
  "lastName": "Willard",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnWillard.jpg",
  "refId": NumberLong(578),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c3"),
  "department": "Honors College",
  "email": "jodi@umbc.edu",
  "firstName": "Jodi",
  "fullName": "Jodi Kelber-Kaye",
  "lastName": "Kelber-Kaye",
  "photoUrl": "https:\/\/edupal.co\/images\/JodiKelber-Kaye.jpg",
  "refId": NumberLong(579),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c4"),
  "department": "Honors College",
  "email": "spitz@umbc.edu",
  "firstName": "Ellen",
  "fullName": "Ellen Handler Spitz",
  "lastName": "Handler Spitz",
  "photoUrl": "https:\/\/edupal.co\/images\/EllenHandlerSpitz.jpg",
  "refId": NumberLong(580),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c5"),
  "department": "Honors College",
  "email": "spstacey@umbc.edu",
  "firstName": "Simon",
  "fullName": "Simon Stacy",
  "lastName": "Stacy",
  "photoUrl": "https:\/\/edupal.co\/images\/SimonStacy.jpg",
  "refId": NumberLong(581),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c6"),
  "department": "Information Systems",
  "email": "bandaru@umbc.edu",
  "firstName": "Prakash",
  "fullName": "Prakash Bandaru",
  "lastName": "Bandaru",
  "photoUrl": "https:\/\/edupal.co\/images\/PrakashBandaru.jpg",
  "refId": NumberLong(582),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c7"),
  "department": "Information Systems",
  "email": "wboulay@umbc.edu",
  "firstName": "William",
  "fullName": "William Boulay",
  "lastName": "Boulay",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamBoulay.jpg",
  "refId": NumberLong(583),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c8"),
  "department": "Information Systems",
  "email": "wbrenner@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Brenner",
  "lastName": "Brenner",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasBrenner.jpg",
  "refId": NumberLong(584),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004c9"),
  "department": "Information Systems",
  "email": "canfield@umbc.edu",
  "firstName": "Kip",
  "fullName": "Kip Canfield",
  "lastName": "Canfield",
  "photoUrl": "https:\/\/edupal.co\/images\/KipCanfield.jpg",
  "refId": NumberLong(585),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ca"),
  "department": "Information Systems",
  "email": "zhchen@umbc.edu",
  "firstName": "Zhiyuan",
  "fullName": "Zhiyuan Chen",
  "lastName": "Chen",
  "photoUrl": "https:\/\/edupal.co\/images\/ZhiyuanChen.jpg",
  "refId": NumberLong(586),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004cb"),
  "department": "Information Systems",
  "email": "pcomit1@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Comitz",
  "lastName": "Comitz",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulComitz.jpg",
  "refId": NumberLong(587),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004cc"),
  "department": "Information Systems",
  "email": "cac1@umbc.edu",
  "firstName": "Carlton",
  "fullName": "Carlton Crabtree",
  "lastName": "Crabtree",
  "photoUrl": "https:\/\/edupal.co\/images\/CarltonCrabtree.jpg",
  "refId": NumberLong(588),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004cd"),
  "department": "Information Systems",
  "email": "emurian@umbc.edu",
  "firstName": "Henry",
  "fullName": "Henry Emurian",
  "lastName": "Emurian",
  "photoUrl": "https:\/\/edupal.co\/images\/HenryEmurian.jpg",
  "refId": NumberLong(589),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ce"),
  "department": "Information Systems",
  "email": "everhart@umbc.edu",
  "firstName": "Amy",
  "fullName": "Amy Everhart",
  "lastName": "Everhart",
  "photoUrl": "https:\/\/edupal.co\/images\/AmyEverhart.jpg",
  "refId": NumberLong(590),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004cf"),
  "department": "Information Systems",
  "email": "fleisch@umbc.edu",
  "firstName": "Rob",
  "fullName": "Rob Fleischmann",
  "lastName": "Fleischmann",
  "photoUrl": "https:\/\/edupal.co\/images\/RobFleischmann.jpg",
  "refId": NumberLong(591),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d0"),
  "department": "Information Systems",
  "email": "sfrock@umbc.edu",
  "firstName": "Suzanne",
  "fullName": "Suzanne Frock",
  "lastName": "Frock",
  "photoUrl": "https:\/\/edupal.co\/images\/SuzanneFrock.jpg",
  "refId": NumberLong(592),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d1"),
  "department": "Information Systems",
  "email": "gangopad@umbc.edu",
  "firstName": "Aryya",
  "fullName": "Aryya Gangopadhyay",
  "lastName": "Gangopadhyay",
  "photoUrl": "https:\/\/edupal.co\/images\/AryyaGangopadhyay.jpg",
  "refId": NumberLong(593),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d2"),
  "department": "Information Systems",
  "email": "mgethers@umbc.edu",
  "firstName": "Malcom",
  "fullName": "Malcom Gethers",
  "lastName": "Gethers",
  "photoUrl": "https:\/\/edupal.co\/images\/MalcomGethers.jpg",
  "refId": NumberLong(594),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d3"),
  "department": "Information Systems",
  "email": "dorin1@umbc.edu",
  "firstName": "Dina",
  "fullName": "Dina Glazer",
  "lastName": "Glazer",
  "photoUrl": "https:\/\/edupal.co\/images\/DinaGlazer.jpg",
  "refId": NumberLong(595),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d4"),
  "department": "Information Systems",
  "email": "dholyoke@umbc.edu",
  "firstName": "David",
  "fullName": "David Holyoke",
  "lastName": "Holyoke",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidHolyoke.jpg",
  "refId": NumberLong(596),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d5"),
  "department": "Information Systems",
  "email": "zhuang@umbc.edu",
  "firstName": "Zhensen",
  "fullName": "Zhensen Huang",
  "lastName": "Huang",
  "photoUrl": "https:\/\/edupal.co\/images\/ZhensenHuang.jpg",
  "refId": NumberLong(597),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d6"),
  "department": "Information Systems",
  "email": "amyhurst@umbc.edu",
  "firstName": "Amy",
  "fullName": "Amy Hurst",
  "lastName": "Hurst",
  "photoUrl": "https:\/\/edupal.co\/images\/AmyHurst.jpg",
  "refId": NumberLong(598),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d7"),
  "department": "Information Systems",
  "email": "vjaneja@umbc.edu",
  "firstName": "Vandana",
  "fullName": "Vandana Janeja",
  "lastName": "Janeja",
  "photoUrl": "https:\/\/edupal.co\/images\/VandanaJaneja.jpg",
  "refId": NumberLong(599),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d8"),
  "department": "Information Systems",
  "email": "jeng@umbc.edu",
  "firstName": "Jun-jang",
  "fullName": "Jun-jang Jeng",
  "lastName": "Jeng",
  "photoUrl": "https:\/\/edupal.co\/images\/Jun-jangJeng.jpg",
  "refId": NumberLong(600),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004d9"),
  "department": "Information Systems",
  "email": "kahl@umbc.edu",
  "firstName": "Margaret",
  "fullName": "Margaret Kahl",
  "lastName": "Kahl",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaretKahl.jpg",
  "refId": NumberLong(601),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004da"),
  "department": "Information Systems",
  "email": "skane@umbc.edu",
  "firstName": "Shuan",
  "fullName": "Shuan Kane",
  "lastName": "Kane",
  "photoUrl": "https:\/\/edupal.co\/images\/ShuanKane.jpg",
  "refId": NumberLong(602),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004db"),
  "department": "Information Systems",
  "email": "georgek@umbc.edu",
  "firstName": "George",
  "fullName": "George Karabatis",
  "lastName": "Karabatis",
  "photoUrl": "https:\/\/edupal.co\/images\/GeorgeKarabatis.jpg",
  "refId": NumberLong(603),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004dc"),
  "department": "Information Systems",
  "email": "komlodi@umbc.edu",
  "firstName": "Anita",
  "fullName": "Anita Komlodi",
  "lastName": "Komlodi",
  "photoUrl": "https:\/\/edupal.co\/images\/AnitaKomlodi.jpg",
  "refId": NumberLong(604),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004dd"),
  "department": "Information Systems",
  "email": "gk@drkoru.us",
  "firstName": "Dr.",
  "fullName": "Dr. Koru",
  "lastName": "Koru",
  "photoUrl": "https:\/\/edupal.co\/images\/Dr.Koru.jpg",
  "refId": NumberLong(605),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004de"),
  "department": "Information Systems",
  "email": "rkuber@umbc.edu",
  "firstName": "Ravi",
  "fullName": "Ravi Kuber",
  "lastName": "Kuber",
  "photoUrl": "https:\/\/edupal.co\/images\/RaviKuber.jpg",
  "refId": NumberLong(606),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004df"),
  "department": "Information Systems",
  "email": "wlemon1@umbc.edu",
  "firstName": "Wayne",
  "fullName": "Wayne Lemon",
  "lastName": "Lemon",
  "photoUrl": "https:\/\/edupal.co\/images\/WayneLemon.jpg",
  "refId": NumberLong(607),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e0"),
  "department": "Information Systems",
  "email": "lutters@umbc.edu",
  "firstName": "Wayne",
  "fullName": "Wayne Lutters",
  "lastName": "Lutters",
  "photoUrl": "https:\/\/edupal.co\/images\/WayneLutters.jpg",
  "refId": NumberLong(608),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e1"),
  "department": "Information Systems",
  "email": "jmartens@umbc.edu",
  "firstName": "Jeff",
  "fullName": "Jeff Martens",
  "lastName": "Martens",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffMartens.jpg",
  "refId": NumberLong(609),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e2"),
  "department": "Information Systems",
  "email": "mijim1@umbc.edu",
  "firstName": "Miji",
  "fullName": "Miji Mathews",
  "lastName": "Mathews",
  "photoUrl": "https:\/\/edupal.co\/images\/MijiMathews.jpg",
  "refId": NumberLong(610),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e3"),
  "department": "Information Systems",
  "email": "aamir.nooruddin@umbc.edu",
  "firstName": "Aamir",
  "fullName": "Aamir Nooruddin",
  "lastName": "Nooruddin",
  "photoUrl": "https:\/\/edupal.co\/images\/AamirNooruddin.jpg",
  "refId": NumberLong(611),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e4"),
  "department": "Information Systems",
  "email": "norcio@umbc.edu",
  "firstName": "Anthony",
  "fullName": "Anthony Norcio",
  "lastName": "Norcio",
  "photoUrl": "https:\/\/edupal.co\/images\/AnthonyNorcio.jpg",
  "refId": NumberLong(612),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e5"),
  "department": "Information Systems",
  "email": "ozok@umbc.edu",
  "firstName": "Asim",
  "fullName": "Asim Ozok",
  "lastName": "Ozok",
  "photoUrl": "https:\/\/edupal.co\/images\/AsimOzok.jpg",
  "refId": NumberLong(613),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e6"),
  "department": "Information Systems",
  "email": "cpak@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Pak",
  "lastName": "Pak",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesPak.jpg",
  "refId": NumberLong(614),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e7"),
  "department": "Information Systems",
  "email": "dparikh1@umbc.edu",
  "firstName": "Darpan",
  "fullName": "Darpan Parikh",
  "lastName": "Parikh",
  "photoUrl": "https:\/\/edupal.co\/images\/DarpanParikh.jpg",
  "refId": NumberLong(615),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e8"),
  "department": "Information Systems",
  "email": "pelkey@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Pelkey",
  "lastName": "Pelkey",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinPelkey.jpg",
  "refId": NumberLong(616),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004e9"),
  "department": "Information Systems",
  "email": "plpetryumbc@verizon.net",
  "firstName": "Phillip",
  "fullName": "Phillip Petry",
  "lastName": "Petry",
  "photoUrl": "https:\/\/edupal.co\/images\/PhillipPetry.jpg",
  "refId": NumberLong(617),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ea"),
  "department": "Information Systems",
  "email": "rada@umbc.edu",
  "firstName": "Roy",
  "fullName": "Roy Rada",
  "lastName": "Rada",
  "photoUrl": "https:\/\/edupal.co\/images\/RoyRada.jpg",
  "refId": NumberLong(618),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004eb"),
  "department": "Information Systems",
  "email": "drafat1@umbc.edu",
  "firstName": "David",
  "fullName": "David Rafati",
  "lastName": "Rafati",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidRafati.jpg",
  "refId": NumberLong(619),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ec"),
  "department": "Information Systems",
  "email": "redding@umbc.edu",
  "firstName": "Tate",
  "fullName": "Tate Redding",
  "lastName": "Redding",
  "photoUrl": "https:\/\/edupal.co\/images\/TateRedding.jpg",
  "refId": NumberLong(620),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ed"),
  "department": "Information Systems",
  "email": "richburg@umbc.edu",
  "firstName": "Tasha",
  "fullName": "Tasha Richburg",
  "lastName": "Richburg",
  "photoUrl": "https:\/\/edupal.co\/images\/TashaRichburg.jpg",
  "refId": NumberLong(621),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ee"),
  "department": "Information Systems",
  "email": "Jameelah.Roberts@umbc.edu",
  "firstName": "Jameelah",
  "fullName": "Jameelah Roberts",
  "lastName": "Roberts",
  "photoUrl": "https:\/\/edupal.co\/images\/JameelahRoberts.jpg",
  "refId": NumberLong(622),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ef"),
  "department": "Information Systems",
  "email": "randy.robinson@mac.com",
  "firstName": "Randy",
  "fullName": "Randy Robinson",
  "lastName": "Robinson",
  "photoUrl": "https:\/\/edupal.co\/images\/RandyRobinson.jpg",
  "refId": NumberLong(623),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f0"),
  "department": "Information Systems",
  "email": "broowgow@umbc.edu",
  "firstName": "Irving",
  "fullName": "Irving Roogow",
  "lastName": "Roogow",
  "photoUrl": "https:\/\/edupal.co\/images\/IrvingRoogow.jpg",
  "refId": NumberLong(624),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f1"),
  "department": "Information Systems",
  "email": "psadler@umbc.edu",
  "firstName": "Patricia",
  "fullName": "Patricia Sadler",
  "lastName": "Sadler",
  "photoUrl": "https:\/\/edupal.co\/images\/PatriciaSadler.jpg",
  "refId": NumberLong(625),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f2"),
  "department": "Information Systems",
  "email": "sampath@umbc.edu",
  "firstName": "Sreedevi",
  "fullName": "Sreedevi Sampath",
  "lastName": "Sampath",
  "photoUrl": "https:\/\/edupal.co\/images\/SreedeviSampath.jpg",
  "refId": NumberLong(626),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f3"),
  "department": "Information Systems",
  "email": "cseaman@umbc.edu",
  "firstName": "Carolyn",
  "fullName": "Carolyn Seaman",
  "lastName": "Seaman",
  "photoUrl": "https:\/\/edupal.co\/images\/CarolynSeaman.jpg",
  "refId": NumberLong(627),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f4"),
  "department": "Information Systems",
  "email": "hshuja1@umbc.edu",
  "firstName": "Hassan",
  "fullName": "Hassan Shuja",
  "lastName": "Shuja",
  "photoUrl": "https:\/\/edupal.co\/images\/HassanShuja.jpg",
  "refId": NumberLong(628),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f5"),
  "department": "Information Systems",
  "email": "dasmith@umbc.edu",
  "firstName": "Dana",
  "fullName": "Dana Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/DanaSmith.jpg",
  "refId": NumberLong(629),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f6"),
  "department": "Information Systems",
  "email": "rob@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertSmith.jpg",
  "refId": NumberLong(630),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f7"),
  "department": "Information Systems",
  "email": "rbsmith@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Smith",
  "lastName": "Smith",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertSmith.jpg",
  "refId": NumberLong(631),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f8"),
  "department": "Information Systems",
  "email": "spongaugle@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Sponaugle",
  "lastName": "Sponaugle",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardSponaugle.jpg",
  "refId": NumberLong(632),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004f9"),
  "department": "Information Systems",
  "email": "petaylor@umbc.edu",
  "firstName": "Portia",
  "fullName": "Portia Taylor",
  "lastName": "Taylor",
  "photoUrl": "https:\/\/edupal.co\/images\/PortiaTaylor.jpg",
  "refId": NumberLong(633),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004fa"),
  "department": "Information Systems",
  "email": "vick@umbc.edu",
  "firstName": "Shon",
  "fullName": "Shon Vick",
  "lastName": "Vick",
  "photoUrl": "https:\/\/edupal.co\/images\/ShonVick.jpg",
  "refId": NumberLong(634),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004fb"),
  "department": "Information Systems",
  "email": "wagner@umbc.edu",
  "firstName": "Al",
  "fullName": "Al Wagner",
  "lastName": "Wagner",
  "photoUrl": "https:\/\/edupal.co\/images\/AlWagner.jpg",
  "refId": NumberLong(635),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004fc"),
  "department": "Information Systems",
  "email": "kwhite2@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin White",
  "lastName": "White",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinWhite.jpg",
  "refId": NumberLong(636),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004fd"),
  "department": "Information Systems",
  "email": "hopkins1@umbc.edu",
  "firstName": "Marcella",
  "fullName": "Marcella Wilson",
  "lastName": "Wilson",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcellaWilson.jpg",
  "refId": NumberLong(637),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004fe"),
  "department": "Information Systems",
  "email": "zzaidi1@umbc.edu",
  "firstName": "Zehra",
  "fullName": "Zehra Zaidi",
  "lastName": "Zaidi",
  "photoUrl": "https:\/\/edupal.co\/images\/ZehraZaidi.jpg",
  "refId": NumberLong(638),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab331537004ff"),
  "department": "Information Systems",
  "email": "zhangd@umbc.edu",
  "firstName": "Dongsong",
  "fullName": "Dongsong Zhang",
  "lastName": "Zhang",
  "photoUrl": "https:\/\/edupal.co\/images\/DongsongZhang.jpg",
  "refId": NumberLong(639),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700500"),
  "department": "Information Systems",
  "email": "bzhou@umbc.edu",
  "firstName": "Bin",
  "fullName": "Bin Zhou",
  "lastName": "Zhou",
  "photoUrl": "https:\/\/edupal.co\/images\/BinZhou.jpg",
  "refId": NumberLong(640),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700501"),
  "department": "Information Systems",
  "email": "zhoul@umbc.edu",
  "firstName": "Lina",
  "fullName": "Lina Zhou",
  "lastName": "Zhou",
  "photoUrl": "https:\/\/edupal.co\/images\/LinaZhou.jpg",
  "refId": NumberLong(641),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700502"),
  "department": "Instructional Systems Design",
  "email": "ahmadr@umbc.edu",
  "firstName": "Rafi",
  "fullName": "Rafi Ahmad",
  "lastName": "Ahmad",
  "photoUrl": "https:\/\/edupal.co\/images\/RafiAhmad.jpg",
  "refId": NumberLong(642),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700503"),
  "department": "Instructional Systems Design",
  "email": "berge@umbc.edu",
  "firstName": "Zane",
  "fullName": "Zane Berge",
  "lastName": "Berge",
  "photoUrl": "https:\/\/edupal.co\/images\/ZaneBerge.jpg",
  "refId": NumberLong(643),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700504"),
  "department": "Instructional Systems Design",
  "email": "buelow@umbc.edu",
  "firstName": "John",
  "fullName": "John Buelow",
  "lastName": "Buelow",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnBuelow.jpg",
  "refId": NumberLong(644),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700505"),
  "department": "Instructional Systems Design",
  "email": "jeannet1@umbc.edu",
  "firstName": "Jeannette",
  "fullName": "Jeannette Campos",
  "lastName": "Campos",
  "photoUrl": "https:\/\/edupal.co\/images\/JeannetteCampos.jpg",
  "refId": NumberLong(645),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700506"),
  "department": "Instructional Systems Design",
  "email": "kcurra1@umbc.edu",
  "firstName": "Keith",
  "fullName": "Keith Curran",
  "lastName": "Curran",
  "photoUrl": "https:\/\/edupal.co\/images\/KeithCurran.jpg",
  "refId": NumberLong(646),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700507"),
  "department": "Instructional Systems Design",
  "email": "hodell@umbc.edu",
  "firstName": "Chuck",
  "fullName": "Chuck Hodell",
  "lastName": "Hodell",
  "photoUrl": "https:\/\/edupal.co\/images\/ChuckHodell.jpg",
  "refId": NumberLong(647),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700508"),
  "department": "Instructional Systems Design",
  "email": "kearsley@umbc.edu",
  "firstName": "Greg",
  "fullName": "Greg Kearsley",
  "lastName": "Kearsley",
  "photoUrl": "https:\/\/edupal.co\/images\/GregKearsley.jpg",
  "refId": NumberLong(648),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700509"),
  "department": "Instructional Systems Design",
  "email": "paul.kellermann@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Kellerman",
  "lastName": "Kellerman",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulKellerman.jpg",
  "refId": NumberLong(649),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370050a"),
  "department": "Instructional Systems Design",
  "email": "tmarks@umbc.edu",
  "firstName": "Todd",
  "fullName": "Todd Marks",
  "lastName": "Marks",
  "photoUrl": "https:\/\/edupal.co\/images\/ToddMarks.jpg",
  "refId": NumberLong(650),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370050b"),
  "department": "Instructional Systems Design",
  "email": "dpetsk1@umbc.edu",
  "firstName": "Deborah",
  "fullName": "Deborah Petska",
  "lastName": "Petska",
  "photoUrl": "https:\/\/edupal.co\/images\/DeborahPetska.jpg",
  "refId": NumberLong(651),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370050c"),
  "department": "Instructional Systems Design",
  "email": "raudenbu@umbc.edu",
  "firstName": "Linda",
  "fullName": "Linda Raudenbush",
  "lastName": "Raudenbush",
  "photoUrl": "https:\/\/edupal.co\/images\/LindaRaudenbush.jpg",
  "refId": NumberLong(652),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370050d"),
  "department": "Interdisciplinary Science Program",
  "email": "eantill1@umbc.edu",
  "firstName": "Erica",
  "fullName": "Erica Antill",
  "lastName": "Antill",
  "photoUrl": "https:\/\/edupal.co\/images\/EricaAntill.jpg",
  "refId": NumberLong(653),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370050e"),
  "department": "Interdisciplinary Science Program",
  "email": "sschreier@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Schreier",
  "lastName": "Schreier",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanSchreier.jpg",
  "refId": NumberLong(654),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370050f"),
  "department": "Interdisciplinary Studies",
  "email": "freeland@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Freeland",
  "lastName": "Freeland",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenFreeland.jpg",
  "refId": NumberLong(655),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700510"),
  "department": "Interdisciplinary Studies",
  "email": "mcalpine@umbc.edu",
  "firstName": "Steven",
  "fullName": "Steven McAlpine",
  "lastName": "McAlpine",
  "photoUrl": "https:\/\/edupal.co\/images\/StevenMcAlpine.jpg",
  "refId": NumberLong(656),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700511"),
  "department": "Interdisciplinary Studies",
  "email": "wrigleyj@umbc.edu",
  "firstName": "Jill",
  "fullName": "Jill Wrigley",
  "lastName": "Wrigley",
  "photoUrl": "https:\/\/edupal.co\/images\/JillWrigley.jpg",
  "refId": NumberLong(657),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700512"),
  "department": "Judaic Studies",
  "email": "buchgus@umbc.edu",
  "firstName": "Gustav",
  "fullName": "Gustav Buchdahl",
  "lastName": "Buchdahl",
  "photoUrl": "https:\/\/edupal.co\/images\/GustavBuchdahl.jpg",
  "refId": NumberLong(658),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700513"),
  "department": "Judaic Studies",
  "email": "arosent1@umbc.edu",
  "firstName": "Aharona",
  "fullName": "Aharona Gazit-Rosenthal",
  "lastName": "Gazit-Rosenthal",
  "photoUrl": "https:\/\/edupal.co\/images\/AharonaGazit-Rosenthal.jpg",
  "refId": NumberLong(659),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700514"),
  "department": "Judaic Studies",
  "email": "hochberg@umbc.edu",
  "firstName": "Severin",
  "fullName": "Severin Hochberg",
  "lastName": "Hochberg",
  "photoUrl": "https:\/\/edupal.co\/images\/SeverinHochberg.jpg",
  "refId": NumberLong(660),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700515"),
  "department": "Judaic Studies",
  "email": "ellil1@umbc.edu",
  "firstName": "Elli",
  "fullName": "Elli Lieberman",
  "lastName": "Lieberman",
  "photoUrl": "https:\/\/edupal.co\/images\/ElliLieberman.jpg",
  "refId": NumberLong(661),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700516"),
  "department": "Judaic Studies",
  "email": "lukacs@umbc.edu",
  "firstName": "Yehuda",
  "fullName": "Yehuda Lukacs",
  "lastName": "Lukacs",
  "photoUrl": "https:\/\/edupal.co\/images\/YehudaLukacs.jpg",
  "refId": NumberLong(662),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700517"),
  "department": "Judaic Studies",
  "email": "tmerwin@umbc.edu",
  "firstName": "Edward",
  "fullName": "Edward Merwin",
  "lastName": "Merwin",
  "photoUrl": "https:\/\/edupal.co\/images\/EdwardMerwin.jpg",
  "refId": NumberLong(663),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700518"),
  "department": "Judaic Studies",
  "email": "ymoses@umbc.edu",
  "firstName": "Yael M.",
  "fullName": "Yael M. Moses",
  "lastName": "Moses",
  "photoUrl": "https:\/\/edupal.co\/images\/YaelM.Moses.jpg",
  "refId": NumberLong(664),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700519"),
  "department": "Judaic Studies",
  "email": "nrubin@umbc.edu",
  "firstName": "Neil",
  "fullName": "Neil Rubin",
  "lastName": "Rubin",
  "photoUrl": "https:\/\/edupal.co\/images\/NeilRubin.jpg",
  "refId": NumberLong(666),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370051a"),
  "department": "Judaic Studies",
  "email": "wrightl@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Wright",
  "lastName": "Wright",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraWright.jpg",
  "refId": NumberLong(668),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370051b"),
  "department": "Judaic Studies",
  "email": "alanyute@umbc.edu",
  "firstName": "Alan",
  "fullName": "Alan Yuter",
  "lastName": "Yuter",
  "photoUrl": "https:\/\/edupal.co\/images\/AlanYuter.jpg",
  "refId": NumberLong(669),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370051c"),
  "department": "Marine Biotechnology",
  "email": "belas@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Belas",
  "lastName": "Belas",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelBelas.jpg",
  "refId": NumberLong(670),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370051d"),
  "department": "Marine Biotechnology",
  "email": "saito@umbc.edu",
  "firstName": "Keiko",
  "fullName": "Keiko Saito",
  "lastName": "Saito",
  "photoUrl": "https:\/\/edupal.co\/images\/KeikoSaito.jpg",
  "refId": NumberLong(671),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370051e"),
  "department": "Marine Biotechnology",
  "email": "sowers@umbc.edu",
  "firstName": "Kevin",
  "fullName": "Kevin Sowers",
  "lastName": "Sowers",
  "photoUrl": "https:\/\/edupal.co\/images\/KevinSowers.jpg",
  "refId": NumberLong(673),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab3315370051f"),
  "department": "Marine Biotechnology",
  "email": "dterlizz@umbc.edu",
  "firstName": "Daniel",
  "fullName": "Daniel Terlizzi",
  "lastName": "Terlizzi",
  "photoUrl": "https:\/\/edupal.co\/images\/DanielTerlizzi.jpg",
  "refId": NumberLong(674),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700520"),
  "department": "Marine Biotechnology",
  "email": "vakharia@umbc.edu",
  "firstName": "Vikram",
  "fullName": "Vikram Vakharia",
  "lastName": "Vakharia",
  "photoUrl": "https:\/\/edupal.co\/images\/VikramVakharia.jpg",
  "refId": NumberLong(675),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700521"),
  "department": "Mathematics and Statistics",
  "email": "kofi.adragni@umbc.edu",
  "firstName": "Kofi",
  "fullName": "Kofi Adragni",
  "lastName": "Adragni",
  "photoUrl": "https:\/\/edupal.co\/images\/KofiAdragni.jpg",
  "refId": NumberLong(676),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700522"),
  "department": "Mathematics and Statistics",
  "email": "tarmstro@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Armstrong",
  "lastName": "Armstrong",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasArmstrong.jpg",
  "refId": NumberLong(677),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700523"),
  "department": "Mathematics and Statistics",
  "email": "deepaknag@umbc.edu",
  "firstName": "Deepak",
  "fullName": "Deepak Ayyala",
  "lastName": "Ayyala",
  "photoUrl": "https:\/\/edupal.co\/images\/DeepakAyyala.jpg",
  "refId": NumberLong(678),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700524"),
  "department": "Mathematics and Statistics",
  "email": "raji@umbc.edu",
  "firstName": "Raji",
  "fullName": "Raji Baradwaj",
  "lastName": "Baradwaj",
  "photoUrl": "https:\/\/edupal.co\/images\/RajiBaradwaj.jpg",
  "refId": NumberLong(679),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9473975ab33153700525"),
  "department": "Mathematics and Statistics",
  "email": "jbell@umbc.edu",
  "firstName": "Jon",
  "fullName": "Jon Bell",
  "lastName": "Bell",
  "photoUrl": "https:\/\/edupal.co\/images\/JonBell.jpg",
  "refId": NumberLong(680),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700526"),
  "department": "Mathematics and Statistics",
  "email": "danaher1@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Danaher",
  "lastName": "Danaher",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleDanaher.jpg",
  "refId": NumberLong(681),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700527"),
  "department": "Mathematics and Statistics",
  "email": "draga@umbc.edu",
  "firstName": "Andrei",
  "fullName": "Andrei Draganescu",
  "lastName": "Draganescu",
  "photoUrl": "https:\/\/edupal.co\/images\/AndreiDraganescu.jpg",
  "refId": NumberLong(682),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700528"),
  "department": "Mathematics and Statistics",
  "email": "glezen@umbc.edu",
  "firstName": "John",
  "fullName": "John Glezen",
  "lastName": "Glezen",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnGlezen.jpg",
  "refId": NumberLong(683),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700529"),
  "department": "Mathematics and Statistics",
  "email": "gobbert@umbc.edu",
  "firstName": "Matthias",
  "fullName": "Matthias Gobbert",
  "lastName": "Gobbert",
  "photoUrl": "https:\/\/edupal.co\/images\/MatthiasGobbert.jpg",
  "refId": NumberLong(684),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370052a"),
  "department": "Mathematics and Statistics",
  "email": "gowda@math.umbc.edu",
  "firstName": "Muddappa",
  "fullName": "Muddappa Gowda",
  "lastName": "Gowda",
  "photoUrl": "https:\/\/edupal.co\/images\/MuddappaGowda.jpg",
  "refId": NumberLong(685),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370052b"),
  "department": "Mathematics and Statistics",
  "email": "guler@umbc.edu",
  "firstName": "Osman",
  "fullName": "Osman Guler",
  "lastName": "Guler",
  "photoUrl": "https:\/\/edupal.co\/images\/OsmanGuler.jpg",
  "refId": NumberLong(686),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370052c"),
  "department": "Mathematics and Statistics",
  "email": "mgurlu1@umbc.edu",
  "firstName": "Merve",
  "fullName": "Merve Gurlu",
  "lastName": "Gurlu",
  "photoUrl": "https:\/\/edupal.co\/images\/MerveGurlu.jpg",
  "refId": NumberLong(687),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370052d"),
  "department": "Mathematics and Statistics",
  "email": "khoffman@math.umbc.edu",
  "firstName": "Kathleen",
  "fullName": "Kathleen Hoffman",
  "lastName": "Hoffman",
  "photoUrl": "https:\/\/edupal.co\/images\/KathleenHoffman.jpg",
  "refId": NumberLong(688),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370052e"),
  "department": "Mathematics and Statistics",
  "email": "yihuang@umbc.edu",
  "firstName": "Yi",
  "fullName": "Yi Huang",
  "lastName": "Huang",
  "photoUrl": "https:\/\/edupal.co\/images\/YiHuang.jpg",
  "refId": NumberLong(689),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370052f"),
  "department": "Mathematics and Statistics",
  "email": "hwkang@umbc.edu",
  "firstName": "Hye-Won",
  "fullName": "Hye-Won Kang",
  "lastName": "Kang",
  "photoUrl": "https:\/\/edupal.co\/images\/Hye-WonKang.jpg",
  "refId": NumberLong(690),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700530"),
  "department": "Mathematics and Statistics",
  "email": "wkang@umbc.edu",
  "firstName": "Weining",
  "fullName": "Weining Kang",
  "lastName": "Kang",
  "photoUrl": "https:\/\/edupal.co\/images\/WeiningKang.jpg",
  "refId": NumberLong(691),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700531"),
  "department": "Mathematics and Statistics",
  "email": "jkapoor@umbc.edu",
  "firstName": "Jagmohan",
  "fullName": "Jagmohan Kapoor",
  "lastName": "Kapoor",
  "photoUrl": "https:\/\/edupal.co\/images\/JagmohanKapoor.jpg",
  "refId": NumberLong(692),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700532"),
  "department": "Mathematics and Statistics",
  "email": "bkegan1@umbc.edu",
  "firstName": "Bonnie",
  "fullName": "Bonnie Kegan",
  "lastName": "Kegan",
  "photoUrl": "https:\/\/edupal.co\/images\/BonnieKegan.jpg",
  "refId": NumberLong(693),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700533"),
  "department": "Mathematics and Statistics",
  "email": "mklein1@umbc.edu",
  "firstName": "Martin",
  "fullName": "Martin Klein",
  "lastName": "Klein",
  "photoUrl": "https:\/\/edupal.co\/images\/MartinKlein.jpg",
  "refId": NumberLong(694),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700534"),
  "department": "Mathematics and Statistics",
  "email": "kogan@math.umbc.edu",
  "firstName": "Jacob",
  "fullName": "Jacob Kogan",
  "lastName": "Kogan",
  "photoUrl": "https:\/\/edupal.co\/images\/JacobKogan.jpg",
  "refId": NumberLong(695),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700535"),
  "department": "Mathematics and Statistics",
  "email": "yunliu@umbc.edu",
  "firstName": "Yun",
  "fullName": "Yun Liu",
  "lastName": "Liu",
  "photoUrl": "https:\/\/edupal.co\/images\/YunLiu.jpg",
  "refId": NumberLong(696),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700536"),
  "department": "Mathematics and Statistics",
  "email": "jameslo@math.umbc.edu",
  "firstName": "James",
  "fullName": "James Lo",
  "lastName": "Lo",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesLo.jpg",
  "refId": NumberLong(697),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700537"),
  "department": "Mathematics and Statistics",
  "email": "yaakovm@umbc.edu",
  "firstName": "Yaakov",
  "fullName": "Yaakov Malinovsky",
  "lastName": "Malinovsky",
  "photoUrl": "https:\/\/edupal.co\/images\/YaakovMalinovsky.jpg",
  "refId": NumberLong(698),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700538"),
  "department": "Mathematics and Statistics",
  "email": "mathew@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Mathew",
  "lastName": "Mathew",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasMathew.jpg",
  "refId": NumberLong(699),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700539"),
  "department": "Mathematics and Statistics",
  "email": "actuary@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Meskin",
  "lastName": "Meskin",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenMeskin.jpg",
  "refId": NumberLong(700),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370053a"),
  "department": "Mathematics and Statistics",
  "email": "sminkoff@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Minkoff",
  "lastName": "Minkoff",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanMinkoff.jpg",
  "refId": NumberLong(701),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370053b"),
  "department": "Mathematics and Statistics",
  "email": "mmusce1@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Muscedere",
  "lastName": "Muscedere",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelMuscedere.jpg",
  "refId": NumberLong(702),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370053c"),
  "department": "Mathematics and Statistics",
  "email": "knanes@umbc.edu",
  "firstName": "Kalman",
  "fullName": "Kalman Nanes",
  "lastName": "Nanes",
  "photoUrl": "https:\/\/edupal.co\/images\/KalmanNanes.jpg",
  "refId": NumberLong(703),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370053d"),
  "department": "Mathematics and Statistics",
  "email": "nagaraj@umbc.edu",
  "firstName": "Nagaraj",
  "fullName": "Nagaraj Neerchal",
  "lastName": "Neerchal",
  "photoUrl": "https:\/\/edupal.co\/images\/NagarajNeerchal.jpg",
  "refId": NumberLong(704),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370053e"),
  "department": "Mathematics and Statistics",
  "email": "dhpark@umbc.edu",
  "firstName": "DoHwan",
  "fullName": "DoHwan Park",
  "lastName": "Park",
  "photoUrl": "https:\/\/edupal.co\/images\/DoHwanPark.jpg",
  "refId": NumberLong(705),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370053f"),
  "department": "Mathematics and Statistics",
  "email": "junpark@umbc.edu",
  "firstName": "Junyong",
  "fullName": "Junyong Park",
  "lastName": "Park",
  "photoUrl": "https:\/\/edupal.co\/images\/JunyongPark.jpg",
  "refId": NumberLong(706),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700540"),
  "department": "Mathematics and Statistics",
  "email": "bpeercy@umbc.edu",
  "firstName": "Brad",
  "fullName": "Brad Peercy",
  "lastName": "Peercy",
  "photoUrl": "https:\/\/edupal.co\/images\/BradPeercy.jpg",
  "refId": NumberLong(707),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700541"),
  "department": "Mathematics and Statistics",
  "email": "potra@umbc.edu",
  "firstName": "Florian",
  "fullName": "Florian Potra",
  "lastName": "Potra",
  "photoUrl": "https:\/\/edupal.co\/images\/FlorianPotra.jpg",
  "refId": NumberLong(708),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700542"),
  "department": "Mathematics and Statistics",
  "email": "muruhan@umbc.edu",
  "firstName": "Muruhan",
  "fullName": "Muruhan Rathinam",
  "lastName": "Rathinam",
  "photoUrl": "https:\/\/edupal.co\/images\/MuruhanRathinam.jpg",
  "refId": NumberLong(709),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700543"),
  "department": "Mathematics and Statistics",
  "email": "arogers@umbc.edu",
  "firstName": "Anna",
  "fullName": "Anna Rogers",
  "lastName": "Rogers",
  "photoUrl": "https:\/\/edupal.co\/images\/AnnaRogers.jpg",
  "refId": NumberLong(710),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700544"),
  "department": "Mathematics and Statistics",
  "email": "rostamian@umbc.edu",
  "firstName": "Rouben",
  "fullName": "Rouben Rostamian",
  "lastName": "Rostamian",
  "photoUrl": "https:\/\/edupal.co\/images\/RoubenRostamian.jpg",
  "refId": NumberLong(711),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700545"),
  "department": "Mathematics and Statistics",
  "email": "anindya@umbc.edu",
  "firstName": "Anindya",
  "fullName": "Anindya Roy",
  "lastName": "Roy",
  "photoUrl": "https:\/\/edupal.co\/images\/AnindyaRoy.jpg",
  "refId": NumberLong(712),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700546"),
  "department": "Mathematics and Statistics",
  "email": "seidman@math.umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Seidman",
  "lastName": "Seidman",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasSeidman.jpg",
  "refId": NumberLong(713),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700547"),
  "department": "Mathematics and Statistics",
  "email": "nsharma1@umbc.edu",
  "firstName": "Neeraj",
  "fullName": "Neeraj Sharma",
  "lastName": "Sharma",
  "photoUrl": "https:\/\/edupal.co\/images\/NeerajSharma.jpg",
  "refId": NumberLong(714),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700548"),
  "department": "Mathematics and Statistics",
  "email": "shenj@umbc.edu",
  "firstName": "Jinglai",
  "fullName": "Jinglai Shen",
  "lastName": "Shen",
  "photoUrl": "https:\/\/edupal.co\/images\/JinglaiShen.jpg",
  "refId": NumberLong(715),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700549"),
  "department": "Mathematics and Statistics",
  "email": "sinha@umbc.edu",
  "firstName": "Bimal",
  "fullName": "Bimal Sinha",
  "lastName": "Sinha",
  "photoUrl": "https:\/\/edupal.co\/images\/BimalSinha.jpg",
  "refId": NumberLong(716),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370054a"),
  "department": "Mathematics and Statistics",
  "email": "slowikow@umbc.edu",
  "firstName": "William",
  "fullName": "William Slowikowski",
  "lastName": "Slowikowski",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamSlowikowski.jpg",
  "refId": NumberLong(717),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370054b"),
  "department": "Mathematics and Statistics",
  "email": "asoane@umbc.edu",
  "firstName": "Ana Maria",
  "fullName": "Ana Maria Soane",
  "lastName": "Soane",
  "photoUrl": "https:\/\/edupal.co\/images\/AnaMariaSoane.jpg",
  "refId": NumberLong(718),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370054c"),
  "department": "Mathematics and Statistics",
  "email": "estanwy1@umbc.edu",
  "firstName": "Elizabeth",
  "fullName": "Liz Stanwyck",
  "lastName": "Stanwyck",
  "photoUrl": "https:\/\/edupal.co\/images\/LizStanwyck.jpg",
  "refId": NumberLong(719),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370054d"),
  "department": "Mathematics and Statistics",
  "email": "suri@umbc.edu",
  "firstName": "Manil",
  "fullName": "Manil Suri",
  "lastName": "Suri",
  "photoUrl": "https:\/\/edupal.co\/images\/ManilSuri.jpg",
  "refId": NumberLong(720),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370054e"),
  "department": "Mathematics and Statistics",
  "email": "tighe@umbc.edu",
  "firstName": "Bonny",
  "fullName": "Bonny Tighe",
  "lastName": "Tighe",
  "photoUrl": "https:\/\/edupal.co\/images\/BonnyTighe.jpg",
  "refId": NumberLong(721),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370054f"),
  "department": "Mathematics and Statistics",
  "email": "dtrott1@umbc.edu",
  "firstName": "David",
  "fullName": "David Trott",
  "lastName": "Trott",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidTrott.jpg",
  "refId": NumberLong(722),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700550"),
  "department": "Mechanical Engineering",
  "email": "darola@umbc.edu",
  "firstName": "Dwayne",
  "fullName": "Dwayne Arola",
  "lastName": "Arola",
  "photoUrl": "https:\/\/edupal.co\/images\/DwayneArola.jpg",
  "refId": NumberLong(723),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700551"),
  "department": "Mechanical Engineering",
  "email": "panos@umbc.edu",
  "firstName": "Panos",
  "fullName": "Panos Charlambidas",
  "lastName": "Charlambidas",
  "photoUrl": "https:\/\/edupal.co\/images\/PanosCharlambidas.jpg",
  "refId": NumberLong(724),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700552"),
  "department": "Mechanical Engineering",
  "email": "eggleton@umbc.edu",
  "firstName": "Charles",
  "fullName": "Charles Eggleton",
  "lastName": "Eggleton",
  "photoUrl": "https:\/\/edupal.co\/images\/CharlesEggleton.jpg",
  "refId": NumberLong(725),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700553"),
  "department": "Mechanical Engineering",
  "email": "farquhar@umbc.edu",
  "firstName": "Anthony",
  "fullName": "Anthony Farquhar",
  "lastName": "Farquhar",
  "photoUrl": "https:\/\/edupal.co\/images\/AnthonyFarquhar.jpg",
  "refId": NumberLong(726),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700554"),
  "department": "Mechanical Engineering",
  "email": "dhowle1@umbc.edu",
  "firstName": "Douglas",
  "fullName": "Douglas Howle",
  "lastName": "Howle",
  "photoUrl": "https:\/\/edupal.co\/images\/DouglasHowle.jpg",
  "refId": NumberLong(727),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700555"),
  "department": "Mechanical Engineering",
  "email": "mogavero@umbc.edu",
  "firstName": "Marc",
  "fullName": "Marc Mogavero",
  "lastName": "Mogavero",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcMogavero.jpg",
  "refId": NumberLong(728),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700556"),
  "department": "Mechanical Engineering",
  "email": "aspence@umbc.edu",
  "firstName": "Anne",
  "fullName": "Anne Spence",
  "lastName": "Spence",
  "photoUrl": "https:\/\/edupal.co\/images\/AnneSpence.jpg",
  "refId": NumberLong(729),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700557"),
  "department": "Mechanical Engineering",
  "email": "stephe2@umbc.edu",
  "firstName": "Beth",
  "fullName": "Beth Stephen",
  "lastName": "Stephen",
  "photoUrl": "https:\/\/edupal.co\/images\/BethStephen.jpg",
  "refId": NumberLong(730),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700558"),
  "department": "Mechanical Engineering",
  "email": "tasch@umbc.edu",
  "firstName": "Uri",
  "fullName": "Uri Tasch",
  "lastName": "Tasch",
  "photoUrl": "https:\/\/edupal.co\/images\/UriTasch.jpg",
  "refId": NumberLong(731),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700559"),
  "department": "Mechanical Engineering",
  "email": "topolesk@umbc.edu",
  "firstName": "Timmie",
  "fullName": "Timmie Topoleski",
  "lastName": "Topoleski",
  "photoUrl": "https:\/\/edupal.co\/images\/TimmieTopoleski.jpg",
  "refId": NumberLong(732),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370055a"),
  "department": "Mechanical Engineering",
  "email": "tshibans@umbc.edu",
  "firstName": "Wa-Muzemba",
  "fullName": "Wa-Muzemba Tshibangu",
  "lastName": "Tshibangu",
  "photoUrl": "https:\/\/edupal.co\/images\/Wa-MuzembaTshibangu.jpg",
  "refId": NumberLong(733),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370055b"),
  "department": "Mechanical Engineering",
  "email": "jingrui1@umbc.edu",
  "firstName": "Jingrui",
  "fullName": "Jingrui Wang",
  "lastName": "Wang",
  "photoUrl": "https:\/\/edupal.co\/images\/JingruiWang.jpg",
  "refId": NumberLong(734),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370055c"),
  "department": "Mechanical Engineering",
  "email": "zliang@umbc.edu",
  "firstName": "Liang",
  "fullName": "Liang Zhu",
  "lastName": "Zhu",
  "photoUrl": "https:\/\/edupal.co\/images\/LiangZhu.jpg",
  "refId": NumberLong(735),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370055d"),
  "department": "Mechanical Engineering",
  "email": "wzhu@umbc.edu",
  "firstName": "Weidong",
  "fullName": "Weidong Zhu",
  "lastName": "Zhu",
  "photoUrl": "https:\/\/edupal.co\/images\/WeidongZhu.jpg",
  "refId": NumberLong(736),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370055e"),
  "department": "Mechanical Engineering",
  "email": "mzupan@umbc.edu",
  "firstName": "Marcus",
  "fullName": "Marcus Zupan",
  "lastName": "Zupan",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcusZupan.jpg",
  "refId": NumberLong(737),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370055f"),
  "department": "Media and Communication Studies",
  "email": "adelman@umbc.edu",
  "firstName": "Rebecca",
  "fullName": "Rebecca Adelman",
  "lastName": "Adelman",
  "photoUrl": "https:\/\/edupal.co\/images\/RebeccaAdelman.jpg",
  "refId": NumberLong(738),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700560"),
  "department": "Media and Communication Studies",
  "email": "loviglio@umbc.edu",
  "firstName": "Jason",
  "fullName": "Jason Loviglio",
  "lastName": "Loviglio",
  "photoUrl": "https:\/\/edupal.co\/images\/JasonLoviglio.jpg",
  "refId": NumberLong(739),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700561"),
  "department": "Media and Communication Studies",
  "email": "shewbrid@umbc.edu",
  "firstName": "Bill",
  "fullName": "Bill Shewbridge",
  "lastName": "Shewbridge",
  "photoUrl": "https:\/\/edupal.co\/images\/BillShewbridge.jpg",
  "refId": NumberLong(740),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700562"),
  "department": "Media and Communication Studies",
  "email": "dsnyder@umbc.edu",
  "firstName": "Donald",
  "fullName": "Donald Snyder",
  "lastName": "Snyder",
  "photoUrl": "https:\/\/edupal.co\/images\/DonaldSnyder.jpg",
  "refId": NumberLong(741),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700563"),
  "department": "Media and Communication Studies",
  "email": "rita.turner@umbc.edu",
  "firstName": "Rita",
  "fullName": "Rita Turner",
  "lastName": "Turner",
  "photoUrl": "https:\/\/edupal.co\/images\/RitaTurner.jpg",
  "refId": NumberLong(742),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700564"),
  "department": "Media and Communication Studies",
  "email": "fanyang@umbc.edu",
  "firstName": "Fan",
  "fullName": "Fan Yang",
  "lastName": "Yang",
  "photoUrl": "https:\/\/edupal.co\/images\/FanYang.jpg",
  "refId": NumberLong(743),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700565"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "badagbo1@umbc.edu",
  "firstName": "Yawo",
  "fullName": "Yawo Badagbo",
  "lastName": "Badagbo",
  "photoUrl": "https:\/\/edupal.co\/images\/YawoBadagbo.jpg",
  "refId": NumberLong(744),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700566"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "abadagbo@umbc.edu",
  "firstName": "Leopoldine",
  "fullName": "Leopoldine Badagbo-Adzra",
  "lastName": "Badagbo-Adzra",
  "photoUrl": "https:\/\/edupal.co\/images\/LeopoldineBadagbo-Adzra.jpg",
  "refId": NumberLong(745),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700567"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "bayerl@umbc.edu",
  "firstName": "Hannelore",
  "fullName": "Hannelore Bayerl",
  "lastName": "Bayerl",
  "photoUrl": "https:\/\/edupal.co\/images\/HanneloreBayerl.jpg",
  "refId": NumberLong(746),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700568"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "nbazgan@umbc.edu",
  "firstName": "N.",
  "fullName": "N. Bazgan",
  "lastName": "Bazgan",
  "photoUrl": "https:\/\/edupal.co\/images\/N.Bazgan.jpg",
  "refId": NumberLong(747),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700569"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "bengo1@umbc.edu",
  "firstName": "Anne",
  "fullName": "Anne Bengochea",
  "lastName": "Bengochea",
  "photoUrl": "https:\/\/edupal.co\/images\/AnneBengochea.jpg",
  "refId": NumberLong(748),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370056a"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "wbrown@umbc.edu",
  "firstName": "William",
  "fullName": "William Brown",
  "lastName": "Brown",
  "photoUrl": "https:\/\/edupal.co\/images\/WilliamBrown.jpg",
  "refId": NumberLong(749),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370056b"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "carm3@umbc.edu",
  "firstName": "Sean",
  "fullName": "Sean Carmody",
  "lastName": "Carmody",
  "photoUrl": "https:\/\/edupal.co\/images\/SeanCarmody.jpg",
  "refId": NumberLong(750),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370056c"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "deanna5@umbc.edu",
  "firstName": "Deanna",
  "fullName": "Deanna Cerquetti",
  "lastName": "Cerquetti",
  "photoUrl": "https:\/\/edupal.co\/images\/DeannaCerquetti.jpg",
  "refId": NumberLong(751),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370056d"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "devernei@umbc.edu",
  "firstName": "Marie",
  "fullName": "Marie Deverneil",
  "lastName": "Deverneil",
  "photoUrl": "https:\/\/edupal.co\/images\/MarieDeverneil.jpg",
  "refId": NumberLong(752),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370056e"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "samir1@umbc.edu",
  "firstName": "Samir",
  "fullName": "Samir Omari",
  "lastName": "Omari",
  "photoUrl": "https:\/\/edupal.co\/images\/SamirOmari.jpg",
  "refId": NumberLong(753),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370056f"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "mogador@umbc.edu",
  "firstName": "Zak",
  "fullName": "Zak Fatih",
  "lastName": "Fatih",
  "photoUrl": "https:\/\/edupal.co\/images\/ZakFatih.jpg",
  "refId": NumberLong(754),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700570"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "tfield@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Field",
  "lastName": "Field",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasField.jpg",
  "refId": NumberLong(755),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700571"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "gmaria1@umbc.edu",
  "firstName": "Maria",
  "fullName": "Maria Gomez-Rubio",
  "lastName": "Gomez-Rubio",
  "photoUrl": "https:\/\/edupal.co\/images\/MariaGomez-Rubio.jpg",
  "refId": NumberLong(756),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700572"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "hemilv1@umbc.edu",
  "firstName": "Milvia",
  "fullName": "Milvia Hernandez",
  "lastName": "Hernandez",
  "photoUrl": "https:\/\/edupal.co\/images\/MilviaHernandez.jpg",
  "refId": NumberLong(757),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700573"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "tmkhgnbm@umbc.edu",
  "firstName": "Tomoko",
  "fullName": "Tomoko Hoogenboom",
  "lastName": "Hoogenboom",
  "photoUrl": "https:\/\/edupal.co\/images\/TomokoHoogenboom.jpg",
  "refId": NumberLong(758),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700574"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "ka@research.umbc.edu",
  "firstName": "Omar",
  "fullName": "Omar Ka",
  "lastName": "Ka",
  "photoUrl": "https:\/\/edupal.co\/images\/OmarKa.jpg",
  "refId": NumberLong(759),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700575"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "ykim@umbc.edu",
  "firstName": "Youngja",
  "fullName": "Youngja Kim",
  "lastName": "Kim",
  "photoUrl": "https:\/\/edupal.co\/images\/YoungjaKim.jpg",
  "refId": NumberLong(760),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700576"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "krippes@umbc.edu",
  "firstName": "Yeon",
  "fullName": "Yeon Krippes",
  "lastName": "Krippes",
  "photoUrl": "https:\/\/edupal.co\/images\/YeonKrippes.jpg",
  "refId": NumberLong(761),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700577"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "larkey@umbc.edu",
  "firstName": "Edward",
  "fullName": "Edward Larkey",
  "lastName": "Larkey",
  "photoUrl": "https:\/\/edupal.co\/images\/EdwardLarkey.jpg",
  "refId": NumberLong(762),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700578"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "sliberma@umbc.edu",
  "firstName": "Saveliy",
  "fullName": "Saveliy Liberman",
  "lastName": "Liberman",
  "photoUrl": "https:\/\/edupal.co\/images\/SaveliyLiberman.jpg",
  "refId": NumberLong(763),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700579"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "laralip1@umbc.edu",
  "firstName": "Lara",
  "fullName": "Lara Liptak",
  "lastName": "Liptak",
  "photoUrl": "https:\/\/edupal.co\/images\/LaraLiptak.jpg",
  "refId": NumberLong(764),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370057a"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "mariamanni@umbc.edu",
  "firstName": "Maria",
  "fullName": "Maria Manni",
  "lastName": "Manni",
  "photoUrl": "https:\/\/edupal.co\/images\/MariaManni.jpg",
  "refId": NumberLong(765),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370057b"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "may@umbc.edu",
  "firstName": "Brigitte",
  "fullName": "Brigitte May",
  "lastName": "May",
  "photoUrl": "https:\/\/edupal.co\/images\/BrigitteMay.jpg",
  "refId": NumberLong(766),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370057c"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "medina@umbc.edu",
  "firstName": "Adriana",
  "fullName": "Adriana Medina",
  "lastName": "Medina",
  "photoUrl": "https:\/\/edupal.co\/images\/AdrianaMedina.jpg",
  "refId": NumberLong(767),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370057d"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "remessick@umbc.edu",
  "firstName": "Rosalie",
  "fullName": "Rosalie Messick",
  "lastName": "Messick",
  "photoUrl": "https:\/\/edupal.co\/images\/RosalieMessick.jpg",
  "refId": NumberLong(768),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370057e"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "mirandaa@umbc.edu",
  "firstName": "Citlali",
  "fullName": "Citlali Miranda-Aldaco",
  "lastName": "Miranda-Aldaco",
  "photoUrl": "https:\/\/edupal.co\/images\/CitlaliMiranda-Aldaco.jpg",
  "refId": NumberLong(769),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab3315370057f"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "danielm2@umbc.edu",
  "firstName": "Daniel",
  "fullName": "Daniel Morales",
  "lastName": "Morales",
  "photoUrl": "https:\/\/edupal.co\/images\/DanielMorales.jpg",
  "refId": NumberLong(770),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700580"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "george8@umbc.edu",
  "firstName": "Georges",
  "fullName": "Georges Mushayuma",
  "lastName": "Mushayuma",
  "photoUrl": "https:\/\/edupal.co\/images\/GeorgesMushayuma.jpg",
  "refId": NumberLong(771),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700581"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "aoskoz@umbc.edu",
  "firstName": "Ana",
  "fullName": "Ana Oskoz",
  "lastName": "Oskoz",
  "photoUrl": "https:\/\/edupal.co\/images\/AnaOskoz.jpg",
  "refId": NumberLong(772),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700582"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "poggio@umbc.edu",
  "firstName": "Sara",
  "fullName": "Sara Poggio",
  "lastName": "Poggio",
  "photoUrl": "https:\/\/edupal.co\/images\/SaraPoggio.jpg",
  "refId": NumberLong(773),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700583"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "provench@umbc.edu",
  "firstName": "Dennis",
  "fullName": "Dennis Provencher",
  "lastName": "Provencher",
  "photoUrl": "https:\/\/edupal.co\/images\/DennisProvencher.jpg",
  "refId": NumberLong(774),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700584"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "aqousar@umbc.edu",
  "firstName": "Aurora",
  "fullName": "Aurora Quosar",
  "lastName": "Quosar",
  "photoUrl": "https:\/\/edupal.co\/images\/AuroraQuosar.jpg",
  "refId": NumberLong(775),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700585"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "rosentha@umbc.edu",
  "firstName": "Alan",
  "fullName": "Alan Rosenthal",
  "lastName": "Rosenthal",
  "photoUrl": "https:\/\/edupal.co\/images\/AlanRosenthal.jpg",
  "refId": NumberLong(776),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700586"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "rusinko@umbc.edu",
  "firstName": "Elaine",
  "fullName": "Elaine Rusinko",
  "lastName": "Rusinko",
  "photoUrl": "https:\/\/edupal.co\/images\/ElaineRusinko.jpg",
  "refId": NumberLong(777),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9474975ab33153700587"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "ssantora@umbc.edu",
  "firstName": "Shirley",
  "fullName": "Shirley Santora",
  "lastName": "Santora",
  "photoUrl": "https:\/\/edupal.co\/images\/ShirleySantora.jpg",
  "refId": NumberLong(778),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700588"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "schneide@umbc.edu",
  "firstName": "Judith",
  "fullName": "Judith Schneider",
  "lastName": "Schneider",
  "photoUrl": "https:\/\/edupal.co\/images\/JudithSchneider.jpg",
  "refId": NumberLong(779),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700589"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "aschwart@umbc.edu",
  "firstName": "Ana",
  "fullName": "Ana Schwartz",
  "lastName": "Schwartz",
  "photoUrl": "https:\/\/edupal.co\/images\/AnaSchwartz.jpg",
  "refId": NumberLong(780),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370058a"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "ashields@umbc.edu",
  "firstName": "Anna",
  "fullName": "Anna Shields",
  "lastName": "Shields",
  "photoUrl": "https:\/\/edupal.co\/images\/AnnaShields.jpg",
  "refId": NumberLong(781),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370058b"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "sinnigen@umbc.edu",
  "firstName": "John",
  "fullName": "John Sinnigen",
  "lastName": "Sinnigen",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnSinnigen.jpg",
  "refId": NumberLong(782),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370058c"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "ssusanne@umbc.edu",
  "firstName": "Susanne",
  "fullName": "Susanne Sutton",
  "lastName": "Sutton",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanneSutton.jpg",
  "refId": NumberLong(783),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370058d"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "stollem@umbc.edu",
  "firstName": "John",
  "fullName": "John Stolle-Mcallister",
  "lastName": "Stolle-Mcallister",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnStolle-Mcallister.jpg",
  "refId": NumberLong(784),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370058e"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "walcott@umbc.edu",
  "firstName": "Yasuko",
  "fullName": "Yasuko Walcott",
  "lastName": "Walcott",
  "photoUrl": "https:\/\/edupal.co\/images\/YasukoWalcott.jpg",
  "refId": NumberLong(785),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370058f"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "dwecke1@umbc.edu",
  "firstName": "Donna",
  "fullName": "Donna Wecker",
  "lastName": "Wecker",
  "photoUrl": "https:\/\/edupal.co\/images\/DonnaWecker.jpg",
  "refId": NumberLong(786),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700590"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "westphal@umbc.edu",
  "firstName": "German",
  "fullName": "German Westphal",
  "lastName": "Westphal",
  "photoUrl": "https:\/\/edupal.co\/images\/GermanWestphal.jpg",
  "refId": NumberLong(787),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700591"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "xwolff@umbc.edu",
  "firstName": "Xenia",
  "fullName": "Xenia Wolff",
  "lastName": "Wolff",
  "photoUrl": "https:\/\/edupal.co\/images\/XeniaWolff.jpg",
  "refId": NumberLong(788),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700592"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "kyoon@umbc.edu",
  "firstName": "Kyung-Eun",
  "fullName": "Kyung-Eun Yoon",
  "lastName": "Yoon",
  "photoUrl": "https:\/\/edupal.co\/images\/Kyung-EunYoon.jpg",
  "refId": NumberLong(789),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700593"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "young@umbc.edu",
  "firstName": "Steven",
  "fullName": "Steven Young",
  "lastName": "Young",
  "photoUrl": "https:\/\/edupal.co\/images\/StevenYoung.jpg",
  "refId": NumberLong(790),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700594"),
  "department": "Modern Languages, Linguistics, and Intercultural Communication",
  "email": "zhouc1@umbc.edu",
  "firstName": "Chengcheng",
  "fullName": "Chengcheng Zhou",
  "lastName": "Zhou",
  "photoUrl": "https:\/\/edupal.co\/images\/ChengchengZhou.jpg",
  "refId": NumberLong(791),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700595"),
  "department": "Music",
  "email": "andrist@umbc.edu",
  "firstName": "Audrey",
  "fullName": "Audrey Andrist",
  "lastName": "Andrist",
  "photoUrl": "https:\/\/edupal.co\/images\/AudreyAndrist.jpg",
  "refId": NumberLong(792),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700596"),
  "department": "Music",
  "email": "appelman@umbc.edu",
  "firstName": "Harold",
  "fullName": "Harold Appelman",
  "lastName": "Appelman",
  "photoUrl": "https:\/\/edupal.co\/images\/HaroldAppelman.jpg",
  "refId": NumberLong(793),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700597"),
  "department": "Music",
  "email": "tbaldwin@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Baldwin",
  "lastName": "Baldwin",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasBaldwin.jpg",
  "refId": NumberLong(794),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700598"),
  "department": "Music",
  "email": "gbeck1@umbc.edu",
  "firstName": "Gina",
  "fullName": "Gina Beck",
  "lastName": "Beck",
  "photoUrl": "https:\/\/edupal.co\/images\/GinaBeck.jpg",
  "refId": NumberLong(795),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab33153700599"),
  "department": "Music",
  "email": "beith@umbc.edu",
  "firstName": "Nancy",
  "fullName": "Nancy Beith",
  "lastName": "Beith",
  "photoUrl": "https:\/\/edupal.co\/images\/NancyBeith.jpg",
  "refId": NumberLong(796),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370059a"),
  "department": "Music",
  "email": "wcameron@umbc.edu",
  "firstName": "Wayne",
  "fullName": "Wayne Cameron",
  "lastName": "Cameron",
  "photoUrl": "https:\/\/edupal.co\/images\/WayneCameron.jpg",
  "refId": NumberLong(797),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370059b"),
  "department": "Music",
  "email": "caraccio@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Caracciolo",
  "lastName": "Caracciolo",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenCaracciolo.jpg",
  "refId": NumberLong(798),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370059c"),
  "department": "Music",
  "email": "cella@umbc.edu",
  "firstName": "Lisa",
  "fullName": "Lisa Cella",
  "lastName": "Cella",
  "photoUrl": "https:\/\/edupal.co\/images\/LisaCella.jpg",
  "refId": NumberLong(799),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370059d"),
  "department": "Music",
  "email": "fdaglar@umbc.edu",
  "firstName": "Fatma",
  "fullName": "Fatma Daglar",
  "lastName": "Daglar",
  "photoUrl": "https:\/\/edupal.co\/images\/FatmaDaglar.jpg",
  "refId": NumberLong(800),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370059e"),
  "department": "Music",
  "email": "dusman@umbc.edu",
  "firstName": "Linda",
  "fullName": "Linda Dusman",
  "lastName": "Dusman",
  "photoUrl": "https:\/\/edupal.co\/images\/LindaDusman.jpg",
  "refId": NumberLong(801),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab3315370059f"),
  "department": "Music",
  "email": "forshee@umbc.edu",
  "firstName": "Zane",
  "fullName": "Zane Forshee",
  "lastName": "Forshee",
  "photoUrl": "https:\/\/edupal.co\/images\/ZaneForshee.jpg",
  "refId": NumberLong(802),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a0"),
  "department": "Music",
  "email": "agold@umbc.edu",
  "firstName": "Alon",
  "fullName": "Alon Goldstein",
  "lastName": "Goldstein",
  "photoUrl": "https:\/\/edupal.co\/images\/AlonGoldstein.jpg",
  "refId": NumberLong(803),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a1"),
  "department": "Music",
  "email": "goldstein@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Goldstein",
  "lastName": "Goldstein",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasGoldstein.jpg",
  "refId": NumberLong(804),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a2"),
  "department": "Music",
  "email": "michaelh@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Hall",
  "lastName": "Hall",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelHall.jpg",
  "refId": NumberLong(805),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a3"),
  "department": "Music",
  "email": "hawleyjr@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Hawley",
  "lastName": "Hawley",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasHawley.jpg",
  "refId": NumberLong(806),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a4"),
  "department": "Music",
  "email": "hamid@umbc.edu",
  "firstName": "Hamid",
  "fullName": "Hamid Hossain",
  "lastName": "Hossain",
  "photoUrl": "https:\/\/edupal.co\/images\/HamidHossain.jpg",
  "refId": NumberLong(807),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a5"),
  "department": "Music",
  "email": "meh@umbc.edu",
  "firstName": "Michelle",
  "fullName": "Michelle Humphreys",
  "lastName": "Humphreys",
  "photoUrl": "https:\/\/edupal.co\/images\/MichelleHumphreys.jpg",
  "refId": NumberLong(808),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a6"),
  "department": "Music",
  "email": "KristinJurkscheit@umbc.edu",
  "firstName": "Kristin",
  "fullName": "Kristin Jurkscheit",
  "lastName": "Jurkscheit",
  "photoUrl": "https:\/\/edupal.co\/images\/KristinJurkscheit.jpg",
  "refId": NumberLong(809),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a7"),
  "department": "Music",
  "email": "opus130@gmail.com",
  "firstName": "Maria",
  "fullName": "Maria Kannen",
  "lastName": "Kannen",
  "photoUrl": "https:\/\/edupal.co\/images\/MariaKannen.jpg",
  "refId": NumberLong(810),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a8"),
  "department": "Music",
  "email": "lkesner@umbc.edu",
  "firstName": "Lori",
  "fullName": "Lori Kesner",
  "lastName": "Kesner",
  "photoUrl": "https:\/\/edupal.co\/images\/LoriKesner.jpg",
  "refId": NumberLong(811),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005a9"),
  "department": "Music",
  "email": "barithom@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas King",
  "lastName": "King",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasKing.jpg",
  "refId": NumberLong(812),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005aa"),
  "department": "Music",
  "email": "gitaladd@umbc.edu",
  "firstName": "Gita",
  "fullName": "Gita Ladd",
  "lastName": "Ladd",
  "photoUrl": "https:\/\/edupal.co\/images\/GitaLadd.jpg",
  "refId": NumberLong(813),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ab"),
  "department": "Music",
  "email": "lagana69@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Lagana",
  "lastName": "Lagana",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasLagana.jpg",
  "refId": NumberLong(814),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ac"),
  "department": "Music",
  "email": "jamacaul@umbc.edu",
  "firstName": "Janice",
  "fullName": "Janice Macaulay",
  "lastName": "Macaulay",
  "photoUrl": "https:\/\/edupal.co\/images\/JaniceMacaulay.jpg",
  "refId": NumberLong(815),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ad"),
  "department": "Music",
  "email": "markovic@umbc.edu",
  "firstName": "Lorriana",
  "fullName": "Lorriana Markovic",
  "lastName": "Markovic",
  "photoUrl": "https:\/\/edupal.co\/images\/LorrianaMarkovic.jpg",
  "refId": NumberLong(816),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ae"),
  "department": "Music",
  "email": "jparen1@umbc.edu",
  "firstName": "Christian",
  "fullName": "Christian Parent",
  "lastName": "Parent",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristianParent.jpg",
  "refId": NumberLong(817),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005af"),
  "department": "Music",
  "email": "jpollauf@umbc.edu",
  "firstName": "Jacqueline",
  "fullName": "Jacqueline Pollauf",
  "lastName": "Pollauf",
  "photoUrl": "https:\/\/edupal.co\/images\/JacquelinePollauf.jpg",
  "refId": NumberLong(818),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b0"),
  "department": "Music",
  "email": "jregan@umbc.edu",
  "firstName": "Joseph",
  "fullName": "Joseph Regan",
  "lastName": "Regan",
  "photoUrl": "https:\/\/edupal.co\/images\/JosephRegan.jpg",
  "refId": NumberLong(819),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b1"),
  "department": "Music",
  "email": "revill@umbc.edu",
  "firstName": "David",
  "fullName": "David Revill",
  "lastName": "Revill",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidRevill.jpg",
  "refId": NumberLong(820),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b2"),
  "department": "Music",
  "email": "emrichards@umbc.edu",
  "firstName": "Edwin",
  "fullName": "Edwin Richards",
  "lastName": "Richards",
  "photoUrl": "https:\/\/edupal.co\/images\/EdwinRichards.jpg",
  "refId": NumberLong(821),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b3"),
  "department": "Music",
  "email": "tanosaki@umbc.edu",
  "firstName": "Kazuko",
  "fullName": "Kazuko Richards",
  "lastName": "Richards",
  "photoUrl": "https:\/\/edupal.co\/images\/KazukoRichards.jpg",
  "refId": NumberLong(822),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b4"),
  "department": "Music",
  "email": "lruas@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Ruas",
  "lastName": "Ruas",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraRuas.jpg",
  "refId": NumberLong(823),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b5"),
  "department": "Music",
  "email": "rspittel@umbc.edu",
  "firstName": "Richard",
  "fullName": "Richard Spittel",
  "lastName": "Spittel",
  "photoUrl": "https:\/\/edupal.co\/images\/RichardSpittel.jpg",
  "refId": NumberLong(824),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b6"),
  "department": "Music",
  "email": "stiemann@umbc.edu",
  "firstName": "Scott",
  "fullName": "Scott Tiemann",
  "lastName": "Tiemann",
  "photoUrl": "https:\/\/edupal.co\/images\/ScottTiemann.jpg",
  "refId": NumberLong(825),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b7"),
  "department": "Music",
  "email": "ctremb@umbc.edu",
  "firstName": "Christian",
  "fullName": "Christian Tremblay",
  "lastName": "Tremblay",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristianTremblay.jpg",
  "refId": NumberLong(826),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b8"),
  "department": "Music",
  "email": "awonn2345@umbc.edu",
  "firstName": "Alan",
  "fullName": "Alan Wonneberger",
  "lastName": "Wonneberger",
  "photoUrl": "https:\/\/edupal.co\/images\/AlanWonneberger.jpg",
  "refId": NumberLong(827),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005b9"),
  "department": "Music",
  "email": "yoshioka@umbc.edu",
  "firstName": "Airi",
  "fullName": "Airi Yoshioka",
  "lastName": "Yoshioka",
  "photoUrl": "https:\/\/edupal.co\/images\/AiriYoshioka.jpg",
  "refId": NumberLong(828),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ba"),
  "department": "Music",
  "email": "ayoung@umbc.edu",
  "firstName": "Alice",
  "fullName": "Alice Young",
  "lastName": "Young",
  "photoUrl": "https:\/\/edupal.co\/images\/AliceYoung.jpg",
  "refId": NumberLong(829),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005bb"),
  "department": "Philosophy",
  "email": "Andrew.Bridges@umbc.edu",
  "firstName": "Andrew",
  "fullName": "Andrew Bridges",
  "lastName": "Bridges",
  "photoUrl": "https:\/\/edupal.co\/images\/AndrewBridges.jpg",
  "refId": NumberLong(830),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005bc"),
  "department": "Philosophy",
  "email": "ealick@umbc.edu",
  "firstName": "Greg",
  "fullName": "Greg Ealick",
  "lastName": "Ealick",
  "photoUrl": "https:\/\/edupal.co\/images\/GregEalick.jpg",
  "refId": NumberLong(831),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005bd"),
  "department": "Philosophy",
  "email": "pfeifer@umbc.edu",
  "firstName": "Jessica",
  "fullName": "Jessica Pfeifer",
  "lastName": "Pfeifer",
  "photoUrl": "https:\/\/edupal.co\/images\/JessicaPfeifer.jpg",
  "refId": NumberLong(832),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005be"),
  "department": "Philosophy",
  "email": "rtemplet@umbc.edu",
  "firstName": "Roye",
  "fullName": "Roye Templeton",
  "lastName": "Templeton",
  "photoUrl": "https:\/\/edupal.co\/images\/RoyeTempleton.jpg",
  "refId": NumberLong(833),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005bf"),
  "department": "Philosophy",
  "email": "jathomas@umbc.edu",
  "firstName": "James",
  "fullName": "James Thomas",
  "lastName": "Thomas",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesThomas.jpg",
  "refId": NumberLong(834),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c0"),
  "department": "Philosophy",
  "email": "philseng@umbc.edu",
  "firstName": "Phillip",
  "fullName": "Phillip Seng",
  "lastName": "Seng",
  "photoUrl": "https:\/\/edupal.co\/images\/PhillipSeng.jpg",
  "refId": NumberLong(835),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c1"),
  "department": "Philosophy",
  "email": "rwilso4@umbc.edu",
  "firstName": "Rich",
  "fullName": "Rich Wilson",
  "lastName": "Wilson",
  "photoUrl": "https:\/\/edupal.co\/images\/RichWilson.jpg",
  "refId": NumberLong(836),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c2"),
  "department": "Philosophy",
  "email": "yalowitz@umbc.edu",
  "firstName": "Steven",
  "fullName": "Steven Yalowitz",
  "lastName": "Yalowitz",
  "photoUrl": "https:\/\/edupal.co\/images\/StevenYalowitz.jpg",
  "refId": NumberLong(837),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c3"),
  "department": "Physics",
  "email": "andersoe@umbc.edu",
  "firstName": "Eric",
  "fullName": "Eric Anderson",
  "lastName": "Anderson",
  "photoUrl": "https:\/\/edupal.co\/images\/EricAnderson.jpg",
  "refId": NumberLong(838),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c4"),
  "department": "Physics",
  "email": "lili@umbc.edu",
  "firstName": "Lili",
  "fullName": "Lili Cui",
  "lastName": "Cui",
  "photoUrl": "https:\/\/edupal.co\/images\/LiliCui.jpg",
  "refId": NumberLong(839),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c5"),
  "department": "Physics",
  "email": "jfranson@umbc.edu",
  "firstName": "James",
  "fullName": "James Franson",
  "lastName": "Franson",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesFranson.jpg",
  "refId": NumberLong(840),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c6"),
  "department": "Physics",
  "email": "georgano@umbc.edu",
  "firstName": "Markos",
  "fullName": "Markos Georganopoulos",
  "lastName": "Georganopoulos",
  "photoUrl": "https:\/\/edupal.co\/images\/MarkosGeorganopoulos.jpg",
  "refId": NumberLong(841),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c7"),
  "department": "Physics",
  "email": "ian.george@umbc.edu",
  "firstName": "Ian",
  "fullName": "Ian George",
  "lastName": "George",
  "photoUrl": "https:\/\/edupal.co\/images\/IanGeorge.jpg",
  "refId": NumberLong(842),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c8"),
  "department": "Physics",
  "email": "gougousi@umbc.edu",
  "firstName": "Theodosia",
  "fullName": "Theodosia Gougousi",
  "lastName": "Gougousi",
  "photoUrl": "https:\/\/edupal.co\/images\/TheodosiaGougousi.jpg",
  "refId": NumberLong(843),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005c9"),
  "department": "Physics",
  "email": "hayden@umbc.edu",
  "firstName": "Mike",
  "fullName": "Mike Hayden",
  "lastName": "Hayden",
  "photoUrl": "https:\/\/edupal.co\/images\/MikeHayden.jpg",
  "refId": NumberLong(844),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ca"),
  "department": "Physics",
  "email": "henrikse@umbc.edu",
  "firstName": "Mark",
  "fullName": "Mark Henriksen",
  "lastName": "Henriksen",
  "photoUrl": "https:\/\/edupal.co\/images\/MarkHenriksen.jpg",
  "refId": NumberLong(845),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005cb"),
  "department": "Physics",
  "email": "kramer@umbc.edu",
  "firstName": "Ivan",
  "fullName": "Ivan Kramer",
  "lastName": "Kramer",
  "photoUrl": "https:\/\/edupal.co\/images\/IvanKramer.jpg",
  "refId": NumberLong(846),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005cc"),
  "department": "Physics",
  "email": "martins@umbc.edu",
  "firstName": "Vanderlei",
  "fullName": "Vanderlei Martins",
  "lastName": "Martins",
  "photoUrl": "https:\/\/edupal.co\/images\/VanderleiMartins.jpg",
  "refId": NumberLong(847),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005cd"),
  "department": "Physics",
  "email": "mpelton@umbc.edu",
  "firstName": "Matthew",
  "fullName": "Matthew Pelton",
  "lastName": "Pelton",
  "photoUrl": "https:\/\/edupal.co\/images\/MatthewPelton.jpg",
  "refId": NumberLong(848),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005ce"),
  "department": "Physics",
  "email": "shih@umbc.edu",
  "firstName": "Yan-Hua",
  "fullName": "Yan-Hua Shih",
  "lastName": "Shih",
  "photoUrl": "https:\/\/edupal.co\/images\/Yan-HuaShih.jpg",
  "refId": NumberLong(849),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005cf"),
  "department": "Physics",
  "email": "sparling@umbc.edu",
  "firstName": "Lynn",
  "fullName": "Lynn Sparling",
  "lastName": "Sparling",
  "photoUrl": "https:\/\/edupal.co\/images\/LynnSparling.jpg",
  "refId": NumberLong(850),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005d0"),
  "department": "Physics",
  "email": "strow@umbc.edu",
  "firstName": "L",
  "fullName": "L Strow",
  "lastName": "Strow",
  "photoUrl": "https:\/\/edupal.co\/images\/LStrow.jpg",
  "refId": NumberLong(851),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005d1"),
  "department": "Physics",
  "email": "takacs@umbc.edu",
  "firstName": "Laszlo",
  "fullName": "Laszlo Takacs",
  "lastName": "Takacs",
  "photoUrl": "https:\/\/edupal.co\/images\/LaszloTakacs.jpg",
  "refId": NumberLong(852),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9475975ab331537005d2"),
  "department": "Physics",
  "email": "tjturner@umbc.edu",
  "firstName": "Jane",
  "fullName": "Jane Turner",
  "lastName": "Turner",
  "photoUrl": "https:\/\/edupal.co\/images\/JaneTurner.jpg",
  "refId": NumberLong(853),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d3"),
  "department": "Physics",
  "email": "Dr.Worchesky@umbc.edu",
  "firstName": "Terrance",
  "fullName": "Terrance Worchesky",
  "lastName": "Worchesky",
  "photoUrl": "https:\/\/edupal.co\/images\/TerranceWorchesky.jpg",
  "refId": NumberLong(854),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d4"),
  "department": "Physics",
  "email": "zhibo.zhang@umbc.edu",
  "firstName": "Zhibo",
  "fullName": "Zhibo Zhang",
  "lastName": "Zhang",
  "photoUrl": "https:\/\/edupal.co\/images\/ZhiboZhang.jpg",
  "refId": NumberLong(855),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d5"),
  "department": "Political Science",
  "email": "mcroatti@umbc.edu",
  "firstName": "Mark",
  "fullName": "Mark Croatti",
  "lastName": "Croatti",
  "photoUrl": "https:\/\/edupal.co\/images\/MarkCroatti.jpg",
  "refId": NumberLong(856),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d6"),
  "department": "Political Science",
  "email": "davisj@umbc.edu",
  "firstName": "Jeffrey",
  "fullName": "Jeffrey Davis",
  "lastName": "Davis",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffreyDavis.jpg",
  "refId": NumberLong(857),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d7"),
  "department": "Political Science",
  "email": "katdav@umbc.edu",
  "firstName": "Katherine",
  "fullName": "Katherine Davis",
  "lastName": "Davis",
  "photoUrl": "https:\/\/edupal.co\/images\/KatherineDavis.jpg",
  "refId": NumberLong(858),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d8"),
  "department": "Political Science",
  "email": "forestie@umbc.edu",
  "firstName": "Carolyn",
  "fullName": "Carolyn Forestiere",
  "lastName": "Forestiere",
  "photoUrl": "https:\/\/edupal.co\/images\/Carolyn Forestiere.jpg",
  "refId": NumberLong(859),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005d9"),
  "department": "Political Science",
  "email": "bgrodsky@umbc.edu",
  "firstName": "Brian",
  "fullName": "Brian Grodsky",
  "lastName": "Grodsky",
  "photoUrl": "https:\/\/edupal.co\/images\/BrianGrodsky.jpg",
  "refId": NumberLong(860),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005da"),
  "department": "Political Science",
  "email": "dhagerty@umbc.edu",
  "firstName": "Devin",
  "fullName": "Devin Hagerty",
  "lastName": "Hagerty",
  "photoUrl": "https:\/\/edupal.co\/images\/DevinHagerty.jpg",
  "refId": NumberLong(861),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005db"),
  "department": "Political Science",
  "email": "hinkle@umbc.edu",
  "firstName": "Rachael",
  "fullName": "Rachael Hinkle",
  "lastName": "Hinkle",
  "photoUrl": "https:\/\/edupal.co\/images\/RachaelHinkle.jpg",
  "refId": NumberLong(862),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005dc"),
  "department": "Political Science",
  "email": "hody@umbc.edu",
  "firstName": "Cynthia",
  "fullName": "Cynthia Hody",
  "lastName": "Hody",
  "photoUrl": "https:\/\/edupal.co\/images\/CynthiaHody.jpg",
  "refId": NumberLong(863),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005dd"),
  "department": "Political Science",
  "email": "lhussey@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Hussey",
  "lastName": "Hussey",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraHussey.jpg",
  "refId": NumberLong(864),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005de"),
  "department": "Political Science",
  "email": "danjawor@umbc.edu",
  "firstName": "Daniel",
  "fullName": "Daniel Jawor",
  "lastName": "Jawor",
  "photoUrl": "https:\/\/edupal.co\/images\/DanielJawor.jpg",
  "refId": NumberLong(865),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005df"),
  "department": "Political Science",
  "email": "ajohnson@umbc.edu",
  "firstName": "Arthur",
  "fullName": "Arthur Johnson",
  "lastName": "Johnson",
  "photoUrl": "https:\/\/edupal.co\/images\/ArthurJohnson.jpg",
  "refId": NumberLong(866),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e0"),
  "department": "Political Science",
  "email": "meirkatz@umbc.edu",
  "firstName": "Meir",
  "fullName": "Meir Katz",
  "lastName": "Katz",
  "photoUrl": "https:\/\/edupal.co\/images\/MeirKatz.jpg",
  "refId": NumberLong(867),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e1"),
  "department": "Political Science",
  "email": "mkobren@umbc.edu",
  "firstName": "Martin",
  "fullName": "Martin Kobren",
  "lastName": "Kobren",
  "photoUrl": "https:\/\/edupal.co\/images\/MartinKobren.jpg",
  "refId": NumberLong(868),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e2"),
  "department": "Political Science",
  "email": "meyers@umbc.edu",
  "firstName": "Roy",
  "fullName": "Roy Meyers",
  "lastName": "Meyers",
  "photoUrl": "https:\/\/edupal.co\/images\/RoyMeyers.jpg",
  "refId": NumberLong(869),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e3"),
  "department": "Political Science",
  "email": "kxmiller@umbc.edu",
  "firstName": "Kerwin",
  "fullName": "Kerwin Miller",
  "lastName": "Miller",
  "photoUrl": "https:\/\/edupal.co\/images\/KerwinMiller.jpg",
  "refId": NumberLong(870),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e4"),
  "department": "Political Science",
  "email": "shikha1@umbc.edu",
  "firstName": "Shikha",
  "fullName": "Shikha Parikha",
  "lastName": "Parikha",
  "photoUrl": "https:\/\/edupal.co\/images\/ShikhaParikha.jpg",
  "refId": NumberLong(871),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e5"),
  "department": "Political Science",
  "email": "sprucka@umbc.edu",
  "firstName": "Susannah",
  "fullName": "Susannah Prucka",
  "lastName": "Prucka",
  "photoUrl": "https:\/\/edupal.co\/images\/SusannahPrucka.jpg",
  "refId": NumberLong(872),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e6"),
  "department": "Political Science",
  "email": "schaller@umbc.edu",
  "firstName": "Tom",
  "fullName": "Tom Schaller",
  "lastName": "Schaller",
  "photoUrl": "https:\/\/edupal.co\/images\/TomSchaller.jpg",
  "refId": NumberLong(873),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e7"),
  "department": "Political Science",
  "email": "bstarkey@umbc.edu",
  "firstName": "Brigid",
  "fullName": "Brigid Starkey",
  "lastName": "Starkey",
  "photoUrl": "https:\/\/edupal.co\/images\/BrigidStarkey.jpg",
  "refId": NumberLong(874),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e8"),
  "department": "Political Science",
  "email": "lvetter@umbc.edu",
  "firstName": "Lisa",
  "fullName": "Lisa Vetter",
  "lastName": "Vetter",
  "photoUrl": "https:\/\/edupal.co\/images\/LisaVetter.jpg",
  "refId": NumberLong(875),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005e9"),
  "department": "Psychology",
  "email": "randerso@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Anderson",
  "lastName": "Anderson",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertAnderson.jpg",
  "refId": NumberLong(876),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005ea"),
  "department": "Psychology",
  "email": "baker@umbc.edu",
  "firstName": "Linda",
  "fullName": "Linda Baker",
  "lastName": "Baker",
  "photoUrl": "https:\/\/edupal.co\/images\/LindaBaker.jpg",
  "refId": NumberLong(877),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005eb"),
  "department": "Psychology",
  "email": "rbarry@umbc.edu",
  "firstName": "Robin",
  "fullName": "Robin Barry",
  "lastName": "Barry",
  "photoUrl": "https:\/\/edupal.co\/images\/RobinBarry.jpg",
  "refId": NumberLong(878),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005ec"),
  "department": "Psychology",
  "email": "dlbeatty@umbc.edu",
  "firstName": "Danielle",
  "fullName": "Danielle Beatty",
  "lastName": "Beatty",
  "photoUrl": "https:\/\/edupal.co\/images\/DanielleBeatty.jpg",
  "refId": NumberLong(879),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005ed"),
  "department": "Psychology",
  "email": "bediako@umbc.edu",
  "firstName": "Shawn",
  "fullName": "Shawn Bediako",
  "lastName": "Bediako",
  "photoUrl": "https:\/\/edupal.co\/images\/ShawnBediako.jpg",
  "refId": NumberLong(880),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005ee"),
  "department": "Psychology",
  "email": "blass@umbc.edu",
  "firstName": "Thomas",
  "fullName": "Thomas Blass",
  "lastName": "Blass",
  "photoUrl": "https:\/\/edupal.co\/images\/ThomasBlass.jpg",
  "refId": NumberLong(881),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005ef"),
  "department": "Psychology",
  "email": "jborrero@umbc.edu",
  "firstName": "John",
  "fullName": "John Borrero",
  "lastName": "Borrero",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnBorrero.jpg",
  "refId": NumberLong(882),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f0"),
  "department": "Psychology",
  "email": "ccheah@umbc.edu",
  "firstName": "Charissa",
  "fullName": "Charissa Cheah",
  "lastName": "Cheah",
  "photoUrl": "https:\/\/edupal.co\/images\/CharissaCheah.jpg",
  "refId": NumberLong(884),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f1"),
  "department": "Psychology",
  "email": "dahlquis@umbc.edu",
  "firstName": "Lynnda",
  "fullName": "Lynnda Dahlquist",
  "lastName": "Dahlquist",
  "photoUrl": "https:\/\/edupal.co\/images\/LynndaDahlquist.jpg",
  "refId": NumberLong(885),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f2"),
  "department": "Psychology",
  "email": "defulio@umbc.edu",
  "firstName": "Anthony",
  "fullName": "Anthony DeFulio",
  "lastName": "DeFulio",
  "photoUrl": "https:\/\/edupal.co\/images\/AnthonyDeFulio.jpg",
  "refId": NumberLong(886),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f3"),
  "department": "Psychology",
  "email": "ideleon@umbc.edu",
  "firstName": "Iser",
  "fullName": "Iser Deleon",
  "lastName": "Deleon",
  "photoUrl": "https:\/\/edupal.co\/images\/IserDeleon.jpg",
  "refId": NumberLong(887),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f4"),
  "department": "Psychology",
  "email": "diclemen@umbc.edu",
  "firstName": "Carlo",
  "fullName": "Carlo Diclemente",
  "lastName": "Diclemente",
  "photoUrl": "https:\/\/edupal.co\/images\/CarloDiclemente.jpg",
  "refId": NumberLong(888),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f5"),
  "department": "Psychology",
  "email": "jmdonald@umbc.edu",
  "firstName": "Jeanne",
  "fullName": "Jeanne Donaldson",
  "lastName": "Donaldson",
  "photoUrl": "https:\/\/edupal.co\/images\/JeanneDonaldson.jpg",
  "refId": NumberLong(889),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f6"),
  "department": "Psychology",
  "email": "nmeq@umbc.edu",
  "firstName": "Nicole",
  "fullName": "Nicole Else-Quest",
  "lastName": "Else-Quest",
  "photoUrl": "https:\/\/edupal.co\/images\/NicoleElse-Quest.jpg",
  "refId": NumberLong(890),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f7"),
  "department": "Psychology",
  "email": "warwick@umbc.edu",
  "firstName": "Zoe",
  "fullName": "Zoe Forsyth",
  "lastName": "Forsyth",
  "photoUrl": "https:\/\/edupal.co\/images\/ZoeForsyth.jpg",
  "refId": NumberLong(891),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f8"),
  "department": "Psychology",
  "email": "ajgarrett@umbc.edu",
  "firstName": "Adia",
  "fullName": "Adia Garrett",
  "lastName": "Garrett",
  "photoUrl": "https:\/\/edupal.co\/images\/AdiaGarrett.jpg",
  "refId": NumberLong(892),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005f9"),
  "department": "Psychology",
  "email": "kglyshaw@umbc.edu",
  "firstName": "Kathy",
  "fullName": "Kathy Glyshaw",
  "lastName": "Glyshaw",
  "photoUrl": "https:\/\/edupal.co\/images\/KathyGlyshaw.jpg",
  "refId": NumberLong(893),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005fa"),
  "department": "Psychology",
  "email": "Katenkamp@umbc.edu",
  "firstName": "Angela",
  "fullName": "Angela Katenkamp",
  "lastName": "Katenkamp",
  "photoUrl": "https:\/\/edupal.co\/images\/AngelaKatenkamp.jpg",
  "refId": NumberLong(894),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005fb"),
  "department": "Psychology",
  "email": "ekline1@umbc.edu",
  "firstName": "Emily",
  "fullName": "Emily Kline",
  "lastName": "Kline",
  "photoUrl": "https:\/\/edupal.co\/images\/EmilyKline.jpg",
  "refId": NumberLong(895),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005fc"),
  "department": "Psychology",
  "email": "dknigh1@umbc.edu",
  "firstName": "Donald",
  "fullName": "Donald Knight",
  "lastName": "Knight",
  "photoUrl": "https:\/\/edupal.co\/images\/DonaldKnight.jpg",
  "refId": NumberLong(896),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005fd"),
  "department": "Psychology",
  "email": "maton@umbc.edu",
  "firstName": "Kenneth",
  "fullName": "Kenneth Maton",
  "lastName": "Maton",
  "photoUrl": "https:\/\/edupal.co\/images\/KennethMaton.jpg",
  "refId": NumberLong(898),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005fe"),
  "department": "Psychology",
  "email": "chmurphy@umbc.edu",
  "firstName": "Christopher",
  "fullName": "Christopher Murphy",
  "lastName": "Murphy",
  "photoUrl": "https:\/\/edupal.co\/images\/ChristopherMurphy.jpg",
  "refId": NumberLong(899),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab331537005ff"),
  "department": "Psychology",
  "email": "jamurphy@umbc.edu",
  "firstName": "Julie",
  "fullName": "Julie Murphy",
  "lastName": "Murphy",
  "photoUrl": "https:\/\/edupal.co\/images\/JulieMurphy.jpg",
  "refId": NumberLong(900),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700600"),
  "department": "Psychology",
  "email": "pnguy1@umbc.edu",
  "firstName": "Phuoc",
  "fullName": "Phuoc Nguyen",
  "lastName": "Nguyen",
  "photoUrl": "https:\/\/edupal.co\/images\/PhuocNguyen.jpg",
  "refId": NumberLong(901),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700601"),
  "department": "Psychology",
  "email": "eobrien@umbc.edu",
  "firstName": "Eileen",
  "fullName": "Eileen O'Brien",
  "lastName": "O'Brien",
  "photoUrl": "https:\/\/edupal.co\/images\/EileenOBrien.jpg",
  "refId": NumberLong(902),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700602"),
  "department": "Psychology",
  "email": "dao@umbc.edu",
  "firstName": "David",
  "fullName": "David O'Connor",
  "lastName": "O'Connor",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidO'Connor.jpg",
  "refId": NumberLong(903),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700603"),
  "department": "Psychology",
  "email": "Steve.Pitts@umbc.edu",
  "firstName": "Steve",
  "fullName": "Steve Pitts",
  "lastName": "Pitts",
  "photoUrl": "https:\/\/edupal.co\/images\/StevePitts.jpg",
  "refId": NumberLong(904),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700604"),
  "department": "Psychology",
  "email": "resta@umbc.edu",
  "firstName": "S",
  "fullName": "S Resta",
  "lastName": "Resta",
  "photoUrl": "https:\/\/edupal.co\/images\/SResta.jpg",
  "refId": NumberLong(905),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700605"),
  "department": "Psychology",
  "email": "lascalet@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Scaletti",
  "lastName": "Scaletti",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraScaletti.jpg",
  "refId": NumberLong(906),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700606"),
  "department": "Psychology",
  "email": "jscheib1@umbc.edu",
  "firstName": "Jill",
  "fullName": "Jill Scheibler",
  "lastName": "Scheibler",
  "photoUrl": "https:\/\/edupal.co\/images\/JillScheibler.jpg",
  "refId": NumberLong(907),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700607"),
  "department": "Psychology",
  "email": "darian@umbc.edu",
  "firstName": "Jason",
  "fullName": "Jason Schiffman",
  "lastName": "Schiffman",
  "photoUrl": "https:\/\/edupal.co\/images\/JasonSchiffman.jpg",
  "refId": NumberLong(908),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700608"),
  "department": "Psychology",
  "email": "dschultz@umbc.edu",
  "firstName": "David",
  "fullName": "David Schultz",
  "lastName": "Schultz",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidSchultz.jpg",
  "refId": NumberLong(909),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700609"),
  "department": "Psychology",
  "email": "sos@umbc.edu",
  "firstName": "Sigurdur",
  "fullName": "Sigurdur Sigurdsson",
  "lastName": "Sigurdsson",
  "photoUrl": "https:\/\/edupal.co\/images\/SigurdurSigurdsson.jpg",
  "refId": NumberLong(910),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370060a"),
  "department": "Psychology",
  "email": "tsimpson@umbc.edu",
  "firstName": "Tara",
  "fullName": "Tara Simpson",
  "lastName": "Simpson",
  "photoUrl": "https:\/\/edupal.co\/images\/TaraSimpson.jpg",
  "refId": NumberLong(911),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370060b"),
  "department": "Psychology",
  "email": "lstaplet@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Stapleton",
  "lastName": "Stapleton",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraStapleton.jpg",
  "refId": NumberLong(912),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370060c"),
  "department": "Psychology",
  "email": "ssynow1@umbc.edu",
  "firstName": "Stephen",
  "fullName": "Stephen Synowski",
  "lastName": "Synowski",
  "photoUrl": "https:\/\/edupal.co\/images\/StephenSynowski.jpg",
  "refId": NumberLong(913),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370060d"),
  "department": "Psychology",
  "email": "waldstei@umbc.edu",
  "firstName": "Shari",
  "fullName": "Shari Waldstein",
  "lastName": "Waldstein",
  "photoUrl": "https:\/\/edupal.co\/images\/ShariWaldstein.jpg",
  "refId": NumberLong(914),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370060e"),
  "department": "Psychology",
  "email": "kimberly.warren@umbc.edu",
  "firstName": "Kimberly",
  "fullName": "Kimberly Warren",
  "lastName": "Warren",
  "photoUrl": "https:\/\/edupal.co\/images\/KimberlyWarren.jpg",
  "refId": NumberLong(915),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370060f"),
  "department": "Psychology",
  "email": "kwatkin1@umbc.edu",
  "firstName": "Karen",
  "fullName": "Karen Watkins-Lewis",
  "lastName": "Watkins-Lewis",
  "photoUrl": "https:\/\/edupal.co\/images\/KarenWatkins-Lewis.jpg",
  "refId": NumberLong(916),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700610"),
  "department": "Public Policy",
  "email": "brennan@umbc.edu",
  "firstName": "Tim",
  "fullName": "Tim Brennan",
  "lastName": "Brennan",
  "photoUrl": "https:\/\/edupal.co\/images\/TimBrennan.jpg",
  "refId": NumberLong(917),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700611"),
  "department": "Public Policy",
  "email": "akirk@umbc.edu",
  "firstName": "Adele",
  "fullName": "Adele Kirk",
  "lastName": "Kirk",
  "photoUrl": "https:\/\/edupal.co\/images\/AdeleKirk.jpg",
  "refId": NumberLong(918),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700612"),
  "department": "Public Policy",
  "email": "mandell@umbc.edu",
  "firstName": "Marv",
  "fullName": "Marv Mandell",
  "lastName": "Mandell",
  "photoUrl": "https:\/\/edupal.co\/images\/MarvMandell.jpg",
  "refId": NumberLong(919),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700613"),
  "department": "Public Policy",
  "email": "marcotte@umbc.edu",
  "firstName": "Dave",
  "fullName": "Dave Marcotte",
  "lastName": "Marcotte",
  "photoUrl": "https:\/\/edupal.co\/images\/DaveMarcotte.jpg",
  "refId": NumberLong(920),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700614"),
  "department": "Public Policy",
  "email": "nanmille@umbc.edu",
  "firstName": "Nancy",
  "fullName": "Nancy Miller",
  "lastName": "Miller",
  "photoUrl": "https:\/\/edupal.co\/images\/NancyMiller.jpg",
  "refId": NumberLong(921),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700615"),
  "department": "Public Policy",
  "email": "rmutte1@umbc.edu",
  "firstName": "Ryan",
  "fullName": "Ryan Mutter",
  "lastName": "Mutter",
  "photoUrl": "https:\/\/edupal.co\/images\/RyanMutter.jpg",
  "refId": NumberLong(922),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700616"),
  "department": "Public Policy",
  "email": "norris@umbc.edu",
  "firstName": "Donald",
  "fullName": "Donald Norris",
  "lastName": "Norris",
  "photoUrl": "https:\/\/edupal.co\/images\/DonaldNorris.jpg",
  "refId": NumberLong(923),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700617"),
  "department": "Public Policy",
  "email": "salkever@umbc.edu",
  "firstName": "David",
  "fullName": "David Salkever",
  "lastName": "Salkever",
  "photoUrl": "https:\/\/edupal.co\/images\/DavidSalkever.jpg",
  "refId": NumberLong(924),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700618"),
  "department": "Public Policy",
  "email": "zeem@umbc.edu",
  "firstName": "Eric",
  "fullName": "Eric Zeemering",
  "lastName": "Zeemering",
  "photoUrl": "https:\/\/edupal.co\/images\/EricZeemering.jpg",
  "refId": NumberLong(925),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab33153700619"),
  "department": "Public Policy",
  "email": "jrs@umbc.edu",
  "firstName": "John",
  "fullName": "John Short",
  "lastName": "Short",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnShort.jpg",
  "refId": NumberLong(926),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370061a"),
  "department": "Social Work",
  "email": "bembry@umbc.edu",
  "firstName": "James",
  "fullName": "James Bembry",
  "lastName": "Bembry",
  "photoUrl": "https:\/\/edupal.co\/images\/JamesBembry.jpg",
  "refId": NumberLong(927),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370061b"),
  "department": "Social Work",
  "email": "echak@umbc.edu",
  "firstName": "Elisabeth",
  "fullName": "Elisabeth Chakmakian",
  "lastName": "Chakmakian",
  "photoUrl": "https:\/\/edupal.co\/images\/ElisabethChakmakian.jpg",
  "refId": NumberLong(928),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370061c"),
  "department": "Social Work",
  "email": "Demidenko@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Demidenko",
  "lastName": "Demidenko",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelDemidenko.jpg",
  "refId": NumberLong(929),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370061d"),
  "department": "Social Work",
  "email": "dvorakm@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Dvorak",
  "lastName": "Dvorak",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelDvorak.jpg",
  "refId": NumberLong(930),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9476975ab3315370061e"),
  "department": "Social Work",
  "email": "jeharris@umbc.edu",
  "firstName": "Jesse",
  "fullName": "Jesse Harris",
  "lastName": "Harris",
  "photoUrl": "https:\/\/edupal.co\/images\/JesseHarris.jpg",
  "refId": NumberLong(931),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370061f"),
  "department": "Social Work",
  "email": "jani@umbc.edu",
  "firstName": "Jayshree",
  "fullName": "Jayshree Jani",
  "lastName": "Jani",
  "photoUrl": "https:\/\/edupal.co\/images\/JayshreeJani.jpg",
  "refId": NumberLong(932),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700620"),
  "department": "Social Work",
  "email": "knight@umbc.edu",
  "firstName": "Carolyn",
  "fullName": "Carolyn Knight",
  "lastName": "Knight",
  "photoUrl": "https:\/\/edupal.co\/images\/CarolynKnight.jpg",
  "refId": NumberLong(933),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700621"),
  "department": "Social Work",
  "email": "leiser@umbc.edu",
  "firstName": "Katie",
  "fullName": "Katie Leiser",
  "lastName": "Leiser",
  "photoUrl": "https:\/\/edupal.co\/images\/KatieLeiser.jpg",
  "refId": NumberLong(934),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700622"),
  "department": "Social Work",
  "email": "msmell@umbc.edu",
  "firstName": "Marcela",
  "fullName": "Marcela Mellinger",
  "lastName": "Mellinger",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcelaMellinger.jpg",
  "refId": NumberLong(935),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700623"),
  "department": "Social Work",
  "email": "kath@umbc.edu",
  "firstName": "Katie",
  "fullName": "Katie Morris",
  "lastName": "Morris",
  "photoUrl": "https:\/\/edupal.co\/images\/KatieMorris.jpg",
  "refId": NumberLong(936),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700624"),
  "department": "Social Work",
  "email": "jokund1@umbc.edu",
  "firstName": "Joshua",
  "fullName": "Joshua Okundaye",
  "lastName": "Okundaye",
  "photoUrl": "https:\/\/edupal.co\/images\/JoshuaOkundaye.jpg",
  "refId": NumberLong(937),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700625"),
  "department": "Social Work",
  "email": "sjrbing@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Bingham",
  "lastName": "Bingham",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanBingham.jpg",
  "refId": NumberLong(938),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700626"),
  "department": "Social Work",
  "email": "LTing@umbc.edu",
  "firstName": "Laura",
  "fullName": "Laura Ting",
  "lastName": "Ting",
  "photoUrl": "https:\/\/edupal.co\/images\/LauraTing.jpg",
  "refId": NumberLong(939),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700627"),
  "department": "Social Work",
  "email": "wiechelt@umbc.edu",
  "firstName": "Shelly",
  "fullName": "Shelly Wiechelt",
  "lastName": "Wiechelt",
  "photoUrl": "https:\/\/edupal.co\/images\/ShellyWiechelt.jpg",
  "refId": NumberLong(940),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700628"),
  "department": "Sociology and Anthropology",
  "email": "adler@umbc.edu",
  "firstName": "Marina",
  "fullName": "Marina Adler",
  "lastName": "Adler",
  "photoUrl": "https:\/\/edupal.co\/images\/MarinaAdler.jpg",
  "refId": NumberLong(941),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700629"),
  "department": "Sociology and Anthropology",
  "email": "sarah19@umbc.edu",
  "firstName": "Sarah",
  "fullName": "Sarah Archibald",
  "lastName": "Archibald",
  "photoUrl": "https:\/\/edupal.co\/images\/SarahArchibald.jpg",
  "refId": NumberLong(942),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370062a"),
  "department": "Sociology and Anthropology",
  "email": "rcanham@umbc.edu",
  "firstName": "Rhonda",
  "fullName": "Rhonda Canham",
  "lastName": "Canham",
  "photoUrl": "https:\/\/edupal.co\/images\/RhondaCanham.jpg",
  "refId": NumberLong(943),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370062b"),
  "department": "Sociology and Anthropology",
  "email": "bchapin@umbc.edu",
  "firstName": "Bambi",
  "fullName": "Bambi Chapin",
  "lastName": "Chapin",
  "photoUrl": "https:\/\/edupal.co\/images\/BambiChapin.jpg",
  "refId": NumberLong(944),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370062c"),
  "department": "Sociology and Anthropology",
  "email": "pcoakley@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Coakley",
  "lastName": "Coakley",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulCoakley.jpg",
  "refId": NumberLong(946),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370062d"),
  "department": "Sociology and Anthropology",
  "email": "cgossett@umbc.edu",
  "firstName": "Nicole",
  "fullName": "Nicole Cousin-Gossett",
  "lastName": "Cousin-Gossett",
  "photoUrl": "https:\/\/edupal.co\/images\/NicoleCousin-Gossett.jpg",
  "refId": NumberLong(947),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370062e"),
  "department": "Sociology and Anthropology",
  "email": "mcozar1@umbc.edu",
  "firstName": "Meryl",
  "fullName": "Meryl Damasiewicz",
  "lastName": "Damasiewicz",
  "photoUrl": "https:\/\/edupal.co\/images\/MerylDamasiewicz.jpg",
  "refId": NumberLong(948),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370062f"),
  "department": "Sociology and Anthropology",
  "email": "ddonahue@umbc.edu",
  "firstName": "Donald",
  "fullName": "Donald Donahue",
  "lastName": "Donahue",
  "photoUrl": "https:\/\/edupal.co\/images\/DonaldDonahue.jpg",
  "refId": NumberLong(949),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700630"),
  "department": "Sociology and Anthropology",
  "email": "donato@umbc.edu",
  "firstName": "Paul",
  "fullName": "Paul Donato",
  "lastName": "Donato",
  "photoUrl": "https:\/\/edupal.co\/images\/PaulDonato.jpg",
  "refId": NumberLong(950),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700631"),
  "department": "Sociology and Anthropology",
  "email": "eckert@umbc.edu",
  "firstName": "JKevin",
  "fullName": "JKevin Eckert",
  "lastName": "Eckert",
  "photoUrl": "https:\/\/edupal.co\/images\/JKevinEckert.jpg",
  "refId": NumberLong(951),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700632"),
  "department": "Sociology and Anthropology",
  "email": "akalfogl@umbc.edu",
  "firstName": "Andrea",
  "fullName": "Andrea Kalfoglou",
  "lastName": "Kalfoglou",
  "photoUrl": "https:\/\/edupal.co\/images\/AndreaKalfoglou.jpg",
  "refId": NumberLong(953),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700633"),
  "department": "Sociology and Anthropology",
  "email": "kkeenan@umbc.edu",
  "firstName": "Kip",
  "fullName": "Kip Keenan",
  "lastName": "Keenan",
  "photoUrl": "https:\/\/edupal.co\/images\/KipKeenan.jpg",
  "refId": NumberLong(954),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700634"),
  "department": "Sociology and Anthropology",
  "email": "grieves1@umbc.edu",
  "firstName": "Margaret",
  "fullName": "Margaret Knisley",
  "lastName": "Knisley",
  "photoUrl": "https:\/\/edupal.co\/images\/MargaretKnisley.jpg",
  "refId": NumberLong(955),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700635"),
  "department": "Sociology and Anthropology",
  "email": "sethm@umbc.edu",
  "firstName": "Seth",
  "fullName": "Seth Messinger",
  "lastName": "Messinger",
  "photoUrl": "https:\/\/edupal.co\/images\/SethMessinger.jpg",
  "refId": NumberLong(957),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700636"),
  "department": "Sociology and Anthropology",
  "email": "mnetzer@umbc.edu",
  "firstName": "Michael",
  "fullName": "Michael Netzer",
  "lastName": "Netzer",
  "photoUrl": "https:\/\/edupal.co\/images\/MichaelNetzer.jpg",
  "refId": NumberLong(959),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700637"),
  "department": "Sociology and Anthropology",
  "email": "rrubinst@umbc.edu",
  "firstName": "Robert",
  "fullName": "Robert Rubinstein",
  "lastName": "Rubinstein",
  "photoUrl": "https:\/\/edupal.co\/images\/RobertRubinstein.jpg",
  "refId": NumberLong(960),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700638"),
  "department": "Sociology and Anthropology",
  "email": "jschuma@umbc.edu",
  "firstName": "John",
  "fullName": "John Schumacher",
  "lastName": "Schumacher",
  "photoUrl": "https:\/\/edupal.co\/images\/JohnSchumacher.jpg",
  "refId": NumberLong(961),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700639"),
  "department": "Sociology and Anthropology",
  "email": "gseckin@umbc.edu",
  "firstName": "Gul",
  "fullName": "Gul Seckin",
  "lastName": "Seckin",
  "photoUrl": "https:\/\/edupal.co\/images\/GulSeckin.jpg",
  "refId": NumberLong(962),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370063a"),
  "department": "Sociology and Anthropology",
  "email": "asnyde4@umbc.edu",
  "firstName": "Annette",
  "fullName": "Annette Snyder",
  "lastName": "Snyder",
  "photoUrl": "https:\/\/edupal.co\/images\/AnnetteSnyder.jpg",
  "refId": NumberLong(963),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370063b"),
  "department": "Sociology and Anthropology",
  "email": "astanley@umbc.edu",
  "firstName": "Andre",
  "fullName": "Andre Stanley",
  "lastName": "Stanley",
  "photoUrl": "https:\/\/edupal.co\/images\/AndreStanley.jpg",
  "refId": NumberLong(964),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370063c"),
  "department": "Sociology and Anthropology",
  "email": "jtuer@umbc.edu",
  "firstName": "Jeffrey",
  "fullName": "Jeffrey Tuer",
  "lastName": "Tuer",
  "photoUrl": "https:\/\/edupal.co\/images\/JeffreyTuer.jpg",
  "refId": NumberLong(965),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370063d"),
  "department": "Sociology and Anthropology",
  "email": "kdemed1@umbc.edu",
  "firstName": "Kathryn",
  "fullName": "Kathryn de Medeiros",
  "lastName": "de Medeiros",
  "photoUrl": "https:\/\/edupal.co\/images\/Kathrynde Medeiros.jpg",
  "refId": NumberLong(966),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370063e"),
  "department": "Theatre",
  "email": "joyce@umbc.edu",
  "firstName": "Shelley",
  "fullName": "Shelley Joyce",
  "lastName": "Joyce",
  "photoUrl": "https:\/\/edupal.co\/images\/ShelleyJoyce.jpg",
  "refId": NumberLong(967),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab3315370063f"),
  "department": "Theatre",
  "email": "kreizenb@umbc.edu",
  "firstName": "Alan",
  "fullName": "Alan Kreizenbeck",
  "lastName": "Kreizenbeck",
  "photoUrl": "https:\/\/edupal.co\/images\/AlanKreizenbeck.jpg",
  "refId": NumberLong(968),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700640"),
  "department": "Theatre",
  "email": "ebmuson@umbc.edu",
  "firstName": "Eve",
  "fullName": "Eve Muson",
  "lastName": "Muson",
  "photoUrl": "https:\/\/edupal.co\/images\/EveMuson.jpg",
  "refId": NumberLong(970),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700641"),
  "department": "Theatre",
  "email": "salkind@umbc.edu",
  "firstName": "Wendy",
  "fullName": "Wendy Salkind",
  "lastName": "Salkind",
  "photoUrl": "https:\/\/edupal.co\/images\/WendySalkind.jpg",
  "refId": NumberLong(971),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700642"),
  "department": "Theatre",
  "email": "csearls@umbc.edu",
  "firstName": "Colette",
  "fullName": "Colette Searls",
  "lastName": "Searls",
  "photoUrl": "https:\/\/edupal.co\/images\/ColetteSearls.jpg",
  "refId": NumberLong(972),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fb9477975ab33153700643"),
  "department": "Theatre",
  "email": "jwatson@umbc.edu",
  "firstName": "JLynn",
  "fullName": "JLynn Watson",
  "lastName": "Watson",
  "photoUrl": "https:\/\/edupal.co\/images\/JLynnWatson.jpg",
  "refId": NumberLong(973),
  "version": NumberInt(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fba6603219e0ca15ceeb4d"),
  "department": "Chemistry and Biochemistry",
  "email": "carpent@umbc.edu",
  "firstName": "Tiffany",
  "fullName": "Tiffany Gierasch",
  "lastName": "Gierasch",
  "photoUrl": "https:\/\/edupal.co\/images\/TiffanyGierasch.jpg",
  "refId": NumberLong(974),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fbd2043219e0ca15ceeb4e"),
  "department": "Philosophy",
  "email": "eby@umbc.edu",
  "firstName": "Lloyd",
  "fullName": "LLoyd Eby",
  "lastName": "Eby",
  "photoUrl": "https:\/\/edupal.co\/images\/LloydEby.jpg",
  "refId": NumberLong(975),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fdfc043219e07946ceeb4d"),
  "department": "Information Systems",
  "email": "saulyn1@umbc.edu",
  "firstName": "Sidas",
  "fullName": "Sidas Saulynas",
  "lastName": "Saulynas",
  "photoUrl": "https:\/\/edupal.co\/images\/SidasSaulynas.jpg",
  "refId": NumberLong(976),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fdfcfe3219e0982eceeb4d"),
  "department": "Information Systems",
  "email": "tmahoney@btlg.us",
  "firstName": "Tora",
  "fullName": "Tora Mahoney",
  "lastName": "Mahoney",
  "photoUrl": "https:\/\/edupal.co\/images\/ToraMahoney.jpg",
  "refId": NumberLong(977),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fdfdbd3219e07946ceeb4e"),
  "department": "Interdisciplinary Studies",
  "email": "ebrown@umbc.edu",
  "firstName": "Eric",
  "fullName": "Eric Brown",
  "lastName": "Brown",
  "photoUrl": "https:\/\/edupal.co\/images\/EricBrown.jpg",
  "refId": NumberLong(978),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fe6f603219e0982eceeb4e"),
  "department": "Mathematics and Statistics",
  "email": "bdean@umbc.edu",
  "firstName": "Brian",
  "fullName": "Brian Dean",
  "lastName": "Dean",
  "photoUrl": "https:\/\/edupal.co\/images\/BrianDean.jpg",
  "refId": NumberLong(979),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fe743b3219e0054dceeb4d"),
  "department": "Chemistry and Biochemistry",
  "email": "mptaszek@umbc.edu",
  "firstName": "Marcin",
  "fullName": "Marcin Ptaszek",
  "lastName": "Ptaszek",
  "photoUrl": "https:\/\/edupal.co\/images\/MarcinPtaszek.jpg",
  "refId": NumberLong(980),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53fe763d3219e0054dceeb4e"),
  "department": "Mechanical Engineering",
  "email": "roma@umbc.edu",
  "firstName": "Ronghui",
  "fullName": "Ronghui Ma",
  "lastName": "Ma",
  "photoUrl": "https:\/\/edupal.co\/images\/RonghuiMa.jpg",
  "refId": NumberLong(981),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("53ff6c763219e0982eceeb51"),
  "department": "Biological Sciences",
  "email": "egreen@umbc.edu",
  "firstName": "Erin",
  "fullName": "Erin Green",
  "lastName": "Green",
  "photoUrl": "https:\/\/edupal.co\/images\/ErinGreen.jpg",
  "refId": NumberLong(982),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("5400bef73219e0982eceeb55"),
  "department": "Computer Science",
  "email": "pedram@umbc.edu",
  "firstName": "Pedram",
  "fullName": "Pedram Sadeghian",
  "lastName": "Sadeghian",
  "photoUrl": "https:\/\/edupal.co\/images\/PedramSadeghian.jpg",
  "refId": NumberLong(983),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("5401e4fe3219e0bb07ceeb50"),
  "department": "Learning Resource Center",
  "email": "fallin@umbc.edu",
  "firstName": "Sharon",
  "fullName": "Sharon Fallin",
  "lastName": "Fallin",
  "photoUrl": "https:\/\/edupal.co\/images\/SharonFallin.jpg",
  "refId": NumberLong(984),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540206a83219e0310fceeb4e"),
  "department": "Biological Sciences",
  "email": "efeeser@umbc.edu",
  "firstName": "Elizabeth",
  "fullName": "Elizabeth Feeser",
  "lastName": "Feeser",
  "photoUrl": "https:\/\/edupal.co\/images\/ElizabethFeeser.jpg",
  "refId": NumberLong(985),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("5402abd03219e0542cea6884"),
  "department": "English",
  "email": "thor@umbc.edu",
  "firstName": "Thorian",
  "fullName": "Thorian Harris",
  "lastName": "Harris",
  "photoUrl": "https:\/\/edupal.co\/images\/ThorianHarris.jpg",
  "refId": NumberLong(986),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("54038ddf3219e0dc3aea6883"),
  "department": "Biological Sciences",
  "email": "aschech@umbc.edu",
  "firstName": "Amanda",
  "fullName": "Amanda Schech",
  "lastName": "Schech",
  "photoUrl": "https:\/\/edupal.co\/images\/AmandaSchech.jpg",
  "refId": NumberLong(987),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("54046f823219e09438ea6886"),
  "department": "Mathematics",
  "email": "abiswas@umbc.edu",
  "firstName": "Animikh",
  "fullName": "Animikh Biswas",
  "lastName": "Biswas",
  "photoUrl": "https:\/\/edupal.co\/images\/AnimikhBiswas.jpg",
  "refId": NumberLong(988),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540a82173219e08a16ea6885"),
  "department": "Mathematics",
  "email": "sriley4@umbc.edu",
  "firstName": "Sam",
  "fullName": "Sam Riley",
  "lastName": "Riley",
  "photoUrl": "https:\/\/edupal.co\/images\/SamRiley.jpg",
  "refId": NumberLong(989),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540b9c7f3219e08a16ea6889"),
  "department": "English",
  "email": "cvarlack@umbc.edu",
  "firstName": "Chris",
  "fullName": "Chris Varlack",
  "lastName": "Varlack",
  "photoUrl": "https:\/\/edupal.co\/images\/ChrisVarlack.jpg",
  "refId": NumberLong(989),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540e2f753219e05717a849b0"),
  "department": "Mathematics",
  "email": "tbudimir@umbc.edu",
  "firstName": "Tatiana",
  "fullName": "Tatiana Budimirovic",
  "lastName": "Budimirovic",
  "photoUrl": "https:\/\/edupal.co\/images\/TatianaBudimirovic.jpg",
  "refId": NumberLong(990),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540e34153219e0a012a849b2"),
  "department": "Learning Resources",
  "email": "crystal@umbc.edu",
  "firstName": "Crystal",
  "fullName": "Crystal Diaz",
  "lastName": "Diaz",
  "photoUrl": "https:\/\/edupal.co\/images\/CrystalDiaz.jpg",
  "refId": NumberLong(991),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540e3f003219e0a012a849b3"),
  "department": "Gender Women Studies",
  "email": "macmanus@umbc.edu",
  "firstName": "Viviana",
  "fullName": "Viviana MacManus",
  "lastName": "MacManus",
  "photoUrl": "https:\/\/edupal.co\/images\/VivianaMacManus.jpg",
  "refId": NumberLong(992),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("540f59c73219e05717a849b2"),
  "department": "Mathematics",
  "email": "jongraf1@umbc.edu",
  "firstName": "Jonathan",
  "fullName": "Jonathan Graf",
  "lastName": "Graf",
  "photoUrl": "https:\/\/edupal.co\/images\/JonathanGraf.jpg",
  "refId": NumberLong(993),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("541076ec3219e05717a849b4"),
  "department": "Retriever Learning Center",
  "email": "lrc_comments@umbc.edu",
  "firstName": "Retriever Learning",
  "fullName": "Retriever Learning Center",
  "lastName": "Center",
  "photoUrl": "https:\/\/edupal.co\/images\/umbc.jpg",
  "refId": NumberLong(994),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("541252713219e0e56aa849b0"),
  "department": "Information Systems",
  "email": "susan@umbc.edu",
  "firstName": "Susan",
  "fullName": "Susan Martin",
  "lastName": "Martin",
  "photoUrl": "https:\/\/edupal.co\/images\/SusanMartin.jpg",
  "refId": NumberLong(995),
  "version": NumberLong(0)
});
db.getCollection("instructor").insert({
  "_id": ObjectId("541798963219e018430cc196"),
  "department": "COEIT",
  "email": "eastephe@umbc.edu",
  "firstName": "Emily",
  "fullName": "Emily Stephens",
  "lastName": "Stephens",
  "photoUrl": "https:\/\/edupal.co\/images\/EmilyStephens.jpg",
  "refId": NumberLong(996),
  "version": NumberLong(0)
});
