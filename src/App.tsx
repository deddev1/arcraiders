import { useMemo, useState } from "react";
import { CATALOG, WEIGHT_LIMIT, type GearItem } from "./gear";
import "./App.css";

const RARITY_ORDER = ["common", "rare", "epic", "legendary"] as const;

function App() {
  const [loadout, setLoadout] = useState<GearItem[]>([]);

  const stats = useMemo(() => {
    const weight = loadout.reduce((sum, item) => sum + item.weight, 0);
    const power = loadout.reduce((sum, item) => sum + item.power, 0);
    return { weight, power };
  }, [loadout]);

  const overweight = stats.weight > WEIGHT_LIMIT;

  function addItem(item: GearItem) {
    setLoadout((current) =>
      current.some((entry) => entry.id === item.id)
        ? current
        : [...current, item],
    );
  }

  function removeItem(id: string) {
    setLoadout((current) => current.filter((entry) => entry.id !== id));
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero__badge">ARC RAIDERS</div>
        <h1>Loadout Planner</h1>
        <p>
          Build a raid loadout, balance weight against firepower, and deploy
          before the storm rolls in.
        </p>
      </header>

      <main className="grid">
        <section className="panel">
          <div className="panel__head">
            <h2>Armory</h2>
            <span className="panel__hint">Tap to equip</span>
          </div>
          <ul className="catalog">
            {CATALOG.map((item) => {
              const equipped = loadout.some((entry) => entry.id === item.id);
              return (
                <li key={item.id}>
                  <button
                    className={`gear gear--${item.rarity}`}
                    onClick={() => addItem(item)}
                    disabled={equipped}
                    data-testid={`add-${item.id}`}
                  >
                    <span className="gear__name">{item.name}</span>
                    <span className="gear__meta">
                      <span className="tag">{item.slot}</span>
                      <span>{item.weight} kg</span>
                      <span>{item.power} pwr</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="panel">
          <div className="panel__head">
            <h2>Your Loadout</h2>
            <span className="panel__hint">{loadout.length} equipped</span>
          </div>

          <div className={`readout ${overweight ? "readout--warn" : ""}`}>
            <div className="readout__stat">
              <span className="readout__label">Weight</span>
              <span className="readout__value" data-testid="total-weight">
                {stats.weight} / {WEIGHT_LIMIT} kg
              </span>
            </div>
            <div className="readout__stat">
              <span className="readout__label">Power</span>
              <span className="readout__value" data-testid="total-power">
                {stats.power}
              </span>
            </div>
          </div>

          {overweight && (
            <p className="warn" role="alert">
              Over the weight limit — drop gear before deploying.
            </p>
          )}

          {loadout.length === 0 ? (
            <p className="empty">No gear equipped yet. Pick from the armory.</p>
          ) : (
            <ul className="loadout">
              {[...loadout]
                .sort(
                  (a, b) =>
                    RARITY_ORDER.indexOf(b.rarity) -
                    RARITY_ORDER.indexOf(a.rarity),
                )
                .map((item) => (
                  <li key={item.id} className={`chip chip--${item.rarity}`}>
                    <span>{item.name}</span>
                    <button
                      className="chip__remove"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      data-testid={`remove-${item.id}`}
                    >
                      ×
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="footer">
        <span>Cloud Agent dev environment · Vite + React + TypeScript</span>
      </footer>
    </div>
  );
}

export default App;
