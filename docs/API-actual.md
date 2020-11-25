API 實際規格
==========

更動[參照](https://github.com/hlshao/flask_api_sentence/blob/main/api.py)。

錯誤
----

| HTTP 狀態碼 | 說明 |
|-------------|------|
| **200** – OK | 一切正常。 |
| **400** – Bad Request | 傳入的參數錯誤。 |

傳回的錯誤範例：

```
缺少參數Svalue
```

量刑預測
-------

**端點**：`POST /v1/predictions`

**參數**：

註：罪名編號與各項欄位與計畫期中成果報告書 PDF 不同。

| 欄位名稱 | 實際命名 | 資料型別 | 說明 |
|----------|----------|----------|------|
| `crime` | `Svalue` | `int` | 罪名，依適用條文不同分別編號。（`1` ~ `30`） |
|  | `c57_1` ~ `c57_10` | `int` | 法定科刑注意事項。（`-1`：偏輕，`0`：中立，`1`：偏重） |
| `c47` ~ `c134` | `agg_c47` ~ `agg_c134` | `bool` | 法定加重事由。（`0`：無，`1`：有） |
| `c18_2` ~ `cp7` | `mit_c18_2` ~ `mit_c63` | `bool` | 法定減輕事由。（`0`：無，`1`：有） |

**傳回值**：

| 欄位名稱 | 資料型別 | 說明 |
|----------|----------|------|
| `estimation` | `int` | 預估刑期，四捨五入後的月份數。 |
| `related_cases` | `list[Case]` | 相關案例。 |

**`Case`**（案例）型別之格式如下：

| 欄位名稱 | 實際命名 | 資料型別 | 說明 |
|----------|----------|----------|------|
| `id` | `shortid2` | `str` | 判決字號。 |
| `relevance` | `sim` | `float` | 相關程度。（`0.0` ≤ `relevance` ≤ `1.0`，`NaN`：？？？） |
| `crime` | `Svalue` | `int` | 罪名，依適用條文不同分別編號。（`1` ~ `30`） |
| `sentence` | `prison_m` | `int` | 刑期，四捨五入後的月份數。 |
| `labels` | `labels` | `list[Label]` | 判決理由內相關之標記， |

**`Label`**（案例）型別之格式如下：

| 欄位名稱 | 實際命名 | 資料型別 | 說明 |
|----------|----------|----------|------|
| `factor` | `Ctype` | `int` | 量刑因素代號。（`specialPoint`：？？？） |
| `summary` | `Ctext` | `str` | 相關之文字段落。 |
| `value` | `Cvalue` | `int` | 法定科刑注意事項。（`-1`：偏輕，`0`：中立，`1`：偏重） |

**範例**：

```
POST /v1/predictions
Svalue=1&c57_1=0&c57_2=2&c57_3=2&c57_4=2&c57_5=2&c57_6=2&c57_7=2&c57_8=2&c57_9=2&c57_10=2&agg_c47=0&agg_c112=0&agg_c134=0&mit_c18_2=0&mit_c18_3=0&mit_c19_2=0&mit_c20=0&mit_c23=0&mit_c24_1=0&mit_c25_2=0&mit_c27_1=0&mit_c30=0&mit_c31_1=0&mit_c59=0&mit_c62=0&mit_c63=0
```

```js
  {
    "estimation": 42,
    "related_cases": [
      {
        "caseindex": "TCD,107,訴,114",
        "sim": 0.92,
        "Svalue": 13,
        "prison_m": 90,
        "labels": [
          { factor: "c57_1", value: -1, summary: "被害人…生活常規問題" },
          { factor: "c57_1", value: 0, summary: "因不滿…，竟共同基於傷害之犯意" },
          { factor: "c57_3", value: 1, summary: "接續在上開居所內分別徒手或以蒼蠅拍、愛的小手毆打…" },
          /* … */
        ]
      },
      {
        "caseindex": "TPS,101,台上,900",
        /* … */
      },
      {
        "caseindex": "TPS,89,台上,2196",
        /* … */
      }
    ]
  }
```