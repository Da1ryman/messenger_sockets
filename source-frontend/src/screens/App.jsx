import Header from "../components/header/Header";
import Chat from "../components/body/Chat";
import Footer from "../components/footer/Footer.jsx";
import "./App.css";

const App = () => {
    return (
        <div className="app-container">
            <div className="header-section">
                <Header />
            </div>
            <div className="chat-section">
                <Chat />
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    );
};

export default App;