import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import Place from "./Place.jsx";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
    {
        id: 'african-savanna',
        image: savannaImg,
        title: 'African Savanna',
        description: 'Experience the beauty of nature.',
    },
    {
        id: 'amazon-river',
        image: amazonImg,
        title: 'Amazon River',
        description: 'Get to know the largest river in the world.',
    },
    {
        id: 'caribbean-beach',
        image: caribbeanImg,
        title: 'Caribbean Beach',
        description: 'Enjoy the sun and the beach.',
    },
    {
        id: 'desert-dunes',
        image: desertImg,
        title: 'Desert Dunes',
        description: 'Discover the desert life.',
    },
    {
        id: 'forest-waterfall',
        image: forestImg,
        title: 'Forest Waterfall',
        description: 'Listen to the sound of the water.',
    },
];

function App() {
    return <main>
        <section>
            <h2>Why work with us?</h2>

            <Accordion className="accordion">
                <Accordion.Item
                    id="experience"
                    className="accordion-item"
                    title="We got 20 years of experience">
                    <Accordion.Title
                        className="accordion-item-title">
                        We got 20 years of experience
                    </Accordion.Title>
                    <Accordion.Content
                        className="accordion-item-content">
                        <article><p>You can&apos;t go wrong with us.</p></article>
                        <p>We are in the business of planning highly individualized
                            vacation trips for more than 20 years.</p>

                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                    id="local-guides"
                    className="accordion-item">
                    <Accordion.Title
                        className="accordion-item-title">
                        We're working with local guides
                    </Accordion.Title>
                    <Accordion.Content
                        className="accordion-item-content">
                        <article><p>We are not doing this alone from our office.</p></article>
                        <p>We are working with our local guide, to ensure safe and pleasant vacation.</p>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </section>
        <section>
            <SearchableList items={PLACES} itemKeyFn={item => item.id} >
                {(item) => <Place item={item}/>}
            </SearchableList>
            <SearchableList items={["item 1", "item 2", "item 3"]} itemKeyFn={item => item}>
                {(item) => item}
            </SearchableList>
        </section>
    </main>
}

export default App;
