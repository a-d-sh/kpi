'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'
// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()
  const { settings } = useSettings()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale, id } = params
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu
          label={dictionary['navigation'].dashboards}
          icon={<i className='ri-home-smile-line' />}
          suffix={<Chip label='1' size='small' color='error' />}
        >
          <MenuItem href={`/${locale}/dashboards/kpi`}>{dictionary['navigation'].kpi}</MenuItem>
        </SubMenu>
        <MenuSection label='App'>
          {/* <MenuItem href={`/${locale}/dashboards/403`} icon={<i className='ri-account-circle-line' />}>
            Profile
          </MenuItem> */}
          <MenuItem href={`/${locale}/dashboards/rules`} icon={<i className='ri-edit-line' />}>
            Qoidalar
          </MenuItem>
        </MenuSection>
        <MenuSection label='Jarayon'>
          <MenuItem href={`/${locale}/dashboards/403`} icon={<i className='ri-edit-circle-line' />}>
            Tekshirilayotgan
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/403`} icon={<i className='ri-checkbox-circle-line' />}>
            Tasdiqlangan
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/403`} icon={<i className='ri-close-circle-line' />}>
            Rad etilgan
          </MenuItem>
        </MenuSection>
        <MenuSection label='Yuklanadigan qism'>
          <SubMenu label='O`quv va uslubiy ishlar' icon={<i className='ri-bar-chart-2-line' />}>
            <MenuItem href={`/${locale}/dashboards/1.1`}>1.1</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>1.2</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>1.3</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>1.4</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>1.5</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>1.6</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>1.7</MenuItem>
          </SubMenu>
          <SubMenu label='Ilmiy va innovatsiyalarga oid ishlar' icon={<i className='ri-bar-chart-2-line' />}>
            <MenuItem href={`/${locale}/dashboards/403`}>2.1</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.2</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.3</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.4</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.5</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.6</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.7</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.8</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.9</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.10</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.11</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>2.12</MenuItem>
          </SubMenu>
          <SubMenu label='Xalqaro hamkorlikka oid ishlar' icon={<i className='ri-bar-chart-2-line' />}>
            <MenuItem href={`/${locale}/dashboards/403`}>3.1</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>3.2</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>3.3</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>3.4</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>3.5</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>3.6</MenuItem>
          </SubMenu>
          <SubMenu label='Ma`naviy-ma`rifiy ishlar' icon={<i className='ri-bar-chart-2-line' />}>
            <MenuItem href={`/${locale}/dashboards/403`}>4.1</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>4.2</MenuItem>
            <MenuItem href={`/${locale}/dashboards/403`}>4.3</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
      {/* <Menu
          popoutMenuOffset={{ mainAxis: 10 }}
          menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
          renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
          renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
          menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
        >
          <GenerateVerticalMenu menuData={menuData(dictionary, params)} />
        </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
