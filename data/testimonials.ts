export interface Testimonial {
  id: string
  name: string
  city: string
  content: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Youssef E.",
    city: "Casablanca",
    content: "Matelas Premium 35 au top ! Livraison rapide et le confort est incroyable.",
    rating: 5,
    avatar: "/avatars/youssef.png",
  },
  {
    id: "2",
    name: "Salma B.",
    city: "Rabat",
    content: "Enfin un matelas qui soulage mes douleurs de dos. Je recommande à 100%.",
    rating: 5,
    avatar: "/avatars/salma.png",
  },
  {
    id: "3",
    name: "Ahmed L.",
    city: "Marrakech",
    content: "Qualité premium à prix usine, rien à dire ! Service client très professionnel.",
    rating: 5,
    avatar: "/avatars/ahmed.png",
  },
]
