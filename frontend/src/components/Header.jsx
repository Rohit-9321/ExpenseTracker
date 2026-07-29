export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <span className="app-header__mark">L</span>
        <div>
          <h1 className="app-header__title">Ledger</h1>
          <p className="app-header__subtitle">Personal expense tracker</p>
        </div>
      </div>
      <div className="app-header__status">
        <span className="status-dot" aria-hidden="true"></span>
        Live
      </div>
    </header>
  );
}
