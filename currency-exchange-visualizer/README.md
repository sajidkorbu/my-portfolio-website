# 💱 Currency Exchange Visualizer

A unique, interactive web application that visualizes live exchange rates in beautiful, dynamic charts. Built with Streamlit and Plotly, this app provides an engaging way to explore currency conversions with real-time data.

## ✨ Features

- **Live Exchange Rates**: Fetches real-time exchange rates from a reliable API
- **Interactive Visualizations**: 
  - Bar charts with hover details
  - Radial/polar charts for a unique perspective  
  - Detailed comparison tables
- **Flexible Base Currency**: Select any major currency as your base
- **Custom Amount Input**: See conversions for any amount you specify
- **Top 10 + Guaranteed Currencies**: Always includes Indian Rupee (INR) and Danish Krone (DKK) as requested
- **Auto-refresh**: Optional 30-second auto-refresh for live tracking
- **Quick Converter**: Instant conversion calculator
- **Responsive Design**: Works on desktop and mobile

## 🚀 Quick Start

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application**:
   ```bash
   streamlit run app.py
   ```

3. **Open in Browser**:
   The app will automatically open at `http://localhost:8501`

## 🎯 How to Use

1. **Select Base Currency**: Choose your main currency from the sidebar (defaults to Euro)
2. **Enter Amount**: Specify how much of your base currency to convert
3. **Choose Visualization**: Pick from bar chart, radial view, table, or see all views
4. **Explore**: Hover over charts for detailed information
5. **Quick Convert**: Use the bottom calculator for instant conversions
6. **Refresh**: Manual refresh button or enable auto-refresh

## 🌟 Unique Features

- **Radial Visualization**: A polar chart that shows currency relationships in a circular, visually appealing format
- **Smart Currency Selection**: Automatically includes important currencies like INR and DKK while showing the most traded currencies
- **Real-time Data**: Uses ExchangeRate-API for up-to-date information
- **Interactive Elements**: Rich hover information and clickable elements
- **Responsive Design**: Beautiful flag icons and professional styling

## 🔧 Technical Details

- **Frontend**: Streamlit with custom CSS styling
- **Visualization**: Plotly for interactive charts
- **Data Processing**: Pandas for data manipulation
- **API**: ExchangeRate-API for live exchange rates
- **Caching**: 5-minute cache to balance freshness with performance

## 📊 Supported Currencies

The app supports 20+ major world currencies including:
- USD (US Dollar) 🇺🇸
- EUR (Euro) 🇪🇺  
- GBP (British Pound) 🇬🇧
- JPY (Japanese Yen) 🇯🇵
- INR (Indian Rupee) 🇮🇳
- DKK (Danish Krone) 🇩🇰
- And many more!

## 🚀 Deployment

To deploy on Streamlit Cloud:
1. Push this repository to GitHub
2. Go to [share.streamlit.io](https://share.streamlit.io)
3. Connect your GitHub repository
4. Your app will be live in minutes!

## 🤝 Contributing

Feel free to contribute by:
- Adding new visualization types
- Supporting more currencies
- Improving the UI/UX
- Adding new features

## 📝 License

This project is open source and available under the MIT License.

---

*Built with ❤️ using Streamlit and Plotly*
