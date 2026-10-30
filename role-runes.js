// 只保留每個角色目前與預計裝備的符文。
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
          "蝴蝶（橘）",
          "喝采（粉）",
          "來臨（橘）"
        ],
        "armor": [
          "共鳴水晶",
          "毀滅烙印",
          "岩石巨人",
          "平原流浪者",
          "魔力激流"
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
          "嘲弄（橘，已有）",
          "和弦（待補）",
          "機智（待補）"
        ],
        "armor": [
          "巨人之臂（後續候選）",
          "戰慄樂想",
          "岩石巨人",
          "平原流浪者",
          "魔力激流"
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
          "車輪（紫）",
          "光束（橘）",
          "羽翼（粉）"
        ],
        "armor": [
          "神聖修養",
          "陰影逼近",
          "共鳴水晶",
          "毀滅烙印",
          "魔力激流"
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
          "神聖修養",
          "魔力激流"
        ]
      }
    }
  }
};
