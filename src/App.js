import { useState } from "react";

const PHASES = [
  {
    id: "home",
    title: "安安",
    subtitle: "Volunteer Network Operations",
    zhSubtitle: "志愿者网络运营",
    tagline: "Building a trained community network — one volunteer, one block, one visit at a time.",
  },
  {
    id: "recruit",
    phase: "PHASE 1: RECRUIT",
    zhPhase: "第一阶段：招募",
    title: "Finding the Right People",
    scenes: [
      {
        visual: "🤝",
        heading: "Who Are An An Volunteers?",
        zhHeading: "谁是安安志愿者？",
        text: "Bilingual Mandarin-English community members who already have trust within Chinatown — CPC staff, temple volunteers, senior center regulars, college students from Chinese-American families, home health aides, and adult children of elderly residents who understand the culture firsthand.",
      },
      {
        visual: "📋",
        heading: "Recruitment Channels",
        zhHeading: "招募渠道",
        text: "Volunteers are recruited through community organizations (CPC, CCBA), temples and churches, university partnerships (NYU, Hunter, Baruch Asian student associations), Chinatown businesses, and word of mouth within existing social networks. We go where trust already exists — we don't post flyers and wait.",
        showRecruitCards: true,
      },
      {
        visual: "🗺️",
        heading: "Territory Assignment",
        zhHeading: "区域分配",
        text: "Each volunteer is assigned a specific building or block with 10–15 elderly residents. Assignments prioritize proximity — volunteers should live or work near their territory so they're a familiar neighborhood face, not a stranger. Each territory is mapped and logged so no resident falls through the cracks.",
        showTerritoryMap: true,
      },
    ],
  },
  {
    id: "train",
    phase: "PHASE 2: TRAIN",
    zhPhase: "第二阶段：培训",
    title: "Preparing Volunteers for Real Situations",
    scenes: [
      {
        visual: "📚",
        heading: "Initial Training Program",
        zhHeading: "初始培训计划",
        text: "New volunteers complete a half-day onboarding session covering: An An's mission and approach, how to introduce yourself at the door, how to communicate with elderly residents who may have hearing loss or cognitive decline, cultural sensitivity around immigration fears and government distrust, and basic emergency protocols.",
        showTrainingModules: true,
      },
      {
        visual: "🔄",
        heading: "Monthly Volunteer Gatherings",
        zhHeading: "每月志愿者聚会",
        text: "Every month, all volunteers meet for a 90-minute session. The first half is training — a rotating topic like FEMA application walkthrough, heat wave response protocol, or flood evacuation routes. The second half is sharing: what are you hearing from residents? Who needs extra help? What's working, what's not? This is where the network strengthens.",
        showMeetingAgenda: true,
      },
      {
        visual: "🎭",
        heading: "Scenario Drills",
        zhHeading: "情景演练",
        text: "Quarterly, volunteers run a full simulated emergency. The coordinator sends out the activation message. Each volunteer executes their route — door knocks and phone calls — and logs who they reached. Afterward, the group reviews: how long did it take? Who was missed? What went wrong? Each drill makes the network faster and more reliable.",
      },
    ],
  },
  {
    id: "operate",
    phase: "PHASE 3: OPERATE",
    zhPhase: "第三阶段：运营",
    title: "The Year-Round Trust Cycle",
    scenes: [
      {
        visual: "🚪",
        heading: "Monthly Check-In Visits",
        zhHeading: "每月探访",
        text: "Each volunteer visits their 10–15 residents once a month. Not to deliver a service — just to check in. How are you? Do you need anything? Here's what's happening in the neighborhood this month. Over time, the resident recognizes the face, learns the name, and starts to trust. This is the foundation everything else depends on.",
      },
      {
        visual: "🪪",
        heading: "An An Brand Tools",
        zhHeading: "安安品牌工具",
        text: "Volunteers carry three things: their An An badge (so residents recognize them through the peephole), the An An Life Card to hand out and explain, and a simple check-in log to record each visit. The panda mascot on everything signals 'this is community, not government' — which is critical for a population that distrusts official institutions.",
        showToolkit: true,
      },
      {
        visual: "📊",
        heading: "Coordinator Oversight",
        zhHeading: "协调员监督",
        text: "A network coordinator (paid staff or dedicated lead volunteer) manages the operation: tracking which residents have been visited, following up when a volunteer can't make a visit, updating territory maps as residents move or new elders are identified, and maintaining the master phone tree list. The coordinator is the backbone that keeps the network running consistently.",
      },
    ],
  },
  {
    id: "activate",
    phase: "PHASE 4: ACTIVATE",
    zhPhase: "第四阶段：启动",
    title: "When Disaster Strikes",
    scenes: [
      {
        visual: "⚠️",
        heading: "Emergency Alert Received",
        zhHeading: "收到紧急警报",
        text: "NYC Emergency Management issues a hurricane evacuation order. The An An coordinator receives the alert and immediately translates it into simple, clear Mandarin — short sentences, no jargon, specific actions: what is happening, what to do, where to go.",
      },
      {
        visual: "📱",
        heading: "Volunteer Activation",
        zhHeading: "志愿者启动",
        text: "The coordinator sends the activation message to all volunteers via group text and WeChat (volunteers are digitally literate, even if residents aren't). Each volunteer receives: the translated alert, their route assignment, and a priority list — residents who live alone, have mobility issues, or have been hard to reach in past drills get contacted first.",
        showActivationFlow: true,
      },
      {
        visual: "📞🚪",
        heading: "Dual-Channel Outreach",
        zhHeading: "双渠道联络",
        text: "Volunteers execute two actions simultaneously: phone tree calls to every resident on their list (spoken Mandarin, simple message, repeated twice) and door knocks for residents who don't answer the phone or who need physical assistance evacuating. The An An badge on the volunteer's chest is what gets the door opened.",
      },
      {
        visual: "✅",
        heading: "Confirmation & Escalation",
        zhHeading: "确认与上报",
        text: "After each contact, volunteers report back to the coordinator: reached, not reached, needs physical help, refused to evacuate. Unreached residents get escalated — the coordinator dispatches a second volunteer or contacts the resident's emergency contact from the Life Card registration. No one is written off after one attempt.",
        showStatusBoard: true,
      },
    ],
  },
  {
    id: "summary",
    phase: "THE NETWORK",
    zhPhase: "网络总览",
    title: "How It All Connects",
  },
];

const RecruitCards = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, maxWidth: 400, margin: "16px auto" }}>
    {[
      { icon: "🏛️", label: "CPC / CCBA", sub: "Existing community orgs" },
      { icon: "🛕", label: "Temples & Churches", sub: "Faith communities" },
      { icon: "🎓", label: "University Partners", sub: "Asian student groups" },
      { icon: "👨‍👩‍👧", label: "Family Members", sub: "Adult children of elders" },
    ].map((item, i) => (
      <div key={i} style={{
        background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)",
        borderRadius: 10, padding: "10px 12px", textAlign: "center",
      }}>
        <div style={{ fontSize: 22 }}>{item.icon}</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#93c5fd", marginTop: 4 }}>{item.label}</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>
      </div>
    ))}
  </div>
);

const TerritoryMap = () => (
  <div style={{
    background: "rgba(232,168,56,0.06)", border: "1px solid rgba(232,168,56,0.15)",
    borderRadius: 12, padding: 16, maxWidth: 380, margin: "16px auto",
  }}>
    <div style={{ fontSize: 11, color: "#e8a838", fontWeight: 700, letterSpacing: 1, marginBottom: 10, textAlign: "center" }}>
      SAMPLE TERRITORY ASSIGNMENT
    </div>
    {[
      { volunteer: "Mrs. Chen", building: "Confucius Plaza, Floors 3–5", residents: 14 },
      { volunteer: "David Liu", building: "65 Bayard St", residents: 11 },
      { volunteer: "Jenny Wu", building: "Chatham Towers, Tower A", residents: 12 },
    ].map((t, i) => (
      <div key={i} style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "8px 10px", background: "rgba(255,255,255,0.03)",
        borderRadius: 8, marginBottom: 4,
      }}>
        <div>
          <div style={{ fontSize: 13, color: "#e8a838", fontWeight: 600 }}>🐼 {t.volunteer}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{t.building}</div>
        </div>
        <div style={{
          fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(232,168,56,0.1)",
          padding: "4px 10px", borderRadius: 12,
        }}>
          {t.residents} residents
        </div>
      </div>
    ))}
  </div>
);

const TrainingModules = () => (
  <div style={{ maxWidth: 400, margin: "16px auto" }}>
    {[
      { num: "01", title: "Mission & Approach", time: "30 min", color: "#e8a838" },
      { num: "02", title: "Door Approach & Communication", time: "45 min", color: "#3b82f6" },
      { num: "03", title: "Elderly-Specific Needs", time: "30 min", color: "#10b981" },
      { num: "04", title: "Cultural Sensitivity & Trust", time: "30 min", color: "#8b5cf6" },
      { num: "05", title: "Emergency Protocols", time: "45 min", color: "#ef4444" },
    ].map((m, i) => (
      <div key={i} style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "10px 14px", borderLeft: `3px solid ${m.color}`,
        marginBottom: 6, background: `${m.color}08`,
        borderRadius: "0 8px 8px 0",
      }}>
        <span style={{ fontSize: 18, fontWeight: 800, color: m.color, fontFamily: "'Courier New', monospace", minWidth: 28 }}>{m.num}</span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", flex: 1 }}>{m.title}</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{m.time}</span>
      </div>
    ))}
  </div>
);

const MeetingAgenda = () => (
  <div style={{
    background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)",
    borderRadius: 12, padding: 16, maxWidth: 380, margin: "16px auto",
  }}>
    <div style={{ fontSize: 11, color: "#10b981", fontWeight: 700, letterSpacing: 1, marginBottom: 10, textAlign: "center" }}>
      MONTHLY MEETING AGENDA (90 MIN)
    </div>
    {[
      { time: "0:00", item: "Check-in & updates from coordinator", dur: "10 min" },
      { time: "0:10", item: "Training topic (rotating)", dur: "30 min" },
      { time: "0:40", item: "Volunteer experience sharing", dur: "25 min" },
      { time: "1:05", item: "Resident flags & escalations", dur: "15 min" },
      { time: "1:20", item: "Next month planning & assignments", dur: "10 min" },
    ].map((a, i) => (
      <div key={i} style={{
        display: "flex", gap: 10, padding: "6px 0",
        borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none",
      }}>
        <span style={{ fontSize: 11, color: "#10b981", fontFamily: "'Courier New', monospace", minWidth: 36 }}>{a.time}</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", flex: 1 }}>{a.item}</span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{a.dur}</span>
      </div>
    ))}
  </div>
);

const ActivationFlow = () => (
  <div style={{ maxWidth: 380, margin: "16px auto" }}>
    {[
      { step: "1", text: "Coordinator receives NYC emergency alert", color: "#ef4444" },
      { step: "2", text: "Alert translated into simple Mandarin", color: "#f59e0b" },
      { step: "3", text: "Activation message sent to all volunteers", color: "#3b82f6" },
      { step: "4", text: "Volunteers execute phone calls + door knocks", color: "#10b981" },
      { step: "5", text: "Status reported back to coordinator", color: "#8b5cf6" },
    ].map((s, i) => (
      <div key={i}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
          <span style={{
            width: 28, height: 28, borderRadius: "50%", background: `${s.color}20`,
            color: s.color, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 800, flexShrink: 0,
          }}>{s.step}</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{s.text}</span>
        </div>
        {i < 4 && <div style={{ marginLeft: 13, borderLeft: "2px solid rgba(255,255,255,0.06)", height: 12 }} />}
      </div>
    ))}
  </div>
);

const StatusBoard = () => (
  <div style={{
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 12, padding: 16, maxWidth: 400, margin: "16px auto",
  }}>
    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: 1, marginBottom: 10, textAlign: "center" }}>
      LIVE STATUS BOARD — DRILL EXAMPLE
    </div>
    {[
      { name: "Mrs. Chen — Confucius Plaza", reached: 12, pending: 1, help: 1, color: "#10b981" },
      { name: "David Liu — 65 Bayard St", reached: 9, pending: 2, help: 0, color: "#f59e0b" },
      { name: "Jenny Wu — Chatham Towers", reached: 11, pending: 0, help: 1, color: "#10b981" },
    ].map((v, i) => (
      <div key={i} style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>🐼 {v.name}</div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontSize: 10, background: "rgba(16,185,129,0.15)", color: "#10b981", padding: "3px 8px", borderRadius: 6 }}>
            ✓ {v.reached} reached
          </span>
          {v.pending > 0 && <span style={{ fontSize: 10, background: "rgba(245,158,11,0.15)", color: "#f59e0b", padding: "3px 8px", borderRadius: 6 }}>
            ⏳ {v.pending} pending
          </span>}
          {v.help > 0 && <span style={{ fontSize: 10, background: "rgba(239,68,68,0.15)", color: "#ef4444", padding: "3px 8px", borderRadius: 6 }}>
            🚨 {v.help} needs help
          </span>}
        </div>
      </div>
    ))}
  </div>
);

const Toolkit = () => (
  <div style={{ display: "flex", gap: 10, justifyContent: "center", margin: "16px auto", maxWidth: 420, flexWrap: "wrap" }}>
    {[
      { icon: "🪪", title: "An An Badge", desc: "Worn visibly so residents recognize through peephole" },
      { icon: "🐼", title: "Life Card", desc: "Handed out & explained during visits" },
      { icon: "📝", title: "Check-In Log", desc: "Records each visit, flags concerns" },
    ].map((t, i) => (
      <div key={i} style={{
        flex: "1 1 120px", background: "rgba(232,168,56,0.08)",
        border: "1px solid rgba(232,168,56,0.15)", borderRadius: 10,
        padding: "12px 10px", textAlign: "center",
      }}>
        <div style={{ fontSize: 24 }}>{t.icon}</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#e8a838", marginTop: 4 }}>{t.title}</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2, lineHeight: 1.4 }}>{t.desc}</div>
      </div>
    ))}
  </div>
);

const NetworkSummary = () => (
  <div style={{ maxWidth: 480, margin: "0 auto" }}>
    {[
      { phase: "RECRUIT", icon: "🤝", desc: "Find bilingual volunteers through existing community trust networks", color: "#3b82f6" },
      { phase: "TRAIN", icon: "📚", desc: "Half-day onboarding + monthly meetings + quarterly emergency drills", color: "#8b5cf6" },
      { phase: "OPERATE", icon: "🚪", desc: "Monthly door knock visits build recognition and trust with 10–15 residents per volunteer", color: "#e8a838" },
      { phase: "ACTIVATE", icon: "⚠️", desc: "Coordinator dispatches volunteers for phone calls + door knocks within 30 minutes of alert", color: "#ef4444" },
    ].map((p, i) => (
      <div key={i}>
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          background: `${p.color}0a`, border: `1px solid ${p.color}20`,
          borderRadius: 12, padding: "14px 18px",
        }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>{p.icon}</span>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: p.color, letterSpacing: 1 }}>{p.phase}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginTop: 2 }}>{p.desc}</div>
          </div>
        </div>
        {i < 3 && <div style={{ textAlign: "center", color: "rgba(255,255,255,0.1)", fontSize: 18, padding: "4px 0" }}>↓</div>}
      </div>
    ))}
    <div style={{
      marginTop: 24, textAlign: "center", padding: "18px 20px",
      background: "rgba(232,168,56,0.08)", borderRadius: 14,
      border: "1px solid rgba(232,168,56,0.15)",
    }}>
      <div style={{ fontSize: 28, marginBottom: 6 }}>🐼</div>
      <div style={{ fontSize: 14, color: "#e8a838", fontWeight: 600, lineHeight: 1.6 }}>
        The product isn't an app — it's a trained, trusted human network
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
        通过熟悉建立信任 — Building trust through familiarity
      </div>
    </div>
  </div>
);

export default function AnAnNetworkPrototype() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const phase = PHASES[activePhase];
  const scenes = phase.scenes || [];
  const scene = scenes[activeScene];

  const transition = (fn) => {
    setFadeIn(false);
    setTimeout(() => { fn(); setFadeIn(true); }, 250);
  };

  const next = () => {
    if (scenes.length > 0 && activeScene < scenes.length - 1) {
      transition(() => setActiveScene(activeScene + 1));
    } else if (activePhase < PHASES.length - 1) {
      transition(() => { setActivePhase(activePhase + 1); setActiveScene(0); });
    }
  };

  const prev = () => {
    if (activeScene > 0) {
      transition(() => setActiveScene(activeScene - 1));
    } else if (activePhase > 0) {
      transition(() => {
        const prevPhase = PHASES[activePhase - 1];
        setActivePhase(activePhase - 1);
        setActiveScene(prevPhase.scenes ? prevPhase.scenes.length - 1 : 0);
      });
    }
  };

  const isFirst = activePhase === 0;
  const isLast = activePhase === PHASES.length - 1 && (scenes.length === 0 || activeScene === scenes.length - 1);

  const phaseColors = {
    home: "#e8a838", recruit: "#3b82f6", train: "#8b5cf6",
    operate: "#e8a838", activate: "#ef4444", summary: "#e8a838",
  };
  const accent = phaseColors[phase.id] || "#e8a838";

  return (
    <div style={{
      minHeight: "100vh", background: "#0f1219",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 20, fontFamily: "'Georgia', 'Noto Serif SC', serif",
    }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {PHASES.map((p, i) => (
          <button key={i} onClick={() => transition(() => { setActivePhase(i); setActiveScene(0); })}
            style={{
              width: i === activePhase ? 32 : 10, height: 10, borderRadius: 5, border: "none",
              background: i === activePhase ? accent : "rgba(255,255,255,0.1)",
              cursor: "pointer", transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      <div style={{
        background: "#1a1f2e", borderRadius: 20, maxWidth: 580, width: "100%", overflow: "hidden",
        boxShadow: "0 30px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}>
        {phase.phase && (
          <div style={{
            background: accent, padding: "10px 28px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: 2, fontFamily: "'Trebuchet MS', sans-serif" }}>{phase.phase}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{phase.zhPhase}</span>
          </div>
        )}

        <div style={{ padding: "32px 28px", opacity: fadeIn ? 1 : 0, transition: "opacity 0.25s ease" }}>
          {phase.id === "home" && (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <div style={{ fontSize: 72, marginBottom: 16, filter: "drop-shadow(0 4px 24px rgba(232,168,56,0.3))" }}>🐼</div>
              <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", margin: "0 0 6px 0", letterSpacing: 2 }}>{phase.title}</h1>
              <p style={{ fontSize: 16, color: "#e8a838", margin: "0 0 4px 0", fontWeight: 500 }}>{phase.subtitle}</p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", margin: "0 0 4px 0" }}>{phase.zhSubtitle}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", margin: "12px auto 30px", maxWidth: 400, lineHeight: 1.6 }}>{phase.tagline}</p>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: 1, fontFamily: "'Trebuchet MS', sans-serif" }}>
                TAP NEXT TO SEE THE OPERATIONS →
              </div>
            </div>
          )}

          {scene && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <span style={{ fontSize: 48 }}>{scene.visual}</span>
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 4px 0", textAlign: "center" }}>{scene.heading}</h2>
              <p style={{ fontSize: 13, color: accent, textAlign: "center", margin: "0 0 18px 0", fontWeight: 500 }}>{scene.zhHeading}</p>
              <p style={{
                fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: 0, textAlign: "center",
                fontFamily: "'Segoe UI', 'PingFang SC', sans-serif",
              }}>{scene.text}</p>

              {scene.showRecruitCards && <RecruitCards />}
              {scene.showTerritoryMap && <TerritoryMap />}
              {scene.showTrainingModules && <TrainingModules />}
              {scene.showMeetingAgenda && <MeetingAgenda />}
              {scene.showToolkit && <Toolkit />}
              {scene.showActivationFlow && <ActivationFlow />}
              {scene.showStatusBoard && <StatusBoard />}

              {scenes.length > 1 && (
                <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
                  {scenes.map((_, i) => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: i === activeScene ? accent : "rgba(255,255,255,0.12)",
                    }} />
                  ))}
                </div>
              )}
            </div>
          )}

          {phase.id === "summary" && <NetworkSummary />}
        </div>

        <div style={{ padding: "0 28px 24px", display: "flex", justifyContent: "space-between" }}>
          {!isFirst ? (
            <button onClick={prev} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.5)", padding: "10px 20px", borderRadius: 10, fontSize: 13, cursor: "pointer", fontFamily: "inherit",
            }}>← Back</button>
          ) : <div />}
          {!isLast && (
            <button onClick={next} style={{
              background: accent, border: "none",
              color: phase.id === "home" ? "#1a1f2e" : "#fff",
              padding: "10px 24px", borderRadius: 10, fontSize: 13, fontWeight: 700,
              cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 16px ${accent}44`,
            }}>
              {phase.id === "home" ? "See Operations →" : "Next →"}
            </button>
          )}
        </div>
      </div>

      <div style={{ marginTop: 20, fontSize: 11, color: "rgba(255,255,255,0.2)", textAlign: "center", fontFamily: "'Trebuchet MS', sans-serif" }}>
        AN AN VOLUNTEER NETWORK — CONCEPT PROTOTYPE
      </div>
    </div>
  );
}
