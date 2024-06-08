import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import RentalList from '../RentalList';
import RentalHead from '../RentalHead';
import SkeletonLoading from 'src/components/SkeletonLoading';

import boardImg from 'src/assets/images/rental-item.png';

import pageStyle from 'src/pages/Dashboard/Dashboard.module.scss';
import s from './RentalTable.module.scss';

interface RentalTableProps {}

export type Currency = 'euro' | 'usd' | 'pound';

export interface RentalItem {
  img: string;
  title: string;
  description: string;
  stockAmount: number;
  price: number;
  totalRentals: number;
  currency: Currency;
}

const rentalData: RentalItem[] = [
  {
    description: 'Rent this board with us today and get discount.',
    img: boardImg,
    stockAmount: 32,
    price: 45.99,
    title: 'Lovely Surf Board',
    totalRentals: 20,
    currency: 'euro',
  },
  {
    description: 'Rent this board with us today and get discount.',
    img: boardImg,
    stockAmount: 32,
    price: 45.99,
    title: 'Lovely Surf Board',
    totalRentals: 20,
    currency: 'euro',
  },
  {
    description: 'Rent this board with us today and get discount.',
    img: boardImg,
    stockAmount: 32,
    price: 45.99,
    title: 'Lovely Surf Board',
    totalRentals: 20,
    currency: 'euro',
  },
];

const RentalTable: FC<RentalTableProps> = () => {
  const [periodRange, setPeriodRange] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const { t } = useTranslation();

  const handleTermChange = (selectedTerm: string) => {
    setPeriodRange(selectedTerm);

    // Fix deploy error
    console.log(periodRange);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredData = rentalData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------

  return (
    <div className={`${s.rentalTable} ${pageStyle.contentWrapper__rounded}`}>
      <SkeletonLoading isLoading={isLoading} type="dashboardItem" style={{ height: '380px' }}>
        <RentalHead
          handleSearch={handleSearch}
          handleTermChange={handleTermChange}
          title={t('RentalHead.Top monthly rentals')}
        />
        <RentalList rentalData={filteredData} />
      </SkeletonLoading>
    </div>
  );
};

export default RentalTable;
