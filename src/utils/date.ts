export interface FormatToLocaleStringOptions {
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}

export const formatToLocaleString = (
  date: Date | string,
  { locale = 'en-US', options }: FormatToLocaleStringOptions = {},
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  return dateObj.toLocaleString(locale, options || defaultOptions);
};
