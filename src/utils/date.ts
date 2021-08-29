export const getDayPeriod = (date?: Date): string => {
  if (!date) date = new Date();

  const hours = date.getHours();

  if (hours >= 0 && hours < 6) return '凌晨';
  else if (hours >= 6 && hours < 10) return '上午';
  else if (hours >= 10 && hours < 13) return '中午';
  else if (hours >= 13 && hours < 18) return '下午';
  else return '晚上';
};

export const getWeekday = (date?: Date): string => {
  if (!date) date = new Date();

  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  return weekdays[date.getDay()];
};

