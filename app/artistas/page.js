import Main from "@/components/Main";
import ArtistBanner from "@/components/Banners/ArtistBanner";

export const metadata = {
    title: "alga parda · artistas"
}

export default function Artistas() {
    return (
        <Main>
            <div className="absolute top-56 max-w-screen-xl ml-36 overflow-x-scroll">
                <div className="flex gap-10 whitespace-nowrap">
                    <ArtistBanner/>
                    <ArtistBanner/>
                    <ArtistBanner/>
                    <ArtistBanner/>
                    <ArtistBanner/>
                    <ArtistBanner/>
                    <ArtistBanner/>
                </div>
            </div>
        </Main>
    );
}
