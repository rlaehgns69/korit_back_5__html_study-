/**
 * servlet 프로젝트명: product
 * group_id: com.study
 * aritifact_id: product
 * name: product
 * jdk: 11
 * dependencies
 * 1. lombok
 * 2. jsp
 * 3. Gson
 * 4. mysql
 * 
 * package
 * com.study.product
 *    config  - DBConfig
 *    dao     - ProductDao
 *    entity  - Product
 *    filter  - CommonFilter
 *    servlet 
 *            - InsertProductServlet(/product, POST)
 *            - SearchProductServlet(/products, GET)
 *  filter, servlet Encoding type, CORS
 * 
 * 
 * DB(db_study)
 * table(product_tb)
 * product_id, product_name(유니크), product_price, product_size(SS, S, M, L, XL, XXL)
 */ 
async function handleAddClick() {
  const productInputs = document.querySelectorAll(".product-inputs");

  const product = {
    productName: productInputs[0].value,
    productPrice: parseInt(productInputs[1].value), //inputs String
    productSize: productInputs[2].value
  }
try {
  const response = await fetch("http://localhost:8080/product/product", {
    method: "post",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw await response.json();
  }

  const responseData = await response.json();
  console.log(responseData);
  alert(`${responseData.successCount}건의 상품 추가 완료`);

} catch(error) {
  alert(error?.errorMessage);
  // 에러가 없을 때 null undefined 참조하지 않는다. error까지만 띄운다. ? 없으면 undefined
  // 응답이 제대로 왔는데 ok만 폴스 throw errorMessage
  // 이미 등록
}
  
}