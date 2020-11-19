// scope.js – 專案涉及條文邏輯通通在這裡。
// 日期皆為新條文公布日。
// 早於民國 94 年刑法修正的日期不列入條件。

const PENAL_CODE_AMENDMENT_DATE = new Date("2019-05-29T00:00:00+08:00");

const crimes = [
  {
    value: 1, text: "§271(1) 殺人罪",
    category: "殺人", kind: "普通殺人", stage: "accomplished"
  },
  {
    value: 2, text: "§271(2),(1) 殺人未遂罪",
    category: "殺人", kind: "普通殺人", stage: "attempted"
  },
  {
    value: 3, text: "§271(3) 預備殺人罪",
    category: "殺人", kind: "普通殺人", stage: "preparatory"
  },
  {
    value: 4, text: "§272(1) 殺害直系血親尊親屬罪",
    category: "殺人", kind: "殺害直系血親尊親屬", stage: "accomplished", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 27, text: "§272,§271(1) 殺害直系血親尊親屬罪",
    category: "殺人", kind: "殺害直系血親尊親屬", stage: "accomplished", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 5, text: "§272(2),(1) 殺害直系血親尊親屬未遂罪",
    category: "殺人", kind: "殺害直系血親尊親屬", stage: "attempted", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 28, text: "§272,§271(2),(1) 殺害直系血親尊親屬未遂罪",
    category: "殺人", kind: "殺害直系血親尊親屬", stage: "attempted", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 6, text: "§272(3) 預備殺害直系血親尊親屬罪",
    category: "殺人", kind: "殺害直系血親尊親屬", stage: "preparatory", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 29, text: "§272,§271(3) 預備殺害直系血親尊親屬罪",
    category: "殺人", kind: "殺害直系血親尊親屬", stage: "preparatory", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 7, text: "§273(1) 義憤殺人罪",
    category: "殺人", kind: "義憤殺人", stage: "accomplished"
  },
  {
    value: 8, text: "§273(2),(1) 義憤殺人未遂罪",
    category: "殺人", kind: "義憤殺人", stage: "attempted"
  },
  {
    value: 9, text: "§274(1) 母殺嬰兒罪",
    category: "殺人", kind: "母殺嬰兒", stage: "accomplished"
  },
  {
    value: 10, text: "§274(2),(1) 母殺嬰兒未遂罪",
    category: "殺人", kind: "母殺嬰兒", stage: "attempted"
  },
  {
    value: 11, text: "§275(1) 加工自殺罪",
    category: "殺人", kind: "加工自殺", stage: "accomplished"
  },
  {
    value: 12, text: "§275(2) 加工自殺未遂罪",
    category: "殺人", kind: "加工自殺", stage: "attempted", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 12, text: "§275(3),(1) 加工自殺未遂罪",
    category: "殺人", kind: "加工自殺", stage: "attempted", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 21, text: "§275(4),§275(1) 謀為同死，加工自殺罪",
    category: "殺人", kind: "加工自殺", stage: "accomplished", variant: "謀為同死", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 21, text: "§275(3) 謀為同死，加工自殺罪",
    category: "殺人", kind: "加工自殺", stage: "accomplished", variant: "謀為同死", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 22, text: "§275(1) 教唆或幫助自殺罪",
    category: "殺人", kind: "教唆幫助自殺", stage: "accomplished", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 25, text: "§275(2) 教唆或幫助自殺罪",
    category: "殺人", kind: "教唆幫助自殺", stage: "accomplished", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 24, text: "§275(2),(1) 教唆或幫助自殺未遂罪",
    category: "殺人", kind: "教唆幫助自殺", stage: "attempted", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 23, text: "§275(3),§275(1) 謀為同死，教唆或幫助自殺罪",
    category: "殺人", kind: "教唆幫助自殺", stage: "accomplished", variant: "謀為同死", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 26, text: "§275(4),§275(2) 謀為同死，教唆或幫助自殺罪",
    category: "殺人", kind: "教唆幫助自殺", stage: "accomplished", variant: "謀為同死", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 13, text: "§277(2)前段 傷害致人於死罪",
    category: "傷害致死", kind: "傷害致死"
  },
  {
    value: 14, text: "§278(2) 使人受重傷因而致人於死罪",
    category: "傷害致死", kind: "重傷致死"
  },
  {
    value: 15, text: "§279但書 義憤傷害因而致人於死罪",
    category: "傷害致死", kind: "義憤傷害致死"
  },
  {
    value: 16, text: "§280,§277(2) 傷害直系血親尊親屬致死罪",
    category: "傷害致死", kind: "傷害直系血親尊親屬致死"
  },
  {
    value: 17, text: "§280,§278(2) 重傷害直系血親尊親屬致死罪",
    category: "傷害致死", kind: "重傷直系血親尊親屬致死"
  },
  {
    value: 18, text: "§282中段 加工自傷因而致死罪",
    category: "傷害致死", kind: "加工自傷致死", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 18, text: "§282(1)前段 加工自傷因而致死罪",
    category: "傷害致死", kind: "加工自傷致死", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 19, text: "§282前段 教唆或幫助自傷因而致死罪",
    category: "傷害致死", kind: "教唆幫助自傷致死", valid_before: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 20, text: "§282(2)前段 教唆或幫助自傷因而致死罪",
    category: "傷害致死", kind: "教唆幫助自傷致死", valid_after: PENAL_CODE_AMENDMENT_DATE
  },
  {
    value: 30, text: "§283,§277(2)前段 聚眾鬥毆致人於死罪",
    category: "傷害致死", kind: "聚眾鬥毆致死", valid_before: PENAL_CODE_AMENDMENT_DATE
  }
];

const factors = [
  { name: "c57_1", text: "§57(1) 犯罪動機、目的" },
  { name: "c57_2", text: "§57(2) 犯罪時所受刺激" },
  { name: "c57_3", text: "§57(3) 犯罪手段" },
  { name: "c57_4", text: "§57(4) 行為人生活狀況" },
  { name: "c57_5", text: "§57(5) 行為人品行" },
  { name: "c57_6", text: "§57(6) 行為人智識程度" },
  { name: "c57_7", text: "§57(7) 行為人與被害人關係" },
  { name: "c57_8", text: "§57(8) 行為人違反義務程度" },
  { name: "c57_9", text: "§57(9) 犯罪所生之危險或損害" },
  { name: "c57_10", text: "§57(10) 犯罪後之態度" },
  { name: "c47", text: "§47 累犯" },
  { name: "c112", text: "兒少§70 成年人教唆、幫助或利用兒童及少年犯罪", valid_before: new Date("2011-11-30T00:00:00+08:00") },
  { name: "c112", text: "兒少§112 成年人教唆、幫助或利用兒童及少年犯罪", valid_after: new Date("2011-11-30T00:00:00+08:00") },
  { name: "c134", text: "§134 公務員利用職權機會" },
  { name: "c18_2", text: "§18Ⅱ 十四歲以上未滿十八歲" },
  { name: "c18_3", text: "§18Ⅲ 滿八十歲" },
  { name: "c19_2", text: "§19Ⅱ 辨識、控制能力顯著減低" },
  { name: "c20", text: "§20 瘖啞" },
  { name: "c23", text: "§23 防衛過當" },
  { name: "c24_1", text: "§24Ⅰ 避難過當" },
  { name: "c25_2", text: "§25Ⅱ 普通未遂" },
  { name: "c27_1", text: "§27Ⅰ 中止犯" },
  { name: "c30", text: "§30 幫助犯" },
  { name: "c31_1", text: "§31Ⅰ 身分犯無特定關係之共犯" },
  { name: "c59", text: "§59 情狀顯可憫恕" },
  { name: "c62", text: "§62 自首" },
  { name: "c63", text: "§63 老幼處刑", calculated: true },
  { name: "cp14_1", text: "證保§14Ⅰ 污點證人" },
  { name: "cp7", text: "速審§7 訴訟延滯", valid_after: new Date("2010-05-19T00:00:00+08:00") },
];

const factorGroups = [
  {
    title: "法定科刑注意事項",
    type: "tristate",
    factors: ["c57_1", "c57_2", "c57_3", "c57_4", "c57_5", "c57_6", "c57_7", "c57_8", "c57_9", "c57_10"]
  },
  {
    title: "法定加重事由",
    type: "binary",
    vibe: "negative",
    factors: ["c47", "c112", "c134"]
  },
  {
    title: "法定減輕事由",
    type: "binary",
    vibe: "positive",
    factors: ["c18_2", "c18_3", "c19_2", "c20", "c23", "c24_1", "c25_2", "c27_1", "c30", "c31_1", "c59", "c62", "c63", "cp14_1", "cp7"]
  }
];

const courts = [
  { "id":  1, "value": "TPC", "text": "司法院刑事補償", "description": "司法院刑事補償" },
  { "id":  2, "value": "TPU", "text": "司法院訴願決定", "description": "司法院訴願決定" },
  { "id":  4, "value": "TPS", "text": "最高法院", "description": "最高法院" },
  { "id":  5, "value": "TPA", "text": "最高行", "description": "最高行政法院" },
  { "id":  6, "value": "TPP", "text": "懲戒法庭", "description": "懲戒法院懲戒法庭" },
  { "id":  3, "value": "TPJ", "text": "職務法庭", "description": "懲戒法院職務法庭" },
  { "id":  7, "value": "TPH", "text": "高院", "description": "臺灣高等法院" },
  { "id":  8, "value": "001", "text": "高院訴願決定", "description": "臺灣高等法院訴願決定" },
  { "id":  9, "value": "TPB", "text": "北高行", "description": "臺北高等行政法院" },
  { "id": 10, "value": "TCB", "text": "中高行", "description": "臺中高等行政法院" },
  { "id": 11, "value": "KSB", "text": "高高行", "description": "高雄高等行政法院" },
  { "id": 12, "value": "IPC", "text": "智財法院", "description": "智慧財產法院" },
  { "id": 13, "value": "TCH", "text": "臺中高分院", "description": "臺灣高等法院臺中分院" },
  { "id": 14, "value": "TNH", "text": "臺南高分院", "description": "臺灣高等法院臺南分院" },
  { "id": 15, "value": "KSH", "text": "高雄高分院", "description": "臺灣高等法院高雄分院" },
  { "id": 16, "value": "HLH", "text": "花蓮高分院", "description": "臺灣高等法院花蓮分院" },
  { "id": 17, "value": "TPD", "text": "臺北地院", "description": "臺灣臺北地方法院" },
  { "id": 18, "value": "SLD", "text": "士林地院", "description": "臺灣士林地方法院" },
  { "id": 19, "value": "PCD", "text": "新北地院", "description": "臺灣新北地方法院" },
  { "id": 20, "value": "ILD", "text": "宜蘭地院", "description": "臺灣宜蘭地方法院" },
  { "id": 21, "value": "KLD", "text": "基隆地院", "description": "臺灣基隆地方法院" },
  { "id": 22, "value": "TYD", "text": "桃園地院", "description": "臺灣桃園地方法院" },
  { "id": 23, "value": "SCD", "text": "新竹地院", "description": "臺灣新竹地方法院" },
  { "id": 24, "value": "MLD", "text": "苗栗地院", "description": "臺灣苗栗地方法院" },
  { "id": 25, "value": "TCD", "text": "臺中地院", "description": "臺灣臺中地方法院" },
  { "id": 26, "value": "CHD", "text": "彰化地院", "description": "臺灣彰化地方法院" },
  { "id": 27, "value": "NTD", "text": "南投地院", "description": "臺灣南投地方法院" },
  { "id": 28, "value": "ULD", "text": "雲林地院", "description": "臺灣雲林地方法院" },
  { "id": 29, "value": "CYD", "text": "嘉義地院", "description": "臺灣嘉義地方法院" },
  { "id": 30, "value": "TND", "text": "臺南地院", "description": "臺灣臺南地方法院" },
  { "id": 31, "value": "KSD", "text": "高雄地院", "description": "臺灣高雄地方法院" },
  { "id": 32, "value": "CTD", "text": "橋頭地院", "description": "臺灣橋頭地方法院" },
  { "id": 33, "value": "HLD", "text": "花蓮地院", "description": "臺灣花蓮地方法院" },
  { "id": 34, "value": "TTD", "text": "臺東地院", "description": "臺灣臺東地方法院" },
  { "id": 35, "value": "PTD", "text": "屏東地院", "description": "臺灣屏東地方法院" },
  { "id": 36, "value": "PHD", "text": "澎湖地院", "description": "臺灣澎湖地方法院" },
  { "id": 37, "value": "KMH", "text": "金門高分院", "description": "福建高等法院金門分院" },
  { "id": 38, "value": "KMD", "text": "金門地院", "description": "福建金門地方法院" },
  { "id": 39, "value": "LCD", "text": "連江地院", "description": "福建連江地方法院" },
  { "id": 41, "value": "KSY", "text": "高雄少家法院", "description": "臺灣高雄少年及家事法院" },
];

export { crimes, factors, factorGroups, courts };