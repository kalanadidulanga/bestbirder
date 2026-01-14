import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;

  const getContactHref = (value) => {
    if (!value) return undefined;
    if (value.includes('@')) return `mailto:${value}`;
    if (value.trim().startsWith('+')) return `tel:${value.replace(/\s/g, '')}`;
    return undefined;
  };

  return (
    <footer className='bg-footer bg-bottom overflow-hidden bg-cover'>
      <div className='bg-white/90 backdrop-blur-[2px] border-t border-primary2/10'>
        <div className='padding-container max-container'>
          <div className='py-12 md:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-start'>
              <div className='md:col-span-3 flex flex-col items-center md:items-start'>
                <Link to={'/'} className='inline-flex items-center'>
                  <img src={'/bestbirder-logo.svg'} alt='Best Birder' width={110} />
                </Link>
                <p className='mt-4 text-sm text-muted-foreground max-w-xs text-center md:text-left'>
                  Bird & wildlife tours across Sri Lanka—guided, responsible, and unforgettable.
                </p>
              </div>

              <div className='md:col-span-3'>
                {FOOTER_LINKS.map((columns, index) => (
                  <FooterColumn title={columns.title} key={index} align='left'>
                    <ul className='text-sm flex flex-col gap-2 text-muted-foreground'>
                      {columns.links.map((link) => (
                        <Link
                          to={link.href}
                          key={link.key}
                          className='hover:text-primary2 transition-colors'
                        >
                          {link.label}
                        </Link>
                      ))}
                    </ul>
                  </FooterColumn>
                ))}
              </div>

              <div className='md:col-span-3'>
                <FooterColumn title={FOOTER_CONTACT_INFO.title} align='left'>
                  <ul className='text-sm flex flex-col gap-2 text-muted-foreground'>
                    {FOOTER_CONTACT_INFO.links.map((link) => {
                      const value = link.value1;
                      const href = getContactHref(value);

                      return (
                        <li key={value}>
                          {href ? (
                            <a href={href} className='hover:text-primary2 transition-colors'>
                              {value}
                            </a>
                          ) : (
                            <span>{value}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </FooterColumn>
              </div>

              <div className='md:col-span-3'>
                <FooterColumn title={SOCIALS.title} align='left'>
                  <ul className='flex gap-3'>
                    {SOCIALS.links.map((social) => (
                      <a
                        href={social.href || '#'}
                        key={social.src}
                        className='h-10 w-10 rounded-xl border border-primary2/10 bg-white grid place-items-center hover:bg-primary2/5 transition-colors'
                        aria-label='Social link'
                        target={social.href ? '_blank' : undefined}
                        rel={social.href ? 'noreferrer' : undefined}
                      >
                        <img src={social.src} alt='social' width={18} height={18} />
                      </a>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>

            <div className='mt-10 border-t border-primary2/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2'>
              <p className='text-sm text-muted-foreground text-center md:text-left'>
                bestbirder is a government registered company
              </p>
              <p className='text-sm text-muted-foreground text-center md:text-right'>
                © Copyright {copyrightYear} Developed By{' '}
                <a
                  href='mailto:kalanadidulanga2005@gmail.com'
                  // target='_blank'
                  rel='noreferrer'
                  className='font-semibold text-slate-900 hover:text-primary2 transition-colors'
                >
                  Kalana Didulanga
                </a>{' '}
                | All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children, align = 'center' }) => {
  return (
    <div className={`flex flex-col gap-4 ${align === 'left' ? 'items-start' : 'items-center'}`}>
      <h4 className={`text-sm font-bold tracking-[0.25em] uppercase text-slate-900 ${align === 'left' ? 'text-left' : 'text-center'}`}>
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Footer