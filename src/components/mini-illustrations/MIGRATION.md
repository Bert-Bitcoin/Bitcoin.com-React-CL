# Mini Illustrations - Duplicate Name Resolution

## Issue Fixed

The generation script was creating duplicate component names because multiple SVG files had similar names after cleaning (e.g., "Coin_.svg" and "Coin books.svg" both became "CoinIllustration").

## Solution

The generation script now:

1. **Preserves underscores as "Underscore"** in component names to maintain uniqueness
   - Example: "Coin_.svg" → `CoinUnderscoreIllustration`
   - Example: "Bitcoin _.svg" → `BitcoinUnderscoreIllustration`

2. **Handles remaining duplicates** by appending a number
   - If "Bitcoin.svg" and "Bitcoin ATM.svg" both cleaned to "BitcoinIllustration", the second would become `Bitcoin2Illustration`
   - In practice, full names are preserved, so this is rarely needed

3. **Tracks used names** to ensure no export conflicts

## Example Transformations

| SVG Filename | Component Name |
|--------------|----------------|
| `mini-illustration-Coin_.svg` | `CoinUnderscoreIllustration` |
| `mini-illustration-Coin books.svg` | `CoinBooksIllustration` |
| `mini-illustration-Bitcoin _.svg` | `BitcoinUnderscoreIllustration` |
| `mini-illustration-Bitcoin ATM.svg` | `BitcoinATMIllustration` |
| `mini-illustration-% _.svg` | `UnderscoreIllustration` |

## Regenerating After Updates

If you add new SVG files or encounter naming conflicts:

```bash
npm run illustrations:generate
```

The script will automatically handle duplicates and maintain unique component names.

## Previously Conflicting Names (Now Resolved)

- ✅ **Bitcoin** variants - All unique now (BitcoinATM, BitcoinBolt, etc.)
- ✅ **Coin** variants - All unique now (CoinUnderscore, CoinBooks, etc.)
- ✅ **Ethereum** variants - All unique now
- ✅ **Verse** variants - All unique now

All 202 illustrations now have unique component names with no export conflicts.

