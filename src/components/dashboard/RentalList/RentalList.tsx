import { FC } from 'react';

import { RentalItem as RentalItemData } from '../RentalTable/RentalTable';
import RentalItem from '../RentalItem';

import s from './RentalList.module.scss';

interface RentalListProps {
  rentalData: RentalItemData[];
}

const RentalList: FC<RentalListProps> = ({ rentalData }) => {
  if (rentalData.length === 0) {
    return <div style={{ textAlign: 'center' }}>No rentals found.</div>;
  }

  return (
    <div className={s.rentalList}>
      {rentalData.map((el, idx) => (
        <RentalItem item={el} key={idx} />
      ))}
    </div>
  );
};

export default RentalList;
