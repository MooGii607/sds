// All site content lives here — edit this file to update the page.

export type Member = {
  id: string;
  role: string;
  name: string;
  /** Path under /public, e.g. "/team/lkhagvabayar.jpg". Leave empty for the placeholder icon. */
  photo?: string;
};

export type Project = {
  id: string;
  title: string;
  text: string;
  /** Up to 3 image paths under /public. */
  images: string[];
  lead?: string;
  members: string[];
};

/** Quarterly scores per year, keyed by member id: [Q1, Q2, Q3, Q4]. */
export type Scores = Record<string, Record<string, (number | null)[]>>;

export const texts = {
  kick: "Социал Демократ Монголын Оюутны Холбооны албан ёсны сайтад тавтай морилно уу!",
  h1: "Социал Демократ Монголын Оюутны Холбоо",
  slogan: "Шинэ мянганы нэгдэл...",
  lead: "Оюутан, залуучуудын эрх ашиг, оролцоог дэмжих, тэдний дуу хоолойг бодлого, шийдвэр гаргах түвшинд хүргэх зорилготой үндэсний хэмжээний оюутны байгууллага юм.",
  about1:
    "Социал Демократ Монголын Оюутны Холбоо нь оюутан залуусыг нийгмийн идэвхтэй, шийдвэр гаргахад оролцдог иргэн болгон хөгжүүлэхийг зорьдог байгууллага юм.",
  about2:
    "Бид нийслэл, аймаг, орон нутаг болон гадаад дахь монгол оюутнуудыг нэг сүлжээнд холбож, санаа бодол, туршлагаа хуваалцан, нэгдмэл хүч болон ажиллаж байна.",
  team_p:
    "Холбооны ерөнхийлөгч, дэд ерөнхийлөгч нар, нарийн бичгийн дарга нар, хяналтын хорооны дарга болон удирдах зөвлөлийн гишүүд.",
  addr: "Тусгаар тогтнолын ордон, 8 давхар, Улаанбаатар хот",
};

export const stats = [
  { value: "21", label: "аймагт салбар" },
  { value: "9", label: "дүүрэгт салбар" },
  { value: "3", label: "улсад салбар зөвлөл" },
];

export const pillars = [
  { title: "Тэгш байдал", text: "Оюутан бүрд тэгш боломж олгоно." },
  { title: "Шударга ёс", text: "Оюутны эрх, эрх ашгийг хамгаална." },
  { title: "Эв нэгдэл", text: "Хамтын хүчээр асуудлыг шийднэ." },
];

export const perks = [
  {
    title: "Сурч, хөгжих боломж",
    text: "Манлайлал, харилцаа, багаар ажиллах, төсөл хөтөлбөр боловсруулах, арга хэмжээ зохион байгуулах болон бусад ур чадвараа хөгжүүлнэ.",
  },
  {
    title: "Шинэ хүрээлэл, хамтын ажиллагаа",
    text: "Монгол Улсын өнцөг булан бүрийн идэвхтэй оюутан, залуустай танилцаж, туршлага солилцон хамтран ажиллана.",
  },
  {
    title: "Арга хэмжээ, төсөл хөтөлбөрт оролцох",
    text: "Салбар холбоо болон Төв холбооноос зохион байгуулах сургалт, уулзалт, нөлөөллийн арга хэмжээ, төсөл хөтөлбөрт оролцоно.",
  },
  {
    title: "Санал санаачилгаа хэрэгжүүлэх",
    text: "Орон нутаг, дүүргийн оюутан, залуучуудад тулгамдаж буй асуудлыг тодорхойлж, шийдэл боловсруулан санаачилга хэрэгжүүлнэ.",
  },
  {
    title: "Орон нутгийн хөгжилд хувь нэмэр оруулах",
    text: "Аймаг, дүүргийнхээ оюутан, залуучуудын оролцоог нэмэгдүүлж, тэдний дуу хоолойг шийдвэр гаргагчдад хүргэнэ.",
  },
  {
    title: "Туршлага, карьерын хөгжил",
    text: "Бодит төсөл, арга хэмжээний зохион байгуулалтад оролцож, манлайлал, зохион байгуулалтын туршлага хуримтлуулна.",
  },
  {
    title: "Оролцоо, амжилтаа баталгаажуулах",
    text: "Идэвхтэй оролцсоноор батламж, сертификат болон бусад хөгжлийн боломжид хамрагдана.",
  },
];

export const joinFormUrl = "https://forms.gle/Ya3BBCdjTY7D3g9k9";

/** Roles shown together in the "Тэргүүлэгчид" group with larger photos. */
export const TOP_ROLES = [
  "Ерөнхийлөгч",
  "Ерөнхий нарийн бичгийн дарга",
  "Хяналтын хорооны дарга",
  "Тэргүүн дэд ерөнхийлөгч",
];

const VP = "Дэд ерөнхийлөгч";
const SEC = "Нарийн бичгийн дарга";
const BOARD = "Удирдах зөвлөлийн гишүүн";

export const members: Member[] = [
  { id: "m0", role: "Ерөнхийлөгч", name: "Н. Лхагвабаяр" },
  { id: "m1", role: "Ерөнхий нарийн бичгийн дарга", name: "Э. Рэнцэнжүгдэр" },
  { id: "m2", role: "Хяналтын хорооны дарга", name: "А. Бауырбек" },
  { id: "m3", role: "Тэргүүн дэд ерөнхийлөгч", name: "Ц. Болор" },
  { id: "m4", role: VP, name: "Ану" },
  { id: "m5", role: VP, name: "Баасандорж" },
  { id: "m6", role: VP, name: "Батхүү" },
  { id: "m7", role: VP, name: "Билгүүн" },
  { id: "m8", role: VP, name: "Даниел" },
  { id: "m9", role: VP, name: "Дөлгөөн" },
  { id: "m10", role: VP, name: "Наранхүү" },
  { id: "m11", role: VP, name: "С. Номуунаа" },
  { id: "v0", role: VP, name: "Нурбулан" },
  { id: "v1", role: VP, name: "Ням-Од" },
  { id: "v2", role: VP, name: "Сүлд-Эрдэнэ" },
  { id: "v3", role: VP, name: "Энхсайхан" },
  { id: "m12", role: VP, name: "А. Энхцэцэг" },
  { id: "m13", role: SEC, name: "" },
  { id: "m14", role: SEC, name: "" },
  { id: "m15", role: SEC, name: "" },
  { id: "m16", role: SEC, name: "" },
  { id: "m17", role: BOARD, name: "Али" },
  { id: "m18", role: BOARD, name: "Алтантулга" },
  { id: "m19", role: BOARD, name: "Амир" },
  { id: "m20", role: BOARD, name: "Ананд-Очир" },
  { id: "m21", role: BOARD, name: "Ариунзаяа" },
  { id: "m22", role: BOARD, name: "Бат-Эгшиглэн" },
  { id: "m23", role: BOARD, name: "Билгүүн" },
  { id: "m24", role: BOARD, name: "Болорсүх" },
  { id: "m25", role: BOARD, name: "Гантогтох" },
  { id: "m26", role: BOARD, name: "Б. Майдарбат" },
  { id: "nmvj6sktg", role: BOARD, name: "М. Мөнх-Эрдэнэ" },
  { id: "m28", role: BOARD, name: "Мөнхтуяа" },
  { id: "m29", role: BOARD, name: "Насандэлгэр" },
  { id: "m30", role: BOARD, name: "Насантогтох" },
  { id: "m31", role: BOARD, name: "Номинчулуун" },
  { id: "m32", role: BOARD, name: "Нямбаатар" },
  { id: "m33", role: BOARD, name: "Оюунчимэг" },
  { id: "m34", role: BOARD, name: "Оргил" },
  { id: "m35", role: BOARD, name: "Содмандах" },
  { id: "m36", role: BOARD, name: "Сумъяа" },
  { id: "m37", role: BOARD, name: "Сэлүн" },
  { id: "m38", role: BOARD, name: "М. Тэлмүүн" },
  { id: "m39", role: BOARD, name: "Цэнгэл" },
  { id: "m40", role: BOARD, name: "Цэндсүрэн" },
  { id: "m41", role: BOARD, name: "Цэрэндиваа" },
  { id: "m42", role: BOARD, name: "Цогбадрах" },
  { id: "m43", role: BOARD, name: "Цолмон" },
  { id: "m44", role: BOARD, name: "Чинбилэгт" },
  { id: "m45", role: BOARD, name: "Хишигбуян" },
  { id: "m46", role: BOARD, name: "Хүслэн" },
  { id: "m47", role: BOARD, name: "Хүрэл-Эрдэнэ" },
  { id: "m48", role: BOARD, name: "Энхтуяа" },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Оюутны эрх ашиг",
    text: "Оюутнуудын санал, хүсэлтийг сонсож, холбогдох байгууллагад хүргэн шийдвэрлүүлнэ.",
    images: [],
    members: [],
  },
  {
    id: "p2",
    title: "Сургалт, хөгжил",
    text: "Манлайлал, иргэний боловсрол, ур чадварын сургалт, хэлэлцүүлэг зохион байгуулна.",
    images: [],
    members: [],
  },
  {
    id: "p3",
    title: "Сайн дурын ажил",
    text: "Нийгэмд үр өгөөжтэй аян, сайн дурын үйл ажиллагаанд оюутнуудыг татан оролцуулна.",
    images: [],
    members: [],
  },
  {
    id: "p4",
    title: "Олон улсын харилцаа",
    text: "Гадаад дахь салбар зөвлөлүүдээрээ дамжуулан туршлага солилцож, сүлжээгээ тэлнэ.",
    images: [],
    members: [],
  },
];

export const scores: Scores = {
  "2026": { m0: [50, 59, 87, 95] },
};
