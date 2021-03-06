API 規格
==========

> 注意：這份文件還是討論中的草稿。

量刑系統 API 設計借鑒了 [Stripe API](https://stripe.com/docs/api) 和其他業界 REST API 共通的特性與設計理念，可以當作參考。

在沒有特別註明的情況下，API 接受 [HTTP POST 表單編碼](https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms) (`application/x-www-form-encoded`) 格式的請求，並傳回 JSON 格式的回應。

驗證
----

目前計畫範圍並**沒有**規劃使用者註冊或驗證機制。

如果未來要擴充設計，應以不依賴連線階段狀態 (session-independent/stateless) 的 API 金鑰模式，透過 HTTP `Authorization` 檔頭為傳遞方式。

錯誤
----

參考 [Stripe API](https://stripe.com/docs/api/errors#errors) 的 HTTP 錯誤規範。

因為系統現階段規模不大，實作上不用到太複雜。

| HTTP 狀態碼 | 說明 |
|-------------|------|
| **200** – OK | 一切正常。 |
| **400** – Bad Request | 傳入的參數錯誤。 |
| **401** – Unauthorized | 驗證失敗，<s>未提供有效的 API 金鑰</s>。（目前未使用）  |
| **500** – Server Error | 伺服器錯誤。 |

傳回的錯誤範例：

```json
  {
    "type": "invalid_request_error",
    "message": "Missing parameter for [crime]"
  }
```

量刑預測
-------

**端點**：`POST /v1/predictions`

**參數**：

罪名編號與各項欄位可參照計畫期中成果報告書 PDF，或是前端所使用的 [scope.js](../src/scope.js#L40)。

| 欄位名稱 | 資料型別 | 說明 |
|----------|----------|------|
| **`crime`** | `int` | 罪名，依適用條文不同分別編號。（`1` ~ `30`） |
| **`c57_1`** ~ **`c57_10`** | `int` | 法定科刑注意事項。（`-1`：偏輕，`0`：中立，`1`：偏重） |
| **`c47`** ~ **`c134`** | `bool` | 法定加重事由。（`0`：無，`1`：有） |
| **`c18_2`** ~ **`cp7`** | `bool` | 法定減輕事由。（`0`：無，`1`：有） |

**傳回值**：

| 欄位名稱 | 資料型別 | 說明 |
|----------|----------|------|
| **`estimation`** | `int` | 預估刑期，四捨五入後的月份數。 |
| **`related_cases`** | `list[Case]` | 相關案例。 |

**`Case`**（案例）型別之格式如下：

| 欄位名稱 | 資料型別 | 說明 |
|----------|----------|------|
| **`id`** | `str` | 判決字號，以[法學資料檢索系統](https://law.judicial.gov.tw/FJUD/)與資料來源為主。 |
| **`relevance`** | `float` | 相關程度。（`0.0` ≤ `relevance` ≤ `1.0`） |
| **`crime`** | `int` | 罪名，依適用條文不同分別編號。（`1` ~ `30`） |
| **`sentence`** | `int` | 刑期，四捨五入後的月份數。（`-1`：無期徒刑，`-2`：死刑） |
| **`subject`** | `str` | 判決案由。 |
| **`labels`** | `list[object]` | 判決理由內相關之標記，（`factor`：量刑因素代號，`summary`：相關之文字段落。） |

**範例**：

```
POST /v1/predictions
crime=1&c57_1=0&c57_2=2&c57_3=2&c57_4=2&c57_5=2&c57_6=2&c57_7=2&c57_8=2&c57_9=2&c57_10=2&c47=0&c112=0&c134=0&c18_2=0&c18_3=0&c19_2=0&c20=0&c23=0&c24_1=0&c25_2=0&c27_1=0&c30=0&c31_1=0&c59=0&c62=0&c63=0&cp14_1=0&cp7=0
```

```js
  {
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
          /* … */
        ]
      },
      {
        "id": "TPS,101,台上,900",
        /* … */
      },
      {
        "id": "TPS,89,台上,2196",
        /* … */
      }
    ]
  }
```

作者
----

© [Poren Chiang](https://poren.tw/) 2020, CC BY-SA 4.0
