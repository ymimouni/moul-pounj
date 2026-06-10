import Header from "@/components/header/Header"
import HeroSection from "@/components/sections/HeroSection"
import QuizSection from "@/components/sections/QuizSection"
import BestSellers from "@/components/sections/BestSellers"
import WhyChooseSection from "@/components/sections/WhyChooseSection"
import CategoryCards from "@/components/sections/CategoryCards"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CompanyStory from "@/components/sections/CompanyStory"
import BlogSection from "@/components/sections/BlogSection"
import Newsletter from "@/components/sections/Newsletter"
import Footer from "@/components/footer/Footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <BestSellers />
      <WhyChooseSection />
      <CategoryCards />
      <TestimonialsSection />
      <CompanyStory />
      <BlogSection />
      <QuizSection />
      <Footer />
    </main>
  )
}
