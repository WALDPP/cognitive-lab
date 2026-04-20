import Link from "next/link";

const ACCENT = "#4A6B5B";
const ACCENT_LIGHT = "#EBF0ED";
const BG = "#F2F2EE";
const CARD_BG = "#FFFFFF";
const BORDER = "#DDDDD6";
const TEXT = "#1C1C1A";
const MUTED = "#7A7A72";

export default function EEGResearch() {
  return (
    <main style={{ backgroundColor: BG, color: TEXT, fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: "1.7" }}>

      {/* NAV */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, backgroundColor: BG, position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px" }}>
        <Link href="/" style={{ color: MUTED, textDecoration: "none", fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          ← The Cognitive Lab
        </Link>
        <span style={{ color: MUTED, fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Research Design
        </span>
      </nav>

      {/* HERO */}
      <div style={{ backgroundColor: CARD_BG, borderBottom: `1px solid ${BORDER}`, padding: "64px 24px 48px", textAlign: "center" }}>
        <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: ACCENT, marginBottom: "16px" }}>
          Independent Research Design · 2025 – Present
        </p>
        <h1 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: "normal", color: TEXT, maxWidth: "720px", margin: "0 auto 12px", lineHeight: "1.35" }}>
          EEG-Based Depression Tendency Screening:<br />Cross-State Neural Modulation
        </h1>
        <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", color: MUTED, marginTop: "8px" }}>
          Junyi Xiao &nbsp;·&nbsp; Independent Research Design &nbsp;·&nbsp; 2025 – Present
        </p>
      </div>

      {/* STATS */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: ACCENT_LIGHT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
        {[
          { value: "140", label: "Planned N" },
          { value: "8-channel", label: "Portable EEG" },
          { value: "Alpha", label: "Primary marker" },
          { value: "In Progress", label: "Current status" },
        ].map((s, i, arr) => (
          <div key={s.label} style={{ padding: "20px 36px", textAlign: "center", borderRight: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <span style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "22px", fontWeight: 700, color: ACCENT, display: "block" }}>{s.value}</span>
            <span style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "1px", display: "block", marginTop: "2px" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* BODY */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* 01 */}
        <Section num="01" title="Research Question">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            Adolescents with depressive tendency may show impaired neural state regulation — specifically, reduced ability to modulate Alpha activity during the transition from eyes-closed to eyes-open resting state. If this cross-state modulation index reliably distinguishes sub-clinical depression from non-clinical baselines, it could support low-cost, objective screening in community settings where clinical-grade tools are inaccessible.
          </p>
          <Callout>
            The key design decision: focusing on a transition between states rather than a single resting condition. Cross-state modulation captures neural flexibility, not just baseline amplitude — a more sensitive and theoretically grounded index for regulatory impairment.
          </Callout>
        </Section>

        {/* 02 */}
        <Section num="02" title="Study Design">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            A prospective, cross-sectional design with two groups (depressive tendency vs. non-clinical control), using portable 8-channel EEG to make the protocol viable outside hospital settings.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Helvetica Neue, sans-serif", fontSize: "14px", margin: "20px 0" }}>
            <thead>
              <tr>
                {["Component", "Specification", "Rationale"].map(h => (
                  <th key={h} style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textAlign: "left", padding: "10px 14px", border: `1px solid ${BORDER}`, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Target population", "Adolescents with depressive tendency (community sample)", "Enables community deployment; distinguishes from clinical MDD sample"],
                ["EEG device", "8-channel portable EEG", "Low cost, low burden; validates feasibility for non-clinical screening contexts"],
                ["Protocol", "Eyes-closed and eyes-open resting state, sequential", "Captures transition dynamics, not just steady-state signals"],
                ["Sample size", "N = 140 (planned)", "Powered to detect medium cross-state effects with adequate sensitivity"],
                ["Classification model", "Elastic net logistic regression", "Interpretable coefficients; penalises multicollinearity across correlated EEG features"],
              ].map(([comp, spec, why], i) => (
                <tr key={comp}>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: TEXT, fontWeight: 600, width: "28%", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{comp}</td>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: MUTED, lineHeight: "1.5", width: "36%", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{spec}</td>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: MUTED, lineHeight: "1.5", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* 03 */}
        <Section num="03" title="Neural Markers &amp; Features">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            Three cross-state indices are extracted and examined as candidate screening features:
          </p>
          {[
            {
              label: "Alpha Modulation Index (AMI)",
              body: "The primary marker. Quantifies the change in Alpha power (8–13 Hz) between eyes-closed and eyes-open conditions. Healthy neural regulation shows a reliable Alpha suppression on eyes-opening (the Alpha blocking response). Reduced or absent modulation may reflect impaired inhibitory control — a theorised mechanism in adolescent depression.",
            },
            {
              label: "Multiscale Entropy (MSE)",
              body: "Measures temporal complexity of the EEG signal at multiple time scales. Lower complexity across scales is associated with reduced neural flexibility and has been linked to depressive states in previous adult research. This study tests whether the effect generalises to sub-clinical adolescent populations.",
            },
            {
              label: "Phase-Lag Index (PLI)",
              body: "Assesses functional connectivity between electrode pairs, using phase relationships that are robust to volume conduction. Changes in inter-regional synchrony between states may reflect disrupted default mode network regulation characteristic of depressive tendency.",
            },
          ].map((f, i) => (
            <div key={f.label} style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", fontWeight: 700, color: ACCENT, backgroundColor: ACCENT_LIGHT, border: `1px solid ${BORDER}`, borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </div>
              <div>
                <strong style={{ display: "block", color: TEXT, fontFamily: "Helvetica Neue, sans-serif", fontSize: "15px", marginBottom: "6px" }}>{f.label}</strong>
                <p style={{ color: MUTED, fontSize: "15.5px", marginBottom: 0 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </Section>

        {/* 04 */}
        <Section num="04" title="Classification Model: Design Choices">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            I chose elastic net logistic regression over higher-capacity models deliberately. In a screening context, the model must be interpretable to clinicians and defensible in applied settings — not just accurate on held-out data.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "20px 0" }}>
            {[
              { label: "Why not deep learning?", desc: "Black-box models cannot be explained to clinicians or used to generate hypotheses about underlying mechanisms. Screening tools require both validity and interpretability." },
              { label: "Why elastic net over LASSO?", desc: "EEG features are inherently correlated (spatially adjacent electrodes, overlapping frequency bands). LASSO arbitrarily selects one from a correlated group; elastic net retains relevant features from the same group." },
              { label: "Validation approach", desc: "Planned k-fold cross-validation with stratified splits; performance evaluated on sensitivity and specificity rather than accuracy alone, given the asymmetric cost of false negatives in a screening context." },
            ].map(item => (
              <div key={item.label} style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, padding: "16px 20px" }}>
                <strong style={{ display: "block", color: TEXT, fontFamily: "Helvetica Neue, sans-serif", fontSize: "14px", marginBottom: "6px" }}>{item.label}</strong>
                <p style={{ color: MUTED, fontSize: "15px", marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 05 */}
        <Section num="05" title="Limitations &amp; Open Questions">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            This study is designed with awareness of its constraints. Key limitations I have built into the design rationale:
          </p>
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            The cross-sectional design cannot establish whether reduced Alpha modulation precedes depression onset or is a consequence of it. A follow-up longitudinal study would be required to address this. Additionally, the 8-channel montage trades spatial resolution for accessibility — some source-level analyses possible with full EEG caps will not be feasible.
          </p>
          <p style={{ color: MUTED, marginBottom: 0 }}>
            The community sample targeting &quot;depressive tendency&quot; rather than clinical MDD also means the findings may not generalise to clinical populations — this is an explicit design choice to optimise for screening contexts rather than diagnostic accuracy.
          </p>
        </Section>

        {/* RELEVANCE */}
        <div style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, padding: "28px 32px", marginTop: "52px" }}>
          <h3 style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px", color: ACCENT, marginBottom: "12px" }}>Why this is relevant</h3>
          <p style={{ color: MUTED, fontSize: "16px", marginBottom: 0 }}>
            This project was designed from scratch — not inherited. It demonstrates how I move from a research problem to a study protocol: identifying the right construct (regulatory flexibility over baseline state), choosing methods that fit the deployment context (portable EEG for community settings), and selecting a model that prioritises interpretability alongside predictive performance. The same reasoning applies to any applied research context where the output has to be used, not just published.
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "32px", textAlign: "center", fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", color: MUTED }}>
        <Link href="/" style={{ color: ACCENT, textDecoration: "none" }}>← Back to The Cognitive Lab</Link>
        <span style={{ margin: "0 12px" }}>·</span>
        <a href="mailto:xiaojunyishuaibi@gmail.com" style={{ color: ACCENT, textDecoration: "none" }}>xiaojunyishuaibi@gmail.com</a>
      </footer>

    </main>
  );
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "52px" }}>
      <span style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{num}</span>
      <h2 style={{ fontSize: "20px", fontWeight: "normal", color: TEXT, marginBottom: "16px", borderBottom: `1px solid ${BORDER}`, paddingBottom: "8px" }} dangerouslySetInnerHTML={{ __html: title }} />
      {children}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: ACCENT_LIGHT, borderLeft: `3px solid ${ACCENT}`, padding: "16px 20px", margin: "20px 0", fontStyle: "italic", color: MUTED, fontSize: "16px", lineHeight: "1.65" }}>
      {children}
    </div>
  );
}
