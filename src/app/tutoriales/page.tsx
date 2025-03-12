import HeroPages from "../components/General/HeroPages";
import VideoDynamicPlayer from "../components/Tutorials/VideoDynamicPlayer";
import { dictionary } from "../sources/dictionary";

export default function Tutoriales() {
    return (
        <main className="bg-primary-500">
            <HeroPages title={dictionary.tutorials_page.title} description={dictionary.tutorials_page.description} icon={dictionary.tutorials_page.icon} />
            <VideoDynamicPlayer />
        </main>
    )
}