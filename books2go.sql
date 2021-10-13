CREATE TABLE IF NOT EXISTS User_Info (
	user_id int,
	user_first_name varchar(100),
	user_last_name varchar(100),
	user_email varchar(350),
  user_password	varchar(350),
  user_address	varchar(100),
  user_address_2	varchar(100),
  user_city	varchar(50),
  user_state	varchar(50),
  user_zip_code	int,
  user_country	varchar(50)
)

CREATE TABLE IF NOT EXISTS books (
  book_id	int,
  name	varchar(500),
  isbn10	varchar(10),
  isbn13	varchar(13),
  quantity	int(9999),
  retail_price	int,
  price	int,
  author	varchar(100),
  discount_id	int
)

CREATE TABLE IF NOT EXISTS cart (
  cart_id	  int,
  user_id	  int,
  total_cost	int
)

CREATE TABLE IF NOT EXISTS cart_items (
  cart_items_id	  int,
  book_id	  int,
  cart_id	  int,
  quantity	int
)

CREATE TABLE IF NOT EXISTS order_info (
  order_id	int,
  total_cost	int,
  payment_id	int,
  user_id	int
)

CREATE TABLE IF NOT EXISTS order_items (
  order_item_id	int,
  order_id	int,
  book_id	int,
  quantity	int
)

CREATE TABLE IF NOT EXISTS discount (
  discount_id int,
  discouunt_percent decimal,
  current_sale boolean
)
