const crimes = [
  { value: 1, text: "§271(1) 殺人罪" },
  { value: 2, text: "§271(2),(1) 殺人未遂罪" },
  { value: 3, text: "§271(3) 預備殺人罪" },
  { value: 4, text: "修正前§272(1) 殺害直系血親尊親屬罪" },
  { value: 5, text: "修正前§272(2),(1) 殺害直系血親尊親屬未遂罪" },
  { value: 6, text: "修正前§272(3) 預備殺害直系血親尊親屬罪" },
  { value: 7, text: "§273(1) 義憤殺人罪" },
  { value: 8, text: "§273(2),(1) 義憤殺人未遂罪" },
  { value: 9, text: "§274(1) 母殺嬰兒罪" },
  { value: 10, text: "§274(2),(1) 母殺嬰兒未遂罪" },
  { value: 11, text: "§275(1) 加工自殺罪" },
  { value: 12, text: "修正前§275(2)/修正後§275(3),(1) 加工自殺未遂罪" },
  { value: 13, text: "§277(2)前段  傷害致人於死罪" },
  { value: 14, text: "§278(2) 使人受重傷因而致人於死罪" },
  { value: 15, text: "§279但書 義憤傷害因而致人於死罪" },
  { value: 16, text: "§280,§277(2) 傷害直系血親尊親屬致死罪" },
  { value: 17, text: "§280,§278(2) 重傷害直系血親尊親屬致死罪" },
  { value: 18, text: "修正前§282中段/修正後§282(1)前段 加工自傷因而致死罪" },
  { value: 19, text: "修正前§282前段 教唆或幫助自傷因而致死罪" },
  { value: 20, text: "修正後§282(2)前段 教唆或幫助自傷因而致死罪" },
  { value: 21, text: "修正前§275(3)/修正後§275(4),§275(1) 謀為同死，加工自殺罪" },
  { value: 22, text: "修正前§275(1) 教唆或幫助自殺罪" },
  { value: 23, text: "修正前§275(3),§275(1) 謀為同死，教唆或幫助自殺罪" },
  { value: 24, text: "修正前§275(2),(1) 教唆或幫助自殺未遂罪" },
  { value: 25, text: "修正後§275(2) 教唆或幫助自殺罪" },
  { value: 26, text: "修正後§275(4),§275(2) 謀為同死，教唆或幫助自殺罪" },
  { value: 27, text: "修正前§272(1) 殺害直系血親尊親屬罪" },
  { value: 28, text: "修正前§272(2),(1) 殺害直系血親尊親屬未遂罪" },
  { value: 29, text: "修正後§272,§271(3) 預備殺害直系血親尊親屬罪" },
  { value: 30, text: "修正前§283,§277(2)前段 聚眾鬥毆致人於死罪" }
];

const factors = [
  { title: "法定科刑注意事項", items: [
    { name: "c57_1", text: "§57(1) 犯罪動機、目的" },
    { name: "c57_2", text: "§57(2) 犯罪時所受刺激" },
    { name: "c57_3", text: "§57(3) 犯罪手段" },
    { name: "c57_4", text: "§57(4) 行為人生活狀況" },
    { name: "c57_5", text: "§57(5) 行為人品行" },
    { name: "c57_6", text: "§57(6) 行為人智識程度" },
    { name: "c57_7", text: "§57(7) 行為人與被害人關係" },
    { name: "c57_8", text: "§57(8) 行為人違反義務程度" },
    { name: "c57_9", text: "§57(9) 犯罪所生之危險或損害" },
    { name: "c57_10", text: "§57(10) 犯罪後之態度" }
  ]},
  { title: "法定加重事由", items: [
    { name: "c47", text: "§47 累犯", type: "binary" },
    { name: "c112", text: "兒少§112 成年人教唆、幫助或利用兒童及少年犯罪", type: "binary" },
    { name: "c134", text: "§134 公務員利用職權機會", type: "binary" },
  ]},
  { title: "法定減輕事由", items: [
    { name: "c18_2", text: "§18(2) 十四歲以上未滿十八歲", type: "binary" },
    { name: "c18_3", text: "§18(3) 滿八十歲", type: "binary" },
    { name: "c19_2", text: "§19(2) 辨識、控制能力顯著減低", type: "binary" },
    { name: "c20", text: "§20 瘖啞", type: "binary" },
    { name: "c23", text: "§23 防衛過當", type: "binary" },
    { name: "c24_1", text: "§24(1) 避難過當", type: "binary" },
    { name: "c25_2", text: "§25(2) 普通未遂", type: "binary" },
    { name: "c27_1", text: "§27(1) 中止犯", type: "binary" },
    { name: "c30", text: "§30 幫助犯", type: "binary" },
    { name: "c31_1", text: "§31(1) 身分犯無特定關係之共犯", type: "binary" },
    { name: "c59", text: "§59 情狀顯可憫恕", type: "binary" },
    { name: "c62", text: "§62 自首", type: "binary" },
    { name: "c63", text: "§63 老幼處刑", type: "binary", disabled: true },
    { name: "cp14_1", text: "證保§14(1) 污點證人", type: "binary" },
    { name: "cp7", text: "速審§7 訴訟延滯", type: "binary" },
  ]}
];

const scales = [
  { value: 0, label: '未知未提' },
  { value: 1, label: '偏輕' },
  { value: 2, label: '中立' },
  { value: 3, label: '偏重' },
  { value: 4, label: '並存' },
];

export { crimes, factors, scales };
