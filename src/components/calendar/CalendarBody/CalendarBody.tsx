import { FC, useState, useEffect, useMemo } from 'react';
import moment, { Moment } from 'moment';
import Timeline, {
  TodayMarker,
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
// @ts-expect-error Missing declaration file for resize-detector/container
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';
import { useTranslation } from 'react-i18next';

import CalendarSearch from '../CalendarSearch/CalendarSearch';
import CalendarPopup from '../CalendarPopup';

import calendarData from '../calendarData';
import { CalendarItemType } from 'src/type/calendar';
import SkeletonLoading from 'src/components/SkeletonLoading';
import 'react-calendar-timeline/lib/Timeline.css';
import './CalendarBody.scss';

interface CalendarBodyProps {
  visibleTimeStart: Moment;
  visibleTimeEnd: Moment;
  handleTimeChange: (visibleTimeStart: number, visibleTimeEnd: number) => void;
}

const CalendarBody: FC<CalendarBodyProps> = ({
  visibleTimeStart,
  visibleTimeEnd,
  handleTimeChange,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = calendarData;
  const [activeItem, setActiveItem] = useState<CalendarItemType | null>(null);
  //Позиціонування Popup
  const [hoveredItemPosition, setHoveredItemPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  //Відслідковування zoom для DataHeader
  const [zoom, setZoom] = useState<number>(1);
  const [dayLabelFormat, setDayLabelFormat] = useState('dddd DD');
  const [timeSteps, setTimeSteps] = useState({
    second: 1,
    minute: 1,
    hour: 2,
    day: 1,
    month: 1,
    year: 1,
  });

  const defaultWeekDays = useMemo(() => [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ], []);

  const { t } = useTranslation();

  // Перевірка, чи різниця між start_time та end_time кожного елемента більше 3 годин
  const shouldApplyClipPath = (item: CalendarItemType) => {
    const startTime = moment(item.start_time);
    const endTime = moment(item.end_time);
    const diffHours = endTime.diff(startTime, 'hours');
    return diffHours > 4;
  };
  // Обчислити зум на основі видимого часу
  const calculateZoom = () => {
    const zoomLevel =
      (visibleTimeEnd.valueOf() - visibleTimeStart.valueOf()) / (1000 * 60 * 60 * 24); // Кількість днів
    setZoom(zoomLevel);
  };
  //Крок відображення годин
  const updateTimeSteps = (zoom: number) => {
    let hourStep;
    if (zoom >= 6) {
      hourStep = 6;
    } else if (zoom >= 4) {
      hourStep = 4;
    } else if (zoom >= 3) {
      hourStep = 3;
    } else if (zoom >= 2) {
      hourStep = 2;
    } else {
      hourStep = 1;
    }
    setTimeSteps({
      second: 1,
      minute: 1,
      hour: hourStep,
      day: 1,
      month: 1,
      year: 1,
    });
  };
  //Формат відображення днів
  const updateDayLabelFormat = (zoom: number) => {
    let format;
    if (zoom >= 5) {
      format = 'ddd DD';
    } else {
      format = 'dddd DD';
    }
    setDayLabelFormat(format);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  useEffect(() => {
    calculateZoom();
    updateTimeSteps(zoom);
    updateDayLabelFormat(zoom);
    //eslint-disable-next-line
  }, [zoom, visibleTimeStart, visibleTimeEnd]);

  //rerender exist element text for data format with localization
  useEffect(() => {
    const weekDays = document.querySelectorAll('.weekDay .rct-dateHeader span');
    weekDays.forEach(day => {
      const [firstRenderedValue, ...rest] = day.textContent?.split(' ') || [];
      if (firstRenderedValue && defaultWeekDays.includes(firstRenderedValue)) {
        day.textContent = `${t('Calendar.' + firstRenderedValue)} ${rest.join(' ')}`;
      }
    });
  }, [isLoading, visibleTimeStart, visibleTimeEnd, t, defaultWeekDays]);

  return (
    <div className="calendarBody">
      <SkeletonLoading isLoading={isLoading} type="calendar">
        <Timeline
          groups={data.groups}
          items={data.items}
          resizeDetector={containerResizeDetector}
          visibleTimeStart={visibleTimeStart.valueOf()}
          visibleTimeEnd={visibleTimeEnd.valueOf()}
          sidebarWidth={330} //ширина лівого меню
          lineHeight={56} //висота строки
          itemHeightRatio={0.9} //висота заброньованого планки
          minZoom={1000 * 60 * 60 * 24}
          maxZoom={1000 * 60 * 60 * 24 * 7}
          canMove={false} //можливість перетягування
          canResize={false} //можливість розтягувати
          itemTouchSendsClick
          traditionalZoom
          timeSteps={timeSteps} //кроки в DataHeader
          onTimeChange={handleTimeChange}
          itemRenderer={({ item, itemContext, getItemProps }) => {
            const { ...restProps } = getItemProps({});
            const currentItem = data.items.find(el => el.id === item.id);
            if (!currentItem) {
              return null;
            }
            const clipPathCondition = shouldApplyClipPath(currentItem);
            // Додаємо клас, якщо умова виконується
            const itemClassName = clipPathCondition ? 'rct-item-clipped' : '';
            return (
              <div
                {...restProps}
                className={`rct-item ${itemClassName}`}
                data-info={`title: ${currentItem?.title}, id: ${currentItem?.id}`}
                onMouseEnter={event => {
                  setActiveItem(item);
                  setHoveredItemPosition({
                    top: event.clientY,
                    left: event.clientX,
                  });
                }}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="rct-item-content">{itemContext.title}</div>
              </div>
            );
          }}
        >
          <TodayMarker date={moment().toDate()} interval={600000} />
          <TimelineHeaders>
            <SidebarHeader>
              {({ getRootProps }) => {
                return (
                  <div className="calendarBody__calendarSearch" {...getRootProps()}>
                    <CalendarSearch />
                  </div>
                );
              }}
            </SidebarHeader>
            <DateHeader unit="day" labelFormat={dayLabelFormat} className="weekDay" />
            <DateHeader unit="hour" labelFormat="HH" />
          </TimelineHeaders>
        </Timeline>
        {activeItem && (
          <CalendarPopup activeItem={activeItem} hoveredItemPosition={hoveredItemPosition} />
        )}
      </SkeletonLoading>
    </div>
  );
};

export default CalendarBody;
