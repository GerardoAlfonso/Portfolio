import { useEffect, useState } from 'react'
import {
  capabilities,
  experience,
  learningHighlights,
  profile,
  siteCopy,
  workCases,
  type Language,
  type LocalizedText,
  type WorkCase,
} from './data'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16">
      <path d="M8 5h-3v10h10v-3M10 4h6v6M16 4l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

function LanguageSwitcher({ language, onChange, label }: { language: Language; onChange: (language: Language) => void; label: string }) {
  return (
    <div className="language-switcher">
      <label className="sr-only" htmlFor="site-language">{label}</label>
      <select
        id="site-language"
        value={language}
        onChange={(event) => onChange(event.target.value as Language)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  )
}

function DataFlow({ language }: { language: Language }) {
  const t = (text: LocalizedText) => text[language]

  return (
    <figure className="data-flow" aria-label={t(siteCopy.flow.ariaLabel)}>
      <div className="data-flow__topline">
        <span>{t(siteCopy.flow.eyebrow)}</span>
        <span className="flow-principle"><i /> {t(siteCopy.flow.principle)}</span>
      </div>

      <div className="flow-stage flow-stage--sources">
        <span className="flow-label">{t(siteCopy.flow.sourcesLabel)}</span>
        <div className="source-row">
          {siteCopy.flow.sources.map((source) => (
            <div className="source-node" key={source.code}>
              <i>{source.code}</i>
              <span>{source[language]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flow-rail" aria-hidden="true"><span className="flow-dot" /></div>

      <div className="transform-node">
        <div>
          <span className="flow-label">{t(siteCopy.flow.platformLabel)}</span>
          <strong>{t(siteCopy.flow.platform)}</strong>
        </div>
        <code>{t(siteCopy.flow.platformNote)}</code>
      </div>

      <div className="flow-rail flow-rail--short" aria-hidden="true"><span className="flow-dot flow-dot--two" /></div>

      <div className="warehouse-node">
        <span className="warehouse-icon" aria-hidden="true"><i /><i /><i /></span>
        <div>
          <span className="flow-label">{t(siteCopy.flow.outcomesLabel)}</span>
          <strong>{t(siteCopy.flow.outcomes)}</strong>
        </div>
        <span className="outcomes-note">{t(siteCopy.flow.outcomesNote)}</span>
      </div>

      <figcaption>
        {siteCopy.flow.stages.map((stage, index) => (
          <span key={stage.en}><b>0{index + 1}</b>{t(stage)}</span>
        ))}
      </figcaption>
    </figure>
  )
}

function WorkCard({ workCase, index, language }: { workCase: WorkCase; index: number; language: Language }) {
  const t = (text: LocalizedText) => text[language]
  const fields = [
    [siteCopy.work.fields.context, workCase.context],
    [siteCopy.work.fields.contribution, workCase.contribution],
    [siteCopy.work.fields.approach, workCase.approach],
    [siteCopy.work.fields.result, workCase.result],
    [siteCopy.work.fields.evidence, workCase.evidence],
  ] as const

  return (
    <article className={`project-card project-card--${workCase.kind}`}>
      <div className="project-card__number">0{index + 1}</div>
      <div className="project-card__body">
        <div className="project-card__intro">
          <div className="project-card__meta">
            <p className="project-label">{t(workCase.category)}</p>
            <span>{t(workCase.status)}</span>
          </div>
          <h3>{t(workCase.title)}</h3>
          <p className="project-summary">{t(workCase.summary)}</p>
          {(workCase.demoUrl || workCase.sourceUrl) && (
            <div className="project-card__actions">
              {workCase.demoUrl && (
                <a className="button button--primary" href={workCase.demoUrl} target="_blank" rel="noopener noreferrer">
                  {t(siteCopy.work.actions.demo)} <ExternalIcon />
                </a>
              )}
              {workCase.sourceUrl && (
                <a className="button button--ghost" href={workCase.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {t(workCase.sourceLabel ?? siteCopy.work.actions.source)} <ExternalIcon />
                </a>
              )}
            </div>
          )}
        </div>

        <dl className="case-study">
          {fields.map(([label, value], fieldIndex) => (
            <div className={fieldIndex === 4 ? 'case-study__evidence' : ''} key={label.en}>
              <dt>{t(label)}</dt>
              <dd>{t(value)}</dd>
            </div>
          ))}
        </dl>

        <ul className="tag-list" aria-label={t(siteCopy.accessibility.technologies)}>
          {workCase.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  )
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  return window.sessionStorage.getItem(LANGUAGE_STORAGE_KEY) === 'es' ? 'es' : 'en'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const t = (text: LocalizedText) => text[language]

  useEffect(() => {
    window.sessionStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
    document.title = t(siteCopy.meta.title)
    document.querySelector('meta[name="description"]')?.setAttribute('content', t(siteCopy.meta.description))
  }, [language])

  return (
    <>
      <a className="skip-link" href="#main-content">{t(siteCopy.accessibility.skip)}</a>

      <header className="site-header">
        <nav className="nav container" aria-label={t(siteCopy.navigation.label)}>
          <a className="brand" href="#top" aria-label={`${profile.name}, ${t(siteCopy.navigation.home)}`}>
            <span>GA</span>
            <strong>{profile.name}</strong>
          </a>
          <div className="nav__links">
            <a href="#expertise">{t(siteCopy.navigation.expertise)}</a>
            <a href="#projects">{t(siteCopy.navigation.work)}</a>
            <a href="#experience">{t(siteCopy.navigation.experience)}</a>
            <a href="#contact">{t(siteCopy.navigation.contact)}</a>
          </div>
          <div className="nav__actions">
            <LanguageSwitcher language={language} onChange={setLanguage} label={t(siteCopy.navigation.language)} />
            <a className="nav__contact" href={`mailto:${profile.email}`}>{t(siteCopy.contact.action)} <ArrowIcon /></a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero container" id="top">
          <div className="hero__copy">
            <div className="positioning-badge"><span>DE</span>{t(siteCopy.hero.badge)}</div>
            <p className="hero__role">{t(profile.role)} · {t(profile.location)}</p>
            <h1>{t(siteCopy.hero.headlineLead)} <span>{t(siteCopy.hero.headlineAccent)}</span></h1>
            <p className="hero__intro">{t(siteCopy.hero.introduction)}</p>

            <ol className="progression" aria-label={t(siteCopy.hero.pathLabel)}>
              {siteCopy.hero.path.map((item) => <li key={item.en}>{t(item)}</li>)}
            </ol>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">{t(siteCopy.hero.primaryAction)} <ArrowIcon /></a>
              <a className="button button--ghost" href={`mailto:${profile.email}`}>{t(siteCopy.hero.secondaryAction)}</a>
            </div>
            <ul className="hero__proof" aria-label={t(siteCopy.accessibility.highlights)}>
              {siteCopy.hero.proof.map((item) => (
                <li key={item.value}><strong>{item.value}</strong><span>{t(item.label)}</span></li>
              ))}
            </ul>
          </div>
          <DataFlow language={language} />
        </section>

        <section className="section container" id="expertise">
          <SectionHeading
            eyebrow={t(siteCopy.expertise.eyebrow)}
            title={t(siteCopy.expertise.title)}
            description={t(siteCopy.expertise.description)}
          />
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <div className="capability-card__topline">
                  <span className="capability-card__number">{capability.number}</span>
                  {capability.status && <span className="status-pill">{t(capability.status)}</span>}
                </div>
                <h3>{t(capability.title)}</h3>
                <p>{t(capability.description)}</p>
                <ul className="tool-list" aria-label={t(siteCopy.accessibility.technologies)}>
                  {capability.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--projects" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow={t(siteCopy.work.eyebrow)}
              title={t(siteCopy.work.title)}
              description={t(siteCopy.work.description)}
            />
            <div className="project-list">
              {workCases.map((workCase, index) => (
                <WorkCard key={workCase.title.en} workCase={workCase} index={index} language={language} />
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionHeading
            eyebrow={t(siteCopy.experience.eyebrow)}
            title={t(siteCopy.experience.title)}
            description={t(siteCopy.experience.description)}
          />
          <div className="experience-layout">
            <div>
              <div className="timeline">
                {experience.map((item) => (
                  <article className="timeline__item" key={`${item.period.en}-${item.role.en}`}>
                    <p>{t(item.period)}</p>
                    <div>
                      <h3>{t(item.role)}</h3>
                      <span>{item.company}</span>
                      <p className="timeline__summary">{t(item.summary)}</p>
                      <ul>
                        {item.details.map((detail) => <li key={detail.en}>{t(detail)}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <section className="learning" aria-labelledby="learning-title">
                <p className="eyebrow">{t(siteCopy.experience.learningEyebrow)}</p>
                <h3 id="learning-title">{t(siteCopy.experience.learningTitle)}</h3>
                <div className="learning-grid">
                  {learningHighlights.map((item) => (
                    <article key={item.code}>
                      <span>{item.code}</span>
                      <div>
                        <strong>{t(item.title)}</strong>
                        <p>{t(item.detail)}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="contact-card" id="contact" aria-labelledby="contact-title">
              <span className="contact-card__mark">{`{ DE → AI }`}</span>
              <div>
                <p className="eyebrow">{t(siteCopy.contact.eyebrow)}</p>
                <h2 id="contact-title">{t(siteCopy.contact.title)}</h2>
                <p>{t(siteCopy.contact.body)}</p>
              </div>
              <a className="button button--primary" href={`mailto:${profile.email}`}>{t(siteCopy.contact.action)} <ArrowIcon /></a>
              <div className="social-links">
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
                <a href={`mailto:${profile.email}`}>{t(siteCopy.contact.email)} <ArrowIcon /></a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>{t(siteCopy.footer.statement)}</p>
          <a href="#top">{t(siteCopy.footer.top)} <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  )
}

export default App
