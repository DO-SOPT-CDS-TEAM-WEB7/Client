import { TicketListDto } from '../../types/ticketReservationInfo';

interface AirlineTicketListProps {
  ticketListData?: TicketListDto[];
}

const AirlineTicketList = (props: AirlineTicketListProps) => {
  console.log(props);
  return <div>AirLineTicketList</div>;
};

export default AirlineTicketList;
