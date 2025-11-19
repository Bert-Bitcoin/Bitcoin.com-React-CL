import type { CSSProperties } from 'react';

import type { TextStyleToken } from '../../tokens';
import { designTokens } from '../../tokens';

const FIGMA_FILE_URL =
  'https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?t=fCYrU0ejGmjVXf4L-1';

const FIGMA_STYLE_LINKS: Record<string, string> = {
  'display-xl': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'heading-xl': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'heading-lg': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'heading-md': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'heading-sm': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'body-lg': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  body: `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'body-sm': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'label-lg': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  label: `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'label-sm': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  caption: `${FIGMA_FILE_URL}&node-id=6100-22058`,
  button: `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'numeric-lg': `${FIGMA_FILE_URL}&node-id=6100-22058`,
  numeric: `${FIGMA_FILE_URL}&node-id=6100-22058`,
  'numeric-sm': `${FIGMA_FILE_URL}&node-id=6100-22058`
};

const SAMPLE_TEXT = 'The quick brown fox jumps over the lazy dog.';

const toInlineStyle = (token: TextStyleToken): CSSProperties => {
  const style: CSSProperties = {
    fontFamily: token.fontFamily,
    fontSize: token.fontSize,
    fontWeight: token.fontWeight as CSSProperties['fontWeight'],
    lineHeight: token.lineHeight
  };

  if (token.letterSpacing) {
    style.letterSpacing = token.letterSpacing;
  }

  if (token.textTransform) {
    style.textTransform = token.textTransform;
  }

  return style;
};

const formatMeta = (token: TextStyleToken) => {
  const details = [
    token.fontFamily,
    `${token.fontSize}/${token.lineHeight}`,
    `weight ${token.fontWeight}`
  ];

  if (token.letterSpacing) {
    details.push(`tracking ${token.letterSpacing}`);
  }

  if (token.textTransform && token.textTransform !== 'none') {
    details.push(`transform ${token.textTransform}`);
  }

  return details.join(' • ');
};

export const TypographyShowcase = () => {
  const entries = Object.entries(designTokens.typography.textStyles);

  return (
    <div className="flex flex-col gap-m">
      {entries.map(([name, token]) => {
        const link = FIGMA_STYLE_LINKS[name];
        return (
          <div
            key={name}
            className="rounded-lg border border-shades-extra-light bg-shades-white p-m"
          >
            <div className="flex items-center justify-between gap-s">
              <p className="text-label-sm font-medium uppercase text-shades-mid">
                {name}
              </p>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-label-sm font-medium text-primary-100 hover:text-primary-50"
                >
                  View in Figma
                </a>
              ) : null}
            </div>
            <p style={toInlineStyle(token)} className="text-shades-extra-dark">
              {SAMPLE_TEXT}
            </p>
            <p className="mt-xs text-label-sm text-shades-semi-dark">
              {formatMeta(token)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

TypographyShowcase.displayName = 'TypographyShowcase';


