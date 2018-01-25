import React from 'react'

const Logo = ({
  fill = '#f60',
  ...props
}) =>
  <svg width='32' height='32' viewBox='0 0 32 32' {...props} fill={fill}>
    <path d='M27 17v7h5v-24h-5v12h-4v-12h-5v24h5v-7h4zm-27 11h32v4h-32v-4zm0-28h5v24h-5v-24zm9 0h5v24h-5v-24zm-4 12h4v5h-4v-5z' />
  </svg>

export default Logo
