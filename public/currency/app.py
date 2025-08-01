import streamlit as st
import requests
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
from datetime import datetime
import time

# Page configuration
st.set_page_config(
    page_title="Currency Exchange Visualizer",
    page_icon="💱",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main-header {
        font-size: 3rem;
        font-weight: 700;
        color: #1f77b4;
        text-align: center;
        margin-bottom: 2rem;
    }
    .currency-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1rem;
        border-radius: 10px;
        color: white;
        margin: 0.5rem 0;
    }
    .metric-container {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        border-left: 4px solid #1f77b4;
    }
</style>
""", unsafe_allow_html=True)

class CurrencyExchangeApp:
    def __init__(self):
        self.base_url = "https://api.exchangerate-api.com/v4/latest/"
        # Full currency list for API response
        self.currency_names = {
            'AED': 'UAE Dirham', 'AFN': 'Afghan Afghani', 'ALL': 'Albanian Lek', 'AMD': 'Armenian Dram',
            'ANG': 'Netherlands Antillian Guilder', 'AOA': 'Angolan Kwanza', 'ARS': 'Argentine Peso',
            'AUD': 'Australian Dollar', 'AWG': 'Aruban Florin', 'AZN': 'Azerbaijani Manat',
            'BAM': 'Bosnia and Herzegovina Convertible Mark', 'BBD': 'Barbadian Dollar', 'BDT': 'Bangladeshi Taka',
            'BGN': 'Bulgarian Lev', 'BHD': 'Bahraini Dinar', 'BIF': 'Burundian Franc', 'BMD': 'Bermudian Dollar',
            'BND': 'Brunei Dollar', 'BOB': 'Bolivian Boliviano', 'BRL': 'Brazilian Real', 'BSD': 'Bahamian Dollar',
            'BTN': 'Bhutanese Ngultrum', 'BWP': 'Botswana Pula', 'BYN': 'Belarusian Ruble', 'BZD': 'Belize Dollar',
            'CAD': 'Canadian Dollar', 'CDF': 'Congolese Franc', 'CHF': 'Swiss Franc', 'CLP': 'Chilean Peso',
            'CNY': 'Chinese Yuan', 'COP': 'Colombian Peso', 'CRC': 'Costa Rican Colón', 'CUP': 'Cuban Peso',
            'CVE': 'Cape Verdean Escudo', 'CZK': 'Czech Koruna', 'DJF': 'Djiboutian Franc', 'DKK': 'Danish Krone',
            'DOP': 'Dominican Peso', 'DZD': 'Algerian Dinar', 'EGP': 'Egyptian Pound', 'ERN': 'Eritrean Nakfa',
            'ETB': 'Ethiopian Birr', 'EUR': 'Euro', 'FJD': 'Fijian Dollar', 'FKP': 'Falkland Islands Pound',
            'FOK': 'Faroese Króna', 'GBP': 'British Pound', 'GEL': 'Georgian Lari', 'GGP': 'Guernsey Pound',
            'GHS': 'Ghanaian Cedi', 'GIP': 'Gibraltar Pound', 'GMD': 'Gambian Dalasi', 'GNF': 'Guinean Franc',
            'GTQ': 'Guatemalan Quetzal', 'GYD': 'Guyanese Dollar', 'HKD': 'Hong Kong Dollar', 'HNL': 'Honduran Lempira',
            'HRK': 'Croatian Kuna', 'HTG': 'Haitian Gourde', 'HUF': 'Hungarian Forint', 'IDR': 'Indonesian Rupiah',
            'ILS': 'Israeli Shekel', 'IMP': 'Isle of Man Pound', 'INR': 'Indian Rupee', 'IQD': 'Iraqi Dinar',
            'IRR': 'Iranian Rial', 'ISK': 'Icelandic Krona', 'JEP': 'Jersey Pound', 'JMD': 'Jamaican Dollar',
            'JOD': 'Jordanian Dinar', 'JPY': 'Japanese Yen', 'KES': 'Kenyan Shilling', 'KGS': 'Kyrgyzstani Som',
            'KHR': 'Cambodian Riel', 'KID': 'Kiribati Dollar', 'KMF': 'Comorian Franc', 'KRW': 'South Korean Won',
            'KWD': 'Kuwaiti Dinar', 'KYD': 'Cayman Islands Dollar', 'KZT': 'Kazakhstani Tenge', 'LAK': 'Lao Kip',
            'LBP': 'Lebanese Pound', 'LKR': 'Sri Lankan Rupee', 'LRD': 'Liberian Dollar', 'LSL': 'Lesotho Loti',
            'LYD': 'Libyan Dinar', 'MAD': 'Moroccan Dirham', 'MDL': 'Moldovan Leu', 'MGA': 'Malagasy Ariary',
            'MKD': 'Macedonian Denar', 'MMK': 'Burmese Kyat', 'MNT': 'Mongolian Tögrög', 'MOP': 'Macanese Pataca',
            'MRU': 'Mauritanian Ouguiya', 'MUR': 'Mauritian Rupee', 'MVR': 'Maldivian Rufiyaa', 'MWK': 'Malawian Kwacha',
            'MXN': 'Mexican Peso', 'MYR': 'Malaysian Ringgit', 'MZN': 'Mozambican Metical', 'NAD': 'Namibian Dollar',
            'NGN': 'Nigerian Naira', 'NIO': 'Nicaraguan Córdoba', 'NOK': 'Norwegian Krone', 'NPR': 'Nepalese Rupee',
            'NZD': 'New Zealand Dollar', 'OMR': 'Omani Rial', 'PAB': 'Panamanian Balboa', 'PEN': 'Peruvian Sol',
            'PGK': 'Papua New Guinean Kina', 'PHP': 'Philippine Peso', 'PKR': 'Pakistani Rupee', 'PLN': 'Polish Zloty',
            'PYG': 'Paraguayan Guarani', 'QAR': 'Qatari Riyal', 'RON': 'Romanian Leu', 'RSD': 'Serbian Dinar',
            'RUB': 'Russian Ruble', 'RWF': 'Rwandan Franc', 'SAR': 'Saudi Riyal', 'SBD': 'Solomon Islands Dollar',
            'SCR': 'Seychellois Rupee', 'SDG': 'Sudanese Pound', 'SEK': 'Swedish Krona', 'SGD': 'Singapore Dollar',
            'SHP': 'Saint Helena Pound', 'SLE': 'Sierra Leonean Leone', 'SLL': 'Sierra Leonean Leone', 'SOS': 'Somali Shilling',
            'SRD': 'Surinamese Dollar', 'SSP': 'South Sudanese Pound', 'STN': 'São Tomé and Príncipe Dobra',
            'SYP': 'Syrian Pound', 'SZL': 'Eswatini Lilangeni', 'THB': 'Thai Baht', 'TJS': 'Tajikistani Somoni',
            'TMT': 'Turkmenistani Manat', 'TND': 'Tunisian Dinar', 'TOP': 'Tongan Paʻanga', 'TRY': 'Turkish Lira',
            'TTD': 'Trinidad and Tobago Dollar', 'TVD': 'Tuvaluan Dollar', 'TWD': 'New Taiwan Dollar',
            'TZS': 'Tanzanian Shilling', 'UAH': 'Ukrainian Hryvnia', 'UGX': 'Ugandan Shilling', 'USD': 'US Dollar',
            'UYU': 'Uruguayan Peso', 'UZS': 'Uzbekistani Som', 'VES': 'Venezuelan Bolívar', 'VND': 'Vietnamese Dong',
            'VUV': 'Vanuatu Vatu', 'WST': 'Samoan Tālā', 'XAF': 'Central African CFA Franc', 'XCD': 'East Caribbean Dollar',
            'XCG': 'East Caribbean Dollar', 'XDR': 'Special Drawing Rights', 'XOF': 'West African CFA Franc',
            'XPF': 'CFP Franc', 'YER': 'Yemeni Rial', 'ZAR': 'South African Rand', 'ZMW': 'Zambian Kwacha', 'ZWL': 'Zimbabwean Dollar'
        }
        
        self.currency_flags = {
            'AED': '🇦🇪', 'AFN': '🇦🇫', 'ALL': '🇦🇱', 'AMD': '🇦🇲', 'ANG': '🇳🇱', 'AOA': '🇦🇴', 'ARS': '🇦🇷',
            'AUD': '🇦🇺', 'AWG': '🇦🇼', 'AZN': '🇦🇿', 'BAM': '🇧🇦', 'BBD': '🇧🇧', 'BDT': '🇧🇩', 'BGN': '🇧🇬',
            'BHD': '🇧🇭', 'BIF': '🇧🇮', 'BMD': '🇧🇲', 'BND': '🇧🇳', 'BOB': '🇧🇴', 'BRL': '🇧🇷', 'BSD': '🇧🇸',
            'BTN': '🇧🇹', 'BWP': '🇧🇼', 'BYN': '🇧🇾', 'BZD': '🇧🇿', 'CAD': '🇨🇦', 'CDF': '🇨🇩', 'CHF': '🇨🇭',
            'CLP': '🇨🇱', 'CNY': '🇨🇳', 'COP': '🇨🇴', 'CRC': '🇨🇷', 'CUP': '🇨🇺', 'CVE': '🇨🇻', 'CZK': '🇨🇿',
            'DJF': '🇩🇯', 'DKK': '🇩🇰', 'DOP': '🇩🇴', 'DZD': '🇩🇿', 'EGP': '🇪🇬', 'ERN': '🇪🇷', 'ETB': '🇪🇹',
            'EUR': '🇪🇺', 'FJD': '🇫🇯', 'FKP': '🇫🇰', 'FOK': '🇫🇴', 'GBP': '🇬🇧', 'GEL': '🇬🇪', 'GGP': '🇬🇬',
            'GHS': '🇬🇭', 'GIP': '🇬🇮', 'GMD': '🇬🇲', 'GNF': '🇬🇳', 'GTQ': '🇬🇹', 'GYD': '🇬🇾', 'HKD': '🇭🇰',
            'HNL': '🇭🇳', 'HRK': '🇭🇷', 'HTG': '🇭🇹', 'HUF': '🇭🇺', 'IDR': '🇮🇩', 'ILS': '🇮🇱', 'IMP': '🇮🇲',
            'INR': '🇮🇳', 'IQD': '🇮🇶', 'IRR': '🇮🇷', 'ISK': '🇮🇸', 'JEP': '🇯🇪', 'JMD': '🇯🇲', 'JOD': '🇯🇴',
            'JPY': '🇯🇵', 'KES': '🇰🇪', 'KGS': '🇰🇬', 'KHR': '🇰🇭', 'KID': '🇰🇮', 'KMF': '🇰🇲', 'KRW': '🇰🇷',
            'KWD': '🇰🇼', 'KYD': '🇰🇾', 'KZT': '🇰🇿', 'LAK': '🇱🇦', 'LBP': '🇱🇧', 'LKR': '🇱🇰', 'LRD': '🇱🇷',
            'LSL': '🇱🇸', 'LYD': '🇱🇾', 'MAD': '🇲🇦', 'MDL': '🇲🇩', 'MGA': '🇲🇬', 'MKD': '🇲🇰', 'MMK': '🇲🇲',
            'MNT': '🇲🇳', 'MOP': '🇲🇴', 'MRU': '🇲🇷', 'MUR': '🇲🇺', 'MVR': '🇲🇻', 'MWK': '🇲🇼', 'MXN': '🇲🇽',
            'MYR': '🇲🇾', 'MZN': '🇲🇿', 'NAD': '🇳🇦', 'NGN': '🇳🇬', 'NIO': '🇳🇮', 'NOK': '🇳🇴', 'NPR': '🇳🇵',
            'NZD': '🇳🇿', 'OMR': '🇴🇲', 'PAB': '🇵🇦', 'PEN': '🇵🇪', 'PGK': '🇵🇬', 'PHP': '🇵🇭', 'PKR': '🇵🇰',
            'PLN': '🇵🇱', 'PYG': '🇵🇾', 'QAR': '🇶🇦', 'RON': '🇷🇴', 'RSD': '🇷🇸', 'RUB': '🇷🇺', 'RWF': '🇷🇼',
            'SAR': '🇸🇦', 'SBD': '🇸🇧', 'SCR': '🇸🇨', 'SDG': '🇸🇩', 'SEK': '🇸🇪', 'SGD': '🇸🇬', 'SHP': '🇸🇭',
            'SLE': '🇸🇱', 'SLL': '🇸🇱', 'SOS': '🇸🇴', 'SRD': '🇸🇷', 'SSP': '🇸🇸', 'STN': '🇸🇹', 'SYP': '🇸🇾',
            'SZL': '🇸🇿', 'THB': '🇹🇭', 'TJS': '🇹🇯', 'TMT': '🇹🇲', 'TND': '🇹🇳', 'TOP': '🇹🇴', 'TRY': '🇹🇷',
            'TTD': '🇹🇹', 'TVD': '🇹🇻', 'TWD': '🇹🇼', 'TZS': '🇹🇿', 'UAH': '🇺🇦', 'UGX': '🇺🇬', 'USD': '🇺🇸',
            'UYU': '🇺🇾', 'UZS': '🇺🇿', 'VES': '🇻🇪', 'VND': '🇻🇳', 'VUV': '🇻🇺', 'WST': '🇼🇸', 'XAF': '🌍',
            'XCD': '🌎', 'XCG': '🌎', 'XDR': '🌐', 'XOF': '🌍', 'XPF': '🇫🇷', 'YER': '🇾🇪', 'ZAR': '🇿🇦',
            'ZMW': '🇿🇲', 'ZWL': '🇿🇼'
        }
        
        # Specific currencies to show in graphs (in order from lowest to highest rates)
        self.graph_currencies = ['INR', 'DKK', 'SEK', 'EUR', 'USD', 'CHF', 'AED', 'NOK', 'JPY', 'GBP']

    @st.cache_data(ttl=300)  # Cache for 5 minutes
    def get_exchange_rates(_self, base_currency):
        """Fetch live exchange rates from API"""
        try:
            response = requests.get(f"{_self.base_url}{base_currency}", timeout=10)
            response.raise_for_status()
            data = response.json()
            return data['rates'], data['date']
        except requests.exceptions.RequestException as e:
            st.error(f"Error fetching exchange rates: {e}")
            return None, None

    def get_top_currencies(self, rates, base_currency, amount=10):
        """Get specific currencies for graph display, sorted from lowest to highest exchange rates"""
        if not rates:
            return []
        
        # Get the specific currencies for graph display (excluding base currency if it's in the list)
        graph_currencies = [curr for curr in self.graph_currencies if curr != base_currency]
        
        # Get rates for these specific currencies
        selected_currencies = [(curr, rates[curr]) for curr in graph_currencies 
                             if curr in rates and curr in self.currency_names]
        
        # Sort by exchange rate from lowest to highest
        selected_currencies.sort(key=lambda x: x[1])
        
        return selected_currencies

    def create_bar_chart(self, currencies, base_currency, user_amount):
        """Create an interactive bar chart"""
        df = pd.DataFrame(currencies, columns=['Currency', 'Rate'])
        df['Amount'] = df['Rate'] * user_amount
        df['Flag'] = df['Currency'].map(self.currency_flags)
        df['Name'] = df['Currency'].map(self.currency_names)
        df['Display'] = df['Flag'] + ' ' + df['Currency']
        
        fig = go.Figure()
        
        fig.add_trace(go.Bar(
            x=df['Display'],
            y=df['Amount'],
            text=[f"{amount:,.2f}" for amount in df['Amount']],
            textposition='auto',
            hovertemplate='<b>%{x}</b><br>' +
                         f'{user_amount:,.2f} {base_currency} = %{{y:,.2f}} %{{text}}<br>' +
                         'Rate: %{customdata:.4f}<extra></extra>',
            customdata=df['Rate'],
            marker=dict(
                color=df['Amount'],
                colorscale='Viridis',
                showscale=False
            )
        ))
        
        fig.update_layout(
            title=f"💰 {user_amount:,.2f} {base_currency} converted to Top 10 Currencies",
            xaxis_title="Currency",
            yaxis_title="Amount",
            height=600,
            template="plotly_white",
            showlegend=False,
            xaxis=dict(tickangle=45)
        )
        
        return fig

    def create_radial_chart(self, currencies, base_currency, user_amount):
        """Create a radial/polar chart for a unique view"""
        df = pd.DataFrame(currencies, columns=['Currency', 'Rate'])
        df['Amount'] = df['Rate'] * user_amount
        df['Flag'] = df['Currency'].map(self.currency_flags)
        df['Name'] = df['Currency'].map(self.currency_names)
        df['Display'] = df['Flag'] + ' ' + df['Currency']
        
        fig = go.Figure()
        
        fig.add_trace(go.Scatterpolar(
            r=df['Amount'],
            theta=df['Display'],
            mode='markers+lines',
            marker=dict(
                size=15,
                color=df['Amount'],
                colorscale='Plasma',
                showscale=True,
                colorbar=dict(title="Amount")
            ),
            line=dict(color='rgba(32, 146, 230, 0.8)', width=3),
            text=[f"{amount:,.2f}" for amount in df['Amount']],
            hovertemplate='<b>%{theta}</b><br>' +
                         f'{user_amount:,.2f} {base_currency} = %{{r:,.2f}}<br>' +
                         'Rate: %{customdata:.4f}<extra></extra>',
            customdata=df['Rate'],
            fill='toself',
            fillcolor='rgba(32, 146, 230, 0.1)'
        ))
        
        fig.update_layout(
            title=f"🎯 {user_amount:,.2f} {base_currency} - Radial Currency View",
            polar=dict(
                radialaxis=dict(
                    visible=True,
                    range=[0, max(df['Amount']) * 1.1]
                )
            ),
            height=700,
            template="plotly_white"
        )
        
        return fig

    def create_comparison_table(self, currencies, base_currency, user_amount):
        """Create a styled comparison table"""
        df = pd.DataFrame(currencies, columns=['Currency', 'Rate'])
        df['Flag'] = df['Currency'].map(self.currency_flags)
        df['Name'] = df['Currency'].map(self.currency_names)
        df['Amount'] = df['Rate'] * user_amount
        df['Formatted Amount'] = df['Amount'].apply(lambda x: f"{x:,.2f}")
        df['Exchange Rate'] = df['Rate'].apply(lambda x: f"{x:.4f}")
        
        # Reorder columns for display
        display_df = df[['Flag', 'Currency', 'Exchange Rate', 'Formatted Amount']].copy()
        display_df.columns = ['', 'Code', f'Rate (1 {base_currency} =)', f'Your {user_amount:,.0f} {base_currency} =']
        
        return display_df

    def run(self):
        # Header
        st.markdown('<h1 class="main-header">💱 Currency Exchange Visualizer</h1>', unsafe_allow_html=True)
        st.markdown("---")
        
        # Sidebar controls
        st.sidebar.header("🎛️ Controls")
        
        # Currency selection
        available_currencies = list(self.currency_names.keys())
        base_currency = st.sidebar.selectbox(
            "Select Base Currency:",
            available_currencies,
            index=available_currencies.index('EUR'),
            format_func=lambda x: f"{self.currency_flags.get(x, '')} {x}"
        )
        
        # Amount input
        user_amount = st.sidebar.number_input(
            f"Amount in {base_currency}:",
            min_value=0.01,
            value=100.0,
            step=10.0,
            format="%.2f"
        )
        
        # Visualization type
        viz_type = st.sidebar.radio(
            "Visualization Type:",
            ["📊 Bar Chart", "🎯 Radial View", "📋 Table View", "🔄 All Views"]
        )
        
        # Auto-refresh option
        auto_refresh = st.sidebar.checkbox("🔄 Auto-refresh (30s)", value=False)
        
        if auto_refresh:
            time.sleep(30)
            st.rerun()
        
        # Manual refresh button
        if st.sidebar.button("🔄 Refresh Rates"):
            st.cache_data.clear()
            st.rerun()
        
        # Fetch data
        with st.spinner("🌐 Fetching live exchange rates..."):
            rates, last_updated = self.get_exchange_rates(base_currency)
        
        if rates:
            # Display last updated time
            st.info(f"📅 Last updated: {last_updated} | 🔄 Rates refresh every 5 minutes")
            
            # Get top currencies
            top_currencies = self.get_top_currencies(rates, base_currency, 10)
            
            # Current rate info
            col1, col2, col3 = st.columns(3)
            with col1:
                st.metric("Base Currency", f"{self.currency_flags.get(base_currency)} {base_currency}")
            with col2:
                st.metric("Amount", f"{user_amount:,.2f}")
            with col3:
                total_currencies = len([c for c in rates.keys() if c != base_currency])
                st.metric("Available Currencies", total_currencies)
            
            st.markdown("---")
            
            # Visualizations
            if viz_type == "📊 Bar Chart" or viz_type == "🔄 All Views":
                st.plotly_chart(self.create_bar_chart(top_currencies, base_currency, user_amount), use_container_width=True)
            
            if viz_type == "🎯 Radial View" or viz_type == "🔄 All Views":
                st.plotly_chart(self.create_radial_chart(top_currencies, base_currency, user_amount), use_container_width=True)
            
            if viz_type == "📋 Table View" or viz_type == "🔄 All Views":
                st.subheader("📋 Detailed Comparison")
                comparison_df = self.create_comparison_table(top_currencies, base_currency, user_amount)
                st.dataframe(comparison_df, use_container_width=True, hide_index=True)
            
            # Quick conversion calculator
            st.markdown("---")
            st.subheader("🧮 Quick Converter")
            col1, col2 = st.columns(2)
            
            with col1:
                quick_amount = st.number_input("Amount to convert:", value=1.0, min_value=0.01)
            
            with col2:
                target_currency = st.selectbox(
                    "To currency:",
                    [curr for curr, _ in top_currencies],
                    format_func=lambda x: f"{self.currency_flags.get(x)} {x}"
                )
            
            if target_currency in dict(top_currencies):
                target_rate = dict(top_currencies)[target_currency]
                converted_amount = quick_amount * target_rate
                st.success(f"💰 {quick_amount:,.2f} {base_currency} = {converted_amount:,.2f} {target_currency}")
        
        else:
            st.error("❌ Failed to fetch exchange rates. Please try again later.")
        
        # Footer
        st.markdown("---")
        st.markdown("*Exchange rates provided by ExchangeRate-API. Rates are for informational purposes only.*")

if __name__ == "__main__":
    app = CurrencyExchangeApp()
    app.run()
