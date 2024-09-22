export const Schedule = {
  Specific: 'SPECIFIC',
  Weekly: 'WEEKLY',
  HalfMonthly: 'HALF_MONTHLY',
  Monthly: 'MONTHLY',
  Irregular: 'IRREGULAR',
} as const;

export type ScheduleType = (typeof Schedule)[keyof typeof Schedule];
