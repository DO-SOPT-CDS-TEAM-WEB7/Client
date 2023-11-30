import React, { useEffect } from 'react';
import styled from 'styled-components';

import { getTicketList } from '../../apis/getTicketList';
// eslint-disable-next-line import/order
import TicketItem from './TicketItem';

const DUMMY_TICKET = [
  {
    reservationId: 4,
    airName: '아시아나항공',
    startTime: {
      start: '9:10',
      end: '11:40',
      during: '2시간 30분',
    },
    endTime: {
      start: '13:00',
      end: '16:00',
      during: '3시간 00분',
    },
    price: '467,000',
    CO2: 28,
  },
  {
    reservationId: 1,
    airName: '대한항공',
    startTime: {
      start: '13:15',
      end: '16:05',
      during: '2시간 50분',
    },
    endTime: {
      start: '17:05',
      end: '11:15',
      during: '3시간 25분',
    },
    price: '467,100',
    CO2: 21,
  },
  {
    reservationId: 5,
    airName: '제주항공',
    startTime: {
      start: '10:05',
      end: '12:45',
      during: '2시간 40분',
    },
    endTime: {
      start: '14:00',
      end: '17:15',
      during: '3시간 15분',
    },
    price: '467,100',
    CO2: 25,
  },
  {
    reservationId: 6,
    airName: '에어부산',
    startTime: {
      start: '8:35',
      end: '11:15',
      during: '2시간 40분',
    },
    endTime: {
      start: '12:25',
      end: '15:45',
      during: '3시간 20분',
    },
    price: '467,100',
    CO2: 24,
  },
  {
    reservationId: 7,
    airName: 'Peach',
    startTime: {
      start: '8:35',
      end: '11:15',
      during: '2시간 40분',
    },
    endTime: {
      start: '12:25',
      end: '15:45',
      during: '3시간 20분',
    },
    price: '467,100',
    CO2: 20,
  },
  {
    reservationId: 8,
    airName: 'ANA (전일본공수)',
    startTime: {
      start: '8:35',
      end: '11:15',
      during: '2시간 40분',
    },
    endTime: {
      start: '13:00',
      end: '16:00',
      during: '3시간 00분',
    },
    price: '467,100',
    CO2: 22,
  },
  {
    reservationId: 2,
    airName: '에어서울',
    startTime: {
      start: '12:05',
      end: '15:00',
      during: '2시간 55분',
    },
    endTime: {
      start: '15:55',
      end: '19:10',
      during: '2시간 40분',
    },
    price: '467,200',
    CO2: 31,
  },
  {
    reservationId: 3,
    airName: '진에어',
    startTime: {
      start: '8:35',
      end: '11:15',
      during: '2시간 40분',
    },
    endTime: {
      start: '18:35',
      end: '11:15',
      during: '2시간 40분',
    },
    price: '467,300',
    CO2: 27,
  },
];

const Ticket = () => {
  // const getTickets = async () => {
  //   try {
  //     const requestBody = {
  //       startDate: '2023-11-13',
  //       endDate: '2023-11-15',
  //     };

  //     const {
  //       data: { data },
  //     } = await getTicketList(requestBody);
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getTickets();
  // }, []);

  return (
    <TicketContainer>
      {DUMMY_TICKET.map((item) => (
        <TicketItem
          key={item.reservationId}
          airName={item.airName}
          startTime={item.startTime}
          endTime={item.endTime}
          price={item.price}
          CO2={item.CO2}
        />
      ))}
    </TicketContainer>
  );
};

export default Ticket;

const TicketContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
`;
