import { useEffect, useState } from 'react';

import { getTicketList } from '../apis/getTicketList';
import SearchBar from '../components/common/SearchBar';
import AdvImg from '../components/ticketList/AdvImg';
import BackgroundImg from '../components/ticketList/BackgroundImg';
import DropDown from '../components/ticketList/DropDown';
import HotelCarousel from '../components/ticketList/HotelCarousel';
import Nav from '../components/ticketList/Nav';
import Ticket from '../components/ticketList/Ticket';
import { ReservationData } from '../types/ticketList';

const TicketList = () => {
  const [selectedAirName, setSelectedAirName] = useState<string[]>([]);
  const [ticketList, setTicketList] = useState<ReservationData[]>([]);
  const [filteredList, setFilteredList] = useState<ReservationData[]>([]);

  // 서버에서 티켓리스트 GET
  // 날짜 동적 변경 필요
  const getTickets = async () => {
    try {
      const params = {
        startDate: '2023-11-13',
        endDate: '2023-11-15',
      };

      const {
        data: { data },
      } = await getTicketList(params);
      setTicketList(data.reservationListDto);
      setFilteredList(data.reservationListDto);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  // 체크된 항공사 이름 저장
  const onClickCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const selectedName = inputElement.name;

    setSelectedAirName((prev) => {
      const isSelected = prev.includes(selectedName);

      if (isSelected) {
        return prev.filter((name) => name !== selectedName);
      } else {
        return [...prev, selectedName];
      }
    });
  };

  // 체크된 항공사 이름으로 받아온 티켓 필터링
  const onClickApplyBtn = () => {
    const filteredFlight = ticketList.filter((ticket) => selectedAirName.includes(ticket.airName));
    setFilteredList(filteredFlight);
  };
  console.log(ticketList);

  return (
    <>
      <Nav />
      <BackgroundImg />
      <SearchBar />
      <AdvImg />
      <DropDown checkboxHandler={onClickCheckbox} onClickApplyBtn={onClickApplyBtn}/>
      <Ticket rangeStart={0} rangeEnd={4} ticketList={filteredList}/>
      <HotelCarousel />
      <Ticket rangeStart={4} ticketList={filteredList}/>
    </>
  );
};

export default TicketList;
