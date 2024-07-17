import { vars } from '@headless-web-builder/themes'

export const convertSpacingRemToPx = (spacing: keyof typeof vars.box.spacing): number => {
  const remSpacing = vars.box.spacing?.[spacing] ?? '1rem';

  return parseInt(remSpacing.replace('rem', '') * 16);
}
