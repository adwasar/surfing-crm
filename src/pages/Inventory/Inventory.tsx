import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import PositionSwitcher from '../../components/inventory/PositionSwitcher';
import Select from '../../components/Select';
import Button from '../../components/inventory/Button';
import Table from '../../components/inventory/Table';
import Search from '../../components/inventory/Search';
import AddEquipmentForm from 'src/components/inventory/AddEquipmentForm';
import AddEquipmentPhoto from 'src/components/inventory/AddEquipmentPhoto';
import CustomPopup from 'src/components/CustomPopup';

import s from './Inventory.module.scss';

import SortIcon from '../../assets/icons/sort.svg?react';
import FilterIcon from '../../assets/icons/filter.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';

const sortingOptions = ['name', 'price', 'availability'];
const filterOptions = ['a', 'b', 'c', 'd'];
const equipmentBtns = ['Surfboards', 'Wetsuits', 'Fins', 'Leashes', 'All'];

interface InventoryProps {}

const Inventory: FC<InventoryProps> = () => {
  const [activeEquipBtn, setActiveEquipBtn] = useState('All');
  const [equipmnentInfoModalOpen, setEquipmnentInfoModalOpen] = useState(false);
  const [equipmnentPhotoModalOpen, setEquipmnentPhotoModalOpen] = useState(false);
  const { t } = useTranslation();

  const openEquipmnentInfoModal = () => {
    setEquipmnentInfoModalOpen(true);
  };
  const closeEquipmnentInfoModal = () => {
    setEquipmnentInfoModalOpen(false);
  };
  const closeEquipmentPhotoModal = () => {
    setEquipmnentPhotoModalOpen(false);
  };
  const openEquipmentPhotoModal = () => {
    setEquipmnentPhotoModalOpen(true);
  };
  return (
    <>
      <article className={s.inventory}>
        <header className={s.header}>
          <Search />
          <div className={s.options}>
            <PositionSwitcher />
            <Select
              name={t('Inventory.Sort by')}
              icon={SortIcon}
              options={sortingOptions}
              gap={15}
              mobileStyle={true}
            />
            <Select
              name={t('Inventory.Filter')}
              icon={FilterIcon}
              options={filterOptions}
              gap={15}
              mobileStyle={true}
            />
            <Button onClick={openEquipmnentInfoModal} isSelected={true}>
              <PlusIcon width={11} height={11} />
              {t('Inventory.Add Equipment')}
            </Button>
          </div>
        </header>
        <div className={s.equipmentBtns}>
          <Button style={{ padding: '7.5px', backgroundColor: 'rgb(224, 224, 224)' }}>
            <PlusIcon width={7} height={7} />
          </Button>
          {equipmentBtns.map(equipmentBtn => (
            <Button
              key={equipmentBtn}
              onClick={() => setActiveEquipBtn(equipmentBtn)}
              isSelected={activeEquipBtn === equipmentBtn}
            >
              {t('Inventory.' + equipmentBtn)}
            </Button>
          ))}
        </div>
        <Table />
      </article>
      <CustomPopup
        title={t('Inventory.Add listing here')}
        open={equipmnentInfoModalOpen}
        closeModal={closeEquipmnentInfoModal}
      >
        <AddEquipmentForm
          closeModal={closeEquipmnentInfoModal}
          openEquipmentPhotoModal={openEquipmentPhotoModal}
        />
      </CustomPopup>
      <CustomPopup
        title={t('Inventory.Add listing here')}
        open={equipmnentPhotoModalOpen}
        closeModal={closeEquipmentPhotoModal}
      >
        <AddEquipmentPhoto closeModal={closeEquipmentPhotoModal} />
      </CustomPopup>
    </>
  );
};

export default Inventory;
