"use client";
import { useEffect, useRef, useState } from "react";

const ACCENT = "#4A6B5B";
const ACCENT_LIGHT = "#EBF0ED";
const BG = "#F2F2EE";
const CARD_BG = "#FFFFFF";
const BORDER = "#DDDDD6";
const TEXT = "#1C1C1A";
const MUTED = "#7A7A72";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const trail = useRef<{ x: number; y: number }[]>([]);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", onMove);
    let frame = 0, animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame++;
      const d = dot.current, m = mouse.current;
      const ax = (m.x - d.x) * 0.055, ay = (m.y - d.y) * 0.055;
      d.vx = (d.vx + ax) * 0.76; d.vy = (d.vy + ay) * 0.76;
      if (frame % 20 === 0) { d.vx += (Math.random() - 0.5) * 3; d.vy += (Math.random() - 0.5) * 3; }
      d.x += d.vx; d.y += d.vy;
      trail.current.push({ x: d.x, y: d.y });
      if (trail.current.length > 32) trail.current.shift();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.current.forEach((p, i) => {
        const a = (i / trail.current.length) * 0.3;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74,107,91,${a})`; ctx.fill();
      });
      ctx.beginPath(); ctx.arc(d.x, d.y, 16, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(74,107,91,0.35)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.arc(d.x, d.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = ACCENT; ctx.fill();
      ctx.font = "10px monospace"; ctx.fillStyle = "rgba(122,122,114,0.7)";
      ctx.fillText(`x:${Math.round(d.x)}  y:${Math.round(d.y)}`, d.x + 20, d.y - 6);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); canvas.removeEventListener("mousemove", onMove); };
  }, []);

  useEffect(() => {
    const sections = ["about", "work", "methods", "contact"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const projects = [
    {
      id: "gaze",
      title: "Imagined Gaze Cues",
      year: "2024–",
      context: "MSc Thesis · Lund University",
      question: "Can imagined social cues bias covert attention?",
      method: "600Hz eye-tracking + microsaccade detection",
      data: "gaze coordinates · pupil dynamics · latency",
      insight: "Imagined directionality may shape early attentional orientation before conscious report.",
      translation: "Expectation and implied cues may influence user focus before deliberate decision-making begins.",
    },
    {
      id: "eeg",
      title: "EEG Depression Screening",
      year: "2025–",
      context: "Research Assistant · Tongji University",
      question: "Can portable EEG features support early risk identification?",
      method: "Multiscale entropy + phase-lag index",
      data: "8-channel EEG dynamics · state transitions",
      insight: "Subtle temporal complexity in EEG may reveal clinically relevant regulation patterns.",
      translation: "Passive physiological signals may complement self-report in mental health screening tools.",
    },
    {
      id: "planwise",
      title: "PlanWise App",
      year: "2025",
      context: "Independent Project",
      question: "How can behavioral data support planning and habit formation?",
      method: "UX concept + behavioral dashboard logic",
      data: "habit logs · procrastination markers · streaks",
      insight: "Users need interpretive feedback, not only task lists.",
      translation: "Behavioral tracking tools are more effective when they explain patterns, not just record them.",
    },
  ];

  const navItems = ["about", "work", "methods", "contact"];

  return (
    <main style={{ backgroundColor: BG, color: TEXT }} className="min-h-screen font-sans">

      {/* NAV */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, backgroundColor: BG }}
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4">
        <span className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: MUTED }}>
          The Cognitive Lab
        </span>
        <div className="flex gap-8">
          {navItems.map(id => (
            <a key={id} href={`#${id}`}
              className="text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                color: activeSection === id ? ACCENT : MUTED,
                fontWeight: activeSection === id ? 500 : 400,
                borderBottom: activeSection === id ? `1px solid ${ACCENT}` : "1px solid transparent",
                paddingBottom: "2px",
              }}>
              {id}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 pt-24 pb-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-8" style={{ color: ACCENT }}>
            Behavioral Research · Eye-tracking · Cognitive Science
          </p>
          <h1 className="text-5xl font-light leading-tight mb-8" style={{ letterSpacing: "-0.025em", color: TEXT }}>
            Understanding what people<br />
            <span style={{ color: ACCENT, fontStyle: "italic" }}>actually do</span>,<br />
            not only what they say.
          </h1>
          <p className="text-sm leading-relaxed max-w-lg mb-14" style={{ color: MUTED }}>
            Using behavioral experiments, eye-tracking, and computational analysis
            to study attention, decision-making, and social cognition.
          </p>
          <div style={{ border: `1px solid ${BORDER}`, backgroundColor: "#FAFAFA", borderRadius: "2px" }}
            className="relative w-full h-64 overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 flex gap-6 px-5 py-3 text-xs font-mono"
              style={{ borderTop: `1px solid ${BORDER}`, color: MUTED, backgroundColor: BG }}>
              <span>600 Hz</span>
              <span>gaze · pupil · latency</span>
              <span>Engbert & Kliegl</span>
              <span>Python · PsychoPy · Tobii</span>
            </div>
            <p className="absolute top-4 right-5 text-xs font-mono" style={{ color: "#BBBBB2" }}>
              move cursor ↓
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-28">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-10" style={{ color: ACCENT }}>Research Profile</p>
            <h2 className="text-3xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>Junyi Xiao</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              MSc Psychology, Lund University (2024–2026). Behavioral researcher
              specialising in attention, social cognition, and oculomotor signals.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Background in experimental psychology, data analysis, and
              cross-cultural research. Seeking roles in user research,
              behavioral research, or insights analysis in Sweden or Denmark.
            </p>
            <div className="flex gap-3 mt-8">
              {["Lund University", "Southwest Minzu University"].map(s => (
                <span key={s} className="text-xs px-3 py-1"
                  style={{ border: `1px solid ${BORDER}`, color: MUTED, borderRadius: "2px" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {[
              { label: "Research Lens", items: ["attention", "social cognition", "covert signals", "behavior beyond self-report"] },
              { label: "Methods I Trust", items: ["eye-tracking analysis", "EEG signal processing", "behavioral experiment design", "Python / R modelling"] },
              { label: "Moving Toward", items: ["user research", "behavioral insights", "research-informed product thinking"] },
            ].map(block => (
              <div key={block.label}
                className="p-5 cursor-pointer transition-all duration-200"
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: "2px",
                  backgroundColor: activeCard === block.label ? ACCENT_LIGHT : CARD_BG,
                  borderColor: activeCard === block.label ? ACCENT : BORDER,
                }}
                onClick={() => setActiveCard(activeCard === block.label ? null : block.label)}>
                <p className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: activeCard === block.label ? ACCENT : MUTED }}>
                  {block.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {block.items.map(item => (
                    <span key={item} className="text-xs px-3 py-1"
                      style={{
                        border: `1px solid ${activeCard === block.label ? ACCENT : BORDER}`,
                        color: activeCard === block.label ? ACCENT : MUTED,
                        borderRadius: "2px",
                        backgroundColor: activeCard === block.label ? "#FFFFFF" : "transparent",
                      }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA EVIDENCE */}
      <section style={{ borderTop: `1px solid ${BORDER}` }} className="px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: ACCENT }}>
            Research Evidence
          </p>
          <p className="text-sm mb-12" style={{ color: MUTED }}>
            Pilot data from the MSc thesis project. Each participant completed 300+ trials.
            Microsaccades detected using the Engbert &amp; Kliegl (2003) algorithm.
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: "2px", backgroundColor: CARD_BG }}>
            <img
              src="/participant06_main_sequence.png"
              alt="Microsaccade main sequence — participant06"
              className="w-full"
              style={{ display: "block" }}
            />
            <div className="px-6 py-4 flex flex-col gap-2"
              style={{ borderTop: `1px solid ${BORDER}` }}>
              <p className="text-xs font-mono" style={{ color: MUTED }}>
                Participant 06 · 320 trials · N = 2942 microsaccades detected
              </p>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                <span style={{ color: ACCENT }}>A. Main Sequence</span> confirms velocity–amplitude scaling consistent with genuine microsaccades. &nbsp;
                <span style={{ color: ACCENT }}>B. Amplitude Distribution</span> peaks at 10–15 arcmin, within expected range (1.8–60 arcmin). &nbsp;
                <span style={{ color: ACCENT }}>C. Direction Distribution</span> shows horizontal bias, consistent with the lateral gaze-cue paradigm.
              </p>
              <p className="text-xs font-mono mt-1" style={{ color: "#BBBBAF" }}>
                Detection: Engbert &amp; Kliegl algorithm · Sampling: 600 Hz · Tool: Python
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ borderTop: `1px solid ${BORDER}` }} className="px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-14" style={{ color: ACCENT }}>Selected Work</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map(p => {
              const active = activeCard === p.id;
              return (
                <div key={p.id}
                  className="flex flex-col gap-4 p-6 cursor-pointer transition-all duration-200"
                  style={{
                    border: `1px solid ${active ? ACCENT : BORDER}`,
                    borderRadius: "2px",
                    backgroundColor: active ? ACCENT_LIGHT : CARD_BG,
                  }}
                  onClick={() => setActiveCard(active ? null : p.id)}>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono" style={{ color: MUTED }}>{p.year}</span>
                    <span className="text-xs" style={{ color: MUTED }}>{p.context}</span>
                  </div>
                  <h3 className="text-base font-medium" style={{ color: active ? ACCENT : TEXT }}>{p.title}</h3>
                  {[
                    { label: "Question", val: p.question },
                    { label: "Method", val: p.method },
                    { label: "Data", val: p.data },
                    { label: "Insight", val: p.insight },
                  ].map(row => (
                    <div key={row.label}>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: active ? ACCENT : "#BBBBAF", opacity: active ? 1 : 0.8 }}>{row.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: active ? "#3A3A32" : MUTED }}>{row.val}</p>
                    </div>
                  ))}
                  <div className="mt-1 p-3 text-xs leading-relaxed"
                    style={{
                      backgroundColor: active ? "#FFFFFF" : BG,
                      borderLeft: `2px solid ${ACCENT}`,
                      color: MUTED,
                    }}>
                    <span className="text-xs uppercase tracking-wide" style={{ color: active ? ACCENT : "#BBBBAF" }}>Lab → Product · </span>
                    {p.translation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section id="methods" style={{ borderTop: `1px solid ${BORDER}` }} className="px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-14" style={{ color: ACCENT }}>Capabilities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                label: "Research",
                items: ["Experimental design", "Eye-tracking protocols", "EEG acquisition & preprocessing", "Behavioral paradigm programming", "Survey & questionnaire design"],
              },
              {
                label: "Technical",
                items: ["Python · R · MATLAB · SPSS", "PsychoPy · Tobii Pro Spectrum", "pandas / scipy / numpy", "Linear mixed models", "Bayesian statistics"],
              },
              {
                label: "Analytical Habits",
                items: ["Turning messy signals into structured evidence", "Documenting pipelines clearly", "Explaining technical results in plain language", "Validating before interpreting"],
              },
            ].map(col => (
              <div key={col.label}
                className="p-5 cursor-pointer transition-all duration-200"
                style={{
                  border: `1px solid ${activeCard === col.label ? ACCENT : BORDER}`,
                  borderRadius: "2px",
                  backgroundColor: activeCard === col.label ? ACCENT_LIGHT : CARD_BG,
                }}
                onClick={() => setActiveCard(activeCard === col.label ? null : col.label)}>
                <p className="text-xs tracking-widest uppercase mb-5"
                  style={{ color: activeCard === col.label ? ACCENT : MUTED }}>
                  {col.label}
                </p>
                {col.items.map(s => (
                  <p key={s} className="text-sm mb-3"
                    style={{ color: activeCard === col.label ? "#3A3A32" : MUTED }}>
                    {s}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ borderTop: `1px solid ${BORDER}` }} className="px-8 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: ACCENT }}>Contact</p>
            <p className="text-sm max-w-sm" style={{ color: MUTED }}>
              Available for User Research, Behavioral Research, and Insights
              roles in Sweden and Denmark.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:xiaojunyishuaibi@gmail.com"
              className="transition-colors duration-150"
              style={{ color: MUTED }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              xiaojunyishuaibi@gmail.com
            </a>
            <a href="https://linkedin.com/in/junyixiao-415998273"
              className="transition-colors duration-150"
              style={{ color: MUTED }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              LinkedIn →
            </a>
            <a href="/Junyi_Xiao_CV.pdf" download
              className="transition-colors duration-150 flex items-center gap-2"
              style={{ color: MUTED }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              Download CV →
            </a>
            <span className="text-xs" style={{ color: "#BBBBAF" }}>
              Malmö · open to Lund / Copenhagen
            </span>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${BORDER}` }} className="px-8 py-5">
        <p className="text-xs font-mono text-center" style={{ color: "#BBBBAF" }}>
          The Cognitive Lab · Junyi Xiao · 2025
        </p>
      </footer>
    </main>
  );
}