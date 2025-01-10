// Markalar Listesi
const brands = [
    {
        brand: "Hyundai",
        logo: "images/hyundai-icon.png",
        description: "Hyundai, dünya çapında tanınan bir otomobil markası olup, özellikle ekonomik, güvenilir ve şık coupe modelleri ile bilinir. Güney Kore merkezli bu marka, otomobil sektöründe inovatif çözümleri ve çevre dostu araçları ile dikkat çeker. Hyundai, modern tasarımları ve yüksek teknolojiye sahip araçları ile global pazarda önemli bir yere sahiptir.",
        history: "Hyundai, 1967 yılında Güney Kore'nin en büyük inşaat ve mühendislik şirketlerinden biri olarak kuruldu. İlk otomobilini 1975'te üretmeye başlayan Hyundai, zamanla uluslararası alanda büyüyerek dünya çapında bir otomobil devi haline geldi. Marka, 1990'ların başından itibaren coupe türündeki araçlarıyla özellikle genç sürücüler arasında popülerlik kazanmıştır."
    },
    {
        brand: "BMW",
        logo: "images/bmw-icon.png",
        description: "BMW (Bayerische Motoren Werke), Alman otomobil ve motosiklet üreticisi olup, yüksek performanslı, lüks ve sportif araçlarıyla tanınır. BMW, özellikle coupe araçlarında sunduğu üstün sürüş deneyimi, tasarım zarafeti ve teknolojik yeniliklerle öne çıkar. Markanın araçları, hem estetik hem de mühendislik açısından zirveye ulaşan özelliklere sahiptir.",
        history: "BMW, 1916 yılında Almanya'nın Münih şehrinde kuruldu. Başlangıçta uçak motoru üretimi yapan BMW, 1920'lerde otomobil üretimine adım atmıştır. BMW'nin coupe modelleri, özellikle 1960'ların sonlarından itibaren markanın prestijli ve spor araç segmentindeki yerini güçlendirmiştir. 3 Serisi ve 6 Serisi gibi popüler modelleri ile coupe segmentinde önemli bir oyuncu olmuştur."
    },
    {
        brand: "Audi",
        logo: "images/audi-icon.png",
        description: "Audi, Alman otomobil endüstrisinin köklü markalarından biridir ve dünya çapında lüks ve teknoloji odaklı araçlar üretmektedir. Audi'nin coupe modelleri, sportif sürüş dinamikleri, zarif tasarımları ve yenilikçi teknolojileri ile dikkat çeker. Quattro dört tekerlekten çekiş sistemi gibi Audi'nin sunduğu mühendislik harikaları, sürüş deneyimini zirveye taşır.",
        history: "Audi, 1909 yılında August Horch tarafından Almanya'da kuruldu. Şirketin ismi, Horch'un soyadından türetilmiş olup, Latince 'dinle' anlamına gelmektedir. Audi, 1960'larda Volkswagen Grubu'na katıldıktan sonra coupe ve spor modelleri üretmeye devam etti ve özellikle 1980'lerden itibaren Audi Quattro ile performans odaklı coupe araçlarıyla ün kazandı."
    },
    {
        brand: "Mercedes-Benz",
        logo: "images/mercedes-icon.png",
        description: "Mercedes-Benz, Almanya'nın en prestijli ve lüks otomobil markalarından biridir. Yüksek kaliteli, konforlu ve performans odaklı araçlarıyla tanınır. Mercedes-Benz'in coupe modelleri, zarif tasarımları, üstün mühendislikleri ve son derece konforlu sürüş özellikleri ile sektördeki lider markalardan biridir. Şirketin araçları, teknolojik yenilikler ve güvenlik özellikleriyle de ön plana çıkar.",
        history: "Mercedes-Benz, 1926 yılında Gottlieb Daimler ve Carl Benz'in şirketlerinin birleşmesiyle kuruldu. İlk otomobilini üreten marka, lüks araç segmentinde her zaman öncü olmuştur. Mercedes-Benz, 1950'lerde coupe modellerini üretmeye başlayarak markanın prestijini arttırmış, zamanla lüks coupe araçlarının simgesi haline gelmiştir. Bugün, S-Class Coupe ve E-Class Coupe gibi modelleri ile dünyada büyük bir popülerlik kazanmıştır."
    },
    {
        brand: "Ford",
        logo: "images/ford-icon.png",
        description: "Ford, dünya çapında büyük bir otomobil üreticisidir ve özellikle performanslı ve güçlü araçlarıyla tanınır. Amerikan markası olan Ford, coupe segmentinde sunduğu ikonik modelleri ve güçlü motor seçenekleriyle bilinir. Ford'un sport coupe modelleri, yüksek hız ve performans arayan sürücüler için ideal seçenekler sunmaktadır.",
        history: "Ford, 1903 yılında Henry Ford tarafından kuruldu. Ford, seri üretim teknolojisinin öncüsü olarak otomobil dünyasında devrim yarattı. Marka, 1960'larda özellikle Mustang ve Torino gibi sportif coupe araçlarıyla büyük bir üne kavuştu. Ford, bugüne kadar birçok popüler coupe modelini üreterek dünyanın dört bir yanındaki otomobil severlerin gönlünde taht kurmuştur."
    },
    {
        brand: "Honda",
        logo: "images/honda-icon.png",
        description: "Honda, Japonya merkezli bir otomobil ve motosiklet üreticisidir ve özellikle güvenilirliği, ekonomik araçları ve çevre dostu teknolojileri ile tanınır. Honda, coupe segmentinde de şık ve pratik modeller sunar. Yüksek yakıt verimliliği ve modern tasarımları ile Honda coupe araçları, sürücülere ekonomik ve keyifli bir sürüş deneyimi sunar.",
        history: "Honda, 1948 yılında Japonya'da kuruldu. Başlangıçta motosiklet üretimi yapan Honda, 1960'larda otomobil üretimine adım atmıştır. Markanın Civic ve CRX gibi coupe modelleri, 1980'lerde popülerlik kazanarak Honda'nın küresel çapta tanınan bir marka olmasını sağlamıştır. Bugün, Honda'nın sportif coupe modelleri, uygun fiyatlarla yüksek performans sunar."
    },
    {
        brand: "Fiat",
        logo: "images/fiat-icon.png",
        description: "Fiat, İtalya'nın en köklü otomobil markalarından biri olup, kompakt ve şık coupe modelleriyle bilinir. Fiat, özellikle şehir içi kullanım için ideal olan küçük ve ekonomik araçlar üretmektedir. Markanın coupe araçları, zarif tasarımları ve pratik kullanım özellikleri ile dikkat çeker.",
        history: "Fiat, 1899 yılında İtalya'da kuruldu ve ülkesinin en büyük otomobil üreticisi olma yolunda hızla büyüdü. 1960'lar ve 1970'lerde Fiat, küçük ve pratik coupe araçlarıyla tanınmaya başladı. Bugün, Fiat 124 Spider ve 500 gibi coupe modelleri ile markanın tarihi mirasını yaşatmaktadır."
    },
    {
        brand: "Chevrolet",
        logo: "images/chevrolet-icon.png",
        description: "Chevrolet, Amerikan menşeli bir otomobil markasıdır ve özellikle güçlü motor seçenekleri ve performanslı araçları ile bilinir. Chevrolet'in coupe modelleri, hız tutkunları ve sürüş keyfi arayanlar için tasarlanmış, etkileyici performans özelliklerine sahiptir. Chevy'nin ikonik modelleri, geniş bir kullanıcı kitlesi tarafından sevilmektedir.",
        history: "Chevrolet, 1911 yılında ABD'de kuruldu. Marka, özellikle 1960'larda ve 1970'lerde muscle car segmentine damgasını vurmuş, Camaro gibi performans odaklı coupe araçlarıyla ün kazanmıştır. Chevrolet, günümüzde de Camaro ve Corvette gibi güçlü coupe araçları ile popülerliğini sürdürmektedir."
    },
    {
        brand: "Mazda",
        logo: "images/mazda-icon.png",
        description: "Mazda, Japonya merkezli bir otomobil üreticisidir ve özellikle dinamik sürüş deneyimi ile tanınır. Mazda'nın coupe modelleri, tasarım ve mühendislik açısından yenilikçi çözümler sunar. Marka, özellikle hafif ve çevik araçlarıyla bilinir ve sürüş keyfi sunan coupe modelleriyle öne çıkar.",
        history: "Mazda, 1920 yılında Japonya'da kuruldu. Mazda, 1960'larda araç üretimine başladıktan sonra, 1990'larda MX-5 Miata gibi dünya çapında tanınan bir spor coupe modeli piyasaya sürdü. Bugün, Mazda'nın coupe araçları, kompakt boyutları ve sportif sürüş özellikleri ile sürücüler tarafından tercih edilmektedir."
    },
    {
        brand: "Nissan",
        logo: "images/nissan-icon.png",
        description: "Nissan, Japon otomobil markası olup, geniş bir araç yelpazesi sunar. Nissan'ın coupe modelleri, modern tasarımları ve yüksek performans özellikleri ile dikkat çeker. Markanın araçları, özellikle konforlu sürüş ve güvenlik önlemleri ile öne çıkar.",
        history: "Nissan, 1933 yılında Japonya'da kuruldu. Nissan, 1960'larda ve 1970'lerde özellikle Datsun adı altında ürettiği coupe modelleriyle büyük bir popülerlik kazandı. Bugün, Nissan 370Z gibi spor coupe araçlarıyla dünya çapında tanınmaktadır."
    },
    {
        brand: "Renault",
        logo: "images/renault-icon.png",
        description: "Renault, Fransız otomobil üreticisidir ve geniş bir coupe yelpazesiyle dikkat çeker. Renault'un araçları, özellikle konfor, güvenlik ve modern tasarımları ile öne çıkar. Markanın coupe modelleri, zarif hatları ve yenilikçi teknolojileriyle sürücülere keyifli bir sürüş sunar.",
        history: "Renault, 1899 yılında Fransa'da kuruldu. Marka, 1950'lerden itibaren coupe modelleri üretmeye başlamış ve 1960'lar ve 1970'lerde özellikle Renault Alpine modelleriyle popülerlik kazanmıştır. Renault, günümüzde de sportif coupe araçları üretmeye devam etmektedir."
    }
];

// Popüler Arabalar Listesi
const popularCars = [
    {
        name: "Hyundai Coupe",
        brand: "Hyundai",
        model: "Coupe",
        year: "1996-2009",
        fuelType: "Benzin",
        transmission: "Manuel",
        engineCapacity: "2.0L",
        enginePower: "140 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "1996-2009" }
        ],
        popularity: 5,
        userManual: "images/hyundai-coupe-manual.pdf",
        wheelSize: "16 inch",
        maxSpeed: "220 km/h",
        fuelConsumption: "8 L/100 km",
        dimensions: "4.3m x 1.8m x 1.3m",
        acceleration: "8.5 seconds (0-100 km/h)",
        seats: 4,
        weight: "1200 kg",
        trunkCapacity: "300 L",
        priceAvg: "75,000 TRY"
    },
    {
        name: "BMW 4 Coupe",
        brand: "BMW",
        model: "4 Serisi Coupe",
        year: "2013-2023",
        fuelType: "Dizel",
        transmission: "Otomatik",
        engineCapacity: "2.0L",
        enginePower: "190 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2013-2023" }
        ],
        popularity: 4,
        userManual: "images/bmw-4-coupe-manual.pdf",
        wheelSize: "17 inch",
        maxSpeed: "250 km/h",
        fuelConsumption: "6.5 L/100 km",
        dimensions: "4.6m x 1.8m x 1.4m",
        acceleration: "6.0 seconds (0-100 km/h)",
        seats: 4,
        weight: "1500 kg",
        trunkCapacity: "400 L",
        priceAvg: "150,000 TRY"
    },
    {
        name: "Audi A3 Coupe",
        brand: "Audi",
        model: "A3 Coupe",
        year: "2006-2023",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "1.8L",
        enginePower: "180 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2006-2023" }
        ],
        popularity: 4,
        userManual: "images/audi-a3-coupe-manual.pdf",
        wheelSize: "16 inch",
        maxSpeed: "240 km/h",
        fuelConsumption: "7 L/100 km",
        dimensions: "4.4m x 1.8m x 1.3m",
        acceleration: "7.5 seconds (0-100 km/h)",
        seats: 4,
        weight: "1400 kg",
        trunkCapacity: "350 L",
        priceAvg: "110,000 TRY"
    },
    {
        name: "Mercedes-Benz C Coupe",
        brand: "Mercedes-Benz",
        model: "C Serisi Coupe",
        year: "2015-2023",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "2.0L",
        enginePower: "211 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2015-2023" }
        ],
        popularity: 5,
        userManual: "images/mercedes-c-coupe-manual.pdf",
        wheelSize: "18 inch",
        maxSpeed: "250 km/h",
        fuelConsumption: "7.2 L/100 km",
        dimensions: "4.7m x 1.8m x 1.4m",
        acceleration: "5.9 seconds (0-100 km/h)",
        seats: 4,
        weight: "1600 kg",
        trunkCapacity: "450 L",
        priceAvg: "200,000 TRY"
    },
    {
        name: "Ford Mustang",
        brand: "Ford",
        model: "Mustang Coupe",
        year: "2015-2023",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "5.0L",
        enginePower: "450 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2015-2023" }
        ],
        popularity: 5,
        userManual: "images/ford-mustang-manual.pdf",
        wheelSize: "19 inch",
        maxSpeed: "250 km/h",
        fuelConsumption: "12 L/100 km",
        dimensions: "4.8m x 1.9m x 1.4m",
        acceleration: "4.5 seconds (0-100 km/h)",
        seats: 4,
        weight: "1700 kg",
        trunkCapacity: "400 L",
        priceAvg: "350,000 TRY"
    },
    {
        name: "Honda Prelude",
        brand: "Honda",
        model: "Prelude",
        year: "1997-2001",
        fuelType: "Benzin",
        transmission: "Manuel",
        engineCapacity: "2.2L",
        enginePower: "185 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "1997-2001" }
        ],
        popularity: 4,
        userManual: "images/honda-prelude-manual.pdf",
        wheelSize: "15 inch",
        maxSpeed: "230 km/h",
        fuelConsumption: "9 L/100 km",
        dimensions: "4.3m x 1.7m x 1.3m",
        acceleration: "7.0 seconds (0-100 km/h)",
        seats: 4,
        weight: "1300 kg",
        trunkCapacity: "320 L",
        priceAvg: "70,000 TRY"
    },
    {
        name: "Fiat Coupe",
        brand: "Fiat",
        model: "Coupe",
        year: "1994-2000",
        fuelType: "Benzin",
        transmission: "Manuel",
        engineCapacity: "2.0L",
        enginePower: "150 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "1994-2000" }
        ],
        popularity: 4,
        userManual: "images/fiat-coupe-manual.pdf",
        wheelSize: "16 inch",
        maxSpeed: "210 km/h",
        fuelConsumption: "8 L/100 km",
        dimensions: "4.1m x 1.8m x 1.3m",
        acceleration: "8.2 seconds (0-100 km/h)",
        seats: 4,
        weight: "1300 kg",
        trunkCapacity: "350 L",
        priceAvg: "65,000 TRY"
    },
    {
        name: "Chevrolet Camaro",
        brand: "Chevrolet",
        model: "Camaro",
        year: "2010-2023",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "3.6L",
        enginePower: "335 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2010-2023" }
        ],
        popularity: 5,
        userManual: "images/chevrolet-camaro-manual.pdf",
        wheelSize: "18 inch",
        maxSpeed: "250 km/h",
        fuelConsumption: "10 L/100 km",
        dimensions: "4.8m x 1.9m x 1.3m",
        acceleration: "6.0 seconds (0-100 km/h)",
        seats: 4,
        weight: "1700 kg",
        trunkCapacity: "400 L",
        priceAvg: "300,000 TRY"
    },
    {
        name: "Hyundai Genesis Coupe",
        brand: "Hyundai",
        model: "Genesis Coupe",
        year: "2009-2016",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "2.0L",
        enginePower: "270 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2009-2016" }
        ],
        popularity: 4,
        userManual: "images/hyundai-genesis-manual.pdf",
        wheelSize: "17 inch",
        maxSpeed: "240 km/h",
        fuelConsumption: "9 L/100 km",
        dimensions: "4.6m x 1.8m x 1.4m",
        acceleration: "6.5 seconds (0-100 km/h)",
        seats: 4,
        weight: "1500 kg",
        trunkCapacity: "350 L",
        priceAvg: "160,000 TRY"
    },
    {
        name: "Audi TT",
        brand: "Audi",
        model: "TT",
        year: "1998-2023",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "1.8L",
        enginePower: "225 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "1998-2023" }
        ],
        popularity: 5,
        userManual: "images/audi-tt-manual.pdf",
        wheelSize: "17 inch",
        maxSpeed: "240 km/h",
        fuelConsumption: "8 L/100 km",
        dimensions: "4.1m x 1.8m x 1.3m",
        acceleration: "7.0 seconds (0-100 km/h)",
        seats: 2,
        weight: "1300 kg",
        trunkCapacity: "250 L",
        priceAvg: "120,000 TRY"
    },
    {
        name: "Audi A5 Coupe",
        brand: "Audi",
        model: "A5 Coupe",
        year: "2007-2023",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "2.0L",
        enginePower: "190 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2007-2023" }
        ],
        popularity: 5,
        userManual: "images/audi-a5-manual.pdf",
        wheelSize: "17 inch",
        maxSpeed: "250 km/h",
        fuelConsumption: "7 L/100 km",
        dimensions: "4.7m x 1.8m x 1.4m",
        acceleration: "6.3 seconds (0-100 km/h)",
        seats: 4,
        weight: "1600 kg",
        trunkCapacity: "400 L",
        priceAvg: "180,000 TRY"
    },
    {
        name: "Mazda Rx-8",
        brand: "Mazda",
        model: "Rx-8",
        year: "2003-2012",
        fuelType: "Benzin",
        transmission: "Manuel",
        engineCapacity: "1.3L",
        enginePower: "232 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2003-2012" }
        ],
        popularity: 4,
        userManual: "images/mazda-rx8-manual.pdf",
        wheelSize: "17 inch",
        maxSpeed: "240 km/h",
        fuelConsumption: "11 L/100 km",
        dimensions: "4.4m x 1.8m x 1.3m",
        acceleration: "6.5 seconds (0-100 km/h)",
        seats: 4,
        weight: "1400 kg",
        trunkCapacity: "350 L",
        priceAvg: "120,000 TRY"
    },
    {
        name: "Nissan 350Z",
        brand: "Nissan",
        model: "350Z",
        year: "2003-2009",
        fuelType: "Benzin",
        transmission: "Otomatik",
        engineCapacity: "3.5L",
        enginePower: "287 HP",
        drive: "Arkadan Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2003-2009" }
        ],
        popularity: 5,
        userManual: "images/nissan-350z-manual.pdf",
        wheelSize: "18 inch",
        maxSpeed: "250 km/h",
        fuelConsumption: "10 L/100 km",
        dimensions: "4.3m x 1.8m x 1.3m",
        acceleration: "5.5 seconds (0-100 km/h)",
        seats: 2,
        weight: "1500 kg",
        trunkCapacity: "250 L",
        priceAvg: "140,000 TRY"
    },
    {
        name: "Renault Megane Coupe",
        brand: "Renault",
        model: "Megane Coupe",
        year: "2009-2016",
        fuelType: "Dizel",
        transmission: "Otomatik",
        engineCapacity: "1.9L",
        enginePower: "130 HP",
        drive: "Önden Çekiş",
        bodyStyles: [
            { style: "Coupe", years: "2009-2016" }
        ],
        popularity: 4,
        userManual: "images/renault-megane-manual.pdf",
        wheelSize: "16 inch",
        maxSpeed: "210 km/h",
        fuelConsumption: "5 L/100 km",
        dimensions: "4.3m x 1.8m x 1.4m",
        acceleration: "9.0 seconds (0-100 km/h)",
        seats: 4,
        weight: "1400 kg",
        trunkCapacity: "300 L",
        priceAvg: "80,000 TRY"
    }
];

// Markaların detaylarını dinamik olarak yükler
function loadBrandDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const brandName = urlParams.get('brand'); // URL parametresinden markanın adını alıyoruz

    // Markaları brands listesinden bul
    const brand = brands.find(brand => brand.brand === brandName);

    if (brand) {
        const mainContent = document.getElementById("brand-details");

        // Başlık
        const title = document.createElement('h1');
        title.textContent = brand.brand;
        mainContent.appendChild(title);

        // Marka açıklaması
        const description = document.createElement('div');
        description.classList.add('brand-description');
        description.innerHTML = `
            <img src="${brand.logo}" alt="${brand.brand}" class="brand-icon">
            <p>${brand.description}</p>
        `;
        mainContent.appendChild(description);

        // Marka Tarihçesi
        const historyTitle = document.createElement('h2');
        historyTitle.textContent = 'Marka Tarihçesi:';
        mainContent.appendChild(historyTitle);

        const historyParagraph = document.createElement('p');
        historyParagraph.textContent = brand.history;
        mainContent.appendChild(historyParagraph);
    } else {
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = '<p>Bu marka bulunamadı.</p>';
    }
}

// Markaları dinamik olarak yükle
function loadBrands() {
    const brandList = document.getElementById("brand-list");
    brands.forEach(brand => {
        const brandDiv = document.createElement("div");
        brandDiv.classList.add("brand");
        brandDiv.innerHTML = `
          <a href="brand-details.html?brand=${brand.brand}">
            <img src="${brand.logo}" alt="${brand.brand}" class="brand-icon">
            <p>${brand.brand}</p>
          </a>
        `;
        brandList.appendChild(brandDiv);
    });
}

// Arama fonksiyonu
function loadSearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query'); // Arama parametresini alıyoruz

    const results = popularCars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));

    const resultsContainer = document.getElementById("search-info");
    resultsContainer.innerHTML = ''; // Önceki sonuçları temizle

    if (results.length > 0) {
        results.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("car-card");
            carDiv.innerHTML = `
                <a href="details.html?car=${car.name}">
                    <img src="images/${car.name}.png" alt="${car.model}" class="car-thumbnail">
                    <p>${car.brand} ${car.model}</p>
                </a>
            `;
            resultsContainer.appendChild(carDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>Hiçbir sonuç bulunamadı.</p>';
    }
}
function applyFiltersAndSorting() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query'); // Arama parametresini alıyoruz

    const sortBy = document.getElementById("sort-by").value; // Sıralama ölçütü
    const sortOrder = document.getElementById("sort-order").value; // Sıralama düzeni

    const selectedBrand = document.getElementById("brand-filter").value.toLowerCase();
    const selectedFuelType = document.getElementById("fuel-type-filter").value.toLowerCase();
    const selectedTransmission = document.getElementById("transmission-filter").value.toLowerCase();
    const selectedDrive = document.getElementById("drive-filter").value.toLowerCase();

    // Filtreleme işlemi
    let filteredResults = popularCars.filter(car => {
        const matchesBrand = selectedBrand === "all" || car.brand.toLowerCase() === selectedBrand;
        const matchesFuelType = selectedFuelType === "all" || car.fuelType.toLowerCase() === selectedFuelType;
        const matchesTransmission = selectedTransmission === "all" || car.transmission.toLowerCase() === selectedTransmission;
        const matchesDrive = selectedDrive === "all" || car.drive.toLowerCase() === selectedDrive;
        const matchesQuery = query ? car.name.toLowerCase().includes(query.toLowerCase()) : true; // Arama parametresini kontrol et

        return matchesBrand && matchesFuelType && matchesTransmission && matchesDrive && matchesQuery;
    });

    // Sıralama işlemi
    const sortedResults = [...filteredResults].sort((a, b) => {
        let valueA, valueB;

        if (sortBy === "year") {
            const yearA = a.year.split("-")[0];
            const yearB = b.year.split("-")[0];
            valueA = parseInt(yearA);
            valueB = parseInt(yearB);
        } else if (sortBy === "enginePower") {
            valueA = parseInt(a.enginePower);
            valueB = parseInt(b.enginePower);
        } else if (sortBy === "popularity") {
            valueA = a.popularity;
            valueB = b.popularity;
        } else if (sortBy === "maxSpeed") {
            valueA = parseInt(a.maxSpeed);
            valueB = parseInt(b.maxSpeed);
        } else {
            valueA = a.name.toLowerCase();
            valueB = b.name.toLowerCase();
        }

        if (sortOrder === "asc") {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });

    // Sonuçları göster
    displayResults(sortedResults);
}

function displayResults(results) {
    const resultsContainer = document.getElementById("search-info");
    resultsContainer.innerHTML = ''; // Önceki sonuçları temizle

    if (results.length > 0) {
        results.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("car-card");
            carDiv.innerHTML = `
                <a href="details.html?car=${car.name}">
                    <img src="images/${car.name}.png" alt="${car.model}" class="car-thumbnail">
                    <p>${car.brand} ${car.model}</p>
                </a>
            `;
            resultsContainer.appendChild(carDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>Hiçbir sonuç bulunamadı.</p>';
    }
} 
function loadPopularCars() {
    const carCardsContainer = document.getElementById("popular-cars");
    popularCars.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("popular-cars");
        carDiv.innerHTML = `
            <a href="details.html?car=${car.name}">
                <img src="images/${car.name}.png" alt="${car.model}" class="car-thumbnail">
                <p>${car.brand} ${car.model}</p>
            </a>
        `;
        carCardsContainer.appendChild(carDiv);
    });
}

// Arama fonksiyonu ve yönlendirme
function searchRedirect() {
    const query = document.getElementById("search-query").value.toLowerCase();
    if (query) {
        // Arama sonuçlarını search.html sayfasına parametre olarak gönder
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
}
function loadCarImage() {
    const urlParams = new URLSearchParams(window.location.search);
    const carName = urlParams.get('car'); // URL parametresinden araba adını alıyoruz

    // Popüler Arabalar listesinden araba verilerini bul
    const car = popularCars.find(car => car.name === carName);

    if (car) {
        const mainContent = document.getElementById("car-image");

        // Başlık
        const title = document.createElement('h1');
        title.textContent = car.brand + " " + car.model;
        mainContent.appendChild(title);

        // Araba Detayları
        const carDetails = document.createElement('div');
        carDetails.classList.add('car-image');
        carDetails.innerHTML = `
            <img src="images/${car.name}.png" alt="${car.model}" class="car-large">
        `;
        mainContent.appendChild(carDetails);
    }
}
function loadCarInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const carName = urlParams.get('car'); // URL parametresinden araba adını alıyoruz

    // Popüler Arabalar listesinden araba verilerini bul
    const car = popularCars.find(car => car.name === carName);

    if (car) {
        const mainContent = document.getElementById("car-info");

        // Üst Kısım
        const topInfo = document.createElement('div');
        topInfo.classList.add('top-info');
        topInfo.innerHTML = `
            <p><strong>Marka:</strong> ${car.brand}</p>
            <p><strong>Model:</strong> ${car.model}</p>
            <p><strong>Yıl:</strong> ${car.year}</p>
            <p><strong>Yakıt Türü:</strong> ${car.fuelType}</p>
            <p><strong>Vites:</strong> ${car.transmission}</p>
            <p><strong>Motor Hacmi:</strong> ${car.engineCapacity}</p>
            <p><strong>Motor Gücü:</strong> ${car.enginePower}</p>
            <p><strong>Çekiş:</strong> ${car.drive}</p>
        `;
        mainContent.appendChild(topInfo);

        // Alt Kısım
        const bottomInfo = document.createElement('div');
        bottomInfo.classList.add('bottom-info');
        bottomInfo.innerHTML = `
            <p><strong>Body Style:</strong> ${car.bodyStyles.map(style => style.style).join(', ')}</p>
            <p><strong>Popülerlik:</strong> ${car.popularity}</p>
            <p><strong>Kullanıcı Kılavuzu:</strong> <a href="${car.userManual}" target="_blank">PDF İndir</a></p>
            <p><strong>Jant Boyutu:</strong> ${car.wheelSize}</p>
            <p><strong>Maksimum Hız:</strong> ${car.maxSpeed}</p>
            <p><strong>Yakıt Tüketimi:</strong> ${car.fuelConsumption}</p>
            <p><strong>Boyutlar:</strong> ${car.dimensions}</p>
            <p><strong>Hızlanma:</strong> ${car.acceleration}</p>
            <p><strong>Koltuk Sayısı:</strong> ${car.seats}</p>
            <p><strong>Ağırlık:</strong> ${car.weight}</p>
            <p><strong>Bagaj Kapasitesi:</strong> ${car.trunkCapacity}</p>
            <p><strong>Fiyat Ortalaması:</strong> ${car.priceAvg}</p>
        `;
        mainContent.appendChild(bottomInfo);
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Bu araba bilgisi bulunamadı.";
        mainContent.appendChild(errorMessage);
    }
}
// Yorumları depolamak için bir dizi
let comments = [];

// Yorum ekleme işlevi

// Yorumları Getir ve Göster
function yorumlariGetir() {
    const arabaIsim = document.getElementById('araba_isim').value;

        // Yorumları almak için fetch ile API'ye istek gönder
        fetch(`php/get-comments.php?car=${encodeURIComponent(arabaIsim)}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    // Yorumları sayfada güncelle
                    const yorumlarDiv = document.getElementById("yorumlar");
                    yorumlarDiv.innerHTML = ""; // Önceki yorumları temizle

                    // Yeni yorumları ekle
                    data.forEach(yorum => {
                        const yorumElementi = document.createElement("div");
                        yorumElementi.classList.add("yorum");
                        yorumElementi.innerHTML = `
                            <p><strong>${yorum.isim}</strong></p>
                            <p>${yorum.yorum}</p>
                            <p>${yorum.tarih}</p>
                        `;
                        yorumlarDiv.appendChild(yorumElementi);
                    });
                }
            })
            .catch(error => {
                console.error("Yorumlar alınırken bir hata oluştu: ", error);
            });
    }

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const arabaIsim = urlParams.get('car'); // "car" parametresini alıyoruz

    // Eğer araba ismi varsa, gizli inputa değer olarak ata
    if (arabaIsim) {
        document.getElementById('araba_isim').value = arabaIsim;
    } else {
        console.log("Araba ismi alınamadı.");
    }

    if (document.getElementById("brand-list")) {
        loadBrands();
    }
    if (document.getElementById("brand-details")) {
        loadBrandDetails();
    }
    if (document.getElementById('popular-cars'))
    {
        loadPopularCars();
    }
    if (document.getElementById("search-info")) {
        loadSearchResults();
    }
    if (document.getElementById("car-info")) {
        loadCarInfo();
    }
    if (document.getElementById("car-image")) {
        loadCarImage();
    }
    
    
    
    if (document.getElementById("yorumFormu")) {
        yorumlariGetir();
    }
    if (document.getElementById("yorumlar")) {
        
        yorumFormu.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(yorumFormu);
    
            fetch("php/add-comment.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data === "success") {
                    yorumlariGetir();
                    yorumFormu.reset();
                } else {
                    alert("Yorum eklenirken bir hata oluştu.");
                }
            });
        });;
    }
    
    
    
    
    
});
