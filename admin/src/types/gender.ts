const Gender = {
  Male: 'MALE',
  Female: 'FEMALE',
  Other: 'OTHER',
};

type GenderType = (typeof Gender)[keyof typeof Gender];

export { Gender, GenderType };
