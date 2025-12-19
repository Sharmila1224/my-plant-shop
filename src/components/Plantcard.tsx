import { useState } from "react";
import mexicanmint from '../assets/img/mexican mint.jpg';
import tulasi from '../assets/img/tulasi.jpg';
import aleovera from '../assets/img/aleovera.jpg';
import ashwangandha from '../assets/img/ashwangandha.jpg';
import neem from '../assets/img/Neem.jpg';
import moringaleaves from '../assets/img/moringaleaves.jpg';
import tribulus from '../assets/img/tribulus.jpg';
import betleleaf from '../assets/img/betleleaf.jpg';
import purpleblooms from '../assets/img/purpleblooms.jpg';

function Plantcard() {
  // expanded is an object where keys are card ids and values are true/false
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const plants = [
    {
      id: 1,
      name: "Mexican Mint",
      img: mexicanmint,
      short: "Mexican mint helps in treating cold, cough and digestion.",
      more: "This plant is rich in aroma and grows easily in small pots. It supports respiratory health naturally..."
    },
    {
      id: 2,
      name: "Thulasi",
      img: tulasi,
      short: "Thulasi boosts immunity and reduces stress.",
      more: "It has strong medicinal properties and is widely used in Ayurveda for daily healing."
    },
    {
      id: 3,
      name: "Aloe Vera",
      img: aleovera,
      short: "Aloe vera is great for skin hydration and cooling.",
      more: "It helps in healing burns, improves digestion, and nourishes the skin deeply."
    },
    {
      id: 4,
      name: "Ashwangandha",
      img: ashwangandha,
      short: "Ashwangandha reduces stress and increases energy levels.",
      more: "It is widely used as an adaptogen to boost strength, focus, and overall wellness."
    },
    {
      id: 5,
      name: "Neem",
      img: neem,
      short: "Neem purifies blood and improves skin health.",
      more: "Its strong antibacterial nature is excellent for treating skin problems and detoxification."
    },
    {
      id: 6,
      name: "Moringa Leaves",
      img: moringaleaves,
      short: "Moringa leaves are rich in vitamins, calcium, and iron.",
      more: "They improve immunity, increase energy, and are highly nutritious for all ages."
    },
    {
      id: 7,
      name: "Tribulus",
      img: tribulus,
      short: "Tribulus supports stamina and muscle strength.",
      more: "It is used to boost vitality and maintain overall physical performance."
    },
    {
      id: 8,
      name: "Betle Leaf",
      img: betleleaf,
      short: "Betle leaves improve digestion and freshen breath.",
      more: "They have antibacterial properties and support oral and digestive health."
    },
    {
      id: 9,
      name: "Purple Blooms",
      img: purpleblooms,
      short: "Beautiful plant with bright purple flowers.",
      more: "It adds natural colour to gardens and is very simple to maintain daily."
    }
  ];

  const toggleRead = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {plants.map((p) => (
              <div className="col" key={p.id}>
                <div className="card shadow-sm h-100">

                  <img
                    src={p.img}
                    alt={p.name}
                    className="card-img-top"
                    style={{ height: "225px", objectFit: "cover", width: "100%" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="text-center mb-2">{p.name}</h5>

                    <p className="card-text mb-1">
                      {p.short}
                    </p>

                    {/* extra two lines shown when expanded */}
                    {expanded[p.id] && (
                      <p className="card-text text-muted mb-2">
                        {p.more}
                      </p>
                    )}

                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-success"
                          onClick={() => toggleRead(p.id)}
                        >
                          {expanded[p.id] ? "Read Less" : "Read More"}
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Plantcard;
