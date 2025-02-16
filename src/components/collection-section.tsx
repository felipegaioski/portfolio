import { Collection } from "@/types/types";

export default function CollectionSection({ collection }: { collection: Collection }) {
    return (
        <section className="py-6">
            <div className="px-2">
                <div className="section-title main-container fade-in">
                    <h2 className="title-text">{collection.name}</h2>
                    <p className="sub-text">{collection.description? collection.description : ''}</p>
                </div>
            </div>
        </section>
    );
}