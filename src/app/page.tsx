import { Button } from "@mui/material";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutMe/>
    </main>
  );
}
