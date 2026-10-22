import ScoreTable from "./ScoreTable";
import ThemeToggle from "./ThemeToggle";
import {
  TOP_ROLES,
  joinFormUrl,
  members,
  perks,
  pillars,
  projects,
  scores,
  stats,
  texts,
  type Member,
} from "./data";

const nav = [
  ["#about", "Бидний тухай"],
  ["#branches", "Салбар зөвлөл"],
  ["#activity", "Үйл ажиллагаа"],
  ["#team", "Удирдлага"],
  ["#scores", "Оноо"],
  ["#join", "Нэгдэх"],
  ["#contact", "Холбоо барих"],
];

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="8" r="4.2" />
      <path d="M3.5 21c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5z" />
    </svg>
  );
}

function MemberCard({ m, big }: { m: Member; big?: boolean }) {
  return (
    <figure className={big ? "m big" : "m"}>
      <div className="ph">{m.photo ? <img src={m.photo} alt="" /> : <PersonIcon />}</div>
      <figcaption>
        <b className={m.name ? "nm" : "nm empty"} data-ph="Нэр удахгүй нэмэгдэнэ">
          {m.name}
        </b>
        <span>{m.role}</span>
      </figcaption>
    </figure>
  );
}

function Roster() {
  const top = members.filter((m) => TOP_ROLES.includes(m.role));
  const groups = new Map<string, Member[]>();
  for (const m of members) {
    if (TOP_ROLES.includes(m.role)) continue;
    groups.set(m.role, [...(groups.get(m.role) ?? []), m]);
  }

  return (
    <div>
      {top.length > 0 && (
        <>
          <h3 className="g">Тэргүүлэгчид</h3>
          <div className="roster">
            {top.map((m) => (
              <MemberCard key={m.id} m={m} big />
            ))}
          </div>
        </>
      )}
      {[...groups].map(([role, list]) => (
        <div key={role}>
          <h3 className="g">
            {role} <small>{list.length}</small>
          </h3>
          <div className="roster">
            {list.map((m) => (
              <MemberCard key={m.id} m={m} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap bar">
          <a className="logo" href="#top" aria-label="SDS - Social Democratic Student">
            <img className="ld" src="/logo-light.png" alt="SDS Social Democratic Student" />
            <img className="dd" src="/logo-dark.png" alt="" />
          </a>
          <nav aria-label="Үндсэн цэс">
            {nav.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        <div className="heroband">
          <div className="wrap hero">
            <p className="kick">{texts.kick}</p>
            <h1>{texts.h1}</h1>
            <p className="slogan">{texts.slogan}</p>
            <p>{texts.lead}</p>
            <a className="btn" href="#join">
              Холбоонд нэгдэх
            </a>
            <a className="btn ghost" href="#team">
              Удирдлага
            </a>
          </div>
        </div>

        <div className="stats">
          <div className="wrap">
            {stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section id="about">
          <div className="wrap two">
            <div>
              <h2>Бидний тухай</h2>
              <p>{texts.about1}</p>
              <p>{texts.about2}</p>
            </div>
            <ul className="pillars">
              {pillars.map((p) => (
                <li key={p.title}>
                  <b>{p.title}</b>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="branches" className="alt">
          <div className="wrap">
            <h2>Салбар зөвлөл</h2>
            <p className="sub">
              Манай холбоо Монгол Улсын бүх бүс нутаг болон гадаад орнуудад салбар зөвлөлтэй.
            </p>
            <div className="map">
              <div className="box">
                <h3>Монгол Улсад</h3>
                <p>Орон нутаг, нийслэлийн оюутнуудтай ойр ажиллана.</p>
                <ul className="tags">
                  <li>21 аймаг</li>
                  <li>9 дүүрэг</li>
                </ul>
              </div>
              <div className="box">
                <h3>Гадаад улсад</h3>
                <p>Гадаадад суралцаж буй монгол оюутнуудыг холбоно.</p>
                <ul className="tags">
                  <li>Хятад</li>
                  <li>Орос</li>
                  <li>Солонгос</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="activity">
          <div className="wrap">
            <h2>Үйл ажиллагаа</h2>
            <p className="sub">Одоо хэрэгжүүлж буй ажлууд</p>
            <div id="projects">
              {projects.length === 0 && <p className="sub">Одоогоор мэдээлэл оруулаагүй байна.</p>}
              {projects.map((p) => (
                <article key={p.id} className="proj">
                  {p.images.length > 0 && (
                    <div
                      className="imgs"
                      style={{ "--n": Math.min(3, p.images.length) } as React.CSSProperties}
                    >
                      {p.images.slice(0, 3).map((src) => (
                        <div key={src}>
                          <img src={src} alt="" />
                        </div>
                      ))}
                    </div>
                  )}
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  {p.lead && (
                    <div className="ppl">
                      <b>Ахлагч:</b> {p.lead}
                    </div>
                  )}
                  {p.members.length > 0 && (
                    <div className="ppl">
                      <b>Ажлын хэсэг:</b>
                      <div className="chips">
                        {p.members.map((x) => (
                          <span key={x}>{x}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="alt">
          <div className="wrap">
            <h2>Удирдлагын бүтэц</h2>
            <p className="sub">{texts.team_p}</p>
            <Roster />
          </div>
        </section>

        <section id="scores">
          <div className="wrap">
            <h2>Дотоод оноожуулалт</h2>
            <p className="sub">Удирдлагын багийн гишүүдийн улирлын оноо</p>
            <ScoreTable members={members} scores={scores} />
          </div>
        </section>

        <section id="join" className="join">
          <div className="wrap">
            <h2>Холбоонд нэгдээрэй</h2>
            <p>
              СДМОХ нь 21 аймаг, нийслэлийн 9 дүүргийн салбар холбоондоо идэвх санаачилгатай,
              хариуцлагатай, багаар ажиллах чадвартай, оюутан залуучуудын хөгжилд хувь нэмэр
              оруулах хүсэлтэй шинэ гишүүдийг урьж байна.
            </p>
            <p>
              <b>Салбар холбооны гишүүн болсноор:</b>
            </p>
            <div className="perks">
              {perks.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
            <p>
              Та хаана сурч, амьдарч байгаагаас үл хамааран өөрийн орон нутаг, дүүрэгтээ эерэг
              өөрчлөлт бүтээх хүсэлтэй бол салбар холбооны гишүүнээр элсэх боломжтой.
            </p>
            <p className="end">Өнөөдөр нэгдэж, маргаашийн өөрчлөлтийг хамтдаа бүтээцгээе!</p>
            <a className="btn" href={joinFormUrl} target="_blank" rel="noopener">
              Элсэх хүсэлт илгээх
            </a>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Холбоо барих</h2>
            <dl>
              <dt>Хаяг</dt>
              <dd>
                <span>{texts.addr}</span>
                <br />
                <a
                  href="https://www.google.com/maps?q=47.918686,106.921455"
                  target="_blank"
                  rel="noopener"
                >
                  Газрын зураг дээр харах →
                </a>
              </dd>
              <dt>Instagram</dt>
              <dd>
                <a href="https://www.instagram.com/sdsmongolia" target="_blank" rel="noopener">
                  @sdsmongolia
                </a>
              </dd>
              <dt>Facebook</dt>
              <dd>SDS</dd>
            </dl>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © {new Date().getFullYear()} Социал Демократ Монголын Оюутны Холбоо. Бүх эрх хуулиар
          хамгаалагдсан.
        </div>
      </footer>
    </>
  );
}
