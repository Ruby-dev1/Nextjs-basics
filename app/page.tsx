
import Hero from "@/components/layout/hero";
import Footer from "@/components/layout/footer";
import CategoriesList from "@/components/category";
import Products from "@/components/product";

const HomePage = () => {
  return (
    <>
   

      <main>
        <Hero />
      </main>
      <Products/>
      <CategoriesList/>

      <Footer />
    </>
  );
};

export default HomePage;
