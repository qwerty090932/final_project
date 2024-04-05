DROP TABLE IF EXISTS company;
CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(40),
    type_activity VARCHAR(40),
    number_repsesentative VARCHAR(15)
);
INSERT INTO company (company_name, type_activity, number_repsesentative) VALUES
    ('ABC Shipping Co.','Логистика и доставка','+1-555-123-4567'),
    ('XYZ Law Firm','Юридические услуги','+1-555-876-5432'),
    ('Green Energy','Энергетические','+1-555-345-6789'),
    ('Tech Innovations Inc.','Инновации в технологиях',''),
    ('Fresh Food Delivery','Доставка свежих продуктов',''),
    ('Golden Asset','Управление активами','+1-555-654-3210'),
    ('Blue Sky Airlines','Воздушные перевозки','+1-555-789-0123'),
    ('Bright Events Planning','Организация мероприятий','+1-555-432-1098'),
    ('Sunflower Nursery','Цветочное производство','+1-555-210-9876');




DROP TABLE IF EXISTS post;
CREATE TABLE post(
   post_id SERIAL PRIMARY KEY,
   post_name VARCHAR(40)
);
INSERT INTO post (post_name) VALUES
    ('Дизайнер'),
    ('Юрист'),
    ('Администратор баз данных'),
    ('Главный инженер'),
    ('Финансовый аналитик'),
    ('Продавец'),
    ('Инженер'),
    ('Директор'),
    ('Менеджер по персоналу');




DROP TABLE IF EXISTS vacancy;
CREATE TABLE vacancy(
    vacancy_id SERIAL PRIMARY KEY,
    company_id INTEGER,
    post_id INTEGER,
    education VARCHAR(40),
    salary INTEGER,
    FOREIGN KEY (company_id) REFERENCES company (company_id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES post (post_id) ON DELETE CASCADE
);
INSERT INTO vacancy (company_id, post_id, education, salary) VALUES
 (1,1,'ВО',100000),
 (1,2,'ВО',50000),
 (1,3,'ВО',150000),
 (1,5,'СПО',200000),
 (2,6,'ДПО',70000),
 (3,4,'СПО',300000),
 (3,5,'ВО',80000),
 (4,3,'СПО',95000),
 (5,7,'СПО',35000);




DROP TABLE IF EXISTS candidate;
CREATE TABLE candidate(
    candidate_id SERIAL PRIMARY KEY,
    candidate_name VARCHAR(40),
    birthday DATE,
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES post (post_id) ON DELETE CASCADE
);
INSERT INTO candidate (candidate_name, birthday, post_id) VALUES
    ('Анна Иванова','15-03-1995',1),
    ('Петр Сидоров','22-06-1990',2),
    ('Александр Смирнов','05-04-1998',3),
    ('Елена Петрова','02-01-1992',4),
    ('Мария Кузнецова','26-06-2000',5),
    ('Никита Зайцев','16-11-1985',6),
    ('Мария Абрамова','12-10-1994',7),
    ('Ирина Николаева','31-07-1895',1);




DROP TABLE IF EXISTS deal;
CREATE TABLE deal(
    deal_id SERIAL PRIMARY KEY,
    vacancy_id INTEGER,
    candidate_id INTEGER,
    deal_date DATE,
    FOREIGN KEY (vacancy_id) REFERENCES vacancy (vacancy_id) ON DELETE CASCADE,
    FOREIGN KEY (candidate_id) REFERENCES candidate (candidate_id) ON DELETE CASCADE
);
INSERT INTO deal (vacancy_id, candidate_id, deal_date) VALUES
    (1,1,'05-04-2024'),
    (2,2,'10-01-2024'),
    (3,3,'12-12-2023'),
    (4,4,'11-11-2023'),
    (5,5,'10-10-2023');






