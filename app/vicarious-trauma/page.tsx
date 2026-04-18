import Link from "next/link";

const ACCENT = "#4A6B5B";
const ACCENT_LIGHT = "#EBF0ED";
const BG = "#F2F2EE";
const CARD_BG = "#FFFFFF";
const BORDER = "#DDDDD6";
const TEXT = "#1C1C1A";
const MUTED = "#7A7A72";

export default function VicariousTrauma() {
  return (
    <main style={{ backgroundColor: BG, color: TEXT, fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: "1.7" }}>

      {/* NAV */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, backgroundColor: BG }}
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4">
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
          Research Work Example
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: "normal", color: TEXT, maxWidth: "680px", margin: "0 auto 12px", lineHeight: "1.3" }}>
          Vicarious Trauma &amp; Empathy: A Mediation Study
        </h1>
        <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", color: MUTED, marginTop: "8px" }}>
          Junyi Xiao &nbsp;·&nbsp; BSc Research Project, Southwest Minzu University &nbsp;·&nbsp; 2020–2021
        </p>
      </div>

      {/* STATS */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: ACCENT_LIGHT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
        {[
          { value: "200+", label: "Participants" },
          { value: "2", label: "Methods combined" },
          { value: "SEM", label: "Analysis approach" },
          { value: "1st Prize", label: "National competition" },
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
            Among individuals regularly exposed to others&apos; distress — volunteers, caregivers, and frontline workers — what psychological mechanisms drive the development of vicarious trauma symptoms? Specifically: does empathy mediate the relationship between exposure and symptom severity?
          </p>
          <Callout>
            The core tension I was investigating: high empathy enables effective care, but may also be the pathway through which occupational trauma accumulates. Understanding this has direct implications for how organisations design support systems for people in high-stress roles.
          </Callout>
        </Section>

        {/* 02 */}
        <Section num="02" title="Method Design &amp; Rationale">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            I chose a multi-method design combining a behavioural task with self-report instruments, rather than self-report alone. The reasoning:
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Helvetica Neue, sans-serif", fontSize: "14px", margin: "20px 0" }}>
            <thead>
              <tr>
                {["Method", "What it measures", "Why I chose it"].map(h => (
                  <th key={h} style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textAlign: "left", padding: "10px 14px", border: `1px solid ${BORDER}`, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Emotional Stroop Task", "Attentional bias toward trauma-related words (reaction time)", "Captures implicit cognitive patterns that self-report cannot; harder to rationalise or fake"],
                ["Empathy Scale", "Dispositional empathy — affective and cognitive components", "Validated instrument; enables comparison with existing literature"],
                ["Big Five Personality", "Neuroticism and agreeableness as candidate moderators", "Controls for individual differences that could confound the empathy effect"],
                ["Vicarious Trauma Scale", "Symptom severity across cognitive, emotional, and physiological domains", "Multi-domain outcome measure avoids construct narrowing"],
              ].map(([name, measures, why], i) => (
                <tr key={name}>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: TEXT, fontWeight: 600, backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{name}</td>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: MUTED, lineHeight: "1.5", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{measures}</td>
                  <td style={{ padding: "11px 14px", border: `1px solid ${BORDER}`, verticalAlign: "top", color: MUTED, lineHeight: "1.5", backgroundColor: i % 2 === 1 ? "#F8FAF9" : "transparent" }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: MUTED, marginBottom: 0 }}>
            Recruitment targeted community volunteers and university students with caregiving exposure. Participants completed the Stroop task first, before any self-report measures, to prevent priming effects on the behavioural data.
          </p>
        </Section>

        {/* 03 */}
        <Section num="03" title="Analysis Approach">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            I conducted mediation analysis in SPSS and structural equation modelling (SEM) in AMOS. The goal was to test whether empathy statistically explained the pathway from exposure to symptom severity — not just whether the two were correlated.
          </p>
          <p style={{ color: MUTED, marginBottom: 0 }}>
            I ran bootstrapped confidence intervals (5,000 samples) to assess indirect effects, and tested both affective and cognitive empathy as separate mediators to check construct specificity. Big Five dimensions were included as covariates to isolate the empathy effect from personality confounds.
          </p>
        </Section>

        {/* 04 */}
        <Section num="04" title="Key Findings">
          {[
            { title: "Empathy as significant mediator", body: "Empathy — particularly affective empathy — significantly mediated the relationship between trauma exposure and vicarious trauma symptom severity. The indirect effect was robust across bootstrap iterations." },
            { title: "Behavioural task aligned with self-report", body: "Stroop reaction time data showed attentional bias toward trauma-related words in high-symptom participants, converging with self-report findings and strengthening confidence in the mediation model." },
            { title: "Personality as boundary condition", body: "Neuroticism moderated the empathy–symptom relationship: individuals high in both empathy and neuroticism showed disproportionately elevated symptoms, suggesting a compounding vulnerability worth flagging for organisations." },
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
        <Section num="05" title="How I Communicated the Findings">
          <p style={{ color: MUTED, marginBottom: "14px" }}>
            The research was formally presented to a faculty panel and submitted to the National College Student Innovation and Entrepreneurship Competition, where it received First Prize nationally. The presentation required translating statistical findings into practical implications for organisations that deploy empathy-intensive roles.
          </p>
          <Callout>
            One deliberate choice: I led with the practical implication — empathy is a risk factor, not just an asset — before explaining the statistical evidence. This reframing was more effective with a mixed audience than leading with methodology.
          </Callout>
        </Section>

        {/* 06 */}
        <Section num="06" title="What I Would Do Differently">
          <p style={{ color: MUTED, marginBottom: 0 }}>
            If I were running this study today, I would add a longitudinal component — a single cross-sectional snapshot limits causal inference. I would also expand the Stroop paradigm to use stimuli drawn from participant-specific professional contexts, rather than standardised word lists, to improve ecological validity. In high-stakes professional environments, generic stimuli likely underestimate the true attentional bias effect.
          </p>
        </Section>

        {/* RELEVANCE BOX */}
        <div style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, padding: "28px 32px", marginTop: "52px" }}>
          <h3 style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px", color: ACCENT, marginBottom: "12px" }}>Why this is relevant</h3>
          <p style={{ color: MUTED, fontSize: "16px", marginBottom: 0 }}>
            This project demonstrates how I approach research: starting from a real human problem, designing methods that capture actual behaviour rather than stated preferences, and communicating findings in a way that drives decisions — not just documents them. The same logic applies when studying how professionals interact with equipment under operational stress: objective behavioural measures, structured analysis, and insight that is actionable for product and design teams.
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
