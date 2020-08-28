const countryData = [
  { name: '不限', simpleName: '不限' },
  {
    simpleName: "AD",
    data_pinyin: "andaoer",
    src: "https://v8.hiwe100.com/image/AD_376.gif",
    name: 'AD 安道尔 Andorra',
  },

  {
    simpleName: "AR",
    data_pinyin: "agenting",
    src: "https://v8.hiwe100.com/image/AR_54.gif",
    name: 'AR 阿根廷 Argentina',
  },

  {
    simpleName: "AU",
    data_pinyin: "aodaliya",
    src: "https://v8.hiwe100.com/image/AU_61.gif",
    name: 'AU 澳大利亚 Australia',
  },

  {
    simpleName: "AT",
    data_pinyin: "aodili",
    src: "https://v8.hiwe100.com/image/AT_43.gif",
    name: 'AT 奥地利 Austria',
  },

  {
    simpleName: "BH",
    data_pinyin: "balin",
    src: "https://v8.hiwe100.com/image/BH_973.gif",
    name: 'BH 巴林 Bahrain',
  },

  {
    simpleName: "BE",
    data_pinyin: "bilishi",
    src: "https://v8.hiwe100.com/image/BE_32.gif",
    name: 'BE 比利时 Belgium',
  },

  {
    simpleName: "BO",
    data_pinyin: "boliweiya",
    src: "https://v8.hiwe100.com/image/BO_591.gif",
    name: 'BO 玻利维亚 Bolivia',
  },

  {
    simpleName: "BR",
    data_pinyin: "baxi",
    src: "https://v8.hiwe100.com/image/BR_55.gif",
    name: 'BR 巴西 Brazil',
  },

  {
    simpleName: "BG",
    data_pinyin: "baojialiya",
    src: "https://v8.hiwe100.com/image/BG_359.gif",
    name: 'BG 保加利亚 Bulgaria',
  },

  {
    simpleName: "KH",
    data_pinyin: "jianpuzhai",
    src: "https://v8.hiwe100.com/image/KH_855.gif",
    name: 'KH 柬埔寨 Cambodia',
  },

  {
    simpleName: "CA",
    data_pinyin: "jianada",
    src: "https://v8.hiwe100.com/image/CA_1.gif",
    name: 'CA 加拿大 Canada',
  },

  {
    simpleName: "CL",
    data_pinyin: "zhili",
    src: "https://v8.hiwe100.com/image/CL_56.gif",
    name: 'CL 智利 Chile',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "CO",
    data_pinyin: "gelunbiya",
    src: "https://v8.hiwe100.com/image/CO_57.gif",
    name: 'CO 哥伦比亚 Colombia',
  },

  {
    simpleName: "HR",
    data_pinyin: "keluodiya",
    src: "https://v8.hiwe100.com/image/HR_385.gif",
    name: 'HR 克罗地亚 Croatia',
  },

  {
    simpleName: "CZ",
    data_pinyin: "jiekegongheguo",
    src: "https://v8.hiwe100.com/image/CZ_420.gif",
    name: 'CZ 捷克共和国 Czech',
  },

  {
    simpleName: "DK",
    data_pinyin: "danmai",
    src: "https://v8.hiwe100.com/image/DK_45.gif",
    name: 'DK 丹麦 Denmark',
  },

  {
    simpleName: "EC",
    data_pinyin: "eguaduoer",
    src: "https://v8.hiwe100.com/image/EC_593.gif",
    name: 'EC 厄瓜多尔 Ecuador',
  },

  {
    simpleName: "EE",
    data_pinyin: "aishaniya",
    src: "https://v8.hiwe100.com/image/EE_372.gif",
    name: 'EE 爱沙尼亚 Estonia',
  },

  {
    simpleName: "FI",
    data_pinyin: "fenlan",
    src: "https://v8.hiwe100.com/image/FI_358.gif",
    name: 'FI 芬兰 Finland',
  },

  {
    simpleName: "FR",
    data_pinyin: "faguo",
    src: "https://v8.hiwe100.com/image/FR_33.gif",
    name: 'FR 法国 France',
  },

  {
    simpleName: "GF",
    data_pinyin: "fashuguiyana",
    src: "https://v8.hiwe100.com/image/GF_594.gif",
    name: 'GF 法属圭亚那 French',
  },

  {
    simpleName: "DE",
    data_pinyin: "deguo",
    src: "https://v8.hiwe100.com/image/DE_49.gif",
    name: 'DE 德国 Germany',
  },

  {
    simpleName: "GR",
    data_pinyin: "xila",
    src: "https://v8.hiwe100.com/image/GR_30.gif",
    name: 'GR 希腊 Greece',
  },

  {
    simpleName: "GY",
    data_pinyin: "guiyana",
    src: "https://v8.hiwe100.com/image/GY_592.gif",
    name: 'GY 圭亚那 Guyana',
  },

  {
    simpleName: "HK",
    data_pinyin: "xianggang",
    src: "https://v8.hiwe100.com/image/HK_852.gif",
    name: 'HK 中国香港 Hong',
  },

  {
    simpleName: "HU",
    data_pinyin: "xiongyali",
    src: "https://v8.hiwe100.com/image/HU_36.gif",
    name: 'HU 匈牙利 Hungary',
  },

  {
    simpleName: "IN",
    data_pinyin: "yindu",
    src: "https://v8.hiwe100.com/image/IN_91.gif",
    name: 'IN 印度 India',
  },

  {
    simpleName: "ID",
    data_pinyin: "yindunixiya",
    src: "https://v8.hiwe100.com/image/ID_62.gif",
    name: 'ID 印尼 Indonesia',
  },

  {
    simpleName: "IE",
    data_pinyin: "aierlan",
    src: "https://v8.hiwe100.com/image/IE_353.gif",
    name: 'IE 爱尔兰 Ireland',
  },

  {
    simpleName: "IT",
    data_pinyin: "yidali",
    src: "https://v8.hiwe100.com/image/IT_39.gif",
    name: 'IT 意大利 Italy',
  },

  {
    simpleName: "JP",
    data_pinyin: "riben",
    src: "https://v8.hiwe100.com/image/JP_81.gif",
    name: 'JP 日本 Japan',
  },

  {
    simpleName: "KR",
    data_pinyin: "hanguo",
    src: "https://v8.hiwe100.com/image/KR_82.gif",
    name: 'KR 韩国 Korea',
  },

  {
    simpleName: "LV",
    data_pinyin: "latuoweiya",
    src: "https://v8.hiwe100.com/image/LV_371.gif",
    name: 'LV 拉脱维亚 Latvia',
  },

  {
    simpleName: "LT",
    data_pinyin: "litaowan",
    src: "https://v8.hiwe100.com/image/LT_370.gif",
    name: 'LT 立陶宛 Lithuania',
  },

  {
    simpleName: "LU",
    data_pinyin: "lusenbao",
    src: "https://v8.hiwe100.com/image/LU_352.gif",
    name: 'LU 卢森堡 Luxembourg',
  },

  {
    simpleName: "MY",
    data_pinyin: "malaixiya",
    src: "https://v8.hiwe100.com/image/MY_60.gif",
    name: 'MY 马来西亚 Malaysia',
  },

  {
    simpleName: "MX",
    data_pinyin: "moxige",
    src: "https://v8.hiwe100.com/image/MX_52.gif",
    name: 'MX 墨西哥 Mexico',
  },

  {
    simpleName: "MC",
    data_pinyin: "monage",
    src: "https://v8.hiwe100.com/image/MC_377.gif",
    name: 'MC 摩纳哥 Monaco',
  },

  {
    simpleName: "NP",
    data_pinyin: "niboer",
    src: "https://v8.hiwe100.com/image/NP_977.gif",
    name: 'NP 尼泊尔 Nepal',
  },

  {
    simpleName: "NL",
    data_pinyin: "helan",
    src: "https://v8.hiwe100.com/image/NL_31.gif",
    name: 'NL 荷兰 Netherlands',
  },

  {
    simpleName: "NZ",
    data_pinyin: "xinxilan",
    src: "https://v8.hiwe100.com/image/NZ_64.gif",
    name: 'NZ 新西兰 New',
  },

  {
    simpleName: "PH",
    data_pinyin: "feilvbin",
    src: "https://v8.hiwe100.com/image/PH_63.gif",
    name: 'PH 菲律宾 Philippines',
  },

  {
    simpleName: "PL",
    data_pinyin: "bolan",
    src: "https://v8.hiwe100.com/image/PL_48.gif",
    name: 'PL 波兰 Poland',
  },

  {
    simpleName: "PT",
    data_pinyin: "putaoya",
    src: "https://v8.hiwe100.com/image/PT_351.gif",
    name: 'PT 葡萄牙 Portugal',
  },

  {
    simpleName: "PR",
    data_pinyin: "boduolige",
    src: "https://v8.hiwe100.com/image/PR_1787.gif",
    name: 'PR 波多黎各 Puerto',
  },

  {
    simpleName: "RO",
    data_pinyin: "luomaniya",
    src: "https://v8.hiwe100.com/image/RO_40.gif",
    name: 'RO 罗马尼亚 Romania',
  },

  {
    simpleName: "SA",
    data_pinyin: "shatealabo",
    src: "https://v8.hiwe100.com/image/SA_966.gif",
    name: 'SA 沙特阿拉伯 Saudi',
  },

  {
    simpleName: "SG",
    data_pinyin: "xinjiapo",
    src: "https://v8.hiwe100.com/image/SG_65.gif",
    name: 'SG 新加坡 Singapore',
  },

  {
    simpleName: "SK",
    data_pinyin: "siluofake",
    src: "https://v8.hiwe100.com/image/SK_421.gif",
    name: 'SK 斯洛伐克 Slovakia',
  },

  {
    simpleName: "SI",
    data_pinyin: "siluowenniya",
    src: "https://v8.hiwe100.com/image/SI_386.gif",
    name: 'SI 斯洛文尼亚 Slovenia',
  },

  {
    simpleName: "ZA",
    data_pinyin: "nanfei",
    src: "https://v8.hiwe100.com/image/ZA_27.gif",
    name: 'ZA 南非 South',
  },

  {
    simpleName: "ES",
    data_pinyin: "xibanya",
    src: "https://v8.hiwe100.com/image/ES_34.gif",
    name: 'ES 西班牙 Spain',
  },

  {
    simpleName: "SE",
    data_pinyin: "ruidian",
    src: "https://v8.hiwe100.com/image/SE_46.gif",
    name: 'SE 瑞典 Sweden',
  },

  {
    simpleName: "TW",
    data_pinyin: "taiwan",
    src: "https://v8.hiwe100.com/image/TW_886.gif",
    name: 'TW 中国台湾 Taiwan',
  },

  {
    simpleName: "TH",
    data_pinyin: "taiguo",
    src: "https://v8.hiwe100.com/image/TH_66.gif",
    name: 'TH 泰国 Thailand',
  },

  {
    simpleName: "AE",
    data_pinyin: "alabolianheqiuchangguo",
    src: "https://v8.hiwe100.com/image/AE_971.gif",
    name: 'AE 阿拉伯联合酋长国 United',
  },

  {
    simpleName: "GB",
    data_pinyin: "yingguo",
    src: "https://v8.hiwe100.com/image/GB_44.gif",
    name: 'GB 英国 United',
  },

  {
    simpleName: "US",
    data_pinyin: "meiguo",
    src: "https://v8.hiwe100.com/image/US_1.gif",
    name: 'US 美国 United',
  },

  {
    simpleName: "VE",
    data_pinyin: "weineiruila",
    src: "https://v8.hiwe100.com/image/VE_58.gif",
    name: 'VE 委内瑞拉 Venezuela',
  },

  {
    simpleName: "VN",
    data_pinyin: "yuenan",
    src: "https://v8.hiwe100.com/image/VN_84.gif",
    name: 'VN 越南 Viet',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "FR",
    data_pinyin: "faguo",
    src: "https://v8.hiwe100.com/image/FR_33.gif",
    name: 'FR 法国 France',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "DE",
    data_pinyin: "deguo",
    src: "https://v8.hiwe100.com/image/DE_49.gif",
    name: 'DE 德国 Germany',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "GB",
    data_pinyin: "yingguo",
    src: "https://v8.hiwe100.com/image/GB_44.gif",
    name: 'GB 英国 United',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "FR",
    data_pinyin: "faguo",
    src: "https://v8.hiwe100.com/image/FR_33.gif",
    name: 'FR 法国 France',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "IT",
    data_pinyin: "yidali",
    src: "https://v8.hiwe100.com/image/IT_39.gif",
    name: 'IT 意大利 Italy',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "ES",
    data_pinyin: "xibanya",
    src: "https://v8.hiwe100.com/image/ES_34.gif",
    name: 'ES 西班牙 Spain',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "AD",
    data_pinyin: "andaoer",
    src: "https://v8.hiwe100.com/image/AD_376.gif",
    name: 'AD 安道尔 Andorra',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "DE",
    data_pinyin: "deguo",
    src: "https://v8.hiwe100.com/image/DE_49.gif",
    name: 'DE 德国 Germany',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "GB",
    data_pinyin: "yingguo",
    src: "https://v8.hiwe100.com/image/GB_44.gif",
    name: 'GB 英国 United',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "FR",
    data_pinyin: "faguo",
    src: "https://v8.hiwe100.com/image/FR_33.gif",
    name: 'FR 法国 France',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "IT",
    data_pinyin: "yidali",
    src: "https://v8.hiwe100.com/image/IT_39.gif",
    name: 'IT 意大利 Italy',
  },

  {
    simpleName: "CN",
    data_pinyin: "zhongguo",
    src: "https://v8.hiwe100.com/image/CN_86.gif",
    name: 'CN 中国 China',
  },

  {
    simpleName: "ES",
    data_pinyin: "xibanya",
    src: "https://v8.hiwe100.com/image/ES_34.gif",
    name: 'ES 西班牙 Spain',
  },

  {
    simpleName: "US",
    data_pinyin: "meiguo",
    src: "https://v8.hiwe100.com/image/US_1.gif",
    name: 'US 美国 United',
  },
]

export default countryData
