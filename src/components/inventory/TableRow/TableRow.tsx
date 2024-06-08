import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EquipmentInfo from '../EquipmentInfo';
import CustomPopup from 'src/components/CustomPopup';
import SkeletonLoading from 'src/components/SkeletonLoading';

import s from './TableRow.module.scss';

export interface Item {
  name: string;
  qr?: string;
  id: string;
  availability: string;
  price: number;
  registered: string;
  action: boolean;
  groupNumber: number;
  description: string;
  material: string;
  type: string;
  unitMeasurement: string;
  length: number;
  width: number;
  thickness: number;
  volume: number;
  tailShape: string;
  noseShape: string;
  rails: string;
  rocker: string;
  rentedAmount: number;
  rentedTime: string;
  rank: number;
  totalRanks: number;
  qrCode: string;
}

interface TableRowProps {
  item: Item;
}

interface AvailabilityColor {
  [key: string]: string;
  available: string;
  booked: string;
  service: string;
}

const TableRow: FC<TableRowProps> = ({ item }) => {
  const { name, id, availability, price, registered, action, groupNumber } = item;
  const availabilityColor: AvailabilityColor = {
    available: 'rgb(130, 186, 94)',
    booked: 'rgb(255, 89, 89)',
    service: 'rgb(175, 182, 186)',
  };
  const [isHidden, setIsHidden] = useState(action);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedNestedTable, setExpandedNestedTable] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const handleToggleHide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsHidden(!isHidden);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const expandNestedTable = () => {
    setExpandedNestedTable(true);
  };
  const flapNestedTable = () => {
    setExpandedNestedTable(false);
  };
  return (
    <>
      <SkeletonLoading type="inventoryTableItem" isLoading={isLoading}>
        <tr
          onClick={openModal}
          onMouseEnter={expandNestedTable}
          onMouseLeave={flapNestedTable}
          id={item.id}
          className={s.tr}
        >
          <td>{groupNumber}</td>
          <td className={s.name}>{name}</td>
          <td className={s.qr}>
            <button
              type="button"
              className={s.btn}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.stopPropagation()}
            >
              {t('Inventory.Open')}
            </button>
          </td>
          <td className={s.id}>{id}</td>
          <td
            className={s.availability}
            style={{ color: availabilityColor[availability.toLowerCase()] }}
          >
            {t('Inventory.' + availability)}
          </td>
          <td className={s.price}>{price} EUR</td>
          <td className={s.reg}>{registered}</td>
          <td className={s.action}>
            <button onClick={e => handleToggleHide(e)} className={s.btn} type="button">
              {isHidden ? t('Inventory.Show') : t('Inventory.Hide')}
            </button>
          </td>
        </tr>
        {expandedNestedTable && (
          <tr
            className={s.expandedRow}
            onMouseEnter={expandNestedTable}
            onMouseLeave={flapNestedTable}
          >
            <td colSpan={4} className={s.table__td}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>QR</th>
                    <th>Availability</th>
                    <th>Registered</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={s.subRow}>
                    <td>
                      <button
                        type="button"
                        className={s.btn}
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                          e.stopPropagation()
                        }
                      >
                        {t('Inventory.Open')}
                      </button>
                    </td>
                    <td style={{ color: availabilityColor[availability.toLowerCase()] }}>
                      {t('Inventory.' + availability)}
                    </td>
                    <td>{id}</td>
                    <td>
                      <button onClick={e => handleToggleHide(e)} className={s.btn} type="button">
                        {isHidden ? t('Inventory.Show') : t('Inventory.Hide')}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </SkeletonLoading>
      <CustomPopup title={t('Inventory.View listing')} closeModal={closeModal} open={modalOpen}>
        <EquipmentInfo item={item} />
      </CustomPopup>
    </>
  );
};

export default TableRow;
