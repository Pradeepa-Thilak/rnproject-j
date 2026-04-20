export const checkStock = (product) => {
  if (!product?.LastInStockOut) return true;

  const now = new Date();
  const lastOut = new Date(product.LastInStockOut.replace('', 'T'));
  console.log(now, lastOut);
  return now < lastOut;
};
