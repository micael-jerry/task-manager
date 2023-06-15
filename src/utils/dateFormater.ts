export const dateFormater = (dateStr: string): string => {
    const date = new Date(dateStr);

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      // second: '2-digit',
      hour12: false
    };
    let stringDate:string = date.toLocaleString("en-US", options)
    stringDate = stringDate.replace(',', '')
    return stringDate.replace(/\//g, '-');
};

export const stringToDate = (date: string): Date => {
  return new Date(date)
}
