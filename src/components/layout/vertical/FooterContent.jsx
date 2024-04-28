'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { settings } = useSettings()
  const { isBreakpointReached: isVerticalBreakpointReached } = useVerticalNav()
  const { isBreakpointReached: isHorizontalBreakpointReached } = useHorizontalNav()

  // Vars
  const isBreakpointReached =
    settings.layout === 'vertical' ? isVerticalBreakpointReached : isHorizontalBreakpointReached

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, `}</span>
        <span>{` Texnik yordam uchun: `}</span>
        <Link href='https://t.me/adsh97' target='_blank' className='text-primary'>
          ADSH
        </Link>
      </p>
    </div>
  )
}

export default FooterContent
