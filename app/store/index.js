import Vue from 'nativescript-vue';
import Vuex from '../vuex';
Vue.use(Vuex);

const cpiStore = new Vuex.Store({
  state: {
    "languages":{
      "sr": {
        "name": "Srpski",
        "img": "sr_flag.png"
      }, 
      "en": {
        "name": "English",
        "img" : "en_flag.png"
      },
      "default": "sr",
      "current": "sr"
    },
    "messages": {
      "e0": {
        "sr": "Nema Internet konekcije",
        "en": "No Internet connection"
      }
    },
    "cities": [
      {
        "name": {
          "sr": "Priboj"
        },
        "locations": [
          {
            "name": {
              "sr": "Kasidol"
            },
            "geo": [
              43.563093280500524,
              19.46004030056084
            ],
            "events": [
              {
                "name": {
                  "sr": "Pokolj civilnog muslimanskog stanovništva od strane JVuO"
                },
                "time": {
                  "sr": "Februar 1943"
                },
                "img": null,
                "text": {
                  "sr": "<p>Kasidol, Zabrnjica, Zagradina, Zašćenje su sela u okolini Priboja, u kojima je Jugoslovenska vojska u otadžbini (JVuO) počinila masovne pokolje civilnog stanovništva, pod komandom majora Pavla Đurišića, po naređenju Dragoslava Mihailovića. Ovaj događaj se u srpskoj istoriografiji retko kada spominje (vid. <a href=\"https://rosalux.rs/rosa-publications/kazna-i-zlocin-2/\">Radanović, 2015</a>), iako je po broju ubijenih civila jedan od najmasovnijih zločina počinjenih na teritoriji Srbije. U Priboju i okolini ne postoji spomenik koji se odnosi na ovaj događaj.</p>"
                },
                "link": null,
                "arch": []
              }
            ]
          }, {
            "name": {
              "sr": "FAP Priboj"
            },
            "geo": [
              43.56991190716238,
              19.527125297240822
            ],
            "events": [
              {
                "name": {
                  "sr": "Spomenik Fabrici automobila Priboj (FAP)"
                },
                "time": {
                  "sr": "1953."
                },
                "img": {
                  "src": null,
                  "title": {
                    "sr": "Spomen tabla Radmilu Lavrenčiću"
                  }
                },
                "text": {
                  "sr": "<p>Fabrika automobila Priboj bio je ključni pokretač razvoja Priboja nakon 2. svetskog rata. Zahvaljujući ovoj fabrici, grad je razvio infrastrukturu, nove škole, proširio se, privukao veliki broj doseljenika iz svih krajeva bivše SFRJ. Takođe, izgradnja Novog Priboja, u velikoj meri se desila zahvaljujući FAPu. Tokom anti-birokratske revolucije krajem 1980ih godina, radništvo FAP ne uspeva da odoli talasu  etničkih podela među radnicima. Danas, fabrika radi sa znatno smanjenim kapacitetima, oslanjajući se na namensku proizvodnju. Nekoliko proizvodnih hala FAP-a je pretvoreno u &quot;slobodnu zonu&quot; u kojoj su smeštene manje privatne fabrike. Jedino sećanje na FAP predstavlja tabla posvećena njenom osnivaču, Radmilu Lavrenčiću. Iako mnogi/e od naših sagovornika/ca smatraju da upravo FAP zaslužuje svoj spomenik, ne postoji ništa što bi posetiocima/ljkama Priboja predstavilo značaj FAPa za istoriju ovog grada.</p>"
                },
                "link": null,
                "arch": []
              }
            ]
          }, {
            "name": "Sjeverin",
            "geo": [
              43.60158222688383,
              19.372491279083185
            ],
            "events": [
              {
                "name": "Otmica i ubistvo Bošnjaka iz Sjeverina",
                "time": "Oktobar 1992.",
                "img": "Spomen obeležje otetim i ubijenim stanovnicima Sjeverina",
                "text" :"<p>Sjeverin je mesto koje pripada opštini Priboj. 22. oktobra 1992., 16 stanovnika Sjeverina, bošnjačke nacionalnosti, oteto je iz lokalnog autobusa, na putu za posao. Otmica se desila na teritoriji BiH, u mestu Mioče. Oteti putnici su odvedeni u Višegrad, gde su nakon svirepog mučenja, ubijeni. Do danas su nađeni posmrtni ostaci samo jedne žrtve. Spomenik u znak sećanja na žrtve je podignut 2015. godine, u Sjeverinu, a u njegovoj izgradnji je učestvovala i opština Priboj.  Ipak, u samom Priboju ne postoji nijedan spomenik, ili tabla, koja podseća na ovaj događaj iz 1990ih.</p>",
                "link": null,
                "arch": []
              }
            ]
          }
        ]
      }, {
        "name": "Beograd",
        "locations": [
          {
            "name": "Studentski kulturni centar (SKC) Beograd",
            "geo": [
              44.806333264540754,
              20.464329307190827
            ],
            "events": [
              {
                "name": "Međunarodna feministička konferencija \"Drug-ca Žena. Žensko pitanje. Novi pristup\"",
                "time": "24. oktobar – 29. oktobar 1978. godine",
                "img": null,
                "text": "<p>U Studentskom kulturnom centru Beograd od 24. Oktobra do 29. oktobra 1978. godine, održana je međunarodna feministička konferencija &quot;Drug-ca Žena. Žensko pitanje. Novi pristup*quot;. Organizovale su je Žarana Papić, Dunja Blažević (tada direktorka SKC) i Jasmina Tešanović, a okupila je žene, zainteresovane za feminističku teoriju i praksu sa jugoslovenskih prostora (prvenstveno iz Beograda, Zagreba, Sarajeva i Ljubljane), zemalja tada Istočnog bloka i Zapadne Evrope. Pod sloganom  &quot;Proleteri svih zemalja, ko vam pere čarape?&quot;, ona predstavlja prvi kritički osvrt u javnom prostoru na proklamovanu, ali uprkos vrlo naprednim zakonskim rešenjima, ne i dostignutu jednakost žena i muškaraca u jugoslovenskom socijalizmu. Ova konferencija je ključno obeležila dalji razvoj feminističkog pokreta u Jugoslaviji. Sa početkom jugoslovenskih ratova tokom devedesetih godina XX veka, gotovo celi feministički pokret se ulio u antiratni otpor, a feminističke aktivistkinje su bile njegove dominantne nositeljke.</p><p>Tokom konferencije razgovaralo se o patrijarhatu, feminizmu i marksizmu, feminizmu i psihoanalizi, seksualnosti, nevidljivosti žena u kulturi i nauci, ali i o svakodnevnom životu žena, diskriminaciji žena u javnoj i privatnoj sferi, dvostrukoj opterećenosti žena, o nasilju nad ženama, o opstajavanju tradicionalnih patrijarhalnih uloga uprkos normativnim rešenjima koja garantuju ravnopravnost… Konferenciji je prisustvovao i značajan broj muškaraca. Nakon njenog završetka, formirane su grupe Žena i društvo, prvo u Zagrebu, a zatim 1980. godine i u Beogradu pri SKC-u.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Fotografija: Feministička konferencija &quot;Drug-ca Žena. Žensko pitanje. Novi pristup&quot;. Izvor: Arhiva SKC.",
                  "Video materijal: <a href=\"https://www.czkd.org/stance/drug-ca-zena-secanje\">Dunja Blažević – Otvaranje konferencije &quot;Drug-ca Žena&quot;</a>. Izvor: Privatna ahiva Jasmine Tešanović/ SKC.",
                  "<a href=\"https://jasminatesanovic.wordpress.com/2019/05/24/drug-ca-zena-skc-belgrade-1978\">Sajt: &quot;Drug-ca Žena&quot;</a>",
                  "&quot;Zamućeno ogledalo slobode&quot;. Expres politika, novembar 1978. godine."
                ]
              }, {
                "name": "Osnivanje Centra za antiratnu akciju (CAA)",
                "time": "15. jul 1991. godine",
                "img": null,
                "text": "<p>Paralelno sa početkom rata u Hrvatskoj u leto-jesen 1991. godine kada počinju i prve masovne mobilizacije građana Srbije za rat, u Studentskom kulturnom centru (SKC) se formiraju i prve mirovne organizacije i antiratne grupe. Tako je ovde 15. jul 1991. godine osnovana jedna od prvih antiratnih organizacija - Centar za antiratnu akciju (CAA). Iz ove organizacije kasnije nastaju i mnoge druge antiratne organizacije i grupe. U njegovom osnivanju učestvovali su između ostalih: <i>Ženski parlament</i> (formiran od strane <i>Beogradskog ženskog lobija</i>, <i>Ženske stranke</i> i grupe <i>Žene i društvo</i>), <i>Udruženje za jugoslovensku inicijativu (UJDI)>/i>, <i>Helsinški parlament građana</i>, <i>Evropski pokret u Jugoslaviji</i>, <i>Forum za etničke odnose</i>, kao i različiti pojedinci/ke.</p><p>CAA je nudio pravnu pomoć prigovaračima savesti i mladićima koji su odbili vojni poziv, organizovao antiratne proteste i mirovne manifestacije, beležio slučajeve etnički motivisanih krivičnih dela, skupljao informacije o ratnohuškačkim medijima, upozoravao na kršenja normi međunarodnog prava. Kao svoje najvažnije i trajne ciljeve, Centar u svom osnivačkom dokumentu navodi: &quot;demilitarizacija Balkanskog poluostrva, njegov ekonomski i demokratski razvoj, miran suživot svih njegovih naroda&quot;. Stojan Cerović, novinar nedeljnika Vreme, bio je prvi predsednik Centra. CAA je imao tesnu saradnju sa antiratnim grupama i pojedincima/kama sa jugoslovenskih prostora, posebno sa Slovenijom, Hrvatskom (Zagreb, Rijeka) i Bosnom i Hercegovinom.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Logo Centar za antiratnu akciju (CAA). Izvor: Privatna arhiva Zorice Trifunović.",
                  "Osnivanje CAA?. Izvor: Muzej devedesetih.",
                  "Sken knjige <i>Govor mržnje. Analiza sadržaja domaćih medija u prvoj polovini 1993. godine.</i> 1994. Beograd: Centar za antiratnu akciju Beograd."
                ]
              }, {
                "name": "Prvo protestno stajanje Žena u crnom protiv rata i nasilja",
                "time": "9. oktobar 1991. godine",
                "img": null,
                "text": "<p>Ispred SKC-a kao protest protiv rata, sveprisutnosti nasilja i zločina, 9. oktobra 1991. godine održano je prvo stajanje u tišini <i>Žena u crnom</i>, jedne od najznačajnih feminističkih i mirovnih grupa sa jugoslovenskih prostora. Nastale su nakon Evropskog karavana mira iz septembra 1991. godine, uz podršku učesnica karavana iz italijanskih <i>Žena u crnom</i>, koje su nastavljale tradiciju izraelske istoimene grupe. Beogradske <i>Žene u crnom</i> pokrenule su feminističke aktivistkinje, mnoge angažovane još od kraja sedamdesetih godina XX veka, od kojih su mnoge učestvovale i u formiranju Centra za antiratnu akciju (CAA), smatrajući da se i u okviru tada nastajućeg antiratnog pokreta, implicitno održava rodna nejednakost. Jedna od osnivačica ŽUC-a o tome kaže: &quot;Naše angažovanje za mir nije naša prirodna uloga, nije naša majčinska dužnost, nego politički izbor i kulturno opredeljenje – da budemo protiv rata, militarista, nacionalista, da im ne dozvolimo da govore u naše ime. Bilo mi je stalo da se u mirovnom pokretu ne ponavljaju, ne reprodukuju neke patrijarhalne uloge podređenosti i nevidljivosti, neravnoteže moći&quot;. Nakon prve godine u kojoj su se stajanja odvijala svake srede ispred SKC-a, protestna stajanja su preseljena na Trg Republike. <i>Žene u crnom</i>, sastavljene od žena, ali i muškaraca različite generacijske i etničke pripadnosti, obrazovnog nivoa, socijalnog statusa, životnih stilova i seksualne orijentacije, aktivne su do danas.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Proglas <i>Žena u crnom</i>, 9. oktobar 1991. Izvor: Arhiva <i>Žena u crnom.</i>",
                  "Proglas protiv mobilizacija i kažnjavanja dezertera, 30. oktobar 1991. Izvor: Arhiva <i>Žena u crnom.</i>",
                  "Fotografija: Protestno stajanje protiv rata u Bosni i Hercegovini (1992). Izvor: Arhiva <i>Žena u crnom.</i>"
                ]
              }, {
                "name": "Osnivanje <i>Udruženja nezavisnih intelektualaca - Beogradski krug</i>",
                "time": "25. januar 1992. godine",
                "img": null,
                "text": "<p>U Studentskom kulturnom centru je 25. januara 1992. godine osnovano <i>Udruženje nezavisnih intelektualaca - Beogradski krug</i>, kao još jedan od glasova otpora vladajućem ratnom režimu u Srbiji, nacionalizmu i nasilju koji su se širili jugoslovenskim prostorima. Na njegovom čelu nalazila su se tri kopredsednika – Miladin Životić, Filip David i Ivan Čolović. Dobro posećene sesije i tribine <i>Beogradskog kruga</i> održavale su se svake subote u podne od početka aprila do kraja juna 1992. godine i početka oktobra iste i kraja februara naredne, 1993. godine. Okupljale su intelektualce/ke, aktiviste/kinje i protivnike/ce rata i nacionalizma iz Srbije, bivših jugoslovenskih republika i inostranstva. Govori članova/ca <i>Beogradskog kruga</i> i njihovih gostiju/ći objavljeni su u dve knjige: &quot;Druga Srbija&quot;, štampana u saradnji sa Centrom za antiratnu akciju (CAA), i &quot;Intelektualci i rat&quot;, u saradnji s knjižarom &quot;Plato&quot; i listom <i>Borba</i>. <i>Beogradski krug</i>, prvo u SKC, a zatim u Domu Omladine, najaktivnije je delovao u periodu od svog osnivanja do 1995. godine. Objašnjavajući značenje termina &quot;Druga Srbija&quot; koji je tada nastao, Radomir Konstantinović, jedan od osnivača Beogradskog kruga, kaže: &quot;Ako vas pitaju šta je ‚Druga Srbija‘ (šta je bila, šta jeste, šta će biti) samo recite: &apos;Druga Srbija&apos; je Srbija koja se ne miri sa zločinom.&quot;</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Spisak pozvanih učesnika/ca na osnivačku skupštinu <i>Beogradskog kruga</i>. Izvor: Muzej devedesetih.",
                  "PDF knjige Aljoša Mimica (prir.). 2002. <i>Druga Srbija – 10 godina posle 1992-2002</i>. Beograd: Helsinški odbor za ljudska prava u Srbiji.",
                  "Sken knjige Miladin Životić. 1997. Contra Bellum. Beograd: Beogradski krug i AKAPIT."
                ]
              }
            ]
          }, {
            "name": "Palata Albanije, Trg Slavija",
            "geo": [
              44.81496297052792,
              20.460164143691376
            ],
            "events": [
              {
                "name": "Antiratna manifestacija &quot;Crni flor&quot;",
                "time": "31. maj 1992. godine",
                "img": null,
                "text": "<p>Najmasovnija antiratna akcija pod nazivom &quot;Crni flor&quot; održana je 31. maja 1992. godine u organizaciji <i>Civilnog pokreta otpora</i>. <i>Civilni pokret otpora</i> pokrenut je u oktobru 1991. godine na inicijativu Nikole Barovića i Biljane Jovanović i okupljao je mirovnjake i mirovnjakinje sa (post)jugoslovenskih prostora. Protestujući protiv rata u Bosni i Hercegovini, opsade Sarajeva i razaranja sela i gradova, oko 100.000 učesnika i učesnica je tokom manifestacije &quot;Crni flor&quot; u znak solidarnosti i žaljenja za žrtvama rata, razvilo crnu traku dužine 1300 metara od Palate Albanije do Slavije. Uz poruku &quot;Mi smo sa vama&quot; upućenu građanima/kama Sarajeva, u apelu sa skupa se upozoravalo da u Sarajevu ljudi svakodnevno stradaju od topovskih granata i snajperskih hitaca, ali i od gladi i nedostatka lekova.</p><p>Akciji su se pridružili i <i>Centar za antiratnu akciju (CAA)</i>, <i>Građanska akcija za mir (GAMA)</i>, <i>Žene u crnom (ŽUC)</i>, <i>Republikanski klub</i>, <i>Helsinški parlament građana</i>, <i>Pokret za mir Pančevo</i>, <i>Filozofsko društvo Srbije</i>, <i>Sociološko društvo Srbije</i>, <i>Srpski omladinski forum</i>, <i>Srpski omladinski savez</i>, <i>sindikat Nezavisnost</i>, kao i neke od opozicionih partija: <i>Srpski pokret obnove (SPO)</i>, <i>Demokratska stranka (DS)</i>, <i>Narodna seljačka stranka</i>, <i>Reformska stranka Srbije</i>, <i>Srpska liberalna stranka</i>.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Antiratna akcija &quot;Crni flor&quot;. Fotografija: Goranka Matić.",
                  "Antiratna akcija &quot;Crni flor&quot;. Fotografija: Goranka Matić.",
                  "&quot;Rat – nesreća za sve&quot;. <i>Večernje novosti</i>, 1. jun 1992. godine. Izvor: Arhiva CPI."
                ]
              }
            ]
          }, {
            "name": "Predsedništvo Republike Srbije",
            "geo": [
              44.80993822216868,
              20.46358728308926
            ],
            "events": [
              {
                "name": "Antiratna akcija &quot;Solidarnost sa svim pobunjenicima rata&quot;",
                "time": "8. oktobar 1991 – 8. februar 1992. godine",
                "img": null,
                "text": "<p>Gotovo odmah nakon protesta &quot;Prekinimo mržnju da prestane rat&quot;, koji je organizovan 5. oktobra ispred Predsedništva Srbije u znak protesta protiv opsade Dubrovnika i solidarnosti sa njegovim stanovnicima/cama, na istom mestu je započela akcija svakodnevnog paljenja sveća od 20.30h do 21h. Akcija se odvijala od 8. oktobra 1991. do 8. februara 1992. godine. Neposredni povod za nju bilo je samoubistvo mobilisanog građevinskog radnika iz Gornjeg Milanovca, Miroslava Milenkovića 20. septembra 1991. godine u Slavoniji, negde između Šida i Tovarnika. Ne mogavši da izdrži pritisak da se opredeli između dva stroja rezervista: onog navodnih izdajnika koji su odbijali da idu u rat i onog navodnih patriota koji su stajali u drugom stroju, Milenković je pucao sebi u glavu.</p><p>Akciju paljenja sveća su pokrenule Nataša Kandić i Biljana Jovanović. Tokom njenog trajanja pod sloganima &quot;Solidarnost sa pobunjenicima protiv rata&quot; i &quot;Za sve poginule u ratu&quot;, upaljeno je gotovo 73 000 sveća. Otvorena je i knjiga žalosti u koju su građani/ke koji/e su zastajali/e uveče pred upaljenim svećama u Pionirskom parku, mogli da upišu svoje poruke. U znak sećanja na Miroslava Milenkovića, Centar za antiratnu akciju (CAA) objavio je knjigu epitafa &quot;Grobnica za Miroslava Milenkovića&quot;.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Akcija paljenje sveća ispred Predsedništva Srbije. Izvor: Arhiva <i>Žena u crnom</i>.",
                  "Sken reprinta knjige <i>Grobnica za Miroslava Milenkovića: Beograđani protiv rata : knjiga epitafa : [oktobar-novembar 1991]</i>."
                ]
              }
            ]
          }, {
            "name": "Trg Republike",
            "geo": [
              44.816369951833664,
              20.460189761217492
            ],
            "events": [
              {
                "name": "Antiratni rok koncert &quot;SOS za mir: Ne računajte na nas&quot;",
                "time": "22. april 1992. godine",
                "img": null,
                "text": "<p>U organizaciji Centra za antiratnu akciju (CAA), na Trgu republike je 22. aprila 1992. održan antiratni rok koncert &quot;SOS za mir ili ne računajte na nas&quot; na kome su učestvovali bendovi <i>Rimtutituki</i>, <i>Boye</i>, <i>Obojeni program</i>, Rambo Amadeus. Koncertu je prethodio &quot;koncert na kamionu&quot; 8. marta 1992. kada je bend <i>Rimtutituki</i>, sastavljen od članova <i>Ekaterine Velike (EKV)</i>, <i>Električnog orgazma</i> i <i>Partibrejkersa</i> u kamionu kružio gradom, puštajući pesmu koju su snimili uz podršku omladinskog radija B92 &quot;Slušaj &apos;vamo&quot; sa refrenom &quot;Mir, brate, mir&quot;. Prema različitim procenama, koncertu &quot;SOS za mir: Ne računajte na nas&quot; je prisustvovalo između 55.000 i 100.000 ljudi. Prenosila ga je TV Politika, a program je vodila novinarka Dubravka (Duca) Marković, voditeljka izuzetno popularne muzičke emisije &quot;Hit meseca&quot; na TV Beograd (koji je 1. januara 1992. godine ušao u sastav novoformirane Radio Televizija Srbije - RTS). Na režimskoj RTS, antiratni koncert je predstavljen kao zabava za 5000 ljudi. Godinama kasnije, na pitanje da li su tada verovali da će muzikom zaustaviti rat, Srđan (Gile) Marković iz <i>Električnog orgazma</i>, odgovara negativno, ali da je ideja bila &quot;da naša pesma nekako dođe do naših prijatelja sa druge strane barijere i da im kaže na kojim se mi pozicijama nalazimo u tom ludilu koje eskalira&quot;.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "<a href=\"https://www.youtube.com/watch?v=S-TobTR5NdY\">Video klip sa koncerta &quot;SOS za mir ili ne računajte na nas&quot;",
                  "Fotografije sa kocerta &quot;SOS za mir ili ne računajte na nas&quot;. Fotografija: Goranka Matić.",
                  "Recenzija pesme &quot;Slušaj &apos;vamo&quot;, RTV revija, april 1992."
                ]
              }, {
                "name": "Protestna stajanja <i>Žena u crnom</i>",
                "time": "1992- 1995. godine",
                "img": null,
                "text": "<p>Nakon prvih stajanja ispred Studentskog kulturnog centra (SKC), protestna stajanje feminističke i mirovne grupe <i>Žene u crnom</i> preseljena su na Trg republike. U periodu od 1992. do potpisivanja Dejtonskog sporazuma krajem 1995. godine, one su na tom mestu svake srede protestvovale protiv rata, etničkog čišćenja, nasilja, mržnje i straha od drugih i drugačijih. U crnoj odeći kao simbolu žalosti, ali i pobune, mirno stojeći u tišini, skretale su pažnju na one za čiju patnju nije bilo mesta u zvaničnim medijima i govorima političkih zvaničnika i tražile pravdu za one koje je srpski nacionalizam učinio žrtvama. Svojim parolama &quot;Ne u naše ime&quot;, &quot;Uvek neposlušne&quot; i &quot;Ne daj se od svojih prevariti&quot;, problematizovale su privid saglasnosti za vođenje rata koji je ratni režim nametao. Ulične akcije su kombinovane sa drugim aktivnostima kao što su pomoć dezerterima, rad sa izbeglicama, dokumentovanje etnonacionalističkih zločina i povezivanje sa drugim mirovnim grupama i aktivistima/kinjama sa (post)jugoslovenskih prostora. Nakon 1995. godine Žene u crnom su do danas nastavile sa organizovanjem uličnih akcija oko određenih datuma i u zavisnosti od političkih događanja, opirući se nasilju, militarizmu, rasizmu, seksizmu i homofobiji i dosledno zastupajući ideje nenasilja, solidarnosti i univerzalnog ljudskog dostojanstva.</p>",
                "link": "https://www.cpi.rs/",
                "arch": [
                  "Stajanje ŽUC-a povodom rata u BIH (1993). Fotografija: Goranka Matić.",
                  "Javni čas istorije (1994). Izvor: Arhiva ŽUC-a.",
                  "Proglas ŽUC- a povodom 7 godine od osnivanja 9. oktobra 1998. Izvor: Arhiva Žena u crnom."
                ]
              }
            ]
          }
        ]
      }
	  ]
  },
  getLanguages: state => {
    return state.languages
  },
  getErrorMessage: (state) => (errorCode) => {
    let message = state[errorCode]
    let defLng = state.languages.default
    let curLng = state.languages.current
    return message[curLng] ? message[curLng] : message[defLng]
  },
  getCities: state => {
    let defLng = state.languages.default
    let curLng = state.languages.current
    return state.cities.map(city => {
      return city.name[curLng] ? city.name[curLng] : city.name[defLng]
    })
  },
   getLocations: (state) => (cityNo) => {
    let locations = state.cities.length <= cityNo ? state.cities[cityNo].locations : []
    let defLng = state.languages.default
    let curLng = state.languages.current
    return locations.map(location => {
      return location.name[curLng] ? location.name[curLng] : location.name[defLng]
    })
   }
})

export default cpiStore