import './App.css'

// components
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CompanyPresentation } from './layouts/companyPresentation'
import { AboutCompany } from './layouts/AboutCompany'
import { TestimonialsPage } from './layouts/TestimonialsPage'
import { ContactSection } from './layouts/ContactSection'

function App() {
  return (
    <div className="">
      <Header />
      <CompanyPresentation />
      <AboutCompany />
      <TestimonialsPage />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App