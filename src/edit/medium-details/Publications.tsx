import { useAppSelector } from '../../../store/store';
import MediumDetail from '../MediumDetail';
import SectionHeading from '../SectionHeading';

const Publications: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.publications.order);
  return (
    <div>
      <SectionHeading placeholder='PUBLICATIONS' section='publications' />
      {order.map((id: string) => (
        <MediumDetail
          key={id}
          id={id}
          placeholder={{ primary: 'Publication Name', desc: 'When Published' }}
          section='publications'
        />
      ))}
    </div>
  );
};

export default Publications;
