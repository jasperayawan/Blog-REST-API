import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/header";
import Layout from "./Layout";
import { Context } from "../context/Context";


export default function Home(){
    const {user} = useContext(Context);
    return(
        <>
            <Header/>
            <HeroSection/>
            <Layout />
        </>
    )
}