const regionCodes = {
  北京: ["010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "818", "196", "888"],
  天津: ["022", "122", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "804", "072", "175", "332", "330"],
  滨海: ["260", "150"],
  呼和浩特: ["471", "815", "300", "429"],
  石家庄: ["311", "155", "340", "341"],
  包头: ["472", "132", "301"],
  太原: ["351", "811", "057", "361", "362"],
  鄂尔多斯: ["477", "133", "302"],
  晋城: ["356"],
  呼伦贝尔: ["470", "269"],
  朔州: ["349"],
  沈阳: ["024", "124", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "806"],
  大连: ["411", "813", "420", "033", "066", "418"],
  锦州: ["416"],
  盘锦: ["427", "834", "428"],
  鞍山: ["412", "389"],
  长春: ["431", "131", "973", "975"],
  丹东: ["415", "833"],
  通化: ["435"],
  营口: ["417", "144"],
  哈尔滨: ["451", "814", "457", "067", "331", "450", "456"],
  上海: ["021", "121", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "828", "001", "002", "052", "061", "074", "177", "183", "261", "262", "263", "322"],
  南京: ["025", "125", "250", "251", "252", "253", "254", "255", "256", "257", "258", "259", "807", "064", "339"],
  无锡: ["510", "835", "524", "529"],
  江阴: ["511", "836"],
  南通: ["513", "837", "430"],
  宜兴: ["610", "134"],
  扬州: ["514", "839", "073"],
  徐州: ["516", "065"],
  江都: ["613", "135"],
  常州: ["519", "840", "034"],
  镇江: ["509", "145"],
  苏州: ["512", "816", "521", "071", "522", "527", "580"],
  杭州: ["571", "586", "587", "588", "589", "590", "821", "041", "343", "612", "614", "621"],
  宁波: ["574", "822", "083", "578", "581", "897"],
  温州: ["577", "846", "191", "436", "863"],
  泰州: ["523"],
  瑞安: ["585", "848", "192"],
  合肥: ["551", "820", "549", "092", "547"],
  嘉兴: ["573", "843", "624"],
  安庆: ["556"],
  湖州: ["572", "130"],
  芜湖: ["553", "854", "053"],
  绍兴: ["575", "844", "563"],
  淮南: ["554"],
  金华: ["579", "847", "055"],
  马鞍山: ["555"],
  衢州: ["570", "855"],
  淮北: ["561"],
  台州: ["576", "845", "054"],
  福州: ["591", "600", "601", "602", "603", "604", "823", "199", "593", "605"],
  厦门: ["592", "824", "181", "599", "623", "862", "864"],
  莆田: ["594", "264"],
  长沙: ["731", "721", "801", "058", "740", "741"],
  泉州: ["595", "849", "194", "607"],
  株洲: ["733", "136"],
  漳州: ["596", "188"],
  湘潭: ["732", "852", "737"],
  龙岩: ["597", "265"],
  衡阳: ["734", "146"],
  南昌: ["790", "791", "827", "037", "059", "338", "794"],
  娄底: ["738"],
  九江: ["792", "138"],
  淄博: ["533", "142", "422"],
  赣州: ["797", "156", "038"],
  上饶: ["793"],
  烟台: ["535", "841", "540", "542"],
  济南: ["531", "541", "817", "035", "056", "530", "545"],
  潍坊: ["536", "842", "189", "544"],
  聊城: ["635"],
  济宁: ["537", "423"],
  青岛: ["532", "582", "819", "051", "185", "565", "566"],
  威海: ["631", "141", "632"],
  日照: ["633", "853", "190"],
  临沂: ["539", "176"],
  洛阳: ["379", "147", "076"],
  滨州: ["543", "077"],
  安阳: ["372"],
  郑州: ["371", "380", "812", "032", "062", "334", "378", "381"],
  武汉: ["027", "127", "270", "271", "272", "273", "274", "275", "276", "277", "278", "279", "802", "337"],
  黄石: ["714", "850"],
  十堰: ["719"],
  孝感: ["712"],
  宜昌: ["717", "851", "079"],
  黄冈: ["713"],
  襄阳: ["710", "424"],
  广州: ["020", "120", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "838", "043", "069", "091", "182"],
  总行: ["000", "007", "088", "111", "688", "700", "880", "988", "998", "803"],
  深圳: ["655", "755", "780", "781", "782", "783", "784", "785", "786", "787", "788", "789", "808", "003", "004", "005", "050", "063", "070", "180", "525", "657", "778", "865", "866", "867"],
  珠海: ["656", "153", "658"],
  惠州: ["752", "036"],
  江门: ["750", "157"],
  佛山: ["757", "825", "042", "425", "761"],
  湛江: ["759", "306"],
  中山: ["760", "149", "039"],
  清远: ["307", "763"],
  东莞: ["767", "769", "826", "093", "186", "764", "765", "766"],
  南宁: ["771", "137", "080", "774"],
  柳州: ["772", "158", "957"],
  重庆: ["023", "123", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "805", "184", "528"],
  成都: ["028", "128", "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", "809", "336"],
  泸州: ["861"],
  绵阳: ["857", "140", "060"],
  昆明: ["871", "829", "075", "089", "875", "876", "877"],
  乐山: ["859", "151", "335"],
  曲靖: ["874", "856"],
  贵阳: ["890", "154", "031", "304", "921"],
  丽江: ["388", "148"],
  遵义: ["893", "303"],
  红河: ["873", "152"],
  宝鸡: ["918"],
  西安: ["029", "129", "290", "291", "292", "293", "294", "295", "296", "297", "298", "299", "810", "342"],
  咸阳: ["929", "139"],
  榆林: ["912", "143", "922"],
  三明: ["266", "598"],
  抚顺: ["413"],
  兰州: ["931", "830", "081", "932", "933"],
  六盘水: ["305", "858"],
  连云港: ["421", "518"],
  西宁: ["972", "268", "974"],
  景德镇: ["798"],
  吉林: ["432"],
  银川: ["951", "159", "178", "193", "956"],
  三亚: ["899"],
  大庆: ["459"],
  乌鲁木齐: ["991", "832", "195", "622", "992"],
  宁德: ["308", "709"],
  盐城: ["515"],
  海口: ["898", "333", "426"],
  廊坊: ["316"],
  昆山: ["526"],
  香港: ["971", "831", "860"],
  吕梁: ["358"],
  六安: ["564"],
  唐山: ["315", "267"],
  许昌: ["374"],
  舟山: ["569", "583"],
  雄安: ["112", "999"],
  南阳: ["377"],
  荆州: ["718"],
  石河子: ["197", "993"]
};
