export default (product) => {
   const { name, description, price, image, categoryId, storeId } = product;
   return {
      name,
      description,
      price,
      image,
      categoryId,
      storeId,
   };
};
