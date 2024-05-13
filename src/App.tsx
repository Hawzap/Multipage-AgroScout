import { Route, Routes } from "react-router-dom";
import { AboutOurCompany } from "./anotherComponents/AboutOurCompany/AboutOurCompany";
import { Cartography } from "./anotherComponents/Cartography/Cartography";
import { EntomophagousPage } from "./anotherComponents/EntomophagousPage/EntomophagousPage";
import { Footer } from "./anotherComponents/Footer/Footer";
import { Header } from "./anotherComponents/Header/Header";
import { ItemPage, ItemPageMemo } from "./anotherComponents/ItemPage/ItemPage";
import { MainPage } from "./anotherComponents/MainPage/MainPage";
import { News } from "./anotherComponents/News/News";
import { OurContacts } from "./anotherComponents/OurContacts/OurContacts";
import { ProductCatalog } from "./anotherComponents/ProductCatalog/ProductCatalog";
import { Spraying } from "./anotherComponents/Spraying/Spraying";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/entomophagous" element={<EntomophagousPage />} />
                <Route path="/news" element={<News />} />
                <Route path="/spraying" element={<Spraying />} />
                <Route path="/cartography" element={<Cartography />} />
                <Route path="/aboutus" element={<AboutOurCompany />} />
                <Route path="/catalog/" element={<ProductCatalog />} />
                <Route path="/catalog/:drone" element={<ItemPage />} />
                <Route path="/contacts" element={<OurContacts />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
