import React from 'react'
import { useTranslation } from 'react-i18next'

export default function OrderButton() {
    const {t} = useTranslation()
  return (
    <button className="bg-amber-500 md:w-[14vw] w-[33vw] h-[8vh] self-end mb-[2vh] rounded-sm text-white md:text-[3vh] font-semibold">{t('cart.buy')}</button>
  )
}
