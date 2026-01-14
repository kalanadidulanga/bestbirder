import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TOURS } from '@/constants';
import React from 'react'
import { MdTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Tours = () => {
  return (
    <>
      <PageHeader name="Tours" image={"/images/others/2.jpg"} className={" object-center"} />

      <section className='w-full h-auto overflow-hidden bg-white'>
        <div className='max-container padding-container'>
          <div className='mx-auto py-10 md:py-14 lg:py-16'>
            <div className='flex flex-col gap-4'>
              <div className='inline-flex items-center gap-2'>
                <span className='h-9 w-9 rounded-xl bg-primary2/10 text-primary2 grid place-items-center'>
                  <MdTravelExplore size={18} />
                </span>
                <p className='text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase'>
                  Experiences
                </p>
              </div>

              <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-slate-900'>
                Wildlife Tours
              </h1>
              <p className='text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed'>
                Choose from birding, mammals, butterflies, herpetofauna, flora, trekking and photography—crafted to keep the journey calm, responsible and unforgettable.
              </p>
            </div>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
              {TOURS.map((tour) => (
                <Card
                  key={tour.title}
                  className='group w-full border border-primary2/10 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full flex flex-col'
                >
                  <CardHeader className='pb-3'>
                    <CardTitle className='text-lg md:text-xl text-slate-900'>
                      {tour.title}
                    </CardTitle>
                    <div className='mt-3 w-full rounded-xl overflow-hidden border border-primary2/10 bg-primary2/5'>
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className='w-full h-[220px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-300'
                        loading='lazy'
                      />
                    </div>
                  </CardHeader>

                  <CardContent className='pt-0 flex-1'>
                    <p className='text-sm text-muted-foreground leading-relaxed text-justify line-clamp-6'>
                      {tour.description}
                    </p>
                  </CardContent>

                  <CardFooter className='pt-0'>
                    <div className='w-full border-t border-primary2/10 pt-4 flex items-center justify-between'>
                      <p className='text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase'>
                        Details
                      </p>
                      <Link
                        to={`/tours/${tour.title}`}
                        className='text-sm font-semibold text-primary2 hover:text-primary transition-colors'
                      >
                        View
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tours;