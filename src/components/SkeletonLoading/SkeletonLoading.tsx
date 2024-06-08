import { CSSProperties, FC, ReactNode } from 'react';

import TextSkeleton from './element/TextSkeleton';
import ImageSkeleton from './element/ImageSkeleton';
import DashboardItemSkeleton from './element/DashboardItemSkeleton';
import ListSkeleton from './element/ListSkeleton';
import DefaultSkeleton from './element/DefaultSkeleton';
import InventoryTableItemSkeleton from './element/InventoryTableItemSkeleton';
import EquipmentInfoSkeleton from './element/EquipmentInfoSkeleton';
import ChatMessage from './element/ChatMessage';
import ChatContact from './element/ChatContact';
import CalendarSkeleton from './element/CalendarSkeleton';

type ContentType =
  | 'text'
  | 'image'
  | 'list'
  | 'contacts'
  | 'message'
  | 'inventoryTableItem'
  | 'equipmentInfo'
  | 'calendar'
  | 'dashboardItem';

interface SkeletonLoadingProps {
  type?: ContentType;
  count?: number;
  isLoading: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

const SkeletonLoading: FC<SkeletonLoadingProps> = ({
  type,
  count = 1,
  isLoading,
  children,
  style,
}) => {
  if (isLoading) {
    switch (type) {
      case 'contacts':
        return <ChatContact />;
      case 'message':
        return <ChatMessage />;
      case 'text':
        return <TextSkeleton />;
      case 'image':
        return <ImageSkeleton />;
      case 'dashboardItem':
        return <DashboardItemSkeleton style={style} />;
      case 'list':
        return <ListSkeleton count={count} />;
      case 'calendar':
        return <CalendarSkeleton />;
      case 'inventoryTableItem':
        return <InventoryTableItemSkeleton />;
      case 'equipmentInfo':
        return <EquipmentInfoSkeleton />;
      default:
        return <DefaultSkeleton style={style} />;
    }
  }
  return <>{children}</>;
};

export default SkeletonLoading;
