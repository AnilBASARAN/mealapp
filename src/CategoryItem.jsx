const CategoryItem = (props) => {
  const { category } = props;

  return (
    <>
      
      
          <h2>{category.strCategory}</h2>
          <img src={category.strCategoryThumb} alt={category.strCategory} />
          <p>{category.strCategoryDescription}</p>
      
     
    </>
  );
};

export default CategoryItem;
