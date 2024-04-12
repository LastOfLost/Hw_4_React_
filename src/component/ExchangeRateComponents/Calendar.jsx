import React from 'react';
import { DatePicker, Space } from "antd";
import { useAppContext } from '../../utils/AppContext';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export default function Calendar() {

    const {
        setStartDate, setEndDate,
        startDate, endDate
    } = useAppContext();

    const handleGetDate = (e) => {
        setStartDate(e[0]['$d']);
        setEndDate(e[1]['$d']);
    };


    const disabledDate = (current) => {
        return current['$d'] > new Date() || 
        current['$d'] < new Date(2001, 1, 1);
      };

  return (
    <div>
        <Space direction="vertical" size={12} style={{marginBottom:'25px'}}>
            <RangePicker
            onChange={handleGetDate}
            disabledDate={disabledDate}
            defaultValue={[dayjs(startDate), dayjs(endDate)]}
            />
        </Space>
    </div>
  )
}

