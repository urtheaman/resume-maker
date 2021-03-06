import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable.polymorphic';
import SectionHeading from '../SectionHeading';
import references from '../../../store/resume/short-details/references';
import { setFocused } from '../../../store/editor';
import { HandleContentstyle } from '../list-style';
import parse from 'html-react-parser';

const References: React.FC = () => {
  const [{ order, data }, contentStyle] = useAppSelector(
    ({ resume, styles }) => [resume.references, styles.contentStyle]
  );
  const { setType, setValue } = references;
  const dispatch = useAppDispatch();
  return (
    <div>
      <SectionHeading
        className='mb-4'
        placeholder='References'
        section='references'
      />
      {order.map((id) => (
        <div
          key={id}
          className={`flex items-start ${HandleContentstyle(contentStyle)}`}
        >
          <div
            className='space-y-3'
            key={id}
            onFocus={() => dispatch(setFocused({ id, section: 'references' }))}
          >
            <Editable
              as='h4'
              content={parse(data[id].type)}
              placeholder='Person Name'
              className='input-primary'
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setType({
                    id: id,
                    content: e.target.innerText
                  })
                )
              }
            />
            <div className='flex'>
              <span className='desc-heading mr-2'>Contact :</span>
              <Editable
                as='p'
                className='border-b flex-grow'
                content={parse(data[id].value)}
                placeholder='Email/Phone'
                onBlur={(e: BlurEvent) =>
                  dispatch(
                    setValue({
                      id: id,
                      content: e.target.innerText
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default References;
