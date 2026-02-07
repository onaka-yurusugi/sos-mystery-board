import type { MysteryEvent } from "@/app/types/event";

export const MOCK_EVENTS: MysteryEvent[] = [
  {
    id: "evt-001",
    title: "北高グラウンドに出現した謎の発光体",
    description:
      "放課後のグラウンドで青白い発光体が目撃された。約30秒間滞空した後、急速に上空へ消失。複数の生徒が目撃。",
    category: "UFO",
    location: "県立北高校グラウンド",
    reporter: "涼宮ハルヒ",
    createdAt: "2026-01-15T16:30:00.000Z",
  },
  {
    id: "evt-002",
    title: "旧校舎の閉鎖された音楽室からピアノの音",
    description:
      "誰もいないはずの旧校舎3階音楽室から断続的にピアノの旋律が聞こえるとの報告。調査したが室内は無人だった。",
    category: "幽霊",
    location: "県立北高校旧校舎3階",
    reporter: "朝比奈みくる",
    createdAt: "2026-01-20T18:00:00.000Z",
  },
  {
    id: "evt-003",
    title: "文芸部室の本が勝手に並び替わる現象",
    description:
      "文芸部室の書架に置かれた本が、翌朝確認すると出版年順に完璧に並び替わっていた。防犯カメラには何も映っていない。",
    category: "超能力",
    location: "県立北高校文芸部室",
    reporter: "長門有希",
    createdAt: "2026-01-25T08:15:00.000Z",
  },
  {
    id: "evt-004",
    title: "光陽園駅前の猫の集会",
    description:
      "毎週水曜日の深夜0時に、駅前広場に正確に13匹の猫が円形に集まる。猫の種類は毎回異なるが数は常に同じ。",
    category: "その他",
    location: "光陽園駅前広場",
    reporter: "古泉一樹",
    createdAt: "2026-02-01T00:00:00.000Z",
  },
  {
    id: "evt-005",
    title: "SOS団部室のPCが未来の日付を表示",
    description:
      "SOS団部室のPCの時計が一瞬だけ2031年の日付を表示した。スクリーンショットは撮れなかったが、団長と副団長が目撃。",
    category: "超能力",
    location: "県立北高校SOS団部室",
    reporter: "涼宮ハルヒ",
    createdAt: "2026-02-05T14:45:00.000Z",
  },
  {
    id: "evt-006",
    title: "校庭の桜が季節外れに開花",
    description:
      "真冬にもかかわらず、校庭の桜の木が一晩で満開になった。翌日には通常の冬枯れ状態に戻っていた。",
    category: "その他",
    location: "県立北高校校庭",
    reporter: "涼宮ハルヒ",
    createdAt: "2026-02-06T07:00:00.000Z",
  },
];