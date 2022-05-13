import { forwardRef } from 'react';
import { useAppSelector } from '../../store/store';
import FillDetails from '../fill-details';
import Layout from '../templates/Templates';
import Resume from '.';

const Screen = forwardRef<HTMLDivElement>((props, ref) => {
  const { screen, isResumeBlank } = useAppSelector(({ ui }) => ui);
  return (
    <div ref={ref} className='w-[1200px] min-h-[1682px] bg-white'>
      {screen === 'edit' ? (
        <FillDetails />
      ) : screen === 'templates' ? (
        <Layout />
      ) : (
        <>
          {!isResumeBlank ? (
            <Resume />
          ) : (
            <div className='flex flex-col justify-center items-center pt-20'>
              <p className='text-2xl font-thin'>
                Fill the details to create your resume
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default Screen;
