import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Clean from "../components/clean/Clean";
import Users from "../components/users/Users";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products title="Products" limit={8} />
      <Clean />
      <Users />
      <Products title="Popular" limit={4} />
      <Footer />
    </div>
  );
}
