import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Clean from "../components/clean/Clean";
import Users from "../components/users/Users";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products title="Products" slice={8} />
      <Clean />
      <Users />
      <Products title="Popular" slice={4} />
      <Footer />
    </div>
  );
}
