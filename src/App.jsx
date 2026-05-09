import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import PayPalAccounts from './components/pages/Bank/PayPalAccounts'
import StripeAccounts from './components/pages/Bank/StripeAccounts'
import BinanceAccounts from './components/pages/Crypto/BinanceAccounts'
import CoinbaseAccounts from './components/pages/Crypto/CoinbaseAccounts'
import AirbnbAccounts from './components/pages/Social/AirbnbAccounts'
import MetaAdsAccounts from './components/pages/Social/MetaAdsAccounts'
import GmailAccounts from './components/pages/Email/GmailAccounts'
import OutlookAccounts from './components/pages/Email/OutlookAccounts'
import YahooAccounts from './components/pages/Email/YahooAccounts'
import AllServices from './components/pages/AllServices'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-verified-paypal-accounts" element={<PayPalAccounts />} />
          <Route path="/buy-verified-stripe-accounts" element={<StripeAccounts />} />
          <Route path="/buy-verified-binance-accounts" element={<BinanceAccounts />} />
          <Route path="/buy-verified-coinbase-accounts" element={<CoinbaseAccounts />} />
          <Route path="/buy-verified-airbnb-accounts" element={<AirbnbAccounts />} />
          <Route path="/buy-verified-meta-ads-accounts" element={<MetaAdsAccounts />} />
          <Route path="/buy-verified-gmail-accounts" element={<GmailAccounts />} />
          <Route path="/buy-verified-outlook-accounts" element={<OutlookAccounts />} />
          <Route path="/buy-verified-yahoo-accounts" element={<YahooAccounts />} />
          <Route path="/view-all-services" element={<AllServices />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

