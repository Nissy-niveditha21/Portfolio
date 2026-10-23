'use client';

import { useEffect, useState } from 'react';
import type { CodingProfile } from '@/data/site';
import { ArrowUpRight } from './icons';

type CodingCardProps = {
  profile: CodingProfile;
  /** Screenshot of the account page, or null when it has not been captured yet. */
  shot: string | null;
  /** Position in the row — used to stagger the rotation so cards flip one after another. */
  index: number;
};

const FLIP_HOLD_MS = 5200;
const STAGGER_MS = 900;

/**
 * Flash card that flips between the live stats and a screenshot of the account page.
 * Cards rotate on a staggered timer so the row flips in sequence; hovering flips
 * a single card on demand. Motion is skipped entirely for reduced-motion users.
 */
export default function CodingCard({ profile, shot, index }: CodingCardProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!shot) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: number | undefined;
    const delay = window.setTimeout(() => {
      setFlipped(true);
      timer = window.setInterval(() => setFlipped((value) => !value), FLIP_HOLD_MS);
    }, 900 + index * STAGGER_MS);

    return () => {
      window.clearTimeout(delay);
      if (timer !== undefined) window.clearInterval(timer);
    };
  }, [shot, index]);

  return (
    <a
      className={`flip-card${flipped ? ' is-flipped' : ''}`}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${profile.name} profile — ${profile.metric} ${profile.metricLabel}`}
    >
      <span className="flip-inner">
        <span className="flip-face flip-front">
          <span className="code-card-top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.logo} alt="" width={28} height={28} loading="lazy" />
            <span className="code-brand">
              <strong>{profile.name}</strong>
              <span>{profile.handle}</span>
            </span>
            <ArrowUpRight className="icon code-open" />
          </span>

          <span className="code-mid">
            <span className="code-tag">{profile.tag}</span>
            <span className="code-hero">
              <span className="code-hero-value">{profile.metric}</span>
              <span className="code-hero-label">{profile.metricLabel}</span>
            </span>
          </span>

          <span className="code-stats">
            {profile.stats.map((stat) => (
              <span className="code-stat" key={stat.label}>
                <b>{stat.value}</b>
                <i>{stat.label}</i>
              </span>
            ))}
          </span>
        </span>

        {shot ? (
          <span className="flip-face flip-back">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot}
              alt={`Screenshot of the ${profile.name} profile page`}
              width={1440}
              height={810}
              loading="lazy"
              decoding="async"
            />
            <span className="flip-caption">
              {profile.handle}
              <ArrowUpRight className="icon" />
            </span>
          </span>
        ) : null}
      </span>
    </a>
  );
}
