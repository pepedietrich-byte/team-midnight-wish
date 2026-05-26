# 📁 Asset Placement Guide — Team Midnight Wish

Place your image files in the exact paths below.
All paths are relative to `/static/`.

---

## Required Files

### /static/assets/mascot/
| Filename              | Source           | Notes                                      |
|-----------------------|------------------|--------------------------------------------|
| `umbreon-cosmic.jpg`  | Asset 07         | Hero + Showcase centerpiece. Portrait art. |
| `umbreon-rings.gif`   | Asset 04         | Atmospheric background layers site-wide.   |
| `umbreon-eye.gif`     | Asset 08         | Subtle dark-atmosphere accent. Looping.    |
| `eeveelutions-group.png` | Asset 05      | About section team visual.                 |

### /static/assets/sprites/
| Filename              | Source           | Notes                                         |
|-----------------------|------------------|-----------------------------------------------|
| `umbreon-sprite.png`  | Asset 01         | Nav logo + Footer accent. Uses screen blend.  |
| `lugia-sprite.png`    | Asset 02         | PvP section bg decoration. Low opacity.       |
| `mew-sprite.png`      | Asset 03         | Events + Values floating decoration.          |
| `umbreon-shiny.png`   | Asset 06         | PvP section mascot. Blue-ring Umbreon.        |

---

## Blend Mode Notes

- `umbreon-sprite.png` — has dark background → uses `mix-blend-mode: screen`
- `umbreon-rings.gif`  — pure black bg → uses `mix-blend-mode: screen`
- `umbreon-eye.gif`    — dark bg → uses `mix-blend-mode: screen`
- `lugia-sprite.png`   — white bg sprite → displayed on dark containers
- `mew-sprite.png`     — white bg sprite → displayed on dark containers
- `eeveelutions-group.png` — white bg → displayed inside dark card

---

## Favicon
Place a 32×32 or 64×64 PNG at:
`/static/favicon.png`

Recommend using a cropped Umbreon ring icon.