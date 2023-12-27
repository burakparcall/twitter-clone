import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";
import WhoFollow from "./who-follow";

export default function RightBar() {
    return (
        <aside className="pb-[64px]">
            <Search/>
            <Premium/>
            <Topics/>
            <WhoFollow/>
            <Footer/>
        </aside>
    )
}