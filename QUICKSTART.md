# 🚀 Quick Start Guide

## Current Status: ✅ WORKING

The "Get Selling Recommendation" button is now fully functional!

## How to Use (RIGHT NOW)

1. **Open**: http://localhost:5174/
2. **Fill the form**:
   - Type "Nairobi" → Select "Nairobi City Market"
   - Choose crop: "Maize (bag 90kg)"
   - Enter quantity: 10
3. **Click**: "Get Selling Recommendation"
4. **See**: AI recommendation with charts and market analysis!

## What's Working

✅ Form validation
✅ Market autocomplete search
✅ Local AI recommendations
✅ Price forecasting
✅ Market comparisons
✅ Transport cost calculations
✅ 30-day price charts
✅ Console debugging logs

## AI Provider Options

### 💻 Local AI (Current - DEFAULT)
- ✅ Works immediately
- ✅ No API setup needed
- Uses built-in algorithms:
  - Linear regression for price prediction
  - Moving averages for trends
  - Distance & transport calculations

### 🤖 Raxcore AI (Ready to Configure)
- 🔄 Needs API setup
- See `RAXCORE_AI_INTEGRATION.md` for instructions
- Toggle in the header once configured

## Debugging

Open browser console (F12) to see:
```
✓ Form validation: {...}
✓ Calling onSubmit with: {...}
✓ Form submitted: {...}
💻 Using Local AI...
✓ Recommendation generated: {...}
```

## What You Get

The recommendation includes:
- **Action**: Sell Now / Wait / Sell Elsewhere
- **Confidence**: 30-95%
- **AI Reasoning**: Why this recommendation
- **Price Chart**: 30-day history
- **Price Forecast**: 7 & 14 days ahead
- **Market Comparison**: Up to 3 alternative markets
- **Transport Costs**: Distance-based calculations
- **Net Profit**: Revenue after transport

## Next Steps

### To Enable Raxcore AI:

1. **Get API Key**:
   - Visit Raxcore AI website
   - Sign up / Create project
   - Copy API key

2. **Configure**:
   ```bash
   # Create .env.local
   cp .env.example .env.local
   
   # Edit .env.local
   VITE_RAXCORE_AI_KEY=your_actual_key_here
   ```

3. **Restart**:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

4. **Toggle**: Click "🤖 Raxcore AI" in the header

### To Deploy:

```bash
# Build
npm run build

# Preview
npm run preview

# Deploy to Vercel/Netlify
# Set environment variables in hosting dashboard
```

## Troubleshooting

**Button disabled?**
- Select market from dropdown (click, don't just type)
- Select a crop
- Quantity > 0

**No recommendation showing?**
- Check console for errors
- Refresh page
- Clear browser cache

**Blank page?**
- Check terminal for errors
- Run: `npm run dev`
- Check http://localhost:5174/

## Support Files

- `TESTING.md` - Detailed testing instructions
- `RAXCORE_AI_INTEGRATION.md` - AI setup guide
- `PROJECT_README.md` - Full documentation
- `.env.example` - Environment template

## Demo Markets

Try these markets:
- Nairobi City Market
- Gikomba Market
- Eldoret Market
- Nakuru Municipal Market
- Kisumu Jubilee Market

## Demo Crops

All with proper units:
- Maize (bag 90kg)
- Beans (bag 90kg)
- Potatoes (bag 110kg)
- Tomatoes (crate 22kg)
- Cabbage (piece)
- Onions (bag 50kg)

---

**Everything is working! Start using it now!** 🎉
