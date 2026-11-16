// 六角色現況與台服 S1 預計配置；S1 建議參照韓服資料，開服後再核對。
const PERSONAL_RUNE_DATA = {
  "roles": {
    "main": {
      "className": "魔法師",
      "targetClassId": "mage",
      "current": {
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "隕石（橘）",
          "山崩（橘）",
          "霜刺（粉）"
        ],
        "armor": [
          "岩石巨人",
          "魔力激流",
          "毀滅烙印",
          "共鳴水晶",
          "超自然"
        ]
      },
      "target": {
        "weapon": "霜風＋（施法向）／劍舞＋（爆擊向）",
        "badge": "遙遠之光（爆擊向）／大法師（施法向）",
        "accessory": [
          "우레＋（台服譯名待核）",
          "隕石＋",
          "霜刺＋"
        ],
        "armor": [
          "魔力激流",
          "岩石巨人",
          "超自然＋",
          "毀滅烙印",
          "共鳴水晶"
        ],
        "note": "S1 主案為 우레＋、운석＋、서리가시＋（123）；不走 우레 的替代是 운석＋、산사태＋、서리가시＋。因此你目前的隕石／山崩／霜刺仍有兩格重疊，但舊草稿把第三格寫成增幅＋，不是問卷主流。武器和徽章依施法速度或爆擊取向選；防具沿用目前五件，是韓服 S1 法師配裝頁仍列作核心組合。 우레 的台服中文名稱待開服核對。",
        "sources": [
          {
            "label": "韓服職業配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/mage/"
          },
          {
            "label": "韓服 S1 玩家問卷指南（2026-02）",
            "url": "https://theqoo.net/mabinogi/4087115736"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      },
      "futureTarget": {
        "className": "暗黑術士",
        "weapon": "劍舞（普攻向可改水波之日）",
        "badge": "遙遠之光",
        "accessory": [
          "束縛＋",
          "腐化＋",
          "瘋狂＋"
        ],
        "armor": [
          "魔力激流",
          "岩石巨人",
          "毀滅烙印",
          "共鳴水晶",
          "超自然＋"
        ],
        "note": "本尊未來轉職目標，另列在主本尊下，不占六角色之一。韓服 S1 主流飾品組合是束縛＋、腐化＋、瘋狂＋，常見改造 2／4／5；劍舞是 S1 推薦武器，普攻流可試水波之日。暗黑術士專屬防具名單仍缺可靠交叉來源，這裡暫以通用法系輸出符文作起步候選，轉職開放後再核對。",
        "sources": [
          {
            "label": "韓服暗黑術士符文整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/darkmage/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087117159"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      }
    },
    "z": {
      "className": "舞者",
      "targetClassId": "dancer",
      "current": {
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "蝴蝶（橘）",
          "喝采（粉）",
          "來臨（橘）"
        ],
        "armor": [
          "共鳴水晶",
          "毀滅烙印",
          "紅色盟約",
          "平原流浪者",
          "穩定"
        ]
      },
      "target": {
        "weapon": "劍舞＋（首選）／萬流水道（替代）",
        "badge": "遙遠之光／破碎之天（連擊取向）",
        "accessory": [
          "喝采＋",
          "腳步＋（발걸음）",
          "轉換＋（전환）"
        ],
        "armor": [
          "壓倒的力量",
          "細緻的巧手",
          "蒼白閃光",
          "岩石守望者",
          "黃昏"
        ],
        "note": "S1 主案改為喝采＋、腳步＋、轉換＋，常見改造 135；問卷也記錄 145／235 等手感分支。劍舞＋在舞者票選中是高順位武器，徽章以遙遠之光為首選、破碎之天可顧連擊。防具是通用輸出組合，最後一格可依副本換日常或生存符文。舊草稿的蝴蝶＋／來臨＋不是這份 S1 問卷的主流三件套。",
        "sources": [
          {
            "label": "韓服職業配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/dancer/"
          },
          {
            "label": "韓服 S1 玩家問卷指南（2026-02）",
            "url": "https://theqoo.net/mabinogi/4087117159"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      }
    },
    "zz": {
      "className": "吟遊詩人",
      "targetClassId": "bard",
      "current": {
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "嘲弄（橘）",
          "超音波（橘）",
          "集中（粉）"
        ],
        "armor": [
          "巨人之臂",
          "戰礫樂想",
          "岩石巨人",
          "平原流浪者",
          "魔力激流"
        ]
      },
      "target": {
        "weapon": "劍舞＋（輸出）／萬流水道（替代）",
        "badge": "遙遠之光（輸出）／山脈君主（替代）",
        "accessory": [
          "和弦＋",
          "嘲弄＋",
          "無我＋"
        ],
        "armor": [
          "壓倒的力量",
          "細緻的巧手",
          "蒼白閃光",
          "幻影",
          "席捲狂風"
        ],
        "note": "S1 主案是和弦＋、嘲弄＋、無我＋，常見改造 234；偏治療時可改和弦＋、無我＋、機智＋。S1 符文庫也列有吟遊詩人專用變奏＋（改弦音射擊），但玩家問卷沒有把它列為 234 主案。防具依問卷的壓倒／細緻／蒼白閃光與隊伍破防、直傷需求搭配；避免把吟遊詩人專用防具當其他職業通用符文。",
        "sources": [
          {
            "label": "韓服職業配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/bard/"
          },
          {
            "label": "韓服 S1 玩家問卷指南（2026-02）",
            "url": "https://theqoo.net/mabinogi/4087117159"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      }
    },
    "o": {
      "className": "樂師",
      "targetClassId": "musician",
      "current": {
        "weapon": "千把劍",
        "badge": "強烈",
        "accessory": [
          "速奏（橘）",
          "終章（粉）",
          "共鳴（紫）"
        ],
        "armor": [
          "魔力激流",
          "毀滅烙印",
          "共鳴水晶",
          "紅色盟約",
          "陰險一擊"
        ]
      },
      "target": {
        "weapon": "劍舞＋（輸出）／破壞者（特定副本）",
        "badge": "遙遠之光（輸出）／大法師（施法手感）",
        "accessory": [
          "終章＋",
          "速奏＋",
          "調律＋（조율）"
        ],
        "armor": [
          "壓倒的力量",
          "細緻的巧手",
          "蒼白閃光",
          "黃昏",
          "岩石守望者"
        ],
        "note": "S1 主案是終章＋、速奏＋、調律＋，常見改造 345；另一條玩家配法用共鳴＋替代調律＋，改造 135。你目前的共鳴＋仍是有效替代，主要新增／替換候選是調律＋。S1 符文庫另有樂師專用魅惑＋，但這份問卷的主流組合沒有把它放進三件核心。",
        "sources": [
          {
            "label": "韓服職業配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/musician/"
          },
          {
            "label": "韓服 S1 玩家問卷指南（2026-02）",
            "url": "https://theqoo.net/mabinogi/4087117159"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      }
    },
    "p": {
      "className": "祭司",
      "targetClassId": "priest",
      "current": {
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "車輪（紫）",
          "光束（橘）",
          "羽翼（粉）"
        ],
        "armor": [
          "魔力激流",
          "神聖修養",
          "毀滅烙印",
          "共鳴水晶",
          "陰影逼近"
        ]
      },
      "target": {
        "weapon": "結晶（追加攻擊）／霜風＋（施法手感）",
        "badge": "裂地（強擊循環）／遙遠之光（爆發）",
        "accessory": [
          "聖戰＋（성전）",
          "車輪＋",
          "連結＋（결속）"
        ],
        "armor": [
          "席捲狂風",
          "搖曳火焰",
          "盲眼先知",
          "細緻的巧手",
          "壓倒的力量"
        ],
        "note": "S1 玩家問卷的輸出／團隊配置主案是聖戰＋、車輪＋、連結＋，改造 135；偏治療與照護時，車輪＋、光束＋、羽翼＋仍是不同用途的分支。結晶偏追加攻擊，霜風偏施法手感；徽章多數偏裂地，也有人選遙遠之光或大法師。防具意見分散，這裡列一組常見的席捲／追加攻擊／增傷組合，不視為唯一答案。",
        "sources": [
          {
            "label": "韓服職業配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/priest/"
          },
          {
            "label": "韓服 S1 玩家問卷指南（2026-02）",
            "url": "https://theqoo.net/mabinogi/4087117159"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      }
    },
    "oo": {
      "className": "修道士",
      "targetClassId": "monk",
      "current": {
        "weapon": "驚異＋",
        "badge": "絢爛",
        "accessory": [
          "因果（橘）",
          "報應（橘）",
          "業火（橘）"
        ],
        "armor": [
          "岩石巨人",
          "平原流浪者",
          "巨人之臂",
          "神聖修養",
          "魔力激流"
        ]
      },
      "target": {
        "weapon": "忘卻／無限（冷卻循環）／水波之日（替代）",
        "badge": "遙遠之光（主推）／山脈君主或破碎之天（替代）",
        "accessory": [
          "海嘯＋（해일）",
          "雷霆＋（뇌정）",
          "淨化＋（정화）"
        ],
        "armor": [
          "壓倒的力量",
          "細緻的巧手",
          "封閉命運",
          "蒼白閃光",
          "黃昏"
        ],
        "note": "S1 主流飾品改為海嘯＋、雷霆＋、淨化＋，常見改造 125；有玩家用 123，或以祝聖＋替代淨化＋。因果＋、報應＋、淨化＋也是問卷內另一條路線，不是唯一配置。忘卻／無限的冷卻循環是韓服修道士終局目標；沒有時水波之日比沿用驚異＋更接近問卷替代方案。徽章以遙遠之光為首選，防具槽按輸出屬性與已有強化調整。",
        "sources": [
          {
            "label": "韓服職業配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/monk/"
          },
          {
            "label": "韓服 S1 玩家問卷指南（2026-02）",
            "url": "https://theqoo.net/mabinogi/4087117159"
          },
          {
            "label": "韓服 S1 符文資料庫（Inven）",
            "url": "https://mabimo.inven.co.kr/db/rune"
          }
        ]
      }
    }
  }
};
