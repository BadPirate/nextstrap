import Link from 'next/link'
import { useRouter } from 'next/router'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function formatBreadcrumbLabel(segment: string) {
  let label = segment.replace(/[-_]+/g, ' ')
  label = label.replace(/\b\w/g, (c) => c.toUpperCase())
  return label
}

const BreadCrumbs = ({ lastLabel }: { lastLabel?: string }) => {
  const router = useRouter()
  const pathParts = router.asPath.split('?')[0].split('/').filter(Boolean)
  const breadcrumbs = pathParts.map((part, idx) => {
    const href = '/' + pathParts.slice(0, idx + 1).join('/')
    return {
      label: idx === pathParts.length - 1 && lastLabel ? lastLabel : formatBreadcrumbLabel(part),
      href,
      isLast: idx === pathParts.length - 1,
    }
  })
  if (breadcrumbs.length === 0) return null
  return (
    <Breadcrumb className="mb-0 justify-content-center" style={{ background: 'transparent' }}>
      {breadcrumbs.map((crumb) =>
        crumb.isLast ? (
          <Breadcrumb.Item key={crumb.href} active>
            {crumb.label}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={crumb.href} linkAs={Link} href={crumb.href}>
            {crumb.label}
          </Breadcrumb.Item>
        ),
      )}
    </Breadcrumb>
  )
}

export default BreadCrumbs
