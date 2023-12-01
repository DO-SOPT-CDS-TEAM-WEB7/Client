const formatDate = (inputDate: Date): string => {
  const dateObject: Date = new Date(inputDate);

  const year: number = dateObject.getFullYear();
  const month: string = String(dateObject.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
  const day: string = String(dateObject.getDate()).padStart(2, '0');

  const formattedDate: string = `${year}-${month}-${day}`;
  return formattedDate;
};

export default formatDate;
