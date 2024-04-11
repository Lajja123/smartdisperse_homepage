
import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import style from "../app/page.module.css"

export default function Home() {
  return (
    <main className={style.main}>
     <Navbar/>
    <Homepage/>
    </main>
  );
}
