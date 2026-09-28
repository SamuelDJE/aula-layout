import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({content}){
    return (
        <>
        <Header/>
        {content}
        <Footer/>
        </>
    )
}