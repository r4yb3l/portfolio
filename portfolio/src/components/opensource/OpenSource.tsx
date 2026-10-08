import { useTranslation } from 'react-i18next'
import SectionHeader from '../ui/SectionHeader'
import HollowCaseStudy from './HollowCaseStudy'
import TokendialCaseStudy from './TokendialCaseStudy'

const OpenSource = () => {
  const { t } = useTranslation()

  return (
    <div className="section px-4 sm:px-6">
      <SectionHeader title={t('navigation.opensource')} />
      <div className="max-w-wide mx-auto space-y-6 md:space-y-8">
        <TokendialCaseStudy />
        <HollowCaseStudy />
      </div>
    </div>
  )
}

export default OpenSource
