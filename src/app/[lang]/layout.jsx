// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Uzswlu KPI dashboard',
  description: 'O`zbekiston davlat jahon tillari universiteti uchun KPI tizimi!'
}

const RootLayout = ({ children, params }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]

  return (
    <html id='__next' lang={params.lang} dir={direction} suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col' suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
