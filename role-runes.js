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
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "山崩＋",
          "隕石＋",
          "增幅＋"
        ],
        "armor": [
          "魔力激流",
          "岩石巨人",
          "超自然＋",
          "毀滅烙印",
          "共鳴水晶"
        ],
        "note": "輸出向。韓服 S1 以山崩＋、隕石＋為主，第三格用增幅＋改造技能 5。單人可考慮用「墮落生命之環」替代增幅格；韓服整理提醒深紅霧戒可能破壞法師護盾。千把劍先沿用，來源對法師武器適用性有保留，台服開服後確認職業限制。",
        "sources": [
          {
            "label": "韓服魔法師 S1 配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/mage/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087115736"
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
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "蝴蝶＋",
          "喝采＋",
          "來臨＋"
        ],
        "armor": [
          "岩石巨人",
          "魔力激流",
          "戰慄樂想",
          "毀滅烙印",
          "共鳴水晶"
        ],
        "note": "以你現有的自動／日常舞者路線為主。喝采＋是隊伍追擊輸出的核心；手動操作可把來臨＋改清爽＋，韓服整理認為兩者傷害差距很小。",
        "sources": [
          {
            "label": "韓服舞者 S1 配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/dancer/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087117159"
          }
        ]
      }
    },
    "zz": {
      "className": "吟遊詩人",
      "targetClassId": "bard",
      "current": {
        "weapon": "千把劍",
        "badge": "俐落",
        "accessory": [
          "嘲弄（橘）",
          "超音波（橘）",
          "集中（粉）"
        ],
        "armor": [
          "風暴",
          "戰礫樂想",
          "岩石巨人",
          "平原流浪者",
          "魔力激流"
        ]
      },
      "target": {
        "weapon": "千把劍",
        "badge": "俐落",
        "accessory": [
          "嘲弄＋",
          "和弦＋",
          "機智＋"
        ],
        "armor": [
          "戰慄樂想",
          "岩石巨人",
          "陰險一擊",
          "穩定＋",
          "領悟"
        ],
        "note": "沿用吟遊詩人 2／3／4 支援循環。嘲弄＋、和弦＋、機智＋對應支援與破防；戰慄樂想是組隊核心。穩定＋、領悟是韓服支援型防具候選，最後格依實際觸發和手上符文取捨。徽章先保留你既有的俐落；純團隊增益可評估睿智，兼輸出可評估絢爛。",
        "sources": [
          {
            "label": "韓服吟遊詩人 S1 配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/bard/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087117159"
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
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "速奏＋",
          "終章＋",
          "共鳴＋"
        ],
        "armor": [
          "魔力激流",
          "岩石巨人",
          "戰慄樂想",
          "毀滅烙印",
          "共鳴水晶"
        ],
        "note": "採你原本的速奏＋、終章＋、共鳴＋輸出／團隊副本組合。韓服整理把博愛＋列為一般第三格選擇、共鳴＋列為團隊副本取向；非團隊副本可改博愛＋。有寵物時，魔力激流可考慮換火炬或碎冰。",
        "sources": [
          {
            "label": "韓服樂師 S1 配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/musician/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087117159"
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
          "冷酷勝負師",
          "陰影逼近",
          "吸血",
          "無進活力",
          "吸血"
        ]
      },
      "target": {
        "weapon": "千把劍",
        "badge": "絢爛",
        "accessory": [
          "車輪＋",
          "光束＋",
          "羽翼＋"
        ],
        "armor": [
          "神聖修養",
          "魔力激流",
          "岩石巨人",
          "陰險一擊",
          "銀色尖塔"
        ],
        "note": "偏輸出兼團隊輔助，先保留你原本的車輪＋、光束＋、羽翼＋思路。韓服 S1 玩家另有聖殿＋、車輪＋、結束＋的輸出／團隊分支；若偏治療可改睿智徽章，純輸出可用毀滅烙印＋共鳴水晶替換部分防具。",
        "sources": [
          {
            "label": "韓服祭司 S1 配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/priest/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087117159"
          }
        ]
      }
    },
    "oo": {
      "className": "修道士",
      "targetClassId": "monk",
      "current": {
        "weapon": "驚異",
        "badge": "睿智",
        "accessory": [
          "因果（橘）",
          "報應（橘）",
          "業火（橘）"
        ],
        "armor": [
          "岩石巨人",
          "平原流浪者",
          "巨人之臂",
          "風暴",
          "魔力激流"
        ]
      },
      "target": {
        "weapon": "驚異＋（先行）／忘卻、無限（S1 後期目標）",
        "badge": "睿智",
        "accessory": [
          "因果＋",
          "報應＋",
          "淨化＋"
        ],
        "armor": [
          "岩石巨人",
          "魔力激流",
          "神聖修養",
          "巨人之臂",
          "平原流浪者"
        ],
        "note": "輸出取向。韓服 S1 初期紀錄有因果＋、報應＋配淨化＋的路線；報應是破防爆發軸。你現有的驚異＋可先當過渡，韓服 S1 後期修道士常追忘卻／無限冷卻武器；若走治療／防護向，再評估千把劍＋睿智分支。防具五件暫沿用網站原案；韓服 S1 玩家對修道士防具意見不一，先以武器與飾品作主要參考。",
        "sources": [
          {
            "label": "韓服修道士 S1 配裝整理",
            "url": "https://mabinogimobile.nipponhashi.com/ko/meta/monk/"
          },
          {
            "label": "韓服 S1 社群職業指南",
            "url": "https://theqoo.net/mabinogi/4087117159"
          }
        ]
      }
    }
  }
};
