type TwoVersions = {
  mobile?: JSX.Element,
  desktop?: JSX.Element,
}

type MethodVersion = {
  // eslint-disable-next-line no-unused-vars
  callback?: (mobile: boolean) => JSX.Element,
}

const ResponsiveAlt = (
  params : (TwoVersions|MethodVersion) & { split?: 'sm'|'md'|'lg' },
) => {
  let mobile : JSX.Element|null = null
  let desktop : JSX.Element|null = null
  const { split } = params
  if ('callback' in params) {
    const { callback } = params
    mobile = callback ? callback(true) : null
    desktop = callback ? callback(false) : null
  } else if ('mobile' in params) {
    const { mobile: m, desktop: d } = params
    mobile = m ?? null
    desktop = d ?? null
  }
  return (
    <>
      <span className={`d-${split}-none`}>{mobile}</span>
      <span className={`d-none d-${split}-block`}>{desktop}</span>
    </>
  )
}

ResponsiveAlt.defaultProps = {
  split: 'md',
  mobile: null,
  desktop: null,
  callback: null,
}

export default ResponsiveAlt
