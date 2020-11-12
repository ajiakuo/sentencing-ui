// Mockup response from backend
export default {
  "estimation": 42,
  "related_cases": [
    {
      "id": "TCD,107,訴,114",
      "relevance": 0.92,
      "crime": 13,
      "sentence": 90,
      "subject": "家庭暴力防治法之傷害致死",
      "labels": [
        { factor: "c57_1", summary: "被害人…生活常規問題" },
        { factor: "c57_1", summary: "因不滿…，竟共同基於傷害之犯意" },
        { factor: "c57_3", summary: "接續在上開居所內分別徒手或以蒼蠅拍、愛的小手毆打…" },
      ]
    },
    {
      "id": "TCD,106,訴,112",
      "relevance": 0.59,
      "crime": 13,
      "sentence": 360,
      "subject": "傷害致死",
    },
    {
      "id": "PCD,110,訴,307",
      "relevance": 0.42,
      "crime": 21,
      "sentence": 0,
      "subject": "謀為同死加工自殺",
    },
    {
      "id": "TPD,104,訴,689",
      "relevance": 0.11,
      "crime": 13,
      "sentence": -1,
      "subject": "傷害致死",
    },
    {
      "id": "TPS,101,台上,900",
      "relevance": 0.01,
      "crime": 1,
      "sentence": -2,
      "subject": "強盜殺人",
    },
  ]
};
