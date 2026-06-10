export interface Article {
  id: string
  title: string
  category: string
  image: string
  date: string
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Mal de dos : comment choisir le bon matelas ?",
    category: "GUIDE SOMMEIL",
    image: "/articles/back-pain.png",
    date: "12 Mai 2024",
  },
  {
    id: "2",
    title: "Matelas ferme ou moelleux : lequel choisir ?",
    category: "GUIDE D'ACHAT",
    image: "/articles/couple-sleep.png",
    date: "28 Avril 2024",
  },
  {
    id: "3",
    title: "5 astuces pour mieux dormir naturellement",
    category: "CONSEILS",
    image: "/articles/sleep-tips.png",
    date: "15 Avril 2024",
  },
]
