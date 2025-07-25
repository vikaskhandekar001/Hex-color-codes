// lib/colorUtils.ts

export function hexToRGB(hex: string) {
    const cleanHex = hex?.replace("#", "");
    const bigint = parseInt(cleanHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  
  export function hexToHSL(hex: string) {
    const { r, g, b } = hexToRGB(hex);
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
  
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h = 0,
      s = 0,
      l = (max + min) / 2;
  
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case rNorm:
          h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
          break;
        case gNorm:
          h = (bNorm - rNorm) / d + 2;
          break;
        case bNorm:
          h = (rNorm - gNorm) / d + 4;
          break;
      }
  
      h *= 60;
    }
  
    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
  }
  