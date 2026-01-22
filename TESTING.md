# Testing Instructions

## How to Test the Button

1. **Open the app**: http://localhost:5174/

2. **Fill in the form**:
   - **Market**: Type "Nairobi" and select "Nairobi City Market" from dropdown
   - **Crop**: Select any crop (e.g., "Maize (bag 90kg)")
   - **Quantity**: Enter a number like 10

3. **Click "Get Selling Recommendation"**

4. **Check the console** (Press F12 → Console tab):
   - You should see logs showing form submission
   - After 1.5 seconds, you should see the recommendation

5. **Expected behavior**:
   - Loading spinner appears
   - After 1.5 seconds, recommendation displays with:
     - Action (Sell Now / Wait / Sell Elsewhere)
     - Price chart
     - Market comparisons
     - AI reasoning

## Troubleshooting

### Button is disabled (greyed out)
- Make sure you selected a market from the dropdown (not just typed)
- Make sure you selected a crop
- Quantity must be > 0

### Button does nothing
1. Open browser console (F12)
2. Check for errors
3. Look for "Form submitted:" log
4. If you see the log, the button is working

### Common Issues

**Issue**: Dropdown doesn't show markets
- **Fix**: Type at least one character (e.g., "N" for Nairobi)

**Issue**: Market not selected even though I clicked
- **Fix**: Make sure to click on the dropdown item, not just press Enter

**Issue**: Page is blank
- **Fix**: Check terminal for errors, refresh the page

## Debug Mode

The app now has console logging enabled. Check these logs:
- `Form validation:` - Shows form state before submission
- `Calling onSubmit with:` - Confirms button click
- `Form submitted:` - Confirms App received the data
- `Recommendation generated:` - Shows AI result

## Next Steps: Enable Real AI

Once the button works with local AI, follow `RAXCORE_AI_INTEGRATION.md` to:
1. Get Raxcore AI credentials
2. Update `.env.local`
3. Switch from local AI to Raxcore AI API
