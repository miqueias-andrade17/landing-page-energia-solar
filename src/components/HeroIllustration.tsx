export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="hero-illustration__panel hero-illustration__panel--main">
        <div className="hero-illustration__roof" />
        <div className="hero-illustration__solar-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="hero-illustration__meter">
          <div className="hero-illustration__meter-label">Performance</div>
          <div className="hero-illustration__meter-bar">
            <strong>82%</strong>
          </div>
        </div>
      </div>
      <div className="hero-illustration__panel hero-illustration__panel--floating hero-illustration__panel--left">
        <span>Economia média</span>
        <strong>até 90%</strong>
      </div>
      <div className="hero-illustration__panel hero-illustration__panel--floating hero-illustration__panel--right">
        <span>Projeto sob medida</span>
        <strong>Residencial & empresarial</strong>
      </div>
      <div className="hero-illustration__sun" />
    </div>
  );
}
