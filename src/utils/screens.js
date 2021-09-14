const size = {
  mobileS: "320px",
  mobileSMax: "424px",
  mobileL: "425px",
  mobileLMax: "768px",
  tablet: "768px",
  tableMax: "1023px",
  desktop: "1024px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileSMax})`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.mobileLMax})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.tableMax})`,
  desktop: `(min-width: ${size.desktop})`,
};
