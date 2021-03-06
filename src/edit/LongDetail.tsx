import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, LongSection } from '../../vite-env';
import Editable from '../customs/Editable.polymorphic';
import { setFocused } from '../../store/editor';
import useSection from '../../hooks/useSection';
import { HandleContentstyle } from './list-style';
import parse from 'html-react-parser';

interface Props {
  id: string;
  section: LongSection;
  placeholder: {
    primary: string;
    secondary?: string;
    desc: string;
  };
  Fromtolocation: ReactNode;
}
const LongDetail: React.FC<Props> = ({
  id,
  section,
  placeholder,
  Fromtolocation
}) => {
  //@ts-ignore
  const { setPrimary, setSecondary, createEl, setDescContent, setDescHeading } =
    useSection(section);

  const dispatch = useAppDispatch();
  const [{ primary, secondary, description }, listStyle, contentStyle] =
    useAppSelector(({ resume, styles }) => [
      resume[section].data[id],
      styles.listStyle,
      styles.contentStyle
    ]);

  return (
    <div className={`flex items-start ${HandleContentstyle(contentStyle)}`}>
      <div
        className='space-y-3 w-full'
        data-id={id}
        onFocus={() => dispatch(setFocused({ id, section }))}
      >
        <Editable
          as='h3'
          className='input-primary'
          placeholder={placeholder.primary}
          content={parse(primary)}
          onBlur={(e: BlurEvent) =>
            dispatch(setPrimary({ id, content: e.target.innerText }))
          }
        />
        {typeof secondary === 'string' && (
          <Editable
            as='h3'
            className='input-secondary'
            placeholder={placeholder.secondary}
            content={parse(secondary)}
            onBlur={(e: BlurEvent) =>
              dispatch(setSecondary({ id, content: e.target.innerText }))
            }
          />
        )}
        {Fromtolocation}
        <div className='flex flex-col space-y-2'>
          <Editable
            as='h4'
            className='desc-heading border-b'
            placeholder={placeholder.desc}
            content={parse(description.heading)}
            onBlur={(e: BlurEvent) =>
              dispatch(setDescHeading({ id, content: e.target.innerText }))
            }
          />
          {Object.entries(description.contents).map(([descId, el]) => (
            <div
              className={`flex ${listStyle} items-start`}
              key={descId}
              onFocus={(e) => {
                e.stopPropagation();
                dispatch(setFocused({ id, section, descId: descId }));
              }}
            >
              <Editable
                as='p'
                className='desc-content'
                content={parse(el)}
                onBlur={(e: BlurEvent) =>
                  dispatch(
                    setDescContent({
                      id,
                      descId: descId,
                      content: e.target.innerText
                    })
                  )
                }
                onKeyDownCapture={(e: any) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    dispatch(createEl({ id, descId }));
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongDetail;
