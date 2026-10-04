# Endpoint audit / 地址检测 / URL 検査

[Methodology](METHODOLOGY.md) · [CSV](../dist/endpoint-audit.csv) · [Raw observations](../research/endpoint-audit-2026-10-04.json)

Observed 2026-10-04T12:54:22.751173+00:00 to 2026-10-04T13:08:45.881295+00:00. 2024 historical candidate URLs. 1709 returned recognizable feed XML with entries. Other outcomes: 315. This is not an official-feed, freshness or journal-identity verification. 每个地址的失败原因单独保留；不能据此判断期刊没有官方 RSS。各 URL の結果は、公式性・誌名・更新頻度の確認ではありません。

| Outcome | URLs |
| --- | ---: |
| access-blocked | 75 |
| empty-feed | 5 |
| feed-with-entries | 1709 |
| html-or-disallowed-doctype | 13 |
| http-error | 16 |
| network-or-safety-error | 83 |
| not-feed-xml | 14 |
| not-found | 10 |
| oversize | 1 |
| rate-limited | 3 |
| timeout | 14 |
| tls-or-network-error | 81 |

| Candidate title | URL | Outcome | HTTP | Format | Entries | Checked (UTC) |
| --- | --- | --- | ---: | --- | ---: | --- |
| ACADIENSIS | [feed](<https://journals.lib.unb.ca/index.php/Acadiensis/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:56:31.984464+00:00 |
| ACCIDENT ANALYSIS AND PREVENTION | [feed](<https://rss.sciencedirect.com/publication/science/00014575>) | feed-with-entries | 200 | rss | 61 | 2026-10-04T12:58:46.515802+00:00 |
| Acciones e Investigaciones Sociales | [feed](<https://papiro.unizar.es/ojs/index.php/ais/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 100 | 2026-10-04T12:57:23.183721+00:00 |
| ACM Transactions on Computational Logic | [feed](<https://dl.acm.org/action/showFeed?type=etoc&feed=rss&jc=tocl>) | feed-with-entries | 200 | rdf | 5 | 2026-10-04T12:55:17.749727+00:00 |
| ACM Transactions on Economics and Computation | [feed](<https://dl.acm.org/action/showFeed?type=etoc&feed=rss&jc=teac>) | feed-with-entries | 200 | rdf | 7 | 2026-10-04T13:00:52.276682+00:00 |
| ACM TRANSACTIONS ON MATHEMATICAL SOFTWARE | [feed](<https://dl.acm.org/action/showFeed?type=etoc&feed=rss&jc=toms>) | feed-with-entries | 200 | rdf | 10 | 2026-10-04T13:01:14.810121+00:00 |
| ACM Transactions on Spatial Algorithms and Systems | [feed](<https://dl.acm.org/action/showFeed?type=etoc&feed=rss&jc=tsas>) | feed-with-entries | 200 | rdf | 6 | 2026-10-04T13:01:25.442415+00:00 |
| ACTA AGROBOTANICA | [feed](<https://pbsociety.org.pl/journals/index.php/aa/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T12:57:24.031175+00:00 |
| Acta Angiologica | [feed](<https://journals.viamedica.pl/acta_angiologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:56:40.756787+00:00 |
| ACTA ASTRONOMICA | [feed](<https://rss.sciencedirect.com/publication/science/00945765>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:01:09.122061+00:00 |
| Acta Bioethica | [feed](<https://actabioethica.uchile.cl/index.php/AB/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:54:33.005671+00:00 |
| Acta Brasiliensis | [feed](<https://actabra.revistas.ufcg.edu.br/index.php/actabra/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:54:33.181617+00:00 |
| ACTA CARSOLOGICA | [feed](<https://ojs.zrc-sazu.si/carsologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:57:16.215694+00:00 |
| Acta Colombiana de Psicologia | [feed](<https://actacolombianapsicologia.ucatolica.edu.co/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:54:33.574747+00:00 |
| Acta Cybernetica | [feed](<https://cyber.bibl.u-szeged.hu/index.php/actcybern/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:55:09.795351+00:00 |
| Acta Geographica Slovenica-Geografski Zbornik | [feed](<https://ojs.zrc-sazu.si/ags/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T13:01:00.852882+00:00 |
| Acta Historica Universitatis Klaipedensis | [feed](<https://e-journals.ku.lt/journal/AHUK/feeds/latest>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:20.268601+00:00 |
| Acta Mathematica Universitatis Comenianae | [feed](<http://www.iam.fmph.uniba.sk/amuc/ojs/index.php/amuc/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error | 302 |  |  | 2026-10-04T12:59:54.630696+00:00 |
| Acta Neophilologica | [feed](<https://journals.uni-lj.si/ActaNeophilologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:40.257495+00:00 |
| ACTA NEUROBIOLOGIAE EXPERIMENTALIS | [feed](<https://ane.pl/index.php/ane/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:54:45.253805+00:00 |
| Acta Otorhinolaryngologica Italica | [feed](<https://www.actaitalica.it/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:59:19.052627+00:00 |
| Acta Pharmaceutica Sinica B | [feed](<https://rss.sciencedirect.com/publication/science/22113835>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:22.235867+00:00 |
| ACTA PHARMACOLOGICA SINICA | [feed](<https://www.nature.com/aps.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:00:15.070930+00:00 |
| Acta Philosophica | [feed](<https://www.actaphilosophica.it/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:59:19.212203+00:00 |
| Acta Poetica | [feed](<https://revistas-filologicas.unam.mx/acta-poetica/index.php/ap/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:58:10.980803+00:00 |
| ACTA PSYCHOLOGICA | [feed](<https://rss.sciencedirect.com/publication/science/00016918>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:29.161358+00:00 |
| Acta Scientiarum Polonorum-Hortorum Cultus | [feed](<https://czasopisma.up.lublin.pl/asphc/gateway/plugin/AnnouncementFeedGatewayPlugin/rss2>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:11.631551+00:00 |
| ACTA SCIENTIARUM-AGRONOMY | [feed](<https://www.scielo.br/journal/asagr/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:00:34.651690+00:00 |
| ACTA SOCIETATIS BOTANICORUM POLONIAE | [feed](<https://pbsociety.org.pl/journals/index.php/asbp/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T13:01:00.935474+00:00 |
| ACTA TROPICA | [feed](<https://rss.sciencedirect.com/publication/science/0001706X>) | feed-with-entries | 200 | rss | 87 | 2026-10-04T13:01:36.018788+00:00 |
| Acta Universitatis Lodziensis Folia Litteraria Romanica | [feed](<https://www.czasopisma.uni.lodz.pl/romanica/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:59:39.724994+00:00 |
| Acta Veterinaria Eurasia | [feed](<https://actavet.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 37 | 2026-10-04T12:54:33.650448+00:00 |
| ACTA VIROLOGICA | [feed](<https://www.frontierspartnerships.org/journals/acta-virologica/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:59:50.806055+00:00 |
| ACTA ZOOLOGICA ACADEMIAE SCIENTIARUM HUNGARICAE | [feed](<https://ojs.mtak.hu/index.php/actazool/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:57:10.328337+00:00 |
| Actualizaciones en Osteologia | [feed](<https://ojs.osteologia.org.ar/ojs33010/index.php/osteologia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:57:10.864640+00:00 |
| ADDICTIVE BEHAVIORS | [feed](<https://rss.sciencedirect.com/publication/science/03064603>) | feed-with-entries | 200 | rss | 59 | 2026-10-04T13:01:38.827789+00:00 |
| ADMET and DMPK | [feed](<https://pub.iapchem.org/ojs/index.php/admet/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:41.347806+00:00 |
| Administracao Publica e Gestao Social | [feed](<https://periodicos.ufv.br/apgs/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:33.026859+00:00 |
| Administracao-Ensino e Pesquisa | [feed](<https://raep.emnuvens.com.br/raep/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:57:47.775451+00:00 |
| ADVANCED DRUG DELIVERY REVIEWS | [feed](<https://rss.sciencedirect.com/publication/science/0169409X>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:40.754163+00:00 |
| Advances in Applied Energy | [feed](<https://rss.sciencedirect.com/publication/science/26667924>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:01:42.530267+00:00 |
| ADVANCES IN APPLIED MATHEMATICS | [feed](<https://rss.sciencedirect.com/publication/science/01968858>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:01:43.889356+00:00 |
| Advances in Applied Mathematics and Mechanics | [feed](<https://global-sci.com/aamm/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T12:55:47.587332+00:00 |
| Advances in Cancer Biology-Metastasis | [feed](<https://rss.sciencedirect.com/publication/science/26673940>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:01:45.392599+00:00 |
| Advances in Civil and Architectural Engineering | [feed](<https://ojs.srce.hr/acae/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:13.216624+00:00 |
| ADVANCES IN COLLOID AND INTERFACE SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00018686>) | feed-with-entries | 200 | rss | 61 | 2026-10-04T13:01:46.801947+00:00 |
| Advances in Geo-Energy Research | [feed](<https://www.yandy-ager.com/index.php/ager/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T13:00:49.756417+00:00 |
| Advances in Industrial and Manufacturing Engineering | [feed](<https://rss.sciencedirect.com/publication/science/26669129>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:01:47.740388+00:00 |
| Advances in Life Course Research | [feed](<https://rss.sciencedirect.com/publication/science/15694909>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:01:48.894319+00:00 |
| ADVANCES IN SPACE RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/02731177>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:49.620056+00:00 |
| AEROSPACE AMERICA | [feed](<https://aerospaceamerica.aiaa.org/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:54:36.181087+00:00 |
| Afkar-Jurnal Akidah & Pemikiran Islam-Journal of Aqidah & Islamic Thought | [feed](<https://ijie.um.edu.my/index.php/afkar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:02.555960+00:00 |
| AFRICAN ENTOMOLOGY | [feed](<https://www.africanentomology.com/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:19.404626+00:00 |
| African Journal of Business Ethics | [feed](<https://ajobe.journals.ac.za/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:54:38.700364+00:00 |
| African Journal of Disability | [feed](<https://ajod.org/index.php/ajod/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:54:39.087882+00:00 |
| African Journal of Information Systems | [feed](<https://digitalcommons.kennesaw.edu/ajis/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:15.882704+00:00 |
| African Journal of Laboratory Medicine | [feed](<https://ajlmonline.org/index.php/ajlm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:54:38.654146+00:00 |
| African Journal of Primary Health Care & Family Medicine | [feed](<https://phcfm.org/index.php/phcfm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:35.955287+00:00 |
| African Vision and Eye Health Journal | [feed](<https://avehjournal.org/index.php/aveh/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T12:54:51.536934+00:00 |
| AGGRESSION AND VIOLENT BEHAVIOR | [feed](<https://rss.sciencedirect.com/publication/science/13591789>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:01:50.382510+00:00 |
| Agrarforschung Schweiz | [feed](<https://www.agrarforschungschweiz.ch/comments/feed/>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T12:59:20.058041+00:00 |
| AGRICULTURAL AND FOOD SCIENCE | [feed](<https://journal.fi/afs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:22.135140+00:00 |
| AGRICULTURAL AND FOREST METEOROLOGY | [feed](<https://rss.sciencedirect.com/publication/science/01681923>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:51.341838+00:00 |
| Agricultural and Resource Economics-International Scientific E-Journal | [feed](<https://are-journal.com/are/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:54:49.620375+00:00 |
| Agricultural Water Management | [feed](<https://rss.sciencedirect.com/publication/science/03783774>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:52.184453+00:00 |
| Agrociencia Uruguay | [feed](<http://www.scielo.edu.uy/rss.php?pid=2730-506620260001&lang=en>) | http-error | 502 |  |  | 2026-10-04T13:00:35.845350+00:00 |
| AgroLife Scientific Journal | [feed](<https://agrolifejournal.usamv.ro/index.php/agrolife/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 25 | 2026-10-04T12:54:36.711652+00:00 |
| Al-Shajarah | [feed](<https://journals.iium.edu.my/shajarah/index.php/shaj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:31.885443+00:00 |
| ALBERTA LAW REVIEW | [feed](<https://albertalawreview.com/index.php/ALR/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:54:40.444438+00:00 |
| ALCHERINGA | [feed](<https://onlinekpmggc.org.in/comments/feed/>) | empty-feed | 200 | rss | 0 | 2026-10-04T12:57:19.212925+00:00 |
| Alea-Estudos Neolatinos | [feed](<https://revistas.ufrj.br/index.php/alea/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:58:25.920347+00:00 |
| Almatourism-Journal of Tourism Culture and Territorial Development | [feed](<https://almatourism.unibo.it/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:54:41.597089+00:00 |
| Alpha-Revista de Artes Letras y Filosofia | [feed](<https://revistaalpha.ulagos.cl/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:58.898584+00:00 |
| Alternativas. Cuadernos de Trabajo Social | [feed](<https://alternativasts.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:54:41.619213+00:00 |
| AM Journal of Art and Media Studies | [feed](<https://fmkjournals.fmk.edu.rs/index.php/AM/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:55:40.823753+00:00 |
| Amaltea-Revista de MitocrItica | [feed](<https://revistas.ucm.es/index.php/AMAL/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:18.653043+00:00 |
| Amazonia Investiga | [feed](<https://amazoniainvestiga.info/index.php/amazonia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:54:42.228323+00:00 |
| AME Case Reports | [feed](<https://acr.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 58 | 2026-10-04T12:54:32.807589+00:00 |
| AMEGHINIANA | [feed](<https://www.ameghiniana.org.ar/index.php/ameghiniana/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T12:59:22.854179+00:00 |
| America Latina Hoy-Revista de Ciencias Sociales | [feed](<https://alh.usal.es/index.php/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:54:41.574516+00:00 |
| America sin Nombre | [feed](<https://americasinnombre.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:54:43.232330+00:00 |
| AMERICAN HEART JOURNAL | [feed](<https://rss.sciencedirect.com/publication/science/00028703>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:01:52.799236+00:00 |
| American Heart Journal Plus: Cardiology Research and Practice | [feed](<https://rss.sciencedirect.com/publication/science/26666022>) | feed-with-entries | 200 | rss | 76 | 2026-10-04T13:01:54.013285+00:00 |
| AMERICAN JOURNAL OF EMERGENCY MEDICINE | [feed](<https://rss.sciencedirect.com/publication/science/07356757>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:54.961150+00:00 |
| American Journal of Obstetrics & Gynecology MFM | [feed](<https://rss.sciencedirect.com/publication/science/25899333>) | feed-with-entries | 200 | rss | 60 | 2026-10-04T13:01:56.091161+00:00 |
| AMERICAN JOURNAL OF ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS | [feed](<https://rss.sciencedirect.com/publication/science/08895406>) | feed-with-entries | 200 | rss | 83 | 2026-10-04T13:01:57.396428+00:00 |
| AMERICAN JOURNAL OF PATHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00029440>) | feed-with-entries | 200 | rss | 65 | 2026-10-04T13:01:58.162293+00:00 |
| American Journal of Preventive Cardiology | [feed](<https://rss.sciencedirect.com/publication/science/26666677>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:58.921712+00:00 |
| AMPHIBIA-REPTILIA | [feed](<https://seh-herpetology.org/comments/feed/>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:01.046281+00:00 |
| Anacronismo e Irrupcion | [feed](<https://publicaciones.sociales.uba.ar/index.php/anacronismo/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:41.894644+00:00 |
| ANAEROBE | [feed](<https://rss.sciencedirect.com/publication/science/10759964>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:02:00.290726+00:00 |
| Anaesthesia and Intensive Care Medicine | [feed](<https://rss.sciencedirect.com/publication/science/14720299>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:02:01.004812+00:00 |
| Anales AFA | [feed](<https://anales.fisica.org.ar/index.php/analesafa/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:54:43.998540+00:00 |
| Anales de Historia del Arte | [feed](<https://revistas.ucm.es/index.php/ANHA/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:04.976548+00:00 |
| Anales de la Facultad de Medicina-Universidad de la Republica Uruguay | [feed](<https://revistas.udelar.edu.uy/OJS/index.php/anfamed/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:58:22.294218+00:00 |
| Anales de Literatura Chilena | [feed](<https://analesliteraturachilena.letras.uc.cl/index.php/alch/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:54:44.490603+00:00 |
| Anales de Literatura Espanola | [feed](<https://ale.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:54:40.761698+00:00 |
| Anales de Psicologia | [feed](<https://revistas.um.es/analesps/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:26.905298+00:00 |
| Anales del Instituto de Actuarios Espanoles | [feed](<https://revistas.actuarios.org/index.php/aiae/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:58:12.844873+00:00 |
| Anales del Sistema Sanitario De Navarra | [feed](<https://scielo.isciii.es/rss.php?pid=1137-662720240003&lang=en>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T12:58:58.531063+00:00 |
| Analysis in Theory and Applications | [feed](<https://global-sci.com/ata/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T13:00:53.524782+00:00 |
| ANALYST | [feed](<http://feeds.rsc.org/rss/an>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T12:55:37.621787+00:00 |
| Analytic Methods in Accident Research | [feed](<https://rss.sciencedirect.com/publication/science/22136657>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:02:02.273749+00:00 |
| Analytica Chimica Acta | [feed](<https://rss.sciencedirect.com/publication/science/00032670>) | feed-with-entries | 200 | rss | 87 | 2026-10-04T13:02:02.823472+00:00 |
| ANASTHESIOLOGIE & INTENSIVMEDIZIN | [feed](<https://www.ai-online.info/?format=feed&type=rss>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T12:59:21.430199+00:00 |
| Andes Pediatrica | [feed](<http://www.scielo.cl/rss.php?pid=2452-605320250006&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:00:35.819656+00:00 |
| ANNALES DE DERMATOLOGIE ET DE VENEREOLOGIE | [feed](<https://rss.sciencedirect.com/publication/science/01519638>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:02:04.370226+00:00 |
| ANNALES DE L INSTITUT FOURIER | [feed](<https://aif.centre-mersenne.org/fr/latest/feed/aif/>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:54:37.181592+00:00 |
| ANNALES DE PALEONTOLOGIE | [feed](<https://rss.sciencedirect.com/publication/science/07533969>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:02:05.265162+00:00 |
| Annales Fennici Mathematici | [feed](<https://afm.journal.fi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:54:36.199321+00:00 |
| ANNALES SCIENTIFIQUES DE L ECOLE NORMALE SUPERIEURE | [feed](<https://annales-ens.centre-mersenne.org/index.php/ASENS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:54:45.390025+00:00 |
| Annales Universitatis Paedagogicae Cracoviensis-Studia Mathematica | [feed](<https://studmath.uken.krakow.pl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 2 | 2026-10-04T12:59:04.871447+00:00 |
| ANNALI DELL ISTITUTO SUPERIORE DI SANITA | [feed](<https://annali.iss.it/index.php/anna/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T12:54:45.543112+00:00 |
| Annali di Botanica | [feed](<https://rosa.uniroma1.it/rosa04/annali_di_botanica/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:58:46.167389+00:00 |
| ANNALS OF ANATOMY-ANATOMISCHER ANZEIGER | [feed](<https://rss.sciencedirect.com/publication/science/09409602>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:02:06.090723+00:00 |
| Annals of Cardiothoracic Surgery | [feed](<https://www.annalscts.com//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:59:23.688714+00:00 |
| Annals of Forest Research | [feed](<https://www.afrjournal.org/index.php/afr/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:19.730192+00:00 |
| Annals of Gastroenterology | [feed](<http://www.annalsgastro.gr/index.php/annalsgastro/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:59:23.831234+00:00 |
| Annals of Geriatric Medicine and Research | [feed](<https://www.e-agmr.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 867 | 2026-10-04T12:59:41.482428+00:00 |
| Annals of Hepatology | [feed](<https://rss.sciencedirect.com/publication/science/16652681>) | feed-with-entries | 200 | rss | 89 | 2026-10-04T13:02:06.910601+00:00 |
| Annals of Joint | [feed](<https://aoj.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:54:47.067247+00:00 |
| Annals of Laparoscopic and Endoscopic Surgery | [feed](<https://ales.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:54:41.300345+00:00 |
| ANNALS OF TOURISM RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/01607383>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:02:08.123487+00:00 |
| ANNUAL REVIEWS IN CONTROL | [feed](<https://rss.sciencedirect.com/publication/science/13675788>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:02:08.798566+00:00 |
| Anthropological Measurements of Philosophical Research | [feed](<https://ampr.ust.edu.ua/gateway/plugin/AnnouncementFeedGatewayPlugin/rss2>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T12:54:43.552669+00:00 |
| Anthropological Notebooks | [feed](<https://anthropological-notebooks.zrc-sazu.si/Notebooks/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:54:46.019974+00:00 |
| Anthropology & Aging | [feed](<https://anthro-age.pitt.edu/ojs/anthro-age/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:54:45.863919+00:00 |
| Anuario de Filosofia del Derecho | [feed](<https://revistas.mjusticia.gob.es/index.php/AFD/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:58:16.222399+00:00 |
| Anuario de Historia de la Iglesia | [feed](<https://revistas.unav.edu/index.php/anuario-de-historia-iglesia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:58:28.265711+00:00 |
| Aotearoa New Zealand Social Work | [feed](<https://anzswjournal.nz/anzsw/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:54:46.123606+00:00 |
| Application of Clinical Genetics | [feed](<https://www.dovepress.com/feed/journal/36>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:59:40.502986+00:00 |
| APPLIED ACOUSTICS | [feed](<https://rss.sciencedirect.com/publication/science/0003682X>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:02:09.545274+00:00 |
| APPLIED AND COMPUTATIONAL HARMONIC ANALYSIS | [feed](<https://rss.sciencedirect.com/publication/science/10635203>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:02:10.420206+00:00 |
| Applied Biological Research | [feed](<https://acspublisher.com/journals/index.php/abr/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:54:32.841467+00:00 |
| APPLIED CATALYSIS A-GENERAL | [feed](<https://rss.sciencedirect.com/publication/science/0926860X>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:02:11.287201+00:00 |
| APPLIED ENERGY | [feed](<https://rss.sciencedirect.com/publication/science/03062619>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:02:12.414909+00:00 |
| APPLIED NURSING RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/08971897>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:02:13.558978+00:00 |
| Applied Radiation and Isotopes | [feed](<https://rss.sciencedirect.com/publication/science/09698043>) | feed-with-entries | 200 | rss | 96 | 2026-10-04T13:02:15.090594+00:00 |
| Approaching Religion | [feed](<https://journal.fi/ar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:54.123013+00:00 |
| Apuntes-Revista de Ciencias Sociales | [feed](<https://revistas.up.edu.pe/index.php/apuntes/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:33.814445+00:00 |
| Aquaculture Reports | [feed](<https://rss.sciencedirect.com/publication/science/23525134>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:02:16.046968+00:00 |
| AQUATIC BOTANY | [feed](<https://rss.sciencedirect.com/publication/science/03043770>) | feed-with-entries | 200 | rss | 29 | 2026-10-04T13:02:16.909520+00:00 |
| Archaeologia Baltica | [feed](<https://e-journals.ku.lt/journal/AB/feeds/latest>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:52.376677+00:00 |
| Archeologicke Rozhledy | [feed](<https://archeologickerozhledy.cz/index.php/ar/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:49.476881+00:00 |
| ARCHITECTURAL RECORD | [feed](<https://www.architecturalrecord.com/rss/articles>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:59:25.157740+00:00 |
| Archives of Acoustics | [feed](<https://acoustics.ippt.pan.pl/index.php/aa/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T12:54:32.684492+00:00 |
| Archives of Aesthetic Plastic Surgery | [feed](<https://e-aaps.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 600 | 2026-10-04T12:55:19.952909+00:00 |
| ARCHIVES OF MECHANICS | [feed](<https://am.ippt.pan.pl/index.php/am/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T12:54:42.206474+00:00 |
| ARCHIVIO STORICO ITALIANO | [feed](<https://www.deputazionetoscana.it/wordpress/?feed=rss2>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:39.908902+00:00 |
| ARCHIVOS DE BRONCONEUMOLOGIA | [feed](<https://rss.sciencedirect.com/publication/science/03002896>) | feed-with-entries | 200 | rss | 69 | 2026-10-04T13:02:17.710657+00:00 |
| Archivos de Medicina | [feed](<https://www.archivosdemedicina.com/rss.xml>) | timeout |  |  |  | 2026-10-04T12:59:25.206060+00:00 |
| ARCHIVOS LATINOAMERICANOS DE NUTRICION | [feed](<https://www.alanrevista.org/feed/>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T12:59:22.810417+00:00 |
| Archiwa Biblioteki i Muzea Koscielne | [feed](<https://czasopisma.kul.pl/index.php/abmk/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:10.500838+00:00 |
| ARCTIC | [feed](<https://www.arctic.de/us/blog.rss>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:59:25.792455+00:00 |
| ArDIn-Arte Diseno e Ingenieria | [feed](<https://polired.upm.es/index.php/ardin/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:38.452948+00:00 |
| Argentinian Journal of Applied Linguistics | [feed](<https://ajal.faapi.org.ar/ojs-3.3.0-5/index.php/AJAL/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:54:37.565403+00:00 |
| Armenian Journal of Mathematics | [feed](<https://armjmath.sci.am/index.php/ajm/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:54:49.901368+00:00 |
| ARO-The Scientific Journal of Koya University | [feed](<https://aro.koyauniversity.org/index.php/aro/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:54:49.942526+00:00 |
| Arquitecturas del Sur | [feed](<https://revistaschilenas.uchile.cl/feed/rss_1.0/2250/23448>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T12:58:35.196714+00:00 |
| ARQUIVO BRASILEIRO DE MEDICINA VETERINARIA E ZOOTECNIA | [feed](<https://www.scielo.br/journal/abmvz/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:13.290951+00:00 |
| Arquivos Brasileiros de Cardiologia | [feed](<https://www.scielo.br/journal/abc/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:23.831199+00:00 |
| ARQUIVOS BRASILEROS DE PSICOLOGIA | [feed](<https://revistas.ufrj.br/index.php/abp/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:01:05.825365+00:00 |
| Arte y Ciudad-Revista de Investigacion | [feed](<https://arteyciudad.com/revista/ayc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:54:50.018950+00:00 |
| ARTFORUM INTERNATIONAL | [feed](<https://www.artforum.com/feed/rss/>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T12:59:26.062250+00:00 |
| ARTHROPOD STRUCTURE & DEVELOPMENT | [feed](<https://rss.sciencedirect.com/publication/science/14678039>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:02:18.353566+00:00 |
| ARTS IN PSYCHOTHERAPY | [feed](<https://rss.sciencedirect.com/publication/science/01974556>) | feed-with-entries | 200 | rss | 56 | 2026-10-04T13:02:19.686844+00:00 |
| Asia Pacific Management Review | [feed](<https://rss.sciencedirect.com/publication/science/10293132>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:02:21.561023+00:00 |
| Asia-Pacific Journal of Sport Medicine Arthroscopy Rehabilitation and Technology | [feed](<https://rss.sciencedirect.com/publication/science/22146873>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:02:22.308557+00:00 |
| Asian Journal of Psychiatry | [feed](<https://rss.sciencedirect.com/publication/science/18762018>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:02:23.654350+00:00 |
| Asian Journal of Social Science | [feed](<https://rss.sciencedirect.com/publication/science/15684849>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:02:24.486323+00:00 |
| Asian Spine Journal | [feed](<https://www.asianspinejournal.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 930 | 2026-10-04T12:59:26.363488+00:00 |
| Asian Studies-Azijske Studije | [feed](<https://journals.uni-lj.si/as/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:57.117796+00:00 |
| Asiatic-IIUM Journal of English Language and Literature | [feed](<https://journals.iium.edu.my/asiatic/index.php/ajell/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T13:00:54.731649+00:00 |
| Aspasia | [feed](<https://www.aspasiaphilosophy.com/posts.rss>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T12:59:28.002741+00:00 |
| Astrolabio-Nueva Epoca | [feed](<https://www.scielo.org.ar/rss.php?pid=1668-751520250002&lang=en>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:00:35.989770+00:00 |
| ASTROPARTICLE PHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/09276505>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:02:25.536811+00:00 |
| Atmospheric and Oceanic Science Letters | [feed](<https://rss.sciencedirect.com/publication/science/16742834>) | feed-with-entries | 200 | rss | 55 | 2026-10-04T13:02:26.203841+00:00 |
| Atmospheric Environment-X | [feed](<https://rss.sciencedirect.com/publication/science/25901621>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:02:27.588809+00:00 |
| Atmospheric Pollution Research | [feed](<https://rss.sciencedirect.com/publication/science/13091042>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:02:28.541295+00:00 |
| ATOM INDONESIA | [feed](<https://atomindonesia.brin.go.id/index.php/aij/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:51.342703+00:00 |
| ATOMIC DATA AND NUCLEAR DATA TABLES | [feed](<https://rss.sciencedirect.com/publication/science/0092640X>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:02:30.220324+00:00 |
| AURIS NASUS LARYNX | [feed](<https://rss.sciencedirect.com/publication/science/03858146>) | feed-with-entries | 200 | rss | 60 | 2026-10-04T13:02:30.915770+00:00 |
| Australasian Journal of Educational Technology | [feed](<https://ajet.org.au/index.php/AJET/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:38.035008+00:00 |
| Australasian Journal of Logic | [feed](<https://ojs.victoria.ac.nz/ajl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:57:15.519295+00:00 |
| AUSTRALIAN AND NEW ZEALAND JOURNAL OF PUBLIC HEALTH | [feed](<https://rss.sciencedirect.com/publication/science/13260200>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:02:31.780153+00:00 |
| Australian Journal of Indigenous Education | [feed](<https://ajie.atsis.uq.edu.au/ajie/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:38.052382+00:00 |
| Australian Journal of Otolaryngology | [feed](<https://www.theajo.com//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T13:00:43.860817+00:00 |
| Australian Journal of Teacher Education | [feed](<https://ro.ecu.edu.au/ajte/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:58:46.129878+00:00 |
| Austrian Journal of Statistics | [feed](<https://ajs.or.at/index.php/ajs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:54:40.318065+00:00 |
| Avances en Psicologia Latinoamericana | [feed](<https://revistas.urosario.edu.co/index.php/apl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:58:34.206876+00:00 |
| B-ENT | [feed](<https://www.b-ent.be/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 29 | 2026-10-04T12:59:28.253008+00:00 |
| Baghdad Science Journal | [feed](<https://bsj.uobaghdad.edu.iq/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:54:58.548236+00:00 |
| BALTIC FORESTRY | [feed](<https://balticforestry.lammc.lt/bf/index.php?format=feed&type=rss>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T12:54:51.659836+00:00 |
| Baltic Journal of Health and Physical Activity | [feed](<https://www.balticsportscience.com/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:59:28.416218+00:00 |
| Barataria-Revista Castellano-Manchega de Ciencias Sociales | [feed](<https://revistabarataria.es/web/index.php/rb/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:58:00.070312+00:00 |
| BDJ Open | [feed](<https://www.nature.com/bdjopen.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:13.282974+00:00 |
| BEHAVIOUR RESEARCH AND THERAPY | [feed](<https://rss.sciencedirect.com/publication/science/00057967>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:02:32.432938+00:00 |
| Beilstein Journal of Nanotechnology | [feed](<https://www.beilstein-journals.org/bjnano/content/rss.xml>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:28.905352+00:00 |
| Beilstein Journal of Organic Chemistry | [feed](<https://www.beilstein-journals.org/bjoc/content/rss.xml>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:01:10.986582+00:00 |
| BELGIAN JOURNAL OF ZOOLOGY | [feed](<https://belgianjournalofzoology.eu/BJZ/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:52.100962+00:00 |
| BERICHTE UBER LANDWIRTSCHAFT | [feed](<https://www.buel.bmel.de/index.php/buel/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:32.700173+00:00 |
| Best Practice & Research-Clinical Anaesthesiology | [feed](<https://rss.sciencedirect.com/publication/science/15216896>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:02:33.609437+00:00 |
| Biblical Annals | [feed](<https://czasopisma.kul.pl/index.php/ba/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:52.232615+00:00 |
| Big Data Research | [feed](<https://rss.sciencedirect.com/publication/science/22145796>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:02:34.879395+00:00 |
| Biochemical Engineering Journal | [feed](<https://rss.sciencedirect.com/publication/science/1369703X>) | feed-with-entries | 200 | rss | 66 | 2026-10-04T13:02:36.180187+00:00 |
| BIOCHEMICAL SYSTEMATICS AND ECOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/03051978>) | feed-with-entries | 200 | rss | 60 | 2026-10-04T13:02:36.935911+00:00 |
| BIOCHIMICA ET BIOPHYSICA ACTA-BIOMEMBRANES | [feed](<https://rss.sciencedirect.com/publication/science/00052736>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:02:38.020366+00:00 |
| BIOCHIMICA ET BIOPHYSICA ACTA-GENERAL SUBJECTS | [feed](<https://rss.sciencedirect.com/publication/science/03044165>) | feed-with-entries | 200 | rss | 29 | 2026-10-04T13:02:38.994755+00:00 |
| BIOCHIMICA ET BIOPHYSICA ACTA-MOLECULAR AND CELL BIOLOGY OF LIPIDS | [feed](<https://rss.sciencedirect.com/publication/science/13881981>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:02:40.542240+00:00 |
| Biofuel Research Journal-BRJ | [feed](<https://www.biofueljournal.com/ju.rss>) | access-blocked | 403 |  |  | 2026-10-04T12:59:29.293900+00:00 |
| Biolinguistics | [feed](<https://bioling.psychopen.eu/index.php/bioling/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:53.852255+00:00 |
| Biological Psychiatry-Cognitive Neuroscience and Neuroimaging | [feed](<https://rss.sciencedirect.com/publication/science/24519022>) | feed-with-entries | 200 | rss | 74 | 2026-10-04T13:02:41.867091+00:00 |
| BIOLOGICAL PSYCHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/03010511>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:02:42.964938+00:00 |
| BIOLOGICALS | [feed](<https://rss.sciencedirect.com/publication/science/10451056>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:02:44.530106+00:00 |
| Biologics-Targets & Therapy | [feed](<https://www.dovepress.com/feed/journal/8>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:11.122792+00:00 |
| Biology-Basel | [feed](<https://bio.unibas.ch/en/feed/1339/feed.rss?cHash=ccf6e5421bcd68dce2f71541e9a186ef>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T12:54:53.757510+00:00 |
| BIOMASS & BIOENERGY | [feed](<https://rss.sciencedirect.com/publication/science/09619534>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:02:45.763072+00:00 |
| BIOMATERIALS | [feed](<https://rss.sciencedirect.com/publication/science/01429612>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:02:47.387682+00:00 |
| Biomaterials Advances | [feed](<https://rss.sciencedirect.com/publication/science/27729508>) | feed-with-entries | 200 | rss | 76 | 2026-10-04T13:02:48.782564+00:00 |
| BIOPHYSICAL CHEMISTRY | [feed](<https://rss.sciencedirect.com/publication/science/03014622>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:02:50.231078+00:00 |
| Biosystems Diversity | [feed](<https://ecology.dp.ua/index.php/ECO/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:55:21.529971+00:00 |
| Biznes Informatika-Business Informatics | [feed](<https://bijournal.hse.ru/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:54:52.578380+00:00 |
| Blood and Lymphatic Cancer-Targets and Therapy | [feed](<https://www.dovepress.com/feed/journal/101>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:22.904922+00:00 |
| Blood Cancer Journal | [feed](<https://www.nature.com/bcj.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:23.726351+00:00 |
| Body Image | [feed](<https://rss.sciencedirect.com/publication/science/17401445>) | feed-with-entries | 200 | rss | 73 | 2026-10-04T13:02:51.457349+00:00 |
| Boletim de Ciencias Geodesicas | [feed](<https://www.scielo.br/journal/bcg/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:30.480756+00:00 |
| Boletim de Estudos Classicos | [feed](<https://impactum-journals.uc.pt/bec/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:56:04.548523+00:00 |
| BOLETIM DE INDUSTRIA ANIMAL | [feed](<http://bia.iz.sp.gov.br/index.php/bia/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:54:52.391338+00:00 |
| Boletin de la Sociedad Argentina de Botanica | [feed](<https://www.scielo.org.ar/rss.php?pid=1851-237220250003&lang=es>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:01:13.670406+00:00 |
| BOLETIN DE LA SOCIEDAD ESPANOLA DE CERAMICA Y VIDRIO | [feed](<https://rss.sciencedirect.com/publication/science/03663175>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:02:52.242557+00:00 |
| BONE MARROW TRANSPLANTATION | [feed](<https://www.nature.com/bmt.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:30.446006+00:00 |
| Bone Research | [feed](<https://www.nature.com/boneres.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:36.979859+00:00 |
| Bordon-Revista de Pedagogia | [feed](<https://www.sepedagogia.es/?feed=comments-rss2>) | empty-feed | 200 | rss | 0 | 2026-10-04T13:00:40.641726+00:00 |
| BOTHALIA | [feed](<https://journals.abcjournal.aosis.co.za/index.php/abc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:28.604388+00:00 |
| BRAGANTIA | [feed](<https://www.scielo.br/journal/brag/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:37.176395+00:00 |
| BRAIN AND COGNITION | [feed](<https://rss.sciencedirect.com/publication/science/02782626>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:02:52.710349+00:00 |
| BRAIN AND LANGUAGE | [feed](<https://rss.sciencedirect.com/publication/science/0093934X>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:02:53.681385+00:00 |
| BRAIN BEHAVIOR AND IMMUNITY | [feed](<https://rss.sciencedirect.com/publication/science/08891591>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:02:54.614637+00:00 |
| Brain Hemorrhages | [feed](<https://rss.sciencedirect.com/publication/science/2589238X>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:02:55.455771+00:00 |
| BRAIN RESEARCH BULLETIN | [feed](<https://rss.sciencedirect.com/publication/science/03619230>) | feed-with-entries | 200 | rss | 69 | 2026-10-04T13:02:56.428961+00:00 |
| Bratislava Law Review | [feed](<https://blr.flaw.uniba.sk/index.php/BLR/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:54:57.245716+00:00 |
| Brazilian Journal of Geology | [feed](<https://www.scielo.br/journal/bjgeo/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:40.357133+00:00 |
| Brazilian Journal of Operations & Production Management | [feed](<https://bjopm.org.br/bjopm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:54:55.043327+00:00 |
| Brazilian Journal of Pharmaceutical Sciences | [feed](<https://www.scielo.br/journal/bjps/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:41.825192+00:00 |
| Brazilian Journalism Research | [feed](<https://bjr.sbpjor.org.br/bjr/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:54:55.342375+00:00 |
| Brazilian Oral Research | [feed](<https://www.scielo.br/journal/bor/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:43.482656+00:00 |
| BRICS Law Journal | [feed](<https://www.bricslawjournal.com/jour/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:32.262203+00:00 |
| British Accounting Review | [feed](<https://rss.sciencedirect.com/publication/science/08908389>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:02:58.482540+00:00 |
| BRITISH DENTAL JOURNAL | [feed](<https://www.nature.com/bdj.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:40.024678+00:00 |
| BRITISH JOURNAL OF CANCER | [feed](<https://www.nature.com/bjc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:41.823945+00:00 |
| British Journal of Diabetes | [feed](<https://bjd-abcd.com/index.php/bjd/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:54.671439+00:00 |
| BUILDING AND ENVIRONMENT | [feed](<https://rss.sciencedirect.com/publication/science/03601323>) | feed-with-entries | 200 | rss | 96 | 2026-10-04T13:03:00.191817+00:00 |
| BULLETIN DE L ACADEMIE NATIONALE DE MEDECINE | [feed](<https://rss.sciencedirect.com/publication/science/00014079>) | feed-with-entries | 200 | rss | 47 | 2026-10-04T13:03:00.644595+00:00 |
| BULLETIN DES SCIENCES MATHEMATIQUES | [feed](<https://rss.sciencedirect.com/publication/science/00074497>) | feed-with-entries | 200 | rss | 55 | 2026-10-04T13:03:01.596946+00:00 |
| Bulletin of Geography-Physical Geography Series | [feed](<https://apcz.umk.pl/BOGPGS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 2 | 2026-10-04T12:54:48.115844+00:00 |
| Bulletin of the American Society of Overseas Research | [feed](<https://www.asor.org/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:59:27.412012+00:00 |
| Bulletin of the History of Archaeology | [feed](<https://account.archaeologybulletin.org/index.php/up-j-bha/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.759706+00:00 |
| Bulletin of the New Zealand Society for Earthquake Engineering | [feed](<https://bulletin.nzsee.org.nz/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:54:59.150693+00:00 |
| Bulletin of the University of Karaganda-Physics | [feed](<https://phs.buketov.edu.kz/physics-vestnik/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:57:36.449408+00:00 |
| BURNS | [feed](<https://rss.sciencedirect.com/publication/science/03054179>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:02.723231+00:00 |
| BUSINESS HORIZONS | [feed](<https://rss.sciencedirect.com/publication/science/00076813>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:03:03.674895+00:00 |
| Cadernos de Dereito Actual | [feed](<http://cadernosdedereitoactual.es/index.php/cadernos/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:54:59.332257+00:00 |
| Cadernos de Estudos Linguisticos | [feed](<https://periodicos.sbu.unicamp.br/ojs/index.php/cel/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | empty-feed | 200 | atom | 0 | 2026-10-04T12:57:27.997768+00:00 |
| Cadernos de Geografia | [feed](<https://impactum-journals.uc.pt/cadernosgeografia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:53.812605+00:00 |
| Cadernos de Traducao | [feed](<https://www.scielo.br/journal/ct/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:44.693879+00:00 |
| CAHIERS DE NUTRITION ET DE DIETETIQUE | [feed](<https://rss.sciencedirect.com/publication/science/00079960>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:03:04.628206+00:00 |
| California Fish and Wildlife Journal | [feed](<https://journal.wildlife.ca.gov/feed/>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T12:56:27.966460+00:00 |
| Caligrama-Revista de Estudos Romanicos | [feed](<https://periodicos.ufmg.br/index.php/caligrama/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:28.413980+00:00 |
| Calle 14-Revista de investigacion en el Campo del Arte | [feed](<https://revistas.udistrital.edu.co/index.php/c14/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:23.389552+00:00 |
| Cambio-Rivista sulle Trasformazioni Sociali | [feed](<https://oaj.fupress.net/index.php/cambio/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:57:04.951873+00:00 |
| Canadian Geriatrics Journal | [feed](<https://cgjonline.ca/index.php/cgj/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:02.634188+00:00 |
| Canadian Journal for the Study of Adult Education | [feed](<https://cjsae.library.dal.ca/cjsae/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:55:03.245677+00:00 |
| Canadian Journal of Applied Linguistics | [feed](<https://journals.lib.unb.ca/index.php/CJAL/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T13:00:54.764257+00:00 |
| Canadian Journal of Higher Education | [feed](<https://www.cjhe-rces.ca/cjhe/index.php/cjhe/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:36.288460+00:00 |
| CANADIAN JOURNAL OF HOSPITAL PHARMACY | [feed](<https://www.cjhp-online.ca/index.php/cjhp/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:36.588264+00:00 |
| Canadian Journal of Nonprofit and Social Economy Research | [feed](<https://anserj.ca/index.php/cjnser/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 26 | 2026-10-04T12:54:45.568844+00:00 |
| CANCER GENE THERAPY | [feed](<https://www.nature.com/cgt.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:43.124526+00:00 |
| Cancer Management and Research | [feed](<https://www.dovepress.com/feed/journal/55>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:29.804415+00:00 |
| Caplletra | [feed](<https://turia.uv.es/index.php/caplletra/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:10.467971+00:00 |
| Caracol | [feed](<https://caracol.org/comments/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:00.385334+00:00 |
| Carbohydrate Research | [feed](<https://rss.sciencedirect.com/publication/science/00086215>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:03:05.385581+00:00 |
| Carbon Trends | [feed](<https://rss.sciencedirect.com/publication/science/26670569>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:03:06.568228+00:00 |
| Cardiovascular Diagnosis and Therapy | [feed](<https://cdt.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 22 | 2026-10-04T12:55:02.107280+00:00 |
| Case Reports in Womens Health | [feed](<https://rss.sciencedirect.com/publication/science/22149112>) | feed-with-entries | 200 | rss | 41 | 2026-10-04T13:03:08.170669+00:00 |
| Case Studies on Transport Policy | [feed](<https://rss.sciencedirect.com/publication/science/2213624X>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:09.070528+00:00 |
| CATALYSIS TODAY | [feed](<https://rss.sciencedirect.com/publication/science/09205861>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:03:10.204044+00:00 |
| CATENA | [feed](<https://rss.sciencedirect.com/publication/science/03418162>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:11.877527+00:00 |
| CBE-Life Sciences Education | [feed](<https://www.lifescied.org/action/showFeed?type=etoc&feed=rss&jc=lse>) | feed-with-entries | 200 | rdf | 15 | 2026-10-04T13:00:10.504385+00:00 |
| CELEHIS-Revista del Centro de Letras Hispanoamericanas | [feed](<https://fh.mdp.edu.ar/revistas/index.php/celehis/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:55:39.033632+00:00 |
| CELL CALCIUM | [feed](<https://rss.sciencedirect.com/publication/science/01434160>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:03:12.700682+00:00 |
| Cell Death & Disease | [feed](<https://www.nature.com/cddis.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:44.414667+00:00 |
| CELL DEATH AND DIFFERENTIATION | [feed](<https://www.nature.com/cdd.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:45.978723+00:00 |
| Cell Death Discovery | [feed](<https://www.nature.com/cddiscovery.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:47.184829+00:00 |
| Cell Discovery | [feed](<https://www.nature.com/celldisc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:48.506310+00:00 |
| CELL RESEARCH | [feed](<https://www.nature.com/cr.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:49.268220+00:00 |
| Cellular & Molecular Immunology | [feed](<https://www.nature.com/cmi.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:49.999877+00:00 |
| CEMENT & CONCRETE COMPOSITES | [feed](<https://rss.sciencedirect.com/publication/science/09589465>) | feed-with-entries | 200 | rss | 82 | 2026-10-04T13:03:13.431451+00:00 |
| Central Bank Review | [feed](<https://rss.sciencedirect.com/publication/science/13030701>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:03:14.211198+00:00 |
| CEYLON MEDICAL JOURNAL | [feed](<https://account.cmj.sljol.info/index.php/sljo-j-cmj/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.759828+00:00 |
| Changing Societies & Personalities | [feed](<https://changing-sp.com/ojs/index.php/csp/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout | 200 |  |  | 2026-10-04T12:55:02.738226+00:00 |
| Chemical Bulletin of Kazakh National University | [feed](<https://bulletin.chemistry.kz/index.php/kaznu/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:54:58.551212+00:00 |
| Chemical Engineering and Processing-Process Intensification | [feed](<https://rss.sciencedirect.com/publication/science/02552701>) | feed-with-entries | 200 | rss | 58 | 2026-10-04T13:03:15.260623+00:00 |
| Chemical Engineering Journal | [feed](<https://rss.sciencedirect.com/publication/science/13858947>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:15.984779+00:00 |
| Chemical Engineering Journal Advances | [feed](<https://rss.sciencedirect.com/publication/science/26668211>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:16.349909+00:00 |
| CHEMICAL ENGINEERING RESEARCH & DESIGN | [feed](<https://rss.sciencedirect.com/publication/science/02638762>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:16.991363+00:00 |
| Chemical Methodologies | [feed](<https://www.chemmethod.com/ju.rss>) | access-blocked | 403 |  |  | 2026-10-04T12:59:34.598866+00:00 |
| Chemical Physics Impact | [feed](<https://rss.sciencedirect.com/publication/science/26670224>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:17.907634+00:00 |
| CHEMICAL PHYSICS LETTERS | [feed](<https://rss.sciencedirect.com/publication/science/00092614>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:03:18.826907+00:00 |
| CHEMICKE LISTY | [feed](<http://www.chemicke-listy.cz/ojs3/index.php/chemicke-listy/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:59:34.176089+00:00 |
| CHEMICO-BIOLOGICAL INTERACTIONS | [feed](<https://rss.sciencedirect.com/publication/science/00092797>) | feed-with-entries | 200 | rss | 43 | 2026-10-04T13:03:19.492181+00:00 |
| CHEMISTRY AND PHYSICS OF LIPIDS | [feed](<https://rss.sciencedirect.com/publication/science/00093084>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:03:19.933850+00:00 |
| Chemosphere | [feed](<https://rss.sciencedirect.com/publication/science/00456535>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:03:20.285332+00:00 |
| Chilean Journal of Agricultural & Animal Sciences | [feed](<http://www.scielo.cl/rss.php?pid=0719-389020250003&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:13.638042+00:00 |
| China Economic Quarterly International | [feed](<https://rss.sciencedirect.com/publication/science/26669331>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:03:20.637265+00:00 |
| CHINA ECONOMIC REVIEW | [feed](<https://chinaeconomicreview.com/feed/>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:02.821259+00:00 |
| China Journal of Accounting Research | [feed](<https://rss.sciencedirect.com/publication/science/17553091>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:03:20.861474+00:00 |
| Chinese Clinical Oncology | [feed](<https://cco.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:55:01.951982+00:00 |
| Chinese Herbal Medicines | [feed](<https://rss.sciencedirect.com/publication/science/16746384>) | feed-with-entries | 200 | rss | 75 | 2026-10-04T13:03:21.353679+00:00 |
| Chinese Journal of Catalysis | [feed](<https://rss.sciencedirect.com/publication/science/18722067>) | feed-with-entries | 200 | rss | 65 | 2026-10-04T13:03:21.859777+00:00 |
| CHINESE JOURNAL OF PHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/05779073>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:22.051436+00:00 |
| Chinese Journal of Population Resources and Environment | [feed](<https://rss.sciencedirect.com/publication/science/23254262>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:03:22.547897+00:00 |
| CHINESE JOURNAL OF STRUCTURAL CHEMISTRY | [feed](<https://rss.sciencedirect.com/publication/science/02545861>) | feed-with-entries | 200 | rss | 53 | 2026-10-04T13:03:22.937050+00:00 |
| Chungara-Revista de Antropologia Chilena | [feed](<https://www.chungara.cl/ojs/prod/index.php/chungara/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:34.932034+00:00 |
| CIENCIA E AGROTECNOLOGIA | [feed](<https://www.scielo.br/journal/cagro/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:46.317071+00:00 |
| Ciencia Juridica | [feed](<https://www.cienciajuridica.ugto.mx/index.php/CJ/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:35.218074+00:00 |
| Ciencia UNEMI | [feed](<https://ojs.unemi.edu.ec/index.php/cienciaunemi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:57:14.505649+00:00 |
| Cimexus | [feed](<https://cimexus.umich.mx/index.php/cimexus/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:55:02.884520+00:00 |
| CINEJ Cinema Journal | [feed](<https://cinej.pitt.edu/ojs/cinej/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:02.905593+00:00 |
| Cinta de Moebio | [feed](<https://cintademoebio.uchile.cl/index.php/CDM/gateway/plugin/WebFeedGatewayPlugin/rss2>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T12:55:03.114270+00:00 |
| CIRP Journal of Manufacturing Science and Technology | [feed](<https://rss.sciencedirect.com/publication/science/17555817>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:03:23.124041+00:00 |
| Cirugia Cardiovascular | [feed](<https://rss.sciencedirect.com/publication/science/11340096>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:03:23.895815+00:00 |
| City and Environment Interactions | [feed](<https://rss.sciencedirect.com/publication/science/25902520>) | feed-with-entries | 200 | rss | 88 | 2026-10-04T13:03:24.315813+00:00 |
| CLCWEB-Comparative Literature and Culture | [feed](<https://docs.lib.purdue.edu/clcweb/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:18.944837+00:00 |
| Climate Risk Management | [feed](<https://rss.sciencedirect.com/publication/science/22120963>) | feed-with-entries | 200 | rss | 64 | 2026-10-04T13:03:25.109883+00:00 |
| Clinical and Experimental Gastroenterology | [feed](<https://www.dovepress.com/feed/journal/34>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:36.373844+00:00 |
| Clinical and Experimental Reproductive Medicine-CERM | [feed](<https://ecerm.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T12:55:21.247143+00:00 |
| Clinical and Translational Radiation Oncology | [feed](<https://rss.sciencedirect.com/publication/science/24056308>) | feed-with-entries | 200 | rss | 56 | 2026-10-04T13:03:25.659362+00:00 |
| Clinical Colorectal Cancer | [feed](<https://rss.sciencedirect.com/publication/science/15330028>) | feed-with-entries | 200 | rss | 44 | 2026-10-04T13:03:26.311393+00:00 |
| Clinical Cosmetic and Investigational Dermatology | [feed](<https://www.dovepress.com/feed/journal/33>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:39.417958+00:00 |
| Clinical Diabetology | [feed](<https://journals.viamedica.pl/clinical_diabetology/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:57.207597+00:00 |
| Clinical Interventions in Aging | [feed](<https://www.dovepress.com/feed/journal/4>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:41.520105+00:00 |
| CLINICAL MEDICINE | [feed](<https://rss.sciencedirect.com/publication/science/14702118>) | feed-with-entries | 200 | rss | 35 | 2026-10-04T13:03:27.110342+00:00 |
| Clinical Neurophysiology Practice | [feed](<https://rss.sciencedirect.com/publication/science/2467981X>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:27.444925+00:00 |
| CLINICAL PSYCHOLOGY REVIEW | [feed](<https://rss.sciencedirect.com/publication/science/02727358>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:03:28.037681+00:00 |
| Clinics in Shoulder and Elbow | [feed](<https://www.cisejournal.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 849 | 2026-10-04T12:59:35.699044+00:00 |
| Cognitive Behaviour Therapist | [feed](<https://www.nacbt.org/comments/feed/>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:00:15.047065+00:00 |
| Cognitive Systems Research | [feed](<https://rss.sciencedirect.com/publication/science/13890417>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:03:28.601805+00:00 |
| Cold Spring Harbor Molecular Case Studies | [feed](<https://molecularcasestudies.cshlp.org/rss/current.xml>) | access-blocked | 403 |  |  | 2026-10-04T12:57:00.189486+00:00 |
| Cold Spring Harbor Perspectives in Medicine | [feed](<https://perspectivesinmedicine.cshlp.org/rss/current.xml>) | access-blocked | 403 |  |  | 2026-10-04T12:57:34.915633+00:00 |
| Collectanea Christiana Orientalia | [feed](<https://journals.uco.es/cco/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:39.199012+00:00 |
| COLLEGE & RESEARCH LIBRARIES | [feed](<https://crl.acrl.org/index.php/crl/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:07.760125+00:00 |
| Combustion and Flame | [feed](<https://rss.sciencedirect.com/publication/science/00102180>) | feed-with-entries | 200 | rss | 83 | 2026-10-04T13:03:29.381193+00:00 |
| Commonwealth Journal of Local Governance | [feed](<https://epress.lib.uts.edu.au/journals/index.php/cjlg/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:55:29.356604+00:00 |
| Communication & Society-Spain | [feed](<https://revistas.unav.edu/index.php/communication-and-society/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:06.465584+00:00 |
| Communications Biology | [feed](<https://www.nature.com/commsbio.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:50.831899+00:00 |
| Communications Chemistry | [feed](<https://www.nature.com/commschem.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:51.834435+00:00 |
| Communications Earth & Environment | [feed](<https://www.nature.com/commsenv.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:52.640751+00:00 |
| Communications in Information Literacy | [feed](<https://pdxscholar.library.pdx.edu/comminfolit/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:57:24.627145+00:00 |
| Communications Materials | [feed](<https://www.nature.com/commsmat.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:53.513604+00:00 |
| Communications Medicine | [feed](<https://www.nature.com/commsmed.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:54.615157+00:00 |
| Communications of the Association for Information Systems | [feed](<https://aisel.aisnet.org/cais/recent.rss>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T12:54:37.449403+00:00 |
| Communications Physics | [feed](<https://www.nature.com/commsphys.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:55.882819+00:00 |
| Comparative Population Studies | [feed](<https://www.comparativepopulationstudies.de/index.php/CPoS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:59:37.653939+00:00 |
| Complementary Therapies in Clinical Practice | [feed](<https://rss.sciencedirect.com/publication/science/17443881>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:03:30.181478+00:00 |
| Complutense Journal of English Studies | [feed](<https://revistas.ucm.es/index.php/CJES/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:19.938724+00:00 |
| COMPOSITES SCIENCE AND TECHNOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/02663538>) | feed-with-entries | 200 | rss | 77 | 2026-10-04T13:03:30.835024+00:00 |
| Comprehensive Psychoneuroendocrinology | [feed](<https://rss.sciencedirect.com/publication/science/26664976>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:03:31.722568+00:00 |
| Computational Condensed Matter | [feed](<https://rss.sciencedirect.com/publication/science/23522143>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:32.073109+00:00 |
| COMPUTATIONAL MATERIALS SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/09270256>) | feed-with-entries | 200 | rss | 67 | 2026-10-04T13:03:32.890391+00:00 |
| COMPUTATIONAL STATISTICS & DATA ANALYSIS | [feed](<https://rss.sciencedirect.com/publication/science/01679473>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:03:33.653185+00:00 |
| COMPUTER AIDED GEOMETRIC DESIGN | [feed](<https://rss.sciencedirect.com/publication/science/01678396>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:03:34.026584+00:00 |
| Computer Science-AGH | [feed](<https://journals.agh.edu.pl/csci/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:28.863337+00:00 |
| COMPUTER VISION AND IMAGE UNDERSTANDING | [feed](<https://rss.sciencedirect.com/publication/science/10773142>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:03:34.575278+00:00 |
| COMPUTERIZED MEDICAL IMAGING AND GRAPHICS | [feed](<https://rss.sciencedirect.com/publication/science/08956111>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:03:35.169403+00:00 |
| COMPUTERS & CHEMICAL ENGINEERING | [feed](<https://rss.sciencedirect.com/publication/science/00981354>) | feed-with-entries | 200 | rss | 73 | 2026-10-04T13:03:35.885670+00:00 |
| COMPUTERS & GRAPHICS-UK | [feed](<https://rss.sciencedirect.com/publication/science/00978493>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:03:36.365751+00:00 |
| COMPUTERS & MATHEMATICS WITH APPLICATIONS | [feed](<https://rss.sciencedirect.com/publication/science/08981221>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:03:37.342943+00:00 |
| COMPUTERS IN BIOLOGY AND MEDICINE | [feed](<https://rss.sciencedirect.com/publication/science/00104825>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:03:37.742524+00:00 |
| COMPUTING AND INFORMATICS | [feed](<https://www.cai.sk/ojs/index.php/cai/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:32.864813+00:00 |
| Conservar Patrimonio | [feed](<https://conservarpatrimonio.pt/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:55:05.856274+00:00 |
| Conservation Science in Cultural Heritage | [feed](<https://conservation-science.unibo.it/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:06.082035+00:00 |
| Constelaciones-Revista de Teoria Critica | [feed](<https://constelaciones-rtc.net/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 36 | 2026-10-04T12:55:06.242222+00:00 |
| Construction Economics and Building | [feed](<https://epress.lib.uts.edu.au/journals/index.php/AJCEB/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:52.436843+00:00 |
| Contabilidade Gestao e Governanca | [feed](<https://revistacgg.org/index.php/contabil/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:58:00.946653+00:00 |
| Contemporanea-Revista de Sociologia da UFSCar | [feed](<https://www.contemporanea.ufscar.br/index.php/contemporanea/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:59:37.952075+00:00 |
| Contemporary Clinical Trials Communications | [feed](<https://rss.sciencedirect.com/publication/science/24518654>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:03:38.895071+00:00 |
| Contemporary Mathematics | [feed](<https://www.ams.org/rss/conm.rss>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T12:59:23.143506+00:00 |
| Contexto-Revista de la Facultad de Arquitectura Universidad Autonoma de Nuevo Leon | [feed](<https://contexto.uanl.mx/index.php/contexto/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:55:07.027200+00:00 |
| Contextos Educativos-Revista de Educacion | [feed](<https://publicaciones.unirioja.es/ojs/index.php/contextos/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:57:43.430619+00:00 |
| Coordenadas-Revista de Historia Local y Regional | [feed](<https://www2.hum.unrc.edu.ar/ojs/index.php/erasmus/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:49.942070+00:00 |
| CRITICA-REVISTA HISPANOAMERICANA DE FILOSOFIA | [feed](<https://critica.filosoficas.unam.mx/index.php/critica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:55:07.758818+00:00 |
| Critical Care and Resuscitation | [feed](<https://rss.sciencedirect.com/publication/science/14412772>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:03:39.775990+00:00 |
| CRITICAL REVIEWS IN ONCOLOGY HEMATOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/10408428>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:40.459056+00:00 |
| Croatian and Comparative Public Administration | [feed](<https://www.ccpa-journal.eu/index.php/ccpa/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:59:33.240902+00:00 |
| Croatian Operational Research Review | [feed](<http://hdoi.hr/crorr-journal/?feed=rss2>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:50.313573+00:00 |
| CRYSTENGCOMM | [feed](<http://feeds.rsc.org/rss/ce>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:00:53.474135+00:00 |
| CT&F-Ciencia Tecnologia y Futuro | [feed](<https://ctyf.journal.ecopetrol.com.co/index.php/ctyf/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:07.823949+00:00 |
| Cuaderno de Notas | [feed](<https://polired.upm.es/index.php/cuadernodenotas/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:02.214121+00:00 |
| Cuadernos CANELA | [feed](<https://www.cuadernoscanela.org/index.php/cuadernos/gateway/plugin/WebFeedGatewayPlugin/atom>) | rate-limited | 429 |  |  | 2026-10-04T12:59:39.248051+00:00 |
| Cuadernos de Gestion | [feed](<https://ojs.ehu.eus/index.php/CG/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:57:05.505453+00:00 |
| Cuadernos de Ilustracion y Romanticismo | [feed](<https://revistas.uca.es/index.php/cir/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 47 | 2026-10-04T12:58:18.162147+00:00 |
| Cuadernos de Investigacion Geografica | [feed](<https://publicaciones.unirioja.es/ojs/index.php/cig/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:01:03.352892+00:00 |
| Cuadernos de Neuropsicologia-Panamerican Journal of Neuropsychology | [feed](<https://cnps.cl/index.php/cnps/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T12:55:03.507448+00:00 |
| Cuadernos de Proyectos Arquitectonicos | [feed](<https://polired.upm.es/index.php/proyectos_arquitectonicos/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:19.362978+00:00 |
| Cuadernos de Trabajo Social | [feed](<https://revistas.ucm.es/index.php/CUTS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:27.774079+00:00 |
| Cuadernos de Turismo | [feed](<https://revistas.um.es/turismo/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T13:01:06.304169+00:00 |
| Cuadernos Europeos de Deusto | [feed](<https://ced.revistas.deusto.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:55:02.238601+00:00 |
| Cuadernos Info | [feed](<https://cuadernosinfo.uc.cl/index.php/cdi/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:55:08.104408+00:00 |
| CUAJ-Canadian Urological Association Journal | [feed](<https://cuaj.ca/index.php/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:08.556396+00:00 |
| Cuestiones de Sociologia | [feed](<https://www.cuestionessociologia.fahce.unlp.edu.ar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T12:59:39.612875+00:00 |
| CUHSO-Cultura-Hombre-Sociedad | [feed](<http://www.scielo.cl/rss.php?pid=0719-278920190002&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:24.125635+00:00 |
| Cultura Ciencia y Deporte | [feed](<https://ccd.ucam.edu/index.php/revista/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 42 | 2026-10-04T12:55:01.085786+00:00 |
| Cultura de los Cuidados | [feed](<https://culturacuidados.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 26 | 2026-10-04T12:55:09.529329+00:00 |
| Cultura y Droga | [feed](<https://revistasojs.ucaldas.edu.co/index.php/culturaydroga/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:58:37.831327+00:00 |
| Current Opinion in Behavioral Sciences | [feed](<https://rss.sciencedirect.com/publication/science/23521546>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:03:44.468004+00:00 |
| CURRENT OPINION IN CHEMICAL BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/13675931>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:03:44.835500+00:00 |
| Current Opinion in Food Science | [feed](<https://rss.sciencedirect.com/publication/science/22147993>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:03:45.886027+00:00 |
| CURRENT OPINION IN GENETICS & DEVELOPMENT | [feed](<https://rss.sciencedirect.com/publication/science/0959437X>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:03:46.674023+00:00 |
| Current Opinion in Green and Sustainable Chemistry | [feed](<https://rss.sciencedirect.com/publication/science/24522236>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:03:48.431818+00:00 |
| CURRENT OPINION IN PHARMACOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/14714892>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:03:49.390816+00:00 |
| CURRENT OPINION IN PLANT BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/13695266>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T13:03:50.933256+00:00 |
| CURRENT OPINION IN SOLID STATE & MATERIALS SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/13590286>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:03:51.905776+00:00 |
| Current Opinion in Virology | [feed](<https://rss.sciencedirect.com/publication/science/18796257>) | feed-with-entries | 200 | rss | 47 | 2026-10-04T13:03:51.991299+00:00 |
| CURRENT PROBLEMS IN CANCER | [feed](<https://rss.sciencedirect.com/publication/science/01470272>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:03:52.254907+00:00 |
| Current Problems in Diagnostic Radiology | [feed](<https://rss.sciencedirect.com/publication/science/03630188>) | feed-with-entries | 200 | rss | 70 | 2026-10-04T13:03:53.008774+00:00 |
| Current Problems in Pediatric and Adolescent Health Care | [feed](<https://rss.sciencedirect.com/publication/science/15385442>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:03:53.078239+00:00 |
| Current Research in Insect Science | [feed](<https://rss.sciencedirect.com/publication/science/26665158>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:03:53.417127+00:00 |
| Current Research in Microbial Sciences | [feed](<https://rss.sciencedirect.com/publication/science/26665174>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:53.674525+00:00 |
| Current Research in Physiology | [feed](<https://rss.sciencedirect.com/publication/science/26659441>) | feed-with-entries | 200 | rss | 52 | 2026-10-04T13:03:54.031638+00:00 |
| Cyberpsychology-Journal of Psychosocial Research on Cyberspace | [feed](<https://cyberpsychology.eu/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:55:09.999642+00:00 |
| CYTOKINE | [feed](<https://rss.sciencedirect.com/publication/science/10434666>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:03:54.256402+00:00 |
| CYTOKINE & GROWTH FACTOR REVIEWS | [feed](<https://rss.sciencedirect.com/publication/science/13596101>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:03:54.419395+00:00 |
| Czech Polar Reports | [feed](<https://journals.muni.cz/CPR/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:33.171514+00:00 |
| Czech-Polish Historical and Pedagogical Journal | [feed](<https://journals.muni.cz/cphpjournal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T13:00:55.457702+00:00 |
| Dalhousie Journal of Interdisciplinary Management | [feed](<https://ojs.library.dal.ca/djim/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T12:57:08.869883+00:00 |
| DALHOUSIE REVIEW | [feed](<https://ojs.library.dal.ca/dalhousiereview/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 25 | 2026-10-04T13:00:59.377354+00:00 |
| DALTON TRANSACTIONS | [feed](<http://feeds.rsc.org/rss/dt>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:15.329836+00:00 |
| Danza e Ricerca-Laboratorio di Studi Scritture Visioni | [feed](<https://danzaericerca.unibo.it/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:55:12.473964+00:00 |
| Data | [feed](<https://ourworldindata.org/atom.xml>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:21.428599+00:00 |
| DATA BASE FOR ADVANCES IN INFORMATION SYSTEMS | [feed](<https://sigmis.org/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T12:59:01.781512+00:00 |
| Debate Universitario | [feed](<https://debate.revistasuai.ar/index.php/debate/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:13.755003+00:00 |
| Debates en Sociologia | [feed](<https://revistas.pucp.edu.pe/index.php/debatesensociologia/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:58:16.368638+00:00 |
| Debats-Revista de Cultura Poder i Societat | [feed](<https://revistadebats.net/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 25 | 2026-10-04T12:58:03.679311+00:00 |
| Demographic Research | [feed](<https://www.demographic-research.org/dr.rss>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:39.742430+00:00 |
| DENDROCHRONOLOGIA | [feed](<https://rss.sciencedirect.com/publication/science/11257865>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:03:54.643573+00:00 |
| DESALINATION | [feed](<https://rss.sciencedirect.com/publication/science/00119164>) | feed-with-entries | 200 | rss | 87 | 2026-10-04T13:03:54.995274+00:00 |
| Design Studies | [feed](<https://rss.sciencedirect.com/publication/science/0142694X>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:03:55.516597+00:00 |
| DEVELOPMENTAL AND COMPARATIVE IMMUNOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/0145305X>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:03:56.049352+00:00 |
| Developmental Cognitive Neuroscience | [feed](<https://rss.sciencedirect.com/publication/science/18789293>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:03:56.425479+00:00 |
| DEVELOPMENTAL REVIEW | [feed](<https://rss.sciencedirect.com/publication/science/02732297>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:03:56.644583+00:00 |
| DIABETES & METABOLISM | [feed](<https://rss.sciencedirect.com/publication/science/12623636>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:03:56.789300+00:00 |
| Diabetes Metabolic Syndrome and Obesity | [feed](<https://www.dovepress.com/feed/journal/32>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:42.699770+00:00 |
| DIABETES RESEARCH AND CLINICAL PRACTICE | [feed](<https://rss.sciencedirect.com/publication/science/01688227>) | feed-with-entries | 200 | rss | 70 | 2026-10-04T13:03:57.277743+00:00 |
| Dialogic Pedagogy | [feed](<https://dpj.pitt.edu/ojs/dpj1/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:55:19.598842+00:00 |
| Diametros | [feed](<https://diametros.uj.edu.pl/diametros/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:55:15.035234+00:00 |
| DIAMOND AND RELATED MATERIALS | [feed](<https://rss.sciencedirect.com/publication/science/09259635>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:03:57.586578+00:00 |
| Didactica de las Ciencias Experimentales y Sociales | [feed](<https://ojs.uv.es/index.php/dces/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:15.315901+00:00 |
| DIFFERENTIAL GEOMETRY AND ITS APPLICATIONS | [feed](<https://rss.sciencedirect.com/publication/science/09262245>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:03:57.885946+00:00 |
| DIFFERENTIATION | [feed](<https://rss.sciencedirect.com/publication/science/03014681>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:03:58.453289+00:00 |
| digitAR-Revista Digital de Arqueologia Arquitectura e Artes-Digital Journal of Archaeology Architecture and Arts | [feed](<https://impactum-journals.uc.pt/digitar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:15.706297+00:00 |
| DISCRETE MATHEMATICS AND THEORETICAL COMPUTER SCIENCE | [feed](<https://dmtcs.episciences.org/rss/papers>) | not-found | 404 |  |  | 2026-10-04T12:55:18.397822+00:00 |
| DM DISEASE-A-MONTH | [feed](<https://rss.sciencedirect.com/publication/science/00115029>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:03:58.621607+00:00 |
| DNA REPAIR | [feed](<https://rss.sciencedirect.com/publication/science/15687864>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:03:59.039035+00:00 |
| Documenti Geografici | [feed](<https://www.documentigeografici.it/index.php/docugeo/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T12:59:40.249517+00:00 |
| Doxa-Cuadernos de Filosofia y Derecho | [feed](<https://doxa.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:55:19.297130+00:00 |
| DRUG AND ALCOHOL DEPENDENCE | [feed](<https://rss.sciencedirect.com/publication/science/03768716>) | feed-with-entries | 200 | rss | 77 | 2026-10-04T13:03:59.483669+00:00 |
| Drug Design Development and Therapy | [feed](<https://www.dovepress.com/feed/journal/19>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:44.326107+00:00 |
| Drug Healthcare and Patient Safety | [feed](<https://www.dovepress.com/feed/journal/44>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:45.609882+00:00 |
| E-Latina-Revista Electronica de Estudios Latinoamericanos | [feed](<https://publicaciones.sociales.uba.ar/index.php/elatina/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:03.273751+00:00 |
| EARLY HUMAN DEVELOPMENT | [feed](<https://rss.sciencedirect.com/publication/science/03783782>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:03:59.833609+00:00 |
| Early Theatre | [feed](<https://earlytheatre.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 22 | 2026-10-04T12:55:21.192298+00:00 |
| East Asian Journal on Applied Mathematics | [feed](<https://global-sci.com/EAJAM/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T13:01:15.478602+00:00 |
| Eating Behaviors | [feed](<https://rss.sciencedirect.com/publication/science/14710153>) | feed-with-entries | 200 | rss | 29 | 2026-10-04T13:04:00.395394+00:00 |
| ECOHYDROLOGY & HYDROBIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/16423593>) | feed-with-entries | 200 | rss | 56 | 2026-10-04T13:04:00.816020+00:00 |
| ECOLOGICAL ENGINEERING | [feed](<https://rss.sciencedirect.com/publication/science/09258574>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:04:01.174011+00:00 |
| Ecological Indicators | [feed](<https://rss.sciencedirect.com/publication/science/1470160X>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:01.552527+00:00 |
| Ecological Informatics | [feed](<https://rss.sciencedirect.com/publication/science/15749541>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:02.193279+00:00 |
| Econ Journal Watch | [feed](<https://econjwatch.org/atom/>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:22.332196+00:00 |
| Econometrics | [feed](<https://rss.sciencedirect.com/publication/science/24523062>) | feed-with-entries | 200 | rss | 63 | 2026-10-04T13:04:02.586986+00:00 |
| Economia Sociedad y Territorio | [feed](<https://est.cmq.edu.mx/index.php/est/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:31.038613+00:00 |
| Economics and Business Letters | [feed](<https://journal.privietlab.org/index.php/JEBL/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:56:25.108204+00:00 |
| Economics Ecology Socium | [feed](<https://ees-journal.com/index.php/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:24.433421+00:00 |
| ECONOMICS OF EDUCATION REVIEW | [feed](<https://rss.sciencedirect.com/publication/science/02727757>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:04:03.132334+00:00 |
| Economics of Peace and Security Journal | [feed](<https://www.epsjournal.org.uk/index.php/EPSJ/gateway/plugin/WebFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:59:46.373983+00:00 |
| Economics of Transportation | [feed](<https://rss.sciencedirect.com/publication/science/22120122>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:04:03.489948+00:00 |
| Educacion Fisica y Ciencia | [feed](<https://efyc.fahce.unlp.edu.ar/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:55:24.555821+00:00 |
| Eixo e a Roda-Revista de Literatura Brasileira | [feed](<http://periodicos.letras.ufmg.br/index.php/o_eixo_ea_roda/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:57:27.645589+00:00 |
| Ekonomia i Prawo-Economics and Law | [feed](<https://apcz.umk.pl/EiP/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T13:00:50.977252+00:00 |
| Ekonomia i Srodowisko-Economics and Environment | [feed](<https://ekonomiaisrodowisko.pl/journal/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:55:27.911590+00:00 |
| ELECTORAL STUDIES | [feed](<https://rss.sciencedirect.com/publication/science/02613794>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:04:03.907816+00:00 |
| Electrical Engineering & Electromechanics | [feed](<https://eie.khpi.edu.ua/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:55:24.644484+00:00 |
| ELECTROCHIMICA ACTA | [feed](<https://rss.sciencedirect.com/publication/science/00134686>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:04.469955+00:00 |
| Electronic Journal of Graph Theory and Applications | [feed](<https://www.ejgta.org/index.php/ejgta/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T12:59:44.012064+00:00 |
| eLife | [feed](<https://elifesciences.org/rss/recent.xml>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T12:55:28.164200+00:00 |
| Elos-Revista de Literatura Infantil e Xuvenil | [feed](<https://liter21.usc.gal/comments/feed>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:56:53.830468+00:00 |
| Em Questao | [feed](<https://seer.ufrgs.br/index.php/EmQuestao/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:59:00.069254+00:00 |
| Emerging Markets Review | [feed](<https://rss.sciencedirect.com/publication/science/15660141>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:04:04.931066+00:00 |
| EMITTER-International Journal of Engineering Technology | [feed](<https://emitter.pens.ac.id/index.php/emitter/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:28.385049+00:00 |
| Empedocles-European Journal for the Philosophy of Communication | [feed](<https://callisto.newgen.co/intellect/index.php/EJPC/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:00.012646+00:00 |
| Encounters in Theory and History of Education | [feed](<https://ojs.library.queensu.ca/index.php/encounters/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 22 | 2026-10-04T12:57:09.130531+00:00 |
| Endokrynologia Polska | [feed](<https://journals.viamedica.pl/endokrynologia_polska/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T13:01:17.805365+00:00 |
| Energetic Materials Frontiers | [feed](<https://rss.sciencedirect.com/publication/science/26666472>) | feed-with-entries | 200 | rss | 65 | 2026-10-04T13:04:05.550648+00:00 |
| Energy and AI | [feed](<https://rss.sciencedirect.com/publication/science/26665468>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:06.146385+00:00 |
| Energy and Climate Change | [feed](<https://rss.sciencedirect.com/publication/science/26662787>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:06.559949+00:00 |
| Energy Economics | [feed](<https://rss.sciencedirect.com/publication/science/01409883>) | feed-with-entries | 200 | rss | 71 | 2026-10-04T13:04:07.109080+00:00 |
| EnergyChem | [feed](<https://rss.sciencedirect.com/publication/science/25897780>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:04:07.511652+00:00 |
| Enfermeria Intensiva | [feed](<https://rss.sciencedirect.com/publication/science/11302399>) | feed-with-entries | 200 | rss | 29 | 2026-10-04T13:04:07.887013+00:00 |
| Enfoque UTE | [feed](<http://scielo.senescyt.gob.ec/rss.php?pid=1390-654220260001&lang=en>) | http-error | 502 |  |  | 2026-10-04T12:58:58.631341+00:00 |
| Engaging Science Technology and Society | [feed](<https://estsjournal.org/index.php/ests/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:55:31.590492+00:00 |
| Engenharia Agricola | [feed](<https://www.scielo.br/journal/eagri/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:47.421153+00:00 |
| Engineer-Journal of the Institution of Engineers Sri Lanka | [feed](<https://account.engineer.sljol.info/index.php/sljo-j-ejiesl/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.759911+00:00 |
| ENGINEERING FRACTURE MECHANICS | [feed](<https://rss.sciencedirect.com/publication/science/00137944>) | feed-with-entries | 200 | rss | 86 | 2026-10-04T13:04:08.453114+00:00 |
| ENGINEERING STRUCTURES | [feed](<https://rss.sciencedirect.com/publication/science/01410296>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:09.027642+00:00 |
| ENGLISH FOR SPECIFIC PURPOSES | [feed](<https://rss.sciencedirect.com/publication/science/08894906>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:04:09.371821+00:00 |
| Ensayos-Revista de la Facultad de Educacion de Albacete | [feed](<https://revista.uclm.es/index.php/ensayos/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:57:58.558668+00:00 |
| Entertainment Computing | [feed](<https://rss.sciencedirect.com/publication/science/18759521>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:09.896162+00:00 |
| ENTRE CIENCIA E INGENIERIA | [feed](<https://revistas.ucp.edu.co/index.php/entrecienciaeingenieria/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:58:19.906332+00:00 |
| Entrepalavras | [feed](<http://www.entrepalavras.ufc.br/revista/index.php/Revista/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:45.873694+00:00 |
| Environmental Chemistry and Ecotoxicology | [feed](<https://rss.sciencedirect.com/publication/science/25901826>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:10.290727+00:00 |
| Environmental Development | [feed](<https://rss.sciencedirect.com/publication/science/22114645>) | feed-with-entries | 200 | rss | 52 | 2026-10-04T13:04:10.667886+00:00 |
| Environmental Engineering and Management Journal | [feed](<http://www.eemj.eu/index.php/EEMJ/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 502 |  |  | 2026-10-04T12:59:43.854165+00:00 |
| ENVIRONMENTAL HISTORY | [feed](<https://www.journals.uchicago.edu/action/showFeed?type=etoc&feed=rss&jc=eh>) | feed-with-entries | 200 | rdf | 30 | 2026-10-04T13:00:06.671695+00:00 |
| Environmental Innovation and Societal Transitions | [feed](<https://rss.sciencedirect.com/publication/science/22104224>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:04:11.258137+00:00 |
| ENVIRONMENTAL MODELLING & SOFTWARE | [feed](<https://rss.sciencedirect.com/publication/science/13648152>) | feed-with-entries | 200 | rss | 59 | 2026-10-04T13:04:11.893191+00:00 |
| Environmental Science and Ecotechnology | [feed](<https://rss.sciencedirect.com/publication/science/26664984>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:04:12.473908+00:00 |
| Epekeina-International Journal of Ontology History and Critics | [feed](<http://www.ricercafilosofica.it/epekeina/index.php/epekeina/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:33.045416+00:00 |
| EPILEPSY RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/09201211>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:04:12.877514+00:00 |
| Equilibrium-Quarterly Journal of Economics and Economic Policy | [feed](<https://economic-policy.pl/index.php/eq/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:55:23.009954+00:00 |
| ERCIM News | [feed](<https://ercim-news.ercim.eu/?format=feed&type=rss>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T12:55:29.800544+00:00 |
| Erdkunde | [feed](<https://www.erdkunde.uni-bonn.de/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:59:46.564132+00:00 |
| Ergo-An Open Access Journal of Philosophy | [feed](<https://journals.publishing.umich.edu/ergo/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:35.265193+00:00 |
| Espacio Tiempo y Forma Serie VII-Historia del Arte | [feed](<https://revistas.uned.es/index.php/ETFVII/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:29.272259+00:00 |
| Espacios en Blanco-Serie Indagaciones | [feed](<https://www.scielo.org.ar/rss.php?pid=1515-948520260001&lang=en>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:01:24.145968+00:00 |
| ESPES-The Slovak Journal of Aesthetics | [feed](<https://espes.ff.unipo.sk/index.php/espes/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:30.332708+00:00 |
| ESTUARINE COASTAL AND SHELF SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/02727714>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:13.434164+00:00 |
| Estudios de Asia y Africa | [feed](<https://estudiosdeasiayafrica.colmex.mx/index.php/eaa/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:32.169009+00:00 |
| Estudios de Cultura Maya | [feed](<https://revistas-filologicas.unam.mx/estudios-cultura-maya/index.php/ecm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T13:01:03.457053+00:00 |
| Estudios de Historia Moderna y Contemporanea de Mexico | [feed](<https://moderna.historicas.unam.mx/index.php/ehm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:57:00.059658+00:00 |
| Estudios de Historia Novohispana | [feed](<https://novohispana.historicas.unam.mx/index.php/ehn/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:57:02.522099+00:00 |
| Estudios de Linguistica-Universidad de Alicante-ELUA | [feed](<https://revistaelua.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:58:04.433731+00:00 |
| Estudios de Teoria Literaria-Revista Digital-Artes Letras Humanidades | [feed](<https://fh.mdp.edu.ar/revistas/index.php/etl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 23 | 2026-10-04T13:00:53.484592+00:00 |
| Estudios del Habitat | [feed](<https://revistas.unlp.edu.ar/Habitat/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:58:32.328121+00:00 |
| Estudios Demograficos y Urbanos | [feed](<https://estudiosdemograficosyurbanos.colmex.mx/index.php/edu/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:32.592766+00:00 |
| ESTUDIOS FILOLOGICOS | [feed](<http://www.scielo.cl/rss.php?pid=0071-171320250002&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:30.775441+00:00 |
| Estudios Fronterizos | [feed](<https://ref.uabc.mx/ojs/index.php/ref/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:57:50.515078+00:00 |
| Estudos de Literatura Brasileira Contemporanea | [feed](<https://periodicos.unb.br/index.php/estudos/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:33.068936+00:00 |
| Ethnobiology and Conservation | [feed](<https://ethnobioconservation.com/ebc/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:55:34.108798+00:00 |
| Ethnologia Scandinavica | [feed](<https://publicera.kb.se/ethsc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:57:43.563325+00:00 |
| Etikk i Praksis | [feed](<https://www.ntnu.no/ojs/index.php/etikk_i_praksis/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:16.647639+00:00 |
| eTransportation | [feed](<https://rss.sciencedirect.com/publication/science/25901168>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:04:13.797976+00:00 |
| Etudes Ricoeuriennes-Ricoeur Studies | [feed](<https://ricoeur.pitt.edu/ojs/ricoeur/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:58:43.871420+00:00 |
| Etudes Romanes de Brno | [feed](<https://journals.phil.muni.cz/erb/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 25 | 2026-10-04T12:56:33.388365+00:00 |
| Eurasian Chemico-Technological Journal | [feed](<https://ect-journal.kz/index.php/ectj/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:23.551666+00:00 |
| Eurasian Journal of Applied Linguistics | [feed](<https://ejal.info/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:24.808989+00:00 |
| Eurasian Journal of Medicine | [feed](<https://eajm.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 32 | 2026-10-04T12:55:20.522748+00:00 |
| EURE-REVISTA LATINOAMERICANA DE ESTUDIOS URBANO REGIONALES | [feed](<https://revistaschilenas.uchile.cl/feed/rss_1.0/2250/6593>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T13:01:07.327369+00:00 |
| Eureka-Revista Cientifica de Psicologia | [feed](<https://ojs.psicoeureka.com.py/index.php/eureka/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:10.929924+00:00 |
| EURO Journal on Decision Processes | [feed](<https://rss.sciencedirect.com/publication/science/21939438>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:04:14.191805+00:00 |
| EURO Journal on Transportation and Logistics | [feed](<https://rss.sciencedirect.com/publication/science/21924376>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:04:14.594901+00:00 |
| EUROPEAN ECONOMIC REVIEW | [feed](<https://rss.sciencedirect.com/publication/science/00142921>) | feed-with-entries | 200 | rss | 58 | 2026-10-04T13:04:14.965898+00:00 |
| European Endodontic Journal | [feed](<https://eurendodj.com/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:55:34.910193+00:00 |
| European Journal for Research on the Education and Learning of Adults | [feed](<https://rela.ep.liu.se/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 313 | 2026-10-04T12:57:50.751230+00:00 |
| EUROPEAN JOURNAL OF CELL BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/01719335>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:04:15.369516+00:00 |
| EUROPEAN JOURNAL OF CLINICAL NUTRITION | [feed](<https://www.nature.com/ejcn.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:56.719379+00:00 |
| EUROPEAN JOURNAL OF CONTROL | [feed](<https://rss.sciencedirect.com/publication/science/09473580>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:04:15.967479+00:00 |
| EUROPEAN JOURNAL OF HUMAN GENETICS | [feed](<https://www.nature.com/ejhg.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:57.804117+00:00 |
| EUROPEAN JOURNAL OF MECHANICS B-FLUIDS | [feed](<https://rss.sciencedirect.com/publication/science/09977546>) | feed-with-entries | 200 | rss | 44 | 2026-10-04T13:04:16.538904+00:00 |
| European Journal of Medical Genetics | [feed](<https://rss.sciencedirect.com/publication/science/17697212>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:04:16.914466+00:00 |
| European Journal of Obstetrics & Gynecology and Reproductive Biology-X | [feed](<https://rss.sciencedirect.com/publication/science/03012115>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:17.317836+00:00 |
| European Journal of Oncology Nursing | [feed](<https://rss.sciencedirect.com/publication/science/14623889>) | feed-with-entries | 200 | rss | 54 | 2026-10-04T13:04:17.803120+00:00 |
| EUROPEAN JOURNAL OF PSYCHIATRY | [feed](<https://rss.sciencedirect.com/publication/science/02136163>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:04:18.391713+00:00 |
| European Journal of Rheumatology | [feed](<https://eurjrheumatol.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:35.670485+00:00 |
| European Journal of Taxonomy | [feed](<https://europeanjournaloftaxonomy.eu/index.php/ejt/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:37.362609+00:00 |
| European Journal of Therapeutics | [feed](<https://eurjther.com/index.php/home/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:55:36.577501+00:00 |
| European Journal of Tourism Research | [feed](<https://ejtr.vumk.eu/index.php/about/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:55:27.694475+00:00 |
| EUROPEAN NEUROPSYCHOPHARMACOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/0924977X>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T13:04:18.778220+00:00 |
| EUROPEAN POLYMER JOURNAL | [feed](<https://rss.sciencedirect.com/publication/science/00143057>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:04:19.397460+00:00 |
| EUROPEAN REVIEW OF APPLIED PSYCHOLOGY-REVUE EUROPEENNE DE PSYCHOLOGIE APPLIQUEE | [feed](<https://rss.sciencedirect.com/publication/science/11629088>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:04:19.943922+00:00 |
| European Urology Open Science | [feed](<https://rss.sciencedirect.com/publication/science/26661683>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:04:20.306860+00:00 |
| Evidence Based Library and Information Practice | [feed](<https://journals.library.ualberta.ca/eblip/index.php/EBLIP/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:56:32.259782+00:00 |
| EXCLI Journal | [feed](<https://www.excli.de/excli/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 93 | 2026-10-04T12:59:47.460401+00:00 |
| EXPERIMENTAL AND MOLECULAR MEDICINE | [feed](<https://www.nature.com/emm.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:58.596168+00:00 |
| EXPERIMENTAL CELL RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/00144827>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:04:20.670506+00:00 |
| EXPERIMENTAL GERONTOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/05315565>) | feed-with-entries | 200 | rss | 61 | 2026-10-04T13:04:21.227913+00:00 |
| EXPERIMENTAL NEUROLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00144886>) | feed-with-entries | 200 | rss | 79 | 2026-10-04T13:04:21.788932+00:00 |
| EXPERIMENTAL PARASITOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00144894>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:04:22.376570+00:00 |
| EXPOSITIONES MATHEMATICAE | [feed](<https://rss.sciencedirect.com/publication/science/07230869>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:04:22.737285+00:00 |
| Extractive Industries and Society | [feed](<https://rss.sciencedirect.com/publication/science/2214790X>) | feed-with-entries | 200 | rss | 78 | 2026-10-04T13:04:23.361309+00:00 |
| EYE | [feed](<https://www.nature.com/eye.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:01:59.806456+00:00 |
| FABULA | [feed](<https://fabulacoffee.com/collections/all-products.atom>) | rate-limited | 429 |  |  | 2026-10-04T12:55:37.436304+00:00 |
| Facta Universitatis-Series Electronics and Energetics | [feed](<https://casopisi.junis.ni.ac.rs/index.php/FUElectEnerg/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:00.425906+00:00 |
| Facta Universitatis-Series Mathematics and Informatics | [feed](<https://casopisi.junis.ni.ac.rs/index.php/FUMathInf/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T13:00:52.098651+00:00 |
| Facta Universitatis-Series Mechanical Engineering | [feed](<https://casopisi.junis.ni.ac.rs/index.php/FUMechEng/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 100 | 2026-10-04T13:01:14.546846+00:00 |
| Faith and Philosophy | [feed](<https://place.asburyseminary.edu/faithandphilosophy/recent.rss>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:38.117020+00:00 |
| Farmeconomia-Health Economics and Therapeutic Pathways | [feed](<https://journals.seedstm.com/index.php/FE/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:37.395872+00:00 |
| Feminismo-s | [feed](<https://feminismos.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:55:37.934842+00:00 |
| Fennia-International Journal of Geography | [feed](<https://fennia.journal.fi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:38.313435+00:00 |
| FIELD CROPS RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/03784290>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:04:23.972549+00:00 |
| FILM CRITICISM | [feed](<https://journals.publishing.umich.edu/fc/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:56.253586+00:00 |
| FILM QUARTERLY | [feed](<https://filmquarterly.org/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:40.504627+00:00 |
| Filomat | [feed](<https://journal.pmf.ni.ac.rs/filomat/index.php/filomat/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:24.118785+00:00 |
| Filosofija-Sociologija | [feed](<https://www.lmaleidykla.lt/ojs/index.php/filosofija-sociologija/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T13:00:10.896178+00:00 |
| FILOZOFSKI VESTNIK | [feed](<https://ojs.zrc-sazu.si/filozofski-vestnik/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T13:01:18.278919+00:00 |
| Financial Internet Quarterly | [feed](<https://journals.wsiz.edu.pl/fiq/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:41.566320+00:00 |
| First Peoples Child & Family Review | [feed](<https://fpcfr.com/index.php/FPCFR/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:42.291261+00:00 |
| Fitoterapia | [feed](<https://rss.sciencedirect.com/publication/science/0367326X>) | feed-with-entries | 200 | rss | 65 | 2026-10-04T13:04:24.332326+00:00 |
| FLEISCHWIRTSCHAFT | [feed](<https://www.fleischwirtschaft.de/news/feed/>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T12:59:49.784991+00:00 |
| Florence Nightingale Journal of Nursing | [feed](<https://www.fnjn.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 31 | 2026-10-04T12:59:50.048239+00:00 |
| FLUID PHASE EQUILIBRIA | [feed](<https://rss.sciencedirect.com/publication/science/03783812>) | feed-with-entries | 200 | rss | 59 | 2026-10-04T13:04:24.708951+00:00 |
| Focus on Health Professional Education-A Multidisciplinary Journal | [feed](<https://fohpe.org/FoHPE/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T12:55:41.354213+00:00 |
| FOLIA HISTOCHEMICA ET CYTOBIOLOGICA | [feed](<https://journals.viamedica.pl/folia_histochemica_cytobiologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:01:26.957477+00:00 |
| FOLIA MORPHOLOGICA | [feed](<https://journals.viamedica.pl/folia_morphologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 191 | 2026-10-04T13:01:33.387517+00:00 |
| FOOD AND CHEMICAL TOXICOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/02786915>) | feed-with-entries | 200 | rss | 66 | 2026-10-04T13:04:25.331877+00:00 |
| Food and Waterborne Parasitology | [feed](<https://rss.sciencedirect.com/publication/science/24056766>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:04:25.909543+00:00 |
| Food Bioscience | [feed](<https://rss.sciencedirect.com/publication/science/22124292>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:26.452103+00:00 |
| Food Chemistry | [feed](<https://rss.sciencedirect.com/publication/science/03088146>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:26.973488+00:00 |
| FOOD CONTROL | [feed](<https://rss.sciencedirect.com/publication/science/09567135>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:27.578678+00:00 |
| FOOD RESEARCH INTERNATIONAL | [feed](<https://rss.sciencedirect.com/publication/science/09639969>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:28.247599+00:00 |
| Food Structure-Netherlands | [feed](<https://rss.sciencedirect.com/publication/science/22133291>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:04:28.805070+00:00 |
| Forensic Imaging | [feed](<https://rss.sciencedirect.com/publication/science/26662256>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:04:29.354920+00:00 |
| Foresight and STI Governance | [feed](<https://foresight-journal.hse.ru/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:55:41.614780+00:00 |
| Forest and Society | [feed](<https://journal.unhas.ac.id/index.php/fs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:25.574774+00:00 |
| FOREST ECOLOGY AND MANAGEMENT | [feed](<https://rss.sciencedirect.com/publication/science/03781127>) | feed-with-entries | 200 | rss | 82 | 2026-10-04T13:04:29.726122+00:00 |
| Forest Ecosystems | [feed](<https://rss.sciencedirect.com/publication/science/21975620>) | feed-with-entries | 200 | rss | 89 | 2026-10-04T13:04:30.098376+00:00 |
| Forestist | [feed](<https://forestist.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 47 | 2026-10-04T12:55:41.718379+00:00 |
| Foundation Review | [feed](<https://scholarworks.gvsu.edu/tfr/recent.rss>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T12:58:57.868065+00:00 |
| FRAGMENTA ENTOMOLOGICA | [feed](<https://rosa.uniroma1.it/rosa02/fragmenta_entomologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T13:01:08.865069+00:00 |
| French-Ukrainian Journal of Chemistry | [feed](<https://fujc.pp.ua/journal/index.php/fruajc/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:42.734103+00:00 |
| Frontiers in Aging | [feed](<https://www.frontiersin.org/journals/aging/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:59:50.507297+00:00 |
| Frontiers in Aging Neuroscience | [feed](<https://www.frontiersin.org/journals/aging-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:11.895778+00:00 |
| Frontiers in Agronomy | [feed](<https://www.frontiersin.org/journals/agronomy/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:23.041394+00:00 |
| Frontiers in Allergy | [feed](<https://www.frontiersin.org/journals/allergy/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:30.327395+00:00 |
| Frontiers in Animal Science | [feed](<https://www.frontiersin.org/journals/animal-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:36.665222+00:00 |
| Frontiers in Applied Mathematics and Statistics | [feed](<https://www.frontiersin.org/journals/applied-mathematics-and-statistics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:39.439850+00:00 |
| Frontiers in Artificial Intelligence | [feed](<https://www.frontiersin.org/journals/artificial-intelligence/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:41.785982+00:00 |
| Frontiers in Astronomy and Space Sciences | [feed](<https://www.frontiersin.org/journals/astronomy-and-space-sciences/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:43.095510+00:00 |
| Frontiers in Behavioral Neuroscience | [feed](<https://www.frontiersin.org/journals/behavioral-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:44.379391+00:00 |
| Frontiers in Big Data | [feed](<https://www.frontiersin.org/journals/big-data/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:45.793523+00:00 |
| Frontiers in Bioengineering and Biotechnology | [feed](<https://www.frontiersin.org/journals/bioengineering-and-biotechnology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:47.173825+00:00 |
| Frontiers in Bioinformatics | [feed](<https://www.frontiersin.org/journals/bioinformatics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:48.298164+00:00 |
| Frontiers in Blockchain | [feed](<https://www.frontiersin.org/journals/blockchain/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:49.017431+00:00 |
| Frontiers in Built Environment | [feed](<https://www.frontiersin.org/journals/built-environment/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:49.809247+00:00 |
| Frontiers in Cardiovascular Medicine | [feed](<https://www.frontiersin.org/journals/cardiovascular-medicine/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:50.611234+00:00 |
| Frontiers in Cell and Developmental Biology | [feed](<https://www.frontiersin.org/journals/cell-and-developmental-biology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:51.651905+00:00 |
| Frontiers in Cellular and Infection Microbiology | [feed](<https://www.frontiersin.org/journals/cellular-and-infection-microbiology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:52.238220+00:00 |
| Frontiers in Cellular Neuroscience | [feed](<https://www.frontiersin.org/journals/cellular-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:53.138748+00:00 |
| Frontiers in Chemical Engineering | [feed](<https://www.frontiersin.org/journals/chemical-engineering/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:54.294071+00:00 |
| Frontiers in Chemistry | [feed](<https://www.frontiersin.org/journals/chemistry/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:55.305892+00:00 |
| Frontiers in Climate | [feed](<https://www.frontiersin.org/journals/climate/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:56.500853+00:00 |
| Frontiers in Communication | [feed](<https://www.frontiersin.org/journals/communication/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:57.635791+00:00 |
| Frontiers in Communications and Networks | [feed](<https://www.frontiersin.org/journals/communications-and-networks/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:58.575950+00:00 |
| Frontiers in Computational Neuroscience | [feed](<https://www.frontiersin.org/journals/computational-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:59.153577+00:00 |
| Frontiers in Computer Science | [feed](<https://www.frontiersin.org/journals/computer-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:00.675950+00:00 |
| Frontiers in Conservation Science | [feed](<https://www.frontiersin.org/journals/conservation-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:01.541445+00:00 |
| Frontiers in Dental Medicine | [feed](<https://www.frontiersin.org/journals/dental-medicine/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:02.520393+00:00 |
| Frontiers in Digital Health | [feed](<https://www.frontiersin.org/journals/digital-health/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:03.131809+00:00 |
| Frontiers in Earth Science | [feed](<https://www.frontiersin.org/journals/earth-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:04.474999+00:00 |
| Frontiers in Ecology and Evolution | [feed](<https://www.frontiersin.org/journals/ecology-and-evolution/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:05.295205+00:00 |
| Frontiers in Education | [feed](<https://www.frontiersin.org/journals/education/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:06.303505+00:00 |
| Frontiers in Electronics | [feed](<https://www.frontiersin.org/journals/electronics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:07.434836+00:00 |
| Frontiers in Endocrinology | [feed](<https://www.frontiersin.org/journals/endocrinology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:08.244009+00:00 |
| Frontiers in Environmental Science | [feed](<https://www.frontiersin.org/journals/environmental-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:09.370060+00:00 |
| Frontiers in Forests and Global Change | [feed](<https://www.frontiersin.org/journals/forests-and-global-change/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:09.931007+00:00 |
| Frontiers in Fungal Biology | [feed](<https://www.frontiersin.org/journals/fungal-biology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:10.633760+00:00 |
| Frontiers in Future Transportation | [feed](<https://www.frontiersin.org/journals/future-transportation/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:11.520589+00:00 |
| Frontiers in Genetics | [feed](<https://www.frontiersin.org/journals/genetics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:12.963836+00:00 |
| Frontiers in Genome Editing | [feed](<https://www.frontiersin.org/journals/genome-editing/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:14.010339+00:00 |
| Frontiers in Global Womens Health | [feed](<https://www.frontiersin.org/journals/global-womens-health/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:15.462916+00:00 |
| Frontiers in Health Services | [feed](<https://www.frontiersin.org/journals/health-services/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:16.087501+00:00 |
| Frontiers in Human Dynamics | [feed](<https://www.frontiersin.org/journals/human-dynamics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:16.945129+00:00 |
| Frontiers in Human Neuroscience | [feed](<https://www.frontiersin.org/journals/human-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:17.875088+00:00 |
| Frontiers in Immunology | [feed](<https://www.frontiersin.org/journals/immunology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:18.611592+00:00 |
| Frontiers in Insect Science | [feed](<https://www.frontiersin.org/journals/insect-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:20.169145+00:00 |
| Frontiers in Integrative Neuroscience | [feed](<https://www.frontiersin.org/journals/integrative-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:22.005730+00:00 |
| Frontiers in Marine Science | [feed](<https://www.frontiersin.org/journals/marine-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:22.772234+00:00 |
| Frontiers in Materials | [feed](<https://www.frontiersin.org/journals/materials/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:23.840710+00:00 |
| Frontiers in Mechanical Engineering-Switzerland | [feed](<https://www.frontiersin.org/journals/mechanical-engineering/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:24.537566+00:00 |
| Frontiers in Medical Technology | [feed](<https://www.frontiersin.org/journals/medical-technology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:25.754589+00:00 |
| Frontiers in Medicine | [feed](<https://www.frontiersin.org/journals/medicine/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:26.890048+00:00 |
| Frontiers in Microbiology | [feed](<https://www.frontiersin.org/journals/microbiology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:27.986828+00:00 |
| Frontiers in Molecular Biosciences | [feed](<https://www.frontiersin.org/journals/molecular-biosciences/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:28.932279+00:00 |
| Frontiers in Molecular Neuroscience | [feed](<https://www.frontiersin.org/journals/molecular-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:30.571346+00:00 |
| Frontiers in Nanotechnology | [feed](<https://www.frontiersin.org/journals/nanotechnology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:31.187917+00:00 |
| Frontiers in Neural Circuits | [feed](<https://www.frontiersin.org/journals/neural-circuits/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:32.336454+00:00 |
| Frontiers in Neuroanatomy | [feed](<https://www.frontiersin.org/journals/neuroanatomy/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:32.849108+00:00 |
| Frontiers in Neuroergonomics | [feed](<https://www.frontiersin.org/journals/neuroergonomics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:33.696321+00:00 |
| Frontiers in Neuroinformatics | [feed](<https://www.frontiersin.org/journals/neuroinformatics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:35.017522+00:00 |
| Frontiers in Neurology | [feed](<https://www.frontiersin.org/journals/neurology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:36.291452+00:00 |
| Frontiers in Neurorobotics | [feed](<https://www.frontiersin.org/journals/neurorobotics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:37.335308+00:00 |
| Frontiers in Neuroscience | [feed](<https://www.frontiersin.org/journals/neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:38.550583+00:00 |
| Frontiers in Nutrition | [feed](<https://www.frontiersin.org/journals/nutrition/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:39.602013+00:00 |
| Frontiers in Oncology | [feed](<https://www.frontiersin.org/journals/oncology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:41.195843+00:00 |
| Frontiers in Oral Health | [feed](<https://www.frontiersin.org/journals/oral-health/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:42.406901+00:00 |
| Frontiers in Pain Research | [feed](<https://www.frontiersin.org/journals/pain-research/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:43.895433+00:00 |
| Frontiers in Pediatrics | [feed](<https://www.frontiersin.org/journals/pediatrics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:44.910962+00:00 |
| Frontiers in Pharmacology | [feed](<https://www.frontiersin.org/journals/pharmacology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:46.241823+00:00 |
| Frontiers in Physics | [feed](<https://www.frontiersin.org/journals/physics/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:47.772690+00:00 |
| Frontiers in Physiology | [feed](<https://www.frontiersin.org/journals/physiology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:49.490864+00:00 |
| Frontiers in Plant Science | [feed](<https://www.frontiersin.org/journals/plant-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:50.351368+00:00 |
| Frontiers in Political Science | [feed](<https://www.frontiersin.org/journals/political-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:51.667965+00:00 |
| Frontiers in Psychiatry | [feed](<https://www.frontiersin.org/journals/psychiatry/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:52.434210+00:00 |
| Frontiers in Psychology | [feed](<https://www.frontiersin.org/journals/psychology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:52.980690+00:00 |
| Frontiers in Public Health | [feed](<https://www.frontiersin.org/journals/public-health/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:53.893016+00:00 |
| Frontiers in Rehabilitation Sciences | [feed](<https://www.frontiersin.org/journals/rehabilitation-sciences/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:55.053499+00:00 |
| Frontiers in Remote Sensing | [feed](<https://www.frontiersin.org/journals/remote-sensing/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:55.988179+00:00 |
| Frontiers in Reproductive Health | [feed](<https://www.frontiersin.org/journals/reproductive-health/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:57.070413+00:00 |
| Frontiers in Robotics and AI | [feed](<https://www.frontiersin.org/journals/robotics-and-ai/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:02:58.967974+00:00 |
| Frontiers in Signal Processing | [feed](<https://www.frontiersin.org/journals/signal-processing/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:00.552131+00:00 |
| Frontiers in Sociology | [feed](<https://www.frontiersin.org/journals/sociology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:00.985401+00:00 |
| Frontiers in Soil Science | [feed](<https://www.frontiersin.org/journals/soil-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:01.605260+00:00 |
| Frontiers in Sports and Active Living | [feed](<https://www.frontiersin.org/journals/sports-and-active-living/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:02.739068+00:00 |
| Frontiers in Surgery | [feed](<https://www.frontiersin.org/journals/surgery/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:03.989155+00:00 |
| Frontiers in Sustainable Cities | [feed](<https://www.frontiersin.org/journals/sustainable-cities/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:04.827670+00:00 |
| Frontiers in Sustainable Food Systems | [feed](<https://www.frontiersin.org/journals/sustainable-food-systems/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:05.682609+00:00 |
| Frontiers in Synaptic Neuroscience | [feed](<https://www.frontiersin.org/journals/synaptic-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:07.114127+00:00 |
| Frontiers in Systems Neuroscience | [feed](<https://www.frontiersin.org/journals/systems-neuroscience/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:08.743617+00:00 |
| Frontiers in Toxicology | [feed](<https://www.frontiersin.org/journals/toxicology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:09.407073+00:00 |
| Frontiers in Veterinary Science | [feed](<https://www.frontiersin.org/journals/veterinary-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:10.769599+00:00 |
| Frontiers in Virology | [feed](<https://www.frontiersin.org/journals/virology/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:12.528014+00:00 |
| Frontiers in Virtual Reality | [feed](<https://www.frontiersin.org/journals/virtual-reality/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:13.066155+00:00 |
| Frontiers in Water | [feed](<https://www.frontiersin.org/journals/water/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:13.840071+00:00 |
| Function | [feed](<https://functionofbeauty.com/collections/all.atom>) | rate-limited | 429 |  |  | 2026-10-04T12:55:44.632119+00:00 |
| Functional Foods in Health and Disease | [feed](<https://www.ffhdj.com/index.php/ffhd/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:48.623914+00:00 |
| FUNDAMENTA INFORMATICAE | [feed](<https://fi.episciences.org/rss/papers>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:55:39.378159+00:00 |
| Fundamental Research | [feed](<https://rss.sciencedirect.com/publication/science/26673258>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:31.145790+00:00 |
| Fungal Biology Reviews | [feed](<https://rss.sciencedirect.com/publication/science/17494613>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:04:31.784811+00:00 |
| FUNGAL GENETICS AND BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/10871845>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:04:32.434638+00:00 |
| Future Foods | [feed](<https://rss.sciencedirect.com/publication/science/26668335>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:33.090456+00:00 |
| FWU Journal of Social Sciences | [feed](<https://ojs.sbbwu.edu.pk/fwu-journal/index.php/ojss/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:57:12.389698+00:00 |
| GAIA-Ecological Perspectives for Science and Society | [feed](<https://gaia.oekom.de/index.php/gaia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:44.676583+00:00 |
| Galicia Clinica | [feed](<https://galiciaclinica.info/gc/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:44.803880+00:00 |
| Galician Medical Journal | [feed](<https://ifnmujournal.com/gmj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:57.820765+00:00 |
| Gateways-International Journal of Community Research and Engagement | [feed](<https://epress.lib.uts.edu.au/journals/index.php/ijcre/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T13:01:14.825581+00:00 |
| GAYANA BOTANICA | [feed](<http://www.scielo.cl/rss.php?pid=0717-664320250001&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:37.302029+00:00 |
| Gene Reports | [feed](<https://rss.sciencedirect.com/publication/science/24520144>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:33.879662+00:00 |
| GENE THERAPY | [feed](<https://www.nature.com/gt.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:00.787902+00:00 |
| GENES & DEVELOPMENT | [feed](<https://genesdev.cshlp.org/rss/current.xml>) | access-blocked | 403 |  |  | 2026-10-04T12:55:45.708682+00:00 |
| GENES AND IMMUNITY | [feed](<https://www.nature.com/gene.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:01.777836+00:00 |
| GENOMICS | [feed](<https://rss.sciencedirect.com/publication/science/08887543>) | feed-with-entries | 200 | rss | 38 | 2026-10-04T13:04:34.355445+00:00 |
| Geoambiente On-line | [feed](<https://revistas.ufj.edu.br/geoambiente/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:24.043006+00:00 |
| GEOBIOS | [feed](<https://rss.sciencedirect.com/publication/science/00166995>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:04:34.775381+00:00 |
| Geochemistry | [feed](<https://rss.sciencedirect.com/publication/science/00092819>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:04:35.248079+00:00 |
| Geoconservation Research | [feed](<https://oiccpress.com/gcr/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:04.975751+00:00 |
| Geoderma | [feed](<https://rss.sciencedirect.com/publication/science/00167061>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:35.703613+00:00 |
| Geodesy and Geodynamics | [feed](<https://rss.sciencedirect.com/publication/science/16749847>) | feed-with-entries | 200 | rss | 56 | 2026-10-04T13:04:36.286222+00:00 |
| Geografares | [feed](<https://periodicos.ufes.br/geografares/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:28.048218+00:00 |
| Geograficando | [feed](<https://www.geograficando.fahce.unlp.edu.ar/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:59:51.654850+00:00 |
| Geographia Polonica | [feed](<http://www.geographiapolonica.pl/geographia-polonica.xml>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T12:59:51.777069+00:00 |
| Geographical Review of Japan-Series B | [feed](<https://www.ajg.or.jp/category/society-info/publication/grj-b/feed/>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:59:22.144700+00:00 |
| Geology Geophysics and Environment | [feed](<https://journals.agh.edu.pl/geol/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:54.455680+00:00 |
| GEOMORPHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/0169555X>) | feed-with-entries | 200 | rss | 59 | 2026-10-04T13:04:36.882325+00:00 |
| Geosaberes | [feed](<http://www.geosaberes.ufc.br/geosaberes/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:51.807135+00:00 |
| German Journal of Agricultural Economics | [feed](<https://www.tib-op.org/ojs/index.php/gjae/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T13:00:45.361943+00:00 |
| German Law Journal | [feed](<https://germanlawjournal.podigee.io/feed/mp3>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T12:55:45.849662+00:00 |
| Gestao e Desenvolvimento | [feed](<https://revistas.ucp.pt/index.php/gestaoedesenvolvimento/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:58:20.150915+00:00 |
| GEUS Bulletin | [feed](<https://geusbulletin.org/index.php/geusb/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:46.372762+00:00 |
| GHANA SOCIAL SCIENCE JOURNAL | [feed](<https://journals.ug.edu.gh/index.php/gssj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:39.580323+00:00 |
| Ginekologia Polska | [feed](<https://journals.viamedica.pl/ginekologia_polska/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T13:01:37.861332+00:00 |
| Giornale Italiano di Endodonzia | [feed](<https://www.giornaleitalianoendodonzia.it/gie/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:59:51.807282+00:00 |
| Gland Surgery | [feed](<https://gs.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 28 | 2026-10-04T12:55:48.736045+00:00 |
| Glass Technology-European Journal of Glass Science and Technology Part A | [feed](<https://api.ingentaconnect.com/content/sgt/gta/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T12:54:48.135039+00:00 |
| GLOBAL ENVIRONMENTAL CHANGE-HUMAN AND POLICY DIMENSIONS | [feed](<https://rss.sciencedirect.com/publication/science/09593780>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:04:37.545552+00:00 |
| Global Finance Journal | [feed](<https://rss.sciencedirect.com/publication/science/10440283>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:04:38.128517+00:00 |
| Global Heart | [feed](<https://account.globalheartjournal.com/index.php/up-j-gh/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.759959+00:00 |
| GLOBAL JOURNAL OF ENVIRONMENTAL SCIENCE AND MANAGEMENT-GJESM | [feed](<https://www.gjesm.net/ju.rss>) | access-blocked | 403 |  |  | 2026-10-04T12:59:51.914168+00:00 |
| Global Medical Genetics | [feed](<https://rss.sciencedirect.com/publication/science/26999404>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:04:38.677905+00:00 |
| Gomal Journal of Medical Sciences | [feed](<http://gjms.com.pk/index.php/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 31 | 2026-10-04T12:55:47.181069+00:00 |
| Gondwana Research | [feed](<https://rss.sciencedirect.com/publication/science/1342937X>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:04:39.211479+00:00 |
| Granja-Revista de Ciencias de la Vida | [feed](<http://scielo.senescyt.gob.ec/rss.php?pid=1390-859620250002&lang=es>) | http-error | 502 |  |  | 2026-10-04T13:01:10.087399+00:00 |
| GRAPHICAL MODELS | [feed](<https://rss.sciencedirect.com/publication/science/15240703>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:04:39.779525+00:00 |
| GREEK ROMAN AND BYZANTINE STUDIES | [feed](<https://grbs.library.duke.edu/index.php/grbs/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:47.671746+00:00 |
| Green Chemical Engineering | [feed](<https://rss.sciencedirect.com/publication/science/26669528>) | feed-with-entries | 200 | rss | 54 | 2026-10-04T13:04:40.586129+00:00 |
| GREEN CHEMISTRY | [feed](<http://feeds.rsc.org/rss/gc>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:25.671326+00:00 |
| Grounded Theory Review | [feed](<https://groundedtheoryreview.org/index.php/gtr/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:48.017980+00:00 |
| Groups Complexity Cryptology | [feed](<https://gcc.episciences.org/rss/papers>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:55:44.963106+00:00 |
| GROWTH HORMONE & IGF RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/10966374>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:04:41.221192+00:00 |
| GULF AND CARIBBEAN RESEARCH | [feed](<https://aquila.usm.edu/gcr/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:54:48.840429+00:00 |
| Gut and Liver | [feed](<https://www.nature.com/npjgutliver.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:02.708231+00:00 |
| HAEMATOLOGICA | [feed](<https://haematologica.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 48 | 2026-10-04T12:55:49.683501+00:00 |
| HARMFUL ALGAE | [feed](<https://rss.sciencedirect.com/publication/science/15689883>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:04:41.632947+00:00 |
| HAU-Journal of Ethnographic Theory | [feed](<https://www.haujournal.org/index.php/hau/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:52.120417+00:00 |
| HEALTH & PLACE | [feed](<https://rss.sciencedirect.com/publication/science/13538292>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:04:42.117611+00:00 |
| Health SA Gesondheid | [feed](<https://hsag.co.za/index.php/hsag/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:51.274739+00:00 |
| HEART SURGERY FORUM | [feed](<https://journal.hsforum.com/index.php/HSF/gateway/plugin/WebFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:56:22.375957+00:00 |
| Hepatobiliary Surgery and Nutrition | [feed](<https://hbsn.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 38 | 2026-10-04T12:55:49.848139+00:00 |
| HEREDITY | [feed](<https://www.nature.com/hdy.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:03.300993+00:00 |
| Heritage Science | [feed](<https://www.nature.com/npjheritagesci.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:04.803994+00:00 |
| HIGH TEMPERATURES-HIGH PRESSURES | [feed](<https://hthp.oldcitypublishing.com/index.php/hthp/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:51.452494+00:00 |
| Historia 396 | [feed](<https://historia396.cl/index.php/historia396/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T12:55:50.982628+00:00 |
| Historia Critica | [feed](<https://revistas.uniandes.edu.co/index.php/hiscrit/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:29.855674+00:00 |
| Historia e Cultura | [feed](<https://periodicos.franca.unesp.br/index.php/historiaecultura/gateway/plugin/WebFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:57:26.080059+00:00 |
| HISTORIA MATHEMATICA | [feed](<https://rss.sciencedirect.com/publication/science/03150860>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:04:42.502424+00:00 |
| Historical Studies in Education-Canada | [feed](<https://historicalstudiesineducation.ca/index.php/edu_hse-rhe/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:51.206903+00:00 |
| HISTORY | [feed](<https://www.worldhistory.org/rss2/?lang=en>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:49.152087+00:00 |
| Hormigon y Acero | [feed](<https://www.hormigonyacero.com/index.php/ache/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:52.463614+00:00 |
| Hormones and Behavior | [feed](<https://rss.sciencedirect.com/publication/science/0018506X>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:04:42.866709+00:00 |
| Horticultural Plant Journal | [feed](<https://rss.sciencedirect.com/publication/science/24680141>) | feed-with-entries | 200 | rss | 64 | 2026-10-04T13:04:43.241345+00:00 |
| HPB | [feed](<https://rss.sciencedirect.com/publication/science/1365182X>) | feed-with-entries | 200 | rss | 73 | 2026-10-04T13:04:43.604104+00:00 |
| HTS Teologiese Studies-Theological Studies | [feed](<https://hts.org.za/index.php/hts/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:53.949779+00:00 |
| Human Genome Variation | [feed](<https://www.nature.com/hgv.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:05.685669+00:00 |
| HUMAN MOVEMENT SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/01679457>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:04:43.964818+00:00 |
| HUMAN PATHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00468177>) | feed-with-entries | 200 | rss | 60 | 2026-10-04T13:04:44.550081+00:00 |
| HUMAN RESOURCE MANAGEMENT REVIEW | [feed](<https://rss.sciencedirect.com/publication/science/10534822>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:04:44.908079+00:00 |
| Human-Wildlife Interactions | [feed](<https://digitalcommons.usu.edu/hwi/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:17.514423+00:00 |
| Humana Mente-Journal of Philosophical Studies | [feed](<https://www.humanamente.eu/index.php/HM/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T12:59:54.532408+00:00 |
| Humanidades & Inovacao | [feed](<https://revista.unitins.br/index.php/humanidadeseinovacao/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 32 | 2026-10-04T12:57:58.558749+00:00 |
| Humanities & Social Sciences Communications | [feed](<https://www.nature.com/palcomms.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:06.908517+00:00 |
| Humanities-Basel | [feed](<https://philhist.unibas.ch/en/feed/8587/feed.rss?cHash=aa51aa8f4d04c398dd7e3db8a93644e3>) | not-feed-xml | 200 |  |  | 2026-10-04T12:57:36.113596+00:00 |
| Hume Studies | [feed](<https://www.humesociety.org/ojs/index.php/hs/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error | 301 |  |  | 2026-10-04T12:59:54.614905+00:00 |
| Hungarian Geographical Bulletin | [feed](<https://ojs.mtak.hu/index.php/hungeobull/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:00:59.740587+00:00 |
| HYPERTENSION RESEARCH | [feed](<https://www.nature.com/hr.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:07.514474+00:00 |
| i2 Investigacion e Innovacion en Arquitectura y Territorio | [feed](<https://i2.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:55:55.065998+00:00 |
| IACR Transactions on Symmetric Cryptology | [feed](<https://tosc.iacr.org/index.php/ToSC/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:09.576829+00:00 |
| Iberoamerican Journal of Development Studies | [feed](<https://papiro.unizar.es/ojs/index.php/ried/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:00.867959+00:00 |
| IC-Revista Cientifica de Informacion y Comunicacion | [feed](<https://icjournal-ojs.org/index.php/IC-Journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:55:56.104997+00:00 |
| Ido Movement for Culture-Journal of Martial Arts Anthropology | [feed](<http://imcjournal.com/index.php/en/home?format=feed&type=rss>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T12:56:04.187903+00:00 |
| IEEE Latin America Transactions | [feed](<https://latamt.ieeer9.org/index.php/transactions/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:51.010162+00:00 |
| IEEE Open Journal of Nanotechnology | [feed](<https://oj-nano.ieeenano.org/comments/feed/>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T12:57:05.088850+00:00 |
| IEEE ROBOTICS & AUTOMATION MAGAZINE | [feed](<https://ramagazine.ieee.org/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:57:47.775947+00:00 |
| IEEE SENSORS JOURNAL | [feed](<https://ieee-sensors.org/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:57.617765+00:00 |
| IEEE TRANSACTIONS ON INTELLIGENT TRANSPORTATION SYSTEMS | [feed](<https://ieee-itss.org/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T12:55:57.488217+00:00 |
| iForest-Biogeosciences and Forestry | [feed](<https://iforest.sisef.org/users/?action=rssxml>) | oversize | 200 |  |  | 2026-10-04T12:55:58.031504+00:00 |
| IIUM Engineering Journal | [feed](<https://journals.iium.edu.my/ejournal/index.php/iiumej/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 29 | 2026-10-04T13:01:16.354161+00:00 |
| IIUM Law Journal | [feed](<https://journals.iium.edu.my/iiumlj/index.php/iiumlj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T13:01:26.637350+00:00 |
| IIUM Medical Journal Malaysia | [feed](<https://journals.iium.edu.my/kom/index.php/imjm/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:32.814716+00:00 |
| Image Analysis & Stereology | [feed](<https://www.ias-iss.org/ojs/IAS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:59:54.732968+00:00 |
| IMAGE AND VISION COMPUTING | [feed](<https://rss.sciencedirect.com/publication/science/02628856>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:04:45.260815+00:00 |
| ImmunoTargets and Therapy | [feed](<https://www.dovepress.com/feed/journal/138>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:46.912621+00:00 |
| IN BO-Ricerche e Progetti per il Territorio la Citta e l Architettura | [feed](<https://in-bo.unibo.it/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:05.058283+00:00 |
| In die Skriflig-In Luce Verbi | [feed](<https://indieskriflig.org.za/index.php/skriflig/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:05.705798+00:00 |
| INDAGATIONES MATHEMATICAE-NEW SERIES | [feed](<https://rss.sciencedirect.com/publication/science/00193577>) | feed-with-entries | 200 | rss | 71 | 2026-10-04T13:04:46.388181+00:00 |
| INDIAN JOURNAL OF GENETICS AND PLANT BREEDING | [feed](<https://www.isgpb.org/journal/index.php/IJGPB/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:59:59.431704+00:00 |
| Indonesia Law Review | [feed](<https://scholarhub.ui.ac.id/ilrev/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:58:56.117341+00:00 |
| Indonesian Capital Market Review | [feed](<https://scholarhub.ui.ac.id/icmr/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:09.311936+00:00 |
| Indonesian Journal of Forestry Research | [feed](<https://ejournal.aptklhi.org/index.php/ijfr/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:25.044947+00:00 |
| Indonesian Journal of Pharmacy | [feed](<https://journal.ugm.ac.id/v3/IJP/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:56:25.442589+00:00 |
| INDUSTRIAL CROPS AND PRODUCTS | [feed](<https://rss.sciencedirect.com/publication/science/09266690>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:46.959302+00:00 |
| Infancias Imagenes | [feed](<https://revistas.udistrital.edu.co/index.php/infancias/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T13:01:05.548813+00:00 |
| Infection and Drug Resistance | [feed](<https://www.dovepress.com/feed/journal/28>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:47.872515+00:00 |
| INFECTION GENETICS AND EVOLUTION | [feed](<https://rss.sciencedirect.com/publication/science/15671348>) | feed-with-entries | 200 | rss | 41 | 2026-10-04T13:04:47.536129+00:00 |
| Informal Logic | [feed](<https://informallogic.ca/index.php/informal_logic/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 50 | 2026-10-04T12:56:07.144499+00:00 |
| Informatics in Education | [feed](<https://infedu.vu.lt/journal/INFEDU/feeds/latest>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:05.759434+00:00 |
| INFORMATION & MANAGEMENT | [feed](<https://rss.sciencedirect.com/publication/science/03787206>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:04:47.902235+00:00 |
| Information and Organization | [feed](<https://rss.sciencedirect.com/publication/science/14717727>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:04:48.267738+00:00 |
| INFORMATION AND SOFTWARE TECHNOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/09505849>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:04:48.626881+00:00 |
| Information Geographique | [feed](<https://rss.sciencedirect.com/publication/science/30505208>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:04:49.240948+00:00 |
| INFORMATION PROCESSING LETTERS | [feed](<https://rss.sciencedirect.com/publication/science/00200190>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:04:49.819878+00:00 |
| INGE CUC | [feed](<https://revistascientificas.cuc.edu.co/ingecuc/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:36.441707+00:00 |
| Ingenieria Solidaria | [feed](<https://revistas.ucc.edu.co/index.php/in/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:18.353192+00:00 |
| Ingenieria y Competitividad | [feed](<https://revistaingenieria.univalle.edu.co/index.php/ingenieria_y_competitividad/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:58:06.644164+00:00 |
| INORGANICA CHIMICA ACTA | [feed](<https://rss.sciencedirect.com/publication/science/00201693>) | feed-with-entries | 200 | rss | 96 | 2026-10-04T13:04:50.160977+00:00 |
| Insight Turkey | [feed](<https://www.insightturkey.com/services/rss/articles/all>) | access-blocked | 403 |  |  | 2026-10-04T12:59:58.472747+00:00 |
| Integrative Medicine Research | [feed](<https://rss.sciencedirect.com/publication/science/22134220>) | feed-with-entries | 200 | rss | 66 | 2026-10-04T13:04:50.744128+00:00 |
| Interactive Journal of Medical Research | [feed](<https://www.i-jmr.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:59:54.615004+00:00 |
| InterCambios-Dilemas y transiciones de la Educacion Superior | [feed](<https://ojs.intercambios.cse.udelar.edu.uy/index.php/ic/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:57:08.482166+00:00 |
| INTERMETALLICS | [feed](<https://rss.sciencedirect.com/publication/science/09669795>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:51.107992+00:00 |
| International Business Review | [feed](<https://rss.sciencedirect.com/publication/science/09695931>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:04:51.736568+00:00 |
| International Electronic Journal of Geometry | [feed](<https://ijgeometry.com/feed/>) | access-blocked | 403 |  |  | 2026-10-04T12:56:02.171505+00:00 |
| International Journal for Parasitology-Parasites and Wildlife | [feed](<https://rss.sciencedirect.com/publication/science/22132244>) | feed-with-entries | 200 | rss | 68 | 2026-10-04T13:04:52.284835+00:00 |
| International Journal for Research in Vocational Education and Training-IJRVET | [feed](<https://journals.suub.uni-bremen.de/index.php/ijrvet/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:38.106429+00:00 |
| International Journal for Technology in Mathematics Education | [feed](<https://api.ingentaconnect.com/content/resinf/tme/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T13:00:51.651214+00:00 |
| International Journal of Agriculture and Natural Resources | [feed](<http://www.scielo.cl/rss.php?pid=2452-573120250003&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:40.365323+00:00 |
| International Journal of Alcohol and Drug Research | [feed](<https://ijadr.org/index.php/ijadr/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:59.003408+00:00 |
| International Journal of Analysis and Applications | [feed](<https://etamaths.com/index.php/ijaa/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:55:33.993335+00:00 |
| International Journal of Asia Pacific Studies | [feed](<https://ijaps.usm.my/?feed=comments-rss2>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:55:59.090682+00:00 |
| International Journal of Aviation Aeronautics and Aerospace | [feed](<https://commons.erau.edu/ijaaa/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:04.254344+00:00 |
| INTERNATIONAL JOURNAL OF BEHAVIORAL MEDICINE | [feed](<https://jcom.sissa.it/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:14.182458+00:00 |
| INTERNATIONAL JOURNAL OF BIOCHEMISTRY & CELL BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/13572725>) | feed-with-entries | 200 | rss | 27 | 2026-10-04T13:04:52.671817+00:00 |
| International Journal of Biology and Chemistry | [feed](<https://ijbch.kaznu.kz/index.php/kaznu/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:59.573755+00:00 |
| International Journal of Built Environment and Sustainability | [feed](<https://ijbes.utm.my/index.php/ijbes/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:00.185137+00:00 |
| International Journal of Cardiology | [feed](<https://rss.sciencedirect.com/publication/science/01675273>) | feed-with-entries | 200 | rss | 61 | 2026-10-04T13:04:53.245977+00:00 |
| International Journal of Cardiology Congenital Heart Disease | [feed](<https://rss.sciencedirect.com/publication/science/26666685>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:04:53.809391+00:00 |
| International Journal of Chinese & Comparative Philosophy of Medicine | [feed](<https://ejournals.lib.hkbu.edu.hk/index.php/ijccpm/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:26.793716+00:00 |
| INTERNATIONAL JOURNAL OF COAL GEOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/01665162>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:04:54.150646+00:00 |
| International Journal of Cognitive Research in Science Engineering and Education-IJCRSEE | [feed](<https://www.ijcrsee.com/index.php/ijcrsee/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:57.310602+00:00 |
| International Journal of Combinatorial Optimization Problems and Informatics | [feed](<https://ijcopi.org/ojs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 28 | 2026-10-04T12:56:01.033474+00:00 |
| International Journal of Communication | [feed](<https://ijoc.org/index.php/ijoc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 197 | 2026-10-04T12:56:03.530838+00:00 |
| International Journal of Contemporary Economics and Administrative Sciences | [feed](<http://ijceas.com/index.php/ijceas/gateway/plugin/WebFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:56:00.688914+00:00 |
| International Journal of Cuban Studies | [feed](<https://www.plutojournals.com/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T13:00:22.358724+00:00 |
| International Journal of Design | [feed](<https://ijdesign.org/index.php/IJDesign/feed/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:56:01.219456+00:00 |
| International Journal of Ecological Economics & Statistics | [feed](<http://www.ceser.in/ceserp/index.php/ijees/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:59:33.383294+00:00 |
| International Journal of Ecology & Development | [feed](<http://www.ceser.in/ceserp/index.php/ijed/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:01:11.078910+00:00 |
| International Journal of Economics Management and Accounting | [feed](<https://journals.iium.edu.my/enmjournal/index.php/enmj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:01:37.571886+00:00 |
| International Journal of Educational Research and Innovation | [feed](<https://www.upo.es/revistas/index.php/IJERI/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:47.076298+00:00 |
| International Journal of Engineering Pedagogy | [feed](<https://online-journals.org/index.php/i-jep/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:17.357501+00:00 |
| International Journal of Engineering Research in Africa | [feed](<https://www.scientific.net/JERA/Rss>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:39.071241+00:00 |
| INTERNATIONAL JOURNAL OF ENGINEERING SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00207225>) | feed-with-entries | 200 | rss | 38 | 2026-10-04T13:04:54.510185+00:00 |
| International Journal of English Studies | [feed](<https://revistas.um.es/ijes/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:01:20.369239+00:00 |
| International Journal of Fatigue | [feed](<https://rss.sciencedirect.com/publication/science/01421123>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:55.073264+00:00 |
| International Journal of Fertility & Sterility | [feed](<https://www.ijfs.ir/ju.rss>) | access-blocked | 403 |  |  | 2026-10-04T12:59:57.328051+00:00 |
| International Journal of Gastronomy and Food Science | [feed](<https://rss.sciencedirect.com/publication/science/1878450X>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:04:55.599564+00:00 |
| International Journal of General Medicine | [feed](<https://www.dovepress.com/feed/journal/39>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:48.990855+00:00 |
| International Journal of Health Policy and Management | [feed](<https://www.ijhpm.com/ju.rss>) | feed-with-entries | 200 | rss | 109 | 2026-10-04T12:59:57.855525+00:00 |
| International Journal of Hepatobiliary and Pancreatic Diseases | [feed](<https://rss.sciencedirect.com/publication/science/14993872>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:04:56.344163+00:00 |
| INTERNATIONAL JOURNAL OF IMPOTENCE RESEARCH | [feed](<https://www.nature.com/ijir.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:08.502474+00:00 |
| International Journal of Indigenous Health | [feed](<https://jps.library.utoronto.ca/index.php/ijih/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:42.048042+00:00 |
| INTERNATIONAL JOURNAL OF INDUSTRIAL ERGONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/01698141>) | feed-with-entries | 200 | rss | 71 | 2026-10-04T13:04:57.017567+00:00 |
| International Journal of Integrative Psychotherapy | [feed](<https://www.integrative-journal.com/index.php/ijip/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:58.789689+00:00 |
| International Journal of Korean History | [feed](<https://ijkh.khistory.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 253 | 2026-10-04T12:56:02.595347+00:00 |
| INTERNATIONAL JOURNAL OF LAW AND PSYCHIATRY | [feed](<https://rss.sciencedirect.com/publication/science/01602527>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:04:57.699936+00:00 |
| INTERNATIONAL JOURNAL OF MACHINE TOOLS & MANUFACTURE | [feed](<https://rss.sciencedirect.com/publication/science/08906955>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:04:58.267345+00:00 |
| International Journal of Marketing Communication and New Media | [feed](<http://u3isjournal.isvouga.pt/index.php/ijmcnm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:59:12.781412+00:00 |
| INTERNATIONAL JOURNAL OF MECHANICAL SCIENCES | [feed](<https://rss.sciencedirect.com/publication/science/00207403>) | feed-with-entries | 200 | rss | 96 | 2026-10-04T13:04:58.985812+00:00 |
| International Journal of Multicultural Education | [feed](<https://ijme-journal.org/index.php/ijme/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:03.226273+00:00 |
| INTERNATIONAL JOURNAL OF MULTIPHASE FLOW | [feed](<https://rss.sciencedirect.com/publication/science/03019322>) | feed-with-entries | 200 | rss | 74 | 2026-10-04T13:04:59.334953+00:00 |
| INTERNATIONAL JOURNAL OF NON-LINEAR MECHANICS | [feed](<https://rss.sciencedirect.com/publication/science/00207462>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:05:00.359618+00:00 |
| INTERNATIONAL JOURNAL OF OBESITY | [feed](<https://www.nature.com/ijo.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:09.414975+00:00 |
| International Journal of Optimization and Control-Theories & Applications-IJOCTA | [feed](<https://ijocta.org/index.php/files/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:56:03.645204+00:00 |
| International Journal of Oral Science | [feed](<https://www.nature.com/ijos.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:09.952820+00:00 |
| International Journal of Pharmaceutics-X | [feed](<https://rss.sciencedirect.com/publication/science/25901567>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:00.955301+00:00 |
| International Journal of Population Data Science (IJPDS) | [feed](<https://ijpds.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:04.094558+00:00 |
| International Journal of Prognostics and Health Management | [feed](<https://papers.phmsociety.org/index.php/ijphm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:22.741128+00:00 |
| INTERNATIONAL JOURNAL OF PROJECT MANAGEMENT | [feed](<https://rss.sciencedirect.com/publication/science/02637863>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:05:01.311351+00:00 |
| International Journal of Public Health | [feed](<https://www.ssph-journal.org/journals/international-journal-of-public-health/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:41.746690+00:00 |
| International Journal of Renewable Energy Research | [feed](<https://www.ijrer.org/index.php/ijrer/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:58.397352+00:00 |
| INTERNATIONAL JOURNAL OF RESEARCH IN MARKETING | [feed](<https://rss.sciencedirect.com/publication/science/01678116>) | feed-with-entries | 200 | rss | 53 | 2026-10-04T13:05:01.899538+00:00 |
| INTERNATIONAL JOURNAL OF RIVER BASIN MANAGEMENT | [feed](<https://rss.sciencedirect.com/publication/science/2213297X>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:05:03.050930+00:00 |
| International Journal of the Commons | [feed](<https://account.thecommonsjournal.org/index.php/up-j-ijc/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:32.526243+00:00 |
| International Journal of Womens Health | [feed](<https://www.dovepress.com/feed/journal/45>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:49.650467+00:00 |
| International Review of Economics Education | [feed](<https://rss.sciencedirect.com/publication/science/14773880>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:05:03.833311+00:00 |
| International Review of Research in Open and Distributed Learning | [feed](<https://www.irrodl.org/index.php/irrodl/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:58.980604+00:00 |
| International Review of Social Psychology | [feed](<https://account.rips-irsp.com/index.php/up-j-irsp/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760403+00:00 |
| Internet Journal of Allied Health Sciences and Practice | [feed](<https://nsuworks.nova.edu/ijahsp/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:57:03.519340+00:00 |
| Intersecciones en Antropologia | [feed](<https://interseccionesantro.soc.unicen.edu.ar/index.php/intersecciones/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T12:56:08.010687+00:00 |
| Intersections-East European Journal of Society and Politics | [feed](<https://intersections.tk.mta.hu/index.php/intersections/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:08.455133+00:00 |
| Intrecci d Arte | [feed](<https://intreccidarte.unibo.it/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:08.626770+00:00 |
| Investigacion y Educacion en Enfermeria | [feed](<https://revistas.udea.edu.co/index.php/iee/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:58:21.975441+00:00 |
| Investigaciones sobre Lectura | [feed](<https://riuma.uma.es/rest/opensearch/search?format=atom&scope=c1c6ba50-3829-4fa0-a731-caef15973065&query=*>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:44.721461+00:00 |
| Investigaciones Turisticas | [feed](<https://investigacionesturisticas.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T12:56:08.638322+00:00 |
| Iranian Journal of Biotechnology | [feed](<https://www.ijbiotech.com/ju.rss>) | access-blocked | 403 |  |  | 2026-10-04T12:59:56.279835+00:00 |
| Iranian Journal of Catalysis | [feed](<https://oiccpress.com/ijc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:58.524390+00:00 |
| Iranian Red Crescent Medical Journal | [feed](<https://ircmj.com/ju.rss>) | access-blocked | 403 |  |  | 2026-10-04T12:56:10.319717+00:00 |
| ISME Communications | [feed](<https://www.nature.com/ismecomms.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:10.774991+00:00 |
| ISME Journal | [feed](<https://www.nature.com/ismej.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:11.899070+00:00 |
| ISRA International Journal of Islamic Finance | [feed](<https://journal.inceif.edu.my/index.php/ijif/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:23.138074+00:00 |
| Istanbul Universitesi Sosyoloji Dergisi-Istanbul University Journal of Sociology | [feed](<https://doaj.org/feed>) | feed-with-entries | 200 | atom | 100 | 2026-10-04T12:55:18.573650+00:00 |
| Italian Journal of Engineering Geology and Environment | [feed](<https://rosa.uniroma1.it/rosa02/engineering_geology_environment/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:01:21.920822+00:00 |
| ITALIAN JOURNAL OF FOOD SCIENCE | [feed](<https://www.itjfs.com/index.php/ijfs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:59:59.980136+00:00 |
| Italian Journal of Medicine | [feed](<https://www.italjmed.org/ijm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:59:59.948026+00:00 |
| Ius Canonicum | [feed](<https://revistas.unav.edu/index.php/ius-canonicum/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:21.007440+00:00 |
| Ius Humani-Revista de Derecho | [feed](<https://iushumani.org/index.php/iushumani/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:56:10.506538+00:00 |
| Izvestiya Instituta Matematiki i Informatiki-Udmurtskogo Gosudarstvennogo Universiteta | [feed](<https://journals.udsu.ru/mathematics/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:56:39.456519+00:00 |
| Jamba-Journal of Disaster Risk Studies | [feed](<https://jamba.org.za/index.php/jamba/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:10.986246+00:00 |
| JAPAN AND THE WORLD ECONOMY | [feed](<https://rss.sciencedirect.com/publication/science/09221425>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:05:04.554720+00:00 |
| Japanese Dental Science Review | [feed](<https://rss.sciencedirect.com/publication/science/18827616>) | feed-with-entries | 200 | rss | 51 | 2026-10-04T13:05:05.190664+00:00 |
| JATI-Journal of Southeast Asian Studies | [feed](<https://jati.um.edu.my/index.php/jati/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:11.088166+00:00 |
| JCI Insight | [feed](<https://insight.jci.org/rss>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T12:56:07.425278+00:00 |
| Jeu-Revue de Theatre | [feed](<https://revuejeu.org/feed/>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T12:58:43.058195+00:00 |
| JFR-Journal of Family Research | [feed](<https://ubp.uni-bamberg.de/jfr/index.php/jfr/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 24 | 2026-10-04T12:59:13.142666+00:00 |
| JMIR Aging | [feed](<https://aging.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:54:36.300840+00:00 |
| JMIR Cancer | [feed](<https://cancer.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:00.292910+00:00 |
| JMIR Formative Research | [feed](<https://formative.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:42.117340+00:00 |
| JMIR Human Factors | [feed](<https://humanfactors.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:54.552379+00:00 |
| JMIR Infodemiology | [feed](<https://infodemiology.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:06.940024+00:00 |
| JMIR Medical Informatics | [feed](<https://medinform.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:57.180582+00:00 |
| JMIR Mental Health | [feed](<https://mental.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:57.440364+00:00 |
| JMIR mHealth and uHealth | [feed](<https://mhealth.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:58.091681+00:00 |
| JMIR Pediatrics and Parenting | [feed](<https://pediatrics.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:25.783766+00:00 |
| JMIR Public Health and Surveillance | [feed](<https://publichealth.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:44.376088+00:00 |
| JMIR Research Protocols | [feed](<https://www.researchprotocols.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:28.487047+00:00 |
| JMIR Serious Games | [feed](<https://games.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:55:44.877197+00:00 |
| JNP- The Journal for Nurse Practitioners | [feed](<https://rss.sciencedirect.com/publication/science/15554155>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:05:05.828797+00:00 |
| JNT-JOURNAL OF NARRATIVE THEORY | [feed](<https://journalofnarrativetheory.com/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:28.223747+00:00 |
| Jordan Journal of Chemistry | [feed](<https://jjc.yu.edu.jo/index.php/jjc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:56:17.345460+00:00 |
| Jordan Journal of Mathematics and Statistics | [feed](<https://jjms.yu.edu.jo/index.php/jjms/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:56:18.498718+00:00 |
| Jordan Journal of Modern Languages & Literature | [feed](<https://jjmll.yu.edu.jo/index.php/jjmll/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 21 | 2026-10-04T12:56:17.493588+00:00 |
| Journal de l Ecole Polytechnique-Mathematiques | [feed](<https://jep.math.cnrs.fr/index.php/JEP/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 34 | 2026-10-04T12:56:14.402405+00:00 |
| JOURNAL DE MATHEMATIQUES PURES ET APPLIQUEES | [feed](<https://rss.sciencedirect.com/publication/science/00217824>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:05:06.546681+00:00 |
| Journal for Critical Education Policy Studies | [feed](<https://jceps.com/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T12:56:12.044996+00:00 |
| JOURNAL FOR NATURE CONSERVATION | [feed](<https://rss.sciencedirect.com/publication/science/16171381>) | feed-with-entries | 200 | rss | 76 | 2026-10-04T13:05:07.280114+00:00 |
| JOURNAL FOR THE STUDY OF RELIGIONS AND IDEOLOGIES | [feed](<https://thenewjsri.ro/index.php/njsri/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:59:08.412904+00:00 |
| Journal fur Kulturpflanzen | [feed](<https://ojs.openagrar.de/index.php/Kulturpflanzenjournal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:10.777755+00:00 |
| JOURNAL OF ACCOUNTING & ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/01654101>) | feed-with-entries | 200 | rss | 51 | 2026-10-04T13:05:07.630859+00:00 |
| Journal of Adolescent Health | [feed](<https://rss.sciencedirect.com/publication/science/1054139X>) | feed-with-entries | 200 | rss | 78 | 2026-10-04T13:05:08.218529+00:00 |
| JOURNAL OF AEROSOL SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00218502>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:05:08.839502+00:00 |
| JOURNAL OF AGRICULTURAL ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/07437315>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:09.456683+00:00 |
| Journal of Agricultural Engineering | [feed](<https://www.agroengineering.org/jae/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:59:20.763294+00:00 |
| Journal of Agriculture and Environment for International Development | [feed](<https://www.jaeid.it/index.php/jaeid/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T13:00:01.922191+00:00 |
| JOURNAL OF AIR TRANSPORT MANAGEMENT | [feed](<https://rss.sciencedirect.com/publication/science/09696997>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:05:10.488116+00:00 |
| Journal of Al-Tamaddun | [feed](<https://ijie.um.edu.my/index.php/JAT/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:53.792018+00:00 |
| Journal of Alloys and Compounds | [feed](<https://rss.sciencedirect.com/publication/science/09258388>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:11.694400+00:00 |
| JOURNAL OF ANALYTICAL AND APPLIED PYROLYSIS | [feed](<https://rss.sciencedirect.com/publication/science/01652370>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:12.907632+00:00 |
| Journal of Animal Behaviour and Biometeorology | [feed](<https://malque.pub/ojs/index.php/jabb/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:54.498721+00:00 |
| JOURNAL OF ANTHROPOLOGICAL ARCHAEOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/02784165>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:05:13.281044+00:00 |
| JOURNAL OF ANTIBIOTICS | [feed](<https://www.nature.com/ja.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:13.300827+00:00 |
| Journal of Applied Fluid Mechanics | [feed](<https://www.jafmonline.net/ju.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:02.048854+00:00 |
| JOURNAL OF APPLIED GEOPHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/09269851>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:13.838688+00:00 |
| JOURNAL OF APPROXIMATION THEORY | [feed](<https://rss.sciencedirect.com/publication/science/00219045>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:05:14.175805+00:00 |
| JOURNAL OF ARTIFICIAL INTELLIGENCE RESEARCH | [feed](<https://www.jair.org/index.php/jair/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:02.056129+00:00 |
| Journal of Asia-Pacific Biodiversity | [feed](<https://rss.sciencedirect.com/publication/science/2287884X>) | feed-with-entries | 200 | rss | 75 | 2026-10-04T13:05:14.700922+00:00 |
| JOURNAL OF ASIAN EARTH SCIENCES | [feed](<https://rss.sciencedirect.com/publication/science/13679120>) | feed-with-entries | 200 | rss | 74 | 2026-10-04T13:05:15.250152+00:00 |
| Journal of Banking and Finance Law and Practice | [feed](<https://rss.sciencedirect.com/publication/science/03784266>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:05:15.595316+00:00 |
| Journal of Behavioral and Cognitive Therapy | [feed](<https://rss.sciencedirect.com/publication/science/25899791>) | feed-with-entries | 200 | rss | 39 | 2026-10-04T13:05:15.940368+00:00 |
| Journal of Behavioral and Experimental Economics | [feed](<https://rss.sciencedirect.com/publication/science/22148043>) | feed-with-entries | 200 | rss | 38 | 2026-10-04T13:05:16.311516+00:00 |
| Journal of Behavioral Science | [feed](<https://so06.tci-thaijo.org/index.php/IJBS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:02.032022+00:00 |
| Journal of Biomimetics Biomaterials and Biomedical Engineering | [feed](<https://www.scientific.net/JBBBE/Rss>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:01:14.104693+00:00 |
| JOURNAL OF CARDIOVASCULAR SURGERY | [feed](<https://rss.sciencedirect.com/publication/science/00225223>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:16.658187+00:00 |
| Journal of Cereal Science | [feed](<https://rss.sciencedirect.com/publication/science/07335210>) | feed-with-entries | 200 | rss | 38 | 2026-10-04T13:05:17.244573+00:00 |
| JOURNAL OF CHEMICAL NEUROANATOMY | [feed](<https://rss.sciencedirect.com/publication/science/08910618>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:05:17.633790+00:00 |
| JOURNAL OF CHEMICAL THERMODYNAMICS | [feed](<https://rss.sciencedirect.com/publication/science/00219614>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:18.252645+00:00 |
| Journal of Childhood Studies | [feed](<https://journals.uvic.ca/index.php/jcs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:40.331975+00:00 |
| Journal of Choice Modelling | [feed](<https://rss.sciencedirect.com/publication/science/17555345>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:05:18.789700+00:00 |
| JOURNAL OF CHROMATOGRAPHY A | [feed](<https://rss.sciencedirect.com/publication/science/00219673>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:19.144036+00:00 |
| Journal of Clinical and Diagnostic Research | [feed](<http://jcdr.net/rss.aspx>) | feed-with-entries | 200 | rss | 127 | 2026-10-04T12:56:11.549749+00:00 |
| Journal of Clinical and Experimental Hepatology | [feed](<https://rss.sciencedirect.com/publication/science/09736883>) | feed-with-entries | 200 | rss | 46 | 2026-10-04T13:05:19.676759+00:00 |
| JOURNAL OF CLINICAL INVESTIGATION | [feed](<https://www.jci.org/rss>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:00:02.313183+00:00 |
| Journal of Clinical Tuberculosis and Other Mycobacterial Diseases | [feed](<https://rss.sciencedirect.com/publication/science/24055794>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:05:20.418035+00:00 |
| JOURNAL OF COMBINATORIAL THEORY SERIES A | [feed](<https://rss.sciencedirect.com/publication/science/00973165>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:05:20.900855+00:00 |
| JOURNAL OF COMBINATORIAL THEORY SERIES B | [feed](<https://rss.sciencedirect.com/publication/science/00958956>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:05:21.328680+00:00 |
| Journal of Commodity Markets | [feed](<https://rss.sciencedirect.com/publication/science/24058513>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:21.949694+00:00 |
| JOURNAL OF COMPARATIVE ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/01475967>) | feed-with-entries | 200 | rss | 59 | 2026-10-04T13:05:23.169885+00:00 |
| JOURNAL OF COMPARATIVE PATHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00219975>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:05:24.739965+00:00 |
| JOURNAL OF COMPUTATIONAL PHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/00219991>) | feed-with-entries | 200 | rss | 88 | 2026-10-04T13:05:25.444585+00:00 |
| Journal of Computer Languages | [feed](<https://rss.sciencedirect.com/publication/science/25901184>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:05:26.292837+00:00 |
| JOURNAL OF CONSCIOUSNESS STUDIES | [feed](<https://api.ingentaconnect.com/content/imp/jcs/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T13:01:14.442701+00:00 |
| Journal of Contemporary European Research | [feed](<https://jcer.net/index.php/jcer/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:56:12.101303+00:00 |
| JOURNAL OF CRANIO-MAXILLOFACIAL SURGERY | [feed](<https://rss.sciencedirect.com/publication/science/10105182>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:05:27.110077+00:00 |
| Journal of Criminal Psychology | [feed](<https://rss.sciencedirect.com/publication/science/02643707>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:05:27.982874+00:00 |
| Journal of Dentistry Indonesia | [feed](<https://scholarhub.ui.ac.id/jdi/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:22.589433+00:00 |
| Journal of Destination Marketing & Management | [feed](<https://rss.sciencedirect.com/publication/science/2212571X>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:05:29.024386+00:00 |
| Journal of E-Learning and Knowledge Society | [feed](<https://www.je-lks.org/ojs/index.php/Je-LKS_EN/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T13:00:03.038049+00:00 |
| Journal of Economic Integration | [feed](<https://www.e-jei.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 836 | 2026-10-04T12:59:43.052078+00:00 |
| Journal of Education Culture and Society | [feed](<https://jecs.pl/index.php/jecs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:14.227620+00:00 |
| Journal of Educational Cultural and Psychological Studies | [feed](<https://www.ledonline.it/index.php/ECPS-Journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:09.794435+00:00 |
| Journal of Electrocardiology | [feed](<https://rss.sciencedirect.com/publication/science/00220736>) | feed-with-entries | 200 | rss | 72 | 2026-10-04T13:05:29.763894+00:00 |
| Journal of Electrochemical Science and Engineering | [feed](<https://pub.iapchem.org/ojs/index.php/JESE/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:02.802994+00:00 |
| JOURNAL OF ELECTRON SPECTROSCOPY AND RELATED PHENOMENA | [feed](<https://rss.sciencedirect.com/publication/science/03682048>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:05:30.587799+00:00 |
| Journal of EndoVascular Resuscitation and Trauma Management | [feed](<https://publicera.kb.se/jevtm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:01:03.423619+00:00 |
| Journal of Energy Chemistry | [feed](<https://rss.sciencedirect.com/publication/science/20954956>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:31.351403+00:00 |
| Journal of Energy in Southern Africa | [feed](<https://energyjournal.africa/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:29.284302+00:00 |
| Journal of Energy Storage | [feed](<https://rss.sciencedirect.com/publication/science/2352152X>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:31.937889+00:00 |
| JOURNAL OF ENVIRONMENTAL ECONOMICS AND MANAGEMENT | [feed](<https://rss.sciencedirect.com/publication/science/00950696>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:05:32.540118+00:00 |
| JOURNAL OF EQUINE VETERINARY SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/07370806>) | feed-with-entries | 200 | rss | 69 | 2026-10-04T13:05:33.213796+00:00 |
| Journal of Exercise Rehabilitation | [feed](<https://www.e-jer.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T12:59:43.517223+00:00 |
| JOURNAL OF EXPERIMENTAL MARINE BIOLOGY AND ECOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00220981>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:05:34.058739+00:00 |
| Journal of Exposure Science and Environmental Epidemiology | [feed](<https://www.nature.com/jes.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:14.748216+00:00 |
| Journal of Eye Movement Research | [feed](<https://bop.unibe.ch/JEMR/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:54:58.474210+00:00 |
| Journal of Family Business Strategy | [feed](<https://rss.sciencedirect.com/publication/science/18778585>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:05:34.796656+00:00 |
| Journal of Feminist Scholarship | [feed](<https://digitalcommons.uri.edu/jfs/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:17.354144+00:00 |
| JOURNAL OF FINANCIAL INTERMEDIATION | [feed](<https://rss.sciencedirect.com/publication/science/10429573>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:05:35.449713+00:00 |
| Journal of Financial Stability | [feed](<https://rss.sciencedirect.com/publication/science/15723089>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:36.236642+00:00 |
| JOURNAL OF FLUENCY DISORDERS | [feed](<https://rss.sciencedirect.com/publication/science/0094730X>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:05:36.740088+00:00 |
| JOURNAL OF FOOD PROTECTION | [feed](<https://rss.sciencedirect.com/publication/science/0362028X>) | feed-with-entries | 200 | rss | 53 | 2026-10-04T13:05:37.099543+00:00 |
| Journal of French and Francophone Philosophy | [feed](<https://www.jffp.org/ojs/jffp/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T13:00:03.753102+00:00 |
| Journal of Future Foods | [feed](<https://rss.sciencedirect.com/publication/science/27725669>) | feed-with-entries | 200 | rss | 95 | 2026-10-04T13:05:37.607785+00:00 |
| Journal of Gastrointestinal and Liver Diseases | [feed](<https://jgld.ro/jgld/index.php/jgld/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:15.889017+00:00 |
| JOURNAL OF GENETICS | [feed](<https://rss.sciencedirect.com/publication/science/16738527>) | feed-with-entries | 200 | rss | 71 | 2026-10-04T13:05:38.168635+00:00 |
| JOURNAL OF GEOMETRY AND PHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/03930440>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:05:38.908241+00:00 |
| Journal of Geosciences | [feed](<http://www.jgeosci.org/jgeosci.rss>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T13:00:04.823509+00:00 |
| Journal of Gerontology and Geriatrics | [feed](<https://www.jgerontology-geriatrics.com/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:04.837758+00:00 |
| JOURNAL OF GREAT LAKES RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/03801330>) | feed-with-entries | 200 | rss | 79 | 2026-10-04T13:05:39.818454+00:00 |
| Journal of Hand and Microsurgery | [feed](<https://rss.sciencedirect.com/publication/science/09743227>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:40.393682+00:00 |
| Journal of Happiness Studies | [feed](<https://rss.sciencedirect.com/publication/science/00472484>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:05:41.201181+00:00 |
| Journal of Healthcare Quality Research | [feed](<https://rss.sciencedirect.com/publication/science/26036479>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:05:41.978240+00:00 |
| Journal of Hepatocellular Carcinoma | [feed](<https://www.dovepress.com/feed/journal/148>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:50.484194+00:00 |
| Journal of Herbal Medicine | [feed](<https://rss.sciencedirect.com/publication/science/00222496>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:42.559627+00:00 |
| JOURNAL OF HISTORICAL GEOGRAPHY | [feed](<https://rss.sciencedirect.com/publication/science/03057488>) | feed-with-entries | 200 | rss | 52 | 2026-10-04T13:05:43.176813+00:00 |
| Journal of Hospitality and Tourism Management | [feed](<https://rss.sciencedirect.com/publication/science/14476770>) | feed-with-entries | 200 | rss | 82 | 2026-10-04T13:05:43.970071+00:00 |
| JOURNAL OF HOUSING ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/10511377>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:05:44.851766+00:00 |
| JOURNAL OF HUMAN GENETICS | [feed](<https://www.nature.com/jhg.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:15.697437+00:00 |
| JOURNAL OF HUMAN HYPERTENSION | [feed](<https://www.nature.com/jhh.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:16.903438+00:00 |
| Journal of Humanistic Mathematics | [feed](<https://scholarship.claremont.edu/jhm/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:58:56.374748+00:00 |
| Journal of Hydro-environment Research | [feed](<https://rss.sciencedirect.com/publication/science/15706443>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:05:45.519539+00:00 |
| Journal of Hydrology | [feed](<https://rss.sciencedirect.com/publication/science/00221694>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:05:46.038352+00:00 |
| Journal of Hydrology X | [feed](<https://rss.sciencedirect.com/publication/science/25899155>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:05:46.652084+00:00 |
| Journal of ICT Research and Applications | [feed](<https://journals.itb.ac.id/index.php/jictra/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:56:31.955071+00:00 |
| JOURNAL OF IMMUNOLOGICAL METHODS | [feed](<https://rss.sciencedirect.com/publication/science/00221759>) | feed-with-entries | 200 | rss | 27 | 2026-10-04T13:05:47.138418+00:00 |
| JOURNAL OF INFECTION | [feed](<https://rss.sciencedirect.com/publication/science/01634453>) | feed-with-entries | 200 | rss | 54 | 2026-10-04T13:05:47.763311+00:00 |
| Journal of Infection and Public Health | [feed](<https://rss.sciencedirect.com/publication/science/18760341>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:05:48.342308+00:00 |
| Journal of Infection in Developing Countries | [feed](<https://jidc.org/index.php/journal/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:16.719178+00:00 |
| Journal of Inflammation Research | [feed](<https://www.dovepress.com/feed/journal/35>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:51.429827+00:00 |
| Journal of Information and Organizational Sciences | [feed](<https://jios.foi.hr/index.php/jios/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:56:16.831017+00:00 |
| Journal of Information Security and Applications | [feed](<https://rss.sciencedirect.com/publication/science/22142126>) | feed-with-entries | 200 | rss | 87 | 2026-10-04T13:05:48.750573+00:00 |
| Journal of Infrastructure Policy and Development | [feed](<https://systems.enpress-publisher.com/index.php/jipd/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:59:04.939198+00:00 |
| Journal of Innovation & Knowledge | [feed](<https://rss.sciencedirect.com/publication/science/2444569X>) | feed-with-entries | 200 | rss | 92 | 2026-10-04T13:05:49.357700+00:00 |
| Journal of Insect Biodiversity | [feed](<https://www.mapress.com/jib/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 2 | 2026-10-04T13:00:10.991318+00:00 |
| Journal of Integrative Medicine-JIM | [feed](<https://rss.sciencedirect.com/publication/science/20954964>) | feed-with-entries | 200 | rss | 46 | 2026-10-04T13:05:49.966181+00:00 |
| Journal of Intelligence Studies in Business | [feed](<https://journal.lu.lv/JISIB/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:23.562182+00:00 |
| Journal of Interactive Media in Education | [feed](<https://account.jime.open.ac.uk/index.php/up-j-jime/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760035+00:00 |
| Journal of International Advanced Otology | [feed](<https://advancedotology.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:54:34.712189+00:00 |
| Journal of International and Comparative Education | [feed](<https://jice.um.edu.my/index.php/JICE/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:56:16.151066+00:00 |
| Journal of International Financial Markets Institutions & Money | [feed](<https://rss.sciencedirect.com/publication/science/10424431>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:05:50.589917+00:00 |
| Journal of International Management | [feed](<https://rss.sciencedirect.com/publication/science/10754253>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:05:51.003668+00:00 |
| JOURNAL OF INTERNATIONAL MONEY AND FINANCE | [feed](<https://rss.sciencedirect.com/publication/science/02615606>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:05:52.324866+00:00 |
| Journal of International Studies-JIS | [feed](<https://e-journal.uum.edu.my/index.php/jis/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:20.252059+00:00 |
| Journal of Korean Neurosurgical Society | [feed](<https://jkns.or.kr/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T12:56:19.123527+00:00 |
| Journal of Korean Studies | [feed](<https://gwiks.elliott.gwu.edu/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:55:48.953609+00:00 |
| Journal of Language and Education | [feed](<https://jle.hse.ru/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 521 | 2026-10-04T12:56:19.125829+00:00 |
| Journal of Learning Analytics | [feed](<https://www.learning-analytics.info/index.php/JLA/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:09.580243+00:00 |
| Journal of Lithic Studies | [feed](<https://journals.ed.ac.uk/lithicstudies/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:30.404506+00:00 |
| Journal of Logical and Algebraic Methods in Programming | [feed](<https://rss.sciencedirect.com/publication/science/23522208>) | feed-with-entries | 200 | rss | 44 | 2026-10-04T13:05:53.170552+00:00 |
| JOURNAL OF MACROECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/01640704>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:05:53.997311+00:00 |
| Journal of Magnesium and Alloys | [feed](<https://rss.sciencedirect.com/publication/science/22139567>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:05:54.867603+00:00 |
| Journal of Magnetic Resonance Open | [feed](<https://rss.sciencedirect.com/publication/science/26664410>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:05:55.708314+00:00 |
| Journal of Management Science and Engineering | [feed](<https://rss.sciencedirect.com/publication/science/20962320>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:05:56.449547+00:00 |
| Journal of Manufacturing Processes | [feed](<https://rss.sciencedirect.com/publication/science/15266125>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:05:57.161253+00:00 |
| JOURNAL OF MARINE SYSTEMS | [feed](<https://rss.sciencedirect.com/publication/science/09247963>) | feed-with-entries | 200 | rss | 39 | 2026-10-04T13:05:58.074205+00:00 |
| Journal of Materials and Engineering Structures | [feed](<https://revue.ummto.dz/index.php/JMES/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:42.226868+00:00 |
| JOURNAL OF MATHEMATICAL ANALYSIS AND APPLICATIONS | [feed](<https://rss.sciencedirect.com/publication/science/0022247X>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:05:58.774104+00:00 |
| Journal of Mathematical Behavior | [feed](<https://rss.sciencedirect.com/publication/science/07323123>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:05:59.760846+00:00 |
| JOURNAL OF MATHEMATICAL ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/03044068>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:06:00.399222+00:00 |
| Journal of Mathematical Extension | [feed](<https://www.ijmex.com/index.php/ijmex/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:59:58.319454+00:00 |
| Journal of Mathematical Study | [feed](<https://global-sci.com/jms/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T13:01:25.925171+00:00 |
| Journal of Measurements in Engineering | [feed](<https://www.extrica.com/journal/jme/rss/latest>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:59:47.903670+00:00 |
| JOURNAL OF MEDICAL INTERNET RESEARCH | [feed](<https://www.jmir.org/feed/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:05.110015+00:00 |
| JOURNAL OF MEMBRANE SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/03767388>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:00.976687+00:00 |
| Journal of Membrane Science Letters | [feed](<https://rss.sciencedirect.com/publication/science/27724212>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:06:01.641629+00:00 |
| Journal of Migration and Health | [feed](<https://rss.sciencedirect.com/publication/science/26666235>) | feed-with-entries | 200 | rss | 66 | 2026-10-04T13:06:02.227188+00:00 |
| JOURNAL OF MOLECULAR GRAPHICS & MODELLING | [feed](<https://rss.sciencedirect.com/publication/science/10933263>) | feed-with-entries | 200 | rss | 95 | 2026-10-04T13:06:02.851639+00:00 |
| JOURNAL OF MOLECULAR SPECTROSCOPY | [feed](<https://rss.sciencedirect.com/publication/science/00222852>) | feed-with-entries | 200 | rss | 39 | 2026-10-04T13:06:03.275052+00:00 |
| Journal of Multinational Financial Management | [feed](<https://rss.sciencedirect.com/publication/science/1042444X>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:06:03.809663+00:00 |
| JOURNAL OF NEURORADIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/01509861>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:06:04.391086+00:00 |
| JOURNAL OF NEUROSCIENCE METHODS | [feed](<https://rss.sciencedirect.com/publication/science/01650270>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:06:04.774524+00:00 |
| Journal of New Zealand Studies | [feed](<https://ojs.victoria.ac.nz/jnzs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T13:01:00.621415+00:00 |
| Journal of Nonprofit Education and Leadership | [feed](<https://www.js.sagamorepub.com/index.php/jnel/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:07.088024+00:00 |
| Journal of Nuclear Materials | [feed](<https://rss.sciencedirect.com/publication/science/00223115>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:05.160396+00:00 |
| Journal of Nusantara Studies-JONUS | [feed](<https://journal.unisza.edu.my/jonus/index.php/jonus/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:25.993030+00:00 |
| Journal of Open Archaeology Data | [feed](<https://account.openarchaeologydata.metajnl.com/index.php/up-j-joad/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760234+00:00 |
| Journal of Oral Biosciences | [feed](<https://rss.sciencedirect.com/publication/science/13490079>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:06:05.525649+00:00 |
| Journal of Orthopaedic Translation | [feed](<https://rss.sciencedirect.com/publication/science/2214031X>) | feed-with-entries | 200 | rss | 81 | 2026-10-04T13:06:06.119498+00:00 |
| Journal of Osseointegration | [feed](<https://www.journalofosseointegration.eu/jo/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T13:00:05.878335+00:00 |
| Journal of Outdoor Recreation and Tourism-Research Planning and Management | [feed](<https://rss.sciencedirect.com/publication/science/22130780>) | feed-with-entries | 200 | rss | 46 | 2026-10-04T13:06:06.680890+00:00 |
| Journal of Outdoor Recreation Education and Leadership | [feed](<https://js.sagamorepub.com/index.php/jorel/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:43.071268+00:00 |
| Journal of Pacific Archaeology | [feed](<https://pacificarchaeology.org/index.php/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:21.891624+00:00 |
| Journal of Pain Research | [feed](<https://www.dovepress.com/feed/journal/41>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:52.215439+00:00 |
| Journal of Park and Recreation Administration | [feed](<https://js.sagamorepub.com/index.php/jpra/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:57.610754+00:00 |
| Journal of Patient-Centered Research and Reviews | [feed](<https://institutionalrepository.aah.org/jpcrr/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:56:07.891743+00:00 |
| Journal of Pediatric Surgery Case Reports | [feed](<https://rss.sciencedirect.com/publication/science/22135766>) | feed-with-entries | 200 | rss | 66 | 2026-10-04T13:06:07.094111+00:00 |
| Journal of PeriAnesthesia Nursing | [feed](<https://rss.sciencedirect.com/publication/science/10899472>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:07.669271+00:00 |
| Journal of Perinatology | [feed](<https://www.nature.com/jp.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:17.467266+00:00 |
| JOURNAL OF PHARMACEUTICAL SCIENCES | [feed](<https://rss.sciencedirect.com/publication/science/00223549>) | feed-with-entries | 200 | rss | 73 | 2026-10-04T13:06:08.577699+00:00 |
| JOURNAL OF PHARMACY AND PHARMACEUTICAL SCIENCES | [feed](<https://www.frontierspartnerships.org/journals/journal-of-pharmacy-pharmaceutical-sciences/rss>) | not-feed-xml | 200 |  |  | 2026-10-04T13:01:12.032908+00:00 |
| Journal of Philosophical Economics | [feed](<https://jpe.episciences.org/rss/papers>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:56:41.786687+00:00 |
| JOURNAL OF PHONETICS | [feed](<https://rss.sciencedirect.com/publication/science/00954470>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:06:09.258859+00:00 |
| JOURNAL OF PHOTOCHEMISTRY AND PHOTOBIOLOGY B-BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/10111344>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:06:09.932627+00:00 |
| JOURNAL OF PHYSICS AND CHEMISTRY OF SOLIDS | [feed](<https://rss.sciencedirect.com/publication/science/00223697>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:10.779619+00:00 |
| Journal of Plastic Reconstructive and Aesthetic Surgery | [feed](<https://rss.sciencedirect.com/publication/science/17486815>) | feed-with-entries | 200 | rss | 75 | 2026-10-04T13:06:11.445095+00:00 |
| Journal of Power Sources Advances | [feed](<https://rss.sciencedirect.com/publication/science/26662485>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T13:06:12.066592+00:00 |
| JOURNAL OF PRAGMATICS | [feed](<https://rss.sciencedirect.com/publication/science/03782166>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:06:12.882548+00:00 |
| Journal of Print and Media Technology Research | [feed](<https://jpmtr.org/index.php/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:41.965934+00:00 |
| Journal of Proteomics | [feed](<https://rss.sciencedirect.com/publication/science/18743919>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:06:13.449175+00:00 |
| Journal of Public and Nonprofit Affairs | [feed](<https://jpna.org/index.php/jpna/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:41.995959+00:00 |
| Journal of Public Health in Africa | [feed](<https://publichealthinafrica.org/index.php/jphia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:44.394292+00:00 |
| Journal of Radiation Protection and Research | [feed](<https://www.jrpr.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T13:00:06.849956+00:00 |
| Journal of Radiology Case Reports | [feed](<https://www.radiologycases.com/index.php/radiologycases/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T13:00:25.389034+00:00 |
| Journal of Rail Transport Planning & Management | [feed](<https://rss.sciencedirect.com/publication/science/22109706>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:06:14.033689+00:00 |
| JOURNAL OF RARE EARTHS | [feed](<https://rss.sciencedirect.com/publication/science/10020721>) | feed-with-entries | 200 | rss | 83 | 2026-10-04T13:06:15.195969+00:00 |
| Journal of Reliability and Statistical Studies | [feed](<https://journals.riverpublishers.com/index.php/JRSS/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:36.725971+00:00 |
| JOURNAL OF RESEARCH IN PERSONALITY | [feed](<https://rss.sciencedirect.com/publication/science/00926566>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:06:16.011919+00:00 |
| Journal of Rural and Community Development | [feed](<https://journals.brandonu.ca/jrcd/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:29.213106+00:00 |
| Journal of Saudi Chemical Society | [feed](<https://rss.sciencedirect.com/publication/science/13196103>) | feed-with-entries | 200 | rss | 43 | 2026-10-04T13:06:16.604089+00:00 |
| JOURNAL OF SCHOOL PSYCHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00224405>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:06:16.986070+00:00 |
| JOURNAL OF SCIENCE AND MEDICINE IN SPORT | [feed](<https://rss.sciencedirect.com/publication/science/14402440>) | feed-with-entries | 200 | rss | 65 | 2026-10-04T13:06:17.341446+00:00 |
| Journal of Seed Science | [feed](<https://www.scielo.br/journal/jss/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:48.653742+00:00 |
| Journal of Social and Political Psychology | [feed](<https://jspp.psychopen.eu/index.php/jspp/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:45.450130+00:00 |
| Journal of Specialised Translation | [feed](<https://www.jostrans.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T13:00:05.498890+00:00 |
| Journal of Sport and Health Research | [feed](<https://rss.sciencedirect.com/publication/science/20952546>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:17.735768+00:00 |
| Journal of Sport for Development | [feed](<https://jsfd.org/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:44.221250+00:00 |
| Journal of Statistical Software | [feed](<https://www.jstatsoft.org/index.php/jss/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:09.156296+00:00 |
| JOURNAL OF STEROID BIOCHEMISTRY AND MOLECULAR BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/09600760>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:06:18.421745+00:00 |
| JOURNAL OF STORED PRODUCTS RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/0022474X>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:18.860130+00:00 |
| JOURNAL OF STRATEGIC INFORMATION SYSTEMS | [feed](<https://rss.sciencedirect.com/publication/science/09638687>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:06:19.435049+00:00 |
| Journal of Stroke | [feed](<https://www.j-stroke.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 614 | 2026-10-04T13:00:01.896084+00:00 |
| Journal of Student Financial Aid | [feed](<https://ir.library.louisville.edu/jsfa/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:56:10.020428+00:00 |
| JOURNAL OF SUPERCRITICAL FLUIDS | [feed](<https://rss.sciencedirect.com/publication/science/08968446>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:06:19.777921+00:00 |
| Journal of Sustainable Mining | [feed](<https://jsm.gig.eu/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:56:45.092603+00:00 |
| JOURNAL OF SYMBOLIC COMPUTATION | [feed](<https://rss.sciencedirect.com/publication/science/07477171>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:06:20.407278+00:00 |
| JOURNAL OF SYSTEMS ARCHITECTURE | [feed](<https://rss.sciencedirect.com/publication/science/13837621>) | feed-with-entries | 200 | rss | 71 | 2026-10-04T13:06:20.793785+00:00 |
| Journal of Taibah University Medical Sciences | [feed](<https://rss.sciencedirect.com/publication/science/16583612>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:06:21.450459+00:00 |
| Journal of Tax Administration | [feed](<https://jota.website/jota/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:56:20.319732+00:00 |
| Journal of the Academy of Consultation-Liaison Psychiatry | [feed](<https://rss.sciencedirect.com/publication/science/26672960>) | feed-with-entries | 200 | rss | 58 | 2026-10-04T13:06:21.841097+00:00 |
| JOURNAL OF THE AMERICAN LEATHER CHEMISTS ASSOCIATION | [feed](<https://journals.uc.edu/index.php/JALCA/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:38.899078+00:00 |
| JOURNAL OF THE AMERICAN MATHEMATICAL SOCIETY | [feed](<https://www.ams.org/rss/jams.rss>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T13:01:10.507787+00:00 |
| Journal of the ASEAN Federation of Endocrine Societies | [feed](<https://asean-endocrinejournal.org/index.php/JAFES/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:54:51.087632+00:00 |
| Journal of the Association for Information Systems | [feed](<https://aisel.aisnet.org/jais/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:50.807390+00:00 |
| Journal of the Belgian Society of Radiology | [feed](<https://account.jbsr.be/index.php/up-j-jbsr/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.759997+00:00 |
| Journal of the Canadian Health Libraries Association | [feed](<https://journals.library.ualberta.ca/jchla/index.php/jchla/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:54.999239+00:00 |
| JOURNAL OF THE CHILEAN CHEMICAL SOCIETY | [feed](<https://jcchems.com/index.php/JCCHEMS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:56:11.299140+00:00 |
| JOURNAL OF THE ENERGY INSTITUTE | [feed](<https://rss.sciencedirect.com/publication/science/17439671>) | feed-with-entries | 200 | rss | 96 | 2026-10-04T13:06:22.645355+00:00 |
| JOURNAL OF THE ENTOMOLOGICAL RESEARCH SOCIETY | [feed](<https://www.entomol.org/journal/index.php/JERS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:59:45.158711+00:00 |
| Journal of the European Ceramic Society | [feed](<https://rss.sciencedirect.com/publication/science/09552219>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:23.189799+00:00 |
| JOURNAL OF THE FORMOSAN MEDICAL ASSOCIATION | [feed](<https://rss.sciencedirect.com/publication/science/09296646>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:23.767367+00:00 |
| Journal of the Geographical Institute Jovan Cvijic SASA | [feed](<https://ojs.gi.sanu.ac.rs/index.php/zbornik/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 23 | 2026-10-04T12:57:06.522321+00:00 |
| Journal of the Indonesian Mathematical Society | [feed](<https://jims-a.org/index.php/jimsa/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:56:16.820869+00:00 |
| JOURNAL OF THE JAPANESE AND INTERNATIONAL ECONOMIES | [feed](<https://rss.sciencedirect.com/publication/science/08891583>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:06:24.330663+00:00 |
| JOURNAL OF THE KOREAN MATHEMATICAL SOCIETY | [feed](<https://kkms.org/index.php/kjm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:56:47.927474+00:00 |
| Journal of the Korean Medical Association | [feed](<https://jkma.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T12:56:18.978048+00:00 |
| Journal of the Korean Ophthalmological Society | [feed](<https://www.jkos.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T13:00:04.898522+00:00 |
| JOURNAL OF THE MEDICAL LIBRARY ASSOCIATION | [feed](<https://jmla.mlanet.org/ojs/jmla/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 25 | 2026-10-04T12:56:20.052970+00:00 |
| Journal of the Mexican Chemical Society | [feed](<https://www.jmcs.org.mx/index.php/jmcs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 40 | 2026-10-04T13:00:05.083126+00:00 |
| JOURNAL OF THE NATIONAL SCIENCE FOUNDATION OF SRI LANKA | [feed](<https://account.jnsfsl.sljol.info/index.php/sljo-j-jnsfsl/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760116+00:00 |
| Journal of the Pakistan Institute of Chemical Engineers | [feed](<https://www.piche.org.pk/journal/index.php/jpiche/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:20.898388+00:00 |
| JOURNAL OF THE PROFESSIONAL ASSOCIATION FOR CACTUS DEVELOPMENT | [feed](<https://www.jpacd.org/jpacd/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T13:00:06.773346+00:00 |
| JOURNAL OF THE ROYAL ASIATIC SOCIETY | [feed](<https://royalasiaticsociety.org/comments/feed/>) | timeout |  |  |  | 2026-10-04T12:58:46.407911+00:00 |
| Journal of the Saudi Heart Association | [feed](<https://www.j-saudi-heart.com/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:00.649268+00:00 |
| JOURNAL OF THE SERBIAN CHEMICAL SOCIETY | [feed](<https://www.shd-pub.org.rs/index.php/JSCS/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:00:41.367828+00:00 |
| Journal of the South African Veterinary Association | [feed](<https://jsava.co.za/index.php/jsava/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:43.854031+00:00 |
| Journal of the Taiwan Institute of Chemical Engineers | [feed](<https://rss.sciencedirect.com/publication/science/18761070>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:24.882867+00:00 |
| JOURNAL OF THROMBOSIS AND HAEMOSTASIS | [feed](<https://rss.sciencedirect.com/publication/science/15387836>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:25.607440+00:00 |
| Journal of Tourism Sustainability and Well-being | [feed](<https://journals.cinturs.pt/jtsw/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T12:56:29.439835+00:00 |
| Journal of Translational Autoimmunity | [feed](<https://rss.sciencedirect.com/publication/science/25899090>) | feed-with-entries | 200 | rss | 68 | 2026-10-04T13:06:25.965354+00:00 |
| Journal of Transport and Land Use | [feed](<https://www.jtlu.org/index.php/jtlu/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:09.201200+00:00 |
| Journal of Transport and Supply Chain Management | [feed](<https://jtscm.co.za/index.php/jtscm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:45.883999+00:00 |
| Journal of Transport Geography | [feed](<https://rss.sciencedirect.com/publication/science/09666923>) | feed-with-entries | 200 | rss | 82 | 2026-10-04T13:06:27.008789+00:00 |
| Journal of University Teaching and Learning Practice | [feed](<https://medanthroquarterly.org/feed>) | access-blocked | 403 |  |  | 2026-10-04T12:56:54.925858+00:00 |
| JOURNAL OF URBAN ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/00941190>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:06:27.361537+00:00 |
| Journal of Urban Mobility | [feed](<https://rss.sciencedirect.com/publication/science/26670917>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:27.980225+00:00 |
| Journal of Vibroengineering | [feed](<https://www.extrica.com/journal/jve/rss/latest>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:11.670299+00:00 |
| Journal of Virus Eradication | [feed](<https://rss.sciencedirect.com/publication/science/20556640>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:06:28.560035+00:00 |
| JOURNAL OF VOCATIONAL BEHAVIOR | [feed](<https://rss.sciencedirect.com/publication/science/00018791>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:06:29.120367+00:00 |
| JOURNAL OF VOLCANOLOGY AND GEOTHERMAL RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/03770273>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:06:29.767602+00:00 |
| Journal of Web Engineering | [feed](<https://journals.riverpublishers.com/index.php/JWE/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:56.478662+00:00 |
| Journal of Web Semantics | [feed](<https://rss.sciencedirect.com/publication/science/15708268>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:06:30.436511+00:00 |
| JOURNAL OF WORLD BUSINESS | [feed](<https://rss.sciencedirect.com/publication/science/10909516>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:06:31.048337+00:00 |
| Journal of World-Systems Research | [feed](<https://jwsr.pitt.edu/ojs/jwsr/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 50 | 2026-10-04T12:56:46.578570+00:00 |
| Journal of Youth Development | [feed](<https://open.clemson.edu/jyd/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:57:19.871337+00:00 |
| Journal on Efficiency and Responsibility in Education and Science | [feed](<https://www.eriesjournal.com/index.php/eries/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:47.215794+00:00 |
| JPRAS Open | [feed](<https://rss.sciencedirect.com/publication/science/23525878>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:31.594339+00:00 |
| Jurnal Ilmiah Peuradeun | [feed](<https://journal.scadindependent.org/index.php/jipeuradeun/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:25.215259+00:00 |
| Jurnal Ilmu Ternak dan Veteriner | [feed](<https://medpub.appertani.org/index.php/jitv/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T12:56:57.246741+00:00 |
| Kardiologia Polska | [feed](<https://journals.viamedica.pl/polish_heart_journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 21 | 2026-10-04T13:01:40.749963+00:00 |
| Kidney Research and Clinical Practice | [feed](<https://www.krcp-ksn.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1000 | 2026-10-04T13:00:09.282518+00:00 |
| Kinesiologia Slovenica | [feed](<https://journals.uni-lj.si/kinsi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:17.737146+00:00 |
| KOEDOE | [feed](<https://koedoe.co.za/index.php/koedoe/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:56:48.952407+00:00 |
| Kompleksnoe Ispolzovanie Mineralnogo Syra | [feed](<http://kims-imio.com/index.php/main/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:46.650522+00:00 |
| Kriterion-Revista de Filosofia | [feed](<https://periodicos.ufmg.br/index.php/kriterion/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T13:01:01.973816+00:00 |
| Kvasny Prumysl | [feed](<https://kvasnyprumysl.eu/index.php/kp/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:49.948890+00:00 |
| Kyiv-Mohyla Humanities Journal | [feed](<https://kmhj.ukma.edu.ua/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:48.609248+00:00 |
| L1 Educational Studies in Language and Literature | [feed](<https://l1research.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:50.252991+00:00 |
| LAB ANIMAL | [feed](<https://www.nature.com/laban.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:18.060987+00:00 |
| Labor-Studies in Working-Class History of the Americas | [feed](<https://lawcha.org/comments/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:51.925742+00:00 |
| Laboratorium-Russian Review of Social Research | [feed](<https://soclabo.org/index.php/laboratorium/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:59:02.815668+00:00 |
| LABORATORY INVESTIGATION | [feed](<https://www.nature.com/labinvest.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:18.972837+00:00 |
| LABOUR ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/09275371>) | feed-with-entries | 200 | rss | 41 | 2026-10-04T13:06:32.190706+00:00 |
| Landbauforschung-Journal of Sustainable and Organic Agricultural Systems | [feed](<https://ojs.openagrar.de/index.php/LBF/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T13:00:59.982079+00:00 |
| Landscape Architecture and Art | [feed](<https://journals.llu.lv/laa/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:33.128568+00:00 |
| LANGUAGE & COMMUNICATION | [feed](<https://rss.sciencedirect.com/publication/science/02715309>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:06:32.781841+00:00 |
| Large Animal Review | [feed](<https://www.largeanimalreview.com/index.php/lar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 24 | 2026-10-04T13:00:09.326823+00:00 |
| LATIN AMERICAN APPLIED RESEARCH | [feed](<https://laar.plapiqui.edu.ar/OJS/index.php/laar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:50.802396+00:00 |
| Latin American Journal of Content & Language Integrated-LACLIL | [feed](<https://laclil.unisabana.edu.co/index.php/LACLIL/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:50.803193+00:00 |
| Latin Americanist | [feed](<https://secolas.org/comments/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:58:58.842340+00:00 |
| LEADERSHIP QUARTERLY | [feed](<https://rss.sciencedirect.com/publication/science/10489843>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:06:33.466328+00:00 |
| LEARNING AND INSTRUCTION | [feed](<https://rss.sciencedirect.com/publication/science/09594752>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:06:33.845953+00:00 |
| LEARNING AND MOTIVATION | [feed](<https://rss.sciencedirect.com/publication/science/00239690>) | feed-with-entries | 200 | rss | 63 | 2026-10-04T13:06:34.200495+00:00 |
| Learning Disabilities-A Multidisciplinary Journal | [feed](<https://www.js.sagamorepub.com/index.php/ldmj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:12.065083+00:00 |
| Lexikos | [feed](<https://lexikos.journals.ac.za/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:56:52.245354+00:00 |
| Lexonomica | [feed](<https://journals.um.si/index.php/lexonomica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:40.131612+00:00 |
| LIBRARY & INFORMATION SCIENCE RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/07408188>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:06:34.575229+00:00 |
| LIBRARY RESOURCES & TECHNICAL SERVICES | [feed](<https://journals.ala.org/index.php/lrts/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:29.004416+00:00 |
| Light-Science & Applications | [feed](<https://www.nature.com/lsa.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:20.994755+00:00 |
| Limite-Revista de Estudios Portugueses y de la Lusofonia | [feed](<https://revista-limite.unex.es/index.php/limite/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:57:53.304989+00:00 |
| LIMNOLOGICA | [feed](<https://rss.sciencedirect.com/publication/science/00759511>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:06:35.686380+00:00 |
| Linguistics and Education | [feed](<https://rss.sciencedirect.com/publication/science/08985898>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:06:36.042678+00:00 |
| Literatura e Sociedade | [feed](<https://revistas.usp.br/ls/pt_BR/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:34.396602+00:00 |
| Lithuanian Journal of Physics | [feed](<https://www.lmaleidykla.lt/ojs/index.php/physics/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:01:12.741993+00:00 |
| Local and Regional Anesthesia | [feed](<https://www.dovepress.com/feed/journal/31>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:53.012342+00:00 |
| Logical Methods in Computer Science | [feed](<https://lmcs.episciences.org/rss/papers>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:56:54.021608+00:00 |
| Logos-Revista de Linguistica Filosofia y Literatura | [feed](<https://revistaschilenas.uchile.cl/feed/rss_1.0/2250/23881>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T13:01:21.443760+00:00 |
| LONG RANGE PLANNING | [feed](<https://rss.sciencedirect.com/publication/science/00246301>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:06:36.409617+00:00 |
| LYMPHOLOGY | [feed](<http://journals.librarypublishing.arizona.edu/lymph/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:33.124297+00:00 |
| Macedonian Journal of Chemistry and Chemical engineering | [feed](<https://mjcce.org.mk/index.php/MJCCE/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:58.378927+00:00 |
| Madrygal-Revista de Estudios Gallegos | [feed](<https://revistas.ucm.es/index.php/MADR/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:34.012248+00:00 |
| Magallanica-Revista de Historia Moderna | [feed](<https://fh.mdp.edu.ar/revistas/index.php/magallanica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 24 | 2026-10-04T13:01:15.394090+00:00 |
| Makara Hubs-Asia | [feed](<https://scholarhub.ui.ac.id/hubsasia/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:29.404075+00:00 |
| Makara Journal of Health Research | [feed](<https://scholarhub.ui.ac.id/mjhr/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:36.281834+00:00 |
| Makara Journal of Technology | [feed](<https://scholarhub.ui.ac.id/mjt/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:39.232948+00:00 |
| Malaysian Journal of Economic Studies | [feed](<https://mjes.um.edu.my/index.php/MJES/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:58.604359+00:00 |
| Malaysian Journal of Fundamental and Applied Sciences | [feed](<https://mjfas.utm.my/index.php/mjfas/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:58.636708+00:00 |
| Malaysian Journal of Learning & Instruction | [feed](<https://e-journal.uum.edu.my/index.php/mjli/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:52.299010+00:00 |
| Management Theory and Studies for Rural Business and Infrastructure Development | [feed](<https://ejournals.vdu.lt/index.php/mtsrbid/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:27.269609+00:00 |
| MARINE AND PETROLEUM GEOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/02648172>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:36.992909+00:00 |
| Marine Genomics | [feed](<https://rss.sciencedirect.com/publication/science/18747787>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:06:37.535048+00:00 |
| MARINE GEOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00253227>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:06:37.951005+00:00 |
| Maritime Transport Research | [feed](<https://rss.sciencedirect.com/publication/science/2666822X>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:06:38.546402+00:00 |
| Matematiche | [feed](<https://lematematiche.dmi.unict.it/index.php/lematematiche/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:51.985529+00:00 |
| Materia Arquitectura | [feed](<https://www.materiaarquitectura.com/index.php/MA/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T13:00:11.320165+00:00 |
| Materia-Rio de Janeiro | [feed](<https://www.scielo.br/journal/rmat/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:49.287634+00:00 |
| Materiales para la Historia del Deporte | [feed](<https://polired.upm.es/index.php/materiales_historia_deporte/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:27.484367+00:00 |
| MATERIALS CHARACTERIZATION | [feed](<https://rss.sciencedirect.com/publication/science/10445803>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:38.902293+00:00 |
| MATERIALS CHEMISTRY AND PHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/02540584>) | feed-with-entries | 200 | rss | 97 | 2026-10-04T13:06:39.460943+00:00 |
| Materials Letters-X | [feed](<https://rss.sciencedirect.com/publication/science/25901508>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:06:40.068130+00:00 |
| Materials Science and Engineering B-Advanced Functional Solid-State Materials | [feed](<https://rss.sciencedirect.com/publication/science/09215107>) | feed-with-entries | 200 | rss | 84 | 2026-10-04T13:06:40.461434+00:00 |
| Materials Today Bio | [feed](<https://rss.sciencedirect.com/publication/science/25900064>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:41.111153+00:00 |
| Materials Today Communications | [feed](<https://rss.sciencedirect.com/publication/science/23524928>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:41.794782+00:00 |
| Materials Today Physics | [feed](<https://rss.sciencedirect.com/publication/science/25425293>) | feed-with-entries | 200 | rss | 80 | 2026-10-04T13:06:42.189532+00:00 |
| MATHEMATICA SCANDINAVICA | [feed](<https://www.mscand.dk/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T13:00:14.312157+00:00 |
| Mathematics Enthusiast | [feed](<https://scholarworks.umt.edu/tme/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:58:58.146092+00:00 |
| McGill Journal of Education | [feed](<https://mje.mcgill.ca/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:56:58.390421+00:00 |
| McGill Journal of Law and Health | [feed](<https://mjlh.mcgill.ca/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T12:56:58.904367+00:00 |
| MEASUREMENT | [feed](<https://rss.sciencedirect.com/publication/science/02632241>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:42.568983+00:00 |
| MEAT SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/03091740>) | feed-with-entries | 200 | rss | 38 | 2026-10-04T13:06:43.146395+00:00 |
| MECHANICAL SYSTEMS AND SIGNAL PROCESSING | [feed](<https://rss.sciencedirect.com/publication/science/08883270>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:43.754593+00:00 |
| MECHATRONICS | [feed](<https://rss.sciencedirect.com/publication/science/09574158>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:06:44.374089+00:00 |
| Medical Devices-Evidence and Research | [feed](<https://www.dovepress.com/feed/journal/24>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:54.048203+00:00 |
| MEDICAL PROBLEMS OF PERFORMING ARTISTS | [feed](<https://api.ingentaconnect.com/content/scimed/mppa/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T13:01:25.095598+00:00 |
| Medical Ultrasonography | [feed](<https://www.medultrason.ro/medultrason/index.php/medultrason/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 23 | 2026-10-04T13:00:14.129489+00:00 |
| Medical-Surgical Journal-Revista Medico-Chirurgicala | [feed](<https://revmedchir.ro/index.php/revmedchir/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:40.685209+00:00 |
| Medicina del Lavoro | [feed](<https://www.mattioli1885journals.com/index.php/lamedicinadellavoro/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:13.074887+00:00 |
| Medicina-Lithuania | [feed](<https://medicina.lsmuni.lt/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:56:55.248792+00:00 |
| Medicine Law & Society | [feed](<https://journals.um.si/index.php/medicine/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:57.003841+00:00 |
| Metabolic Engineering Communications | [feed](<https://rss.sciencedirect.com/publication/science/22140301>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:06:44.776285+00:00 |
| Metallurgical & Materials Engineering | [feed](<https://metall-mater-eng.com/index.php/home/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:57.726225+00:00 |
| Methods Data Analyses | [feed](<https://majournals.bib.uni-mannheim.de/mda/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:56:54.064966+00:00 |
| Mexican Law Review | [feed](<https://revistas.juridicas.unam.mx/index.php/mexican-law-review/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:58:15.231533+00:00 |
| Micro and Nano Engineering | [feed](<https://rss.sciencedirect.com/publication/science/25900072>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:06:45.370212+00:00 |
| MICROWAVE JOURNAL | [feed](<https://www.microwavejournal.com/rss/articles>) | access-blocked | 403 |  |  | 2026-10-04T13:00:14.157352+00:00 |
| MIDWIFERY | [feed](<https://rss.sciencedirect.com/publication/science/02666138>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:06:45.762672+00:00 |
| Mindanao Journal of Science and Technology | [feed](<https://mjst.ustp.edu.ph/index.php/mjst/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:56:58.963240+00:00 |
| MIS Quarterly Executive | [feed](<https://aisel.aisnet.org/misqe/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:14.357022+00:00 |
| MITOCHONDRION | [feed](<https://rss.sciencedirect.com/publication/science/15677249>) | feed-with-entries | 200 | rss | 38 | 2026-10-04T13:06:46.336967+00:00 |
| MLTJ-Muscles Ligaments and Tendons Journal | [feed](<https://www.ejcrim.com/index.php/mltj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:43.881278+00:00 |
| MMWR-MORBIDITY AND MORTALITY WEEKLY REPORT | [feed](<https://tools.cdc.gov/api/v2/resources/media/342778.rss>) | feed-with-entries | 200 | rss | 2332 | 2026-10-04T12:59:09.194716+00:00 |
| MODERN PATHOLOGY | [feed](<https://www.nature.com/modpathol.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:22.240108+00:00 |
| Modern Stochastics-Theory and Applications | [feed](<https://www.vmsta.org/journal/VMSTA/feeds/latest>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:48.780254+00:00 |
| MOLECULAR AND BIOCHEMICAL PARASITOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/01666851>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:06:46.902035+00:00 |
| MOLECULAR AND CELLULAR PROBES | [feed](<https://rss.sciencedirect.com/publication/science/08908508>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:06:47.470557+00:00 |
| MOLECULAR ASPECTS OF MEDICINE | [feed](<https://rss.sciencedirect.com/publication/science/00982997>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:06:47.860089+00:00 |
| Molecular Catalysis | [feed](<https://rss.sciencedirect.com/publication/science/24688231>) | feed-with-entries | 200 | rss | 55 | 2026-10-04T13:06:48.240837+00:00 |
| MOLECULAR PHYLOGENETICS AND EVOLUTION | [feed](<https://rss.sciencedirect.com/publication/science/10557903>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:06:48.918388+00:00 |
| MOLECULAR PSYCHIATRY | [feed](<https://www.nature.com/mp.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:22.964801+00:00 |
| Molecular Therapy Methods & Clinical Development | [feed](<https://rss.sciencedirect.com/publication/science/23290501>) | feed-with-entries | 200 | rss | 89 | 2026-10-04T13:06:50.026109+00:00 |
| Montenegrin Journal of Sports Science and Medicine | [feed](<https://mjssm.me/rss/>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T12:56:58.945182+00:00 |
| MONUMENTA NIPPONICA | [feed](<https://dept.sophia.ac.jp/monumenta/feed/>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T12:55:13.889408+00:00 |
| Moroccan Journal of Chemistry | [feed](<https://rss.sciencedirect.com/publication/science/00224898>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:06:50.413367+00:00 |
| Mucosal Immunology | [feed](<https://www.nature.com/mi.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:24.077292+00:00 |
| Mundo Agrario | [feed](<https://www.mundoagrario.unlp.edu.ar/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:00:14.390649+00:00 |
| Musicologica Brunensia | [feed](<https://journals.phil.muni.cz/musicologica-brunensia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:00:55.953669+00:00 |
| MUSLIM WORLD | [feed](<https://www.themwl.org/en/rss.xml>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:44.132243+00:00 |
| MUTATION RESEARCH-FUNDAMENTAL AND MOLECULAR MECHANISMS OF MUTAGENESIS | [feed](<https://rss.sciencedirect.com/publication/science/13861964>) | feed-with-entries | 200 | rss | 27 | 2026-10-04T13:06:50.976372+00:00 |
| Muzikologija-Musicology | [feed](<https://muzikologija-musicology.com/index.php/MM/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:00.190852+00:00 |
| Nano Hybrids and Composites | [feed](<https://www.scientific.net/NHC/Rss>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:01:24.379585+00:00 |
| Nanoscale | [feed](<http://feeds.rsc.org/rss/nr>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:01:31.528965+00:00 |
| NATURE | [feed](<https://www.nature.com/nature.rss>) | feed-with-entries | 200 | rdf | 75 | 2026-10-04T13:02:25.133545+00:00 |
| Nature Aging | [feed](<https://www.nature.com/nataging.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:26.094685+00:00 |
| Nature Astronomy | [feed](<https://www.nature.com/natastron.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:27.020487+00:00 |
| Nature Biomedical Engineering | [feed](<https://www.nature.com/natbiomedeng.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:28.260857+00:00 |
| NATURE BIOTECHNOLOGY | [feed](<https://www.nature.com/nbt.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:29.966420+00:00 |
| Nature Cancer | [feed](<https://www.nature.com/natcancer.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:30.571814+00:00 |
| Nature Cardiovascular Research | [feed](<https://www.nature.com/natcardiovascres.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:31.713214+00:00 |
| NATURE CELL BIOLOGY | [feed](<https://www.nature.com/ncb.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:32.378713+00:00 |
| Nature Chemical Biology | [feed](<https://www.nature.com/nchembio.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:32.991398+00:00 |
| Nature Chemistry | [feed](<https://www.nature.com/nchem.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:34.410292+00:00 |
| Nature Climate Change | [feed](<https://www.nature.com/nclimate.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:35.686419+00:00 |
| Nature Communications | [feed](<https://www.nature.com/ncomms.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:36.580265+00:00 |
| Nature Computational Science | [feed](<https://www.nature.com/natcomputsci.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:37.442371+00:00 |
| Nature Ecology & Evolution | [feed](<https://www.nature.com/natecolevol.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:38.631391+00:00 |
| Nature Electronics | [feed](<https://www.nature.com/natelectron.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:39.959321+00:00 |
| Nature Energy | [feed](<https://www.nature.com/nenergy.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:41.202917+00:00 |
| Nature Food | [feed](<https://www.nature.com/natfood.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:42.561533+00:00 |
| NATURE GENETICS | [feed](<https://www.nature.com/ng.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:44.164809+00:00 |
| Nature Geoscience | [feed](<https://www.nature.com/ngeo.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:45.396356+00:00 |
| Nature Human Behaviour | [feed](<https://www.nature.com/nathumbehav.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:47.044405+00:00 |
| NATURE IMMUNOLOGY | [feed](<https://www.nature.com/ni.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:48.181111+00:00 |
| Nature Machine Intelligence | [feed](<https://www.nature.com/natmachintell.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:49.963646+00:00 |
| NATURE MATERIALS | [feed](<https://www.nature.com/nmat.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:51.281480+00:00 |
| NATURE MEDICINE | [feed](<https://www.nature.com/nm.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:52.067671+00:00 |
| Nature Metabolism | [feed](<https://www.nature.com/natmetab.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:52.602065+00:00 |
| NATURE METHODS | [feed](<https://www.nature.com/nmeth.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:53.095961+00:00 |
| Nature Microbiology | [feed](<https://www.nature.com/nmicrobiol.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:54.252413+00:00 |
| Nature Nanotechnology | [feed](<https://www.nature.com/nnano.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:55.102906+00:00 |
| NATURE NEUROSCIENCE | [feed](<https://www.nature.com/neuro.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:56.086720+00:00 |
| Nature Photonics | [feed](<https://www.nature.com/nphoton.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:57.191597+00:00 |
| Nature Physics | [feed](<https://www.nature.com/nphys.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:02:59.758086+00:00 |
| Nature Plants | [feed](<https://www.nature.com/nplants.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:00.636114+00:00 |
| Nature Protocols | [feed](<https://www.nature.com/nprot.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:01.215649+00:00 |
| NATURE REVIEWS CANCER | [feed](<https://www.nature.com/nrc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:02.369762+00:00 |
| Nature Reviews Cardiology | [feed](<https://www.nature.com/nrcardio.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:03.315485+00:00 |
| Nature Reviews Chemistry | [feed](<https://www.nature.com/natrevchem.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:04.267490+00:00 |
| Nature Reviews Clinical Oncology | [feed](<https://www.nature.com/nrclinonc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:05.027319+00:00 |
| Nature Reviews Disease Primers | [feed](<https://www.nature.com/nrdp.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:06.038880+00:00 |
| NATURE REVIEWS DRUG DISCOVERY | [feed](<https://www.nature.com/nrd.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:07.819833+00:00 |
| Nature Reviews Earth & Environment | [feed](<https://www.nature.com/natrevearthenviron.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:09.061361+00:00 |
| Nature Reviews Endocrinology | [feed](<https://www.nature.com/nrendo.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:09.459260+00:00 |
| Nature Reviews Gastroenterology & Hepatology | [feed](<https://www.nature.com/nrgastro.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:11.515452+00:00 |
| NATURE REVIEWS GENETICS | [feed](<https://www.nature.com/nrg.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:12.700391+00:00 |
| NATURE REVIEWS IMMUNOLOGY | [feed](<https://www.nature.com/nri.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:13.074050+00:00 |
| Nature Reviews Materials | [feed](<https://www.nature.com/natrevmats.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:13.852296+00:00 |
| Nature Reviews Methods Primers | [feed](<https://www.nature.com/nrmp.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:14.885984+00:00 |
| NATURE REVIEWS MICROBIOLOGY | [feed](<https://www.nature.com/nrmicro.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:15.646885+00:00 |
| NATURE REVIEWS MOLECULAR CELL BIOLOGY | [feed](<https://www.nature.com/nrm.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:16.001070+00:00 |
| Nature Reviews Nephrology | [feed](<https://www.nature.com/nrneph.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:16.422180+00:00 |
| Nature Reviews Neurology | [feed](<https://www.nature.com/nrneurol.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:17.563276+00:00 |
| NATURE REVIEWS NEUROSCIENCE | [feed](<https://www.nature.com/nrn.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:18.479072+00:00 |
| Nature Reviews Physics | [feed](<https://www.nature.com/natrevphys.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:19.386822+00:00 |
| Nature Reviews Psychology | [feed](<https://www.nature.com/nrpsychol.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:19.592375+00:00 |
| Nature Reviews Rheumatology | [feed](<https://www.nature.com/nrrheum.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:20.128726+00:00 |
| Nature Reviews Urology | [feed](<https://www.nature.com/nrurol.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:20.499299+00:00 |
| NATURE STRUCTURAL & MOLECULAR BIOLOGY | [feed](<https://www.nature.com/nsmb.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:20.733746+00:00 |
| Nature Sustainability | [feed](<https://www.nature.com/natsustain.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:20.999820+00:00 |
| Nature Synthesis | [feed](<https://www.nature.com/natsynth.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:21.699758+00:00 |
| NAUTILUS | [feed](<https://nautil.us/feed>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:57:00.313593+00:00 |
| Naval War College Review | [feed](<https://digital-commons.usnwc.edu/nwc-review/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:15.159240+00:00 |
| Navus-Revista de Gestao e Tecnologia | [feed](<https://navus.sc.senac.br/navus/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:01.001344+00:00 |
| Neo-Victorian Studies | [feed](<https://neovictorianstudies.com/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:01.001594+00:00 |
| NEOPLASIA | [feed](<https://rss.sciencedirect.com/publication/science/14765586>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:06:52.052124+00:00 |
| Nepalese Journal of Ophthalmology | [feed](<https://www.nepjol.info/index.php/NEPJOPH/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:15.372081+00:00 |
| NEUPHILOLOGISCHE MITTEILUNGEN | [feed](<https://journal.fi/nm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:16.322157+00:00 |
| Neural Network World | [feed](<https://ojs.nnw.cz/index.php/nnw/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:10.776847+00:00 |
| NEUROBIOLOGY OF AGING | [feed](<https://rss.sciencedirect.com/publication/science/01974580>) | feed-with-entries | 200 | rss | 28 | 2026-10-04T13:06:52.669809+00:00 |
| NEUROCOMPUTING | [feed](<https://rss.sciencedirect.com/publication/science/09252312>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:06:53.035811+00:00 |
| Neurointervention | [feed](<https://www.neurointervention.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 246 | 2026-10-04T13:00:15.716308+00:00 |
| Neurologia i Neurochirurgia Polska | [feed](<https://journals.viamedica.pl/neurologia_neurochirurgia_polska/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T13:01:42.437616+00:00 |
| NEUROPHARMACOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00283908>) | feed-with-entries | 200 | rss | 60 | 2026-10-04T13:06:53.411513+00:00 |
| NEUROPHYSIOLOGIE CLINIQUE-CLINICAL NEUROPHYSIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/09877053>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:06:53.782748+00:00 |
| NEUROPSYCHOPHARMACOLOGY | [feed](<https://www.nature.com/npp.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:21.997559+00:00 |
| NEUROSCIENCE RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/01680102>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:06:54.318141+00:00 |
| Neurotherapeutics | [feed](<https://rss.sciencedirect.com/publication/science/18787479>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:06:54.863342+00:00 |
| NEUROTOXICOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/0161813X>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:06:55.989429+00:00 |
| NEUROTOXICOLOGY AND TERATOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/08920362>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:06:56.529111+00:00 |
| NEW ASTRONOMY REVIEWS | [feed](<https://rss.sciencedirect.com/publication/science/13876473>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:06:56.928744+00:00 |
| New Contree | [feed](<https://newcontree.org.za/index.php/nc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:01.403971+00:00 |
| NEW LEFT REVIEW | [feed](<https://newleftreview.org/feed>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T12:57:02.485778+00:00 |
| NEW MEXICO HISTORICAL REVIEW | [feed](<https://digitalrepository.unm.edu/nmhr/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:17.525435+00:00 |
| NEW ORLEANS REVIEW | [feed](<https://www.neworleansreview.org/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T13:00:16.468193+00:00 |
| NEW ZEALAND JOURNAL OF FORESTRY SCIENCE | [feed](<https://nzjforestryscience.nz/index.php/nzjfs/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:04.815655+00:00 |
| Nexo Revista Cientifica | [feed](<https://revistas.uni.edu.ni/index.php/Nexo/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout |  |  |  | 2026-10-04T12:58:29.331223+00:00 |
| NITRIC OXIDE-BIOLOGY AND CHEMISTRY | [feed](<https://rss.sciencedirect.com/publication/science/10898603>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:06:57.511243+00:00 |
| Nonlinear Analysis-Hybrid Systems | [feed](<https://rss.sciencedirect.com/publication/science/1751570X>) | feed-with-entries | 200 | rss | 54 | 2026-10-04T13:06:58.100733+00:00 |
| NONLINEAR ANALYSIS-THEORY METHODS & APPLICATIONS | [feed](<https://rss.sciencedirect.com/publication/science/0362546X>) | feed-with-entries | 200 | rss | 51 | 2026-10-04T13:06:59.150695+00:00 |
| Nordic Journal of Migration Research | [feed](<https://account.journal-njmr.org/index.php/uh-j-njmr/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760167+00:00 |
| Nordic Journal of Working Life Studies | [feed](<https://tidsskrift.dk/njwls/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:59:09.024361+00:00 |
| Nordic Theatre Studies | [feed](<https://tidsskrift.dk/nts/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T13:01:10.471054+00:00 |
| Nordisk Judaistik-Scandinavian Jewish Studies | [feed](<https://journal.fi/nj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:26.231545+00:00 |
| Novos Cadernos NAEA | [feed](<https://www.periodicos.ufpa.br/index.php/ncn/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:20.275221+00:00 |
| Novum Jus | [feed](<https://novumjus.ucatolica.edu.co/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:57:02.724545+00:00 |
| NPG Asia Materials | [feed](<https://www.nature.com/am.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:22.388162+00:00 |
| npj 2D Materials and Applications | [feed](<https://www.nature.com/npj2dmaterials.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:22.781072+00:00 |
| npj Aging and Mechanisms of Disease | [feed](<https://www.nature.com/npjamd.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:23.063600+00:00 |
| npj Biofilms and Microbiomes | [feed](<https://www.nature.com/npjbiofilms.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:23.509270+00:00 |
| npj Breast Cancer | [feed](<https://www.nature.com/npjbcancer.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:24.123082+00:00 |
| npj Clean Water | [feed](<https://www.nature.com/npjcleanwater.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:24.678476+00:00 |
| npj Climate and Atmospheric Science | [feed](<https://www.nature.com/npjclimatsci.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:25.301343+00:00 |
| npj Computational Materials | [feed](<https://www.nature.com/npjcompumats.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:26.259732+00:00 |
| npj Digital Medicine | [feed](<https://www.nature.com/npjdigitalmed.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:26.874858+00:00 |
| npj Flexible Electronics | [feed](<https://www.nature.com/npjflexelectron.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:27.331569+00:00 |
| npj Genomic Medicine | [feed](<https://www.nature.com/npjgenmed.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:27.957776+00:00 |
| npj Materials Degradation | [feed](<https://www.nature.com/npjmatdeg.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:28.530075+00:00 |
| NPJ Microgravity | [feed](<https://www.nature.com/npjmgrav.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:29.141864+00:00 |
| npj Parkinsons Disease | [feed](<https://www.nature.com/npjparkd.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:29.650110+00:00 |
| npj Precision Oncology | [feed](<https://www.nature.com/npjprecisiononcology.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:30.661062+00:00 |
| npj Primary Care Respiratory Medicine | [feed](<https://www.nature.com/npjpcrm.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:31.267771+00:00 |
| npj Quantum Information | [feed](<https://www.nature.com/npjqi.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:31.869210+00:00 |
| npj Quantum Materials | [feed](<https://www.nature.com/npjquantmats.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:32.279574+00:00 |
| npj Regenerative Medicine | [feed](<https://www.nature.com/npjregenmed.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:33.260244+00:00 |
| NPJ Schizophrenia | [feed](<https://www.nature.com/npjschz.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:33.869959+00:00 |
| npj Science of Food | [feed](<https://www.nature.com/npjscifood.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:34.416796+00:00 |
| npj Science of Learning | [feed](<https://www.nature.com/npjscilearn.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:35.158298+00:00 |
| npj Systems Biology and Applications | [feed](<https://www.nature.com/npjsba.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:35.528188+00:00 |
| npj Urban Sustainability | [feed](<https://www.nature.com/npjurbansustain.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:36.279304+00:00 |
| npj Vaccines | [feed](<https://www.nature.com/npjvaccines.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:37.138887+00:00 |
| Nuclear Materials and Energy | [feed](<https://rss.sciencedirect.com/publication/science/23521791>) | feed-with-entries | 200 | rss | 62 | 2026-10-04T13:07:00.197176+00:00 |
| NUCLEAR MEDICINE AND BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/09698051>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:07:00.622839+00:00 |
| Nueva Revista Filologia Hispanica | [feed](<https://nrfh.colmex.mx/index.php/nrfh/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:03.024679+00:00 |
| NURSE EDUCATION TODAY | [feed](<https://rss.sciencedirect.com/publication/science/02606917>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:01.259975+00:00 |
| NURSING CLINICS OF NORTH AMERICA | [feed](<https://rss.sciencedirect.com/publication/science/00296465>) | feed-with-entries | 200 | rss | 51 | 2026-10-04T13:07:02.351739+00:00 |
| Nusantara Bioscience | [feed](<https://smujo.id/nb/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:01.839699+00:00 |
| Nutrition & Diabetes | [feed](<https://www.nature.com/nutd.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:37.493012+00:00 |
| Obra Digital-Revista de Comunicacion | [feed](<https://revistesdigitals.uvic.cat/index.php/obradigital/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:58:40.298471+00:00 |
| Obstetrics & Gynecology Science | [feed](<https://www.ogscience.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T13:00:17.219168+00:00 |
| OBSTETRICS AND GYNECOLOGY CLINICS OF NORTH AMERICA | [feed](<https://rss.sciencedirect.com/publication/science/08898545>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:07:02.994693+00:00 |
| Ocean Engineering | [feed](<https://rss.sciencedirect.com/publication/science/00298018>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:03.675966+00:00 |
| OCEANOLOGIA | [feed](<https://rss.sciencedirect.com/publication/science/00783234>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T13:07:04.252845+00:00 |
| OCEANOLOGICAL AND HYDROBIOLOGICAL STUDIES | [feed](<https://czasopisma.bg.ug.edu.pl/index.php/oandhs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:55:10.008249+00:00 |
| ODONATOLOGICA | [feed](<https://www.odonatologica.com/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:17.042249+00:00 |
| Oido Pensante | [feed](<https://revistascientificas.filo.uba.ar/index.php/oidopensante/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:36.561097+00:00 |
| ONCOGENE | [feed](<https://www.nature.com/onc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:38.255613+00:00 |
| Oncogenesis | [feed](<https://www.nature.com/oncsis.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:39.301937+00:00 |
| Oncology in Clinical Practice | [feed](<https://journals.viamedica.pl/oncology_in_clinical_practice/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 171 | 2026-10-04T13:01:43.844567+00:00 |
| ONCOLOGY NURSING FORUM | [feed](<https://www.ons.org/rss.xml>) | feed-with-entries | 200 | rss | 2 | 2026-10-04T13:00:17.730420+00:00 |
| Oncology Reviews | [feed](<https://www.frontiersin.org/journals/oncology-reviews/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:03:14.705345+00:00 |
| ONDERSTEPOORT JOURNAL OF VETERINARY RESEARCH | [feed](<https://ojvr.org/index.php/ojvr/gateway/plugin/WebFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:57:16.633573+00:00 |
| Open Praxis | [feed](<https://account.openpraxis.org/index.php/up-j-op/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760287+00:00 |
| Operations Research for Health Care | [feed](<https://rss.sciencedirect.com/publication/science/22116923>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T13:07:04.602879+00:00 |
| OPERATIONS RESEARCH LETTERS | [feed](<https://rss.sciencedirect.com/publication/science/01676377>) | feed-with-entries | 200 | rss | 40 | 2026-10-04T13:07:05.191220+00:00 |
| Operations Research Perspectives | [feed](<https://rss.sciencedirect.com/publication/science/22147160>) | feed-with-entries | 200 | rss | 43 | 2026-10-04T13:07:05.785538+00:00 |
| OPERATIVE DENTISTRY | [feed](<https://jopdent.com/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:56:20.095679+00:00 |
| Optical Switching and Networking | [feed](<https://rss.sciencedirect.com/publication/science/15734277>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T13:07:06.427207+00:00 |
| OPTICS AND LASER TECHNOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00303992>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:06.798522+00:00 |
| Opuscula Mathematica | [feed](<https://www.opuscula.agh.edu.pl/rss2>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:00:18.661671+00:00 |
| ORGANIC ELECTRONICS | [feed](<https://rss.sciencedirect.com/publication/science/15661199>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:07:07.176693+00:00 |
| ORGANIZATIONAL BEHAVIOR AND HUMAN DECISION PROCESSES | [feed](<https://rss.sciencedirect.com/publication/science/07495978>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:07:07.714919+00:00 |
| Organon F | [feed](<https://www.organonf.com/rss.xml>) | feed-with-entries | 200 | rss | 284 | 2026-10-04T13:00:18.801323+00:00 |
| ORNIS FENNICA | [feed](<https://ornisfennica.journal.fi/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:57:20.892579+00:00 |
| ORNITOLOGIA NEOTROPICAL | [feed](<https://ornneo.ornitologianeotropical.org/index.php/ornneo/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:20.958244+00:00 |
| OSGOODE HALL LAW JOURNAL | [feed](<https://digitalcommons.osgoode.yorku.ca/ohlj/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:17.057874+00:00 |
| OTOLARYNGOLOGIC CLINICS OF NORTH AMERICA | [feed](<https://rss.sciencedirect.com/publication/science/00306665>) | feed-with-entries | 200 | rss | 72 | 2026-10-04T13:07:08.302831+00:00 |
| Otoritas-Jurnal Ilmu Pemerintahan | [feed](<https://journal.unismuh.ac.id/index.php/Otoritas/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:25.936646+00:00 |
| Pacific Asia Journal of the Association for Information Systems | [feed](<https://aisel.aisnet.org/pajais/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:24.438141+00:00 |
| Pacific Journalism Review | [feed](<https://ojs.aut.ac.nz/pacific-journalism-review/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 27 | 2026-10-04T12:57:05.486307+00:00 |
| Paediatric Respiratory Reviews | [feed](<https://rss.sciencedirect.com/publication/science/15260542>) | feed-with-entries | 200 | rss | 53 | 2026-10-04T13:07:09.011160+00:00 |
| Paediatrica Indonesiana | [feed](<https://paediatricaindonesiana.org/index.php/paediatrica-indonesiana/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:57:22.098274+00:00 |
| Pakistan Journal of Medical Sciences | [feed](<https://www.pjms.org.pk/index.php/pjms/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 46 | 2026-10-04T13:00:21.548257+00:00 |
| Pakistan Journal of Statistics and Operation Research | [feed](<https://pjsor.com/pjsor/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:57:36.755893+00:00 |
| Palaeoentomology | [feed](<https://www.mapress.com/pe/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T13:01:13.111018+00:00 |
| PALAEOGEOGRAPHY PALAEOCLIMATOLOGY PALAEOECOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00310182>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:09.378142+00:00 |
| PALAEONTOLOGIA ELECTRONICA | [feed](<https://palaeo-electronica.org/content/?format=feed&type=rss>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T12:57:22.276372+00:00 |
| Pancreatology | [feed](<https://rss.sciencedirect.com/publication/science/14243903>) | feed-with-entries | 200 | rss | 72 | 2026-10-04T13:07:09.994473+00:00 |
| Papers from the Institute of Archaeology | [feed](<https://student-journals.ucl.ac.uk/pia/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:04.644546+00:00 |
| PAPERS IN REGIONAL SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/10568190>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:07:11.159506+00:00 |
| PARALLEL COMPUTING | [feed](<https://rss.sciencedirect.com/publication/science/01678191>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:07:11.521631+00:00 |
| Parasite Epidemiology and Control | [feed](<https://rss.sciencedirect.com/publication/science/24056731>) | feed-with-entries | 200 | rss | 35 | 2026-10-04T13:07:12.076731+00:00 |
| PARERGON | [feed](<https://parergon.org/index.php/parergon/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:23.206396+00:00 |
| Pasado y Memoria-Revista de Historia Contemporanea | [feed](<https://pasadoymemoria.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 24 | 2026-10-04T12:57:23.390331+00:00 |
| PATHOLOGICA | [feed](<https://www.pathologica.it/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T13:00:19.861947+00:00 |
| PATHOLOGY & ONCOLOGY RESEARCH | [feed](<https://www.por-journal.com/journals/pathology-and-oncology-research/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:23.793499+00:00 |
| Pathology and Laboratory Medicine International | [feed](<https://www.dovepress.com/feed.php?journal_id=80>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:55.217601+00:00 |
| Patient Preference and Adherence | [feed](<https://www.dovepress.com/feed/journal/20>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:56.326116+00:00 |
| PATTERN RECOGNITION LETTERS | [feed](<https://rss.sciencedirect.com/publication/science/01678655>) | feed-with-entries | 200 | rss | 79 | 2026-10-04T13:07:12.642159+00:00 |
| Pedagogia Social Revista Interuniversitaria | [feed](<https://www.pedagogiasocialrevista.es/feeds/posts/default>) | feed-with-entries | 200 | atom | 25 | 2026-10-04T13:00:19.869890+00:00 |
| Pedagogy of Physical Culture and Sports | [feed](<https://sportpedagogy.org.ua/index.php/ppcs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:59:03.569967+00:00 |
| Pediatric Dental Journal | [feed](<https://rss.sciencedirect.com/publication/science/09172394>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:07:13.016791+00:00 |
| PEDIATRIC RESEARCH | [feed](<https://www.nature.com/pr.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:39.840350+00:00 |
| PEDOBIOLOGIA | [feed](<https://rss.sciencedirect.com/publication/science/00314056>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:07:13.419485+00:00 |
| Pennsylvania History-A Journal of Mid-Atlantic Studies | [feed](<https://journals.psu.edu/phj/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:34.146569+00:00 |
| PENNSYLVANIA MAGAZINE OF HISTORY AND BIOGRAPHY | [feed](<https://journals.psu.edu/pmhb/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:56.070303+00:00 |
| Pensando Psicologia | [feed](<https://revistas.ucc.edu.co/index.php/pe/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:01:04.657913+00:00 |
| PEPTIDES | [feed](<https://rss.sciencedirect.com/publication/science/01969781>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:07:13.768262+00:00 |
| Perifrasis-Revista de Literatura Teoria y Critica | [feed](<https://revistas.uniandes.edu.co/index.php/perifrasis/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:06.722053+00:00 |
| PERIODICA POLYTECHNICA-CHEMICAL ENGINEERING | [feed](<https://pp.bme.hu/ch/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:57:39.228085+00:00 |
| Periodica Polytechnica-Civil Engineering | [feed](<https://pp.bme.hu/ci/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 27 | 2026-10-04T13:01:02.489370+00:00 |
| PERIODICA POLYTECHNICA-MECHANICAL ENGINEERING | [feed](<https://pp.bme.hu/me/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:01:19.487803+00:00 |
| PERIODICUM BIOLOGORUM | [feed](<https://ojs.srce.hr/periodicum_biologorum/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:00.108948+00:00 |
| Persian Journal of Acarology | [feed](<https://www.biotaxa.org/pja/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:59:31.048783+00:00 |
| Perspectiva Educacional | [feed](<http://www.perspectivaeducacional.cl/index.php/peducacional/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:20.323796+00:00 |
| Perspectiva Teologica | [feed](<https://www.faje.edu.br/periodicos/index.php/perspectiva/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:48.411535+00:00 |
| PERSPECTIVES IN PLANT ECOLOGY EVOLUTION AND SYSTEMATICS | [feed](<https://rss.sciencedirect.com/publication/science/14338319>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:07:14.123859+00:00 |
| Pesquisa Brasileira em Odontopediatria e Clinica Integrada | [feed](<https://www.scielo.br/journal/pboci/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:50.037806+00:00 |
| PESQUISA VETERINARIA BRASILEIRA | [feed](<https://www.scielo.br/journal/pvb/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:50.984838+00:00 |
| Pharmaceutical Care Espana | [feed](<https://www.pharmcareesp.com/index.php/PharmaCARE/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T13:00:20.735607+00:00 |
| PHARMACOGENOMICS JOURNAL | [feed](<https://www.nature.com/tpj.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:41.138202+00:00 |
| PHARMACOLOGICAL RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/10436618>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:15.261750+00:00 |
| PHARMACOLOGY BIOCHEMISTRY AND BEHAVIOR | [feed](<https://rss.sciencedirect.com/publication/science/00913057>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:07:15.637489+00:00 |
| Pharmacy Practice-Granada | [feed](<https://scielo.isciii.es/rss.php?pid=1885-642X20210003&lang=en>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:01:09.551666+00:00 |
| PharmaNutrition | [feed](<https://rss.sciencedirect.com/publication/science/22134344>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:07:16.221791+00:00 |
| PHARMAZIE | [feed](<https://api.ingentaconnect.com/content/govi/pharmaz/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T13:01:30.881440+00:00 |
| Philosophers Imprint | [feed](<https://journals.publishing.umich.edu/phimp/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:01:16.696244+00:00 |
| Philosophical Inquiries | [feed](<https://www.philinq.it/index.php/philinq/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:20.806758+00:00 |
| Photoacoustics | [feed](<https://rss.sciencedirect.com/publication/science/22135979>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:07:16.594057+00:00 |
| Photonics and Nanostructures-Fundamentals and Applications | [feed](<https://rss.sciencedirect.com/publication/science/15694410>) | feed-with-entries | 200 | rss | 52 | 2026-10-04T13:07:17.532926+00:00 |
| Phronimon | [feed](<https://unisapressjournals.co.za/index.php/Phronimon/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:13.309799+00:00 |
| PHYSICA B-CONDENSED MATTER | [feed](<https://rss.sciencedirect.com/publication/science/09214526>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:18.076102+00:00 |
| PHYSICA C-SUPERCONDUCTIVITY AND ITS APPLICATIONS | [feed](<https://rss.sciencedirect.com/publication/science/09214534>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:07:18.443782+00:00 |
| PHYSICA D-NONLINEAR PHENOMENA | [feed](<https://rss.sciencedirect.com/publication/science/01672789>) | feed-with-entries | 200 | rss | 85 | 2026-10-04T13:07:19.017123+00:00 |
| Physical Medicine and Rehabilitation Clinics of North America | [feed](<https://rss.sciencedirect.com/publication/science/10479651>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:07:19.576123+00:00 |
| Physics & Imaging in Radiation Oncology | [feed](<https://rss.sciencedirect.com/publication/science/24056316>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:07:19.934797+00:00 |
| Physics and Chemistry of Glasses-European Journal of Glass Science and Technology Part B | [feed](<https://api.ingentaconnect.com/content/sgt/ejgst/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T13:01:37.325965+00:00 |
| Physics of Life Reviews | [feed](<https://rss.sciencedirect.com/publication/science/15710645>) | feed-with-entries | 200 | rss | 41 | 2026-10-04T13:07:20.286365+00:00 |
| PHYSICS OF THE EARTH AND PLANETARY INTERIORS | [feed](<https://rss.sciencedirect.com/publication/science/00319201>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:07:21.332617+00:00 |
| PHYSIOLOGICAL AND MOLECULAR PLANT PATHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/08855765>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:21.717605+00:00 |
| Phytochemistry Letters | [feed](<https://rss.sciencedirect.com/publication/science/18743900>) | feed-with-entries | 200 | rss | 44 | 2026-10-04T13:07:22.265640+00:00 |
| Phytotaxa | [feed](<https://phytotaxa.mapress.com/pt/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:57:36.587998+00:00 |
| PLANETARY AND SPACE SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00320633>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:07:22.819535+00:00 |
| Plant Pathology Journal | [feed](<https://www.ppjonline.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T13:00:23.947092+00:00 |
| Plant Science Today | [feed](<https://horizonepublishing.com/index.php/PST/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:51.266916+00:00 |
| PLASMID | [feed](<https://rss.sciencedirect.com/publication/science/0147619X>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:07:23.210881+00:00 |
| Plastic Surgery | [feed](<https://www.plasticsurgery.org/rss/news-rss-feed>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:00:21.800243+00:00 |
| Plato Journal | [feed](<https://platosociety.org/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T12:57:38.380959+00:00 |
| PLOS BIOLOGY | [feed](<https://journals.plos.org/plosbiology/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:33.977543+00:00 |
| PLoS Computational Biology | [feed](<https://journals.plos.org/ploscompbiol/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:55.954207+00:00 |
| PLoS Genetics | [feed](<https://journals.plos.org/plosgenetics/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:16.654027+00:00 |
| PLOS MEDICINE | [feed](<https://journals.plos.org/plosmedicine/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:26.700286+00:00 |
| PLoS Neglected Tropical Diseases | [feed](<https://journals.plos.org/plosntds/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:32.878563+00:00 |
| PLoS One | [feed](<https://journals.plos.org/plosone/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:37.703014+00:00 |
| PLoS Pathogens | [feed](<https://journals.plos.org/plospathogens/feed/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:40.468386+00:00 |
| Plura-Revista de Estudos de Religiao | [feed](<https://revistaplura.emnuvens.com.br/plura/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 21 | 2026-10-04T12:58:09.567017+00:00 |
| Podium-Sport Leisure and Tourism Review | [feed](<https://periodicos.uninove.br/podium/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:33.983148+00:00 |
| Politics and Governance | [feed](<https://www.cogitatiopress.com/politicsandgovernance/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:37.083099+00:00 |
| Politologicky Casopis-Czech Journal of Political Science | [feed](<https://czechpolsci.eu/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:55:12.064058+00:00 |
| POLYHEDRON | [feed](<https://rss.sciencedirect.com/publication/science/02775387>) | feed-with-entries | 200 | rss | 57 | 2026-10-04T13:07:23.591365+00:00 |
| Pomorstvo-Scientific Journal of Maritime Research | [feed](<https://ojs.srce.hr/pomorstvo/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:17.977759+00:00 |
| POULTRY SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00325791>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:24.018898+00:00 |
| Prace Komisji Geografii Przemyslu Polskiego Towarzystwa Geograficznego-Studies of the Industrial Geography Commission of the Polish Geographical Society | [feed](<https://prace-kgp.uken.krakow.pl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:57:39.869515+00:00 |
| Practical Laboratory Medicine | [feed](<https://rss.sciencedirect.com/publication/science/23525517>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:07:24.561819+00:00 |
| Pratiques Psychologiques | [feed](<https://rss.sciencedirect.com/publication/science/12691763>) | feed-with-entries | 200 | rss | 27 | 2026-10-04T13:07:25.612794+00:00 |
| Pravni Vjesnik | [feed](<https://ojs.srce.hr/pravni-vjesnik/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:27.273410+00:00 |
| Presente y Pasado-Revista de Historia | [feed](<http://erevistas.saber.ula.ve/index.php/presenteypasado/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:30.183675+00:00 |
| PRESERVATION | [feed](<https://www.iccrom.org/feed>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:56.046430+00:00 |
| Presse Medicale | [feed](<https://rss.sciencedirect.com/publication/science/07554982>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:07:26.316124+00:00 |
| Preventive Medicine Reports | [feed](<https://rss.sciencedirect.com/publication/science/22113355>) | feed-with-entries | 200 | rss | 54 | 2026-10-04T13:07:26.919356+00:00 |
| Prikladnaya Diskretnaya Matematika | [feed](<https://www.mathnet.ru/rss/rssLastIssue.phtml?jrnid=pdm&option_lang=eng>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:00:11.977308+00:00 |
| Primary Care Diabetes | [feed](<https://rss.sciencedirect.com/publication/science/17519918>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:07:28.161527+00:00 |
| Procesos-Revista Ecuatoriana de Historia | [feed](<https://revistas.uasb.edu.ec/index.php/procesos/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:17.726835+00:00 |
| Processes of Petrochemistry and Oil Refining | [feed](<https://ppor.az/index.php/ppor/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:39.466516+00:00 |
| Processing and Application of Ceramics | [feed](<http://ojs.tf.uns.ac.rs/index.php/pac/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:57:13.923624+00:00 |
| PROGRESS IN AEROSPACE SCIENCES | [feed](<https://rss.sciencedirect.com/publication/science/03760421>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:07:28.518889+00:00 |
| PROGRESS IN CARDIOVASCULAR DISEASES | [feed](<https://rss.sciencedirect.com/publication/science/00330620>) | feed-with-entries | 200 | rss | 81 | 2026-10-04T13:07:29.309151+00:00 |
| PROGRESS IN CRYSTAL GROWTH AND CHARACTERIZATION OF MATERIALS | [feed](<https://rss.sciencedirect.com/publication/science/09608974>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T13:07:30.023223+00:00 |
| Progress in Disaster Science | [feed](<https://rss.sciencedirect.com/publication/science/25900617>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:30.394419+00:00 |
| PROGRESS IN ENERGY AND COMBUSTION SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/03601285>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T13:07:30.968712+00:00 |
| PROGRESS IN LIPID RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/01637827>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:07:31.775898+00:00 |
| Progress in Natural Science-Materials International | [feed](<https://rss.sciencedirect.com/publication/science/10020071>) | feed-with-entries | 200 | rss | 63 | 2026-10-04T13:07:32.405394+00:00 |
| PROGRESS IN NEUROBIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/03010082>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:07:32.760820+00:00 |
| PROGRESS IN OCEANOGRAPHY | [feed](<https://rss.sciencedirect.com/publication/science/00796611>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:07:33.142609+00:00 |
| PROGRESS IN PARTICLE AND NUCLEAR PHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/01466410>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:07:34.269963+00:00 |
| PROGRESS IN PLANNING | [feed](<https://rss.sciencedirect.com/publication/science/03059006>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:07:34.827819+00:00 |
| PROGRESS IN POLYMER SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00796700>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:07:35.185910+00:00 |
| PROGRESS IN QUANTUM ELECTRONICS | [feed](<https://rss.sciencedirect.com/publication/science/00796727>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:07:35.542384+00:00 |
| PROGRESS IN SOLID STATE CHEMISTRY | [feed](<https://rss.sciencedirect.com/publication/science/00796786>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:07:36.153272+00:00 |
| PROGRESS IN SURFACE SCIENCE | [feed](<https://rss.sciencedirect.com/publication/science/00796816>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:07:36.689667+00:00 |
| PROSTATE CANCER AND PROSTATIC DISEASES | [feed](<https://www.nature.com/pcan.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:44.829230+00:00 |
| Prostate International | [feed](<https://rss.sciencedirect.com/publication/science/22878882>) | feed-with-entries | 200 | rss | 51 | 2026-10-04T13:07:37.258849+00:00 |
| PROTEIN EXPRESSION AND PURIFICATION | [feed](<https://rss.sciencedirect.com/publication/science/10465928>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:07:37.599596+00:00 |
| PROTIST | [feed](<https://rss.sciencedirect.com/publication/science/14344610>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:07:38.215471+00:00 |
| PSYCHIATRY RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/01651781>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:39.324129+00:00 |
| Psycholinguistics | [feed](<https://psycholing-journal.com/index.php/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:57:40.932270+00:00 |
| PSYCHOLOGICA BELGICA | [feed](<https://account.psychologicabelgica.com/index.php/up-j-pb/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:22.760362+00:00 |
| Psychology Society & Education | [feed](<https://journals.uco.es/psye/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:00:56.961675+00:00 |
| Psychology-Journal of the Higher School of Economics | [feed](<https://psy-journal.hse.ru/en/rss>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:57:40.161180+00:00 |
| PSYCHONEUROENDOCRINOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/03064530>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:07:39.688138+00:00 |
| PUBLIC HEALTH REVIEWS | [feed](<https://www.ssph-journal.org/journals/public-health-reviews/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:14.240899+00:00 |
| PULMONARY PHARMACOLOGY & THERAPEUTICS | [feed](<https://rss.sciencedirect.com/publication/science/10945539>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:07:41.213773+00:00 |
| Punto Genero | [feed](<https://revistapuntogenero.uchile.cl/index.php/RPG/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:09.753497+00:00 |
| QED-A Journal in GLBTQ Worldmaking | [feed](<https://ojs.msupress.org/index.php/QED/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 23 | 2026-10-04T12:57:10.163465+00:00 |
| Quaderns de Psicologia | [feed](<https://quadernsdepsicologia.cat/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:57:46.007074+00:00 |
| Quaestio Rossica | [feed](<https://qr.urfu.ru/ojs/index.php/qr/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout | 200 |  |  | 2026-10-04T12:57:45.676643+00:00 |
| Qualitative Report | [feed](<https://nsuworks.nova.edu/tqr/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:57.795626+00:00 |
| Quality Assurance and Safety of Crops & Foods | [feed](<https://qascf.com/index.php/qas/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:44.796720+00:00 |
| Quantitative Imaging in Medicine and Surgery | [feed](<https://qims.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 84 | 2026-10-04T12:57:45.313190+00:00 |
| QUANTUM INFORMATION & COMPUTATION | [feed](<https://dl.acm.org/action/showFeed?type=etoc&feed=rss&jc=qic>) | feed-with-entries | 200 | rdf | 3 | 2026-10-04T13:01:31.262740+00:00 |
| Quaternary | [feed](<https://rss.sciencedirect.com/publication/science/10406182>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:07:41.679711+00:00 |
| Quaternary Geochronology | [feed](<https://rss.sciencedirect.com/publication/science/18711014>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:07:42.325109+00:00 |
| Quaternary Science Advances | [feed](<https://rss.sciencedirect.com/publication/science/26660334>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:07:42.968877+00:00 |
| RADIATION MEASUREMENTS | [feed](<https://rss.sciencedirect.com/publication/science/13504487>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:07:43.452567+00:00 |
| RADICAL PHILOSOPHY | [feed](<https://www.radicalphilosophy.com/comments/feed>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T13:00:23.953014+00:00 |
| Radical Teacher | [feed](<https://radicalteacher.library.pitt.edu/ojs/radicalteacher/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:57:47.749076+00:00 |
| Range Management and Agroforestry | [feed](<https://publications.rmsi.in/index.php/rma/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:43.474853+00:00 |
| Rational Pharmacotherapy in Cardiology | [feed](<https://www.rpcardio.online/jour/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:33.846559+00:00 |
| Raumforschung und Raumordnung-Spatial Research and Planning | [feed](<https://rur.oekom.de/index.php/rur/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 47 | 2026-10-04T12:58:47.364088+00:00 |
| RED-Revista de Educacion a Distancia | [feed](<https://revistas.um.es/red/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:01:27.847604+00:00 |
| REGIONAL SCIENCE AND URBAN ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/01660462>) | feed-with-entries | 200 | rss | 35 | 2026-10-04T13:07:44.072236+00:00 |
| Regional Science Policy and Practice | [feed](<https://rss.sciencedirect.com/publication/science/17577802>) | feed-with-entries | 200 | rss | 11 | 2026-10-04T13:07:44.647037+00:00 |
| Regional Studies in Marine Science | [feed](<https://rss.sciencedirect.com/publication/science/23524855>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:45.204559+00:00 |
| Regional Sustainability | [feed](<https://rss.sciencedirect.com/publication/science/2666660X>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:07:46.000498+00:00 |
| Regulatory Mechanisms in Biosystems | [feed](<https://medicine.dp.ua/index.php/med/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:56:55.497058+00:00 |
| RELIGION | [feed](<https://www.religion-online.org/feed/>) | feed-with-entries | 200 | rss | 8 | 2026-10-04T13:00:27.197547+00:00 |
| Remate de Males | [feed](<https://periodicos.sbu.unicamp.br/ojs/index.php/remate/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | empty-feed | 200 | atom | 0 | 2026-10-04T13:01:01.872600+00:00 |
| REMEA-Revista Eletronica do Mestrado em Educacao Ambiental | [feed](<https://periodicos.furg.br/remea/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:26.365714+00:00 |
| Remote Sensing Applications-Society and Environment | [feed](<https://rss.sciencedirect.com/publication/science/23529385>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:46.402014+00:00 |
| RENAISSANCE AND REFORMATION | [feed](<https://jps.library.utoronto.ca/index.php/renref/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 45 | 2026-10-04T13:00:57.568701+00:00 |
| Reports of Practical Oncology and Radiotherapy | [feed](<https://journals.viamedica.pl/rpor/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T13:01:45.162685+00:00 |
| Research in Cold and Arid Regions | [feed](<https://rss.sciencedirect.com/publication/science/20971583>) | feed-with-entries | 200 | rss | 44 | 2026-10-04T13:07:46.893540+00:00 |
| Research in Economics | [feed](<https://rss.sciencedirect.com/publication/science/10909443>) | feed-with-entries | 200 | rss | 26 | 2026-10-04T13:07:47.296566+00:00 |
| Research in Learning Technology | [feed](<https://journal.alt.ac.uk/index.php/rlt/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:56:21.392281+00:00 |
| Research in Organizational Behavior | [feed](<https://rss.sciencedirect.com/publication/science/01913085>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:07:47.926681+00:00 |
| Research in Social Stratification and Mobility | [feed](<https://rss.sciencedirect.com/publication/science/02765624>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T13:07:48.341686+00:00 |
| Research Reports in Clinical Cardiology | [feed](<https://www.dovepress.com/feed/journal/96>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:57.484821+00:00 |
| RESOURCE AND ENERGY ECONOMICS | [feed](<https://rss.sciencedirect.com/publication/science/09287655>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:07:49.121319+00:00 |
| Resources Policy | [feed](<https://rss.sciencedirect.com/publication/science/03014207>) | feed-with-entries | 200 | rss | 39 | 2026-10-04T13:07:49.680214+00:00 |
| Respiratory Medicine and Research | [feed](<https://rss.sciencedirect.com/publication/science/25900412>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:50.252858+00:00 |
| Resuscitation Plus | [feed](<https://rss.sciencedirect.com/publication/science/26665204>) | feed-with-entries | 200 | rss | 79 | 2026-10-04T13:07:50.673698+00:00 |
| Reumatismo | [feed](<https://www.reumatismo.org/reuma/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:29.057436+00:00 |
| REUNIR-Revista de Administracao Contabilidade e Sustentabilidade | [feed](<https://reunir.revistas.ufcg.edu.br/index.php/uacc/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T12:57:51.969176+00:00 |
| Review of Economic Analysis | [feed](<https://openjournals.uwaterloo.ca/index.php/rofea/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:57:20.770019+00:00 |
| REVIEW OF ECONOMIC DYNAMICS | [feed](<https://rss.sciencedirect.com/publication/science/10942025>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:07:51.274729+00:00 |
| Review of European and Comparative Law | [feed](<https://czasopisma.kul.pl/index.php/recl/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:14.724492+00:00 |
| Revista Argentina de Historiografia Linguistica | [feed](<https://www.rahl.ar/index.php/rahl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:00:25.614427+00:00 |
| Revista Biblica | [feed](<https://www.revistabiblica.com/ojs/index.php/RB/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T13:00:29.123378+00:00 |
| Revista Brasileira de Ciencias Ambientais | [feed](<https://www.rbciamb.com.br/Publicacoes_RBCIAMB/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 60 | 2026-10-04T13:00:25.762641+00:00 |
| Revista Brasileira de Direito Processual Penal | [feed](<https://revista.ibraspp.com.br/RBDPP/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:57.760586+00:00 |
| Revista Brasileira de Engenharia Agricola e Ambiental | [feed](<https://www.scielo.br/journal/rbeaa/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:51.867565+00:00 |
| REVISTA BRASILEIRA DE ENTOMOLOGIA | [feed](<https://www.scielo.br/journal/rbent/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:52.671088+00:00 |
| Revista Brasileira de Estudos Politicos | [feed](<https://pos.direito.ufmg.br/rbep/index.php/rbep/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:38.727438+00:00 |
| Revista Brasileira de Fruticultura | [feed](<https://www.scielo.br/journal/rbf/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:53.971732+00:00 |
| Revista Brasileira de Geomorfologia | [feed](<https://rbgeomorfologia.org.br/rbg/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:57:49.478254+00:00 |
| Revista Brasileira de Historia | [feed](<https://www.scielo.br/journal/rbh/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:54.949071+00:00 |
| Revista Brasileira de Inovacao | [feed](<https://www.scielo.br/journal/rbi/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:56.002580+00:00 |
| Revista Brasileira de Marketing | [feed](<https://periodicos.uninove.br/remark/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T13:01:02.166820+00:00 |
| Revista CES Derecho | [feed](<https://revistas.ces.edu.co/index.php/derecho/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:58:13.817241+00:00 |
| Revista Chilena de Derecho | [feed](<https://revistachilenadederecho.uc.cl/index.php/Rchd/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:58:01.214730+00:00 |
| Revista Chilena de Infectologia | [feed](<https://revinf.cl/index.php/revinf/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T12:57:52.549862+00:00 |
| REVISTA CHILENA DE LITERATURA | [feed](<https://revistaliteratura.uchile.cl/index.php/RCL/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:08.119236+00:00 |
| Revista Chilena de Nutricion | [feed](<http://www.scielo.cl/rss.php?pid=0717-751820260001&lang=es>) | access-blocked | 403 |  |  | 2026-10-04T13:01:42.170476+00:00 |
| Revista Ciencias Administrativas | [feed](<https://revistas.unlp.edu.ar/CADM/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:06.801112+00:00 |
| Revista Cientifica da Faculdade de Educacao e Meio Ambiente | [feed](<https://revista.faema.edu.br/index.php/Revista-FAEMA/gateway/plugin/AnnouncementFeedGatewayPlugin/rss2>) | access-blocked | 403 |  |  | 2026-10-04T12:57:55.990862+00:00 |
| Revista Colombiana de Cancerologia | [feed](<https://www.revistacancercol.org/index.php/cancer/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:29.477543+00:00 |
| Revista Colombiana de Investigaciones Agroindustriales | [feed](<https://revistas.sena.edu.co/index.php/recia/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T12:58:17.596779+00:00 |
| Revista Conrado | [feed](<https://conrado.ucf.edu.cu/index.php/conrado/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:05.496637+00:00 |
| Revista Contemporanea de Educacao | [feed](<https://revistas.ufrj.br/index.php/rce/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:01:20.069546+00:00 |
| Revista Criminalidad | [feed](<https://revistacriminalidad.policia.gov.co:8000/index.php/revcriminalidad/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:58:01.429573+00:00 |
| Revista Cubana de Fisica | [feed](<https://www.revistacubanadefisica.org/index.php/rcf/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:29.526584+00:00 |
| Revista Cuidarte | [feed](<https://revistas.unam.mx/index.php/cuidarte/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:58:27.065584+00:00 |
| Revista da Associacao Medica Brasileira | [feed](<https://www.scielo.br/journal/ramb/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:57.306543+00:00 |
| Revista da Escola de Enfermagem da USP | [feed](<https://revistas.usp.br/reeusp/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:07.052825+00:00 |
| Revista da Sociedade Brasileira de Medicina Tropical | [feed](<https://www.scielo.br/journal/rsbmt/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:57.817187+00:00 |
| Revista de Arquitectura-Bogota | [feed](<https://revistadearquitectura.ucatolica.edu.co/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:58:03.272846+00:00 |
| REVISTA DE BIOLOGIA TROPICAL | [feed](<http://www.scielo.sa.cr/rss.php?pid=0034-774420250002&lang=en>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:00:36.737128+00:00 |
| Revista de Cancioneros Impresos y Manuscritos | [feed](<https://rcim.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 21 | 2026-10-04T12:57:49.480130+00:00 |
| Revista de Comunicacion-Peru | [feed](<https://revistadecomunicacion.com/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:04.278203+00:00 |
| Revista de Contabilidad-Spanish Accounting Review | [feed](<https://revistas.um.es/rcsar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T13:01:34.430115+00:00 |
| Revista de Derecho Privado | [feed](<https://revistas.juridicas.unam.mx/index.php/derecho-privado/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:03.824624+00:00 |
| Revista de Direito da Cidade-City Law | [feed](<https://www.e-publicacoes.uerj.br/rdc/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:43.700187+00:00 |
| Revista de Ensino de Bioquimica | [feed](<https://www.bioquimica.org.br/index.php/REB/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:59:29.694921+00:00 |
| Revista de Estudios en Seguridad Internacional-RESI | [feed](<http://seguridadinternacional.es/resi/index.php/revista/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:00.507178+00:00 |
| Revista de Estudios Sociales | [feed](<https://revistas.uniandes.edu.co/index.php/res/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:21.155257+00:00 |
| Revista de Estudos da Linguagem | [feed](<http://periodicos.letras.ufmg.br/index.php/relin/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 502 |  |  | 2026-10-04T13:01:01.611546+00:00 |
| Revista de Filosofia Aurora | [feed](<https://periodicos.pucpr.br/aurora/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:57:27.891482+00:00 |
| Revista de Filosofia La Plata | [feed](<https://www.rdf.fahce.unlp.edu.ar/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:00:25.860011+00:00 |
| Revista de Gestao Financas e Contabilidade | [feed](<https://revistas.uneb.br/financ/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:28.777881+00:00 |
| Revista de Gestion Publica | [feed](<https://revistaschilenas.uchile.cl/feed/rss_1.0/2250/165470>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T13:01:29.004990+00:00 |
| Revista de Historia da Sociedade e da Cultura | [feed](<https://impactum-journals.uc.pt/rhsc/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:26.044575+00:00 |
| Revista de Historia das Ideias | [feed](<https://impactum-journals.uc.pt/rhi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:31.906525+00:00 |
| Revista de Historia Moderna-Anales de la Universidad de Alicante | [feed](<https://revistahistoriamoderna.ua.es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:58:06.578278+00:00 |
| Revista de Historia-Sao Paulo | [feed](<https://www.scielo.br/journal/rh/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:58.822864+00:00 |
| Revista de Investigacion Linguistica | [feed](<https://revistas.um.es/ril/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T13:01:38.270121+00:00 |
| Revista de Investigaciones Veterinarias del Peru | [feed](<http://www.scielo.org.pe/rss.php?pid=1609-911720250006&lang=es>) | feed-with-entries | 200 | rss | 29 | 2026-10-04T13:00:36.358461+00:00 |
| Revista de Investigaciones-Universidad del Quindio | [feed](<https://ojs.uniquindio.edu.co/ojs/index.php/riuq/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T12:57:15.073460+00:00 |
| Revista de la Federacion Argentina de Cardiologia | [feed](<https://revistafac.org.ar/ojs/index.php/revistafac/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:04.735657+00:00 |
| REVISTA DE LA SOCIEDAD ENTOMOLOGICA ARGENTINA | [feed](<https://www.biotaxa.org/RSEA/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T13:01:11.061170+00:00 |
| Revista de la Universidad del Zulia | [feed](<https://produccioncientificaluz.org/index.php/rluz/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:40.095961+00:00 |
| Revista de Llengua i Dret-Journal of Language and Law | [feed](<https://revistes.eapc.gencat.cat/index.php/rld/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:39.837252+00:00 |
| Revista de Pedagogia Universitaria y Didactica del Derecho | [feed](<https://pedagogiaderecho.uchile.cl/index.php/RPUD/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 21 | 2026-10-04T12:57:25.087570+00:00 |
| Revista de Psicologia PUCP | [feed](<https://revistas.pucp.edu.pe/index.php/psicologia/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T13:01:03.992591+00:00 |
| Revista de Senologia y Patologia Mamaria | [feed](<https://rss.sciencedirect.com/publication/science/02141582>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:07:51.825799+00:00 |
| Revista de Transporte y Territorio | [feed](<https://revistascientificas.filo.uba.ar/index.php/rtt/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:07.544536+00:00 |
| Revista de Urbanismo | [feed](<https://revistaurbanismo.uchile.cl/index.php/RU/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:37.993303+00:00 |
| Revista do Curso de Direito do UNIFOR | [feed](<https://revistas.uniformg.edu.br/cursodireitouniformg/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:31.305000+00:00 |
| REVISTA DO INSTITUTO DE MEDICINA TROPICAL DE SAO PAULO | [feed](<https://revistas.usp.br/rimtsp/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:21.321146+00:00 |
| Revista do Servico Publico | [feed](<https://revista.enap.gov.br/index.php/RSP/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 52 | 2026-10-04T12:57:53.505845+00:00 |
| Revista Educacion en Ingenieria | [feed](<https://educacioneningenieria.org/index.php/edi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:55:23.759656+00:00 |
| Revista Electronica Educare | [feed](<http://www.scielo.sa.cr/rss.php?pid=1409-425820250001&lang=en>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:01:13.925546+00:00 |
| Revista Electronica Interuniversitaria de Formacion del Profesorado | [feed](<https://revistas.um.es/reifop/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T13:01:40.754102+00:00 |
| Revista Eletronica em Gestao Educacao e Tecnologia Ambiental | [feed](<https://periodicos.ufsm.br/reget/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:57:30.793344+00:00 |
| Revista Eletronica Pesquiseduca | [feed](<https://periodicos.unisantos.br/pesquiseduca/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:57:34.317646+00:00 |
| Revista Empresa y Humanismo | [feed](<https://revistas.unav.edu/index.php/empresa-y-humanismo/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:28.229618+00:00 |
| Revista Espanola de Comunicacion en Salud | [feed](<https://e-revistas.uc3m.es/index.php/RECS/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:55:20.323796+00:00 |
| Revista Espanola de Discapacidad-REDIS | [feed](<https://redis.cedid.es/index.php/redis/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:49.905206+00:00 |
| Revista Espanola de Nutricion Humana y Dietetica | [feed](<https://www.renhyd.org/renhyd/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:28.307475+00:00 |
| Revista Espanola de Pedagogia | [feed](<https://revistas.unir.net/index.php/rep/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:58:31.431555+00:00 |
| Revista Espanola de Salud Publica | [feed](<https://www.scielosp.org/journal/resp/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:00:37.589727+00:00 |
| Revista Estudos Institucionais-Journal of Institutional Studies | [feed](<https://estudosinstitucionais.com/REI/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:55:33.349982+00:00 |
| Revista Eureka sobre Ensenanza y Divulgacion de las Ciencias | [feed](<https://revistas.uca.es/index.php/eureka/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T13:01:04.546134+00:00 |
| Revista Facultad de Ingenieria-Universidad de Antioquia | [feed](<https://revistas.udea.edu.co/index.php/ingenieria/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:05.292450+00:00 |
| Revista Finanzas y Politica Economica | [feed](<https://revfinypolecon.ucatolica.edu.co/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:57:52.404870+00:00 |
| Revista Fitotecnia Mexicana | [feed](<https://revfitotecnia.mx/index.php/RFM/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T12:57:52.481632+00:00 |
| Revista Forestal Mesoamerica Kuru-RFMK | [feed](<http://www.scielo.sa.cr/rss.php?pid=2215-250420250002&lang=en>) | feed-with-entries | 200 | rss | 7 | 2026-10-04T13:01:24.309973+00:00 |
| Revista Geografica Venezolana | [feed](<http://erevistas.saber.ula.ve/index.php/regeoven/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:00:52.902713+00:00 |
| Revista Gestao Organizacional | [feed](<https://pegasus.unochapeco.edu.br/revistas/index.php/rgo/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:57:25.877181+00:00 |
| Revista Habitat Sustentable | [feed](<http://www.scielo.cl/rss.php?pid=0719-070020250001&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:43.640761+00:00 |
| Revista Ibero-Americana de Ciencia da Informacao | [feed](<https://periodicos.unb.br/index.php/RICI/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:01:02.067350+00:00 |
| Revista Ibero-Americana de Estudos em Educacao | [feed](<https://periodicos.fclar.unesp.br/iberoamericana/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 28 | 2026-10-04T12:57:25.910566+00:00 |
| Revista Icono 14-Revista Cientifica de Comunicacion y Tecnologias | [feed](<https://icono14.net/ojs/index.php/icono14/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:55:56.495565+00:00 |
| Revista Ingenieria de Construccion | [feed](<http://www.scielo.cl/rss.php?pid=0718-507320250004&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:44.893599+00:00 |
| Revista Innovaciencia | [feed](<https://revistas.udes.edu.co/innovaciencia/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:58:23.154384+00:00 |
| Revista Internacional de Contaminacion Ambiental | [feed](<https://www.revistascca.unam.mx/rica/index.php/rica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:32.877999+00:00 |
| Revista Internacional de Educacion Musical | [feed](<https://revistaeducacionmusical.org/index.php/rem1/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-found | 404 |  |  | 2026-10-04T12:58:04.432562+00:00 |
| Revista Internacional de Relaciones Publicas | [feed](<https://revistarelacionespublicas.uma.es/index.php/revrrpp/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:58:10.563686+00:00 |
| Revista Investigaciones Altoandinas-Journal of High Andean Research | [feed](<https://huajsapata.unap.edu.pe/index.php/ria/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:55:54.167522+00:00 |
| Revista INVI | [feed](<https://revistainvi.uchile.cl/index.php/INVI/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:07.814246+00:00 |
| Revista Juridica Portucalense | [feed](<https://revistas.rcaap.pt/juridica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T12:58:16.652178+00:00 |
| Revista Latina de Comunicacion Social | [feed](<https://nuevaepoca.revistalatinacs.org/index.php/revista/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 44 | 2026-10-04T12:57:04.407174+00:00 |
| Revista Latinoamericana de Derecho Social | [feed](<https://revistas.juridicas.unam.mx/index.php/derecho-social/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T13:01:19.895669+00:00 |
| Revista Latinoamericana de Estudios de Familia | [feed](<https://revistasojs.ucaldas.edu.co/index.php/revlatinofamilia/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T13:01:07.874411+00:00 |
| Revista Latinoamericana de Estudios sobre Cuerpos Emociones y Sociedad | [feed](<http://www.relaces.com.ar/index.php?journal=relaces&page=gateway&op=plugin&path[]=WebFeedGatewayPlugin&path[]=atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T13:00:26.794230+00:00 |
| Revista Latinoamericana de Hipertension | [feed](<https://saber.ucv.ve/ojs/index.php/rev_lh/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:58:48.006415+00:00 |
| Revista Latinoamericana de la Papa | [feed](<https://papaslatinas.org/index.php/rev-alap/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:22.471359+00:00 |
| Revista Latinoamericana de Metodologia de la Investigacion Social | [feed](<http://www.relmis.com.ar/ojs/index.php?journal=relmis&page=gateway&op=plugin&path[]=WebFeedGatewayPlugin&path[]=atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T13:00:27.610667+00:00 |
| Revista Latinoamericana de Metodologia de las Ciencias Sociales | [feed](<https://www.relmecs.fahce.unlp.edu.ar/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:00:27.210232+00:00 |
| Revista Mediacao | [feed](<https://revista.fumec.br/index.php/mediacao/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 14 | 2026-10-04T12:57:56.705427+00:00 |
| REVISTA MEDICA DE CHILE | [feed](<https://www.revistamedicadechile.cl/index.php/rmedica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:31.811894+00:00 |
| Revista Medica de Rosario | [feed](<https://www.revistamedicaderosario.org/index.php/rm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:32.106337+00:00 |
| Revista Mexicana de Analisis Politico y Administracion Publica | [feed](<https://www.remap.ugto.mx/index.php/remap/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:27.927109+00:00 |
| Revista Mexicana de Biodiversidad | [feed](<https://revista.ib.unam.mx/index.php/bio/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:57:57.124363+00:00 |
| REVISTA MEXICANA DE CIENCIAS GEOLOGICAS | [feed](<https://www.rmcg.unam.mx/index.php/rmcg/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T13:00:33.753128+00:00 |
| Revista Mexicana de Ciencias Politicas y Sociales | [feed](<https://www.revistas.unam.mx/index.php/rmcpys/gateway/plugin/WebFeedGatewayPlugin/rss>) | access-blocked | 403 |  |  | 2026-10-04T13:00:32.401672+00:00 |
| Revista Musical Chilena | [feed](<https://revistamusicalchilena.uchile.cl/index.php/RMCH/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:09.053625+00:00 |
| Revista on Line de Politica e Gestao Educacional | [feed](<https://periodicos.fclar.unesp.br/rpge/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T13:01:01.130714+00:00 |
| REVISTA PANAMERICANA DE SALUD PUBLICA-PAN AMERICAN JOURNAL OF PUBLIC HEALTH | [feed](<https://journal.paho.org/en/rss.xml>) | access-blocked | 403 |  |  | 2026-10-04T12:56:23.533021+00:00 |
| Revista Perspectiva Empresarial | [feed](<https://revistas.ceipa.edu.co/index.php/perspectiva-empresarial/gateway/plugin/WebFeedGatewayPlugin/atom>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:58:13.795672+00:00 |
| Revista Peruana de Investigacion Educativa | [feed](<https://revistas.siep.org.pe/index.php/RPIE/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:58:17.597085+00:00 |
| Revista Pistis & Praxis-Teologia e Pastoral | [feed](<https://periodicos.pucpr.br/pistispraxis/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T13:01:01.832509+00:00 |
| Revista Portuguesa de Historia | [feed](<https://impactum-journals.uc.pt/rph/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:01:37.494083+00:00 |
| Revista Ra Ximhai | [feed](<https://raximhai.uaim.edu.mx/index.php/rx/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 26 | 2026-10-04T12:57:49.037906+00:00 |
| Revista Rupturas | [feed](<https://revistarupturas.com/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:58:10.658954+00:00 |
| Revista San Gregorio | [feed](<http://scielo.senescyt.gob.ec/rss.php?pid=2528-790720250004&lang=en>) | http-error | 502 |  |  | 2026-10-04T13:01:22.760382+00:00 |
| Revista Signos | [feed](<https://revistasignos.cl/index.php/signos/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T12:58:36.972140+00:00 |
| Revista Univap | [feed](<https://revista.univap.br/index.php/revistaunivap/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:57:58.795691+00:00 |
| Revista Universidad y Sociedad | [feed](<https://rus.ucf.edu.cu/index.php/rus/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:47.616702+00:00 |
| Revista Uruguaya de Historia Economica | [feed](<https://www.audhe.org.uy/publicaciones/index.php/RUHE/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:59:28.005479+00:00 |
| REVSTAT-Statistical Journal | [feed](<https://revstat.ine.pt/index.php/REVSTAT/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:58:41.306735+00:00 |
| REVUE DE MEDECINE INTERNE | [feed](<https://rss.sciencedirect.com/publication/science/02488663>) | feed-with-entries | 200 | rss | 53 | 2026-10-04T13:07:52.423366+00:00 |
| Revue Francaise d Allergologie | [feed](<https://rss.sciencedirect.com/publication/science/18770320>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:07:53.095568+00:00 |
| Revue Internationale PME | [feed](<https://revueinternationalepme.com/index.php/1/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:42.240694+00:00 |
| REVUE NEUROLOGIQUE | [feed](<https://rss.sciencedirect.com/publication/science/00353787>) | feed-with-entries | 200 | rss | 48 | 2026-10-04T13:07:53.681731+00:00 |
| REVUE ROUMAINE DE CHIMIE | [feed](<https://revroum.lew.ro/feed/>) | tls-or-network-error |  |  |  | 2026-10-04T12:58:41.245317+00:00 |
| Rhetoric & Public Affairs | [feed](<https://ojs.msupress.org/index.php/RPA/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 18 | 2026-10-04T13:00:59.422474+00:00 |
| RILCE-Revista de Filologia Hispanica | [feed](<https://revistas.unav.edu/index.php/rilce/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:34.502588+00:00 |
| Riset Geologi dan Pertambangan | [feed](<https://jrisetgeotam.brin.go.id/index.php/jrisgeotam/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:56:42.581807+00:00 |
| Risk Management and Healthcare Policy | [feed](<https://www.dovepress.com/feed/journal/56>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:58.359575+00:00 |
| RIVAR-Revista Iberoamericana de Viticultura Agroindustria y Ruralidad | [feed](<https://revistaschilenas.uchile.cl/feed/rss_1.0/2250/24018>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T13:01:35.421676+00:00 |
| RIVISTA ITALIANA DI MUSICOLOGIA | [feed](<https://www.sidm.it/ojs/index.php/ridm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T13:00:41.690852+00:00 |
| RLA-Revista de Linguistica Teorica y Aplicada | [feed](<https://revistaschilenas.uchile.cl/feed/rss_1.0/2250/20335>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T13:01:38.738264+00:00 |
| RNA | [feed](<https://rnajournal.cshlp.org/rss/current.xml>) | access-blocked | 403 |  |  | 2026-10-04T12:58:45.479127+00:00 |
| Roads and Bridges-Drogi i Mosty | [feed](<https://rabdim.pl/index.php/rb/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:57:46.206283+00:00 |
| ROBOTICS AND AUTONOMOUS SYSTEMS | [feed](<https://rss.sciencedirect.com/publication/science/09218890>) | feed-with-entries | 200 | rss | 90 | 2026-10-04T13:07:54.230721+00:00 |
| Roczniki Humanistyczne | [feed](<https://repozytorium.kul.pl/server/opensearch/search?format=atom&scope=0cc3bb3d-07be-4d86-a81f-f26f20ca085f&query=*>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:51.788533+00:00 |
| Rudarsko-Geolosko-Naftni Zbornik | [feed](<https://ojs.srce.hr/rgn/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:33.467838+00:00 |
| Rudn Journal of Russian History | [feed](<https://journals.rudn.ru/russian-history/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:56:36.926551+00:00 |
| Russian Journal of Earth Sciences | [feed](<https://journals.rcsi.science/1681-1208/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 23 | 2026-10-04T12:56:36.190018+00:00 |
| RUSSIAN JOURNAL OF HERPETOLOGY | [feed](<http://rjh.folium.ru/index.php/rjh/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T12:58:45.361801+00:00 |
| Russian Journal of Linguistics | [feed](<https://journals.rudn.ru/linguistics/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 56 | 2026-10-04T13:00:56.520249+00:00 |
| Russian Journal of Vietnamese Studies-Vyetnamskiye issledovaniya | [feed](<https://vietnamjournal.ru/2618-9453/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 19 | 2026-10-04T12:59:15.817566+00:00 |
| SA Journal of Human Resource Management | [feed](<https://sajhrm.co.za/index.php/sajhrm/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:49.909721+00:00 |
| SA Journal of Industrial Psychology | [feed](<https://sajip.co.za/index.php/sajip/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:52.275195+00:00 |
| Safety and Health at Work | [feed](<https://rss.sciencedirect.com/publication/science/20937911>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:07:54.587785+00:00 |
| SAGVNTVM-Papeles del Laboratorio de Arqueologia de Valencia | [feed](<https://ojs.uv.es/index.php/saguntum/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T13:01:00.571955+00:00 |
| SAINS TANAH | [feed](<https://jurnal.uns.ac.id/tanah/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:46.126977+00:00 |
| Sala Preta | [feed](<https://revistas.usp.br/salapreta/pt_BR/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 37 | 2026-10-04T13:01:28.800754+00:00 |
| Salud Colectiva | [feed](<https://www.scielosp.org/journal/scol/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:14.002751+00:00 |
| SARE-Southeast Asian Review of English | [feed](<https://sare.um.edu.my/index.php/SARE/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:58:55.522121+00:00 |
| Saude e Sociedade | [feed](<https://revistas.usp.br/sausoc/en/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:35.293686+00:00 |
| SAUDI PHARMACEUTICAL JOURNAL | [feed](<https://rss.sciencedirect.com/publication/science/13190164>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:07:54.925421+00:00 |
| Scalable Computing-Practice and Experience | [feed](<https://www.scpe.org/index.php/scpe/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:00:40.431099+00:00 |
| Scandinavian Journal of Disability Research | [feed](<https://account.sjdr.se/index.php/su-j-sjdr/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:29.679712+00:00 |
| Schizophrenia Research | [feed](<https://rss.sciencedirect.com/publication/science/09209964>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:55.251515+00:00 |
| Science | [feed](<https://www.science.org/action/showFeed?type=etoc&feed=rss&jc=science>) | feed-with-entries | 200 | rdf | 45 | 2026-10-04T13:00:38.371159+00:00 |
| Science and Technology Studies | [feed](<https://sciencetechnologystudies.journal.fi/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:58.815114+00:00 |
| Science of Gymnastics Journal | [feed](<https://journals.uni-lj.si/sgj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:26.754163+00:00 |
| Science of Remote Sensing | [feed](<https://rss.sciencedirect.com/publication/science/26660172>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:07:55.786393+00:00 |
| SCIENTIA AGRICOLA | [feed](<https://www.scielo.br/journal/sa/feed/>) | access-blocked | 403 |  |  | 2026-10-04T13:01:59.845079+00:00 |
| SCIENTIFIC AMERICAN | [feed](<https://www.scientificamerican.com/platform/syndication/rss/>) | feed-with-entries | 200 | rss | 50 | 2026-10-04T13:00:39.273097+00:00 |
| Scientific Data | [feed](<https://www.nature.com/sdata.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:45.482166+00:00 |
| Scientific Reports | [feed](<https://www.nature.com/srep.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:46.520821+00:00 |
| SCIRES-IT-SCIentific RESearch and Information Technology | [feed](<http://www.sciresit.it//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T13:00:40.005529+00:00 |
| SCRIPTA MATERIALIA | [feed](<https://rss.sciencedirect.com/publication/science/13596462>) | feed-with-entries | 200 | rss | 69 | 2026-10-04T13:07:56.501812+00:00 |
| Scripta Theologica | [feed](<https://revistas.unav.edu/index.php/scripta-theologica/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:38.396782+00:00 |
| SEA TECHNOLOGY | [feed](<https://sea-technology.com/feed>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:58:58.830911+00:00 |
| Secularism & Nonreligion | [feed](<https://account.secularismandnonreligion.org/index.php/up-j-sn/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:29.651655+00:00 |
| SEDIMENTARY GEOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00370738>) | feed-with-entries | 200 | rss | 19 | 2026-10-04T13:07:57.062964+00:00 |
| SEIZURE-EUROPEAN JOURNAL OF EPILEPSY | [feed](<https://rss.sciencedirect.com/publication/science/10591311>) | feed-with-entries | 200 | rss | 60 | 2026-10-04T13:07:57.592165+00:00 |
| Semantics & Pragmatics | [feed](<https://semprag.org/index.php/sp/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:01.121798+00:00 |
| SEMINARS IN ARTHRITIS AND RHEUMATISM | [feed](<https://rss.sciencedirect.com/publication/science/00490172>) | feed-with-entries | 200 | rss | 58 | 2026-10-04T13:07:58.123460+00:00 |
| SEMINARS IN CANCER BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/1044579X>) | feed-with-entries | 200 | rss | 17 | 2026-10-04T13:07:58.490227+00:00 |
| SEMINARS IN CELL & DEVELOPMENTAL BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/10849521>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:07:59.089647+00:00 |
| SEMINARS IN DIAGNOSTIC PATHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/07402570>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:07:59.460699+00:00 |
| SEMINARS IN ONCOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00937754>) | feed-with-entries | 200 | rss | 29 | 2026-10-04T13:07:59.852343+00:00 |
| SEMINARS IN RADIATION ONCOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/10534296>) | feed-with-entries | 200 | rss | 27 | 2026-10-04T13:08:00.213630+00:00 |
| SEMINARS IN ULTRASOUND CT AND MRI | [feed](<https://rss.sciencedirect.com/publication/science/08872171>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:08:00.817663+00:00 |
| Sexual Health | [feed](<https://www.worldsexualhealth.net/blog-feed.xml>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:49.754906+00:00 |
| SHENANDOAH | [feed](<https://www.shenandoahband.com/blog-feed.xml>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:41.620745+00:00 |
| SHILAP-REVISTA DE LEPIDOPTEROLOGIA | [feed](<https://shilap.org/revista/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:59:01.219120+00:00 |
| Signal Transduction and Targeted Therapy | [feed](<https://www.nature.com/sigtrans.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:47.228052+00:00 |
| Skhidnoievropeiskyi Istorychnyi Visnyk-East European Historical Bulletin | [feed](<https://eehb.dspu.edu.ua/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:24.147193+00:00 |
| Slovene-International Journal of Slavic Studies | [feed](<https://slovene.ru/ojs/index.php/slovene/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:59:01.799151+00:00 |
| Slovenska Archeologia | [feed](<https://archeol.sav.sk/index.php/sk/comments/feed/>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:49.473917+00:00 |
| Slovo | [feed](<https://student-journals.ucl.ac.uk/slovo/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:01:10.128374+00:00 |
| Social Inclusion | [feed](<https://www.cogitatiopress.com/socialinclusion/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T13:01:11.122575+00:00 |
| SOCIOLOGISK FORSKNING | [feed](<https://sociologiskforskning.se/sf/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:02.562209+00:00 |
| Solid Earth Sciences | [feed](<https://rss.sciencedirect.com/publication/science/2451912X>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:08:01.399191+00:00 |
| SOLID STATE IONICS | [feed](<https://rss.sciencedirect.com/publication/science/01672738>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:08:01.782813+00:00 |
| SOLID STATE NUCLEAR MAGNETIC RESONANCE | [feed](<https://rss.sciencedirect.com/publication/science/09262040>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:08:02.309230+00:00 |
| SOLID-STATE ELECTRONICS | [feed](<https://rss.sciencedirect.com/publication/science/00381101>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:08:02.694621+00:00 |
| SORT-Statistics and Operations Research Transactions | [feed](<https://upcommons.upc.edu/server/opensearch/search?format=atom&scope=36fcb668-1a8f-4f77-b79a-23bc9f4c4d1a&query=*>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:59:15.583270+00:00 |
| South African Journal of Art History | [feed](<https://sajournalofarthistory.org.za/?feed=rss2>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:58:53.804113+00:00 |
| SOUTH AFRICAN JOURNAL OF BOTANY | [feed](<https://rss.sciencedirect.com/publication/science/02546299>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:03.367047+00:00 |
| South African Journal of Economic and Management Sciences | [feed](<https://sajems.org/index.php/sajems/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 2 | 2026-10-04T12:58:49.149385+00:00 |
| South African Journal of Higher Education | [feed](<https://www.journals.ac.za/index.php/sajhe/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T13:00:06.454971+00:00 |
| South African Journal of Industrial Engineering | [feed](<http://sajie.journals.ac.za/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:58:51.676842+00:00 |
| South African Journal of Information Management | [feed](<https://sajim.co.za/index.php/sajim/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:51.978807+00:00 |
| South African Journal of Libraries and Information Science | [feed](<https://sajlis.journals.ac.za/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:58:52.685303+00:00 |
| South African Journal of Physiotherapy | [feed](<https://sajp.co.za/index.php/sajp/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:54.920265+00:00 |
| South African Journal of Psychiatry | [feed](<https://sajp.org.za/index.php/sajp/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 1 | 2026-10-04T12:58:54.969264+00:00 |
| SOUTH AFRICAN JOURNAL OF SCIENCE | [feed](<https://sajs.co.za/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:58:55.335069+00:00 |
| South East Asian Journal of Management | [feed](<https://scholarhub.ui.ac.id/seam/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:41.273536+00:00 |
| South East European Journal of Economics and Business | [feed](<https://journal.efsa.unsa.ba/index.php/see/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:56:21.506117+00:00 |
| SOUTHEAST ASIAN JOURNAL OF TROPICAL MEDICINE AND PUBLIC HEALTH | [feed](<https://journal.seameotropmednetwork.org/index.php/jtropmed/gateway/plugin/AnnouncementFeedGatewayPlugin/rss>) | feed-with-entries | 200 | rdf | 4 | 2026-10-04T12:56:25.277687+00:00 |
| Southeastern Geographer | [feed](<https://sedaag.org/comments/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:58:59.301016+00:00 |
| Southern African Humanities | [feed](<https://www.sahumanities.org/index.php/sah/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T13:00:34.565787+00:00 |
| Southern African Journal of Anaesthesia and Analgesia | [feed](<https://sajaa.co.za/index.php/sajaa/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:48.725875+00:00 |
| SOUTHERN AFRICAN JOURNAL OF HIV MEDICINE | [feed](<https://sajhivmed.org.za/index.php/hivmed/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:49.670769+00:00 |
| Southern African Journal of Infectious Diseases | [feed](<https://sajid.co.za/index.php/sajid/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:58:50.849244+00:00 |
| Spanish Journal of Soil Science | [feed](<https://www.frontierspartnerships.org/journals/spanish-journal-of-soil-science/rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:23.158507+00:00 |
| Spatial and Spatio-Temporal Epidemiology | [feed](<https://rss.sciencedirect.com/publication/science/18775845>) | feed-with-entries | 200 | rss | 21 | 2026-10-04T13:08:04.028863+00:00 |
| SPECTROCHIMICA ACTA PART A-MOLECULAR AND BIOMOLECULAR SPECTROSCOPY | [feed](<https://rss.sciencedirect.com/publication/science/13861425>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:04.579852+00:00 |
| SPEECH COMMUNICATION | [feed](<https://rss.sciencedirect.com/publication/science/01676393>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:08:05.140622+00:00 |
| SPINAL CORD | [feed](<https://www.nature.com/sc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:49.025068+00:00 |
| Spinal Cord Series and Cases | [feed](<https://www.nature.com/scsandc.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:49.769386+00:00 |
| Spontaneous Generations-Journal for the History and Philosophy of Science | [feed](<https://spontaneousgenerations.library.utoronto.ca/index.php/SpontaneousGenerations/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 20 | 2026-10-04T12:59:03.448502+00:00 |
| Sportis-Scientific Technical Journal of School Sport Physical Education and Psychomotricity | [feed](<https://revistas.udc.gal/index.php/SPORTIS/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:58:21.791044+00:00 |
| Sri Lanka Journal of Social Sciences | [feed](<https://account.sljss.sljol.info/index.php/sljo-j-sljss/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:32.460355+00:00 |
| Sri Lankan Journal of Anaesthesiology | [feed](<https://account.slja.sljol.info/index.php/sljo-j-slja/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:54:30.197821+00:00 |
| SSM-Population Health | [feed](<https://rss.sciencedirect.com/publication/science/23528273>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:08:06.175624+00:00 |
| St Petersburg Mathematical Journal | [feed](<https://www.ams.org/rss/spmj.rss>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:01:22.771869+00:00 |
| Stellenbosch Theological Journal | [feed](<https://ojs.reformedjournals.co.za/index.php/stj/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:57:11.028706+00:00 |
| STEROIDS | [feed](<https://rss.sciencedirect.com/publication/science/0039128X>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:08:07.299322+00:00 |
| Stratum Plus | [feed](<https://www.e-anthropology.com/rss_en.xml>) | feed-with-entries | 200 | rss | 47 | 2026-10-04T12:59:41.757306+00:00 |
| STRUCTURAL SAFETY | [feed](<https://rss.sciencedirect.com/publication/science/01674730>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:08:07.688062+00:00 |
| Structures | [feed](<https://rss.sciencedirect.com/publication/science/23520124>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:08.074498+00:00 |
| Studi e Saggi Linguistici | [feed](<https://www.studiesaggilinguistici.it/index.php/ssl/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 5 | 2026-10-04T13:00:42.221672+00:00 |
| Studi Slavistici | [feed](<https://oaj.fupress.net/index.php/ss/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T13:00:58.289263+00:00 |
| Studia Prawnicze KUL | [feed](<https://czasopisma.kul.pl/index.php/sp/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:25.321922+00:00 |
| Studia Universitatis Babes-Bolyai Mathematica | [feed](<https://www.cs.ubbcluj.ro/journal/studia-mathematica/journal/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:38.946360+00:00 |
| Studia Warminskie | [feed](<https://czasopisma.uwm.edu.pl/index.php/sw/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:55:11.928533+00:00 |
| Studies in Social Justice | [feed](<https://journals.library.brocku.ca/index.php/SSJ/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:56:32.254012+00:00 |
| Superconductivity | [feed](<https://rss.sciencedirect.com/publication/science/27728307>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:08:08.700107+00:00 |
| SURFACE COATINGS INTERNATIONAL | [feed](<https://rss.sciencedirect.com/publication/science/02578972>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:09.260112+00:00 |
| SURFACE SCIENCE REPORTS | [feed](<https://rss.sciencedirect.com/publication/science/01675729>) | feed-with-entries | 200 | rss | 6 | 2026-10-04T13:08:09.627970+00:00 |
| Surfaces and Interfaces | [feed](<https://rss.sciencedirect.com/publication/science/24680230>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:09.995622+00:00 |
| SURGICAL CLINICS OF NORTH AMERICA | [feed](<https://rss.sciencedirect.com/publication/science/00396109>) | feed-with-entries | 200 | rss | 52 | 2026-10-04T13:08:11.354285+00:00 |
| Sustainable Chemistry and Pharmacy | [feed](<https://rss.sciencedirect.com/publication/science/23525541>) | feed-with-entries | 200 | rss | 66 | 2026-10-04T13:08:11.717279+00:00 |
| Sustainable Energy Grids & Networks | [feed](<https://rss.sciencedirect.com/publication/science/23524677>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:12.120935+00:00 |
| SYSTEMATIC AND APPLIED MICROBIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/07232020>) | feed-with-entries | 200 | rss | 23 | 2026-10-04T13:08:12.477361+00:00 |
| SYSTEMS & CONTROL LETTERS | [feed](<https://rss.sciencedirect.com/publication/science/01676911>) | feed-with-entries | 200 | rss | 49 | 2026-10-04T13:08:13.265419+00:00 |
| TALANTA | [feed](<https://rss.sciencedirect.com/publication/science/00399140>) | feed-with-entries | 200 | rss | 59 | 2026-10-04T13:08:13.645838+00:00 |
| Talia Dixit-Revista Interdisciplinar de Retorica e Historiografia | [feed](<https://revista-taliadixit.unex.es/index.php/TD/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:57:53.367731+00:00 |
| Taller de Letras | [feed](<https://tallerdeletras.letras.uc.cl/index.php/TL/gateway/plugin/WebFeedGatewayPlugin/atom>) | access-blocked | 403 |  |  | 2026-10-04T12:59:05.148728+00:00 |
| TD-The Journal for Transdisciplinary Research in Southern Africa | [feed](<https://td-sa.net/index.php/td/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:59:06.676394+00:00 |
| Technoetic Arts | [feed](<https://ta.pubpub.org/rss.xml>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T12:59:05.125148+00:00 |
| TECHNOLOGICAL FORECASTING AND SOCIAL CHANGE | [feed](<https://rss.sciencedirect.com/publication/science/00401625>) | feed-with-entries | 200 | rss | 45 | 2026-10-04T13:08:14.031150+00:00 |
| Tecnologia en Marcha | [feed](<http://www.scielo.sa.cr/rss.php?pid=0379-398220240004&lang=en>) | feed-with-entries | 200 | rss | 14 | 2026-10-04T13:01:30.796107+00:00 |
| Tecnologia y Ciencias del Agua | [feed](<https://www.revistatyca.org.mx/index.php/tyca/gateway/plugin/WebFeedGatewayPlugin/atom>) | http-error | 500 |  |  | 2026-10-04T13:00:32.910797+00:00 |
| TECTONOPHYSICS | [feed](<https://rss.sciencedirect.com/publication/science/00401951>) | feed-with-entries | 200 | rss | 18 | 2026-10-04T13:08:14.526312+00:00 |
| TELECOMMUNICATIONS POLICY | [feed](<https://rss.sciencedirect.com/publication/science/03085961>) | feed-with-entries | 200 | rss | 25 | 2026-10-04T13:08:15.107038+00:00 |
| TERAPEVTICHESKII ARKHIV | [feed](<https://ter-arkhiv.ru/0040-3660/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 10 | 2026-10-04T12:59:07.198198+00:00 |
| Terapia Psicologica | [feed](<http://www.scielo.cl/rss.php?pid=0718-480820250003&lang=en>) | access-blocked | 403 |  |  | 2026-10-04T13:01:46.516882+00:00 |
| Terra Latinoamericana | [feed](<https://www.terralatinoamericana.org.mx/index.php/terra/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 86 | 2026-10-04T13:00:43.458133+00:00 |
| Tethys-Journal of Mediterranean Meteorology & Climatology | [feed](<https://www.tethys.cat/index.php/en/rss.xml>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:00:43.581015+00:00 |
| TETRAHEDRON LETTERS | [feed](<https://rss.sciencedirect.com/publication/science/00404039>) | feed-with-entries | 200 | rss | 56 | 2026-10-04T13:08:15.758377+00:00 |
| Thai Journal of Veterinary Medicine | [feed](<https://digital.car.chula.ac.th/tjvm/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:15.260194+00:00 |
| Thailand Statistician | [feed](<https://ph02.tci-thaijo.org/index.php/thaistat/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:57:35.174912+00:00 |
| THEATER | [feed](<https://www.broadway.com/feeds/buzz/latest>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:59:32.535541+00:00 |
| THEATRE NOTEBOOK | [feed](<https://www.str.org.uk/feed/>) | timeout |  |  |  | 2026-10-04T13:00:41.903243+00:00 |
| Theoretical Economics | [feed](<https://econtheory.org/ojs/rss/article.rss>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T12:55:23.520312+00:00 |
| THEORETICAL POPULATION BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00405809>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:08:16.286679+00:00 |
| Therapeutic Recreation Journal | [feed](<https://js.sagamorepub.com/index.php/trj/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T13:01:17.920418+00:00 |
| Thermal Science and Engineering Progress | [feed](<https://rss.sciencedirect.com/publication/science/24519049>) | feed-with-entries | 200 | rss | 71 | 2026-10-04T13:08:16.857703+00:00 |
| THERMOCHIMICA ACTA | [feed](<https://rss.sciencedirect.com/publication/science/00406031>) | feed-with-entries | 200 | rss | 77 | 2026-10-04T13:08:17.911508+00:00 |
| Thesis Eleven | [feed](<https://thesiseleven.com/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:08.823641+00:00 |
| THIN-WALLED STRUCTURES | [feed](<https://rss.sciencedirect.com/publication/science/02638231>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:18.269098+00:00 |
| Ticks and Tick-Borne Diseases | [feed](<https://rss.sciencedirect.com/publication/science/1877959X>) | feed-with-entries | 200 | rss | 24 | 2026-10-04T13:08:18.962611+00:00 |
| TISSUE & CELL | [feed](<https://rss.sciencedirect.com/publication/science/00408166>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:19.342067+00:00 |
| TOPOLOGY AND ITS APPLICATIONS | [feed](<https://rss.sciencedirect.com/publication/science/01668641>) | feed-with-entries | 200 | rss | 12 | 2026-10-04T13:08:20.044442+00:00 |
| Torre del Virrey-Revista de Estudios Culturales | [feed](<https://revista.latorredelvirrey.es/LTV/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 17 | 2026-10-04T12:57:58.208759+00:00 |
| Tourism & Management Studies | [feed](<https://www.tmstudies.net/index.php/ectms/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T13:00:45.759260+00:00 |
| Tourism Management Perspectives | [feed](<https://rss.sciencedirect.com/publication/science/22119736>) | feed-with-entries | 200 | rss | 42 | 2026-10-04T13:08:20.435987+00:00 |
| TOXICON | [feed](<https://rss.sciencedirect.com/publication/science/00410101>) | feed-with-entries | 200 | rss | 31 | 2026-10-04T13:08:20.802800+00:00 |
| Trans-Form-Acao | [feed](<https://revistas.marilia.unesp.br/index.php/transformacao/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 15 | 2026-10-04T12:58:15.723686+00:00 |
| TRANSACTIONS OF NONFERROUS METALS SOCIETY OF CHINA | [feed](<https://rss.sciencedirect.com/publication/science/10036326>) | feed-with-entries | 200 | rss | 34 | 2026-10-04T13:08:21.158573+00:00 |
| Transactions of the Association for Computational Linguistics | [feed](<https://transacl.org/ojs/index.php/tacl/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:09.613969+00:00 |
| Translational Andrology and Urology | [feed](<https://tau.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 35 | 2026-10-04T12:59:06.511220+00:00 |
| Translational Gastroenterology and Hepatology | [feed](<https://tgh.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 31 | 2026-10-04T12:59:08.298029+00:00 |
| Translational Pediatrics | [feed](<https://tp.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 40 | 2026-10-04T12:59:09.611265+00:00 |
| Translational Psychiatry | [feed](<https://www.nature.com/tp.rss>) | feed-with-entries | 200 | rdf | 8 | 2026-10-04T13:03:51.522323+00:00 |
| Transplantation and Cellular Therapy | [feed](<https://rss.sciencedirect.com/publication/science/26666367>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:21.519317+00:00 |
| TRANSPORTATION RESEARCH PART B-METHODOLOGICAL | [feed](<https://rss.sciencedirect.com/publication/science/01912615>) | feed-with-entries | 200 | rss | 22 | 2026-10-04T13:08:21.969771+00:00 |
| TRANSPORTATION RESEARCH PART E-LOGISTICS AND TRANSPORTATION REVIEW | [feed](<https://rss.sciencedirect.com/publication/science/13665545>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:22.520169+00:00 |
| Transylvanian Review of Administrative Sciences | [feed](<https://www.rtsa.ro/tras/index.php/tras/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 8 | 2026-10-04T13:00:33.851472+00:00 |
| Trauma-England | [feed](<https://www.england.nhs.uk/feed/>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T12:59:45.022076+00:00 |
| Travail Genre et Societes | [feed](<https://www.travail-genre-societes.com/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T13:00:46.087998+00:00 |
| Trees Forests and People | [feed](<https://rss.sciencedirect.com/publication/science/26667193>) | feed-with-entries | 200 | rss | 94 | 2026-10-04T13:08:23.524485+00:00 |
| Trends in Anaesthesia and Critical Care | [feed](<https://rss.sciencedirect.com/publication/science/22108440>) | feed-with-entries | 200 | rss | 10 | 2026-10-04T13:08:24.575316+00:00 |
| TRENDS IN FOOD SCIENCE & TECHNOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/09242244>) | feed-with-entries | 200 | rss | 100 | 2026-10-04T13:08:25.279052+00:00 |
| Trends in Neuroscience and Education | [feed](<https://rss.sciencedirect.com/publication/science/22119493>) | feed-with-entries | 200 | rss | 9 | 2026-10-04T13:08:26.117405+00:00 |
| Tropical Grasslands-Forrajes Tropicales | [feed](<https://www.tropicalgrasslands.info/index.php/tgft/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 4 | 2026-10-04T13:00:46.132370+00:00 |
| Tuberculosis and Respiratory Diseases | [feed](<https://www.e-trd.org/journal/rss/xml/feed.xml>) | feed-with-entries | 200 | rss | 1100 | 2026-10-04T12:59:43.853654+00:00 |
| Tumour Virus Research | [feed](<https://rss.sciencedirect.com/publication/science/26666790>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:08:27.633417+00:00 |
| Tuning Journal for Higher Education | [feed](<https://tuningjournal.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:09.738852+00:00 |
| Turczaninowia | [feed](<https://turczaninowia.asu.ru/gateway/plugin/WebFeedGatewayPlugin/atom>) | timeout | 200 |  |  | 2026-10-04T12:59:10.005585+00:00 |
| Turkish Archives of Pediatrics | [feed](<https://www.turkarchpediatr.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 16 | 2026-10-04T13:00:46.755216+00:00 |
| Turkish Journal of Agriculture and Forestry | [feed](<https://journals.tubitak.gov.tr/agriculture/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:56:38.474554+00:00 |
| TURKISH JOURNAL OF BIOLOGY | [feed](<https://journals.tubitak.gov.tr/biology/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:00:56.813369+00:00 |
| TURKISH JOURNAL OF BOTANY | [feed](<https://journals.tubitak.gov.tr/botany/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:17.195766+00:00 |
| TURKISH JOURNAL OF CHEMISTRY | [feed](<https://journals.tubitak.gov.tr/chem/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:26.728641+00:00 |
| TURKISH JOURNAL OF EARTH SCIENCES | [feed](<https://journals.tubitak.gov.tr/earth/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:33.329682+00:00 |
| Turkish Journal of Electrical Engineering and Computer Sciences | [feed](<https://journals.tubitak.gov.tr/elektrik/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:37.723875+00:00 |
| Turkish Journal of Gastroenterology | [feed](<https://turkjgastroenterol.org/index.php/tjg/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:59:11.308331+00:00 |
| Turkish Journal of Mathematics | [feed](<https://journals.tubitak.gov.tr/math/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:40.626900+00:00 |
| Turkish Journal Of Medical Sciences | [feed](<https://journals.tubitak.gov.tr/medical/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:42.344442+00:00 |
| Turkish Journal of Nephrology | [feed](<https://turkjnephrol.org/index.php/pub/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T12:59:11.342512+00:00 |
| TURKISH JOURNAL OF PEDIATRICS | [feed](<https://turkjpediatr.org/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:59:12.505294+00:00 |
| Turkish Journal of Physics | [feed](<https://journals.tubitak.gov.tr/physics/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:43.803358+00:00 |
| TURKISH JOURNAL OF VETERINARY & ANIMAL SCIENCES | [feed](<https://journals.tubitak.gov.tr/veterinary/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:45.040402+00:00 |
| TURKISH JOURNAL OF ZOOLOGY | [feed](<https://journals.tubitak.gov.tr/zoology/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:46.672346+00:00 |
| Tydskrif vir letterkunde | [feed](<https://letterkunde.africa/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:52.005153+00:00 |
| Tzintzun-Revista de Estudios Historicos | [feed](<https://www.tzintzun.umich.mx/TZN/es/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 27 | 2026-10-04T13:00:46.924109+00:00 |
| Ukrainian Metrological Journal | [feed](<http://umj.metrology.kharkov.ua/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 9 | 2026-10-04T12:59:13.304972+00:00 |
| ULTRASONICS | [feed](<https://rss.sciencedirect.com/publication/science/0041624X>) | feed-with-entries | 200 | rss | 68 | 2026-10-04T13:08:28.262867+00:00 |
| ULTRASONICS SONOCHEMISTRY | [feed](<https://rss.sciencedirect.com/publication/science/13504177>) | feed-with-entries | 200 | rss | 87 | 2026-10-04T13:08:28.924035+00:00 |
| ULTRASOUND IN MEDICINE AND BIOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/03015629>) | feed-with-entries | 200 | rss | 86 | 2026-10-04T13:08:29.583937+00:00 |
| Universa Medicina | [feed](<https://univmed.org/ejurnal/index.php/medicina/gateway/plugin/WebFeedGatewayPlugin/atom>) | tls-or-network-error |  |  |  | 2026-10-04T12:59:14.857402+00:00 |
| Universitas-Revista de Ciencias Sociales y Humanas | [feed](<http://scielo.senescyt.gob.ec/rss.php?pid=1390-863420250002&lang=es>) | http-error | 502 |  |  | 2026-10-04T13:01:29.713551+00:00 |
| University of Bologna Law Review | [feed](<https://bolognalawreview.unibo.it/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 3 | 2026-10-04T12:54:57.441131+00:00 |
| University of Toronto Medical Journal | [feed](<https://jps.library.utoronto.ca/index.php/utmj/gateway/plugin/WebFeedGatewayPlugin/atom>) | empty-feed | 200 | atom | 0 | 2026-10-04T13:01:17.891372+00:00 |
| URBAN MORPHOLOGY | [feed](<https://journal.urbanform.org/index.php/jum/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:56:26.190067+00:00 |
| UROLOGIC ONCOLOGY-SEMINARS AND ORIGINAL INVESTIGATIONS | [feed](<https://rss.sciencedirect.com/publication/science/10781439>) | feed-with-entries | 200 | rss | 80 | 2026-10-04T13:08:30.195588+00:00 |
| Utilities Policy | [feed](<https://rss.sciencedirect.com/publication/science/09571787>) | feed-with-entries | 200 | rss | 46 | 2026-10-04T13:08:30.958647+00:00 |
| Vascular Health and Risk Management | [feed](<https://www.dovepress.com/feed/journal/2>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:01:59.067876+00:00 |
| Vegueta-Anuario de la Facultad de Geografia e Historia | [feed](<https://revistavegueta.ulpgc.es/ojs/index.php/revistavegueta/gateway/plugin/WebFeedGatewayPlugin/atom>) | not-feed-xml | 200 |  |  | 2026-10-04T12:58:38.781045+00:00 |
| Vehicular Communications | [feed](<https://rss.sciencedirect.com/publication/science/22142096>) | feed-with-entries | 200 | rss | 32 | 2026-10-04T13:08:31.332079+00:00 |
| Veredas-Revista da Associacao Internacional de Lusitanistas | [feed](<https://revistaveredas.org/index.php/ver/gateway/plugin/AnnouncementFeedGatewayPlugin/rss2>) | feed-with-entries | 200 | rss | 4 | 2026-10-04T12:58:39.798523+00:00 |
| Vestnik Mezhdunarodnykh Organizatsii-International Organisations Research Journal | [feed](<https://iorj.hse.ru/en/rss>) | html-or-disallowed-doctype | 200 |  |  | 2026-10-04T12:56:08.751754+00:00 |
| Vestnik Sankt-Peterburgskogo Universiteta Seriya 10 Prikladnaya Matematika Informatika Protsessy Upravleniya | [feed](<https://www.mathnet.ru/rss/rssLastIssue.phtml?jrnid=vspui&option_lang=eng>) | feed-with-entries | 200 | rss | 13 | 2026-10-04T13:01:13.175895+00:00 |
| VETERINARY CLINICS OF NORTH AMERICA-FOOD ANIMAL PRACTICE | [feed](<https://rss.sciencedirect.com/publication/science/07490720>) | feed-with-entries | 200 | rss | 36 | 2026-10-04T13:08:31.990522+00:00 |
| VETERINARY IMMUNOLOGY AND IMMUNOPATHOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/01652427>) | feed-with-entries | 200 | rss | 33 | 2026-10-04T13:08:32.652833+00:00 |
| Veterinary Medicine-Research and Reports | [feed](<https://www.dovepress.com/feed/journal/108>) | feed-with-entries | 200 | rss | 30 | 2026-10-04T13:02:00.354108+00:00 |
| VETERINARY PARASITOLOGY | [feed](<https://rss.sciencedirect.com/publication/science/03044017>) | feed-with-entries | 200 | rss | 75 | 2026-10-04T13:08:33.201334+00:00 |
| Video-Assisted Thoracic Surgery | [feed](<https://vats.amegroups.org//gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:59:15.642218+00:00 |
| Vietnam Journal of Earth Sciences | [feed](<http://vjs.ac.vn/jse/gateway/plugin/AnnouncementFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 12 | 2026-10-04T12:59:16.117953+00:00 |
| Vinculos de Historia | [feed](<http://vinculosdehistoria.com/index.php/vinculos/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 41 | 2026-10-04T12:59:15.876360+00:00 |
| Virajes-Revista de Antropologia y Sociologia | [feed](<https://revistasojs.ucaldas.edu.co/index.php/virajes/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T13:01:21.455239+00:00 |
| VIREF-Revista de Educacion Fisica | [feed](<https://revistas.udea.edu.co/index.php/viref/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:19.956817+00:00 |
| VIROLOGY | [feed](<https://rss.sciencedirect.com/publication/science/00426822>) | feed-with-entries | 200 | rss | 55 | 2026-10-04T13:08:34.343180+00:00 |
| VISION RESEARCH | [feed](<https://rss.sciencedirect.com/publication/science/00426989>) | feed-with-entries | 200 | rss | 16 | 2026-10-04T13:08:35.216724+00:00 |
| Visnyk NTUU KPI Seriia-Radiotekhnika Radioaparatobuduvannia | [feed](<https://radap.kpi.ua/radiotechnique/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 6 | 2026-10-04T12:57:46.321311+00:00 |
| VISUAL COMPUTER | [feed](<https://rss.sciencedirect.com/publication/science/00104485>) | feed-with-entries | 200 | rss | 15 | 2026-10-04T13:08:36.038327+00:00 |
| Visual Informatics | [feed](<https://rss.sciencedirect.com/publication/science/2468502X>) | feed-with-entries | 200 | rss | 37 | 2026-10-04T13:08:36.451036+00:00 |
| Vox Patrum | [feed](<https://czasopisma.kul.pl/index.php/vp/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T13:01:31.023747+00:00 |
| Wacana-Jurnal Ilmu Pengetahuan Budaya-Journal of the Humanities of Indonesia | [feed](<https://scholarhub.ui.ac.id/wacana/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T13:01:42.578937+00:00 |
| Washington International Law Journal | [feed](<https://digitalcommons.law.uw.edu/wilj/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:55:16.142593+00:00 |
| Water Research X | [feed](<https://rss.sciencedirect.com/publication/science/25899147>) | feed-with-entries | 200 | rss | 67 | 2026-10-04T13:08:36.867267+00:00 |
| WATER SA | [feed](<https://watersa.net/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:16.602493+00:00 |
| WELSH HISTORY REVIEW | [feed](<https://api.ingentaconnect.com/content/uwp/whis/latest?format=rss>) | access-blocked | 403 |  |  | 2026-10-04T13:01:40.396021+00:00 |
| WESTERN NORTH AMERICAN NATURALIST | [feed](<https://scholarsarchive.byu.edu/wnan/recent.rss>) | feed-with-entries | 200 | rss | 20 | 2026-10-04T12:58:56.279866+00:00 |
| Wilson Journal of Ornithology | [feed](<https://wilsonsociety.org/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T12:59:17.632589+00:00 |
| WOOD AND FIBER SCIENCE | [feed](<https://wfs.swst.org/index.php/wfs/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:59:17.288603+00:00 |
| Workplace-A Journal for Academic Labor | [feed](<https://ices.library.ubc.ca/index.php/workplace/gateway/plugin/WebFeedGatewayPlugin/atom>) | network-or-safety-error |  |  |  | 2026-10-04T12:55:55.826876+00:00 |
| World of Music-New Series | [feed](<https://wom-journal.org/wom/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 7 | 2026-10-04T12:59:18.165670+00:00 |
| World Review of Political Economy | [feed](<https://wrpe.org.uk/feed/>) | feed-with-entries | 200 | rss | 3 | 2026-10-04T12:59:18.369977+00:00 |
| Zaporozhye Medical Journal | [feed](<https://zmj.zsmu.edu.ua/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 13 | 2026-10-04T13:00:50.389878+00:00 |
| Zbornik Matice Srpske za Likovne Umetnosti-Matica Srpska Journal for Fine Arts | [feed](<https://www.maticasrpska.org.rs/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T13:00:12.842183+00:00 |
| Zbornik Matice Srpske za Slavistiku-Matica Srpska Journal of Slavic Studies | [feed](<https://www.maticasrpska.org.rs/en/comments/feed/>) | feed-with-entries | 200 | rss | 5 | 2026-10-04T13:01:13.266274+00:00 |
| ZEITSCHRIFT FUR ETHNOLOGIE - Journal of Social and Cultural Anthropology | [feed](<https://zfejsca.org/ojs/index.php/jsca/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 21 | 2026-10-04T13:00:50.128071+00:00 |
| Zeitschrift fur Katalanistik | [feed](<https://ojs.ub.rub.de/index.php/ZfK/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 30 | 2026-10-04T12:57:14.386993+00:00 |
| Zhurnal Frontirnykh Issledovanii-Journal of Frontier Studies | [feed](<https://jfs.today/index.php/jfs/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T12:56:15.098680+00:00 |
| Zootaxa | [feed](<https://www.mapress.com/zt/gateway/plugin/WebFeedGatewayPlugin/atom>) | feed-with-entries | 200 | atom | 11 | 2026-10-04T13:01:23.213067+00:00 |
