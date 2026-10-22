'use client';

import { useState } from 'react';
import { skillCategories } from '@/data/site';

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((category) => category.id === active) ?? skillCategories[0];

  return (
    <div className="skills">
      <div className="skill-tabs" role="tablist" aria-label="Tech stack categories">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={active === category.id}
            className={`skill-tab${active === category.id ? ' is-active' : ''}`}
            onClick={() => setActive(category.id)}
          >
            {category.title}
            <span className="skill-count">{category.skills.length}</span>
          </button>
        ))}
      </div>

      <div className="skill-panel" role="tabpanel">
        {current.skills.map((skill) => (
          <div className="skill-pill" key={skill.name}>
            {skill.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={skill.logo} alt="" width={22} height={22} loading="lazy" />
            ) : (
              <span className="skill-glyph" aria-hidden="true">
                {skill.name.slice(0, 1)}
              </span>
            )}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
