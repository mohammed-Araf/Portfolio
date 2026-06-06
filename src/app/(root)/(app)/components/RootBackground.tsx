'use client'

import background from '@/assets/background.webp'
import Image from 'next/image'
import React, { memo } from 'react'

const RootBackground: React.FC = () => {
  return (
    <div aria-hidden="true" className="fixed left-0 top-0 h-full w-full overflow-hidden bg-white dark:bg-black">
      <Image src={background} alt="" className={'block h-full w-full object-cover'} />
    </div>
  )
}

export default memo(RootBackground)
