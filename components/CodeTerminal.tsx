'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { aboutCode, aboutCodeText } from '@/data/site';
import { CheckIcon, CopyIcon } from './icons';

export default function CodeTerminal() {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(aboutCodeText);
      } else {
        const area = document.createElement('textarea');
        area.value = aboutCodeText;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
      }
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <div className="terminal">
      <div className="window-bar">
        <span className="window-dots">
          <i className="dot dot-red" />
          <i className="dot dot-amber" />
          <i className="dot dot-green" />
        </span>
        <span className="window-file">about.py</span>
        <button
          type="button"
          className={`copy-btn${copied ? ' is-copied' : ''}`}
          onClick={copy}
          aria-label={copied ? 'Copied' : 'Copy about.py'}
        >
          {copied ? <CheckIcon className="icon" /> : <CopyIcon className="icon" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <pre className="terminal-body">
        <code>
          {aboutCode.map((line, index) => (
            <span className="code-line" key={index}>
              <span className="code-gutter">{index + 1}</span>
              <span className="code-content">
                {line.map((token, tokenIndex) =>
                  token.k === 'p' ? (
                    <span key={tokenIndex}>{token.v}</span>
                  ) : (
                    <span className={`tok tok-${token.k}`} key={tokenIndex}>
                      {token.v}
                    </span>
                  )
                )}
                {line.length === 0 ? ' ' : null}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
