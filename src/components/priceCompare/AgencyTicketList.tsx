import { TicketListDto } from '../../types/ticketReservationInfo';
// eslint-disable-next-line import/order
import AgencyTicket from './AgencyTicket';

interface AgencyTicketListProps {
  ticketListData?: TicketListDto[];
}

const AgencyTicketList = (props: AgencyTicketListProps) => {
  const { ticketListData } = props;

  return <div>{ticketListData?.map((item) => <AgencyTicket key={item.ticketId} item={item} />)}</div>;
};

export default AgencyTicketList;
