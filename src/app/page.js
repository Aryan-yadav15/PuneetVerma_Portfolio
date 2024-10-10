import Image from "next/image";
import Header from "./_components/Header";
import Herosection from "./_components/Herosection";
import Links from "./_components/Links";
import MyWork from "./_components/MyWork";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="h-screen px-16 flex flex-col gap-5 py-5">
      <Header/>
      <Herosection/>
      <Links/>
      <MyWork/>
      <Footer/>
    </div>
  );
}
