export interface TarotCard {
  id: string;
  name: string;
  positive: string;
  negative: string;
}

export const tarotCards: TarotCard[] = [
  // Major Arcana
  {
    id: "fool",
    name: "_the_ FOOL",
    positive: "Langkah baru yang penuh keberanian dan kebebasan. Percayalah pada semesta dan mulailah perjalananmu tanpa rasa takut.",
    negative: "Kecerobohan atau keputusan yang terburu-buru. Waspadalah terhadap kepolosan yang membabi buta atau kurangnya persiapan."
  },
  {
    id: "magician",
    name: "_the_ MAGICIAN",
    positive: "Kekuatan kehendak, kreativitas, dan kemampuan untuk mewujudkan impian menjadi kenyataan melalui tindakan nyata.",
    negative: "Manipulasi, bakat yang terbuang sia-sia, atau niat tersembunyi yang dapat merugikan diri sendiri dan orang lain."
  },
  {
    id: "high_priestess",
    name: "_the_ HIGH PRIESTESS",
    positive: "Intuisi yang tajam, kebijaksanaan batin, dan misteri yang menanti untuk dipahami secara mendalam.",
    negative: "Mengabaikan suara hati, rahasia yang tersembunyi secara sengaja, atau kedangkalan dalam memandang kehidupan."
  },
  {
    id: "empress",
    name: "_the_ EMPRESS",
    positive: "Kelimpahan, kreativitas, keindahan alam, serta energi keibuan yang memelihara kehidupan.",
    negative: "Ketergantungan pada orang lain, hambatan kreatif, atau sikap posesif yang membatasi ruang gerak."
  },
  {
    id: "emperor",
    name: "_the_ EMPEROR",
    positive: "Struktur, kestabilan, otoritas yang adil, dan kepemimpinan yang kokoh dalam menata kehidupan.",
    negative: "Kendali yang berlebihan, kekakuan berpikir, atau tirani yang menindas kebebasan orang lain."
  },
  {
    id: "hierophant",
    name: "_the_ HIEROPHANT",
    positive: "Tradisi, pencarian spiritual, kebijaksanaan luhur, dan bimbingan dari guru atau nilai-nilai yang mapan.",
    negative: "Ketaatan buta pada aturan lama, dogma yang membelenggu, atau pemberontakan tanpa arah yang jelas."
  },
  {
    id: "lovers",
    name: "_the_ LOVERS",
    positive: "Harmoni, cinta yang mendalam, keselarasan hubungan, dan pilihan hidup yang selaras dengan keyakinan hati.",
    negative: "Ketidakselarasan hubungan, keputusan yang salah arah, atau konflik batin yang belum terselesaikan."
  },
  {
    id: "chariot",
    name: "_the_ CHARIOT",
    positive: "Kemenangan, tekad yang kuat, kendali diri, dan keberhasilan dalam mengatasi rintangan dengan fokus yang tajam.",
    negative: "Kehilangan arah, agresi yang tidak terkontrol, atau hambatan besar akibat kurangnya disiplin diri."
  },
  {
    id: "strength",
    name: "STRENGTH",
    positive: "Keberanian batin, kesabaran yang menaklukkan, serta kekuatan emosional yang melunakkan kekerasan.",
    negative: "Keraguan diri, kelemahan emosional, atau penyalahgunaan kekuatan fisik untuk memaksakan kehendak."
  },
  {
    id: "hermit",
    name: "_the_ HERMIT",
    positive: "Renungan sunyi, pencarian kebenaran ke dalam diri, dan bimbingan dari cahaya kebijaksanaan pribadi.",
    negative: "Keterasingan yang menyakitkan, penarikan diri yang berlebihan, atau penolakan untuk mendengar nasihat bijak."
  },
  {
    id: "wheel_fortune",
    name: "WHEEL _of_ FORTUNE",
    positive: "Perubahan nasib yang menguntungkan, keberuntungan, siklus hidup baru, dan takdir yang bergerak maju.",
    negative: "Nasib buruk, hambatan tak terduga, atau penolakan untuk menerima perubahan siklus hidup yang alami."
  },
  {
    id: "justice",
    name: "JUSTICE",
    positive: "Keadilan, kebenaran objektif, pertanggungjawaban hukum, dan keputusan yang adil bagi semua pihak.",
    negative: "Ketidakadilan, prasangka buruk, ketidakjujuran, atau keengganan untuk menghadapi konsekuensi perbuatan."
  },
  {
    id: "hanged_man",
    name: "_the_ HANGED MAN",
    positive: "Perspektif baru, penyerahan diri secara sadar, jeda untuk merenung, dan pengorbanan yang membawa hikmah.",
    negative: "Penundaan tanpa arti, kebuntuan hidup, atau keengganan untuk melepaskan ego demi kebaikan."
  },
  {
    id: "death",
    name: "DEATH",
    positive: "Akhir dari sebuah siklus tua yang membuka jalan bagi transformasi baru dan kelahiran kembali yang indah.",
    negative: "Ketakutan akan perubahan, keterikatan pada masa lalu yang telah mati, atau penolakan untuk merelakan."
  },
  {
    id: "temperance",
    name: "TEMPERANCE",
    positive: "Keseimbangan, harmoni emosi, moderasi, serta penyatuan berbagai elemen hidup secara selaras.",
    negative: "Ketidakseimbangan hidup, kelebihan yang merusak, atau konflik batin akibat kurangnya ketenangan."
  },
  {
    id: "devil",
    name: "_the_ DEVIL",
    positive: "Kesadaran akan keterikatan material, dorongan hasrat yang kuat, dan kesempatan untuk membebaskan diri.",
    negative: "Keterikatan yang merusak, kecanduan, diperbudak oleh materi, atau ketakutan yang membelenggu jiwa."
  },
  {
    id: "tower",
    name: "_the_ TOWER",
    positive: "Runtuhnya ilusi, pembebasan mendadak dari fondasi yang rapuh, dan kebenaran yang menyingkap tabir.",
    negative: "Ketakutan akan keruntuhan, bencana yang tak terhindarkan, atau rasa sakit akibat perubahan yang tiba-tiba."
  },
  {
    id: "star",
    name: "_the_ STAR",
    positive: "Harapan baru, kedamaian jiwa, inspirasi kreatif, dan penyembuhan luka masa lalu di bawah cahaya semesta.",
    negative: "Keputusasaan, hilangnya iman, hambatan kreativitas, atau kekecewaan mendalam pada impian."
  },
  {
    id: "moon",
    name: "_the_ MOON",
    positive: "Mimpi yang hidup, intuisi bawah sadar, dan perjalanan melintasi kegelapan menuju pemahaman diri.",
    negative: "Ketakutan yang tidak rasional, ilusi yang menyesatkan, kebingungan, atau kebohongan yang tersembunyi."
  },
  {
    id: "sun",
    name: "_the_ SUN",
    positive: "Kegembiraan murni, kesuksesan gemilang, vitalitas yang melimpah, dan kebenaran yang bersinar terang.",
    negative: "Kesombongan yang membutakan, optimisme yang berlebihan, atau kesuksesan yang tertunda sementara waktu."
  },
  {
    id: "judgement",
    name: "JUDGEMENT",
    positive: "Panggilan jiwa, kebangkitan batin, penebusan masa lalu, dan keputusan penting yang membebaskan langkah.",
    negative: "Keraguan diri untuk melangkah, penyesalan masa lalu yang menghantui, atau penolakan terhadap panggilan hidup."
  },
  {
    id: "world",
    name: "_the_ WORLD",
    positive: "Pencapaian sempurna, penyelesaian siklus dengan sukses, kebebasan sejati, dan penyatuan utuh dengan semesta.",
    negative: "Ketidaklengkapan tugas, kegagalan menyelesaikan siklus, atau hambatan dalam mencapai tujuan akhir."
  },

  // Wands (Tongkat)
  {
    id: "ace_wands",
    name: "ACE _of_ WANDS",
    positive: "Percikan inspirasi pertama, energi kreatif baru, dan keberanian untuk memulai proyek yang menantang.",
    negative: "Kekurangan energi, awal yang tertunda, atau ide-ide yang menguap begitu saja tanpa realisasi."
  },
  {
    id: "two_wands",
    name: "TWO _of_ WANDS",
    positive: "Perencanaan masa depan, visi jangka panjang, dan keberanian melangkah keluar dari zona nyaman.",
    negative: "Kurangnya perencanaan konkret, ketakutan akan hal yang tidak diketahui, atau keraguan untuk memilih jalan."
  },
  {
    id: "three_wands",
    name: "THREE _of_ WANDS",
    positive: "Perkembangan yang menjanjikan, ekspansi usaha, dan keyakinan melihat hasil dari keputusan masa lalu.",
    negative: "Kekecewaan pada hasil akhir, hambatan dalam perjalanan, atau ekspektasi yang terlalu terburu-buru."
  },
  {
    id: "four_wands",
    name: "FOUR _of_ WANDS",
    positive: "Perayaan hasil usaha, keharmonisan rumah tangga, kedamaian komunitas, dan rasa syukur atas pencapaian.",
    negative: "Ketidakstabilan dalam keluarga, perayaan yang tertunda, atau kurangnya rasa memiliki di dalam komunitas."
  },
  {
    id: "five_wands",
    name: "FIVE _of_ WANDS",
    positive: "Persaingan sehat yang memicu kreativitas, dinamika kelompok, dan tantangan yang mendewasakan.",
    negative: "Konflik yang tidak perlu, kekacauan komunikasi, atau kelelahan menghadapi pertengkaran kecil sehari-hari."
  },
  {
    id: "six_wands",
    name: "SIX _of_ WANDS",
    positive: "Penghargaan publik, keberhasilan yang diakui khalayak, rasa bangga, dan kemajuan yang mantap.",
    negative: "Kejatuhan dari kejayaan, kesombongan yang merusak reputasi, atau kurangnya apresiasi dari sekitar."
  },
  {
    id: "seven_wands",
    name: "SEVEN _of_ WANDS",
    positive: "Keberanian mempertahankan prinsip, keteguhan hati di tengah tekanan, dan pertahanan yang kuat.",
    negative: "Kewalahan menghadapi tantangan, menyerah pada tekanan luar, atau keras kepala yang merugikan."
  },
  {
    id: "eight_wands",
    name: "EIGHT _of_ WANDS",
    positive: "Pergerakan cepat, berita baik yang segera tiba, komunikasi lancar, dan momentum yang berpihak padamu.",
    negative: "Ketergesa-gesaan yang berujung salah langkah, hambatan komunikasi, atau penundaan yang menjengkelkan."
  },
  {
    id: "nine_wands",
    name: "NINE _of_ WANDS",
    positive: "Ketahanan di garis akhir, kewaspadaan yang bijak, dan kekuatan untuk bertahan sedikit lagi menuju tujuan.",
    negative: "Kelelahan mental yang ekstrem, sikap defensif yang berlebihan, atau paranoia terhadap kegagalan."
  },
  {
    id: "ten_wands",
    name: "TEN _of_ WANDS",
    positive: "Tanggung jawab besar yang segera selesai, perjuangan keras yang hampir mencapai garis akhir.",
    negative: "Beban kerja yang berlebihan, stres berat, atau keengganan untuk membagi tugas kepada orang lain."
  },
  {
    id: "page_wands",
    name: "PAGE _of_ WANDS",
    positive: "Jiwa petualang, rasa ingin tahu yang tinggi, dan antusiasme menerima berita atau peluang baru.",
    negative: "Kekanak-kanakan, antusiasme yang cepat padam, atau kecenderungan menyebarkan kabar angin tak pasti."
  },
  {
    id: "knight_wands",
    name: "KNIGHT _of_ WANDS",
    positive: "Keberanian membara, gairah bertualang, tindakan cepat, dan pesona kepemimpinan yang karismatik.",
    negative: "Sikap sembrono, kemarahan yang meluap-luap, ketidaksabaran, atau proyek yang ditinggalkan di tengah jalan."
  },
  {
    id: "queen_wands",
    name: "QUEEN _of_ WANDS",
    positive: "Kehangatan, kepercayaan diri yang tinggi, kemandirian kreatif, dan pesona sosial yang memikat hati.",
    negative: "Kecemburuan, kecenderungan mendominasi orang lain, atau tuntutan perhatian yang berlebihan."
  },
  {
    id: "king_wands",
    name: "KING _of_ WANDS",
    positive: "Visi kepemimpinan yang matang, inspirasi bagi kelompok, keberanian mengambil risiko besar demi kemajuan.",
    negative: "Sikap otoriter, ketidakpedulian pada perasaan bawahan, atau impulsivitas yang merusak rencana matang."
  },

  // Cups (Piala)
  {
    id: "ace_cups",
    name: "ACE _of_ CUPS",
    positive: "Aliran cinta yang melimpah, awal kebahagiaan emosional, intuisi bersih, dan kedamaian hati yang baru.",
    negative: "Kekosongan emosi, cinta bertepuk sebelah tangan, atau penyumbatan perasaan yang menyiksa."
  },
  {
    id: "two_cups",
    name: "TWO _of_ CUPS",
    positive: "Kemitraan yang setara, cinta timbal balik, kesepakatan harmonis, dan rasa saling menghargai.",
    negative: "Keretakan hubungan, ketidakseimbangan komitmen, atau hilangnya kesepakatan dalam kemitraan."
  },
  {
    id: "three_cups",
    name: "THREE _of_ CUPS",
    positive: "Persahabatan yang tulus, perayaan kebersamaan, dukungan sosial, dan kegembiraan berbagi kisah.",
    negative: "Gosip yang merusak hubungan kelompok, merasa terkucilkan, atau pesta pora yang mengabaikan tanggung jawab."
  },
  {
    id: "four_cups",
    name: "FOUR _of_ CUPS",
    positive: "Kontemplasi diri, evaluasi keinginan hati, dan waktu tenang sebelum menerima peluang baru.",
    negative: "Apatis, kebosanan hidup, mengabaikan berkat yang ada di depan mata, atau depresi ringan."
  },
  {
    id: "five_cups",
    name: "FIVE _of_ CUPS",
    positive: "Proses berduka yang sehat, menyadari bahwa masih ada harapan di balik kehilangan yang dialami.",
    negative: "Penyesalan mendalam, terpaku pada apa yang hilang hingga melupakan harapan yang tersisa."
  },
  {
    id: "six_cups",
    name: "SIX _of_ CUPS",
    positive: "Nostalgia manis, reuni dengan masa lalu, kemurnian hati anak-anak, dan kebaikan tanpa pamrih.",
    negative: "Terjebak dalam kenangan masa lalu, ketidakdewasaan emosional, atau penolakan menghadapi kenyataan hari ini."
  },
  {
    id: "seven_cups",
    name: "SEVEN _of_ CUPS",
    positive: "Banyak pilihan menarik, imajinasi kreatif yang luas, dan kemungkinan masa depan yang terbuka lebar.",
    negative: "Angan-angan kosong, kebingungan memilih karena ilusi, atau pelarian dari kenyataan lewat fantasi."
  },
  {
    id: "eight_cups",
    name: "EIGHT _of_ CUPS",
    positive: "Keberanian meninggalkan hal yang tidak lagi bermakna demi mencari kebenaran spiritual yang lebih tinggi.",
    negative: "Ketakutan untuk melangkah pergi, terjebak dalam situasi hampa, atau pelarian tanpa tujuan yang jelas."
  },
  {
    id: "nine_cups",
    name: "NINE _of_ CUPS",
    positive: "Kepuasan pribadi, keinginan hati yang terwujud, rasa syukur atas kenyamanan hidup, dan kebahagiaan.",
    negative: "Keserakahan, kepuasan diri yang semu, memanjakan diri berlebihan, atau kesombongan atas materi."
  },
  {
    id: "ten_cups",
    name: "TEN _of_ CUPS",
    positive: "Kebahagiaan keluarga sejati, kedamaian emosional jangka panjang, cinta abadi, dan rasa aman bersama.",
    negative: "Ketegangan dalam rumah tangga, keretakan hubungan keluarga, atau kebahagiaan semu di mata publik."
  },
  {
    id: "page_cups",
    name: "PAGE _of_ CUPS",
    positive: "Sensitivitas kreatif, pesan cinta atau intuisi yang lembut, serta keterbukaan hati yang tulus.",
    negative: "Ketidakstabilan emosional, kekanak-kanakan dalam cinta, atau mimpi buruk yang mengganggu ketenangan."
  },
  {
    id: "knight_cups",
    name: "KNIGHT _of_ CUPS",
    positive: "Utusan cinta dan keindahan, pendekatan romantis yang tulus, dan ajakan untuk mengikuti kata hati.",
    negative: "Ketidak realistis-an romantis, perubahan suasana hati yang cepat, atau rayuan manis yang tidak tulus."
  },
  {
    id: "queen_cups",
    name: "QUEEN _of_ CUPS",
    positive: "Empati yang mendalam, pemahaman emosional yang matang, intuisi tajam, dan kelembutan hati yang menyembuhkan.",
    negative: "Ketergantungan emosional, manipulasi perasaan, atau tenggelam dalam drama emosional sendiri."
  },
  {
    id: "king_cups",
    name: "KING _of_ CUPS",
    positive: "Keseimbangan emosi dan logika, kebijaksanaan dalam memimpin hubungan, serta ketenangan di tengah badai.",
    negative: "Ketidakstabilan emosi tersembunyi, manipulasi emosi yang dingin, atau sikap acuh tak acuh pada penderitaan sekitar."
  },

  // Swords (Pedang)
  {
    id: "ace_swords",
    name: "ACE _of_ SWORDS",
    positive: "Kejelasan pikiran yang tajam, kebenaran yang terungkap, terobosan ide baru, dan kemenangan keadilan.",
    negative: "Kekejaman kata-kata, kebingungan berpikir, atau penyalahgunaan kekuasaan intelektual."
  },
  {
    id: "two_swords",
    name: "TWO _of_ SWORDS",
    positive: "Gencatan senjata emosional, jeda untuk menimbang keputusan penting secara seimbang sebelum bertindak.",
    negative: "Kebuntuan keputusan akibat ketakutan menghadapi kebenaran, atau menutup mata terhadap fakta nyata."
  },
  {
    id: "three_swords",
    name: "THREE _of_ SWORDS",
    positive: "Pelepasan rasa sakit emosional, pembersihan luka lama demi pertumbuhan batin yang lebih kokoh.",
    negative: "Patah hati mendalam, pengkhianatan yang menyakitkan, kesedihan, atau penolakan untuk memaafkan."
  },
  {
    id: "four_swords",
    name: "FOUR _of_ SWORDS",
    positive: "Istirahat mental pasca perjuangan berat, pemulihan energi, dan meditasi dalam keheningan yang menenangkan.",
    negative: "Kelelahan kronis, penundaan karena ketakutan bertindak, atau isolasi diri yang tidak sehat."
  },
  {
    id: "five_swords",
    name: "FIVE _of_ SWORDS",
    positive: "Menyadari batas perjuangan, melepaskan konflik yang tidak sepadan demi kedamaian batin.",
    negative: "Kemenangan kosong yang melukai hubungan, kekalahan yang memalukan, atau kesombongan yang egois."
  },
  {
    id: "six_swords",
    name: "SIX _of_ SWORDS",
    positive: "Perjalanan menuju air yang lebih tenang, masa transisi yang damai, dan pemulihan perlahan dari masa sulit.",
    negative: "Bagasi emosional yang belum selesai, penolakan untuk pindah, atau transisi hidup yang penuh hambatan."
  },
  {
    id: "seven_swords",
    name: "SEVEN _of_ SWORDS",
    positive: "Kecerdikan taktik, kemandirian bertindak, dan kehati-hatian dalam menghindari bahaya yang tidak perlu.",
    negative: "Ketidakjujuran, pencurian, penipuan, atau pelarian dari tanggung jawab nyata secara diam-diam."
  },
  {
    id: "eight_swords",
    name: "EIGHT _of_ SWORDS",
    positive: "Kesadaran bahwa belenggu yang mengikatmu hanyalah ilusi pikiran sendiri, dan jalan keluar selalu terbuka.",
    negative: "Merasa terjebak tanpa daya, paranoia pikiran, membiarkan diri menjadi korban situasi."
  },
  {
    id: "nine_swords",
    name: "NINE _of_ SWORDS",
    positive: "Menghadapi ketakutan terdalam untuk disembuhkan, menyadari bahwa bayangan malam tidaklah nyata.",
    negative: "Kecemasan ekstrem, insomnia akibat rasa bersalah, depresi, atau ketakutan tak beralasan pada masa depan."
  },
  {
    id: "ten_swords",
    name: "TEN _of_ SWORDS",
    positive: "Titik terendah telah terlewati; kegelapan malam segera berakhir digantikan oleh fajar yang baru.",
    negative: "Kekalahan telak, rasa dikhianati yang menyiksa, penderitaan yang dilebih-lebihkan oleh diri sendiri."
  },
  {
    id: "page_swords",
    name: "PAGE _of_ SWORDS",
    positive: "Rasa ingin tahu intelektual yang segar, kewaspadaan mental, serta keberanian menyuarakan kebenaran.",
    negative: "Sikap suka mengorek informasi orang lain, kata-kata tajam yang menyakitkan, atau permusuhan kecil."
  },
  {
    id: "knight_swords",
    name: "KNIGHT _of_ SWORDS",
    positive: "Fokus pikiran yang tajam, tindakan cepat tanpa ragu, dan tekad baja mengejar kebenaran proyek hidup.",
    negative: "Tindakan tanpa memikirkan konsekuensi, kekerasan verbal, atau kebodohan akibat terburu-buru."
  },
  {
    id: "queen_swords",
    name: "QUEEN _of_ SWORDS",
    positive: "Kejujuran objektif, kemandirian mental yang tinggi, ketajaman analisis, dan batasan pribadi yang sehat.",
    negative: "Kekejaman emosional, sinisme yang dingin, kepahitan masa lalu, atau terlalu kritis pada orang lain."
  },
  {
    id: "king_swords",
    name: "KING _of_ SWORDS",
    positive: "Otoritas intelektual yang adil, kebenaran moral, penilaian jernih tanpa bias emosi, dan disiplin tinggi.",
    negative: "Tirani pikiran, manipulasi hukum atau kebenaran, dingin tak berperasaan, atau kekejaman mental."
  },

  // Pentacles (Koin)
  {
    id: "ace_pentacles",
    name: "ACE _of_ PENTACLES",
    positive: "Peluang finansial baru, awal kemakmuran material, kesehatan fisik yang baik, dan manifestasi praktis.",
    negative: "Peluang bisnis yang terbuang, investasi yang merugikan, atau keserakahan yang membutakan hati."
  },
  {
    id: "two_pentacles",
    name: "TWO _of_ PENTACLES",
    positive: "Keseimbangan dalam mengelola berbagai urusan hidup, fleksibilitas, dan adaptasi yang ceria pada perubahan.",
    negative: "Kewalahan menyeimbangkan tanggung jawab hidup, kekacauan finansial, atau kurangnya fokus prioritas."
  },
  {
    id: "three_pentacles",
    name: "THREE _of_ PENTACLES",
    positive: "Kerja sama tim yang produktif, keahlian yang dihargai, pembangunan fondasi kokoh, dan kolaborasi.",
    negative: "Kurangnya koordinasi kelompok, kualitas kerja yang buruk, atau keengganan belajar dari orang berpengalaman."
  },
  {
    id: "four_pentacles",
    name: "FOUR _of_ PENTACLES",
    positive: "Keamanan finansial, perlindungan atas aset pribadi, dan pengelolaan sumber daya secara bijak.",
    negative: "Kikir berlebihan, ketakutan kehilangan materi, posesif, atau menolak berinvestasi untuk pertumbuhan."
  },
  {
    id: "five_pentacles",
    name: "FIVE _of_ PENTACLES",
    positive: "Menyadari bantuan yang tersedia di saat sulit, solidaritas di tengah tantangan ekonomi.",
    negative: "Kesulitan finansial, merasa terasing, kemiskinan spiritual, atau mengabaikan solusi yang ada."
  },
  {
    id: "six_pentacles",
    name: "SIX _of_ PENTACLES",
    positive: "Kedermawanan yang seimbang, memberi dan menerima bantuan dengan ikhlas, serta keadilan sosial.",
    negative: "Bantuan bersyarat yang menjerat, penyalahgunaan kekuasaan uang, atau ketimpangan memberi-menerima."
  },
  {
    id: "seven_pentacles",
    name: "SEVEN _of_ PENTACLES",
    positive: "Kesabaran menunggu hasil panen kerja keras, evaluasi berkala sebelum melangkah lebih jauh.",
    negative: "Ketidaksabaran, rasa frustrasi atas lambatnya kemajuan, atau usaha yang ternyata salah arah sejak awal."
  },
  {
    id: "eight_pentacles",
    name: "EIGHT _of_ PENTACLES",
    positive: "Dedikasi tinggi pada keahlian, proses belajar yang tekun, dan fokus pada detail pekerjaan.",
    negative: "Pekerjaan monoton yang menjemukan, kurangnya ambisi belajar, atau perfeksionisme yang menghambat."
  },
  {
    id: "nine_pentacles",
    name: "NINE _of_ PENTACLES",
    positive: "Kemandirian finansial, kenyamanan hidup yang diraih sendiri, keindahan taman pribadi, dan rasa aman.",
    negative: "Kesepian di tengah kemewahan, ketergantungan materi pada orang lain, atau ketidakmampuan menikmati hasil kerja."
  },
  {
    id: "ten_pentacles",
    name: "TEN _of_ PENTACLES",
    positive: "Kelimpahan jangka panjang, warisan nilai keluarga yang kokoh, kestabilan finansial dan rasa aman abadi.",
    negative: "Kerugian finansial keluarga, konflik warisan, atau mengorbankan kedamaian batin demi status sosial."
  },
  {
    id: "page_pentacles",
    name: "PAGE _of_ PENTACLES",
    positive: "Keinginan belajar hal praktis baru, awal bisnis kecil yang menjanjikan, dan ketekunan mewujudkan ide.",
    negative: "Kurangnya tindak lanjut praktis, malas belajar, atau ekspektasi keuntungan instan tanpa usaha nyata."
  },
  {
    id: "knight_pentacles",
    name: "KNIGHT _of_ PENTACLES",
    positive: "Ketekunan tanpa henti, keandalan tinggi, tanggung jawab yang diselesaikan secara cermat dan sistematis.",
    negative: "Kebosanan rutinitas, kekakuan bertindak, malas bergerak, atau terlalu fokus pada detail hingga lambat."
  },
  {
    id: "queen_pentacles",
    name: "QUEEN _of_ PENTACLES",
    positive: "Kehangatan praktis, kemurahan hati yang membumi, keseimbangan urusan rumah dan pekerjaan dengan sukses.",
    negative: "Ketidakstabilan emosi material, mengabaikan perawatan diri karena sibuk mengurus materi, ketakutan miskin."
  },
  {
    id: "king_pentacles",
    name: "KING _of_ PENTACLES",
    positive: "Keberhasilan finansial puncak, kemakmuran bisnis, kestabilan kepemimpinan, dan kemurahan hati sosial.",
    negative: "Keserakahan ekstrem, menilai segalanya dari uang, keras kepala yang merusak bisnis, atau materialistis."
  }
];

export function getDailyCardIndex(dateStr: string, totalCards: number): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % totalCards;
}

export function getJakartaDateString(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

export function getCardOfTheDay(): TarotCard {
  const dateStr = getJakartaDateString();
  const index = getDailyCardIndex(dateStr, tarotCards.length);
  return tarotCards[index];
}
