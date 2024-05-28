let allProducts = [
    {id: 100, img: ['img/samfoniMordegan.png', 'img/samfoniMordegan2.jpg'], title: 'سمفونی مردگان' , author: 'عباس معروفی', price: 175000, publisher: 'انتشارات ققنوس', translator: '', desc: 'خلاصه : داستان هابیل و قابیل که در هر دوره تکرار می شود، این بار در کالبد دو برادر به نام های "اورهان" و "آیدین" حلول پیدا می کند.'},
    {id: 101, img: ['img/melateEshgh.jpeg', 'img/melateEshgh2.jpg'], title: 'ملت عشق', author: 'الیف شافاک', price: 240000, publisher: 'انتشارات ققنوس', translator: 'مترجم : ارسلان فصیحی', desc: 'خلاصه : این کتاب برداشتی از ارتباط عرفانی مولانا و شمس تبریزی است که در قالب دو داستان روایت می شود.'},
    {id: 102, img: ['img/boofekoor.jpg', 'img/boofekoor4.jpg'], title: 'بوف کور', author: 'صادق هدایت', price: 40000, publisher: 'انتشارات صادق هدایت', translator: '', desc: 'خلاصه : "بوف کور" روایتی است در میانۀ واقعیت و رویا؛ داستانی که از زبان پریشان یک دیوانه روایت می شود.'},
    {id: 103, img: ['img/midNight.jpg', 'img/midNight2.jpg'], title: 'کتابخانه نیمه شب', author: 'مک هیگ', price: 195000, publisher: 'انتشارات کتاب کوله پشتی', translator: 'مترجم : محمد صالح نورانی زاده', desc: 'خلاصه : شخصیت اصلی این داستان نورا سید نام دارد و این کتاب داستان ورود او به کتابخانه ای عجیب و اتفاقاتی است که برای او در آنجا رخ می دهد.'},
    {id: 104, img: ['img/dokhtari...jpg', 'img/dokhtari..2.jpg'], title: 'دختری که رهایش کردی', author: 'جوجو مویز', price: 70000, publisher: 'انتشارات نگین ایران', translator: 'مترجم : مریم میرزائی', desc: 'خلاصه : داستان کتاب به زندگی دو زن به نام های "سوفی" و "لیو" گره خورده که در دو قرن مختلف زندگی می کنند.'},
    {id: 105, img: ['img/vanahade.jpg', 'img/vanahade2.jpg'], title: 'وانهاده', author: 'سیمون دوبووار', price: 68000, publisher: 'نشر مرکز', translator: 'مترجم : ناهید فروغان', desc: 'خلاصه : زنی که داستان پیرامون ماجرای او بنا شده، زنی ساده و معمولی است.'},
    {id: 106, img: ['img/GhorurVaTaasob.jpg', 'img/GhorurVaTaasob2.jpg'], title: 'غرور و تعصب', author: 'جین آستین', price: 180000, publisher: 'نشر نی', translator: 'مترجم : رضا رضایی', desc: 'خلاصه : این کتاب داستان زندگی آقا و خانم بنت و پنج دختر مجرد آنها در قرن نوزدهم است که دو شخص نجیب زاده به همسایگی آنها در می آیند.'},
    {id: 107, img: ['img/chashmhayash.png', 'img/chashmhayash1.jpg'], title: 'چشمهایش', author: 'بزرگ علوی', price: 145000, publisher: 'انتشارات نگاه', translator: '', desc: 'خلاصه : چشمهایش روایت زندگی زنی از طبقه اشراف به نام فرنگیس است که در زمان حکومت پهلوی اول رخ می دهد.'},
    {id: 108, img: ['img/ove.jpg', 'img/ove2.jpg'], title: 'مردی به نام اوه', author: 'فردریک بکمن', price: 239000, publisher: 'انتشارات فانوس دانش', translator: 'مترجم : محمد جواد نعمتی', desc: 'خلاصه : داستان زندگی مردی را روایت می کند که همسرش را از دست داده و به تنهایی زندگی می کند.'},

    {id: 200, img: ['img/fazelNazari.jpg', 'img/fazelNazari2.jpg'], title: 'گزیدۀ اشعار فاضل نظری', author: 'فاضل نظری', price: 114000, publisher: 'انتشارات مروارید', translator: '', desc: ''},
    {id: 201, img: ['img/forough.jpg', 'img/forough.jpg'], title: 'اولین تپش های عاشقانه قلبم', author: 'فروغ فرخزاد', price: 208000, publisher: 'انتشارات نگاه', translator: '', desc: 'خلاصه : نامه های فروغ فرخزاد به همسرش پرویز شاپور'},
    {id: 202, img: ['img/ketab.jpg', 'img/ketab2.jpg'], title: 'کتاب', author: 'فاضل نظری', price: 66000, publisher: 'انتشارات سوره مهر', translator: '', desc: 'خلاصه : بسته می شود کتاب و تو چه می دانی شاید آن ساعت نزدیک باشد.'},
    {id: 203, img: ['img/hafez.jpg', 'img/hafez2.jpg'], title: 'دیوان حافظ', author: 'حافظ', price: 85000, publisher: 'انتشارات نگاه', translator: '', desc: 'خلاصه : غزلیات حافظ همراه با تفسیر'},
    {id: 204, img: ['img/shahriyar.jpg', 'img/shahriyar2.jpg'], title: 'دیوان شهریار', author: 'شهریار', price: 203000, publisher: 'انتشارات نگاه', translator: '', desc: 'خلاصه : کلیه اشعار ترکی شهریار به انضمام حیدر بابا یه سلام'},
    {id: 205, img: ['img/ayeneh.jpg', 'img/ayeneh2.jpg'], title: 'آینه در آینه', author: 'هوشنگ ابتهاج', price: 152000, publisher: 'نشر چشمه', translator: '', desc: 'خلاصه : برگزیده اشعار سایه'},
    {id: 206, img: ['img/shakspeare.jpg', 'img/shakspeare2.jpg'], title: 'غزل های عاشقانه', author: 'ویلیام شکسپیر', price: 134000, publisher: 'انتشارات ویدا', translator: 'مترجم : دکتر تقی تفضلی', desc: 'خلاصه : غزل های عاشقانه'},
    {id: 207, img: ['img/vojood.jpg', 'img/vojood2.jpg'], title: 'وجود', author: 'فاضل نظری', price: 73000, publisher: 'انتشارات سوره مهر', translator: '', desc: 'خلاصه : وجود یا پندار وجود؟ چه فرقی می کند وقتی در هر دو انسان زیانکار است.'},
    {id: 208, img: ['img/aknoon.jpg', 'img/aknoon2.jpg'], title: 'اکنون', author: 'فاضل نظری', price: 77000, publisher: 'انتشارات سوره مهر', translator: '', desc: 'خلاصه : روزی هر قضاوت شونده ای قضاوت می شود «اکنون تو برای حساب کشیدن از خود بسنده ای...»'},

    {id: 300, img: ['img/takht...jpeg', 'img/takht..2.jpeg'], title: 'تختخوابت را مرتب کن', author: 'ژنرال ویلیام اچ. مک ریون', price: 77000, publisher: 'انتشارات کتاب کوله پشتی', translator: 'مترجم : حسین گازر', desc: 'خلاصه : مک ریون در این کتاب به اصولی ساده اما عمیق می پردازد که می تواند زندگی روزانه ی افراد را توسعه و بهبود ببخشد و به آنها نظم و انظباط لازم برای پیش رفتن را بدهد.'},
    {id: 301, img: ['img/khodetBash.jpg', 'img/khodetBash2.jpg'], title: 'خودت باش دختر', author: 'ریچل هالیس', price: 140000, publisher: 'انتشارات کتاب کوله پشتی', translator: 'مترجم : هدیه جامعی', desc: 'خلاصه : ریچل هالیس در این کتاب از ما می خواهد دست از باور کردن دروغ های سمی که شنیده ایم، برداریم و خودمان باشیم.'},
    {id: 302, img: ['img/asareMorakab.jpg', 'img/asareMorakab.jpg'], title: 'اثر مرکب', author: 'دارن هاردی', price: 189000, publisher: 'انتشارات نسل نواندیش', translator: 'مترجم : اکبر عباسی - شاهین بیات', desc: 'خلاصه : ایجاد تحولی شگفت انگیز در زندگی درآمد و موفقیت شما'},
    {id: 303, img: ['img/bashgahe5.jpg', 'img/bashgahe52.jpg'], title: 'باشگاه پنج صبحی ها', author: 'رابین شارما', price: 195000, publisher: 'انتشارات آرایان', translator: 'مترجم : غلامحسین علی مازندرانی', desc: 'خلاصه : سحرخیز باش تا کامروا باشی.'},
    {id: 304, img: ['img/khodshenasi.jpg', 'img/khodshenasi2.jpg'], title: 'خودشناسی', author: 'آلن دوباتن', price: 60000, publisher: 'انتشارات کتیبه پارسی', translator: 'مترجم : دکتر مریم بردبار', desc: 'خلاصه : این کتاب ما را رهسپار سفری به ژرفای درونمان کرده و به مجموعه ابزارهایی مجهزمان می سازد تا ویژگی های خود را به خوبی درک کنیم.'},
    {id: 305, img: ['img/khordeAdatha.jpg', 'img/khordeAdatha1.jpg'], title: 'خرده عادت ها', author: 'جیمز کلیر', price: 195000, publisher: 'انتشارات میلکان', translator: 'مترجم : زهرا صادقی', desc: 'خلاصه : در این کتاب می آموزیم که چگونه با شناسایی عادت های کوچک و مدیریت آنها، می توانیم هر روز بهتر از دیروز باشیم و در مسیر موفقیت گام برداریم.'},
    {id: 306, img: ['img/bihadomarz.jpg', 'img/bihadomarz2.jpg'], title: 'بی حد و مرز', author: 'جیم کوییک', price: 220000, publisher: 'انتشارات میلکان', translator: 'مترجم : پگاه فرهنگ مهر', desc: 'خلاصه : کوییک در کتابش به ما گوشزد می کند که فضای کنونی جهان و فضای دیجیتال اثرات مخربی بر مغز ما دارنذ و کمک می کند تا خودمان را در برابر خطراتی که وجود دارد قوی سازیم.'},

    {id: 400, img: ['img/tarikhche...jpg', 'img/tarikhche...jpg'], title: 'تاریخچه زمان', author: 'استیون و. هاوکینگ', price: 160000, publisher: 'شرکت سهامی انتشار', translator: 'مترجم : محمد رضا محجوب', desc: ''},
    {id: 401, img: ['img/zhenekhodkhah.jpg', 'img/zhenekhodkhah2.jpg'], title: 'ژن خودخواه', author: 'ریچارد داکینز', price: 240000, publisher: 'انتشارات اختران', translator: 'مترجم : دکتر شهلا باقری', desc: 'خلاصه : این کتاب نگاه شفاف داکینز، از دیدگاه ژن به حیات، در نثری روشن و رسا، خطوط فکری مختلف درباره چیستی انتخاب طبیعی را چنان در یک چهارچوب مفهومی قرار داد که به منبع باارزشی برای درک جنبه های مختلف تکامل تبدیل شد.'},
    {id: 402, img: ['img/saatsaz.jpg', 'img/saatsaz1.jpg'], title: 'ساعت ساز نابینا', author: 'ریچارد داوکینز', price: 50000, publisher: 'انتشارات نگاه', translator: 'مترجم : دکتر محمود بهزاد - شهلا باقری', desc: ''},
    {id: 403, img: ['img/jahandar.jpg', 'img/jahandar2.jpg'], title: 'جهان در پوست گردو', author: 'استیون هاوکینگ', price: 140000, publisher: 'شرکت سهامی انتشار', translator: 'مترجم : دکتر محمدرضا محجوب', desc: 'خلاصه : دنباله ی کتاب تاریخچه زمان'},
    {id: 404, img: ['img/tafakor.jpg', 'img/tafakor2.jpg'], title: 'تفکر علمی', author: 'رابرت ام. مارتین', price: 197000, publisher: 'انتشارات طرح نو', translator: 'مترجم : کاوه بهبهانی - امین لطیفی', desc: 'خلاصه : علم از مهم ترین سرچشمه های حقیقت است که ثمزه اش زندگی آدمیان را راحت تر کرده است.'},
    {id: 405, img: ['img/akhlagh.jpg', 'img/akhlagh2.jpg'], title: 'اخلاق', author: 'باروخ اسپینوزا', price: 225000, publisher: 'انتشارات تمدن علمی', translator: 'مترجم : کیومرث پارسای', desc: 'خلاصه : اسپینوزا در این کتاب بسیار موجز و موثر درباره اخلاق سخن گفته و عمده عقاید او درباره خدا و هستی در این کتاب وجود دارد.'},
    {id: 406, img: ['img/falsafe.jpg', 'img/falsafe2.jpg'], title: 'فلسفه زبان', author: 'ویلیام لایکن', price: 216000, publisher: 'انتشارات علمی و فرهنگی', translator: 'مترجم : مهدی اخوان - مهدی رزاقی', desc: 'خلاصه : این کتاب فلسفه ورزی در باب مسائل و پدیده های زبانی است.'},
    {id: 402, img: ['img/darham.jpg', 'img/darham2.jpg'], title: 'درهم تنیدگی کوانتومی', author: 'امیر آتسل', price: 174000, publisher: 'انتشارات اشراقیه', translator: 'مترجم : یونس یونسیان - خسرو آقایی', desc: 'خلاصه : داستان عجیبی که نشان می دهد چگونه فلاسفه، ریاضیدانان و دانشمندان تئوری ای که انیشتین آن را تئوری شبه گونه می نامید و نمی پذیرفت را اثبات کردند.'},

    {id: 500, img: ['img/pesarak...jpg', 'img/pesarak...jpg'], title: 'پسرک، موش کور، روباه و اسب', author: 'چارلی مکسی', price: 239000, publisher: 'انتشارات میلکان', translator: 'مترجم : سید وحید کریمیان', desc: 'خلاصه : داستان این کتاب درمورد همراهی یک پسر بچه کنجکاو با دوستان جالبش است که شامل یک موش کور عاشق کیک، روباهی محتاط و یک اسب خردمند است.'},
    {id: 501, img: ['img/pastilbanafsh.jpg', 'img/pastilbanafsh.jpg'], title: 'پاستیل های بنفش', author: 'کلی بارن هیل', price: 144000, publisher: 'انتشارات پرتقال', translator: 'مترجم : آناهیتا حضرتی', desc: 'خلاصه : این کتاب، داستان دختر جوان بی خانمان به نام جکسون را دنبال می کند که برای کنار آمدن با مشکلات مالی خانواده اش تلاش می کند.'},
    {id: 502, img: ['img/dokhtariKeMah...jpg', 'img/dokhtariKeMah..2.jpg'], title: 'دختری که ماه را نوشید', author: 'کاترین آپلگیت', price: 180000, publisher: 'انتشارات پرتقال', translator: 'مترجم : فروغ منصورقناعی', desc: 'خلاصه : این داستان جادویی شما را به قلب جنگلی می برد که مردم شهر هر سال نوزادان خود را به عنوان قربانی در آن رها می کنند.'},
    {id: 503, img: ['img/zobaleh.jpg', 'img/zobaleh2.jpg'], title: 'زباله نوازان کوچک', author: 'پل ای. رینولدز', price: 25000, publisher: 'انتشارات نردبان', translator: 'مترجم : جواد کریمی', desc: 'خلاصه : سیدنی و سیمون برادران هنرمند دوقلویی هستند که می‌خواهند در تمیز نگه داشتن کره‌ی زمین سهمی داشته باشند. آن‌ها با استفاده از زباله‌های بازیافتی، سازهایی می‌سازند و به کمک هنر مردم شهر را به داشتن زندگی سبز و بی‌زباله تشویق می‌کنند.'},
    {id: 504, img: ['img/mehmanenakhande.jpg', 'img/mehmanenakhande.jpg'], title: 'مهمان های ناخوانده', author: 'فریده فرجام', price: 35000, publisher: 'کانون پرورش فکری کودکان و نوجوانان', translator: '', desc: ''},
    {id: 505, img: ['img/tabestan.jpg', 'img/tabestan.jpg'], title: 'تابستان قوها', author: 'بتسی بایارس', price: 85000, publisher: 'انتشارات نگاه', translator: 'مترجم : پروین علی پور', desc: 'خلاصه : روایت زندگی یک دختر چهارده‌‌سالۀ کنجکاو به نام سارا است. سارا یک برادر کوچک‌تر به نام چارلی دارد که به مشکلات ذهنی دچار است.'},
    {id: 506, img: ['img/haripater.jpg', 'img/haripater2.jpg'], title: 'هری پاتر و سنگ جادو', author: 'جی. کی. رولینگ', price: 200000, publisher: 'انتشارات تندیس', translator: 'مترجم : سعید کبریایی', desc: 'خلاصه : هری پاتر، پسری یتیم ده ساله است که به همراه خانواده دورسلی، شامل عمو ورنون، خاله پتونیا و دادلی زندگی می‌کند.'},
    {id: 507, img: ['img/dokhtarePorteghali.jpg', 'img/dokhtarePorteghali2.jpg'], title: 'دختر پرتقالی', author: 'یوستاین گاردر', price: 125000, publisher: 'انتشارات تندیس', translator: 'مترجم : مهوش خرمی پور', desc: 'خلاصه : یوستین گردر در کتاب دختر پرتقالی داستان پسری پانزده‌ساله به نام «جرج» را روایت می‌کند که در کودکی پدر خود را از دست داده است. ماجرا از زمانی آغاز می‌شود که مجموعه‌ نامه‌هایی از پدر به دست جرج می‌رسند.'},
    {id: 508, img: ['img/moshesarbehava.jpg', 'img/moshesarbehava.jpg'], title: 'موش سر به هوا', author: 'فرهاد حسن زاده', price: 30000, publisher: 'کانون پرورش فکری کودکان و نوجوانان', translator: '', desc: 'خلاصه : موش سر به هوا داستان هفت موش است که با هم سفر می‌کنند. شش‌تای آن‌ها مانند هم‌ سر به زیرند اما یکی سر به هواست. آن‌قدر سر به هوا که یادش رفته غذای شش موش دیگر را بیاورد.'},
]

let $ = document
let backBtn = $.querySelector('.back-btn')
let productImg = $.querySelector('.product-img')
let productImg2 = $.querySelector('.product-img2')
let productTitle = $.querySelector('.product-title')
let productAuthor = $.querySelector('.product-author')
let productPublisher = $.querySelector('.product-publisher')
let productTranslator = $.querySelector('.product-translate')
let productDetail = $.querySelector('.product-detail')
let productPrice = $.querySelector('.product-price')


let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')

let mainProductObject = allProducts.find(function (product) {
    return product.id === Number(mainProductId)
})


if (mainProductObject) {
    document.title = mainProductObject.title
    productImg.src = mainProductObject.img[0]
    productImg2.src = mainProductObject.img[1]
    productTitle.innerHTML = 'نام کتاب : ' +mainProductObject.title
    productAuthor.innerHTML = 'نویسنده : ' + mainProductObject.author
    productPublisher.innerHTML = 'ناشر : ' + mainProductObject.publisher
    productTranslator.innerHTML = mainProductObject.translator
    productDetail.innerHTML = mainProductObject.desc
    productPrice.innerHTML = 'قیمت : ' + mainProductObject.price +  ' تومان'
    console.log(mainProductObject)
} else {
    location.href = 'http://127.0.0.1:5500/'
}


function back () {
    history.back()
}

backBtn.addEventListener('click', back)