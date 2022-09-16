import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  console.log(currentYear)
  return (
    <div className='text-center py-5 bg-[rgba(255,255,255,0.5)] absolute w-full bottom-0'>
      <p>Copyright &copy; 2019-{currentYear} Company-Name All rights reserved</p>
    </div>
  )
}

export default Footer