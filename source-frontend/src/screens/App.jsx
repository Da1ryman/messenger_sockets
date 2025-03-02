import Header from "../components/header/Header";
import Chat from "../components/body/Chat";
import Footer from "../components/footer/Footer.jsx";

const App = () => {
    return (
        <div style={{display:"grid", gridTemplateRows: "57px auto 54px", height: "100vh"}}>
            <Header />
            <Chat/>
            <Footer/>
        </div>
    )
}

export default App;