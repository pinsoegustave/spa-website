import { About } from "@/components/About";
import Blog from "@/components/Blog";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Review from "@/components/Review";
import Service from "@/components/Service";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>  
    <Hero />
    <About />
    <Service />
    <Product />
    <Blog />
    <Work />
    <Review />
    </>
  );
}
