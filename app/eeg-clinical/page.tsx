import Link from "next/link";

const ACCENT = "#4A6B5B";
const ACCENT_LIGHT = "#EBF0ED";
const BG = "#F2F2EE";
const CARD_BG = "#FFFFFF";
const BORDER = "#DDDDD6";
const TEXT = "#1C1C1A";
const MUTED = "#7A7A72";

export default function EEGClinical() {
  return (
    <main style={{ backgroundColor: BG, color: TEXT, fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: "1.7" }}>

      {/* NAV */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, backgroundColor: BG, position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px" }}>
        <Link href="/" style={{ color: MUTED, textDecoration: "none", fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          ← The Cognitive Lab
        </Link>
        <span style={{ color: MUTED, fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Research Work
        </span>
      </nav>

      {/* HERO */}
      <div style={{ backgroundColor: CARD_BG, borderBottom: `1px solid ${BORDER}`, padding: "64px 24px 48px", textAlign: "center" }}>
        <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: ACCENT, marginBottom: "16px" }}>
          Clinical Data Collection · Tongji University
        </p>
        <h1 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: "normal", color: TEXT, maxWidth: "720px", margin: "0 auto 12px", lineHeight: "1.35" }}>
          Adolescent Depression Screening:<br />Clinical EEG &amp; Psychiatric Assessment
        </h1>
        <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", color: MUTED, marginTop: "8px" }}>
          Junyi Xiao &nbsp;·&nbsp; Tongji University × Guangxi Hospital Site &nbsp;·&nbsp; Dec 2025 – Present
        </p>
      </div>

      {/* STATS */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: ACCENT_LIGHT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
        {[
          { value: "157", label: "Inpatients recruited" },
          { value: "10–19", label: "Age range" },
          { value: "DSM-5", label: "Diagnostic criteria" },
          { value: "In Analysis", label: "Current status" },
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
        <Section num="01" title="Study Overview">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            This hospital-based study investigates resting-state EEG biomarkers for adolescent depression. Data was collected at a clinical inpatient site in Guangxi, targeting adolescents aged 10–19 meeting DSM-5 criteria for Major Depressive Disorder. The study aims to identify neural markers — specifically multiscale entropy and phase-lag index — that could support objective, low-cost screening tools in clinical and community settings.
          </p>
          <Callout>
            The clinical setting introduced constraints not present in lab research: mandatory suicide risk screening protocols, dual consent procedures for minors and guardians, and coordination with hospital SOPs. These shaped every stage of data collection.
          </Callout>
        </Section>

        {/* 02 */}
        <Section num="02" title="My Role &amp; Responsibilities">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            I was responsible for the full data collection pipeline at the hospital site, operating under clinical supervision.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Helvetica Neue, sans-serif", fontSize: "14px", margin: "20px 0" }}>
            <thead>
              <tr>
                {["Responsibility", "Detail"].map(h => (
                  <th key={h} style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textAlign: "left", padding: "10px 14px", border: `1px solid ${BORDER}`, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Participant recruitment", "Screened and enrolled 157 inpatients meeting DSM-5 MDD criteria, coordinating with ward staff"],
                ["Psychiatric scale administration", "Administered BDI-II-C (depression severity), PANAS (affect), and ATQ (automatic thoughts) to all participants"],
                ["Informed consent", "Managed dual consent procedures — separate protocols for minors and their legal guardians"],
                ["Suicide risk screening", "Followed mandatory clinical SOPs; flagged and escalated cases per protocol before proceeding"],
                ["EEG data acquisition", "Recorded resting-state EEG sessions; maintained signal quality and session documentation"],
              ].map(([resp, detail], i) => (
                <tr key={resp}>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: TEXT, fontWeight: 600, width: "38%", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{resp}</td>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: MUTED, lineHeight: "1.5", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* 03 */}
        <Section num="03" title="Measures &amp; Instruments">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { name: "BDI-II-C", full: "Beck Depression Inventory – Child version", purpose: "Primary measure of depressive symptom severity; Chinese-validated adaptation for adolescents" },
              { name: "PANAS", full: "Positive and Negative Affect Schedule", purpose: "Assesses current affective state; used to contextualise EEG resting-state recordings" },
              { name: "ATQ", full: "Automatic Thoughts Questionnaire", purpose: "Captures negative automatic cognitions; provides cognitive-level complement to neural data" },
              { name: "Resting-state EEG", full: "Eyes-closed and eyes-open conditions", purpose: "Neural data for multiscale entropy and phase-lag index extraction in analysis phase" },
            ].map((m, i) => (
              <div key={m.name} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", fontWeight: 700, color: ACCENT, backgroundColor: ACCENT_LIGHT, border: `1px solid ${BORDER}`, borderRadius: "2px", padding: "4px 8px", flexShrink: 0, marginTop: "2px", letterSpacing: "1px" }}>{m.name}</div>
                <div>
                  <strong style={{ display: "block", color: TEXT, fontFamily: "Helvetica Neue, sans-serif", fontSize: "14px", marginBottom: "4px" }}>{m.full}</strong>
                  <p style={{ color: MUTED, fontSize: "15px", marginBottom: 0 }}>{m.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 */}
        <Section num="04" title="Clinical Protocol Considerations">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            Working in an inpatient adolescent psychiatric setting required adapting standard research protocols to clinical realities. Key considerations I navigated:
          </p>
          {[
            { title: "Mandatory suicide risk screening", body: "Every participant was screened before proceeding. Cases flagged under clinical threshold triggered escalation to the supervising clinician — research data collection was halted and only resumed once cleared by clinical staff." },
            { title: "Dual consent for minors", body: "Chinese clinical research law requires separate, independent consent from both the minor participant and their legal guardian. I managed documentation workflows to ensure both were obtained and recorded correctly before any data collection began." },
            { title: "Participant vulnerability", body: "Working with acutely depressed adolescents required careful attention to session pacing and participant welfare. Scale administration was adjusted in duration and tone based on participant state, in coordination with clinical staff." },
          ].map((f, i) => (
            <div key={f.title} style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", fontWeight: 700, color: ACCENT, backgroundColor: ACCENT_LIGHT, border: `1px solid ${BORDER}`, borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </div>
              <div>
                <strong style={{ display: "block", color: TEXT, fontFamily: "Helvetica Neue, sans-serif", fontSize: "15px", marginBottom: "6px" }}>{f.title}</strong>
                <p style={{ color: MUTED, fontSize: "15.5px", marginBottom: 0 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </Section>

        {/* 05 */}
        <Section num="05" title="Analysis Phase">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            Data collection is complete (N = 157). The analysis phase is currently underway, examining two primary neural markers:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "20px 0" }}>
            {[
              { label: "Multiscale entropy (MSE)", desc: "Quantifies temporal complexity of EEG signal across time scales; expected to differ between MDD and control groups as a marker of reduced neural flexibility." },
              { label: "Phase-lag index (PLI)", desc: "Measures functional connectivity between electrode pairs, immune to volume conduction artefacts; used to examine disrupted inter-regional synchrony in depression." },
            ].map(item => (
              <div key={item.label} style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, padding: "16px 20px" }}>
                <strong style={{ display: "block", color: TEXT, fontFamily: "Helvetica Neue, sans-serif", fontSize: "14px", marginBottom: "6px" }}>{item.label}</strong>
                <p style={{ color: MUTED, fontSize: "15px", marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* RELEVANCE */}
        <div style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, padding: "28px 32px", marginTop: "52px" }}>
          <h3 style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px", color: ACCENT, marginBottom: "12px" }}>Why this is relevant</h3>
          <p style={{ color: MUTED, fontSize: "16px", marginBottom: 0 }}>
            This project demonstrates my ability to conduct rigorous data collection in high-stakes clinical environments — not just controlled lab settings. Managing real participant vulnerability, regulatory compliance, and clinical SOPs alongside data quality requirements reflects the kind of judgment that translates directly to applied research roles.
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
